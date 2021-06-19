var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
let Footer = (_class = (_temp = class Footer {
  constructor() {
    _initializerDefineProperty(this, "isPasteHtmlChecked", _descriptor, this);

    _initializerDefineProperty(this, "pasteHtml", _descriptor2, this);

    _initializerDefineProperty(this, "pasteText", _descriptor3, this);

    _initializerDefineProperty(this, "setPasteHtmlChecked", _descriptor4, this);

    _initializerDefineProperty(this, "setPasteHtml", _descriptor5, this);

    _initializerDefineProperty(this, "setPasteText", _descriptor6, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isPasteHtmlChecked", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pasteHtml", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "pasteText", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "setPasteHtmlChecked", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isPasteHtmlChecked => {
      this.isPasteHtmlChecked = isPasteHtmlChecked;
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setPasteHtml", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return pasteHtml => {
      this.pasteHtml = pasteHtml;
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "setPasteText", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return pasteText => {
      this.pasteText = pasteText;
    };
  }
})), _class);
const store = new Footer();
export default store;