var _dec, _class;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classnames from "classnames";
import Bold from "../component/Toolbar/Bold";
import Code from "../component/Toolbar/Code";
import Del from "../component/Toolbar/Del";
import Italic from "../component/Toolbar/Italic";
import Link from "../component/Toolbar/Link";
import Table from "../component/Toolbar/Table";
import Image from "../component/Toolbar/Image";
import Format from "../component/Toolbar/Format";
import LinkToFoot from "../component/Toolbar/LinkToFoot";
import InlineCode from "../component/Toolbar/InlineCode";
import Theme from "../component/MenuLeft/Theme";
import CodeTheme from "../component/MenuLeft/CodeTheme";
import "./Navbar.css";
let Toolbar = (_dec = inject("view"), _dec(_class = observer(_class = class Toolbar extends Component {
  render() {
    const {
      token
    } = this.props;
    const niceNavbarClass = classnames({
      "nice-navbar": true,
      "nice-toolbar": true
    });
    return React.createElement("div", {
      className: niceNavbarClass
    }, React.createElement("div", {
      className: "nice-left-nav"
    }, React.createElement(Del, null), React.createElement(Bold, null), React.createElement(Italic, null), React.createElement(Code, null), React.createElement(InlineCode, null), React.createElement(Link, null), React.createElement(Table, null), React.createElement(Image, null), React.createElement(LinkToFoot, null), React.createElement(Format, null)), React.createElement("div", {
      className: "nice-right-nav"
    }, React.createElement(Theme, {
      token: token
    }), React.createElement(CodeTheme, null)));
  }

}) || _class) || _class);
export default Toolbar;