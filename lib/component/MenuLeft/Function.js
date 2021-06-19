import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import Reset from "./Function/Reset";
import Search from "./Function/Search";
import History from "./Function/History";
import SitDown from "./Function/SitDown";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(Reset, null)), React.createElement(Menu.Item, null, React.createElement(Search, null)), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, null, React.createElement(History, null)), React.createElement(Menu.Item, null, React.createElement(SitDown, null)));

class Function extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-function",
      className: "nice-menu-link",
      href: "#"
    }, "\u529F\u80FD"));
  }

}

export default Function;