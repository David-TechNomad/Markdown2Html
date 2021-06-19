var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Timeline, Button } from "antd";
import axios from "axios";
import { NEWEST_VERSION } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./VersionDialog.css";
let VersionDialog = (_dec = inject("dialog"), _dec(_class = observer(_class = (_temp = class VersionDialog extends Component {
  constructor(props) {
    super(props);

    this.handleOk = () => {
      this.props.dialog.setVersionOpen(false);
    };

    this.handleCancel = () => {
      this.props.dialog.setVersionOpen(false);
    };

    this.handleMore = () => {
      const w = window.open("about:blank");
      w.location.href = "https://github.com/mdnice/markdown-nice/blob/master/CHANGELOG.md";
    };

    this.handleDocs = () => {
      const w = window.open("about:blank");
      w.location.href = "https://aizhuanqian.online/mardown2html";
    };

    this.componentDidMount = async () => {
      try {
        const data = {
          versionId: 1,
          versionNumber: "1.0.0",
          versionTimeline: ["2020-09-09 优化排版", "2020-09-08 fork自markdown nice"],
          recommend: {
            link: "https://www.aizhuanqian.com",
            mainInfo: "欢迎关注我的博客"
          },
          specialInfo: '<div style="display:flex;justify-content:center;align-items:center;"><img style="width:50%;" src="http://md.aizhuanqian.online/img/wechat_qr.df324554.jpeg"/></div>'
        };
        const newestVersion = localStorage.getItem(NEWEST_VERSION);

        if (data.versionNumber !== newestVersion) {
          this.props.dialog.setVersionOpen(true);
          localStorage.setItem(NEWEST_VERSION, data.versionNumber);
        }

        this.setState({ ...data
        });
      } catch (err) {
        console.error("读取最新版本信息错误");
      }
    };

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      versionNumber: 0,
      versionTimeline: [],
      recommend: null,
      specialInfo: ""
    };
  }

  render() {
    return React.createElement(Modal, {
      title: "\u7248\u672C\u66F4\u65B0",
      visible: this.props.dialog.isVersionOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      footer: [React.createElement(Button, {
        key: "submit",
        type: "primary",
        onClick: this.handleOk
      }, "\u786E\u8BA4")],
      destroyOnClose: true
    }, React.createElement(Timeline, null, this.state.versionTimeline.map((version, index) => {
      if (index === 0) {
        return React.createElement(Timeline.Item, {
          key: index,
          dot: React.createElement(SvgIcon, {
            name: "environment",
            style: style.svgIcon
          })
        }, React.createElement("strong", null, version));
      } else {
        return React.createElement(Timeline.Item, {
          key: index
        }, version);
      }
    }), React.createElement(Timeline.Item, null, "\u4E86\u89E3\u66F4\u591A\uFF0C\u8BF7\u67E5\u770B", React.createElement("a", {
      id: "nice-version-dialog-doc",
      style: {
        fontWeight: "bold"
      },
      alt: "",
      href: "https://aizhuanqian.online/mardown2html",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "\u7528\u6237\u4E0E\u5F00\u53D1\u8005\u6587\u6863")), this.state.recommend && React.createElement(Timeline.Item, {
      dot: React.createElement(SvgIcon, {
        name: "more",
        style: style.svgIcon
      })
    }, React.createElement("a", {
      id: "nice-version-dialog-recommend",
      style: {
        fontWeight: "bold",
        borderBottom: "double"
      },
      alt: "",
      href: this.state.recommend.link,
      rel: "noopener noreferrer",
      target: "_blank"
    }, this.state.recommend.mainInfo))), this.state.specialInfo && React.createElement("div", {
      id: "nice-version-dialog-special",
      dangerouslySetInnerHTML: {
        __html: this.state.specialInfo
      },
      className: "specialInfo"
    }));
  }

}, _temp)) || _class) || _class);
const style = {
  svgIcon: {
    width: "16px",
    height: "16px"
  }
};
export default VersionDialog;