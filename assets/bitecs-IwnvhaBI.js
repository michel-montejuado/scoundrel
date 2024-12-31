var e={i8:"i8",ui8:"ui8",ui8c:"ui8c",i16:"i16",ui16:"ui16",i32:"i32",ui32:"ui32",f32:"f32",f64:"f64",eid:"eid"},t={i8:"Int8",ui8:"Uint8",ui8c:"Uint8Clamped",i16:"Int16",ui16:"Uint16",i32:"Int32",ui32:"Uint32",eid:"Uint32",f32:"Float32",f64:"Float64"},n={i8:Int8Array,ui8:Uint8Array,ui8c:Uint8ClampedArray,i16:Int16Array,ui16:Uint16Array,i32:Int32Array,ui32:Uint32Array,f32:Float32Array,f64:Float64Array,eid:Uint32Array},r=e=>4*Math.ceil(e/4),o=Symbol("storeRef"),s=Symbol("storeSize"),i=Symbol("storeMaps"),a=Symbol("storeFlattened"),l=Symbol("storeBase"),c=Symbol("storeType"),y=Symbol("storeArrayElementCounts"),d=Symbol("storeSubarrays"),u=Symbol("subarrayCursors"),f=Symbol("subarray"),m=Symbol("parentArray"),h=Symbol("tagStore"),b=Symbol("indexType"),p=Symbol("indexBytes"),g=Symbol("isEidType"),S={},E=e=>Array.isArray(e)&&"string"==typeof e[0]&&"number"==typeof e[1],w=()=>{const e=[],t=[];e.sort=function(n){const r=Array.prototype.sort.call(this,n);for(let o=0;o<e.length;o++)t[e[o]]=o;return r};const n=n=>e[t[n]]===n;return{add:r=>{n(r)||(t[r]=e.push(r)-1)},remove:r=>{if(!n(r))return;const o=t[r],s=e.pop();s!==r&&(e[o]=s,t[s]=o)},has:n,sparse:t,dense:e,reset:()=>{e.length=0,t.length=0}}},A=Symbol("entityMasks"),v=Symbol("entityComponents"),M=Symbol("entitySparseSet"),C=Symbol("entityArray"),O=0,j=[],k=new Map,I=e=>{const t=e[se]?j.length?j.shift():O++:j.length>Math.round(1e3)?j.shift():O++;if(t>e[ee])throw new Error("bitECS - max entities reached");return e[M].add(t),k.set(t,e),e[x].forEach((n=>{$(e,n,t)&&J(n,t)})),e[v].set(t,new Set),t},R=Symbol("$modifier"),U=Symbol("queries"),x=Symbol("notQueries"),T=Symbol("queryAny"),q=Symbol("queryAll"),B=Symbol("queryNone"),P=Symbol("queryMap"),N=Symbol("$dirtyQueries"),_=Symbol("queryComponents"),F=Object.freeze([]),Q=e=>t=>{t[P].has(e)||L(t,e);const n=t[P].get(e);if(0===n.entered.dense.length)return F;{const e=n.entered.dense.slice();return n.entered.reset(),e}},z=e=>t=>{t[P].has(e)||L(t,e);const n=t[P].get(e);if(0===n.exited.dense.length)return F;{const e=n.exited.dense.slice();return n.exited.reset(),e}},L=(e,t)=>{const n=[],r=[],o=[];t[_].forEach((t=>{if("function"==typeof t&&t[R]){const[s,i]=t();e[K].has(s)||X(e,s),"not"===i&&r.push(s),"changed"===i&&(o.push(s),n.push(s))}else e[K].has(t)||X(e,t),n.push(t)}));const s=t=>e[K].get(t),i=n.concat(r).map(s),l=w(),c=w(),y=w(),d=w(),u=i.map((e=>e.generationId)).reduce(((e,t)=>(e.includes(t)||e.push(t),e)),[]),f=(e,t)=>(e[t.generationId]||(e[t.generationId]=0),e[t.generationId]|=t.bitflag,e),m=n.map(s).reduce(f,{}),b=r.map(s).reduce(f,{}),p=i.reduce(f,{}),g=n.filter((e=>!e[h])).map((e=>Object.getOwnPropertySymbols(e).includes(a)?e[a]:[e])).reduce(((e,t)=>e.concat(t)),[]),S=Object.assign(l,{archetypes:[],changed:[],components:n,notComponents:r,changedComponents:o,allComponents:i,masks:m,notMasks:b,hasMasks:p,generations:u,flatProps:g,toRemove:c,entered:y,exited:d,shadows:[]});e[P].set(t,S),e[U].add(S),i.forEach((e=>{e.queries.add(S)})),r.length&&e[x].add(S);for(let a=0;a<O;a++)e[M].has(a)&&$(e,S,a)&&J(S,a)},V=(e,t)=>{const n=Symbol(),r=e.flatProps[t];return((e,t)=>{if(ArrayBuffer.isView(e))e[t]=e.slice(0);else{const n=e[m].slice(0);e[t]=e.map(((t,r)=>{const{length:o}=e[r],s=o*r,i=s+o;return n.subarray(s,i)}))}})(r,n),e.shadows[t]=r[n],r[n]},Y=(...e)=>{let t;if(Array.isArray(e[0])&&(t=e[0]),void 0===t||void 0!==t[K])return e=>e?e[C]:t[C];const n=function(e,t=!0){e[P].has(n)||L(e,n);const r=e[P].get(n);return G(e),r.changedComponents.length?((e,t)=>{t&&(e.changed=[]);const{flatProps:n,shadows:r}=e;for(let o=0;o<e.dense.length;o++){const t=e.dense[o];let s=!1;for(let o=0;o<n.length;o++){const i=n[o],a=r[o]||V(e,o);if(ArrayBuffer.isView(i[t])){for(let e=0;e<i[t].length;e++)if(i[t][e]!==a[t][e]){s=!0;break}a[t].set(i[t])}else i[t]!==a[t]&&(s=!0,a[t]=i[t])}s&&e.changed.push(t)}return e.changed})(r,t):r.dense};return n[_]=t,n[T]=void 0,n[q]=void 0,n[B]=void 0,n},$=(e,t,n)=>{const{masks:r,notMasks:o,generations:s}=t;for(let i=0;i<s.length;i++){const t=s[i],a=r[t],l=o[t],c=e[A][t][n];if(l&&c&l)return!1;if(a&&(c&a)!==a)return!1}return!0},J=(e,t)=>{e.toRemove.remove(t),e.entered.add(t),e.add(t)},D=e=>{for(let t=e.toRemove.dense.length-1;t>=0;t--){const n=e.toRemove.dense[t];e.toRemove.remove(n),e.remove(n)}},G=e=>{e[N].size&&(e[N].forEach(D),e[N].clear())},H=(e,t,n)=>{t.has(n)&&!t.toRemove.has(n)&&(t.toRemove.add(n),e[N].add(t),t.exited.add(n))},K=Symbol("componentMap"),W=(w,A)=>{const v=((w,A)=>{const v=Symbol("store");if(!w||!Object.keys(w).length)return S[v]={[s]:A,[h]:!0,[l]:()=>S[v]},S[v];w=JSON.parse(JSON.stringify(w));const M={},C=e=>{const t=Object.keys(e);for(const n of t)E(e[n])?(M[e[n][0]]||(M[e[n][0]]=0),M[e[n][0]]+=e[n][1]):e[n]instanceof Object&&C(e[n])};C(w);const O={[s]:A,[i]:{},[d]:{},[o]:v,[u]:Object.keys(n).reduce(((e,t)=>({...e,[t]:0})),{}),[a]:[],[y]:M};if(w instanceof Object&&Object.keys(w).length){const o=(i,h)=>{if("string"==typeof i[h])i[h]=((t,r)=>{const o=r*n[t].BYTES_PER_ELEMENT,s=new ArrayBuffer(o),i=new n[t](s);return i[g]=t===e.eid,i})(i[h],A),i[h][l]=()=>S[v],O[a].push(i[h]);else if(E(i[h])){const[o,E]=i[h];i[h]=((o,i,a)=>{const l=o[s],h=Array(l).fill(0);h[c]=i,h[g]=i===e.eid;const S=o[u],E=a<=256?e.ui8:a<=65536?e.ui16:e.ui32;if(!a)throw new Error("bitECS - Must define component array length");if(!n[i])throw new Error(`bitECS - Invalid component array property type ${i}`);if(!o[d][i]){const e=o[y][i],s=new n[i](r(e*l));s[b]=t[E],s[p]=n[E].BYTES_PER_ELEMENT,o[d][i]=s}const w=S[i],A=w+l*a;S[i]=A,h[m]=o[d][i].subarray(w,A);for(let e=0;e<l;e++){const r=a*e,o=r+a;h[e]=h[m].subarray(r,o),h[e][b]=t[E],h[e][p]=n[E].BYTES_PER_ELEMENT,h[e][f]=!0}return h})(O,o,E),i[h][l]=()=>S[v],O[a].push(i[h])}else i[h]instanceof Object&&(i[h]=Object.keys(i[h]).reduce(o,i[h]));return i};return S[v]=Object.assign(Object.keys(w).reduce(o,w),O),S[v][l]=()=>S[v],S[v]}})(w,1e5);return w&&Object.keys(w).length,v},X=(e,t)=>{if(!t)throw new Error("bitECS - Cannot register null or undefined component");const n=new Set,r=new Set,o=new Set;e[U].forEach((e=>{e.allComponents.includes(t)&&n.add(e)})),e[K].set(t,{generationId:e[A].length-1,bitflag:e[te],store:t,queries:n,notQueries:r,changedQueries:o}),(e=>{e[te]*=2,e[te]>=2**31&&(e[te]=1,e[A].push(new Uint32Array(e[ee])))})(e)},Z=(e,t,n,r=!1)=>{if(void 0===n)throw new Error("bitECS - entity is undefined.");if(!e[M].has(n))throw new Error("bitECS - entity does not exist in the world.");if(e[K].has(t)||X(e,t),((e,t,n)=>{const r=e[K].get(t);if(!r)return!1;const{generationId:o,bitflag:s}=r;return(e[A][o][n]&s)===s})(e,t,n))return;const o=e[K].get(t),{generationId:s,bitflag:i,queries:l,notQueries:c}=o;e[A][s][n]|=i,l.forEach((t=>{t.toRemove.remove(n);const r=$(e,t,n);r&&(t.exited.remove(n),J(t,n)),r||(t.entered.remove(n),H(e,t,n))})),e[v].get(n).add(t),r&&((e,t)=>{e[a]&&e[a].forEach((e=>{ArrayBuffer.isView(e)?e[t]=0:e[t].fill(0)}))})(t,n)},ee=Symbol("size"),te=Symbol("bitflag"),ne=Symbol("archetypes"),re=Symbol("localEntities"),oe=Symbol("localEntityLookup"),se=Symbol("manualEntityRecycling"),ie=(...e)=>{const t="object"==typeof e[0]?e[0]:{},n="number"==typeof e[0]?e[0]:"number"==typeof e[1]?e[1]:1e5;return ae(t,n),t},ae=(e,t=1e5)=>(e[ee]=t,e[C]&&e[C].forEach((t=>((e,t)=>{if(e[M].has(t)){e[U].forEach((n=>{H(e,n,t)})),e[se]||j.push(t),e[M].remove(t),e[v].delete(t),e[re].delete(e[oe].get(t)),e[oe].delete(t);for(let n=0;n<e[A].length;n++)e[A][n][t]=0}})(e,t))),e[A]=[new Uint32Array(t)],e[v]=new Map,e[ne]=[],e[M]=w(),e[C]=e[M].dense,e[te]=1,e[K]=new Map,e[P]=new Map,e[U]=new Set,e[x]=new Set,e[N]=new Set,e[re]=new Map,e[oe]=new Map,e[se]=!1,e),le=e=>(t,...n)=>(e(t,...n),t),ce=e;export{ce as T,Y as a,le as b,z as c,W as d,Q as e,ie as f,I as g,Z as h};
