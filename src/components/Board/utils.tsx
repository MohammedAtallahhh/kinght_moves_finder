import { Postion } from "./Board";

export const generateBoard = (
  activePosition: Postion | null,
  setActivePosition: React.Dispatch<React.SetStateAction<Postion | null>>,
  moves: Postion[] | null
) => {
  // determine whether a tile is active based on position
  const isActive = (i: number, j: number) =>
    activePosition && activePosition[0] === i && activePosition[1] === j;

  let chessBoard = [];

  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      let squareColor = (i + j) % 2 === 0 ? "white" : "black";
      let square = (
        <div
          className={`square ${squareColor} ${isActive(i, j) ? "active" : ""} ${
            moves?.some((move) => move[0] === i && move[1] === j)
              ? "possible-move"
              : ""
          }`}
          key={`${i}-${j}`}
          onClick={() => setActivePosition([i, j])}
        >
          {isActive(i, j) && <span className="knight">&#9822;</span>}
        </div>
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
