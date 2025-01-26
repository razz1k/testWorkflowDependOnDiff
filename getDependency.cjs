const fs = require('fs');
const dependencyTree = require('dependency-tree');

const list = dependencyTree.toList({
  filter: path => path.indexOf('node_modules') === -1,
  filename: `${process.env.INPUT_FILE}`,
  directory: 'src'
});

fs.writeFile(`${process.env.INPUT_FILE}_tmp`, list.toString(), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
