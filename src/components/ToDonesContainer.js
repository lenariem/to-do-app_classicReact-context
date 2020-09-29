import React from "react";
import ToDoneItem from "./ToDoneItem";
import MyContext from "./Context";

export default function ToDonesContainer(props) {
    return (
        <MyContext.Consumer>
            {(context) => {
                const toDonesItems = context.toDones.map((task) => {
                return <ToDoneItem key={task.id} taskProps={task} />;
                });
                return (
                <div className="todones-container">
                    <h3>BACKLOG</h3>
                    {toDonesItems}
                </div>
                );
            }}
        </MyContext.Consumer>
    );
}
