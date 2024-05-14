function getElementWidth(content, padding, border) {
  const paddings = Number.parseFloat(padding) * 2
  const borders = Number.parseFloat(border) * 2

  return Number.parseFloat(content) + paddings + borders;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
