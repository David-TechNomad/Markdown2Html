import React, { Component } from "react";
import { message } from "antd";
import { FONT_THEME_ID, RIGHT_SYMBOL } from "../../../utils/constant";
import { replaceStyle } from "../../../utils/helper";
import "../common.css";

class Font extends Component {
  constructor(props) {
    super(props);

    this.toggleFont = () => {
      const {
        isSerif
      } = this.state;
      const serif = `#nice { 
      font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }`;
      const sansSerif = `#nice { 
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, PingFangSC-light, PingFangTC-light, 'Open Sans', 'Helvetica Neue', sans-serif;
    }`;
      const choosen = isSerif ? serif : sansSerif;
      replaceStyle(FONT_THEME_ID, choosen);
      message.success("字体切换成功！");
      this.setState({
        isSerif: !isSerif
      });
    };

    this.state = {
      isSerif: false
    };
  } // 衬线字体 和 非衬线字体 切换


  render() {
    return React.createElement("div", {
      id: "nice-menu-font",
      className: "nice-menu-item",
      onClick: this.toggleFont
    }, React.createElement("span", null, React.createElement("span", {
      className: "nice-menu-flag"
    }, !this.state.isSerif && React.createElement("span", null, RIGHT_SYMBOL)), React.createElement("span", {
      className: "nice-menu-name"
    }, "\u886C\u7EBF\u5B57\u4F53")));
  }

}

export default Font;