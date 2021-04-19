/*
 * These are binary sequences assigned to each of the chess pieces,
 * calculated using the Huffman Trees 
 */
 let source;
 let update;
 let target;
 let desti;
let obj = document.querySelectorAll(".image")
const WHITE_PAWN = 0b000
const WHITE_ROOK = 0b010
const WHITE_KNIGHT = 0b1000
const WHITE_BISHOP = 0b1010
const WHITE_QUEEN = 0b1100
const WHITE_KING = 0b1110

const BLACK_PAWN = 0b001
const BLACK_ROOK = 0b011
const BLACK_KNIGHT = 0b1001
const BLACK_BISHOP = 0b1011
const BLACK_QUEEN = 0b1101
const BLACK_KING = 0b1111

/*
 * 0 for white
  * 1 for black
 */
var chosen_color = 0

if(chosen_color) {  // When its is black
    var board = [
        [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
        [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
        [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK]
    ]
} else {    // When it is white
    var board = [
        [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
        [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
        [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK]
    ]
}

// for(i = 0; i < 8; i++) {
//     for (j = 0; j < 8; j++) {
//         console.log(board[i][j])
//     }
//  1111arya()=>{for(let cell of obj)
for (let piece of obj) {    
    piece.addEventListener('dragstart', (e) => {
        source = e.target.id;                  //the id of the source

        update = piece.getAttribute("src")  
        // console.log(update)
        // piece.setAttribute("src","")      //src is attribute of img tag
    })

}
//this will work when the source piece will get dropped on the destination.
for (let piece of obj) {
    piece.addEventListener('dragend', (e) => {


        // if (e.target.id != desti)
        //     candies.indexOf(temp)
        // let x = parseInt(e.target.id) - 1;
        // check[Math.floor(x / 6)][x % 6] = candies.indexOf(temp);
        // e.target.setAttribute("src", update);
        // let_us();
        // let_us_col();
        document.getElementById(source).setAttribute("src","p.png")
    })
}

for (let piece of obj) {
    piece.addEventListener('dragover', (e) => {


        // if (e.target.id != desti)
        //     candies.indexOf(temp)
        // let x = parseInt(e.target.id) - 1;
        // check[Math.floor(x / 6)][x % 6] = candies.indexOf(temp);
        e.preventDefault();

        // e.target.setAttribute("src", update);
        // let_us();
        // let_us_col();
    })
}
for (let piece of obj)
{
    piece.addEventListener('drop',(e) => {
        e.preventDefault()
        e.target.setAttribute("src",update)
    })
}