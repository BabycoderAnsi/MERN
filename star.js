function generateTrianglePattern(rows, symbols) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows);
      let pattern = "";
      for (let j = 0; j < i; j++) {
        pattern += symbols[j % symbols.length];
      }
      console.log(spaces + pattern + spaces);
    }
  }
  const string = " @ & *";
  const n = 12;
  const symbols = string.split("");
  generateTrianglePattern(n, symbols);
  console.log("  !  ")
  console.log("  !  ")