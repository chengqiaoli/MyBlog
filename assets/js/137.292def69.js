(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{348:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),s("p",[s("a",{attrs:{name:"1b129924"}})]),t._v(" "),s("h3",{attrs:{id:"react16前的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react16前的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" react16前的生命周期")]),t._v(" "),s("p",[t._v("在react16的之前生命周期其实主要分为四个阶段：组件初始化、组件挂载、组件更新、组件卸载。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/218767/1553838272903-bcab18a4-7c25-46ca-8f52-735b456c07fb.png#align=left&display=inline&height=462&name=image.png&originHeight=924&originWidth=2000&size=226738&status=done&width=1000",alt:"image.png"}}),t._v(" "),s("a",{attrs:{name:"1a757f41"}})]),t._v(" "),s("h4",{attrs:{id:"组件初始化阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件初始化阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件初始化阶段")]),t._v(" "),s("p",[s("a",{attrs:{name:"constructor"}})]),t._v(" "),s("h5",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("p",[t._v("在该阶段组件中的构造方法 constructor() 接受 props 接收父组件传下来的 props。还可以在 constructor() 内部定义定义this.state 的初始内容。注意：在组件中写了 constructor 方法就必须在里面使用 super()，并且应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在内部可以使用props")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义state初始值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("a",{attrs:{name:"6a954c08"}})]),t._v(" "),s("h4",{attrs:{id:"组件挂载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件挂载阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件挂载阶段")]),t._v(" "),s("p",[s("a",{attrs:{name:"componentWillMount"}})]),t._v(" "),s("h5",{attrs:{id:"componentwillmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillmount","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillMount")]),t._v(" "),s("p",[t._v("在组件将要挂载到 DOM 前调用，只会被调用一次，在该方法中修改 state 的值，并不会引起组件重新渲染。(数据请求等异步操作不建议写在该方法内，异步操作可能阻塞 UI)。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("a",{attrs:{name:"eaad0dd0"}})]),t._v(" "),s("h5",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[t._v("#")]),t._v(" render()")]),t._v(" "),s("p",[t._v("该函数会创建一个虚拟 DOM，用来表示组件的输出。只能通过 this.props 和 this.state 访问数据，且不能在里面执行 this.setState 更该组件状态。在 render 中可以返回 null、false 或者任何 React 组件，只能出现一个顶级组件，不能返回一组元素(在 react16 中有所改善，可以返回一组元素或单个字符串)。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react组件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("a",{attrs:{name:"componentDidMount"}})]),t._v(" "),s("h5",{attrs:{id:"componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount","aria-hidden":"true"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),s("p",[t._v("组件挂载到 Dom 后调用，且只调用一次。此时组件已经生成对应的 DOM 结构，可以在该函数中通过ReactDOM.findDOMNode()访问到真实的 DOM 或者通过 this.refs.[refName] 属性获取真实 DOM 。(数据请求等异步操作建议写在该方法内)")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行异步数据请求或者获取dom")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"f6953361"}})]),t._v(" "),s("h4",{attrs:{id:"组件更新阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件更新阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件更新阶段")]),t._v(" "),s("p",[s("a",{attrs:{name:"componentWillReceiveProps"}})]),t._v(" "),s("h5",{attrs:{id:"componentwillreceiveprops"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreceiveprops","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillReceiveProps")]),t._v(" "),s("p",[t._v("该函数接受一个参数 nextProps,当父组件重传props时会调用。拿到新的 props 与旧的 props 来比较是否变化，若变化可以通过 this.setState 更新 state。当然也可以不比较新旧 props 值直接更新 state。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state \n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("blockquote",[s("p",[t._v("官方提示：在componentWillReceiveProps中调用 this.setState() 将不会引起第二次渲染。")])]),t._v(" "),s("p",[t._v("由于每次子组件接收到新的props，都会重新渲染一次，除非你使用 shouldComponentUpdate 来阻止重新渲染，但是你可以 componentWillReceiveProps 中根据新的 props 更新 state，虽然更新state也会触发一次重新渲染，但并不会触发额外的render。")]),t._v(" "),s("p",[s("a",{attrs:{name:"2fdfa5f8"}})]),t._v(" "),s("h5",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate","aria-hidden":"true"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps,nextState)")]),t._v(" "),s("p",[t._v("该函数是唯一可以控制组件渲染的生命周期。如果 props 和 state 的改变不需要重新渲染组件。则可以在该函数内返回 false，阻止组件的重新渲染。为了优化组件性能，减少组件的不必要渲染。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return true 更新组件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return false 则不更新组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("a",{attrs:{name:"a3afa298"}})]),t._v(" "),s("h5",{attrs:{id:"componentwillupdate-nextprops-nextstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillupdate-nextprops-nextstate","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillUpdate(nextProps,nextState)")]),t._v(" "),s("p",[t._v("shouldComponentUpdate 方法返回 true 后，在组件即将进行重新渲染前调用该函数(注意不要里面去更新 props 或者 state，会导致组件进入死循环),在这之后会调用 render 方法进行重新渲染。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nextState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要在此处更新props或state")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"d41d8cd9"}})]),t._v(" "),s("h4",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[s("a",{attrs:{name:"4e03cd7e"}})]),t._v(" "),s("h5",{attrs:{id:"componentdidupdate-prevprops-prevstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-prevprops-prevstate","aria-hidden":"true"}},[t._v("#")]),t._v(" componentDidUpdate(prevProps,prevState)")]),t._v(" "),s("p",[t._v("组件被重新渲染后该方法会被调用，可以拿到更新前的 props 和 state 。除了首次渲染时调用的componentDidMount，之后每次渲染都会调用该函数。和 componentDidMount 类似的是可以在这里操作更新后的DOM。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("prevState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("a",{attrs:{name:"2f9d8157"}})]),t._v(" "),s("h4",{attrs:{id:"组件卸载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件卸载阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件卸载阶段")]),t._v(" "),s("p",[s("a",{attrs:{name:"componentWillUnmount"}})]),t._v(" "),s("h5",{attrs:{id:"componentwillunmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount","aria-hidden":"true"}},[t._v("#")]),t._v(" componentWillUnmount")]),t._v(" "),s("p",[t._v("该函数在组件卸载前被调用，可以在执行一些清理工作，比如清除组件中使用的定时器或者事件监听器，以避免引起内存泄漏。"),s("br"),s("br")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清除定时器或事件监听器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"bbf416f0"}})]),t._v(" "),s("h3",{attrs:{id:"react16的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react16的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" react16的生命周期")]),t._v(" "),s("p",[t._v("react16的生命周期新引入了三个新的生命周期函数：getDerivedStateFromProps，getSnapshotBeforeUpdate，componentDidCatch,弃用的三个生命周期函数：componentWillMount、componentWillReceivePorps，componentWillUpdate。其他的生命周期功能与前面介绍的相同。\n"),s("a",{attrs:{name:"484e93dd"}})]),t._v(" "),s("h5",{attrs:{id:"getderivedstatefromprops-props-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops-props-state","aria-hidden":"true"}},[t._v("#")]),t._v(" getDerivedStateFromProps(props, state)")]),t._v(" "),s("p",[t._v("该函数在组件挂载阶段和后续更新阶段调用，根据 props 和 state 两个参数，计算出预期的状态改变，返回一个对象表示新的 state进行更新；如果不需要更新，返回 null 即可。该函数用来替代 componentWillReceiveProps。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据props和state计算出预期的状态改变，返回结果会被送给setState")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"48be8521"}})]),t._v(" "),s("h5",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate","aria-hidden":"true"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),s("p",[t._v("该函数在render之后被调用，可以读取但无法使用DOM的时候。它使得组件能在发生更改之前从 DOM 中捕获一些信息(例如，滚动位置)。返回值将作为componentDidUpdate的第三个参数。该函数配合componentDidUpdate, 可以替代componentWillUpdate。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSnapshotBeforeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getSnapshotBeforeUpdate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react16'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snapshot = '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("a",{attrs:{name:"60ec39b8"}})]),t._v(" "),s("h5",{attrs:{id:"static-getderivedstatefromerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromerror","aria-hidden":"true"}},[t._v("#")]),t._v(" static getDerivedStateFromError()")]),t._v(" "),s("p",[t._v("此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  static getDerivedStateFromError(error) {\n    // 更新 state 使下一次渲染可以显降级 UI\n    return { hasError: true };\n  }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("a",{attrs:{name:"c941aea6"}})]),t._v(" "),s("h5",{attrs:{id:"componentdidcatch-error，info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidcatch-error，info","aria-hidden":"true"}},[t._v("#")]),t._v(" componentDidCatch(error，info)")]),t._v(" "),s("p",[t._v("任何一处的javascript会触发该函数。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("componentDidCatch(error, info) {\n  // 获取到javascript错误\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("a",{attrs:{name:"d41d8cd9-1"}})]),t._v(" "),s("h4",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[s("a",{attrs:{name:"25f9c7fa"}})]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("react16更新后的生命周期可以总结为：\n"),s("a",{attrs:{name:"6a954c08-1"}})]),t._v(" "),s("h5",{attrs:{id:"组件挂载阶段-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件挂载阶段-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件挂载阶段")]),t._v(" "),s("ul",[s("li",[t._v("constructor")]),t._v(" "),s("li",[t._v("getDerivedStateFromProps")]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("componentDidMount\n"),s("a",{attrs:{name:"f6953361-1"}})])]),t._v(" "),s("h5",{attrs:{id:"组件更新阶段-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件更新阶段-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件更新阶段")]),t._v(" "),s("ul",[s("li",[t._v("getDerivedStateFromProps")]),t._v(" "),s("li",[t._v("shouldComponentUpdate")]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("getSnapshotBeforeUpdate")]),t._v(" "),s("li",[t._v("componentDidUpdate\n"),s("a",{attrs:{name:"2f9d8157-1"}})])]),t._v(" "),s("h5",{attrs:{id:"组件卸载阶段-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件卸载阶段-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件卸载阶段")]),t._v(" "),s("ul",[s("li",[t._v("componentWillUnmount")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/218767/1553838592339-afdcbdfd-bcf8-484f-bab7-bb96c674841c.png#align=left&display=inline&height=783&name=image.png&originHeight=1566&originWidth=2816&size=269991&status=done&width=1408",alt:"image.png"}}),s("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/55275775-13f1ff00-5326-11e9-9399-946de9d083ec.png",alt:"image"}})]),t._v(" "),s("ul",[s("li",[t._v("图片来自"),s("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://reactjs.org/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react官方文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);