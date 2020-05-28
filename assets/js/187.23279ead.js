(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{250:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式学习总结-三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式学习总结-三","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式学习总结(三)")]),a._v(" "),t("p",[t("a",{attrs:{name:"75bd7523"}})]),a._v(" "),t("h2",{attrs:{id:"正则表达式回溯法原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式回溯法原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式回溯法原理")]),a._v(" "),t("p",[a._v("回溯的本质上就是深度优先搜索算法，从一初始状态开始匹配，若是匹配到尽头未遇到匹配失败，这种情况下不会发生回溯，但是尝试匹配失败时，接下来的一步就是后退一步或若干步，从 另一种可能“状态”出发，继续搜索，直到所有的“路径”(状态)都试探过，知道匹配成功，这一行为称为回溯。")]),a._v(" "),t("p",[t("a",{attrs:{name:"f7d98826"}})]),a._v(" "),t("h3",{attrs:{id:"贪婪量词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪婪量词","aria-hidden":"true"}},[a._v("#")]),a._v(" 贪婪量词")]),a._v(" "),t("p",[a._v("当多个贪婪量词挨着存在，并相互有冲突时，会尽可能多的匹配")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"12345"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" regex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/(\\d{1,3})(\\d{1,3})/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("regex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// => ["12345", "123", "45", index: 0, input: "12345"]')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 前面匹配123，后面匹配45")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[t("a",{attrs:{name:"b81eec3b"}})]),a._v(" "),t("h3",{attrs:{id:"惰性量词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#惰性量词","aria-hidden":"true"}},[a._v("#")]),a._v(" 惰性量词")]),a._v(" "),t("p",[a._v("惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"12345"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" regex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/(\\d{1,3}?)(\\d{1,3})/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("regex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// => ["1234", "1", "234", index: 0, input: "12345"]')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// 其中 \\d{1,3}? 只匹配到一个字符 "1"，而后面的 \\d{1,3} 匹配了 "234"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[t("a",{attrs:{name:"d3e31548"}})]),a._v(" "),t("h3",{attrs:{id:"分支结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 分支结构")]),a._v(" "),t("p",[a._v("分支结构，可能前面的子模式会形成了局部匹配，如果接下来表达式整体不匹配时，仍会继续尝试剩下的分"),t("br"),a._v("支。这种尝试也可以看成一种回溯")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var string = "candy";\n  var regex = /can|candy/;\n  console.log( string.match(regex) );\n// ["can", index: 0, input: "candy", groups: undefined]\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("a",{attrs:{name:"25f9c7fa"}})]),a._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("贪婪量词“试”的策略是:买衣服砍价。价钱太高了，便宜点，不行，再便宜点。")]),a._v(" "),t("li",[a._v("惰性量词“试”的策略是:卖东西加价。给少了，再多给点行不，还有点少啊，再给点")]),a._v(" "),t("li",[a._v("分支结构“试”的策略是:货比三家。这家不行，换一家吧，还不行，再换")])]),a._v(" "),t("p",[t("a",{attrs:{name:"d4ff0f31"}})]),a._v(" "),t("h2",{attrs:{id:"正则表达式的拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式的拆分","aria-hidden":"true"}},[a._v("#")]),a._v(" 正则表达式的拆分")]),a._v(" "),t("p",[a._v("正则表达式的结构包括字符字面量、字符组、量词、锚、分组、选择分支、反向引用的七种结构：")]),a._v(" "),t("ul",[t("li",[a._v('字面量：匹配一个具体字符，包括不用转义的和需要转义的。比如 a 匹配字符 "a"， 又比如 \\n 匹配换行符，又比如 . 匹配小数点。')]),a._v(" "),t("li",[a._v("字符组 ：匹配一个字符，可以是多种可能之一，比如 [0-9]，表示匹配一个数字。 也有 \\d 的简写形式。 另外还有反义字符组，表示可以是除了特定字符之外任何一个字符，比如 [^0-9]， 表示一个非数字字符，也有 \\D 的简写形式。")]),a._v(" "),t("li",[a._v('量词 ：表示一个字符连续出现，比如 a{1,3} 表示 "a" 字符连续出现 3 次。 另外还有常见的简写形式，比如 a+ 表示 "a" 字符连续出现至少一次。')]),a._v(" "),t("li",[a._v("锚：匹配一个位置，而不是字符。比如 ^ 匹配字符串的开头，又比如 \\b 匹配单词边界， 又比如 (?=\\d) 表示数字前面的位置。")]),a._v(" "),t("li",[a._v('分组：用括号表示一个整体，比如 (ab)+，表示 "ab" 两个字符连续出现多次， 也可以使用非捕获分组 (?:ab)+。')]),a._v(" "),t("li",[a._v('分支：多个子表达式多选一，比如 abc|bcd，表达式匹配 "abc" 或者 "bcd" 字符子串。 反向引用，比如 \\2，表示引用第 2 个分组。')])]),a._v(" "),t("p",[a._v("正则表达式的操作符都体现在结构中，即由特殊字符和普通字符所代表的一个个特殊整体，优先级如下：")]),a._v(" "),t("ul",[t("li",[a._v("转义符：  \\ 优先级为1")]),a._v(" "),t("li",[a._v("括号和方括号： (...)、(?:...)、(?=...)、(?!...)、[...] ，优先级为 2")]),a._v(" "),t("li",[a._v("量词限定符： {m}、{m,n}、{m,}、?、*、+ ，优先级为3")]),a._v(" "),t("li",[a._v("位置和序列： ^、$、\\元字符、一般字符， 优先级为4")]),a._v(" "),t("li",[a._v("管道符(竖杠)： | ，优先级为5")])]),a._v(" "),t("p",[t("a",{attrs:{name:"5d0a9605"}})]),a._v(" "),t("h3",{attrs:{id:"注意要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意要点","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意要点")]),a._v(" "),t("ul",[t("li",[a._v("匹配字符串整体问题：匹配整个字符串，我们经常会在正则前后中加上锚 ^ 和 $，由于优先级问题位置字符和字符序列优先级要比竖杠高。需要注意的是需要吧字符和竖杠用（）括起来。"),t("br"),a._v("\n例子：/^abc|bcd$/ => /^(abc|bcd)$/")]),a._v(" "),t("li",[a._v("量词连缀问题:"),t("br"),a._v("\n例子：  /"),t("a",{attrs:{href:"#fn1"}},[a._v("[1]")]),a._v("{3}+$/ =>  /([abc]{3})+/")]),a._v(" "),t("li",[a._v("元字符转义问题: 在 string 中， \\ 字符也要转义的,也可以把每个字符转义，当然，转义后的结果仍是本身.但不是每个字符都需要转义。\n"),t("ul",[t("li",[a._v("开头的 ^ 必须转义，不然 会把整个字符组，看成反义字符组")])])]),a._v(" "),t("li",[a._v('匹配字符串 "{3,5}"，只需要把正则写成 /{3,5}/，匹配字符串 "[abc]" ，可以写成 /[abc]/，也可以写成 /[abc]/\n'),t("ul",[t("li",[a._v("=、!、:、-、, 等符号，只要不在特殊结构中，并不需要转义")])])])]),a._v(" "),t("p",[a._v("示例："),t("br"),a._v("身份证：")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" regex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^(\\d{15}|\\d{17}[\\dxX])$/")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("IPV4 地址:")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" regex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/^((0{0,2}\\d|0?\\d{2}|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(0{0,2}\\d|0?\\d{2}|1\\d{2}|2[0-4]\\d|25[0-5])$/")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("hr"),a._v(" "),t("ol",[t("li",[a._v("abc "),t("a",{attrs:{href:"#fnref1"}},[a._v("↩︎")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);