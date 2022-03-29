(()=>{"use strict";var e={d:(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{handler:()=>pe});const r="POST";function t(e,n,r,t,u,i,o,c,s){switch(arguments.length){case 1:return e;case 2:return function(){return n(e.apply(this,arguments))};case 3:return function(){return r(n(e.apply(this,arguments)))};case 4:return function(){return t(r(n(e.apply(this,arguments))))};case 5:return function(){return u(t(r(n(e.apply(this,arguments)))))};case 6:return function(){return i(u(t(r(n(e.apply(this,arguments))))))};case 7:return function(){return o(i(u(t(r(n(e.apply(this,arguments)))))))};case 8:return function(){return c(o(i(u(t(r(n(e.apply(this,arguments))))))))};case 9:return function(){return s(c(o(i(u(t(r(n(e.apply(this,arguments)))))))))}}}function u(e,n,r,t,u,i,o,c,s,a,f,p,d,l,y,m,g,v,h,I){switch(arguments.length){case 1:return e;case 2:return n(e);case 3:return r(n(e));case 4:return t(r(n(e)));case 5:return u(t(r(n(e))));case 6:return i(u(t(r(n(e)))));case 7:return o(i(u(t(r(n(e))))));case 8:return c(o(i(u(t(r(n(e)))))));case 9:return s(c(o(i(u(t(r(n(e))))))));case 10:return a(s(c(o(i(u(t(r(n(e)))))))));case 11:return f(a(s(c(o(i(u(t(r(n(e))))))))));case 12:return p(f(a(s(c(o(i(u(t(r(n(e)))))))))));case 13:return d(p(f(a(s(c(o(i(u(t(r(n(e))))))))))));case 14:return l(d(p(f(a(s(c(o(i(u(t(r(n(e)))))))))))));case 15:return y(l(d(p(f(a(s(c(o(i(u(t(r(n(e))))))))))))));case 16:return m(y(l(d(p(f(a(s(c(o(i(u(t(r(n(e)))))))))))))));case 17:return g(m(y(l(d(p(f(a(s(c(o(i(u(t(r(n(e))))))))))))))));case 18:return v(g(m(y(l(d(p(f(a(s(c(o(i(u(t(r(n(e)))))))))))))))));case 19:return h(v(g(m(y(l(d(p(f(a(s(c(o(i(u(t(r(n(e))))))))))))))))));case 20:return I(h(v(g(m(y(l(d(p(f(a(s(c(o(i(u(t(r(n(e)))))))))))))))))))}}var i=function(e){return"Left"===e._tag},o=function(e){return{_tag:"Left",left:e}},c=function(e){return{_tag:"Right",right:e}};function s(e,n){return function(e,n){try{return c(e())}catch(e){return o(n(e))}}((function(){return JSON.parse(e)}),n)}function a(e,n){return function(r){return i(r)?e(r.left):n(r.right)}}var f=function(e){return function(n){return i(n)?n:c(e(n.right))}},p=function(e,n){return function(r){return i(r)?o(e(r.left)):c(n(r.right))}},d=function(e){return function(n){return i(n)?n:e(n.right)}},l=function(e){return function(){return Promise.resolve(e())}},y=function(e){return function(n){return function(){return n().then(e)}}},m=function(e){return function(){return Promise.resolve(e)}},g=function(e){return function(n){return function(){return n().then((function(n){return e(n)()}))}}},v=t(o,m),h=t(c,m),I=y(c),A=t(l,I),E=a(v,(function(e){return h(e)}));function b(e,n){return function(){return e().then(c,(function(e){return o(n(e))}))}}var S=t(a,g),N=function(e){return function(n){return u(n,g(a(e,m)))}},T=function(e){return y(f(e))},_=t(p,y),C=function(e){return y(function(e){return function(n){return i(n)?o(e(n.left)):n}}(e))},P=function(e){return t(y((function(e){return function(n){return function(e){return function(n){return i(n)?n:i(e)?e:c(n.right(e.right))}}(n)(e)}})),function(e){return function(n){return function(){return Promise.all([n(),e()]).then((function(e){return(0,e[0])(e[1])}))}}}(e))},O=function(e){return function(n){return u(n,g(a(v,e)))}},w=O,D=function(e){return O((function(n){return u(e(n),T((function(){return n})))}))},M=function(e){return g(a(e,h))},j={URI:"TaskEither",bimap:function(e,n,r){return u(e,_(n,r))},mapLeft:function(e,n){return u(e,C(n))},map:function(e,n){return u(e,T(n))},of:h,ap:function(e,n){return u(e,P(n))},chain:function(e,n){return u(e,w(n))},alt:function(e,n){return u(e,M(n))},fromIO:A,fromTask:I,throwError:v};const B=e=>({type:"ClientError",message:e}),q=e=>({type:"ServerError",message:e});function x(e,n){for(var r=e.length,t=Array(r+1),u=0;u<r;u++)t[u]=e[u];return t[r]=n,t}var W=function(){return L},k=function(e,n,r){return u(e,$(n,r))},J=function(e,n,r){for(var t=e.length,u=n,i=0;i<t;i++)u=r(i,u,e[i]);return u},$=function(e,n){return K(e,(function(e,r,t){return n(r,t)}))},K=function(e,n){return function(r){return J(r,e,n)}},L=[],R=function(e){return function(n){return k(n,e.of(W()),(function(n,r){return e.ap(e.map(n,(function(e){return function(n){return x(e,n)}})),r)}))}};const U=e=>!e.trim(),F=e=>Object.entries(e.queryStringParameters).some((e=>U(e[0])||U(e[1])))?o(B("Query string validation error")):c(e),G=e=>Object.keys(e).some(U)?o(B("Body contained empty key")):c(e),V=e=>{return E((n=e).Item?c(n):o({type:"NotFoundError"}));var n},Q=e=>R(j)(e.map((e=>V(e)))),z=e=>({id:e.queryStringParameters.id,clientId:e.queryStringParameters.clientId}),H=e=>{const n=e;return{id:n.id,clientId:n.clientId,name:n.name,age:n.age,cuteness:n.cuteness,type:n.type}},X=new(require("aws-sdk").DynamoDB.DocumentClient)({region:"eu-west-1"}),Y=e=>X.get(e).promise(),Z=e=>X.put(e).promise(),ee=e=>u((e=>({TableName:process.env.DATABASE_NAME,Key:{ppId:`P#${e.clientId}`,psId:e.id}}))(e),(e=>b((()=>Y(e)),q)),w(V),T((e=>e.Item))),ne=e=>u((e=>({TableName:process.env.DATABASE_NAME,Item:{ppId:`P#${e.clientId}`,psId:e.id,id:e.id,clientId:e.clientId,name:e.name,age:e.age,cuteness:e.cuteness,type:e.type}}))(e),(e=>b((()=>Z(e)),q))),re=e=>({statusCode:200,body:e}),te=()=>({statusCode:201}),ue=e=>{switch(e.type){case"ClientError":return{statusCode:400,body:e.message};case"NotFoundError":return{statusCode:404};case"ServerError":return console.warn(e.message),{statusCode:500,body:"Internal Server Error"};default:return e}},ie=e=>({id:e.queryStringParameters.id,type:e.queryStringParameters.type}),oe=e=>{const n=e;return{id:n.id,age:n.age,type:n.type}},ce=e=>({TableName:process.env.DATABASE_NAME,Key:{ppId:`W#${e.type}`,psId:e.id}}),se=e=>({TableName:process.env.DATABASE_NAME,Key:{ppId:"W#C",psId:e.type}}),ae=e=>u([ce(e),se(e)],(e=>{return n=e,R(j)(n.map((e=>b((()=>Y(e)),q))));var n}),w(Q),T((e=>e.map((e=>e.Item))))),fe=e=>u((e=>({TableName:process.env.DATABASE_NAME,Item:{ppId:"W#C",psId:e.type,itemCount:0},ConditionExpression:"attribute_not_exists(itemCount)"}))(e),(e=>b((()=>Z(e)),q)),S((()=>h(e)),(()=>h(e))),D((e=>b((()=>Z((e=>({TableName:process.env.DATABASE_NAME,Item:{ppId:`W#${e.type}`,psId:e.id,id:e.id,age:e.age,type:e.type}}))(e))),q))),D((e=>b((()=>(e=>X.update(e).promise())((e=>({TableName:process.env.DATABASE_NAME,Key:{ppId:"W#C",psId:e.type},UpdateExpression:"Set itemCount = itemCount + :incr",ExpressionAttributeValues:{":incr":1},ReturnValues:"UPDATED_NEW"}))(e))),q)))),pe=async e=>(console.log(JSON.stringify(e)),(async e=>{var n,t,i,o;const c=null===(t=null===(n=e.requestContext)||void 0===n?void 0:n.http)||void 0===t?void 0:t.path,a=null===(o=null===(i=e.requestContext)||void 0===i?void 0:i.http)||void 0===o?void 0:o.method;if("/pets"===c){if("GET"===a)return(async e=>u((e=>u(F(e),f(z)))(e),E,w(ee),T(JSON.stringify),_(ue,re),N(m))())(e);if(a===r)return(async e=>u((e=>u(s(e.body,(()=>B("Invalid json body"))),d(G),f(H)))(e),E,w(ne),_(ue,te),N(m))())(e)}else if("/wild"===c){if("GET"===a)return(async e=>u((e=>u(F(e),f(ie)))(e),E,w(ae),T(JSON.stringify),_(ue,re),N(m))())(e);if(a===r)return(async e=>u((e=>u(s(e.body,(()=>B("Invalid json body"))),d(G),f(oe)))(e),E,w(fe),_(ue,te),N(m))())(e)}throw new Error(`Invalid route for ${JSON.stringify(e)}`)})(e));var de=exports;for(var le in n)de[le]=n[le];n.__esModule&&Object.defineProperty(de,"__esModule",{value:!0})})();