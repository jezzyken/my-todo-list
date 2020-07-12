import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { addTodo, handleChange, item, editing, notification } = this.props;
    return (
      <div className="card card-body my-3">
        {notification && (
          <div className="alert alert-success">{notification} </div>
        )}
        <form onSubmit={addTodo}>
          <div className="input-group">
            <div className="input-group-append">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" />
              </div>
            </div>

            <input
              value={item}
              onChange={handleChange}
              type="text"
              className="form-control text-uppercase"
              placeholder="Add Item"
            />
            <button
              type="submit"
              className=" btn-block btn-primary mt-3 text-uppercase">
              {editing ? "Update Todo" : "Add Todo"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
