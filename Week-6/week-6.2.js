function spiralOrder(matrix) {
    const result = [];
    let topRow = 0, bottomRow = matrix.length - 1, leftCol = 0, rightCol = matrix[0].length - 1;
    
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse right
      for (let i = leftCol; i <= rightCol; i++) {
        result[result.length] = matrix[topRow][i];
      }
      topRow++;
      
      // Traverse down
      for (let i = topRow; i <= bottomRow; i++) {
        result[result.length] = matrix[i][rightCol];
      }
      rightCol--;
      
      // Traverse left
      if (topRow <= bottomRow) {
        for (let i = rightCol; i >= leftCol; i--) {
          result[result.length] = matrix[bottomRow][i];
        }
        bottomRow--;
      }
      
      // Traverse up
      if (leftCol <= rightCol) {
        for (let i = bottomRow; i >= topRow; i--) {
          result[result.length] = matrix[i][leftCol];
        }
        leftCol++;
      }
    }
    
    return result;
  }
  