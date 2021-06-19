import React, { Component } from "react";
import ImageDialog from "../component/Dialog/ImageDialog";
import LinkDialog from "../component/Dialog/LinkDialog";
import AboutDialog from "../component/Dialog/AboutDialog";
import VersionDialog from "../component/Dialog/VersionDialog";
import FormDialog from "../component/Dialog/FormDialog";
import HistoryDialog from "../component/Dialog/HistoryDialog";
import SitDownDialog from "../component/Dialog/SitDownDialog";

class Dialog extends Component {
  render() {
    return React.createElement("div", null, React.createElement(ImageDialog, null), React.createElement(LinkDialog, null), React.createElement(AboutDialog, null), React.createElement(VersionDialog, null), React.createElement(FormDialog, null), React.createElement(HistoryDialog, null), React.createElement(SitDownDialog, null));
  }

}

export default Dialog;