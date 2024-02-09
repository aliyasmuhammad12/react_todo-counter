import React from "react"

function ListItems(props){
    return(
            <li className="Todo-item">
                <span>
               {props.completed ? <></> :  <input type="checkbox" />}
                <span className="todo-item-text">{props.list}</span>
                </span>
                <span>...</span>
            </li>
    )
}
export default ListItems;