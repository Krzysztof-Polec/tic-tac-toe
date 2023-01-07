import React, {useState} from "react"
import Cell from "../cell/cell"
import CalculateWinner from "../../utils/calculate-winner"
import "./board.scss"

const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true);
    
    const handleClick = (i) => {
        if(CalculateWinner(cells) || cells[i]) return
        
        cells[i] = isX ? "X" : "O"
        setCells(cells)
        setIsX(!isX)
    }
      
    const winner = CalculateWinner(cells)
    let status
    
    if(winner){
        status = `Wygrywa: ${winner}`
    }else if(!winner && !cells.includes(null)){
        status = "Remis"
    }else{
        status = `Ruch gracza: ${isX ? "X" : "O"}`
    }

    const handleRestart = () => {
        setIsX(true)
        setCells(Array(9).fill(null))
    }

    const renderCells = (cellNumber) => {
        return <Cell value={cells[cellNumber]} onClick={()=>handleClick(cellNumber)} />
    }

    return(
        <>
            <div className="board">
                <div className="board-row">
                    {renderCells(0)}
                    {renderCells(1)}
                    {renderCells(2)}
                </div>
                <div className="board-row">
                    {renderCells(3)}
                    {renderCells(4)}
                    {renderCells(5)}
                </div>
                <div className="board-row">
                    {renderCells(6)}
                    {renderCells(7)}
                    {renderCells(8)}
                </div>
            </div>
            <div className="status">{status}</div>
            <div className="restartButton" onClick={handleRestart}>RESTART</div>
        </>
    )
}

export default Board;