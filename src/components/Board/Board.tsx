import React, { FC, useState, useEffect, useCallback } from "react";

import "./Board.css";
import { generateBoard } from "./utils";

export type Postion = number[];

const KNIGHT_MOVES = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];
const Board: FC = () => {
  const [activePosition, setActivePosition] = useState<Postion | null>(null);
  const [board, setBoard] = useState(<></>);
  const [moves, setMoves] = useState<Postion[] | null>(null);

  const findPossibleMoves = useCallback(() => {
    if (!activePosition) return;

    let knightMoves = KNIGHT_MOVES
      // First we add every move to the current postion
      .map((m) => [activePosition[0] + m[0], activePosition[1] + m[1]])
      // Then we filter out negative and larger than 7 postions as they are out of the board
      .filter((m) => m[0] >= 0 && m[1] >= 0 && m[0] <= 7 && m[1] <= 7);

    return knightMoves;
  }, [activePosition]);

  useEffect(() => {
    // Finding knight moves on every postion change
    const newMoves = findPossibleMoves() as Postion[];
    setMoves(newMoves);

    // creating new board with the new active position and corresponding moves
    const board = generateBoard(activePosition, setActivePosition, newMoves);
    setBoard(board);
  }, [activePosition, findPossibleMoves]);

  return board;
};
export default Board;
