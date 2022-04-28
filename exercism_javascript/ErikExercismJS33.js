//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {

    if(n === 0) return [];
  
    const rows = [[1]];
  
    for(let i = 1; i < n; i++) {
  
      const row = [1];
  
      for(let j = 1; j < i; j++) {
  
        row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
  
      }
  
      row.push(1);
      rows.push(row);
  
    }
  
    return rows;
  
  };           