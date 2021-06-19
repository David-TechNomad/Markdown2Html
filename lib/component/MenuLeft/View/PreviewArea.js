var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { RIGHT_SYMBOL } from "../../../utils/constant";
import "../common.css";
let PreviewArea = (_dec = inject("view"), _dec(_class = observer(_class = (_temp = class PreviewArea extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        isPreviewAreaOpen
      } = this.props.view;
      this.props.view.setPreviewAreaOpen(!isPreviewAreaOpen);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-preview-area",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, this.props.view.isPreviewAreaOpen && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u9884\u89C8\u533A\u57DF")));
  }

}, _temp)) || _class) || _class);
export default PreviewArea;