function Toeplitz(matrix) {
    let map = new Map();

    for(let i = 0; i< matrix.length; i++){
        let currentRow = matrix[i];
        for(let j = 0; j< currentRow.length; j++) {
            let currentCol = currentRow[j];
            if(!map.has(i - j)) {
                map.set(i - j, currentCol);
            } else if(map.get(i - j) !== currentCol)
                return false;
        }
    }
    return true;
}

module.exports = Toeplitz;
