import React, { Component } from "react";
import "../common.css";

class Document extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const w = window.open("about:blank");
      w.location.href = "https://aizhuanqian.online/mardown2html";
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-document",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u66F4\u591A\u6587\u6863")));
  }

}

export default Document;