var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Input, Form } from "antd";
import { GITEE_IMAGE_HOSTING } from "../../utils/constant";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 16
    }
  }
};
let Gitee = (_dec = inject("imageHosting"), _dec(_class = observer(_class = (_temp = class Gitee extends Component {
  constructor(props) {
    super(props); // 从localstorage里面读取

    this.usernameChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.username = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.repoChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.repo = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.tokenChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.token = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    const _imageHosting = JSON.parse(localStorage.getItem(GITEE_IMAGE_HOSTING));

    this.state = {
      imageHosting: _imageHosting
    };
  }

  render() {
    const {
      username,
      repo,
      token
    } = this.state.imageHosting;
    return React.createElement(Form, formItemLayout, React.createElement(Form.Item, {
      label: "\u7528\u6237\u540D",
      style: style.formItem
    }, React.createElement(Input, {
      value: username,
      onChange: this.usernameChange,
      placeholder: "\u4F8B\u5982\uFF1Amdnice"
    })), React.createElement(Form.Item, {
      label: "\u4ED3\u5E93\u540D",
      style: style.formItem
    }, React.createElement(Input, {
      value: repo,
      onChange: this.repoChange,
      placeholder: "\u4F8B\u5982\uFF1Apicture"
    })), React.createElement(Form.Item, {
      label: "token",
      style: style.formItem
    }, React.createElement(Input, {
      value: token,
      onChange: this.tokenChange,
      placeholder: "\u4F8B\u5982\uFF1AqweASDF1234zxcvb"
    })), React.createElement(Form.Item, {
      label: "\u63D0\u793A",
      style: style.formItem
    }, React.createElement("span", null, "\u914D\u7F6E\u540E\u8BF7\u5728\u53F3\u4E0A\u89D2\u8FDB\u884C\u5207\u6362\uFF0C"), React.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://preview.mdnice.com/article/developer/gitee-image-hosting/"
    }, "Gitee \u56FE\u5E8A\u914D\u7F6E\u6587\u6863")));
  }

}, _temp)) || _class) || _class);
const style = {
  formItem: {
    marginBottom: "10px"
  }
};
export default Gitee;