var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { hotKeys } from "../../../utils/hotkey";
import "../common.css";
let Search = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class Search extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dialog.setSearchOpen(!this.props.dialog.isSearchOpen);
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-search",
      className: "nice-menu-item",
      onClick: this.handleClick
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u67E5\u627E")), React.createElement("span", {
      className: "nice-menu-shortcut"
    }, hotKeys.search));
  }

}, _temp)) || _class) || _class);
export default Search;