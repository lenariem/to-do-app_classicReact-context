import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import MyContext from "./Context";

class ToDosContainer extends Component {
    state = {
        InputText: "",
    };

    static contextType = MyContext;

    formSubmitted = (e) => {
        e.preventDefault();
        if (this.state.InputText.trim() !== "") {
            this.context.AddItem(this.state.InputText);
            this.setState({
                InputText: "",
            });
        }
    };

    render() {
        const todosItem = this.context.toDos.map((task) => {
            return <ToDoItem key={task.id} taskProps={task} />;
        });

    return (
        <div className="todos-container">
            <form className="todo-form" onSubmit={this.formSubmitted}>
                <label className="input-item">
                    <input
                        type="text"
                        name="todo"
                        value={this.state.InputText}
                        onChange={(e) => this.setState({ InputText: e.target.value })}
                    />
                </label>
                <input className="btn" type="submit" value="ADD" />
            </form>
            <div className="todos">
            <h3>TO DO</h3>
                {todosItem}
            </div>
        </div>
    );
    }
}

export default ToDosContainer;
