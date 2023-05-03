function tree(obj, depth = -1, prefix = "", isLast = true) {
  const padding = " ".repeat(depth >= 0 ? depth * 4 : 0);
  const connector = isLast ? "└── " : "├── ";
  const nextPrefix = prefix + (isLast ? "    " : "│   ");

  console.log(`${padding}${prefix}${connector}${obj.name}`);

  if (obj.items && depth !== 0) {
    const lastIndex = obj.items.length - 1;
    obj.items.forEach((item, index) => {
      const isLastItem = index === lastIndex;
      tree(item, depth - 1, nextPrefix, isLastItem);
    });
  }
}

const obj = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
};

tree(obj);
