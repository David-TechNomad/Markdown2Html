var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
import { IMAGE_HOSTING_TYPE, ALIOSS_IMAGE_HOSTING, QINIUOSS_IMAGE_HOSTING, GITEE_IMAGE_HOSTING, GITHUB_IMAGE_HOSTING } from "../utils/constant";
let ImageHosting = (_class = (_temp = class ImageHosting {
  constructor() {
    _initializerDefineProperty(this, "type", _descriptor, this);

    _initializerDefineProperty(this, "hostingList", _descriptor2, this);

    _initializerDefineProperty(this, "hostingUrl", _descriptor3, this);

    _initializerDefineProperty(this, "hostingName", _descriptor4, this);

    _initializerDefineProperty(this, "setType", _descriptor5, this);

    _initializerDefineProperty(this, "setHostingUrl", _descriptor6, this);

    _initializerDefineProperty(this, "setHostingName", _descriptor7, this);

    _initializerDefineProperty(this, "addImageHosting", _descriptor8, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "type", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "hostingList", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "hostingUrl", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "hostingName", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setType", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return type => {
      this.type = type;
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "setHostingUrl", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return url => {
      this.hostingUrl = url;
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "setHostingName", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return name => {
      this.hostingName = name;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "addImageHosting", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return name => {
      this.hostingList.push({
        value: name,
        label: name
      });
    };
  }
})), _class);
const store = new ImageHosting(); // 如果为空先把数据放进去

if (!window.localStorage.getItem(ALIOSS_IMAGE_HOSTING)) {
  const alioss = JSON.stringify({
    region: "",
    accessKeyId: "",
    accessKeySecret: "",
    bucket: ""
  });
  window.localStorage.setItem(ALIOSS_IMAGE_HOSTING, alioss);
} // 如果为空先把数据放进去


if (!window.localStorage.getItem(QINIUOSS_IMAGE_HOSTING)) {
  const qiniuoss = JSON.stringify({
    region: "",
    accessKey: "",
    secretKey: "",
    bucket: "",
    domain: "https://",
    namespace: ""
  });
  window.localStorage.setItem(QINIUOSS_IMAGE_HOSTING, qiniuoss);
} // 如果为空先把数据放进去


if (!window.localStorage.getItem(GITEE_IMAGE_HOSTING)) {
  const gitee = JSON.stringify({
    username: "",
    repo: "",
    token: ""
  });
  window.localStorage.setItem(GITEE_IMAGE_HOSTING, gitee);
} // 如果为空先把数据放进去


if (!window.localStorage.getItem(GITHUB_IMAGE_HOSTING)) {
  const github = JSON.stringify({
    username: "",
    repo: "",
    token: "",
    jsdelivr: "true"
  });
  window.localStorage.setItem(GITHUB_IMAGE_HOSTING, github);
}

store.type = window.localStorage.getItem(IMAGE_HOSTING_TYPE);
export default store;