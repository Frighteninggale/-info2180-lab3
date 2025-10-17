"use strict";
document.addEventListener('DOMContentLoaded',function(){
    let player = 'X';
    let board = Array(9).fill(null);
    const squares = document.querySelectorAll('#board div');

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

    squares.forEach(function(square,index){
        square.classList.add('square');
        square.setAttribute('data-index',index);
        square.addEventListener('click',handleClickSquare);
        square.addEventListener('mouseenter',handleMouseHover);
        square.addEventListener('mouseleave',handleMouseDormant);
    });  
});