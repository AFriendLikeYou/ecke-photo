import fs from 'fs';
const blobs=JSON.parse(fs.readFileSync('blobs.json','utf8')); const out=fs.readFileSync('src.html','utf8').replace(/__BLOB(\d+)__/g,(m,i)=>blobs[+i]); fs.writeFileSync('udeg.html',out); console.log(out.length);
