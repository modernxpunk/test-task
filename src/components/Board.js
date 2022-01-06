import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import Cell from './Cell'

function Board({countOfCells, sizeOfBoard, hoverCells, selectLen, setHoverCells, setIsStart, isStart}) {

    useEffect(() => {
        setHoverCells([])
        setIsStart(false)
    }, [setHoverCells, setIsStart, selectLen])

    const clickCell = i => {
        if (isStart) {
            if (hoverCells[i]) {
                setHoverCells(turns => {
                    delete turns[i]
                    return {...turns}
                })
            } else {
                setHoverCells(turns => ({...turns, [i]: [Math.floor(i / 5 + 1), i % 5 + 1]}))
            }
        } else {
            alert("Click to start")
        }
    }

    return (
        <div className='board'>
            {selectLen && Array((countOfCells) ** 2).fill(false).map((_, i) => (
                <Cell
                    index={i}
                    size={sizeOfBoard / countOfCells}
                    clickCell={clickCell}
                    hoverCells={hoverCells}
                    key={i}
                />
            ))}
        </div>
    )
}

export default Board
