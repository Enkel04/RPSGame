let rock = 1;
let paper = 2;
let scissors = 3;

const takeUserInput = function (userInput) {
  const computer = Math.trunc(Math.random() * 3) + 1;
  const winner = checkWinner(userInput, computer);
  document.querySelector('.whowins').textContent = winner;
  const computerChoice = computerInput(computer);
  document.querySelector('.computerchoice').textContent = computerChoice;
};

const checkWinner = function (user, computer) {
  if (
    (user === 1 && computer === 1) ||
    (user === 2 && computer === 2) ||
    (user === 3 && computer === 3)
  ) {
    return 'Draw!';
  } else if (user === 1 && computer === 3) {
    return 'User Won!';
  } else if (user === 2 && computer === 1) {
    return 'User Won!';
  } else if (user === 3 && computer === 2) {
    return 'User Won!';
  } else if (user === 3 && computer === 1) {
    return 'Computer Won!';
  } else if (user === 1 && computer === 2) {
    return 'Computer Won!';
  } else if (user === 2 && computer === 3) {
    return 'Computer Won!';
  }
};

const computerInput = function (computer) {
  if (computer === 1) {
    return 'Computer Choice: Rock';
  } else if (computer === 2) {
    return 'Computer Choice: Paper';
  } else if (computer === 3) {
    return 'Computer Choice: Scissors';
  }
};
