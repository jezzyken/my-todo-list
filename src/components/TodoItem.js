import React, { Component, Fragment } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <Fragment>
        <li className="list-group-item text-uppercase d-flex justify-content-between my-2">
          <h6>Test</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success">
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger">
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </Fragment>
    );
  }
}
