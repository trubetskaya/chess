import React, {useEffect, useState} from 'react';
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Color} from "./models/Color";
import {Player} from "./models/Player";

const App = () => {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Color.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Color.BLACK))
    const [activePlayer, setActivePlayer] = useState<Player>(whitePlayer);

    useEffect(() => {
        restart();
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.initFigures();
        setBoard(newBoard);
    }

    function swapPlayer(): void {
        setActivePlayer((activePlayer.color === Color.BLACK) ? whitePlayer:blackPlayer);
    }

    return (
        <div className="App">
            <BoardComponent
                board={board}
                setBoard={setBoard}
                activePlayer={activePlayer}
                swapPlayer={swapPlayer}
            />
        </div>
    );
};

export default App;
