import{g as k}from"./index-64892287.js";function g(o,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in o)){const t=Object.getOwnPropertyDescriptor(r,e);t&&Object.defineProperty(o,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var l,d;function y(){if(d)return l;d=1,l=o,o.displayName="robotframework",o.aliases=[];function o(i){(function(n){var r={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},e={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function t(b,m){var a={};a["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"};for(var p in m)a[p]=m[p];return a.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},a.variable=e,a.comment=r,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return b}),"im"),alias:"section",inside:a}}var s={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},u={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:e}},c={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:e}};n.languages.robotframework={settings:t("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:t("Variables"),"test-cases":t("Test Cases",{"test-name":u,documentation:s,property:c}),keywords:t("Keywords",{"keyword-name":u,documentation:s,property:c}),tasks:t("Tasks",{"task-name":u,documentation:s,property:c}),comment:r},n.languages.robot=n.languages.robotframework})(i)}return l}var f=y();const v=k(f),h=g({__proto__:null,default:v},[f]);export{h as r};
