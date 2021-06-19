var _dec, _class;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import classnames from "classnames";
import PreviewType from "../component/Sidebar/PreviewType";
import Wechat from "../component/Sidebar/Wechat";
import Zhihu from "../component/Sidebar/Zhihu";
import Juejin from "../component/Sidebar/Juejin";
import Pdf from "../component/Sidebar/ExportPdf";
import ExportMarkdown from "../component/Sidebar/Markdown";
import "./Sidebar.css"; // @inject("userInfo")

let Sidebar = (_dec = inject("view"), _dec(_class = observer(_class = class Sidebar extends Component {
  render() {
    const {
      isImmersiveEditing
    } = this.props.view;
    const niceSidebarClass = classnames({
      "nice-sidebar": true,
      "nice-sidebar-hide": isImmersiveEditing
    });
    return React.createElement("div", {
      className: niceSidebarClass
    }, React.createElement(Wechat, null), React.createElement(Zhihu, null), React.createElement(Juejin, null), React.createElement(ExportMarkdown, null), React.createElement(Pdf, null), React.createElement(PreviewType, null));
  }

}) || _class) || _class);
export default Sidebar;