# bentear.info

## Quick Start

1. **Add your files:**
   - Put `MonumentGrotesk-Regular.woff2` in `/public/fonts/`
   - Put `reel.mp4` in `/public/`

2. **Install & run:**
   ```bash
   npm install
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   gh repo create bentear-site --private --push
   ```

2. Go to [vercel.com](https://vercel.com) → Import repo

3. Add domain: Settings → Domains → `bentear.info`

4. Update DNS at Persona.co:
   - Add `A` record: `@` → `76.76.21.21`
   - Add `CNAME` record: `www` → `cname.vercel-dns.com`

## File Structure

```
/public
  /fonts
    MonumentGrotesk-Regular.woff2   ← your font
  reel.mp4                          ← your video
/app
  globals.css                       ← all styles
  layout.tsx                        ← metadata
  page.tsx                          ← homepage + video modal
```
