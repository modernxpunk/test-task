import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import Board from './Board'
import Button from './UI/Button'
import Select from './UI/Select'

function Game({hoverCells, selectLen, setSelectedLen, setHoverCells}) {
    const [options, setOptions] = useState([])
    const [isStart, setIsStart] = useState(false)

    useEffect(() => {
        const fetchLenghtOptions = async () => {
            const response = await fetch("https://demo1030918.mockable.io/")
            const modes = await response.json()
            setOptions(modes)
        }
        fetchLenghtOptions()
    }, [])

    const checkIsStart = () => {
        if (isStart) {
            setHoverCells([])
            setIsStart(false)
        } else {
            if (selectLen === "") {
                alert("Select mode")
            } else {
                setIsStart(true)
            }
        }
    }

    return (
        <div className="game">
            <div className='top'>
                <Select
                    defaultText={"Pick mode"}
                    options={options}
                    selectLen={selectLen}
                    setSelectedLen={setSelectedLen}
                />
                <Button
                    isStart={isStart}
                    checkIsStart={checkIsStart}
                />
            </div>
        <Board
            sizeOfBoard={300}
            countOfCells={options[selectLen]?.field}
            hoverCells={hoverCells}
            selectLen={selectLen}
            setHoverCells={setHoverCells}
            checkIsStart={checkIsStart}
            setIsStart={setIsStart}
            isStart={isStart}
        />
      </div>
    )
}

export default Game
