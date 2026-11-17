import fs from 'fs';
const src=fs.readFileSync(process.argv[2],'utf8'); const blobs=[]; 
const out=src.replace(/data:[a-z0-9\/+.-]+;base64,[A-Za-z0-9+\/=]{2000,}/g,m=>{blobs.push(m);return '__BLOB'+(blobs.length-1)+'__';});
fs.writeFileSync('src.html',out); fs.writeFileSync('blobs.json',JSON.stringify(blobs)); console.log(src.length,out.length,blobs.length,out.split('\n').length);
