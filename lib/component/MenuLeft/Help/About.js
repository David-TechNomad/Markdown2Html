var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
let About = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class About extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dialog.setAboutOpen(true);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-about",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u5173\u4E8E")));
  }

}, _temp)) || _class) || _class);
export default About;