"use strict";
document.addEventListener('DOMContentLoaded',function(){
    let player = 'X';
    let board = Array(9).fill(null);
    let gameover = false;
    const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],
    [2, 5, 8],[0, 4, 8],[2, 4, 6]];

    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');

    function handleClickSquare(event){
        const square = event.currentTarget;
        if(square.textContent === 'X' || square.textContent === 'O'){
            return;
        }

        square.textContent = player;
        square.classList.add(player);
        const index = square.getAttribute('data-index');
        board[index] = player;

        square.addEventListener('mouseenter',handleMouseHover);
        square.addEventListener('mouseleave',handleMouseDormant);
        square.classList.remove('hover');
        
        if (checkWinner(player)){
            displayWinner(player);
            gameover= true;
            squares.forEach(s => s.removeEventListener('click',handleClickSquare));
            return;
        }

        if(board.every(cell => cell !==null)){
            statusDiv.textContent = "Its a Draw!";
            gameover = true;
            return;
        }

        player = player === 'X'? 'O' : 'X';
    }

    function handleMouseHover(e){
        const square = e.currentTarget;
        const index = square.getAttribute('data-index');
        if (board[index] === null){
            square.classList.add('hover');
            square.classList.add(player);
        }
    }


    function handleMouseDormant(e){
        const square = e.currentTarget;
        square.classList.remove('hover');
        square.classList.remove('X','O');
    }

    function checkWinner(player){
        return winningCombos.some(combination =>{
            const [a,b,c] = combination;
            return board[a] === player && board[b] === player && board[c] === player;
        });
    }

    function displayWinner(winner){
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add('you-won');
    }

    squares.forEach(function(square,index){
        square.classList.add('square');
        square.setAttribute('data-index',index);
        square.addEventListener('click',handleClickSquare);
        square.addEventListener('mouseenter',handleMouseHover);
        square.addEventListener('mouseleave',handleMouseDormant);
    });  
});