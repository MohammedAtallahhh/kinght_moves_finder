import Board from "./components/Board/Board";

function App() {
  return (
    <>
      <h2 className="title"> See How knight can move. </h2>
      <p className="info">
        Click on any tile and see what are the possible moves.
      </p>
      <Board />
    </>
  );
}

export default App;
