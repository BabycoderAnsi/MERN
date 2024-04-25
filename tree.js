function generateTrianglePattern(rows, symbols) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let pattern = "";
      for (let j = 0; j < i; j++) {
        pattern += symbols[j % symbols.length];
      }
      console.log(spaces + pattern);
    }
  }

  const rows = 5;
  
  // Symbols to be used in the pattern
  
  const symbols = ["*", "#", "@"];
  
  // Call the function to generate the pattern
  
  generateTrianglePattern(rows, symbols);