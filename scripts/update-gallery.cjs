const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const pagePath = path.join(root, 'index.html');
let html = fs.readFileSync(pagePath, 'utf8');
let count = 0;
for (const [folder, title] of [['2025 December', 'December 2025'], ['2025', 'September 2025']]) {
 const files = fs.readdirSync(path.join(root, 'images', folder)).filter(f => /\.(jpe?g|png|webp|gif|avif|mp4|mov|webm|m4v)$/i.test(f)).sort((a,b) => a.localeCompare(b, undefined, {numeric:true}));
 const cards = files.map((name, i) => {
  const url = ['images',folder,name].map(encodeURIComponent).join('/');
  if (/\.(mp4|mov|webm|m4v)$/i.test(name)) return `<figure class="media-card"><video controls playsinline preload="metadata" aria-label="${title} video ${i+1}"><source src="${url}">Your browser cannot play this video.</video><figcaption><a href="${url}" target="_blank" rel="noopener">Open or download video</a></figcaption></figure>`;
  return `<figure class="media-card"><button class="photo-open" type="button" data-photo="${url}" aria-label="View ${title} photo ${i+1}"><img src="${url}" alt="Lesotho mission, ${title}, photo ${i+1}" loading="lazy" decoding="async"></button></figure>`;
 }).join('\n');
 const start = html.indexOf(`<section class="mission-album" aria-label="${title}">`);
 const end = html.indexOf('</section>', start) + '</section>'.length;
 if (start < 0 || end < start) throw new Error('Missing section: '+title);
 const section = `<section class="mission-album" aria-label="${title}"><h2 class="section-title">${title}</h2><p class="section-subtitle">Photos and videos from our mission</p><div class="media-grid">${cards}</div></section>`;
 html = html.slice(0,start) + section + html.slice(end);
 count += files.length;
 console.log(`${title}: ${files.length} media files`);
}
html = html.replace(/^        \.original-file[^\n]*\n/gm, '');
for (const [,js] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(js);
for (const [,url] of html.matchAll(/(?:src|href)="(images\/[^\"]+)"/g)) if (!fs.existsSync(path.join(root,decodeURIComponent(url)))) throw new Error('Missing '+url);
fs.writeFileSync(pagePath,html);
console.log(`Updated and verified ${count} media files.`);
