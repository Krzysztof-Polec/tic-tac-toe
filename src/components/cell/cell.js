import "./cell.scss"

const Cell = ({value, onClick}) =>{
    return <div className="cell" onClick={onClick}>{value}</div>
}

export default Cell