var marked = require('marked');
var fs = require('fs');

var helpMD = fs.readFileSync('help.md', 'utf-8');
var markdownHelpMD = marked(helpMD);

fs.writeFileSync('./helpMD.html', markdownHelpMD);