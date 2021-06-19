var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
let Dialog = (_class = (_temp = class Dialog {
  constructor() {
    _initializerDefineProperty(this, "isImageOpen", _descriptor, this);

    _initializerDefineProperty(this, "isLinkOpen", _descriptor2, this);

    _initializerDefineProperty(this, "isAboutOpen", _descriptor3, this);

    _initializerDefineProperty(this, "isVersionOpen", _descriptor4, this);

    _initializerDefineProperty(this, "isFormOpen", _descriptor5, this);

    _initializerDefineProperty(this, "isHistoryOpen", _descriptor6, this);

    _initializerDefineProperty(this, "isSearchOpen", _descriptor7, this);

    _initializerDefineProperty(this, "isSitDownOpen", _descriptor8, this);

    _initializerDefineProperty(this, "setImageOpen", _descriptor9, this);

    _initializerDefineProperty(this, "setLinkOpen", _descriptor10, this);

    _initializerDefineProperty(this, "setAboutOpen", _descriptor11, this);

    _initializerDefineProperty(this, "setVersionOpen", _descriptor12, this);

    _initializerDefineProperty(this, "setFormOpen", _descriptor13, this);

    _initializerDefineProperty(this, "setHistoryOpen", _descriptor14, this);

    _initializerDefineProperty(this, "setSearchOpen", _descriptor15, this);

    _initializerDefineProperty(this, "setSitDownOpen", _descriptor16, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isImageOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isLinkOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isAboutOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isVersionOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isFormOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "isHistoryOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "isSearchOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "isSitDownOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "setImageOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isImageOpen => {
      this.isImageOpen = isImageOpen;
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "setLinkOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isLinkOpen => {
      this.isLinkOpen = isLinkOpen;
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "setAboutOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isAboutOpen => {
      this.isAboutOpen = isAboutOpen;
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "setVersionOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isVersionOpen => {
      this.isVersionOpen = isVersionOpen;
    };
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "setFormOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isFormOpen => {
      this.isFormOpen = isFormOpen;
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "setHistoryOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isHistoryOpen => {
      this.isHistoryOpen = isHistoryOpen;
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "setSearchOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isSearchOpen => {
      this.isSearchOpen = isSearchOpen;
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "setSitDownOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isSitDownOpen => {
      this.isSitDownOpen = isSitDownOpen;
    };
  }
})), _class);
const store = new Dialog();
export default store;