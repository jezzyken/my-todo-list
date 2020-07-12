import React, { Component } from "react";

import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearTodo, deleteTodo, editTodo, editing } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-uppercase text-center">Todo List </h3>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              todo={item.todo}
              deleteTodo={() => deleteTodo(item.id)}
              editTodo={() => editTodo(item.id)}
            />
          ))}
          <button
            onClick={clearTodo}
            type="button"
            className="btn btn-danger btn-block text-uppercase mt-5">
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}
