export default (player, boardSquareNum) => {
  let {
    topRow,
    middleRow,
    bottomRow,
    leftColumn,
    middleColumn,
    rightColumn,
    leftDiagonal,
    rightDiagonal,
  } = player.moves;
  switch (boardSquareNum) {
    case 1:
      topRow++;
      leftColumn++;
      leftDiagonal++;
      break;
    case 2:
      topRow++;
      middleColumn++;
      break;
    case 3:
      topRow++;
      rightColumn++;
      rightDiagonal++;
      break;
    case 4:
      middleRow++;
      leftColumn++;
      break;
    case 5:
      middleRow++;
      middleColumn++;
      leftDiagonal++;
      rightDiagonal++;
      break;
    case 6:
      middleRow++;
      rightColumn++;
      break;
    case 7:
      bottomRow++;
      leftColumn++;
      rightDiagonal++;
      break;
    case 8:
      bottomRow++;
      middleColumn++;
      break;
    case 9:
      bottomRow++;
      rightColumn++;
      leftDiagonal++;
      break;
    default:
      break;
  }
  const moves = {
    topRow,
    middleRow,
    bottomRow,
    leftColumn,
    middleColumn,
    rightColumn,
    leftDiagonal,
    rightDiagonal,
  };
  player.moves = moves;
  return player;
};
