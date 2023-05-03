function tree(node, prefix = "") {
  console.log(prefix + node.name);
  if (node.items) {
    node.items.forEach((child, index) => {
      const isLastChild = index === node.items.length - 1;
      const newPrefix = prefix + (isLastChild ? "    " : "│   ");
      tree(child, newPrefix + "├── ");
    });
  }
}

const hierarchicalObject = {
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

tree(hierarchicalObject);
