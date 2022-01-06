import React from 'react'

function Logs({hoverCells}) {
    return (
        <div className='logs'>
            <h1>Hover squares</h1>
            {Object.keys(hoverCells).length
                ? 
                    Object.keys(hoverCells).map(turn => {
                        const [row, column] = hoverCells[turn]
                        return (
                            <div className='log' key={`${row}${column}`}>row {row} column {column}</div>
                        )
                    })
                :
                    <h1>No turns</h1>
            }
        </div>
    )
}

export default Logs
