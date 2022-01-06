import React from 'react'

function Cell({index, size, hoverCells, clickCell}) {
    return (
        <span
            style={{width: size + "px", height: size + "px"}}
            className={`cell ${ hoverCells[index] ? "cell__blue" : ""}`}
            onClick={() => clickCell(index)}
        >
        </span>
    )
}

export default Cell
