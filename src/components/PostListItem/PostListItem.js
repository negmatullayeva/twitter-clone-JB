import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportnat = this.onImportnat.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportnat() {
    this.setState(({ important }) => ({ important: !important }));
  }
  onLike() {
    this.setState(({ like }) => ({ like: !like }));
  }

  render() {
    const { label, onDelete } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div className=" d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportnat}
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
