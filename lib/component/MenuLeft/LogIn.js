var _dec, _class, _temp;

import React from "react";
import { Tooltip, Button } from "antd";
import { observer, inject } from "mobx-react";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, PROXY, ACCESS_TOKEN, ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import { queryParse, axiosJSON, axiosGithub } from "../../utils/helper";
import SvgIcon from "../../icon";
let LogIn = (_dec = inject("userInfo"), _dec(_class = observer(_class = (_temp = class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.login = () => {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=public_repo`;
    };

    this.loginBack = async () => {
      const res = await axiosJSON.post(PROXY, {
        code: this.code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      });
      localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
      window.location.href = "/";
    };

    this.getUserInfo = async () => {
      try {
        const res = await axiosGithub.get(`/user`);
        this.props.userInfo.setUserInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    this.code = queryParse().code;

    if (this.code) {
      this.loginBack();
    }

    const TOKEN = localStorage.getItem(ACCESS_TOKEN);

    if (TOKEN) {
      axios.defaults.headers.common.Authorization = `token ${TOKEN}`;
      this.getUserInfo();
    }
  }

  render() {
    return React.createElement(Tooltip, {
      placement: "bottom",
      mouseEnterDelay: ENTER_DELAY,
      mouseLeaveDelay: LEAVE_DELAY,
      title: "\u767B\u5F55"
    }, React.createElement(Button, {
      shape: "circle",
      className: "nice-btn-login",
      onClick: this.login
    }, React.createElement(SvgIcon, {
      name: "github",
      className: "nice-btn-login-icon"
    })));
  }

}, _temp)) || _class) || _class);
export default LogIn;