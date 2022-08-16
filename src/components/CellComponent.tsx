import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell,
    active: boolean,
    click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, active, click}) => {
    return (
        <div
            className={['cell', cell.color, (active ? 'active' : '')].join(' ')}
            onClick={(event) => click(cell)}
        >
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    );
};

export default CellComponent;
