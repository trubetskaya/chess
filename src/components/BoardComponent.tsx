import React, {FC, useState} from 'react';
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [activeCell, setActiveCell] = useState<Cell | null>(null);

    function onClickCell(cell: Cell): void {
        if (activeCell !== null) {
            if (activeCell.figure?.canMove(cell)) {

                cell.figure = activeCell.figure;
                cell.figure.cell = cell;

                activeCell.figure = null;

                setActiveCell(null);
            } else {
                // can not move
            }
        } else {
            if (cell.figure !== null) {
                setActiveCell(cell);
            } else {

            }
        }
    }

    return (
        <div>
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
