function checkBrackets(someFn) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
  
    for (let char of someFn) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        const lastOpeningBracket = stack.pop();
        const expectedOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
  
        if (lastOpeningBracket !== expectedOpeningBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  const code1 = "function someFn() { if (true) { return 'Hello'; } }";
  const code2 = "function anotherFn() { if (false) { return 'World'; }";
  
  console.log(code1, checkBrackets(code1));
  console.log(code2, checkBrackets(code2));
  