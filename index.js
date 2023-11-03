const http = require('http');
const fs = require('fs');
const path = require('path');

const cssDirectory = path.join(__dirname, 'css');
const texts = fs.readdirSync(cssDirectory)
  .filter(file => path.extname(file) === '.css')
  .map(file => fs.readFileSync(path.join(cssDirectory, file), 'utf8'));
texts.push('');

http.createServer((req, res) => {
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(randomText);
}).listen(process.env.PORT || 8080);