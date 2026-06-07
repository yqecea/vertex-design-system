#!/usr/bin/env node
/**
 * Vertex Industrial Design System — Build Script
 * Concatenates all CSS files into dist/vertex-industrial.css
 * Zero dependencies — uses only Node.js built-in modules
 */

const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const isMinify = process.argv.includes('--minify');

// Build order: tokens → materials → layouts → components
const files = [
  // Tokens
  'src/tokens/reset.css',
  'src/tokens/colors.css',
  'src/tokens/typography.css',
  'src/tokens/spacing.css',
  'src/tokens/motion.css',
  'src/tokens/shape.css',
  'src/tokens/glass.css',
  'src/tokens/glass-advanced.css',
  'src/tokens/liquid-glass.css',
  'src/tokens/glass-performance.css',
  'src/tokens/icons.css',
  'src/tokens/cyrillic.css',
  'src/tokens/z-index.css',
  // Materials
  'src/materials/machining.css',
  'src/materials/plating.css',
  'src/materials/welding.css',
  'src/materials/casting.css',
  'src/materials/calibrating.css',
  'src/materials/printing.css',
  // Layouts
  'src/layouts/boxed.css',
  'src/layouts/full-bleed.css',
  'src/layouts/split.css',
  'src/layouts/document.css',
];

// Components — read all .css files from src/components/ directory
const componentsDir = path.join(BASE, 'src/components');
const componentFiles = fs.readdirSync(componentsDir)
  .filter(f => f.endsWith('.css'))
  .sort();

const allFiles = [...files, ...componentFiles.map(f => `src/components/${f}`)];

// Build
let output = '/* Vertex Industrial Design System v1.0.0 | Built CSS */\n';
output += `/* Files: ${allFiles.length} */\n\n`;

for (const file of allFiles) {
  const filePath = path.join(BASE, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Missing: ${file}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Simple minification
  if (isMinify) {
    content = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
      .replace(/\s+/g, ' ')              // Collapse whitespace
      .replace(/;\s*}/g, '}')            // Remove last semicolon
      .replace(/\s*{\s*/g, '{')          // Clean braces
      .replace(/;\s*/g, ';')             // Clean semicolons
      .trim();
  }
  
  output += `/* === ${file} === */\n`;
  output += content;
  output += '\n\n';
}

// Write output
const distDir = path.join(BASE, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const outputPath = path.join(distDir, 'vertex-industrial.css');
fs.writeFileSync(outputPath, output);

const stats = fs.statSync(outputPath);
console.log(`✅ Built: dist/vertex-industrial.css`);
console.log(`   Size: ${(stats.size / 1024).toFixed(1)} KB`);
console.log(`   Files: ${allFiles.length}`);
console.log(`   Minified: ${isMinify ? 'yes' : 'no'}`);

// Also write a dev-imports.html snippet for convenience
const devLinks = allFiles.map(f => `<link rel="stylesheet" href="../${f}">`).join('\n');
fs.writeFileSync(path.join(BASE, 'dist', 'dev-imports.html'), devLinks);
console.log(`   Dev imports: dist/dev-imports.html`);
