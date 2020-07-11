import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-append">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-uppercase"
              placeholder="Add Item"
            />
            <button
              type="submit"
              className=" btn-block btn-primary mt-3 text-uppercase">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    );
  }
}
