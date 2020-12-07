let size = 5;
let i;

for (i = 0; i < size; i++) {
  console.log("*****");
  if (size === i) {
    console.log("");
  }
}

function printSquare(rows, columns) {
  for (i = 0; i <= rows; i++) {
    for (j = 0; j <= columns; j++) {
      console.log("*****");
    }
    console.log("");
  }
}
printSquare(4, 4);
