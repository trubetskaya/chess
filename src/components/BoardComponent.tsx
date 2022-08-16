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
        console.log('onClickCell');
        console.log(activeCell);

        setActiveCell(cell);
        if (activeCell !== null) {
            // if (cell.figure.canMove) implement the step + killing the enemy's figure
            // else implement that the cell is unavailable
            // calculate enemy's check and mat
        } else {
            setActiveCell(cell);
            // console.log(activeCell);
        }
    }

    return (
        <div>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
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
