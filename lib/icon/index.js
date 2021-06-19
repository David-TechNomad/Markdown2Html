import React from "react";
import Copy from "./Copy";
import Down from "./Down";
import Environment from "./Environment";
import GitHub from "./GitHub";
import Inbox from "./Inbox";
import More from "./More";
import Rabbit from "./Rabbit";
import Smile from "./Smile";
import Mobile from "./Mobile";
import PC from "./PC";
import Wechat from "./Wechat";
import Zhihu from "./Zhihu";
import Juejin from "./Juejin";
import Close from "./Close";
import FontCase from "./FontCase";
import Replace from "./Replace";
import ReplaceAll from "./ReplaceAll";
import User from "./User";
import Pdf from "./Pdf";
import Markdown from "./Markdown";
import Code from "./Code";
import Bold from "./Bold";
import Del from "./Del";
import Font from "./Font";
import Format from "./Format";
import Image from "./Image";
import InlineCode from "./InlineCode";
import Italic from "./Italic";
import Link from "./Link";
import Quote from "./Quote";
import Table from "./Table";
export default (props => {
  switch (props.name) {
    case "copy":
      return React.createElement(Copy, props);

    case "down":
      return React.createElement(Down, props);

    case "environment":
      return React.createElement(Environment, props);

    case "github":
      return React.createElement(GitHub, props);

    case "inbox":
      return React.createElement(Inbox, props);

    case "more":
      return React.createElement(More, props);

    case "rabbit":
      return React.createElement(Rabbit, props);

    case "smile":
      return React.createElement(Smile, props);

    case "pc":
      return React.createElement(PC, props);

    case "mobile":
      return React.createElement(Mobile, props);

    case "wechat":
      return React.createElement(Wechat, props);

    case "pdf":
      return React.createElement(Pdf, props);

    case "zhihu":
      return React.createElement(Zhihu, props);

    case "juejin":
      return React.createElement(Juejin, props);

    case "close":
      return React.createElement(Close, props);

    case "fontCase":
      return React.createElement(FontCase, props);

    case "replace":
      return React.createElement(Replace, props);

    case "replaceAll":
      return React.createElement(ReplaceAll, props);

    case "user":
      return React.createElement(User, props);

    case "markdown":
      return React.createElement(Markdown, props);

    case "bold":
      return React.createElement(Bold, props);

    case "code":
      return React.createElement(Code, props);

    case "del":
      return React.createElement(Del, props);

    case "font":
      return React.createElement(Font, props);

    case "format":
      return React.createElement(Format, props);

    case "image":
      return React.createElement(Image, props);

    case "inlineCode":
      return React.createElement(InlineCode, props);

    case "italic":
      return React.createElement(Italic, props);

    case "link":
      return React.createElement(Link, props);

    case "quote":
      return React.createElement(Quote, props);

    case "table":
      return React.createElement(Table, props);

    default:
      return React.createElement("svg", null);
  }
});