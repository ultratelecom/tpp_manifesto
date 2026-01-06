# TPP Manifesto - Spacing & Layout Guidelines

## ⚠️ MANDATORY RULES - NEVER VIOLATE

These rules are NON-NEGOTIABLE for this project. Any code changes MUST follow these guidelines.

---

## 1. INVISIBLE SPACER DIVS - THE ONLY WAY TO ADD SPACE

### ✅ CORRECT - Use invisible div spacers
```tsx
<h2>Our Vision</h2>

{/* SPACE */}
<div className="h-16" />

<p>Description text here</p>

{/* SPACE */}
<div className="h-24" />

<div className="grid">...</div>
```

### ❌ WRONG - Never use margin classes alone
```tsx
// BAD - margins get compressed, inconsistent
<h2 className="mb-8">Our Vision</h2>
<p className="mb-12">Description</p>
```

### ❌ WRONG - Never use blue bars/lines as spacers
```tsx
// BAD - looks terrible, unprofessional
<div className="w-24 h-1 bg-[var(--tpp-blue)]" />
```

---

## 2. MINIMUM SPACING REQUIREMENTS

| Between Elements | Minimum Height |
|-----------------|----------------|
| Title → Subtitle | `h-6` (24px) |
| Subtitle → Body text | `h-8` (32px) |
| Body text → Next section | `h-12` to `h-16` |
| Major content blocks | `h-20` to `h-24` |
| Before grid/card layouts | `h-16` to `h-24` |

### Spacing Scale Reference
- `h-4` = 16px (tight, only for closely related items)
- `h-6` = 24px (small gap)
- `h-8` = 32px (standard gap)
- `h-12` = 48px (medium section gap)
- `h-16` = 64px (large section gap)
- `h-20` = 80px (major section gap)
- `h-24` = 96px (huge gap, between major blocks)

---

## 3. CENTERING RULES

### For card/column layouts with images + text:
```tsx
// ✅ CORRECT - flex column with items-center
<div className="flex flex-col items-center text-center">
  <div className="relative w-32 h-32">
    <Image ... />
  </div>
  
  <div className="h-8" />
  
  <h3>Title</h3>
  
  <div className="h-4" />
  
  <p>Description</p>
</div>
```

### For slide content containers:
```tsx
// ✅ CORRECT - centered flex container
<div className="flex flex-col items-center justify-center w-full h-full px-20">
  {/* Content */}
</div>
```

---

## 4. NO UNNECESSARY BOXES/BACKGROUNDS

### ❌ NEVER add these unless explicitly requested:
- Colored backgrounds behind text
- Border boxes around content
- Blue/grey card backgrounds
- Gradient overlays on text areas

### ✅ CORRECT approach:
- Text on clean white background
- No borders, no boxes
- Only use backgrounds on IMAGES (with subtle overlays if needed)

---

## 5. SLIDE STRUCTURE TEMPLATE

Every slide MUST follow this structure:

```tsx
export default function ExampleSlide() {
  return (
    <section id="example" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        
        {/* Section label (optional) */}
        <div className="text-[color] font-semibold text-lg tracking-wide uppercase">
          Category Label
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2 className="text-5xl lg:text-7xl font-bold text-center">
          Main Heading
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle/description */}
        <p className="text-xl text-center max-w-3xl">
          Description text
        </p>

        {/* SPACE - larger before major content */}
        <div className="h-20" />

        {/* Grid/Cards */}
        <div className="grid grid-cols-3 gap-12">
          {items.map(item => (
            <div key={item.id} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-36 h-36">
                <Image ... />
              </div>
              
              {/* SPACE */}
              <div className="h-8" />
              
              {/* Text content */}
              <h3>...</h3>
              
              <div className="h-4" />
              
              <p>...</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

---

## 6. FRAMER MOTION / THREE.JS RULES (When Reintroduced)

### Rule 1: Animation components must NEVER affect layout
```tsx
// ✅ CORRECT - absolute positioning, no layout impact
<motion.div className="absolute inset-0 pointer-events-none -z-10">
  {/* Background animation */}
</motion.div>
```

### Rule 2: Always use pointer-events-none on background elements
```tsx
className="pointer-events-none"
```

### Rule 3: Background animations must be BEHIND content
```tsx
// Use negative z-index
className="-z-10"
// OR
style={{ zIndex: -1 }}
```

### Rule 4: Never animate layout properties that affect spacing
```tsx
// ❌ BAD - affects layout
animate={{ margin: "20px", padding: "10px" }}

// ✅ GOOD - only visual properties
animate={{ opacity: 1, scale: 1, x: 0 }}
```

### Rule 5: Three.js canvas must be absolutely positioned
```tsx
<Canvas className="absolute inset-0 -z-10 pointer-events-none">
  {/* 3D content */}
</Canvas>
```

---

## 7. PRE-COMMIT CHECKLIST

Before any code is committed, verify:

- [ ] Every heading has a spacer div below it
- [ ] Every paragraph has a spacer div below it
- [ ] Grid/card layouts have spacer divs above them
- [ ] All card content uses `flex flex-col items-center`
- [ ] No colored boxes/backgrounds behind text
- [ ] No blue separator bars (except Hero if approved)
- [ ] All images are centered with their associated text
- [ ] Slide padding is `px-20`
- [ ] Background animations are absolutely positioned with `-z-10`

---

## 8. QUICK REFERENCE - SPACING COMMENTS

Always include comments to make spacing visible:

```tsx
{/* SPACE */}
<div className="h-16" />
```

This makes it immediately clear that spacing is intentional and where it exists.

---

## Summary

1. **INVISIBLE SPACERS ONLY** - Use `<div className="h-X" />` for ALL spacing
2. **GENEROUS SPACING** - Minimum `h-6` between ANY two text elements
3. **CENTER EVERYTHING** - Use `flex flex-col items-center` on all card containers
4. **NO BOXES** - Text on clean white, no backgrounds
5. **ANIMATIONS BEHIND** - Always `absolute`, `-z-10`, `pointer-events-none`

**When in doubt: ADD MORE SPACE, NOT LESS.**

