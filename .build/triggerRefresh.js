const fs = require('fs');

const path = '../CameLION_TS_UI/public/updatePage.js';
let content = fs.readFileSync(path).toString();
content = content.replace(/const\s+magicValue\s*=\s*["'].*['"]/, `const magicValue = '${Math.random()}'`);
fs.writeFileSync(path, content);
