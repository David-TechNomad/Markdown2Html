var _dec, _dec2, _dec3, _dec4, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Upload, Tabs, Select } from "antd";
import SvgIcon from "../../icon";
import AliOSS from "../ImageHosting/AliOSS";
import QiniuOSS from "../ImageHosting/QiniuOSS";
import Gitee from "../ImageHosting/Gitee";
import GitHub from "../ImageHosting/GitHub";
import { uploadAdaptor } from "../../utils/imageHosting";
import { SM_MS_PROXY, IMAGE_HOSTING_TYPE, IMAGE_HOSTING_NAMES } from "../../utils/constant";
import appContext from "../../utils/appContext";
const {
  Dragger
} = Upload;
const {
  TabPane
} = Tabs;
const {
  Option
} = Select;
let ImageDialog = (_dec = inject("dialog"), _dec2 = inject("content"), _dec3 = inject("imageHosting"), _dec4 = inject("navbar"), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = observer(_class = (_temp = class ImageDialog extends Component {
  constructor(props) {
    super(props);

    this.handleOk = () => {
      let text = ""; // 成功后添加url

      if (this.props.navbar.isContainImgName) {
        this.images.forEach(value => {
          text += `![${value.filename}](${value.url})\n`;
        });
      } else {
        this.images.forEach(value => {
          text += `![](${value.url})\n`;
        });
      } // 重新初始化


      this.images = [];
      const {
        markdownEditor
      } = this.props.content;
      const cursor = markdownEditor.getCursor();
      markdownEditor.replaceSelection(text, cursor); // 上传后实时更新内容

      const content = markdownEditor.getValue();
      this.props.content.setContent(content);
      this.props.dialog.setImageOpen(false);
      cursor.ch += 2;
      markdownEditor.setCursor(cursor);
      markdownEditor.focus();
    };

    this.handleCancel = () => {
      this.props.dialog.setImageOpen(false);
    };

    this.customRequest = ({
      action,
      data,
      file,
      headers,
      onError,
      onProgress,
      onSuccess,
      withCredentials
    }) => {
      const formData = new FormData();
      const {
        images
      } = this;

      if (data) {
        Object.keys(data).forEach(key => {
          formData.append(key, data[key]);
        });
      } // 使用阿里云图床


      if (this.props.imageHosting.type === "阿里云") {
        uploadAdaptor({
          file,
          onSuccess,
          onError,
          images
        });
      } // 使用七牛云图床
      else if (this.props.imageHosting.type === "七牛云") {
          uploadAdaptor({
            file,
            onSuccess,
            onError,
            onProgress,
            images
          });
        } // 使用SM.MS图床
        else if (this.props.imageHosting.type === "SM.MS") {
            uploadAdaptor({
              formData,
              file,
              action,
              onProgress,
              onSuccess,
              onError,
              headers,
              withCredentials
            });
          } // 使用Gitee图床
          else if (this.props.imageHosting.type === "Gitee") {
              uploadAdaptor({
                formData,
                file,
                action,
                onProgress,
                onSuccess,
                onError,
                headers,
                withCredentials,
                images
              });
            } // 使用GitHub图床
            else if (this.props.imageHosting.type === "GitHub") {
                uploadAdaptor({
                  formData,
                  file,
                  action,
                  onProgress,
                  onSuccess,
                  onError,
                  headers,
                  withCredentials,
                  images
                });
              } // 使用用户提供的图床或是默认mdnice图床
              else {
                  uploadAdaptor({
                    formData,
                    file,
                    onSuccess,
                    onError,
                    images
                  });
                }

      return {
        abort() {
          console.log("upload progress is aborted.");
        }

      };
    };

    this.typeChange = type => {
      this.props.imageHosting.setType(type);
      window.localStorage.setItem(IMAGE_HOSTING_TYPE, type);
    };

    this.images = [];
  } // 确认后将内容更新到编辑器上


  render() {
    const {
      hostingList,
      type
    } = this.props.imageHosting;
    const columns = hostingList.map((option, index) => React.createElement(Option, {
      key: index,
      value: option.value
    }, option.label));
    const imageHostingSwitch = React.createElement(Select, {
      style: {
        width: "90px"
      },
      value: type,
      onChange: this.typeChange
    }, columns);
    return React.createElement(Modal, {
      title: "\u672C\u5730\u4E0A\u4F20",
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      visible: this.props.dialog.isImageOpen,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      bodyStyle: {
        paddingTop: "10px"
      }
    }, React.createElement(appContext.Consumer, null, ({
      useImageHosting
    }) => React.createElement(Tabs, {
      tabBarExtraContent: imageHostingSwitch,
      type: "card"
    }, React.createElement(TabPane, {
      tab: "\u56FE\u7247\u4E0A\u4F20",
      key: "1"
    }, React.createElement(Dragger, {
      name: "file",
      multiple: true,
      action: SM_MS_PROXY,
      customRequest: this.customRequest
    }, React.createElement("p", {
      className: "ant-upload-drag-icon"
    }, React.createElement(SvgIcon, {
      name: "inbox",
      style: style.svgIcon,
      fill: "#40a9ff"
    })), React.createElement("p", {
      className: "ant-upload-text"
    }, "\u70B9\u51FB\u6216\u62D6\u62FD\u4E00\u5F20\u6216\u591A\u5F20\u7167\u7247\u4E0A\u4F20"), React.createElement("p", {
      className: "ant-upload-hint"
    }, "正在使用" + type + "图床"))), useImageHosting.isAliyunOpen ? React.createElement(TabPane, {
      tab: IMAGE_HOSTING_NAMES.aliyun,
      key: "2"
    }, React.createElement(AliOSS, null)) : null, useImageHosting.isQiniuyunOpen ? React.createElement(TabPane, {
      tab: IMAGE_HOSTING_NAMES.qiniuyun,
      key: "3"
    }, React.createElement(QiniuOSS, null)) : null, useImageHosting.isGiteeOpen ? React.createElement(TabPane, {
      tab: IMAGE_HOSTING_NAMES.gitee,
      key: "4"
    }, React.createElement(Gitee, null)) : null, useImageHosting.isGitHubOpen ? React.createElement(TabPane, {
      tab: IMAGE_HOSTING_NAMES.github,
      key: "5"
    }, React.createElement(GitHub, null)) : null)));
  }

}, _temp)) || _class) || _class) || _class) || _class) || _class);
const style = {
  svgIcon: {
    width: "48px",
    height: "48px"
  }
};
export default ImageDialog;