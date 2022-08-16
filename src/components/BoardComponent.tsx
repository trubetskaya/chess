import React, {FC, useState} from 'react';
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";;

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    activePlayer: Player;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, activePlayer, swapPlayer}) => {

    const [activeCell, setActiveCell] = useState<Cell | null>(null);

    function onClickCell(cell: Cell): void {
        if (activeCell !== null) {
            if (activeCell.figure?.canMove(cell)) {
                activeCell.moveFigure(cell);
                setActiveCell(null);
                swapPlayer();
                return;
            }
        }
        if (cell.figure !== null && cell.figure?.color === activePlayer?.color) {
            setActiveCell(cell);
        }
    }

    return (
        <div>

            <div className="active-player">Active player: {activePlayer.color}</div>

            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                key={cell.id}
                                cell={cell}
                                active={activeCell?.id === cell.id}
                                click={onClickCell}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );

}

export default BoardComponent;
