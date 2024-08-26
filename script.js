let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let msgContent = document.querySelector(".msg_content");
let msg = document.querySelector("#msg");

let turnO = true;    //plyar x, player y

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContent.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    };
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContent.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for (let pattern of winPatterns){

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" &&posval3 !="") {
            if(posval1 === posval2 && posval2 === posval3){     
                showWinner(posval1);
            };
        };
    };
}

resetbtn.addEventListener("click", resetGame);