//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.
//! This is generated file, see src/native/rollup.config.js

let e,t,o;const n={},i={},r={},s={},a={},l={},c={},u={},d={};function m(n,i){if(!Array.isArray(n))throw new Error("Expected internals to be an array");if(!Array.isArray(n[1]))throw new Error("Expected internal updates to be an array");if(void 0===e)e=n;else if(e!==n)throw new Error("Cannot replace internals");if(void 0===o&&(o=e[0]),"object"!=typeof o)throw new Error("Expected internals to have RuntimeAPI");void 0===t&&(t=o.Module);const r=e[1];i&&!r.includes(i)&&r.push(i);for(const t of e[1])t(e)}function f(){var t;0===Object.keys(r).length&&e[3]&&function(e,t,o,n){const i={debug:e[0],info:e[1],warn:e[2],error:e[3]},r={check:e[4],fastCheck:e[5]},s={resolveRunMainPromise:e[6],rejectRunMainPromise:e[7],getRunMainPromise:e[8],createPromiseCompletionSource:e[9],isControllablePromise:e[10],getPromiseCompletionSource:e[11],isExited:e[12],isRuntimeRunning:e[13],addOnExitListener:e[14],abortStartup:e[15],quitNow:e[16]};Object.assign(n,s),Object.assign(t,i),Object.assign(o,r)}(e[3],n,i,r),0===Object.keys(s).length&&e[4]&&function(e,t){const o={bindJSImportST:e[0],invokeJSImportST:e[1],releaseCSOwnedObject:e[2],resolveOrRejectPromise:e[3],cancelPromise:e[4],invokeJSFunction:e[5],forceDisposeProxies:e[6],abortInteropTimers:e[7]};Object.assign(t,o)}(e[4],s),0===Object.keys(a).length&&e[5]&&function(e,t){const o={registerDllBytes:e[0],installVfsFile:e[1],loadIcuData:e[2],initializeCoreCLR:e[3],registerPdbBytes:e[4]};Object.assign(t,o)}(e[5],a),0===Object.keys(u).length&&e[8]&&function(e,t){const o={utf16ToString:e[0],stringToUTF16:e[1],stringToUTF16Ptr:e[2],stringToUTF8Ptr:e[3],stringToUTF8:e[4],zeroRegion:e[5],isSharedArrayBuffer:e[6],abortBackgroundTimers:e[7],abortPosix:e[8],getExitStatus:e[9],runBackgroundTimers:e[10]};Object.assign(t,o)}(e[8],u),0===Object.keys(l).length&&e[6]&&function(e,t){const o={SystemInteropJS_GetManagedStackTrace:e[0],SystemInteropJS_CallDelegate:e[1],SystemInteropJS_CompleteTask:e[2],SystemInteropJS_ReleaseJSOwnedObjectByGCHandle:e[3],SystemInteropJS_BindAssemblyExports:e[4],SystemInteropJS_CallJSExport:e[5]};Object.assign(t,o)}(e[6],l),0===Object.keys(c).length&&e[7]&&(e[7],t=c,Object.assign(t,{})),0===Object.keys(d).length&&e[9]&&function(e,t){const o={symbolicateStackTrace:e[0]};Object.assign(t,o)}(e[9],d)}const g={};function p(){return g}function b(){if(!g.mainAssemblyName)throw new Error("Loader configuration error: 'mainAssemblyName' is required.");if(!g.resources||!g.resources.coreAssembly||0===g.resources.coreAssembly.length)throw new Error("Loader configuration error: 'resources.coreAssembly' is required and must contain at least one assembly.")}function h(e){var t;void 0===(t=g).appendElementOnExit&&(t.appendElementOnExit=!1),void 0===t.logExitCode&&(t.logExitCode=!1),void 0===t.exitOnUnhandledError&&(t.exitOnUnhandledError=!1),void 0===t.loadAllSatelliteResources&&(t.loadAllSatelliteResources=!1),void 0===t.debugLevel&&(t.debugLevel=0),void 0===t.diagnosticTracing&&(t.diagnosticTracing=!1),void 0===t.virtualWorkingDirectory&&(t.virtualWorkingDirectory="/"),void 0===t.maxParallelDownloads&&(t.maxParallelDownloads=16),y(t),y(e),function(e,t){e===t||null==t||(function(e,t){if(e===t||null==t)return e;t.coreAssembly=[...e.coreAssembly,...t.coreAssembly],t.assembly=[...e.assembly,...t.assembly],t.lazyAssembly=[...e.lazyAssembly,...t.lazyAssembly],t.corePdb=[...e.corePdb,...t.corePdb],t.pdb=[...e.pdb,...t.pdb],t.jsModuleWorker=[...e.jsModuleWorker,...t.jsModuleWorker],t.jsModuleNative=[...e.jsModuleNative,...t.jsModuleNative],t.jsModuleDiagnostics=[...e.jsModuleDiagnostics,...t.jsModuleDiagnostics],t.jsModuleRuntime=[...e.jsModuleRuntime,...t.jsModuleRuntime],t.wasmSymbols=[...e.wasmSymbols,...t.wasmSymbols],t.wasmNative=[...e.wasmNative,...t.wasmNative],t.icu=[...e.icu,...t.icu],t.vfs=[...e.vfs,...t.vfs],t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded,...t.modulesAfterConfigLoaded],t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady,...t.modulesAfterRuntimeReady],t.extensions={...e.extensions,...t.extensions};for(const o in t.satelliteResources)t.satelliteResources[o]=[...e.satelliteResources[o]||[],...t.satelliteResources[o]||[]];Object.assign(e,t)}(e.resources,t.resources),t.appendElementOnExit=void 0!==t.appendElementOnExit?t.appendElementOnExit:e.appendElementOnExit,t.logExitCode=void 0!==t.logExitCode?t.logExitCode:e.logExitCode,t.exitOnUnhandledError=void 0!==t.exitOnUnhandledError?t.exitOnUnhandledError:e.exitOnUnhandledError,t.loadAllSatelliteResources=void 0!==t.loadAllSatelliteResources?t.loadAllSatelliteResources:e.loadAllSatelliteResources,t.mainAssemblyName=void 0!==t.mainAssemblyName?t.mainAssemblyName:e.mainAssemblyName,t.virtualWorkingDirectory=void 0!==t.virtualWorkingDirectory?t.virtualWorkingDirectory:e.virtualWorkingDirectory,t.debugLevel=void 0!==t.debugLevel?t.debugLevel:e.debugLevel,t.diagnosticTracing=void 0!==t.diagnosticTracing?t.diagnosticTracing:e.diagnosticTracing,t.environmentVariables={...e.environmentVariables,...t.environmentVariables},t.runtimeOptions=[...e.runtimeOptions,...t.runtimeOptions],t.runtimeConfig.runtimeOptions.configProperties={...e.runtimeConfig.runtimeOptions.configProperties,...t.runtimeConfig.runtimeOptions.configProperties},Object.assign(e,t))}(g,e)}function y(e){e.resources||(e.resources={}),function(e){e.coreAssembly||(e.coreAssembly=[]),e.assembly||(e.assembly=[]),e.lazyAssembly||(e.lazyAssembly=[]),e.corePdb||(e.corePdb=[]),e.pdb||(e.pdb=[]),e.jsModuleWorker||(e.jsModuleWorker=[]),e.jsModuleNative||(e.jsModuleNative=[]),e.jsModuleDiagnostics||(e.jsModuleDiagnostics=[]),e.jsModuleRuntime||(e.jsModuleRuntime=[]),e.wasmSymbols||(e.wasmSymbols=[]),e.wasmNative||(e.wasmNative=[]),e.icu||(e.icu=[]),e.modulesAfterConfigLoaded||(e.modulesAfterConfigLoaded=[]),e.modulesAfterRuntimeReady||(e.modulesAfterRuntimeReady=[]),e.satelliteResources||(e.satelliteResources={}),e.extensions||(e.extensions={}),e.vfs||(e.vfs=[])}(e.resources),e.environmentVariables||(e.environmentVariables={}),e.runtimeOptions||(e.runtimeOptions=[]),e.runtimeConfig?e.runtimeConfig.runtimeOptions?e.runtimeConfig.runtimeOptions.configProperties||(e.runtimeConfig.runtimeOptions.configProperties={}):e.runtimeConfig.runtimeOptions={configProperties:{}}:e.runtimeConfig={runtimeOptions:{configProperties:{}}}}const w=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),v=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),A="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,T="function"==typeof importScripts,x="object"==typeof window||T&&!A,E=!x&&!A;let R,O;async function j(){return A&&!R&&(R=await import(/*! webpackIgnore: true */"fs")),R}async function C(e,t,o){try{await j(),await async function(){return A&&!O&&(O=await import(/*! webpackIgnore: true */"node:url")),O}();const n="function"==typeof globalThis.fetch;if(A){const i=e.startsWith("file://");if(!i&&n)return globalThis.fetch(e,t||{credentials:"same-origin"});i&&(e=O.fileURLToPath(e));const r=await R.promises.readFile(e);return P(e,r,{status:200,statusText:"OK",headers:{"Content-Length":r.byteLength.toString(),"Content-Type":o||"application/octet-stream"}})}if(n)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read){const t=read(e,"binary");return P(e,t,{status:200,statusText:"OK",headers:{"Content-Length":t.byteLength.toString(),"Content-Type":o||"application/octet-stream"}})}}catch(t){return P(e,null,{status:500,statusText:"ERR28: "+t,headers:{}})}throw new Error("No fetch implementation available")}function P(e,t,o){if("function"==typeof globalThis.Response){const n=new Response(t,o);if(void 0===n.url)try{Object.defineProperty(n,"url",{value:e})}catch{}return n}return{ok:null!==t&&200===o.status,headers:{...o.headers,get:e=>o.headers[e]||null},url:e,arrayBuffer:()=>Promise.resolve(t),json:()=>{throw new Error("NotImplementedException")},text:()=>{throw new Error("NotImplementedException")}}}const S=/*! webpackIgnore: true */import.meta.url,k=S.indexOf("?"),M=k>0?S.substring(k):"",U=I(S),L=(D=U).slice(0,D.lastIndexOf("/"))+"/";var D;function N(e,t=!1){let o;return o=z(e)?e:globalThis.URL?new globalThis.URL(e,L).href:L+e,t&&(o+=M),o}function I(e){return e.replace(/\\/g,"/").replace(/[?#].*/,"")}const W=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,$=/[a-zA-Z]:[\\/]/;function z(e){return A||E?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||$.test(e):W.test(e)}function B(e){return i.check("string"==typeof e,"url must be a string"),!z(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI?new URL(e,globalThis.document.baseURI).href:e}const V={runtimeReady:!1,exitCode:void 0,exitReason:void 0,originalOnAbort:void 0,originalOnExit:void 0,onExitListeners:[]};function F(){return void 0!==V.exitCode}function _(){return V.runtimeReady&&!F()}function J(e){V.onExitListeners.push(e)}function H(e){V.originalOnExit&&V.originalOnExit(e),q(e,V.exitReason)}function K(e){V.originalOnAbort&&V.originalOnAbort(e||V.exitReason),q(1,e||V.exitReason)}function q(e,o){const i=o&&"object"==typeof o;e=i&&"number"==typeof o.status?o.status:void 0===e?-1:e;const a=i&&"string"==typeof o.message?o.message:""+o;o=i?o:function(e,t){const o=u.getExitStatus(),n="function"==typeof o?new o(e):new Error("Exit with code "+e+" "+t);return n.message=t,n.toString=()=>t,n}(e,a),o.status=e,o.message||(o.message=a);const l=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>l})}catch(e){}const c=!!o.silent,d=F();o.silent=!0;let m=!0;if(d||V.exitReason)c||n.debug(`dotnet.js exit() called after previous exit: ${a} ${l}`);else{V.exitReason=o;try{if(s&&s.abortInteropTimers&&s.abortInteropTimers(),u&&u.abortBackgroundTimers&&u.abortBackgroundTimers(),t.onAbort===K&&(t.onAbort=V.originalOnAbort),t.onExit===H&&(t.onExit=V.originalOnExit),!c){0!==V.onExitListeners.length||V.runtimeReady||n.error(`Exiting during runtime startup: ${a} ${l}`);for(const t of V.onExitListeners)try{t(e,o,c)||(m=!1)}catch{}}V.runtimeReady||(n.debug(()=>`Aborting startup, reason: ${o}`),r.abortStartup(o))}catch(e){n.warn("dotnet.js exit() failed",e)}V.exitCode=e,m&&G(e,o)}throw o}function G(e,o){throw V.runtimeReady&&(t.runtimeKeepalivePop(),u&&u.abortPosix&&u.abortPosix(e)),0===e&&x||A&&globalThis.process&&"function"==typeof globalThis.process.exit&&(globalThis.process.exitCode=e,globalThis.process.exit(e)),o}const Z=Symbol.for("wasm promise control");function Y(e,t){let o=null;const n=new Promise((n,i)=>{o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,i(e),t&&t())},propagateFrom:e=>{e.then(o.resolve).catch(o.reject)}}});return o.promise=n,n[Z]=o,o}function Q(e){return e[Z]}function X(e){return void 0!==e[Z]}function ee(e){return new Promise(t=>setTimeout(t,e))}let te,oe,ne,ie=0,re=0,se=0,ae="undefined"!=typeof WebAssembly&&"function"==typeof WebAssembly.instantiateStreaming;const le=Y(()=>{m(e)});async function ce(e){return ue(e)}async function ue(e){let t=e.moduleExports;if(se++,!t){const o=e;if(o.name&&!e.resolvedUrl&&(e.resolvedUrl=N(o.name,!0)),o.behavior="js-module-dotnet","function"==typeof oe){const t=Te[o.behavior];i.check(t,`Unsupported asset behavior: ${o.behavior}`);const n=oe(t,o.name,e.resolvedUrl,o.integrity,o.behavior);i.check("string"==typeof n,"loadBootResourceCallback for JS modules must return string URL"),e.resolvedUrl=B(n)}if(!e.resolvedUrl)throw new Error("Invalid config, resources is not set");t=await import(e.resolvedUrl)}return Ae(),t}async function de(e,t){if(ae){const n=await WebAssembly.instantiateStreaming(ne,e);await o(),Ae(),t(n.instance,n.module)}else{const n=await o(),i=await n.arrayBuffer(),r=await WebAssembly.compile(i),s=await WebAssembly.instantiate(r,e);Ae(),t(s,r)}async function o(){i.check(ne,"WASM binary promise was not initialized");const e=await ne;if(!1===e.ok)throw new Error(`Failed to load WebAssembly module. HTTP status: ${e.status} ${e.statusText}`);const t=e.headers&&e.headers.get?e.headers.get("Content-Type"):void 0;return x&&"application/wasm"!==t&&n.warn('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.'),e}}async function me(e){se++;const t=e;t.name&&!e.resolvedUrl&&(e.resolvedUrl=N(t.name)),t.behavior="icu";const o=await be(t);await le.promise,Ae(),o&&a.loadIcuData(o)}async function fe(e){se++;const t=e;t.name&&!e.resolvedUrl&&(e.resolvedUrl=N(t.name)),t.behavior="assembly";const o=await be(t);await le.promise,Ae(),o&&a.registerDllBytes(o,e)}async function ge(e){se++;const t=e;t.name&&!e.resolvedUrl&&(e.resolvedUrl=N(t.name)),t.behavior="pdb",t.isOptional=t.isOptional||g.ignorePdbLoadErrors;const o=await be(t);await le.promise,Ae(),o&&a.registerPdbBytes(o,e)}async function pe(e){se++;const t=e;t.name&&!e.resolvedUrl&&(e.resolvedUrl=N(t.name)),t.behavior="vfs";const o=await be(t);await le.promise,Ae(),o&&a.installVfsFile(o,e)}async function be(e){i.check(e&&e.resolvedUrl,"Bad asset.resolvedUrl");const t=await he(e);if(!t.ok){if(e.isOptional)return n.warn(`Optional resource '${e.name}' failed to load from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`),null;throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`)}const o=await(e.buffer||t.arrayBuffer());return new Uint8Array(o)}function he(e){return"dotnetwasm"===e.behavior||E||A||e.resolvedUrl&&-1!==e.resolvedUrl.indexOf("file://")?ve(e):g.enableDownloadRetry?async function(e){let t;if(t=await o(),t.ok||e.isOptional||ye.has(t.status))return t;if(429===t.status&&await ee(100),t=await o(),t.ok||ye.has(t.status))return t;if(await ee(100),t=await o(),t.ok)return t;throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}' after multiple attempts. Last HTTP status: ${t.status} ${t.statusText}`);async function o(){let t;try{t=await we(e),t||(t=P(e.resolvedUrl,null,{status:404,statusText:"No response"}))}catch(o){t=P(e.resolvedUrl,null,{status:500,statusText:o.message||"Exception during fetch"})}return t}}(e):we(e)}const ye=new Set([400,401,403,404,405,406,409,410,411,413,414,415,422,426,501,505]);async function we(e){for(;te;)await te.promise;try{++ie,ie===g.maxParallelDownloads&&(n.debug("Throttling further parallel downloads"),te=Y());const t=ve(e),o=await t;return i.check(o,"Bad response in loadResourceThrottle"),e.buffer=await o.arrayBuffer(),o}finally{if(--ie,te&&ie==g.maxParallelDownloads-1){n.debug("Resuming more parallel downloads");const e=te;te=void 0,e.resolve()}}}async function ve(e){const t=xe[e.behavior];if(i.check(t,`Unsupported asset behavior: ${e.behavior}`),e.buffer){const o=await e.buffer;return P(e.resolvedUrl,o,{status:200,statusText:"OK",headers:{"Content-Length":o.byteLength.toString(),"Content-Type":t}})}if(e.pendingDownload)return e.pendingDownload.response;if("function"==typeof oe){const t=Te[e.behavior];i.check(t,`Unsupported asset behavior: ${e.behavior}`);const o=oe(t,e.name,e.resolvedUrl,e.integrity,e.behavior);if("string"==typeof o)e.resolvedUrl=B(o);else if("object"==typeof o)return o}i.check(e.resolvedUrl,"Bad asset.resolvedUrl");const o={};return e.cache?o.cache=e.cache:g.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!g.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),C(e.resolvedUrl,o,t)}function Ae(){++re,t.onDownloadResourceProgress&&t.onDownloadResourceProgress(re,se)}const Te={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs","js-module-threads":"dotnetjs"},xe={resource:"application/octet-stream",assembly:"application/octet-stream",pdb:"application/octet-stream",icu:"application/octet-stream",vfs:"application/octet-stream",manifest:"application/json",dotnetwasm:"application/wasm"},Ee=Y();async function Re(o){if(!g.resources||!g.resources.coreAssembly||!g.resources.coreAssembly.length)throw new Error("Invalid config, resources is not set");await async function(){i.check(await w,"This browser/engine doesn't support WASM exception handling. Please use a modern version. See also https://aka.ms/dotnet-wasm-features"),i.check(await v,"This browser/engine doesn't support WASM SIMD. Please use a modern version. See also https://aka.ms/dotnet-wasm-features")}(),"function"==typeof t.onConfigLoaded&&await t.onConfigLoaded(g);const n=await Promise.all((g.resources.modulesAfterConfigLoaded||[]).map(ue));for(const e of n)await(e.onRuntimeConfigLoaded?.(g));g.resources.jsModuleDiagnostics&&g.resources.jsModuleDiagnostics.length>0&&(await ce(g.resources.jsModuleDiagnostics[0])).dotnetInitializeModule(e);const r=ce(g.resources.jsModuleNative[0]),s=ce(g.resources.jsModuleRuntime[0]),l=function(e){se++;const t=e;if(t.name&&!e.resolvedUrl&&(e.resolvedUrl=N(t.name)),t.behavior="dotnetwasm",!e.resolvedUrl)throw new Error("Invalid config, resources is not set");return ne=he(t),t.buffer&&(ae=!1),ne}(g.resources.wasmNative[0]),c=Promise.all(g.resources.coreAssembly.map(fe)),u=Promise.all((g.resources.coreVfs||[]).map(pe)),d=Promise.all(g.resources.assembly.map(fe)),m=Promise.all((g.resources.vfs||[]).map(pe)),f=function(){if(g.resources?.icu&&"invariant"!==g.globalizationMode){const e=g.applicationCulture||(x?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);g.applicationCulture||(g.applicationCulture=e);const t=g.resources.icu;let o=null;if("custom"===g.globalizationMode){if(t.length>=1)return t[0].name}else e&&"all"!==g.globalizationMode?"sharded"===g.globalizationMode&&(o=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(e)):o="icudt.dat";if(o)for(let e=0;e<t.length;e++){const n=t[e];if(n.virtualPath===o)return n.name}}return g.globalizationMode="invariant",g.environmentVariables.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT="1",null}(),p=f?Promise.all((g.resources.icu||[]).filter(e=>e.name===f).map(me)):Promise.resolve([]),b=Promise.all((g.resources.corePdb||[]).map(ge)),h=Promise.all((g.resources.pdb||[]).map(ge)),y=Promise.all((g.resources.modulesAfterRuntimeReady||[]).map(ue)),A=(await r).dotnetInitializeModule(e);le.propagateFrom(A);const T=(await s).dotnetInitializeModule(e);await le.promise,await c,await u,await m,await p,await l,o||(t.runtimeKeepalivePush(),function(){i.check(!V.runtimeReady,"CoreCLR should be initialized just once");const e=a.initializeCoreCLR();if(0!=e){const t=new Error("Failed to initialize CoreCLR");Ee.reject(t),q(e,t)}V.runtimeReady=!0}()),await d,await b,await h,await T,i.check(re===se,`Not all assets were downloaded. Downloaded ${re} out of ${se}`),"function"==typeof t.onDotnetReady&&await t.onDotnetReady();const E=await y;for(const e of E)await(e.onRuntimeReady?.(g))}function Oe(e){le.reject(e)}function je(e){Ee.resolve(e)}function Ce(e){Ee.reject(e)}function Pe(){return Ee.promise}let Se=[];async function ke(e,t){throw new Error("Not implemented")}function Me(e,t){if(!e)throw new Error(`dotnetAssert failed: ${t}`)}function Ue(e,t){if(!e){const e=t();throw new Error(`dotnetAssert failed: ${e}`)}}const Le="DOTNET: ";function De(e,...t){g.diagnosticTracing&&("function"==typeof e&&(e=e()),console.debug(Le+e,...t))}function Ne(e,...t){console.info(Le+e,...t)}function Ie(e,...t){console.warn(Le+e,...t)}function We(e,...t){if(t&&t.length>0&&t[0]&&"object"==typeof t[0]){if(t[0].silent)return;if(t[0].toString)return void console.error(Le+e,t[0].toString())}console.error(Le+e,...t)}"function"!=typeof globalThis.fetch&&(globalThis.fetch=C),function(){const e={INTERNAL:{},Module:{},runtimeId:void 0,runtimeBuildInfo:{productVersion:"11.0.0",gitHash:"061f153d18e67570a579ea8713c6c21ba1a93892",buildConfiguration:"Release",wasmEnableThreads:!1,wasmEnableSIMD:!0,wasmEnableExceptionHandling:!0},getConfig:p,exit:q,invokeLibraryInitializers:ke},o=[e,[],g,void 0,void 0,void 0,void 0,void 0,void 0,void 0],s={getRunMainPromise:Pe,rejectRunMainPromise:Ce,resolveRunMainPromise:je,createPromiseCompletionSource:Y,isControllablePromise:X,getPromiseCompletionSource:Q,isExited:F,isRuntimeRunning:_,addOnExitListener:J,abortStartup:Oe,quitNow:G};Object.assign(r,s);const a={debug:De,info:Ne,warn:Ie,error:We};Object.assign(n,a);const l={check:Me,fastCheck:Ue};Object.assign(i,l);const c={instantiateWasm:de};Object.assign(e.Module,c),o[3]=function(e,t,o){return[e.debug,e.info,e.warn,e.error,t.check,t.fastCheck,o.resolveRunMainPromise,o.rejectRunMainPromise,o.getRunMainPromise,o.createPromiseCompletionSource,o.isControllablePromise,o.getPromiseCompletionSource,o.isExited,o.isRuntimeRunning,o.addOnExitListener,o.abortStartup,o.quitNow]}(n,i,r),m(o,f),V.originalOnAbort=t.onAbort,V.originalOnExit=t.onExit,t.onAbort=K,t.onExit=H}(),await async function(){if(A){if(globalThis.crypto||(globalThis.crypto={}),!globalThis.crypto.getRandomValues){let e;try{e=await import(/*! webpackIgnore: true */"node:crypto")}catch(e){}if(e){if(e.webcrypto)globalThis.crypto=e.webcrypto;else if(e.randomBytes){const t=t=>{t&&t.set(e.randomBytes(t.length))};globalThis.crypto.getRandomValues=t}}else globalThis.crypto.getRandomValues=()=>{throw new Error("Using node without crypto support. To enable current operation, either provide polyfill for 'globalThis.crypto.getRandomValues' or enable 'node:crypto' module.")}}globalThis.performance||(globalThis.performance=(await import(/*! webpackIgnore: true */"perf_hooks")).performance)}}();const $e=new class{withConfig(e){return h(e),this}withConfigSrc(e){throw new Error("Not supported in this build")}withApplicationArguments(...e){return Se=e,this}withEnvironmentVariable(e,t){return h({environmentVariables:{[e]:t}}),this}withEnvironmentVariables(e){return h({environmentVariables:e}),this}withVirtualWorkingDirectory(e){return h({virtualWorkingDirectory:e}),this}withDiagnosticTracing(e){return h({diagnosticTracing:e}),this}withDebugging(e){return h({debugLevel:e}),this}withMainAssembly(e){return h({mainAssemblyName:e}),this}withApplicationArgumentsFromQuery(){if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}withApplicationEnvironment(e){return h({applicationEnvironment:e}),this}withApplicationCulture(e){return h({applicationCulture:e}),this}withResourceLoader(e){return oe=e,this}withModuleConfig(e){return Object.assign(t,e),this}async download(){try{return b(),Re(!0)}catch(e){throw q(1,e),e}}async create(){try{return b(),await Re(!1),this.dotnetApi=o,this.dotnetApi}catch(e){throw q(1,e),e}}run(){return this.runMain()}async runMain(){try{return this.dotnetApi||await this.create(),b(),this.dotnetApi.runMain(g.mainAssemblyName,Se)}catch(e){throw q(1,e),e}}async runMainAndExit(){try{return this.dotnetApi||await this.create(),b(),this.dotnetApi.runMainAndExit(g.mainAssemblyName,Se)}catch(e){throw q(1,e),e}}};$e.withConfig(/*json-start*/{
  "mainAssemblyName": "blazorwasmruntime",
  "resources": {
    "hash": "sha256-5ypyYTfBWSJLClTM6AyG6JKey10pwCCeoY4ljqExeO8=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.7z54x8me4m.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.yhnspn0295.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.bbw4uhdi7d.wasm",
        "hash": "sha256-l4641m6qWYVLjleIu3cThcHjWpz/8EBWR4JSNaregb8=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.wjoadba5nl.dll",
        "hash": "sha256-zLPyga3y/TcfdSUe3/RIy2lOtbGM3KXJ6vvPoW6B13U=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.uqzkeato5q.dll",
        "hash": "sha256-9vfnPaZt5PZKKLbU9lLMDzaFrakfZpmXoG3bGm0L9GY=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.2gv770225x.dll",
        "hash": "sha256-8qF83Qz50Skw2Za6+fes2Y1FEBWAMzv53v9TVwUEB3M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.1gnvxljnj1.dll",
        "hash": "sha256-ca1gON7S0B0lKrcP4RS36oRBqdtqWrtZe2wBav9Y5UM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.2u40lvced4.dll",
        "hash": "sha256-emm9rIhzeXEw1Hepro+yxI9KsCno0HhcnHjjl0r6pn4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.auroemtlwm.dll",
        "hash": "sha256-8pi62wNYSvsN4wf2biuQ38/PbtqlSDtFfoL5CxEEEno=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.y13kw7mffo.dll",
        "hash": "sha256-dgh9hS8hdZ0ljYObepeupIKivHGIqPXADYu7Q0Wijcg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.dll",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.d3r50o8j4u.dll",
        "hash": "sha256-l0f5vkb3o/7JZ2f1NDKIvKQWGyQcZ5ths62/WhzAQgw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.zxargyxb3s.dll",
        "hash": "sha256-2ecHvtu43umh0Q3yAOsvXRdjiyZ8T4EWQC8fujY42Qs=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.9f34hzg38b.dll",
        "hash": "sha256-qzgVvBQ1PdimnDnm6tZkgNmZZVskNv4dhg/iozSDcTk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.w20g4wyfkm.dll",
        "hash": "sha256-aEj4NsU7+6BpdCMzU2vkcdKm/QDJAmVFxYuL308gj7c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.dll",
        "name": "Microsoft.Extensions.Diagnostics.vvsrfb8ltj.dll",
        "hash": "sha256-+wV2BEBSJOwtzrNywn7ZairwxVTmVr5g3EftMr1nKvQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.dll",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.8q68ltft06.dll",
        "hash": "sha256-8DKU+BzEI6fes0zhjgPsvnm90vlBVoLGVg3aChvCTjc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.dll",
        "name": "Microsoft.Extensions.Hosting.Abstractions.df93il9bzz.dll",
        "hash": "sha256-eWjioUm8lwdlgD8x/IWiDlUBv6qEgryQ7F5LXF1BRo4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.ikei2v6mts.dll",
        "hash": "sha256-vufkmBcnqw72O4nsqfQpZ+yqOrEJMC/YPWZt3CiZ0hI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.ne6arzqp6z.dll",
        "hash": "sha256-EXqS+M/Ra5qyo+jcL36deT3rNJM+E2Gy8z3cZePCtIE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.bdzc723qby.dll",
        "hash": "sha256-D53EEG7UgD1z2EgqL9hmHQ9brAMZPUW52Xk5SQTF1x4=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.cr5sozd8kl.dll",
        "hash": "sha256-2J9yYJKtDgLUx3sKRCnULVOwjXhgFt5laRZ6ti2NjeE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.4v6y8jaf0n.dll",
        "hash": "sha256-wBTI7sPqSgfWrIAjiZt9vdKJ9xFXU1cQPbb0DzCv/9c=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.pvv6bsm8tu.dll",
        "hash": "sha256-5SGrzpmWy3YWkO6j1eG6OBS1ddL1udjXbcwgLQO7Rvk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.r5e3zk999n.dll",
        "hash": "sha256-kfJa0CgCPRaFQxBJIvBTVOGNGJSDIABhUZaeNn7AGeo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.67m0z1smto.dll",
        "hash": "sha256-nqinpx4HMQeOdI3nkMFOtEdscqS/RBwn6+8k6bZ4U5M=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.otp0updsdh.dll",
        "hash": "sha256-vDTPo3onSsViuD0Vwr+WpIWzr7NmGsWorGFhvYIYvnk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.aogpjkjh4s.dll",
        "hash": "sha256-Vqwt8p51UWjnAOZ0aQ2XwhlhvTi9bRfn4GM6eT3C0fw=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.23rki47grx.dll",
        "hash": "sha256-HhjzvSc2ORICkHq0/orOPNrWAbffihxFOGW+8To6ukc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.7jif7whhq6.dll",
        "hash": "sha256-bb1YuQxNh5GtAsTrikz4T2DfAH6Hl/Hh8OolJREJx0g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.oumc64fgpf.dll",
        "hash": "sha256-sETITZS1s3MIFl73ROvaqAwNwLRI1nLTDuEI74EHn4Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.ssbxocqrod.dll",
        "hash": "sha256-/OGCkgihuFhzE8w/xFp5vltriHhBJD52l7weZv/fsa8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.ifef09dwh9.dll",
        "hash": "sha256-zopbXdfncGsrhtkDRdyoBooX5m37wP/5ZzpvGrZNfkI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.vvzkakaj0v.dll",
        "hash": "sha256-VZP6dwV52dO9jKgHhRjWp5gwuTjIB5cAhTF6+gab5IA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.dcghvjpyfj.dll",
        "hash": "sha256-A9j2IYSdG2TlWTN/Rm4yVQoyyoKn5VAPGD3/z/xiTk0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.pau9uz67u8.dll",
        "hash": "sha256-X5Rniblj2izw4bIGWqrqZ2Emf8JVHA2TqS7qWIsis7I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.1al92uxu39.dll",
        "hash": "sha256-+d08eNQ9XVFZpkfbAs3eggTmgGAAK5onmVvdSZDbCAE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.merlw55rt4.dll",
        "hash": "sha256-Ah4OKcjEsnCRU4LZFU7ttnm1cBhpG8LGmaJNyFIrU1g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.7aldsdfy9g.dll",
        "hash": "sha256-/wwxnElxMkFWzNAC8NOt3M7VysgIlx1eL2BTR1d0z+g=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.hxk5etz8zq.dll",
        "hash": "sha256-y3TEJmgPqLaQ6rWm3lbwB6neJjmRQyNrNubNS2biyOY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.428jmq4smi.dll",
        "hash": "sha256-dJLQCSV5OgH5DMr8gyB9gl7PfAFNZdjY9sID2sK2ENc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.hhmke14f7g.dll",
        "hash": "sha256-1SAZk4g+GLJbUNjvsxlOC2YWIttqC1WXZ89XybnUOCA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.e7fzkhbc7l.dll",
        "hash": "sha256-ul/6M/lJQUQ8JBQGWX9ZLMUjv3Vf9sYm9VNXhgsLg6Q=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.hrmqa4vhlm.dll",
        "hash": "sha256-QwBg59MbhFnfJY6MvAbn7VBzdTf7r1qVS2mrH8g2tP8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.gfbu5pzd0u.dll",
        "hash": "sha256-pNG/y/uiW9mQ7hDcr14Lag9u6HcZ14iKe0XhVA0yybQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.4o65xt2752.dll",
        "hash": "sha256-BOYkwMCNcOp18TZ6EIq6ukIk4s5D1/BiebAqf182aP8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.d4p7s9xl0k.dll",
        "hash": "sha256-7SpfO0NpFBRzKUXv3F8d60+sdKXiPuXxPPuF9l1+cnc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "blazorwasmruntime.dll",
        "name": "blazorwasmruntime.aem9cr2px4.dll",
        "hash": "sha256-Xu5CM1sJNh3xmFrxo6GNvYMWKkK/obXTh3JE4zGrSoY=",
        "cache": "force-cache"
      }
    ]
  },
  "debugLevel": 0,
  "linkerEnabled": true,
  "globalizationMode": "invariant",
  "extensions": {
    "blazor": {}
  },
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.AspNetCore.Components.Routing.RegexConstraintSupport": false,
        "Microsoft.Extensions.DependencyInjection.VerifyOpenGenericServiceTrimmability": true,
        "System.ComponentModel.DefaultValueAttribute.IsSupported": false,
        "System.ComponentModel.Design.IDesignerHost.IsSupported": false,
        "System.ComponentModel.TypeConverter.EnableUnsafeBinaryFormatterInDesigntimeLicenseContextSerialization": false,
        "System.ComponentModel.TypeDescriptor.IsComObjectDescriptorSupported": false,
        "System.Data.DataSet.XmlSerializationIsSupported": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": false,
        "System.Diagnostics.Tracing.EventSource.IsSupported": false,
        "System.GC.Server": true,
        "System.Globalization.Invariant": true,
        "System.TimeZoneInfo.Invariant": false,
        "System.Globalization.PredefinedCulturesOnly": true,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": false,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.ResourceManager.AllowCustomResourceTypes": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.CompilerServices.RuntimeFeature.IsDynamicCodeSupported": true,
        "System.Runtime.InteropServices.BuiltInComInterop.IsSupported": false,
        "System.Runtime.InteropServices.EnableConsumingManagedCodeFromNativeHosting": false,
        "System.Runtime.InteropServices.EnableCppCLIHostActivation": false,
        "System.Runtime.InteropServices.Marshalling.EnableGeneratedComInterfaceComImportInterop": false,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.StartupHookProvider.IsSupported": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": true,
        "System.Threading.Thread.EnableAutoreleasePool": false,
        "Microsoft.AspNetCore.Components.Endpoints.NavigationManager.DisableThrowNavigationException": false
      }
    }
  }
}/*json-end*/),async function(e){try{if(!A||globalThis.process.argv.length<3||I("file:///"+N(globalThis.process.argv[1].toLowerCase()))!==I(N(U.toLowerCase()))){if(E&&void 0!==globalThis.arguments)throw new Error("Shell/V8 hosting is not supported")}else await async function(e){if(!A)return;const t=await j(),o="/managed",n=await t.promises.readdir("."),i=n.filter(e=>e.endsWith(".dll")).map(e=>{const t=e.substring(e.lastIndexOf("/")+1);return{virtualPath:o+"/"+e,name:t}}),r=globalThis.process.argv[2],s=r.replace(/\.dll$/,".runtimeconfig.json");let a={};if(t.existsSync(s)){const e=await t.promises.readFile(s,{encoding:"utf8"});a=JSON.parse(e)}const l=n.filter(e=>e.startsWith("icudt")&&e.endsWith(".dat")).map(e=>{const t=e.substring(e.lastIndexOf("/")+1);return{virtualPath:t,name:t}}),c={};let u="all";l.length||(u="invariant",c.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT="1");const d={mainAssemblyName:r,runtimeConfig:a,globalizationMode:u,virtualWorkingDirectory:o,environmentVariables:c,resources:{jsModuleNative:[{name:"dotnet.native.js"}],jsModuleRuntime:[{name:"dotnet.runtime.js"}],wasmNative:[{name:"dotnet.native.wasm"}],coreAssembly:[{virtualPath:o+"/System.Private.CoreLib.dll",name:"System.Private.CoreLib.dll"}],assembly:i,icu:l}};e.withConfig(d),e.withApplicationArguments(...globalThis.process.argv.slice(3))}(e),await e.runMainAndExit()}catch(e){q(1,e)}}($e).catch();export{$e as dotnet,q as exit};
//# sourceMappingURL=dotnet.js.map
