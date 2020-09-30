import React, { Component } from "react";
import MyContext from "./Context";

export default class Container extends Component {
    state = {
        items: [
        { text: "first task", done: false, id: 0 },
        { text: "second task", done: false, id: 1 },
        { text: "third task", done: false, id: 2 },
        { text: "fourth task", done: false, id: 3 },
        { text: "create a website", done: true, id: 4 },
        { text: "read a book", done: true, id: 5 },
        { text: "make a call", done: true, id: 6 },
        { text: "buy a lap top", done: true, id: 7 }
        ],
    };

    updateItem = (id) => {
        const updatedItems = this.state.items.map((item) => {
            if (item.id === id) {
                item.done = !item.done;
                return item;
            } else {
                return item;
            }
        });
        this.setState({items: updatedItems},() => {
            localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
        }
        );
    };

    AddItem = (InputText) => {
        const item = {
            id: this.state.items.length,
            text: InputText,
            done: false,
        };
        this.setState({items: [item, ...this.state.items]},() => {
            localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
        }
        );
    };
    componentDidMount() {
        let storedItems = localStorage.getItem("to-do-app");
        let convertedToOriginal = JSON.parse(storedItems);
        if (storedItems !== null) {
            this.setState({
                items: convertedToOriginal
            });
        }
    }

    deleteItem = (id) => {
        const updatedItem = this.state.items.filter(item => item.id !== id);

        this.setState({items: updatedItem},() => {
            localStorage.setItem("to-do-app", JSON.stringify(this.state.items));
        }
        );
    };

    render() {
        const toDones = this.state.items.filter((item) => item.done === true);
        const toDos = this.state.items.filter((item) => item.done === false);

        return (
        <div>
            <MyContext.Provider
                value={{
                    items: this.state.items,
                    AddItem: this.AddItem,
                    deleteItem: this.deleteItem,
                    updateItem: this.updateItem,
                    toDones,
                    toDos
                }}
            >
            {this.props.children}
            </MyContext.Provider>
        </div>
        );
    }
}
