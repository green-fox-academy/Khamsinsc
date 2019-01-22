

let matrix = function (matrixsize: number) {
    let data = [];
    for (let i = 0; i < matrixsize; i++) {
        data[i] = [0];
        for (let j = 0; j < matrixsize; j++) {
            if (i + j == matrixsize - 1) {
                data[i][j] = 1;
            } else {
                data[i][j] = 0;
            }
        }
    } return data;
}
console.log(matrix(5));
