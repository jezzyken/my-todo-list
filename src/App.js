import React from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = {
    item: "",
    items: [],
    id: uuidv4(),
    editing: false,
    notification: null,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      todo: this.state.item,
    };

    const updatedItem = [...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      id: uuidv4(),
      item: "",
      editing: false,
      editingTodoId: null,
    });

    // this.alert("Todo Sucessfully Added");
  };

  clearTodo = () => {
    this.setState({ items: [] });
  };

  deleteTodo = (id) => {
    const filteredItems = this.state.items.filter((items) => items.id !== id);
    this.setState({ items: filteredItems });

    // this.alert("Todo Sucessfully Deleted");
  };

  editTodo = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItems = this.state.items.find((item) => item.id === id);

    this.setState({
      editingTodoId: id,
      editing: !this.state.editing,
      items: filteredItems,
      item: selectedItems.todo,
    });
  };

  // alert = (notification) => {
  //   this.setState({
  //     notification: notification,
  //   });
  //   setTimeout(() => {
  //     this.setState({ notification: null });
  //   }, 1000);
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-uppercase text-center">my todo app</h3>
            <TodoInput
              item={this.state.item}
              addTodo={this.addTodo}
              editing={this.state.editing}
              handleChange={this.handleChange}
              notification={this.state.notification}
            />

            {!this.state.editing && (
              <TodoList
                items={this.state.items}
                clearTodo={this.clearTodo}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
