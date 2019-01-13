/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  // iterate through each row
  // iterate through each col
  // test if there are any conflicts in [row][column]
  // if it does, continue;
  // else, togglePiece in [row][col] position

  if (n === 1) {
    solution.togglePiece(0, 0);
  } else {
    for (var row = 0; row < solution.rows().length; row++) {
      for (var col = 0; col < solution.rows().length; col++) {
        solution.togglePiece(row, col);
        if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col)) {
          solution.togglePiece(row, col);
        }
      }
    }
  }
  return solution.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return;
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
