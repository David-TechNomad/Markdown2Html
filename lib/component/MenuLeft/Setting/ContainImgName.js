var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { RIGHT_SYMBOL } from "../../../utils/constant";
import "../common.css";
let SyncScroll = (_dec = inject("navbar"), _dec(_class = observer(_class = (_temp = class SyncScroll extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        isContainImgName
      } = this.props.navbar;
      this.props.navbar.setContainImgName(!isContainImgName);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-contain-img-name",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, this.props.navbar.isContainImgName && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u4E0A\u4F20\u56FE\u7247\u65F6\u5305\u542B\u540D\u79F0")));
  }

}, _temp)) || _class) || _class);
export default SyncScroll;