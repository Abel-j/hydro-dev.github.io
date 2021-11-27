(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{541:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"hydro-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hydro-cli"}},[s._v("#")]),s._v(" Hydro Cli")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("在使用 cli 之前，请完成数据库配置。"),t("br"),s._v("\n指令中使用 "),t("code",[s._v("<>")]),s._v(" 括起来的参数必须给出，用 "),t("code",[s._v("[]")]),s._v(" 括起来的参数可以给出，若不给出则按照默认设置。"),t("br"),s._v(" "),t("strong",[s._v("用户请根据自己的情况替换掉用 "),t("code",[s._v("<>")]),s._v(" 或是 "),t("code",[s._v("[]")]),s._v(" 包括起来的部分（括号也应替换）")])])]),s._v(" "),t("p",[s._v("cli 可以帮助用户在控制台下快捷地进行一些操作。")]),s._v(" "),t("p",[s._v("下面给出了一些常用的例子。")]),s._v(" "),t("h2",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("很少使用。建议通过 控制面板>导入用户 功能代替")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该用户的邮箱、用户名和密码")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如创建邮箱为 hydro@hydro.local，用户名为 Hydro，密码为 hydrohydro 的用户：")]),s._v("\nhydrooj cli user create hydro@hydro.local Hydro hydrohydro\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("若一切正常，运行该指令后您会从命令行窗口中看到该用户 uid。")]),s._v(" "),t("h2",{attrs:{id:"设置全站管理员"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置全站管理员"}},[s._v("#")]),s._v(" 设置全站管理员")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user setSuperAdmin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如设置 uid 为 2 的用户为管理员：")]),s._v("\nhydrooj cli user setSuperAdmin "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"设置用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置用户权限"}},[s._v("#")]),s._v(" 设置用户权限")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user setPriv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("priv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("关于参数 "),t("code",[s._v("[priv]")]),s._v(" ，可阅读 "),t("RouterLink",{attrs:{to:"/dev/PERM_PRIV/"}},[s._v("此处")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"更改用户密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改用户密码"}},[s._v("#")]),s._v(" 更改用户密码")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user setPassword "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如将 uid 为 1 的用户的密码改为 hydrohydro：")]),s._v("\nhydrooj cli user setPassword "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" hydrohydro\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"创建评测账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建评测账号"}},[s._v("#")]),s._v(" 创建评测账号")]),s._v(" "),t("p",[s._v("先创建一个账号。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("您需要留意运行此指令返回的数字，表示该用户的 "),t("code",[s._v("uid")]),s._v("，需要填入下面的指令中，然后给予该账号评测权限。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user setJudge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("完成后将配置的用户名及密码写入评测机配置文件，评测机即可连接到网页端。")]),s._v(" "),t("h2",{attrs:{id:"黑名单相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#黑名单相关"}},[s._v("#")]),s._v(" 黑名单相关")]),s._v(" "),t("p",[s._v("用户封禁：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user setPriv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("IP/邮箱域名封禁：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key 格式为 ip::xxx.xxx.xxx.xxx （封禁 IP 访问） 或是 mail::xxx.com （禁止 xxx.com 的邮箱注册）")]),s._v("\nhydrooj cli blacklist "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <key> 拉入黑名单，时长为 [duration] （以月为单位的整数，默认为 12，若 duration=0 则永久封禁）")]),s._v("\nhydrooj cli blacklist get "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取黑名单中有关 <key> 的信息")]),s._v("\nhydrooj cli blacklist del "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <key> 移出黑名单")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"命令列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令列表"}},[s._v("#")]),s._v(" 命令列表")]),s._v(" "),t("p",[s._v("所有于 "),t("a",{attrs:{href:"https://github.com/hydro-dev/Hydro/tree/master/packages/hydrooj/src/model",target:"_blank",rel:"noopener noreferrer"}},[s._v("此文件夹"),t("OutboundLink")],1),s._v(" 下的函数均可用 cli 调用。")]),s._v(" "),t("p",[s._v("这里并没有列出所有可以运行的指令，因为其中很多功能我们更推荐通过 Web 访问。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrooj cli user create "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("regip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("priv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建邮箱为 <mail>，用户名为 <uname>，密码为 <password>，ID 为 [uid]，注册 ip 为 [regip]，权限为 [priv] 的用户")]),s._v("\nhydrooj cli user setPriv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("priv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 ID 为 <uid> 的用户的权限设为 <priv>")]),s._v("\nhydrooj cli user setPassword "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 ID 为 <uid> 的用户的密码设置为 <password>")]),s._v("\nhydrooj cli user setEmail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 ID 为 <uid> 的用户的邮箱设置为 <mail>")]),s._v("\nhydrooj cli user setSuperAdmin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 ID 为 <uid> 的用户设为全站管理员")]),s._v("\nhydrooj cli system "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改系统设置 <key> 值为 <value>")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);