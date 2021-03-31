/*write a function that accepts an integer N
and returns a NxN spiral matrix */

function matrix(num) {
  let spiral = [];
  let index = 1;
  let startCol = 0;
  let startRow = 0;
  let endCol = num - 1;
  let endRow = num - 1;

  for (let n = 0; n < num; n++) {
    spiral.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let n = startCol; n <= endCol; n++) {
      spiral[startRow][n] = index;
      index++;
    }
    startRow++;

    for (let n = startRow; n <= endRow; n++) {
      spiral[n][endCol] = index;
      index++;
    }

    endCol--;

    for (let n = endCol; n >= startCol; n--) {
      spiral[endRow][n] = index;
      index++;
    }

    endRow--;

    for (let n = endRow; n >= startRow; n--) {
      spiral[n][startCol] = index;
      index++;
    }

    startCol++;
  }

  console.log(spiral);
}

matrix(3);
