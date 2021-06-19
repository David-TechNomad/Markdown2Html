var _dec, _class;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classnames from "classnames";
import File from "../component/MenuLeft/File";
import Help from "../component/MenuLeft/Help";
import Pattern from "../component/MenuLeft/Pattern";
import Function from "../component/MenuLeft/Function";
import Setting from "../component/MenuLeft/Setting";
import View from "../component/MenuLeft/View";
import "./Navbar.css";
let Navbar = (_dec = inject("view"), _dec(_class = observer(_class = class Navbar extends Component {
  render() {
    const {
      title,
      token
    } = this.props;
    const {
      isImmersiveEditing
    } = this.props.view;
    const niceNavbarClass = classnames({
      "nice-navbar": true,
      "nice-navbar-hide": isImmersiveEditing
    });
    return React.createElement("div", {
      className: niceNavbarClass
    }, React.createElement("div", {
      className: "nice-left-nav"
    }, title === "" ? null : React.createElement("section", {
      id: "nice-title",
      className: "nice-title"
    }, title), React.createElement(File, null), React.createElement(Pattern, null), React.createElement(Function, null), React.createElement(View, null), React.createElement(Setting, null), React.createElement(Help, null)), React.createElement("div", {
      className: "nice-right-nav"
    }));
  }

}) || _class) || _class);
export default Navbar;