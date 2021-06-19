var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

// mobx
import { observable, action } from "mobx";
let UserInfo = (_class = (_temp = class UserInfo {
  constructor() {
    _initializerDefineProperty(this, "userInfo", _descriptor, this);

    _initializerDefineProperty(this, "userRepo", _descriptor2, this);

    _initializerDefineProperty(this, "setUserInfo", _descriptor3, this);

    _initializerDefineProperty(this, "setUserRepo", _descriptor4, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userInfo", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "userRepo", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "setUserInfo", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return userInfo => {
      this.userInfo = userInfo;
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "setUserRepo", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return userRepoList => {
      this.userRepo = userRepoList;
    };
  }
})), _class);
const userInfo = new UserInfo();
export default userInfo;