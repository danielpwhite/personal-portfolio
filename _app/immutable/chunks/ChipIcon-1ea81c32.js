import{S as u,i as d,s as v,k as h,l as g,m as y,h as f,n as t,O as _,F as o,b as C,C as I,B as m}from"./index-de56b907.js";function q(l){let e,a,c;return{c(){e=h("div"),a=h("img"),this.h()},l(s){e=g(s,"DIV",{class:!0,"data-help":!0});var i=y(e);a=g(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(f),this.h()},h(){t(a,"class","chip-icon-logo svelte-1s6ghiz"),_(a.src,c=l[1])||t(a,"src",c),t(a,"alt",l[0]),o(a,"chip-icon-logo-inverted",l[2]),t(e,"class","chip-icon svelte-1s6ghiz"),t(e,"data-help",l[0]),o(e,"chip-icon-grayscale",l[3])},m(s,i){C(s,e,i),I(e,a)},p(s,[i]){i&2&&!_(a.src,c=s[1])&&t(a,"src",c),i&1&&t(a,"alt",s[0]),i&4&&o(a,"chip-icon-logo-inverted",s[2]),i&1&&t(e,"data-help",s[0]),i&8&&o(e,"chip-icon-grayscale",s[3])},i:m,o:m,d(s){s&&f(e)}}}function z(l,e,a){let{name:c}=e,{logo:s}=e,{inverted:i=!1}=e,{grayscale:r=!0}=e;return l.$$set=n=>{"name"in n&&a(0,c=n.name),"logo"in n&&a(1,s=n.logo),"inverted"in n&&a(2,i=n.inverted),"grayscale"in n&&a(3,r=n.grayscale)},[c,s,i,r]}class b extends u{constructor(e){super(),d(this,e,z,q,v,{name:0,logo:1,inverted:2,grayscale:3})}}export{b as C};
