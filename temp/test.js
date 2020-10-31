let str = 'web/entry-runtime.js'
const base = str.split('/')[0]
console.log(base);

let t = str.slice(base.length)
console.log(t);

console.log(str);
