const string = "@*&";
const symbols = string.split();
const n = 3;
const rows = [];
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + string.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(rows - i+1);
  for (let j = 0; j < i; j++) {
    rows += symbols[j % symbols.length];
  }
  console.log(spaces + rows + spaces);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
console.log("  !  ")
console.log("  !  ")
// const string = "@*&";
// const symbols = [...string];
// const n = 3;
// const rows = "";
// const spaces = "  ";
// const padding = 5; // number of spaces to add to the beginning of each row

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + string.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }
// for (let i = 0; i < 5; i++) {
//   let rows = "";
//   for (let j = 0; j < i; j++) {
//     rows += symbols[j % symbols.length];
//   }
//   console.log(spaces + rows + spaces);
//   rows = "";
// }

// console.log("   !  ")
// console.log("   !  ")
