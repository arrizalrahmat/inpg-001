const threeAB = (text) => {
  let indexOfA = 0;
  let indexOfB = 0;
  const newText = text.split(' ').join('');
  console.log(newText);
  for (let i = 0; i < newText.length; i++) {
    if (newText[i] !== ' ') {
      if (newText[i] === 'a') {
        indexOfA = i;
      }
      if (newText[i] === 'b') {
        indexOfB = i;
      }
    }
  }

  if (indexOfA && indexOfB) {
    if (Math.abs(indexOfA - indexOfB) <= 3) {
      return true;
    } else {
      return false;
    }
    // return Math.abs(indexOfA - indexOfB) <= 3;
  } else {
    return false;
  }
};

console.log(threeAB('laneeee borrowed'));
console.log(threeAB('i am sick'));
console.log(threeAB('you are boring'));
