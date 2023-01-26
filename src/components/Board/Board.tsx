import React, { FC, useState } from "react";

import "./Board.css";

const ROWS = 8;
const COLS = 8;

type Postion = number[];

const Board: FC = () => {
  const [activePosition, setActivePosition] = useState<Postion | null>(null);

  const generateBoard = () => {
    let chessBoard = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        let squareColor = (i + j) % 2 === 0 ? "white" : "black";
        let square = (
          <div className={`square ${squareColor}`} key={`${i}-${j}`} />
        );
        row.push(square);
      }
      let rowElem = (
        <div className="row" key={i}>
          {row}
        </div>
      );
      chessBoard.push(rowElem);
    }
    return <div className="chess-board">{chessBoard}</div>;
  };

  return generateBoard();
};
export default Board;
