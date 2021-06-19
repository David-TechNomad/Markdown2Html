var _dec, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Input, Select, Form } from "antd";
import { QINIUOSS_IMAGE_HOSTING } from "../../utils/constant";
const {
  Option
} = Select;
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
let QiniuOSS = (_dec = inject("imageHosting"), _dec(_class = observer(_class = (_temp = class QiniuOSS extends Component {
  constructor(props) {
    super(props); // 从localstorage里面读取

    this.regionChange = value => {
      const {
        imageHosting
      } = this.state;
      imageHosting.region = value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.accessKeyChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.accessKey = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.secretKeyChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.secretKey = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.bucketChange = e => {
      const {
        imageHosting
      } = this.state;
      imageHosting.bucket = e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.linkChange = e => {
      this.setState({
        link: e.target.value
      });
      const {
        imageHosting
      } = this.state;
      imageHosting.domain = "https://" + e.target.value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    this.namespaceChange = ({
      target: {
        value
      }
    }) => {
      const {
        imageHosting
      } = this.state;
      imageHosting.namespace = value;
      this.setState({
        imageHosting
      });
      localStorage.setItem(QINIUOSS_IMAGE_HOSTING, JSON.stringify(imageHosting));
    };

    const _imageHosting = JSON.parse(localStorage.getItem(QINIUOSS_IMAGE_HOSTING));

    const link = _imageHosting.domain.split("://")[1];

    this.state = {
      imageHosting: _imageHosting,
      link
    };
  }

  render() {
    const {
      region,
      accessKey,
      secretKey,
      bucket,
      namespace
    } = this.state.imageHosting;
    const {
      link
    } = this.state;
    return React.createElement(Form, formItemLayout, React.createElement(Form.Item, {
      label: "\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",
      style: style.formItem
    }, React.createElement(Input, {
      value: bucket,
      onChange: this.bucketChange,
      placeholder: "\u4F8B\u5982\uFF1Amy-wechat"
    })), React.createElement(Form.Item, {
      label: "\u5B58\u50A8\u533A\u57DF",
      style: style.formItem
    }, React.createElement(Select, {
      value: region,
      onChange: this.regionChange,
      placeholder: "\u4F8B\u5982\uFF1Aqiniu.region.z2"
    }, React.createElement(Option, {
      value: "z0"
    }, "\u534E\u4E1C"), React.createElement(Option, {
      value: "z1"
    }, "\u534E\u5317"), React.createElement(Option, {
      value: "z2"
    }, "\u534E\u5357"), React.createElement(Option, {
      value: "na0"
    }, "\u5317\u7F8E"), React.createElement(Option, {
      value: "as0"
    }, "\u4E1C\u5357\u4E9A"))), React.createElement(Form.Item, {
      label: "AccessKey",
      style: style.formItem
    }, React.createElement(Input, {
      value: accessKey,
      onChange: this.accessKeyChange,
      placeholder: "\u4F8B\u5982\uFF1AqweASDF1234zxcvb"
    })), React.createElement(Form.Item, {
      label: "SecretKey",
      style: style.formItem
    }, React.createElement(Input, {
      value: secretKey,
      onChange: this.secretKeyChange,
      placeholder: "\u4F8B\u5982\uFF1AqweASDF1234zxcvbqweASD"
    })), React.createElement(Form.Item, {
      label: "\u81EA\u5B9A\u4E49\u57DF\u540D",
      style: style.formItem
    }, React.createElement(Input, {
      value: link,
      onChange: this.linkChange,
      addonBefore: "https://",
      placeholder: "\u4F8B\u5982\uFF1Aqiniu.mdnice.com"
    })), React.createElement(Form.Item, {
      label: "\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4",
      style: style.formItem
    }, React.createElement(Input, {
      value: namespace,
      onChange: this.namespaceChange,
      placeholder: "\u4F8B\u5982\uFF1Aimage/"
    })), React.createElement(Form.Item, {
      label: "\u63D0\u793A",
      style: style.formItem
    }, React.createElement("span", null, "\u914D\u7F6E\u540E\u8BF7\u5728\u53F3\u4E0A\u89D2\u8FDB\u884C\u5207\u6362\uFF0C"), React.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: "https://preview.mdnice.com/article/developer/qiniu-image-hosting/"
    }, "\u4E03\u725B\u4E91\u56FE\u5E8A\u914D\u7F6E\u6587\u6863")));
  }

}, _temp)) || _class) || _class);
const style = {
  formItem: {
    marginBottom: "10px"
  }
};
export default QiniuOSS;