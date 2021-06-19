var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { RIGHT_SYMBOL } from "../../../utils/constant";
import "../common.css";
let ThemeArea = (_dec = inject("view"), _dec(_class = observer(_class = (_temp = class ThemeArea extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        isStyleEditorOpen
      } = this.props.view;
      this.props.view.setStyleEditorOpen(!isStyleEditorOpen);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-theme-area",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, this.props.view.isStyleEditorOpen && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u4E3B\u9898CSS\u533A\u57DF")));
  }

}, _temp)) || _class) || _class);
export default ThemeArea;