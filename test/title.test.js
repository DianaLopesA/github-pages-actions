const fs = require('fs');
const path = require('path');

test('docs/index.html contains a title tag', () => {
  const filePath = path.join(__dirname, '../docs/index.html');
  const content = fs.readFileSync(filePath, 'utf-8');
  expect(content).toMatch(/<title>.*<\/title>/);
});
