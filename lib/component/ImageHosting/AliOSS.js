var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Input, Form } from "antd";
import { ALIOSS_IMAGE_HOSTING } from "../../utils/constant";
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
let AliOSS = (_dec = inject("imageHosting"), _dec(_class = observer(_class = (_temp = class AliOSS extends Component {
  constructor(props) {
    super(props); // 从localstorage里面读取

    this.regionChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.region = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(ALIOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.accessKeyIdChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.accessKeyId = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(ALIOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.accessKeySecretChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.accessKeySecret = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(ALIOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.bucketChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.bucket = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(ALIOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    const _imageHosting = JSON.parse(localStorage.getItem(ALIOSS_IMAGE_HOSTING));

    this.state = {
      imageHosting: _imageHosting
    };
  }

  render() {
    const {
      region,
      accessKeyId,
      accessKeySecret,
      bucket
    } = this.state.imageHosting;
    return React.createElement(Form, formItemLayout, React.createElement(Form.Item, {
      label: "Bucket",
      style: style.formItem
    }, React.createElement(Input, {
      value: bucket,
      onChange: this.bucketChange,
      placeholder: "\u4F8B\u5982\uFF1Amy-wechat"
    })), React.createElement(Form.Item, {
      label: "Region",
      style: style.formItem
    }, React.createElement(Input, {
      value: region,
      onChange: this.regionChange,
      placeholder: "\u4F8B\u5982\uFF1Aoss-cn-hangzhou"
    })), React.createElement(Form.Item, {
      label: "AccessKey ID",
      style: style.formItem
    }, React.createElement(Input, {
      value: accessKeyId,
      onChange: this.accessKeyIdChange,
      placeholder: "\u4F8B\u5982\uFF1AqweASDF1234zxcvb"
    })), React.createElement(Form.Item, {
      label: "AccessKey Secret",
      style: style.formItem
    }, React.createElement(Input, {
      value: accessKeySecret,
      onChange: this.accessKeySecretChange,
      placeholder: "\u4F8B\u5982\uFF1AqweASDF1234zxcvbqweASD"
    })), React.createElement(Form.Item, {
      label: "\u63D0\u793A",
      style: style.formItem
    }, React.createElement("span", null, "\u914D\u7F6E\u540E\u8BF7\u5728\u53F3\u4E0A\u89D2\u8FDB\u884C\u5207\u6362\uFF0C"), React.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://preview.mdnice.com/article/developer/aliyun-image-hosting/"
    }, "\u963F\u91CC\u4E91\u56FE\u5E8A\u914D\u7F6E\u6587\u6863")));
  }

}, _temp)) || _class) || _class);
const style = {
  formItem: {
    marginBottom: "10px"
  }
};
export default AliOSS;