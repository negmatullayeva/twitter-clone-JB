import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React JS", important: true, id: "qw" },
        { label: "That is so good", important: false, id: "qa" },
        { label: "I need a break...", important: false, id: "qq" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  // deleteItem(id) {
  //   this.setState(({ data }) => {
  //     const index = data.findIndex((elem) => elem.id === id);

  //     const before = data.slice(0, index);
  //     const after = data.slice(index + 1);

  //     const newArr = [...before, ...after];
  //     return {
  //       data: newArr,
  //     };
  //   });
  // }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="seach-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    );
  }
}
