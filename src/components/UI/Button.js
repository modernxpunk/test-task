import React from 'react'

function Button({isStart, checkIsStart}) {
    return (
        <button
            className="start"
            style={{backgroundColor: isStart ? "grey" : "blue"}}
            onClick={checkIsStart}
        >
            {isStart ? "try again" : "start"}
        </button>
    )
}

export default Button
