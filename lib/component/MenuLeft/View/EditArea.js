var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { RIGHT_SYMBOL } from "../../../utils/constant";
import "../common.css";
let EditArea = (_dec = inject("view"), _dec(_class = observer(_class = (_temp = class EditArea extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        isEditAreaOpen
      } = this.props.view;
      this.props.view.setEditAreaOpen(!isEditAreaOpen);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-edit-area",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, this.props.view.isEditAreaOpen && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u7F16\u8F91\u533A\u57DF")));
  }

}, _temp)) || _class) || _class);
export default EditArea;