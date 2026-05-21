import{j as t}from"./index-CW6Sfw94.js";import{B as x}from"./BookLink-pIyIP5HN.js";import{I as s,i as m,S as j}from"./StructuredContent-Bx1UypZ5.js";function y(r){return typeof r=="string"&&/<(p|ul|ol|li|h[1-6]|table|thead|tbody|tr|th|td)\b/i.test(r)}function b(r){return typeof r=="string"&&/\[TABLE\d+\]/.test(r)}function D(r,e=[]){return typeof r!="string"?"":e.reduce((i,n,d)=>{const a=(n==null?void 0:n.Placeholder)||`[TABLE${d+1}]`;if(!i.includes(a)||!Array.isArray(n==null?void 0:n.Data)||n.Data.length===0)return i;const[u=[],...h]=n.Data,p=`
      <table class="table-auto border-collapse border border-white w-full text-sm text-left">
        <thead>
          <tr class="bg-gray-100">
            ${u.map(l=>`<th class="border border-white px-4 py-2 font-medium text-gray-700">${l}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${h.map(l=>`
                <tr>
                  ${l.map(f=>`<td class="border border-white px-4 py-2">${f}</td>`).join("")}
                </tr>
              `).join("")}
        </tbody>
      </table>
    `;return i.replace(a,p)},r)}function c(r,e){return r?m(r)?t.jsx(j,{content:r,tables:e}):typeof r=="string"&&!y(r)&&!b(r)?t.jsx("div",{children:t.jsx(s,{content:r,prefix:"legacy-inline-content"})}):t.jsx("div",{dangerouslySetInnerHTML:{__html:D(r,e)}}):null}function o(r,e,i){return e?t.jsxs("div",{children:[t.jsxs("b",{children:[r,":"]})," ",t.jsx(s,{content:e,prefix:i})]}):null}function B({spell:r}){const e=r;return e?t.jsxs("div",{className:"longTextContainer",children:[t.jsxs("h1",{children:[e.Titolo," (",e.Arcana,")"]}),c(e.DescrizioneAlta,e.Tables),o("Practice",e.Practice,"practice"),o("Action",e.Action,"action"),o("Duration",e.Duration,"duration"),o("Aspect",e.Aspect,"aspect"),o("Cost",e.Cost,"cost"),c(e.DescrizioneMiddle,e.Tables),e.RoteName||e.RoteDice?t.jsxs("p",{children:[e.RoteName?t.jsx("b",{children:t.jsx(s,{content:e.RoteName,prefix:"rote-name"})}):null,e.RoteName&&e.RoteDice?t.jsx("br",{}):null,e.RoteDice?t.jsx(s,{content:e.RoteDice,prefix:"rote-dice"}):null]}):null,c(e.RoteDescrizione,e.Tables),e.Book?t.jsxs("div",{children:[t.jsx("b",{children:"Book:"})," ",x(e.Book)]}):null]}):null}export{B as default};
