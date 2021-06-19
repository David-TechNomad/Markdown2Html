var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
import { TEMPLATE_NUM, CODE_NUM, CODE_THEME_ID, CODE_OPTIONS, PREVIEW_TYPE, IS_SYNC_SCROLL, IS_CONTAIN_IMG_NAME, IS_MAC_CODE } from "../utils/constant";
import TEMPLATE from "../template/index";
import { replaceStyle } from "../utils/helper";
let Navbar = (_class = (_temp = class Navbar {
  constructor() {
    _initializerDefineProperty(this, "isSyncScroll", _descriptor, this);

    _initializerDefineProperty(this, "isContainImgName", _descriptor2, this);

    _initializerDefineProperty(this, "templateNum", _descriptor3, this);

    _initializerDefineProperty(this, "codeNum", _descriptor4, this);

    _initializerDefineProperty(this, "isMacCode", _descriptor5, this);

    _initializerDefineProperty(this, "previewType", _descriptor6, this);

    _initializerDefineProperty(this, "setSyncScroll", _descriptor7, this);

    _initializerDefineProperty(this, "setContainImgName", _descriptor8, this);

    _initializerDefineProperty(this, "setTemplateNum", _descriptor9, this);

    _initializerDefineProperty(this, "setCodeNum", _descriptor10, this);

    _initializerDefineProperty(this, "setMacCode", _descriptor11, this);

    _initializerDefineProperty(this, "setPreviewType", _descriptor12, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isSyncScroll", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isContainImgName", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "templateNum", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "codeNum", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isMacCode", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "previewType", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "setSyncScroll", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isSyncScroll => {
      this.isSyncScroll = isSyncScroll;
      window.localStorage.setItem(IS_SYNC_SCROLL, isSyncScroll);
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "setContainImgName", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isContainImgName => {
      this.isContainImgName = isContainImgName;
      window.localStorage.setItem(IS_CONTAIN_IMG_NAME, isContainImgName);
    };
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "setTemplateNum", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return templateNum => {
      this.templateNum = templateNum;
      window.localStorage.setItem(TEMPLATE_NUM, templateNum);
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "setCodeNum", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (codeNum, isMacCode) => {
      this.codeNum = codeNum;
      window.localStorage.setItem(CODE_NUM, codeNum); // 更新style

      const {
        id,
        macId
      } = CODE_OPTIONS[codeNum]; // 非微信代码块

      if (codeNum !== 0) {
        //  Mac 风格代码
        if (isMacCode) {
          replaceStyle(CODE_THEME_ID, TEMPLATE.code[macId]);
        } else {
          replaceStyle(CODE_THEME_ID, TEMPLATE.code[id]);
        }
      }
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "setMacCode", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isMacCode => {
      this.isMacCode = isMacCode;
      window.localStorage.setItem(IS_MAC_CODE, isMacCode);
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "setPreviewType", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return previewType => {
      this.previewType = previewType;
      window.localStorage.setItem(PREVIEW_TYPE, previewType);
    };
  }
})), _class);
const store = new Navbar(); // 如果为空先把数据放进去

if (!window.localStorage.getItem(TEMPLATE_NUM)) {
  window.localStorage.setItem(TEMPLATE_NUM, 0);
} // 如果为空先把数据放进去


if (!window.localStorage.getItem(CODE_NUM)) {
  window.localStorage.setItem(CODE_NUM, 0);
}

if (!window.localStorage.getItem(PREVIEW_TYPE)) {
  window.localStorage.setItem(PREVIEW_TYPE, "mobile");
}

if (!window.localStorage.getItem(IS_SYNC_SCROLL)) {
  window.localStorage.setItem(IS_SYNC_SCROLL, true);
}

if (!window.localStorage.getItem(IS_CONTAIN_IMG_NAME)) {
  window.localStorage.setItem(IS_CONTAIN_IMG_NAME, false);
}

if (!window.localStorage.getItem(IS_MAC_CODE)) {
  window.localStorage.setItem(IS_MAC_CODE, false);
} // 获取之前选择的主题状态


store.templateNum = parseInt(window.localStorage.getItem(TEMPLATE_NUM), 10);
store.codeNum = parseInt(window.localStorage.getItem(CODE_NUM), 10);
store.previewType = window.localStorage.getItem(PREVIEW_TYPE);
store.isSyncScroll = window.localStorage.getItem(IS_SYNC_SCROLL) === "true";
store.isContainImgName = window.localStorage.getItem(IS_CONTAIN_IMG_NAME) === "true";
store.isMacCode = window.localStorage.getItem(IS_MAC_CODE) === "true"; // 初始化代码主题

const {
  macId,
  id
} = CODE_OPTIONS[store.codeNum];

if (store.codeNum !== 0) {
  if (store.isMacCode) {
    replaceStyle(CODE_THEME_ID, TEMPLATE.code[macId]);
  } else {
    replaceStyle(CODE_THEME_ID, TEMPLATE.code[id]);
  }
}

export default store;