import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import Bold from "./Pattern/Bold";
import Code from "./Pattern/Code";
import Del from "./Pattern/Del";
import Italic from "./Pattern/Italic";
import Link from "./Pattern/Link";
import Form from "./Pattern/Form";
import Image from "./Pattern/Image";
import Format from "./Pattern/Format";
import LinkToFoot from "./Pattern/LinkToFoot";
import Font from "./Pattern/Font";
import InlineCode from "./Pattern/InlineCode";
import "./common.css";
const menu = React.createElement(Menu, null, React.createElement(Menu.Item, null, React.createElement(Del, null)), React.createElement(Menu.Item, null, React.createElement(Bold, null)), React.createElement(Menu.Item, null, React.createElement(Italic, null)), React.createElement(Menu.Item, null, React.createElement(Code, null)), React.createElement(Menu.Item, null, React.createElement(InlineCode, null)), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, null, React.createElement(Link, null)), React.createElement(Menu.Item, null, React.createElement(Form, null)), React.createElement(Menu.Item, null, React.createElement(Image, null)), React.createElement(Menu.Item, null, React.createElement(Font, null)), React.createElement(Menu.Divider, null), React.createElement(Menu.Item, null, React.createElement(LinkToFoot, null)), React.createElement(Menu.Item, null, React.createElement(Format, null)));

class Pattern extends Component {
  render() {
    return React.createElement(Dropdown, {
      overlay: menu,
      trigger: ["click"],
      overlayClassName: "nice-overlay"
    }, React.createElement("a", {
      id: "nice-menu-pattern",
      className: "nice-menu-link",
      href: "#"
    }, "\u683C\u5F0F"));
  }

}

export default Pattern;