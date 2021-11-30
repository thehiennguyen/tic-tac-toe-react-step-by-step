(this["webpackJsonptic-tac-toe-react-step-by-step"]=this["webpackJsonptic-tac-toe-react-step-by-step"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(2),n=r(3),i=r(5),a=r(4),c=r(1),o=r.n(c),u=r(8),l=r.n(u),h=r(6),j=(r(13),r(0));function d(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(o.a.Component),O=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNest:!0},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNest?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNest:!this.state.xIsNest}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNest:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares),i=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNest?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ol",{children:i})]})]})}}]),r}(o.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(h.a)(t[r],3),n=s[0],i=s[1],a=s[2];if(e[n]&&e[n]===e[i]&&e[n]===e[a])return e[n]}return null}r(15);function x(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var m=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(x,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(o.a.Component),f=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNest:!0},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||r[e]||(r[e]=this.state.xIsNest?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNest:!this.state.xIsNest}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNest:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=p(s.squares),i=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNest?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(m,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ol",{children:i})]})]})}}]),r}(o.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(h.a)(t[r],3),n=s[0],i=s[1],a=s[2];if(e[n]&&e[n]===e[i]&&e[n]===e[a])return e[n]}return null}var N=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={originalVersion:!0},n}return Object(n.a)(r,[{key:"onChange",value:function(){this.setState({originalVersion:!this.state.originalVersion})}},{key:"render",value:function(){var e=this,t=this.state.originalVersion?"Original Version":"Enhanced Version",r=this.state.originalVersion?Object(j.jsx)(O,{}):Object(j.jsx)(f,{});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"This is based on reactjs.org tutorial"}),Object(j.jsx)("p",{children:Object(j.jsx)("i",{children:Object(j.jsx)("a",{href:"https://reactjs.org/tutorial/tutorial.html",children:"reference"})})}),Object(j.jsxs)("p",{children:["Toggle the checkbox to switch between ",Object(j.jsx)("strong",{children:"Original Version"})," and ",Object(j.jsx)("strong",{children:"Enhanced Version"})]}),Object(j.jsx)("input",{type:"checkbox",id:"version-toggle",value:this.state.originalVersion,onChange:function(){return e.onChange()}}),Object(j.jsx)("label",{htmlFor:"version-toggle",children:t}),Object(j.jsx)("fieldset",{children:r})]})}}]),r}(o.a.Component);l.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d968aa17.chunk.js.map