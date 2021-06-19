var _dec, _dec2, _class, _temp;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Empty, message } from "antd";
import LocalHistory from "../LocalHistory";
import { AutoSaveInterval, getLocalDocuments, setLocalDocuments, setLocalDraft } from "../LocalHistory/util";
import IndexDB from "../LocalHistory/indexdb";
import debouce from "lodash.debounce";
const DocumentID = 1;
let HistoryDialog = (_dec = inject("dialog"), _dec2 = inject("content"), _dec(_class = _dec2(_class = observer(_class = (_temp = class HistoryDialog extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.db = null;

    this.closeDialog = () => {
      this.props.dialog.setHistoryOpen(false);
    };

    this.editLocalDocument = content => {
      this.props.content.setContent(content);
      message.success("恢复成功！");
      this.closeDialog();
    };

    this.autoSave = async (isRecent = false) => {
      const Content = this.props.content.markdownEditor.getValue();

      if (Content.trim() !== "") {
        const document = {
          Content,
          DocumentID: this.props.documentID,
          SaveTime: new Date()
        };
        const setLocalDocumentMethod = isRecent && this.state.documents.length > 0 ? setLocalDraft : setLocalDocuments;
        await setLocalDocumentMethod(this.db, this.state.documents, document);
        await this.overrideLocalDocuments(this.props.documentID);
      }
    };

    this.state = {
      documents: []
    };
  }

  async componentDidMount() {
    await this.initIndexDB();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  get editor() {
    return this.props.content.markdownEditor;
  } //
  // async UNSAFE_componentWillReceiveProps(nextProps) {
  //   // 文档 id 变更
  //   if (this.props.documentID !== nextProps.documentID && nextProps.documentID != null) {
  //     if (this.db) {
  //       await this.overrideLocalDocuments(nextProps.documentID);
  //     }
  //   }
  // }
  //


  async initIndexDB() {
    try {
      const indexDB = new IndexDB({
        name: "mdnice-local-history",
        storeName: "customers",
        storeOptions: {
          keyPath: "id",
          autoIncrement: true
        },
        storeInit: objectStore => {
          objectStore.createIndex("DocumentID", "DocumentID", {
            unique: false
          });
          objectStore.createIndex("SaveTime", "SaveTime", {
            unique: false
          });
        }
      });
      this.db = await indexDB.init();

      if (this.db && this.props.documentID) {
        await this.overrideLocalDocuments(this.props.documentID);
      } // 每隔一段时间自动保存


      this.timer = setInterval(async () => {
        await this.autoSave();
      }, AutoSaveInterval); // 每改变内容自动保存最近的一条

      this.editor.on && this.editor.on("change", debouce(async () => {
        await this.autoSave(true);
      }, 1000));
    } catch (e) {
      console.error(e);
    }
  } // 刷新本地历史文档


  async overrideLocalDocuments(documentID) {
    const localDocuments = await getLocalDocuments(this.db, +documentID); // console.log('refresh local',localDocuments);

    this.setState({
      documents: localDocuments
    });
  }

  render() {
    return React.createElement(Modal, {
      className: "nice-md-local-history",
      title: "\u672C\u5730\u5386\u53F2",
      centered: true,
      width: 1080,
      visible: this.props.dialog.isHistoryOpen,
      onCancel: this.closeDialog,
      footer: null
    }, this.state.documents && this.state.documents.length > 0 ? React.createElement(LocalHistory, {
      content: this.props.content.content,
      documents: this.state.documents,
      documentID: this.props.documentID,
      onEdit: this.editLocalDocument,
      onCancel: this.closeDialog
    }) : React.createElement(Empty, {
      style: {
        width: "100%"
      },
      description: "\u6682\u65E0\u672C\u5730\u5386\u53F2"
    }));
  }

}, _temp)) || _class) || _class) || _class);
HistoryDialog.defaultProps = {
  documentID: DocumentID
};
export default HistoryDialog;