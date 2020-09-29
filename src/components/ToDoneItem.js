import React from 'react';
import MyContext from "./Context";

export default function ToDoneItem(props) {
    return (
        <MyContext.Consumer>
        {
        (context) => (
            <div className="todones-item">
                <p>{props.taskProps.text}</p>
                <div className="action">
                    <button className="btn" onClick ={()=>context.updateItem(props.taskProps.id)}>&#8635;</button>
                    <button className="btn" onClick={() => context.deleteItem(props.taskProps.id)}>&#128465;</button>
                </div>
            </div>
            )
        }
    </MyContext.Consumer>
    )
}
