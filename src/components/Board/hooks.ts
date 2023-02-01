import { useState, useCallback, useEffect } from "react";

import { Postion } from "./Board";

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

export const usePossibleMoves = (activePosition: Postion | null) => {
  const [moves, setMoves] = useState<Postion[] | null>(null);

  const findPossibleMoves = useCallback(() => {
    if (!activePosition) return null;

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
  }, [activePosition, findPossibleMoves]);

  return moves;
};
