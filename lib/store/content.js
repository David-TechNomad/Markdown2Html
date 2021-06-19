var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
import { CONTENT, STYLE, MARKDOWN_THEME_ID, BASIC_THEME_ID, STYLE_LABELS, THEME_LIST } from "../utils/constant";
import { replaceStyle, addStyleLabel } from "../utils/helper";
import TEMPLATE from "../template/index";
let Content = (_class = (_temp = class Content {
  constructor() {
    _initializerDefineProperty(this, "content", _descriptor, this);

    _initializerDefineProperty(this, "style", _descriptor2, this);

    _initializerDefineProperty(this, "themeList", _descriptor3, this);

    _initializerDefineProperty(this, "markdownEditor", _descriptor4, this);

    _initializerDefineProperty(this, "setThemeList", _descriptor5, this);

    _initializerDefineProperty(this, "setMarkdownEditor", _descriptor6, this);

    _initializerDefineProperty(this, "setContent", _descriptor7, this);

    _initializerDefineProperty(this, "setStyle", _descriptor8, this);

    _initializerDefineProperty(this, "setCustomStyle", _descriptor9, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "content", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "style", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "themeList", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "markdownEditor", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setThemeList", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return themeList => {
      this.themeList = themeList;
      window.localStorage.setItem(THEME_LIST, JSON.stringify(themeList));
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "setMarkdownEditor", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return markdownEditor => {
      this.markdownEditor = markdownEditor;
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "setContent", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return content => {
      this.content = content;
      window.localStorage.setItem(CONTENT, content);
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "setStyle", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return style => {
      this.style = style;
      replaceStyle(MARKDOWN_THEME_ID, style);
    };
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "setCustomStyle", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return (style = "") => {
      // 如果传入则更新
      if (style) {
        window.localStorage.setItem(STYLE, style);
      }

      this.style = window.localStorage.getItem(STYLE);
      replaceStyle(MARKDOWN_THEME_ID, this.style);
    };
  }
})), _class);
const store = new Content(); // 如果为空先把数据放进去

if (window.localStorage.getItem(CONTENT) === null) {
  window.localStorage.setItem(CONTENT, TEMPLATE.content);
}

if (!window.localStorage.getItem(STYLE)) {
  window.localStorage.setItem(STYLE, TEMPLATE.custom);
}

if (!window.localStorage.getItem(THEME_LIST)) {
  window.localStorage.setItem(THEME_LIST, JSON.stringify([{
    themeId: "normal",
    name: "默认主题",
    css: TEMPLATE.normal
  }, {
    themeId: "custom",
    name: "自定义",
    css: TEMPLATE.custom
  }]));
}

store.themeList = JSON.parse(window.localStorage.getItem(THEME_LIST)); // 在head中添加style标签

addStyleLabel(STYLE_LABELS); // 初始化整体主题

replaceStyle(BASIC_THEME_ID, TEMPLATE.basic);
store.content = window.localStorage.getItem(CONTENT);
export default store;