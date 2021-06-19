var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "../common.css";
let FullScreen = (_dec = inject("navbar"), _dec(_class = observer(_class = (_temp = class FullScreen extends Component {
  constructor(...args) {
    super(...args);

    this.toggleFullScreen = () => {
      const doc = window.document;
      const docEl = doc.documentElement;
      const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
      const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }
    };
  }

  render() {
    return React.createElement("div", {
      id: "nice-menu-full-screen",
      className: "nice-menu-item",
      onClick: this.toggleFullScreen
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u5168\u5C4F")));
  }

}, _temp)) || _class) || _class);
export default FullScreen;