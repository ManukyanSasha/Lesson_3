var matrix = [];
var n = 80;
var m = 80;
var side = 10;
// function setup() {
// for (var y = 0; y < n; y++) {
//     matrix[y] = [];
//     for (var x = 0; x < m; x++) {
//         matrix[y][x] = random([0, 0, 0, 1, 1, 1, 2]);
//     }
//     }
//     console.log(matrix);
//     createCanvas(n * side, m * side);
//     background('#acacac');
// }
// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[0].length; x++) {
//             if (matrix[y][x] === 0) {
//                 fill('green');
//                 rect(x*side, y*side, side, side);
//             }
//             else if (matrix[y][x] === 1) {
//                 fill('yellow');
//                 rect(x*side, y*side, side, side);
//             }
//             else {
//                 fill('gray');
//                 rect(x*side, y*side, side, side);
//             }
//         }
//     }
// }

//////



// var side = 50;

function setup() {


    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2,2, 3, 3, 3, 4, 4]);

        }
    }
    // matrix = [
    //     [0, 0, 1, 0, 3],
    //     [1, 0, 3, 0, 0],
    //     [0, 1, 0, 0, 0],
    //     [0, 0, 1, 2, 0],
    //     [1, 1, 1, 0, 0],
    //     [1, 1, 1, 0, 2],
    //     [1, 1, 4, 4, 0]
    // ];


    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new Eater(x, y, 2);
            }
            else if(matrix[y][x] == 3){
                matrix[y][x] = new Predator(x,y,3);
            }
            else if(matrix[y][x] == 4){
                matrix[y][x] = new Flower(x,y,4);
            }
            else if(matrix[y][x]==5){
                matrix[y][x] = new Bee(x, y, 5);
            }
        }
    }
    console.log(matrix);

}
function draw() {
    background('#acacac')


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].active = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x].index == 3){
                fill("red");
                rect(x*side, y*side, side, side);
                matrix[y][x].active = false;
            }
            else if(matrix[y][x].index == 4){
                fill("black");
                rect(x*side, y*side, side, side);
            }
            else if(matrix[y][x].index == 5){
                fill("pink");
                rect(x*side, y*side, side, side);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if(matrix[y][x].index == 3){
                matrix[y][x].eat();
            }
            else if(matrix[y][x].index == 4){
                matrix[y][x].eat();
            }
            else if(matrix[y][x].index == 5){
                matrix[y][x].move();
            }
        }
    }
}

