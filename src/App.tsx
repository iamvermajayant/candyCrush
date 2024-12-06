
import { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { updateBoard } from './store';
import { createBoard } from './utils/createBoard';
import Board from './components/Board';
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from './utils/formulas';
import { checkForColumnOfThree, checkForRowOfFour, checkForRowOfThree, isColumnOfFour } from './utils/moveCheckLogic';

function App() {

  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(({ candyCrush: { boardSize } }) => boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
    //createBoard(boardSize);
    //console.log(createBoard(boardSize));
  }, [boardSize, dispatch])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize, true)
      );
      checkForColumnOfThree(
        newBoard,
        boardSize,
        formulaForColumnOfThree(boardSize)
      );
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      //dispatch(moveBelow());
    }, 150);
    return () => clearInterval(timeout);
  }, [board, dispatch, boardSize]);

  return (
    <div className='flex items-center justify-center h-screen'>
      <Board />
    </div>
  )
}

export default App
