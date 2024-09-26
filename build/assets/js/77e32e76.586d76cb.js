"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3777],{7490:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=e(4848),i=e(8453);const r={},s=void 0,a={id:"web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b",title:"1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b",description:"TAURI -Lottie -window-vibrancy \u7a97\u53e3\u7f8e\u5316",source:"@site/ail_basis/7-web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b.md",sourceDirName:"7-web\u57fa\u7840",slug:"/web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b",permalink:"/node_docs_docusaurus_temp/ailbasis/web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/ail_basis/7-web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u5f00\u5c4f\u52a8\u753b.md",tags:[],version:"current",lastUpdatedBy:"\u201cAiluntz\u201d",lastUpdatedAt:1727340015e3,frontMatter:{},sidebar:"ailbasis",previous:{title:"1.1\u914d\u7f6egit\u9759\u6001\u7f51\u7ad9",permalink:"/node_docs_docusaurus_temp/ailbasis/web\u57fa\u7840/1.1\u914d\u7f6egit\u9759\u6001\u7f51\u7ad9"},next:{title:"1.2\u914d\u7f6etauri\u914d\u7f6e\u78e8\u7802\u80cc\u666f",permalink:"/node_docs_docusaurus_temp/ailbasis/web\u57fa\u7840/1.2\u914d\u7f6etauri\u914d\u7f6e\u78e8\u7802\u80cc\u666f"}},c={},d=[{value:"TAURI -Lottie -window-vibrancy \u7a97\u53e3\u7f8e\u5316",id:"tauri--lottie--window-vibrancy-\u7a97\u53e3\u7f8e\u5316",level:3}];function l(n){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"tauri--lottie--window-vibrancy-\u7a97\u53e3\u7f8e\u5316",children:"TAURI -Lottie -window-vibrancy \u7a97\u53e3\u7f8e\u5316"}),"\n",(0,o.jsx)(t.p,{children:"\u5b89\u88c5 Lottie"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"npm install lottie-web\n"})}),"\n",(0,o.jsx)(t.p,{children:"tauri \u8bbe\u7f6e\u7a0b\u5e8f\u7a97\u53e3\u900f\u660e"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'"transparent": true,\n"decorations": false\n'})}),"\n",(0,o.jsx)(t.p,{children:"JSON\u6587\u4ef6\u653e\u5230\u9879\u76ee\u4e0b\u7684 public"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"https://github.com/airbnb/lottie-web/blob/master/demo/navidad/data.json #\u793a\u4f8bjson\n"})}),"\n",(0,o.jsx)(t.p,{children:"react\u4fee\u6539src\u4e2dApp.jsx\u6587\u4ef6\u4ee3\u7801"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"import { useState, useEffect } from 'react';\nimport reactLogo from './assets/react.svg';\nimport viteLogo from '/vite.svg';\nimport './App.css';\nimport lottie from 'lottie-web';\nimport MyNewPage from './MyNewPage/MyNewPage';\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [showAnimation, setShowAnimation] = useState(true);\n\n  useEffect(() => {\n    const container = document.getElementById('lottie-container');\n    if (container) {\n      lottie.loadAnimation({\n        container: container,\n        renderer: 'svg',\n        loop: true,\n        autoplay: true,\n        path: '/data.json', // \u66ff\u6362\u4e3a\u4f60\u7684\u52a8\u753b\u6587\u4ef6\u8def\u5f84\n      });\n    }\n\n    // 5\u79d2\u540e\u9690\u85cf\u52a8\u753b\n    const timer = setTimeout(() => {\n      setShowAnimation(false);\n      lottie.destroy(); // \u505c\u6b62\u5e76\u9500\u6bc1\u52a8\u753b\n    }, 2000);\n\n    return () => {\n      clearTimeout(timer)\n      // \u6e05\u7406\u52a8\u753b\n      if (lottie) {\n        lottie.destroy();\n      }\n    };\n  }, []);\n\n  return (\n    <>\n      {showAnimation && (\n        <div \n          id=\"lottie-container\" \n          style={{\n            width: '100vw',\n            height: '100vh',\n            position: 'fixed',\n            top: 0,\n            left: 0,\n            zIndex: 9999, // \u786e\u4fdd\u52a8\u753b\u5728\u6700\u4e0a\u5c42\n            backgroundColor: 'transparent', // \u53ef\u9009: \u8bbe\u7f6e\u80cc\u666f\u989c\u8272\n          }}\n        ></div>\n      )}\n      <div style={{ display: showAnimation ? 'none' : 'block' }}>\n        <div>\n          <a href=\"https://vitejs.dev\" target=\"_blank\">\n            <img src={viteLogo} className=\"logo\" alt=\"Vite logo\" />\n          </a>\n          <a href=\"https://react.dev\" target=\"_blank\">\n            <img src={reactLogo} className=\"logo react\" alt=\"React logo\" />\n          </a>\n        </div>\n        <h1>Vite + React</h1>\n        <div className=\"card\">\n          <button onClick={() => setCount((count) => count + 1)}>\n            count is {count}\n          </button>\n          <p>\n            Edit <code>src/App.jsx</code> and save to test HMR\n          </p>\n        </div>\n        <p className=\"read-the-docs\">\n          Click on the Vite and React logos to learn more\n        </p>\n        <MyNewPage />\n      </div>\n    </>\n  );\n}\n\nexport default App;\n\n"})}),"\n",(0,o.jsx)(t.p,{children:"VUE\u4fee\u6539App.vue\u6587\u4ef6\u4ee3\u7801"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"<script setup lang=\"ts\">\n// This starter template is using Vue 3 <script setup> SFCs\n// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup\nimport Greet from \"./components/Greet.vue\";\n<\/script>\n\n<template>\n  <div class=\"container\">\n    <h1>\u6b22\u8fce\u4f7f\u7528Tauri\uff01</h1>\n  <div id=\"lottie-container\"></div>\n  </div>\n</template>\n\n<script lang='ts'>\nimport lottie from 'lottie-web';\n\nexport default {\n  mounted() {\n    const container = document.getElementById('lottie-container');\n    if (container) {\n      const animation = lottie.loadAnimation({\n        container: container,\n        renderer: 'svg',\n        loop: true,\n        autoplay: true,\n        path: '/data.json' // \u66ff\u6362\u4e3a\u4f60\u7684\u52a8\u753b\u6587\u4ef6\u8def\u5f84\n      });\n    }\n  }\n};\n<\/script>\n"})})]})}function u(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>a});var o=e(6540);const i={},r=o.createContext(i);function s(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);