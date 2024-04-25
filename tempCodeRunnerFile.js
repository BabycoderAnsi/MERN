let spaces = " ".repeat(rows - i+1);
      let pattern = "";
      for (let j = 0; j < i; j++) {
        pattern += symbols[j % symbols.length];
      }
      console.log(spaces + pattern + spaces);