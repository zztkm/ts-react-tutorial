import React from 'react';
import { ISquare } from "../interface";

interface SquareProps {
    value: ISquare;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;