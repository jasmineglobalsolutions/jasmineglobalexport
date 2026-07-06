const fs = require('fs');
const html = fs.readFileSync('D:/jasmineglobalexport/jasmine_global_hilux_variants_homepage.html', 'utf-8');
const match = html.match(/<section class="hero">[\s\S]*?<img src="data:image\/(.*?);base64,(.*?)"/);
if (match) {
  const ext = match[1];
  const b64 = match[2];
  fs.writeFileSync('D:/jasmineglobalexport/jasmineglobalexport/public/images/hero-3-trucks.' + ext, Buffer.from(b64, 'base64'));
  console.log('Saved hero-3-trucks.' + ext);
} else {
  console.log('No base64 image found in hero section');
}
