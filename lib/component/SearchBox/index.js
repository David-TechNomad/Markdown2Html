var _dec, _dec2, _class, _temp;

/* eslint-disable react/no-did-update-set-state */

/* eslint-disable react/no-unused-state */
import React, { createRef } from "react";
import { observer, inject } from "mobx-react";
import { Input, Tooltip } from "antd";
import { ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";
import "./SearchBox.css";

function WrappedButton(props) {
  const className = props.className === undefined ? "" : props.className;
  return React.createElement(Tooltip, {
    placement: "bottom",
    mouseEnterDelay: ENTER_DELAY,
    mouseLeaveDelay: LEAVE_DELAY,
    title: props.tipText
  }, React.createElement("button", {
    className: "searchbox-button",
    type: "button",
    onClick: props.onClick
  }, React.createElement(SvgIcon, {
    name: props.icon,
    className: `searchbox-icon ${className}`,
    fill: props.fill
  })));
}

let SearchBox = (_dec = inject("content"), _dec2 = inject("dialog"), _dec(_class = _dec2(_class = observer(_class = (_temp = class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.posChange = direction => {
      this.clearMarks();

      if (typeof direction !== "boolean") {
        return;
      }

      const {
        cursor,
        searchText
      } = this.state;

      if (searchText && cursor) {
        cursor.find(direction);

        if (cursor.atOccurrence) {
          this.highlight();
        } else {
          while (cursor.find(!direction)) {//  从头开始寻找
          }

          cursor.find(direction);
          this.highlight();
        }
      }
    };

    this.handleCaseFold = () => {
      const {
        markdownEditor
      } = this.props.content;
      this.clearMarks();
      this.setState(prevState => {
        const caseFold = !prevState.caseFold;
        const cursor = prevState.searchText ? markdownEditor.getSearchCursor(prevState.searchText, null, {
          caseFold: caseFold
        }) : null;
        return {
          caseFold,
          cursor
        };
      }, () => this.posChange(false));
    };

    this.handleScroll = offset => {
      const {
        markdownEditor
      } = this.props.content;
      const {
        top
      } = markdownEditor.getScrollInfo(offset);
      console.log(offset);
      markdownEditor.scrollTo(null, top + offset);
    };

    this.componentWillUnmount = () => {
      this.handleScroll(this.state.isReplaceOpen ? -72 : -40);
    };

    this.componentDidMount = () => {
      this.searchRef.current.focus();
      this.handleScroll(40);
    };

    this.clearMarks = () => {
      const {
        markdownEditor
      } = this.props.content; // const markers = markdownEditor.getAllMarks();
      // markers.forEach((marker) => marker.clear());

      const cursor = markdownEditor.getCursor();
      markdownEditor.setSelection(cursor);
    };

    this.findContent = value => {
      const {
        markdownEditor
      } = this.props.content;
      this.setState(prevState => {
        const cursor = value ? markdownEditor.getSearchCursor(value, null, {
          caseFold: prevState.caseFold
        }) : null;
        return {
          searchText: value,
          cursor
        };
      }, () => this.posChange(false));
    };

    this.highlight = () => {
      // 高亮前需检测是否有匹配
      if (this.state.cursor.atOccurrence) {
        const {
          markdownEditor
        } = this.props.content;
        const from = this.state.cursor.from();
        const to = this.state.cursor.to(); // markdownEditor.markText(from, to, {
        //   className: "searchbox-text-highlight",
        // });

        markdownEditor.setSelection(from, to); // 防止搜索框挡住文字

        markdownEditor.scrollIntoView(from, 200);
      }
    };

    this.replace = () => {
      const {
        markdownEditor
      } = this.props.content;
      const selection = markdownEditor.getSelection();

      if (selection) {
        // 未选中不进行替换
        markdownEditor.replaceSelection(this.state.replaceText);
        const content = markdownEditor.getValue();
        this.props.content.setContent(content);
        this.posChange(false);
      }
    };

    this.replaceAll = () => {
      const {
        markdownEditor
      } = this.props.content;
      const selection = markdownEditor.getSelection();

      if (selection && this.state.searchText) {
        const content = markdownEditor.getValue();
        const searchReg = new RegExp(this.state.searchText, "g");
        const replaced = content.replace(searchReg, this.state.replaceText);
        this.props.content.setContent(replaced);
      }
    };

    this.handelFoldClick = () => {
      this.setState(prevState => {
        const {
          isReplaceOpen
        } = prevState;
        this.handleScroll(isReplaceOpen ? -32 : 32);
        return {
          isReplaceOpen: !isReplaceOpen
        };
      });
    };

    this.handleClose = () => {
      this.props.dialog.setSearchOpen(false);
      this.clearMarks();
    };

    this.state = {
      replaceText: "",
      searchText: "",
      isReplaceOpen: false,
      cursor: null,
      caseFold: true
    };
    this.searchRef = createRef();
  }
  /** false means next, true means previous */


  render() {
    const {
      isReplaceOpen
    } = this.state;
    return React.createElement("div", {
      "data-replace": isReplaceOpen,
      className: "mdnice-searchbox"
    }, React.createElement("div", null, React.createElement(WrappedButton, {
      icon: "down",
      tipText: "\u5C55\u5F00",
      onClick: this.handelFoldClick,
      className: "searchbox-icon-fold"
    }), React.createElement(Input, {
      size: "small",
      value: this.state.searchText,
      placeholder: "\u6309Enter\u8FDB\u884C\u67E5\u627E",
      onChange: e => this.findContent(e.target.value),
      onPressEnter: () => this.posChange(false),
      ref: this.searchRef
    }), React.createElement(WrappedButton, {
      icon: "fontCase",
      onClick: this.handleCaseFold,
      tipText: "\u5FFD\u7565\u5927\u5C0F\u5199",
      className: "searchbox-icon-casefold",
      fill: this.state.caseFold ? "#40a9ff" : undefined
    }), React.createElement(WrappedButton, {
      icon: "down",
      className: "searchbox-icon-prev",
      onClick: () => this.posChange(true),
      tipText: "\u4E0A\u4E00\u4E2A"
    }), React.createElement(WrappedButton, {
      icon: "down",
      onClick: () => this.posChange(false),
      tipText: "\u4E0B\u4E00\u4E2A"
    }), React.createElement(WrappedButton, {
      icon: "close",
      onClick: this.handleClose,
      tipText: "\u5173\u95ED"
    })), React.createElement("div", {
      className: "mdnice-searchbox-replace"
    }, React.createElement(Input, {
      size: "small",
      value: this.state.replaceText,
      placeholder: "\u6309Enter\u8FDB\u884C\u66FF\u6362",
      onChange: e => {
        this.setState({
          replaceText: e.target.value
        });
      },
      onPressEnter: this.replace
    }), React.createElement(WrappedButton, {
      icon: "replace",
      className: "searchbox-icon-replace",
      onClick: this.replace,
      tipText: "\u66FF\u6362"
    }), React.createElement(WrappedButton, {
      icon: "replaceAll",
      className: "searchbox-icon-replace",
      onClick: this.replaceAll,
      tipText: "\u66FF\u6362\u6240\u6709"
    })));
  }

}, _temp)) || _class) || _class) || _class);
export default SearchBox;