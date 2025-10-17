"use strict";
document.addEventListener('DOMContentLoaded',function(){
    let player = 'X';
    let board = Array(9).fill(null);
    const squares = document.querySelectorAll('#board div');
    squares.forEach(function(square,index){
        square.classList.add('square');
        square.setAttribute('data-index',index);
        square.addEventListener('click',clickSquare);
    });
    function clickSquare(event){
        const square = event.currentTarget;
        if(square.textContent === 'X' || square.textContent === 'O'){
            return;
        }
        square.textContent = player;
        square.classList.add(player);
        const index = square.getAttribute('data-index');
        board[index] = player;
        player = player === 'X'? 'O' : 'X';
    }
});