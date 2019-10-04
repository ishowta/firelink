#!/usr/bin/env node
(function () {var e={};Object.defineProperty(e,"__esModule",{value:!0});const i=require("child_process");var g=({command:r,args:e,cwd:s}={command:"npx",args:[]},o=!0)=>new Promise(($,p)=>{const c=i.spawn(r,e,{cwd:s});o&&c.stderr.pipe(process.stderr),o&&c.stdout.pipe(process.stdout),c.on("close",r=>0!==r?p(!!r):$(!!r))});e.Worker=g;var a={};Object.defineProperty(a,"__esModule",{value:!0});var o=e=>process.argv.toString().includes(e);a.includes=o;var l=(e,r=!0,t=e=>e)=>{if(process.argv.toString().includes(e)){const s=process.argv[process.argv.indexOf(e)+1];return s?s.includes("--")?r:t(s):r}return r};a.nextOrDefault=l;var c={},d=c&&c.__awaiter||function(e,i,r,a){return new(r||(r=Promise))(function($,t){function n(e){try{o(a.next(e))}catch(i){t(i)}}function s(e){try{o(a.throw(e))}catch(i){t(i)}}function o(e){var i;e.done?$(e.value):(i=e.value,i instanceof r?i:new r(function(e){e(i)})).then(n,s)}o((a=a.apply(e,i||[])).next())})};Object.defineProperty(c,"__esModule",{value:!0});const f=require("fs"),k=require("util"),j=require("path"),h=".packages";function m(){return d(this,void 0,void 0,function*(){const e=JSON.parse((yield k.promisify(f.readFile)(j.join(process.cwd(),"package.json"),{encoding:"utf-8"}))),i=JSON.parse(JSON.stringify(e));function r(){f.writeFileSync(j.join(process.cwd(),"package.json"),JSON.stringify(i,null,2),{encoding:"utf-8"}),process.exit()}try{if(e&&e.fireDependencies){const i=e.fireDependencies,$=Object.keys(i).map(e=>({dep:e,folder:i[e]}));yield Promise.all($.map(({folder:e})=>d(this,void 0,void 0,function*(){const i=["-r","--exclude","node_modules","--exclude","dist","--exclude",".cache",e,`./${h}`];yield g({command:"rsync",args:i})})));try{a.includes("--buildCommand")&&(yield Promise.all((yield k.promisify(f.readdir)(j.join(process.cwd(),h))).map(e=>d(this,void 0,void 0,function*(){yield g({command:"npx",args:a.nextOrDefault("--buildCommand","tsc").split(" "),cwd:j.join(process.cwd(),h,e)},!1)}))))}catch(a){}process.stdin.resume(),process.on("exit",r),process.on("SIGINT",r),process.on("SIGUSR1",r),process.on("SIGUSR2",r),process.on("uncaughtException",r),yield function(){return d(this,void 0,void 0,function*(){yield Promise.all($.map(({dep:i})=>d(this,void 0,void 0,function*(){e.dependencies[i]=`file:./${h}/${i.split("/")[1]}`}))),a.nextOrDefault("--leave-changes",null)||(yield k.promisify(f.writeFile)("./package.json",JSON.stringify(e,null,2),{encoding:"utf-8"}))})}()}yield g({command:"npx",args:["firebase",...process.argv.slice(2)]})}catch(a){console.log(a)}r()})}var n=m;c.createFirebasePackageSymlink=n;var b={},p=b&&b.__awaiter||function(e,a,n,r){return new(n||(n=Promise))(function(c,t){function i(e){try{f(r.next(e))}catch(a){t(a)}}function $(e){try{f(r.throw(e))}catch(a){t(a)}}function f(e){var a;e.done?c(e.value):(a=e.value,a instanceof n?a:new n(function(e){e(a)})).then(i,$)}f((r=r.apply(e,a||[])).next())})};Object.defineProperty(b,"__esModule",{value:!0});function q(){return p(this,void 0,void 0,function*(){yield c.createFirebasePackageSymlink()})}q();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}})();