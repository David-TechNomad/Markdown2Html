import * as React from "react";
import { Menu, Button, Radio } from "antd";
import CodeMirror from "@uiw/react-codemirror";
import { diff_match_patch as DiffMatchPath } from "diff-match-patch";
import "./localHistory.css";

const NOOP = () => {};

const prefix = "nice-md-local-history";
const diff = new DiffMatchPath();

class LocalHistory extends React.Component {
  constructor(props) {
    super(props);

    this.getDiffHtml = () => {
      // eslint-disable-next-line no-underscore-dangle
      var a = diff.diff_linesToChars_(this.state.content, this.props.content);
      var lineText1 = a.chars1;
      var lineText2 = a.chars2;
      var diffs = diff.diff_main(lineText1, lineText2, false); // eslint-disable-next-line no-underscore-dangle

      diff.diff_charsToLines_(diffs, a.lineArray);
      const html = diff.diff_prettyHtml(diffs).replace(/&para;/g, "").replace(/<br>/g, "&#8203;<br>&#8203;");
      return html;
    };

    this.selectNav = ({
      selectedKeys
    }) => {
      const {
        Content: content
      } = this.props.documents.find(doc => String(doc.id) === String(selectedKeys[0])) || {};
      this.setState({
        content,
        selectedKeys
      });
    };

    this.handleModeChange = e => {
      this.setState({
        mode: e.target.value
      });
    };

    const {
      documents
    } = this.props;
    this.state = {
      content: documents[0].Content,
      selectedKeys: String(documents[0].id),
      mode: "all"
    };
  }

  render() {
    const {
      documents
    } = this.props;
    return React.createElement(React.Fragment, null, React.createElement(Menu, {
      className: `${prefix}-nav`,
      onSelect: this.selectNav,
      selectedKeys: this.state.selectedKeys
    }, documents.map(d => React.createElement(Menu.Item, {
      key: d.id
    }, d.SaveTime.toLocaleString()))), this.state.content && React.createElement("div", {
      className: `${prefix}-preview`
    }, this.state.mode === "all" ? React.createElement(CodeMirror, {
      key: "local-history",
      value: this.state.content,
      height: "calc(100% - 56px)",
      options: {
        readOnly: true,
        theme: "md-mirror",
        mode: "markdown",
        lineWrapping: true,
        lineNumbers: false
      }
    }) : React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.getDiffHtml()
      },
      className: `${prefix}-diff-content`
    }), React.createElement("div", {
      className: `${prefix}-btn-group`
    }, React.createElement(Radio.Group, {
      onChange: this.handleModeChange,
      value: this.state.mode
    }, React.createElement(Radio, {
      value: "all"
    }, "\u5168\u6587"), React.createElement(Radio, {
      value: "diff"
    }, "\u548C\u5F53\u524D\u5185\u5BB9\u5BF9\u6BD4")), React.createElement("div", null, React.createElement(Button, {
      onClick: this.props.onCancel
    }, "\u53D6\u6D88"), React.createElement(Button, {
      id: "nice-local-history-review",
      type: "primary",
      onClick: () => {
        this.props.onEdit(this.state.content);
      }
    }, "\u6062\u590D\u6B64\u7248\u672C")))));
  }

}

LocalHistory.defaultProps = {
  visible: false,
  document: [{}],
  onEdit: NOOP,
  onCancel: NOOP
};
export default LocalHistory;