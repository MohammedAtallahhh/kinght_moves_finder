import { FC, useState } from "react";

import { usePossibleMoves } from "./hooks";

import "./Board.css";

export type Postion = number[];

const Board: FC = () => {
  const [activePosition, setActivePosition] = useState<Postion | null>(null);

  const isActive = (i: number, j: number) =>
    activePosition && activePosition[0] === i && activePosition[1] === j;

  const possibleMoves = usePossibleMoves(activePosition);

  const className = (i: number, j: number) =>
    // Adding a className for each state of the tile
    `square ${(i + j) % 2 === 0 ? "white" : "black"} ${
      isActive(i, j) ? "active" : ""
    } ${
      possibleMoves?.some((move) => move[0] === i && move[1] === j)
        ? "possible-move"
        : ""
    }`.trim();

  return (
    <div className="chess-board">
      {Array(8)
        .fill(0)
        .map((_, i) =>
          Array(8)
            .fill(0)
            .map((_, j) => (
              <div
                className={className(i, j)}
                key={`${i}-${j}`}
                onClick={() => setActivePosition([i, j])}
              >
                {isActive(i, j) && <span className="knight">&#9822;</span>}
              </div>
            ))
        )}
    </div>
  );
};
export default Board;
