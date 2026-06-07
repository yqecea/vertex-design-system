# Asset Integration Guide

## Current Assets

### Wallpapers (131 files, ~329MB)
- **Desktop (16:9):** 59 wallpapers
- **Mobile (9:16):** 72 wallpapers
- **Formats:** PNG, JPEG, WebP
- **Location:** `assets/wallpapers/{desktop,mobile}/`

### SVG Assets (15 files)
- Industrial design elements (gauge arcs, PCB traces, isometric racks, etc.)
- **Location:** `assets/svg/`

## Adding New Assets

### Step 1: Place assets in incoming directory
```bash
# Create incoming directory
mkdir -p assets/incoming

# Copy your new assets here
# Supported formats: PNG, JPG, JPEG, WebP, SVG, GIF
```

### Step 2: Run asset processor
```bash
node scripts/asset-processor.js assets/incoming assets/
```

This will:
- Categorize by aspect ratio (desktop/mobile/square)
- Convert to WebP (if ffmpeg available)
- Generate thumbnails (25% size)
- Update `assets/ASSET_INVENTORY.md`
- Create `assets/manifest.json`

### Step 3: Update showcase
New assets will be automatically picked up by `showcase.html` if added to the manifest.

### Step 4: Rebuild
```bash
npm run build
```

### Step 5: Commit
```bash
git add assets/
git commit -m "assets: add new wallpaper collection"
git push
```

## Asset Organization

```
assets/
├── svg/                    # Industrial SVG elements
├── wallpapers/
│   ├── desktop/           # 16:9 aspect ratio
│   ├── mobile/            # 9:16 aspect ratio
│   └── extra/             # Additional collections
├── incoming/              # Temporary: new assets to process
├── manifest.json          # Auto-generated asset manifest
└── ASSET_INVENTORY.md    # Human-readable inventory
```

## Naming Convention

- Use kebab-case: `my-awesome-wallpaper.png`
- Include theme hint: `cosmic-nebula-dark.png`
- Include dimensions: `landscape-mountains-16x9.png`

## Optimization

- Original: Keep for editing
- WebP: 85% quality (production)
- Thumbnail: 75% quality, 25% size (previews)
- Estimated savings: 50-70% vs PNG

## Waiting for User Assets

Status: ⏳ Waiting for ~120 additional assets from user.
When ready, place them in `assets/incoming/` and run the processor.
