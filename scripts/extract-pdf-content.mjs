/**
 * PDF Content Extraction Script
 * Extracts text and images from each page of the TPP Pathway PDF
 * Outputs a JSON file with structured content for native React rendering
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { extractText, extractImages, getDocumentProxy } from 'unpdf';
import sharp from 'sharp';
import path from 'node:path';

const PDF_PATH = '../../tpp_pathway.pdf';
const OUTPUT_DIR = './public/extracted';
const OUTPUT_JSON = './src/data/pathway-content.json';

async function extractPdfContent() {
  console.log('📄 Starting PDF extraction...\n');

  // Ensure output directories exist
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir('./src/data', { recursive: true });

  // Read PDF
  const pdfBuffer = await readFile(path.resolve(import.meta.dirname, PDF_PATH));
  const pdf = await getDocumentProxy(new Uint8Array(pdfBuffer));
  
  const totalPages = pdf.numPages;
  console.log(`📖 Found ${totalPages} pages\n`);

  // Extract text from all pages
  console.log('📝 Extracting text...');
  const textResult = await extractText(pdf, { mergePages: false });
  
  const pages = [];

  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    console.log(`  Processing page ${pageNum}/${totalPages}...`);
    
    const pageData = {
      pageNumber: pageNum,
      text: textResult.text[pageNum - 1] || '',
      images: []
    };

    // Extract images from this page
    try {
      const imagesData = await extractImages(pdf, pageNum);
      
      for (let i = 0; i < imagesData.length; i++) {
        const img = imagesData[i];
        
        // Only save images that are significant (not tiny icons)
        if (img.width > 50 && img.height > 50) {
          const filename = `page-${pageNum.toString().padStart(2, '0')}-img-${i + 1}.png`;
          const filepath = path.join(OUTPUT_DIR, filename);
          
          // Save image using sharp
          await sharp(img.data, {
            raw: {
              width: img.width,
              height: img.height,
              channels: img.channels
            }
          })
            .png()
            .toFile(filepath);
          
          pageData.images.push({
            filename,
            path: `/extracted/${filename}`,
            width: img.width,
            height: img.height
          });
        }
      }
    } catch (err) {
      // Some pages may not have extractable images
      console.log(`    (No images on page ${pageNum})`);
    }

    pages.push(pageData);
  }

  // Write JSON output
  const output = {
    title: 'TPP Pathway - Policy Mandate',
    totalPages,
    extractedAt: new Date().toISOString(),
    pages
  };

  await writeFile(OUTPUT_JSON, JSON.stringify(output, null, 2));
  
  console.log('\n✅ Extraction complete!');
  console.log(`   📄 ${totalPages} pages processed`);
  console.log(`   📁 Images saved to: ${OUTPUT_DIR}`);
  console.log(`   📋 JSON saved to: ${OUTPUT_JSON}`);
}

extractPdfContent().catch(console.error);

