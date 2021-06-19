var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

import { observable, action } from "mobx";
let View = (_class = (_temp = class View {
  constructor() {
    _initializerDefineProperty(this, "isEditAreaOpen", _descriptor, this);

    _initializerDefineProperty(this, "isPreviewAreaOpen", _descriptor2, this);

    _initializerDefineProperty(this, "isStyleEditorOpen", _descriptor3, this);

    _initializerDefineProperty(this, "isImmersiveEditing", _descriptor4, this);

    _initializerDefineProperty(this, "setEditAreaOpen", _descriptor5, this);

    _initializerDefineProperty(this, "setPreviewAreaOpen", _descriptor6, this);

    _initializerDefineProperty(this, "setStyleEditorOpen", _descriptor7, this);

    _initializerDefineProperty(this, "setImmersiveEditing", _descriptor8, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isEditAreaOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isPreviewAreaOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isStyleEditorOpen", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isImmersiveEditing", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setEditAreaOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isEditAreaOpen => {
      this.isEditAreaOpen = isEditAreaOpen;
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "setPreviewAreaOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isPreviewAreaOpen => {
      this.isPreviewAreaOpen = isPreviewAreaOpen;
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "setStyleEditorOpen", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isStyleEditorOpen => {
      this.isStyleEditorOpen = isStyleEditorOpen;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "setImmersiveEditing", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return isImmersiveEditing => {
      this.isImmersiveEditing = isImmersiveEditing;
    };
  }
})), _class);
const store = new View();
export default store;