import React, { Component } from "react";
import "../common.css";

class Question extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const w = window.open("about:blank");
      w.location.href = "https://github.com/TaleAi/markdown2html/issues/new";
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-question",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u6211\u8981\u63D0\u95EE")));
  }

}

export default Question;