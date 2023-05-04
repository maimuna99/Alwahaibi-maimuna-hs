const fs = require("fs");
const path = require("path");

function tree(dir, depth = -1, prefix = "", isLast = true) {
  const padding = " ".repeat(depth >= 0 ? depth * 4 : 0);
  const connector = isLast ? "└── " : "├── ";
  const nextPrefix = prefix + (isLast ? "    " : "│   ");

  const items = fs.readdirSync(dir, { withFileTypes: true });

  let numDirs = 0;
  let numFiles = 0;

  items.forEach((item, index) => {
    const isLastItem = index === items.length - 1;
    const itemPath = path.join(dir, item.name);
    const itemPrefix = `${prefix}${isLast ? " " : "│"}   `;
    if (item.isDirectory()) {
      console.log(`${padding}${connector}${item.name}`);
      numDirs++;
      if (depth !== 0) {
        const subDirs = tree(itemPath, depth - 1, nextPrefix, isLastItem);
        numDirs += subDirs.numDirs;
        numFiles += subDirs.numFiles;
      }
    } else {
      console.log(`${padding}${itemPrefix}${connector}${item.name}`);
      numFiles++;
    }
  });

  return { numDirs, numFiles };
}


tree(process.cwd(), 2);
