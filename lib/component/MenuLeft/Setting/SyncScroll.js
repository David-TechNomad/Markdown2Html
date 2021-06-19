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
        isSyncScroll
      } = this.props.navbar;
      this.props.navbar.setSyncScroll(!isSyncScroll);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-sync-scroll",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, this.props.navbar.isSyncScroll && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u540C\u6B65\u6EDA\u52A8")));
  }

}, _temp)) || _class) || _class);
export default SyncScroll;