function equal(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
            if (i !== input.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === input[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === input[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equal([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)
