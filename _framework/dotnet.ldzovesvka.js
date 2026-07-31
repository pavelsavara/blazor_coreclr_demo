//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.
//! This is generated file, see src/native/rollup.config.js

let e,t,o;const n={},r={},i={},s={},a={},l={},c={},u={},d={};function m(n,r){if(!Array.isArray(n))throw new Error("Expected internals to be an array");if(!Array.isArray(n[1]))throw new Error("Expected internal updates to be an array");if(void 0===e)e=n;else if(e!==n)throw new Error("Cannot replace internals");if(void 0===o&&(o=e[0]),"object"!=typeof o)throw new Error("Expected internals to have RuntimeAPI");void 0===t&&(t=o.Module);const i=e[1];r&&!i.includes(r)&&i.push(r);for(const t of e[1])t(e)}function f(){0===Object.keys(i).length&&e[3]&&function(e,t,o,n){const r={debug:e[0],info:e[1],warn:e[2],error:e[3]},i={check:e[4],fastCheck:e[5]},s={resolveRunMainPromise:e[6],rejectRunMainPromise:e[7],getRunMainPromise:e[8],createPromiseCompletionSource:e[9],isControllablePromise:e[10],getPromiseCompletionSource:e[11],isExited:e[12],isRuntimeRunning:e[13],addOnExitListener:e[14],abortStartup:e[15],quitNow:e[16],exit:e[17],normalizeException:e[18],fetchSatelliteAssemblies:e[19],fetchLazyAssembly:e[20]};Object.assign(n,s),Object.assign(t,r),Object.assign(o,i)}(e[3],n,r,i),0===Object.keys(s).length&&e[4]&&function(e,t){const o={bindJSImportST:e[0],invokeJSImportST:e[1],releaseCSOwnedObject:e[2],resolveOrRejectPromise:e[3],cancelPromise:e[4],invokeJSFunction:e[5],forceDisposeProxies:e[6],abortInteropTimers:e[7]};Object.assign(t,o)}(e[4],s),0===Object.keys(a).length&&e[5]&&function(e,t){const o={registerDllBytes:e[0],installVfsFile:e[1],loadIcuData:e[2],initializeCoreCLR:e[3],registerPdbBytes:e[4],instantiateWasm:e[5],instantiateWebcilModule:e[6]};Object.assign(t,o)}(e[5],a),0===Object.keys(u).length&&e[8]&&function(e,t){const o={utf16ToString:e[0],stringToUTF16:e[1],stringToUTF16Ptr:e[2],stringToUTF8Ptr:e[3],stringToUTF8:e[4],utf8ToStringRelaxed:e[5],zeroRegion:e[6],arrayBufferNeedsCopy:e[7],viewOrCopy:e[8],abortBackgroundTimers:e[9],abortPosix:e[10],getExitStatus:e[11],runBackgroundTimers:e[12]};Object.assign(t,o)}(e[8],u),0===Object.keys(l).length&&e[6]&&function(e,t){const o={SystemInteropJS_GetManagedStackTrace:e[0],SystemInteropJS_CallDelegate:e[1],SystemInteropJS_CompleteTask:e[2],SystemInteropJS_ReleaseJSOwnedObjectByGCHandle:e[3],SystemInteropJS_BindAssemblyExports:e[4],SystemInteropJS_CallJSExport:e[5]};Object.assign(t,o)}(e[6],l),0===Object.keys(c).length&&e[7]&&function(e,t){const o={getWasmMemory:e[0],getWasmTable:e[1],SystemJS_ScheduleDiagnosticServer:e[2],SystemJS_GetMethodName:e[3]};Object.assign(t,o)}(e[7],c),0===Object.keys(d).length&&e[9]&&function(e,t){const o={symbolicateStackTrace:e[0],installNativeSymbols:e[1],ds_rt_websocket_create:e[2],ds_rt_websocket_send:e[3],ds_rt_websocket_poll:e[4],ds_rt_websocket_recv:e[5],ds_rt_websocket_close:e[6],ds_rt_browser_performance_measure:e[7]};Object.assign(t,o)}(e[9],d)}const h=globalThis,p="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,b="function"==typeof importScripts,g="object"==typeof window||b&&!p,y=!g&&!p,v="/",w={};function R(){return w}function A(){if(!w.mainAssemblyName)throw new Error("Loader configuration error: 'mainAssemblyName' is required.");if(!w.resources||!w.resources.coreAssembly||0===w.resources.coreAssembly.length)throw new Error("Loader configuration error: 'resources.coreAssembly' is required and must contain at least one assembly.")}function E(e){var t;void 0===(t=w).appendElementOnExit&&(t.appendElementOnExit=!1),void 0===t.logExitCode&&(t.logExitCode=!1),void 0===t.exitOnUnhandledError&&(t.exitOnUnhandledError=!1),void 0===t.loadAllSatelliteResources&&(t.loadAllSatelliteResources=!1),void 0===t.debugLevel&&(t.debugLevel=0),void 0===t.diagnosticTracing&&(t.diagnosticTracing=!1),void 0===t.virtualWorkingDirectory&&(t.virtualWorkingDirectory=v),void 0===t.maxParallelDownloads&&(t.maxParallelDownloads=16),void 0===t.enableDownloadRetry&&(t.enableDownloadRetry=!0),void 0===t.applicationEnvironment&&(t.applicationEnvironment="Production"),x(t),x(e),function(e,t){if(e===t||null==t)return e;(function(e,t){if(e===t||null==t)return e;t.hash=t.hash??e.hash,t.coreAssembly=[...e.coreAssembly,...t.coreAssembly||[]],t.assembly=[...e.assembly,...t.assembly||[]],t.lazyAssembly=[...e.lazyAssembly,...t.lazyAssembly||[]],t.corePdb=[...e.corePdb,...t.corePdb||[]],t.pdb=[...e.pdb,...t.pdb||[]],t.jsModuleNative=[...e.jsModuleNative,...t.jsModuleNative||[]],t.jsModuleDiagnostics=[...e.jsModuleDiagnostics,...t.jsModuleDiagnostics||[]],t.jsModuleRuntime=[...e.jsModuleRuntime,...t.jsModuleRuntime||[]],t.wasmSymbols=[...e.wasmSymbols,...t.wasmSymbols||[]],t.wasmNative=[...e.wasmNative,...t.wasmNative||[]],t.icu=[...e.icu,...t.icu||[]],t.vfs=[...e.vfs,...t.vfs||[]],t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded,...t.modulesAfterConfigLoaded||[]],t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady,...t.modulesAfterRuntimeReady||[]],t.extensions={...e.extensions,...t.extensions||{}};for(const o in{...e.satelliteResources,...t.satelliteResources||{}})t.satelliteResources[o]=[...e.satelliteResources[o]||[],...t.satelliteResources[o]||[]];Object.assign(e,t)})(e.resources,t.resources),t.appendElementOnExit=void 0!==t.appendElementOnExit?t.appendElementOnExit:e.appendElementOnExit,t.logExitCode=void 0!==t.logExitCode?t.logExitCode:e.logExitCode,t.exitOnUnhandledError=void 0!==t.exitOnUnhandledError?t.exitOnUnhandledError:e.exitOnUnhandledError,t.loadAllSatelliteResources=void 0!==t.loadAllSatelliteResources?t.loadAllSatelliteResources:e.loadAllSatelliteResources,t.mainAssemblyName=void 0!==t.mainAssemblyName?t.mainAssemblyName:e.mainAssemblyName,t.virtualWorkingDirectory=void 0!==t.virtualWorkingDirectory?t.virtualWorkingDirectory:e.virtualWorkingDirectory,t.debugLevel=void 0!==t.debugLevel?t.debugLevel:e.debugLevel,t.diagnosticTracing=void 0!==t.diagnosticTracing?t.diagnosticTracing:e.diagnosticTracing,t.applicationEnvironment=void 0!==t.applicationEnvironment?t.applicationEnvironment:e.applicationEnvironment,t.environmentVariables={...e.environmentVariables,...t.environmentVariables},t.runtimeOptions=[...e.runtimeOptions,...t.runtimeOptions],t.runtimeConfig.runtimeOptions.configProperties={...e.runtimeConfig.runtimeOptions.configProperties,...t.runtimeConfig.runtimeOptions.configProperties};const o=e.resources;Object.assign(e,t),e.resources=o}(w,e)}function x(e){e.resources||(e.resources={}),function(e){e.coreAssembly||(e.coreAssembly=[]),e.assembly||(e.assembly=[]),e.lazyAssembly||(e.lazyAssembly=[]),e.corePdb||(e.corePdb=[]),e.pdb||(e.pdb=[]),e.jsModuleNative||(e.jsModuleNative=[]),e.jsModuleDiagnostics||(e.jsModuleDiagnostics=[]),e.jsModuleRuntime||(e.jsModuleRuntime=[]),e.wasmSymbols||(e.wasmSymbols=[]),e.wasmNative||(e.wasmNative=[]),e.icu||(e.icu=[]),e.modulesAfterConfigLoaded||(e.modulesAfterConfigLoaded=[]),e.modulesAfterRuntimeReady||(e.modulesAfterRuntimeReady=[]),e.satelliteResources||(e.satelliteResources={}),e.extensions||(e.extensions={}),e.vfs||(e.vfs=[])}(e.resources),e.environmentVariables||(e.environmentVariables={}),e.runtimeOptions||(e.runtimeOptions=[]),e.runtimeConfig?e.runtimeConfig.runtimeOptions?e.runtimeConfig.runtimeOptions.configProperties||(e.runtimeConfig.runtimeOptions.configProperties={}):e.runtimeConfig.runtimeOptions={configProperties:{}}:e.runtimeConfig={runtimeOptions:{configProperties:{}}}}const T={creatingRuntime:!1,nativeReady:!1,dotnetReady:!1,exitCode:void 0,exitReason:void 0,originalOnAbort:void 0,originalOnExit:void 0,onExitListeners:[]};function P(){return void 0!==T.exitCode}function S(){return T.dotnetReady&&!P()}function O(e){T.onExitListeners.push(e)}function k(e){T.originalOnExit&&T.originalOnExit(e),j(e,T.exitReason)}function C(e){T.originalOnAbort&&T.originalOnAbort(e||T.exitReason),j(1,e||T.exitReason)}function j(e,o){const r=o&&"object"==typeof o;e=r&&"number"==typeof o.status?o.status:void 0===e?-1:e;const a=r&&"string"==typeof o.message?o.message:""+o;o=r?o:function(e,t){const o=u.getExitStatus(),n="function"==typeof o?new o(e):new Error("Exit with code "+e+" "+t);return n.message=t,n.toString=()=>t,n}(e,a),o.status=e,o.message||(o.message=a);const l=!!o.silent,c=P();let d;d="function"==typeof o.getManageStack&&S()?o.getManageStack():o.stack||(new Error).stack||"",o.silent=!0;let m=!0;if(c||T.exitReason)l||n.debug(`dotnet.js exit() called after previous exit: ${a} ${d}`);else{T.exitReason=o;try{if(s&&s.abortInteropTimers&&s.abortInteropTimers(),u&&u.abortBackgroundTimers&&u.abortBackgroundTimers(),t.onAbort===C&&(t.onAbort=T.originalOnAbort),t.onExit===k&&(t.onExit=T.originalOnExit),T.creatingRuntime&&n.info(`Aborting startup, reason: ${o}`),!l){0!==T.onExitListeners.length||T.dotnetReady||(n.error("Exiting during runtime startup: ",a),n.debug(()=>d));for(const t of T.onExitListeners)try{t(e,o,l)||(m=!1)}catch{}}T.creatingRuntime&&i.abortStartup(o)}catch(e){n.warn("dotnet.js exit() failed: ",e)}T.exitCode=e,m&&U(e,o)}throw o}function U(e,o){throw T.dotnetReady&&(t.runtimeKeepalivePop(),u&&u.abortPosix&&u.abortPosix(e,o,T.dotnetReady)),0===e&&g||(y&&"function"==typeof h.quit&&h.quit(e),p&&globalThis.process&&"function"==typeof globalThis.process.exit&&(globalThis.process.exitCode=e,globalThis.process.exit(e))),o}const M=Symbol.for("wasm promise control");function L(e,t){let o=null;const n=new Promise((n,r)=>{o={isDone:!1,promise:null,resolve:t=>{o.isDone||(o.isDone=!0,n(t),e&&e())},reject:e=>{o.isDone||(o.isDone=!0,r(e),t&&t())},propagateFrom:e=>{e.then(o.resolve).catch(o.reject)}}});return o.promise=n,n[M]=o,o}function D(e){return e[M]}function $(e){return void 0!==e[M]}function N(e){return new Promise(t=>setTimeout(t,e))}const z=/*! webpackIgnore: true */import.meta.url,I=z.indexOf("?"),B=I>0?z.substring(I):"",_=(W=z.replace(/\\/g,"/").replace(/[?#].*/,"")).slice(0,W.lastIndexOf("/"))+"/";var W;function F(e,t=!1){let o;return o=q(e)?e:globalThis.URL?new globalThis.URL(e,_).href:_+e,t&&(o+=B),o}const V=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,J=/[a-zA-Z]:[\\/]/;function q(e){return p||y?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||J.test(e):V.test(e)}function G(e){return r.check("string"==typeof e,"url must be a string"),!q(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI?new URL(e,globalThis.document.baseURI).href:e}let H,K,Z,Q=!1;async function Y(e,t,o){try{if(p){const n=e.startsWith("file://");if(!n&&Q)return globalThis.fetch(e,t||{credentials:"same-origin"});n&&(e=K.fileURLToPath(e));const r=await H.promises.readFile(e);return X(e,r,{status:200,statusText:"OK",headers:{"Content-Length":r.byteLength.toString(),"Content-Type":o||"application/octet-stream"}})}if(Q)return globalThis.fetch(e,t||{credentials:"same-origin"});if("function"==typeof read){const t=o&&(o.startsWith("application/json")||o.startsWith("text/plain")),n=read(e,t?"utf8":"binary");return X(e,n,{status:200,statusText:"OK",headers:{"Content-Length":t?n.length:n.byteLength.toString(),"Content-Type":o||"application/octet-stream"}})}}catch(t){return X(e,null,{status:500,statusText:"ERR28: "+t,headers:{}})}throw new Error("No fetch implementation available")}function X(e,t,o){if("function"==typeof globalThis.Response){const n=new Response(t,o);if(void 0===n.url)try{Object.defineProperty(n,"url",{value:e})}catch{}return n}return{ok:null!==t&&200===o.status,headers:{...o.headers,get:e=>o.headers[e]||null},url:e,arrayBuffer:()=>(r.check(null!==t&&t instanceof ArrayBuffer,"Response body is not a ArrayBuffer."),Promise.resolve(t)),json:()=>(r.check(null!==t&&"string"==typeof t,"Response body is not a string."),Promise.resolve(JSON.parse(t))),text:()=>{if("string"!=typeof t&&void 0!==globalThis.TextDecoder){const e=new globalThis.TextDecoder("utf-8");return Promise.resolve(e.decode(t||new Uint8Array))}return r.check(null!==t&&"string"==typeof t,"Response body is not a string."),Promise.resolve(t)}}}let ee,te=0,oe=0,ne=0;const re=new Set;let ie=null;const se=L();let ae;const le=L(),ce=L(()=>{m(e)});async function ue(e){return de(e)}async function de(e){const t=e;let o=await e.moduleExports;if(o&&(e.moduleExports=o),ne++,!o){if(t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name,!0)),t.behavior="js-module-dotnet","function"==typeof ee){const o=Ce[t.behavior];r.check(o,`Unsupported asset behavior: ${t.behavior}`);const n=ee(o,t.name,e.resolvedUrl,t.hash??"",t.behavior);r.check("string"==typeof n,"loadBootResourceCallback for JS modules must return string URL"),e.resolvedUrl=G(n)}if(!e.resolvedUrl)throw new Error("Invalid config, resources is not set");o=await import(e.resolvedUrl),e.moduleExports=o}return Oe(t),o}async function me(e){const t=await de(e),o=e.name||e.resolvedUrl||"unknown";try{return"function"==typeof t.onRuntimeConfigLoaded&&await t.onRuntimeConfigLoaded(w),t}catch(e){const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to invoke 'onRuntimeConfigLoaded' on library initializer '${o}': ${t}`,{cause:e})}}async function fe([e,t]){const n=await t,r=e.name||e.resolvedUrl||"unknown";try{"function"==typeof n.onRuntimeReady&&await n.onRuntimeReady(o)}catch(e){const t=e instanceof Error?e.message:String(e);throw new Error(`Failed to invoke 'onRuntimeReady' on library initializer '${r}': ${t}`,{cause:e})}}async function he(e,t){const n=ie;let r,i;ie=null;try{const t=await a.instantiateWasm(ae,e);r=t.instance,i=t.module}catch(e){throw o.exit(1,e),e}finally{Oe(n)}t(r,i);const s=c.getWasmMemory();le.resolve(s)}async function pe(e){const t=e;let o;try{ne++,t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name)),t.behavior="icu",o=await Ae(t)}finally{Oe(t)}o&&(await ce.promise,a.loadIcuData(o))}async function be(e){const t=e;ne++,r.check(t.virtualPath,"Assembly asset must have virtualPath");const o=t.culture?`${t.culture}/${t.name}`:t.name;o&&!e.resolvedUrl&&(e.resolvedUrl=F(o));const n=t.virtualPath?.endsWith(".wasm")??!1;ke(t),n?await async function(e){try{e.behavior="webcil";const t=Ee(e),o=await le.promise,n=a.instantiateWebcilModule(t,o,e.virtualPath,e.tableSize,e.payloadSize);await n}finally{Oe(e)}}(t):await async function(e){const t=e.virtualPath;let o;e.behavior="assembly";try{o=await Ae(e)}finally{Oe(e)}await ce.promise,o&&a.registerDllBytes(o,t,e.shortName)}(t)}async function ge(e){const t=e;let o;try{ne++,r.check(t.virtualPath,"PDB asset must have virtualPath"),t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name)),t.behavior="pdb",t.isOptional=t.isOptional||w.ignorePdbLoadErrors,ke(t),o=await Ae(t)}finally{Oe(t)}o&&(await ce.promise,a.registerPdbBytes(o,t.virtualPath))}async function ye(e){const t=e;let o;try{ne++,t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name)),t.behavior="vfs",o=await Ae(t)}finally{Oe(t)}o&&(await ce.promise,a.installVfsFile(o,e))}async function ve(e){const t=w.resources?.satelliteResources;if(!t)return;const o=[];for(const n of e)if(Object.prototype.hasOwnProperty.call(t,n))for(const e of t[n])e.culture=n,o.push(be(e));await Promise.all(o)}function we(e){return e.substring(e.lastIndexOf("/")+1)}async function Re(e){const t=w.resources?.lazyAssembly;if(!t)throw new Error("No assemblies have been marked as lazy-loadable. Use the 'BlazorWebAssemblyLazyLoad' item group in your project file to enable lazy loading an assembly.");let o=e;if(e.endsWith(".dll")?o=e.substring(0,e.length-4):e.endsWith(".wasm")&&(o=e.substring(0,e.length-5)),re.has(o))return!1;const n=o+".dll",r=o+".wasm";let i=null;for(const e of t){const t=we(e.virtualPath);if(t===n||t===r){i=e;break}}if(!i)throw new Error(`${e} must be marked with 'BlazorWebAssemblyLazyLoad' item group in your project file to allow lazy-loading.`);if(await be(i),re.add(o),0!==w.debugLevel){const e=o+".pdb",n=w.resources?.pdb;let r;if(n)for(const t of n)if(we(t.virtualPath)===e){r=t;break}if(!r)for(const o of t)if(we(o.virtualPath)===e){r=o;break}r&&await ge(r)}return!0}async function Ae(e){let t;r.check(e&&e.resolvedUrl,"Bad asset.resolvedUrl");try{t=await Ee(e)}catch(t){const o=t instanceof Error?t.message:String(t);throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}': ${o}`,{cause:t})}if(!t.ok){if(e.isOptional)return n.warn(`Optional resource '${e.name}' failed to load from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`),null;throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`)}const o=await(e.buffer||t.arrayBuffer());return new Uint8Array(o)}function Ee(e){return y||p||e.resolvedUrl&&-1!==e.resolvedUrl.indexOf("file://")?Se(e):!w.enableDownloadRetry||Ue[e.behavior]?Te(e):async function(e){let t;if(t=await o(),t.ok||e.isOptional||xe.has(t.status))return t;if(await se.promise,429===t.status&&await N(100),n.debug(`Retrying download '${e.name}'`),t=await o(),t.ok||xe.has(t.status))return t;if(await N(100),n.debug(`Retrying download (2) '${e.name}' after delay`),t=await o(),t.ok)return t;throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}' after multiple attempts. Last HTTP status: ${t.status} ${t.statusText}`);async function o(){let t;try{t=await Te(e),t||(t=X(e.resolvedUrl,null,{status:404,statusText:"No response"}))}catch(o){t=X(e.resolvedUrl,null,{status:500,statusText:o.message||"Exception during fetch"})}return t}}(e)}const xe=new Set([400,401,403,404,405,406,409,410,411,413,414,415,422,426,501,505]);async function Te(e){for(;Z&&!e.priority;)await Z.promise;try{!function(e){e.inprogress=!0,++te,te===w.maxParallelDownloads&&(n.debug("Throttling further parallel downloads"),Z=L())}(e);const t=Se(e),o=await t;return r.check(o,"Bad response in loadResourceThrottle"),Me[e.behavior]||(e.buffer=await o.arrayBuffer()),Le[e.behavior]||Pe(e),o}catch(t){throw Pe(e),t}}function Pe(e){if(r.check(e.inprogress,"Asset is not in progress in finishThrottling"),e.inprogress=!1,--te,Z&&te==w.maxParallelDownloads-1){n.debug("Resuming more parallel downloads");const e=Z;Z=void 0,e.resolve()}}async function Se(e){const t=je[e.behavior];if(r.check(t,`Unsupported asset behavior: ${e.behavior}`),e.buffer){const o=await e.buffer;return X(e.resolvedUrl,o,{status:200,statusText:"OK",headers:{"Content-Length":o.byteLength.toString(),"Content-Type":t}})}if(e.pendingDownload)return e.pendingDownload.response;if("function"==typeof ee){const t=Ce[e.behavior];r.check(t,`Unsupported asset behavior: ${e.behavior}`);const o=ee(t,e.name,e.resolvedUrl,e.hash??"",e.behavior);if("string"==typeof o)e.resolvedUrl=G(o);else if("object"==typeof o)return o}r.check(e.resolvedUrl,"Bad asset.resolvedUrl");const o={};return e.cache?o.cache=e.cache:w.disableNoCacheFetch||(o.cache="no-cache"),e.useCredentials?o.credentials="include":!w.disableIntegrityCheck&&e.hash&&(o.integrity=e.hash),n.debug(`Attempting to download '${function(e){const t=e.indexOf("?");return t>=0?e.substring(0,t):e}(e.resolvedUrl)}'`),Y(e.resolvedUrl,o,t)}function Oe(e){e.inprogress&&Pe(e),++oe,t.onDownloadResourceProgress&&t.onDownloadResourceProgress(oe,ne),e.buffer=null,e.pendingDownload=void 0}function ke(e){r.check(e.virtualPath,"Asset must have virtualPath"),e.virtualPath=e.virtualPath.replace(/\.wasm$/,".dll"),e.virtualPath=e.virtualPath.startsWith("/")?e.virtualPath:e.culture?`${v}${e.culture}/${e.virtualPath}`:v+e.virtualPath,e.shortName=e.virtualPath.startsWith(v)?e.virtualPath.substring(1):e.virtualPath.substring(e.virtualPath.lastIndexOf("/")+1)}const Ce={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",symbols:"pdb",dotnetwasm:"dotnetwasm",webcil:"assembly","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs"},je={resource:"application/octet-stream",assembly:"application/octet-stream",pdb:"application/octet-stream",icu:"application/octet-stream",vfs:"application/octet-stream",manifest:"application/json",symbols:"text/plain; charset=utf-8",dotnetwasm:"application/wasm",webcil:"application/wasm"},Ue={dotnetwasm:1,symbols:1},Me={dotnetwasm:1,symbols:1,webcil:1},Le={dotnetwasm:1,webcil:1};function De(e){if(!g)return;const t=globalThis.document,o=t?.head;if(t&&o)for(const n of e)if(!n.resolvedUrl&&n.name&&(n.resolvedUrl=F(n.name,!0)),n.resolvedUrl){const e=t.createElement("link");e.rel="prefetch",e.href=n.resolvedUrl,e.as="script",o.appendChild(e)}}async function $e(e,t,o,n){if("function"==typeof ee&&n&&o){const r=Ce[n];if(r){const i=ee(r,o,e,t??"",n);if("string"==typeof i)e=G(i);else if(null!=i&&"object"==typeof i){const e=await i;return void("function"==typeof e?.arrayBuffer&&await e.arrayBuffer())}}}const r={};w.disableNoCacheFetch||(r.cache="no-cache"),!w.disableIntegrityCheck&&t&&(r.integrity=t);const i=await Y(e,r);i.ok&&await i.arrayBuffer()}const Ne=L();let ze,Ie="none",Be=!1,_e=!1,We=[];async function Fe(o,i=!1){if(!w.resources||!w.resources.coreAssembly||!w.resources.coreAssembly.length)throw new Error("Invalid config, resources is not set");try{if(T.creatingRuntime=!0,o){if(ze&&await ze.promise,"intoMemory"===Ie||i&&"cacheOnly"===Ie)return;ze=L()}if(Be&&!o){t.runtimeKeepalivePush(),await Je(),"function"==typeof t.onDotnetReady&&await t.onDotnetReady();const e=Ze(w.resources.modulesAfterRuntimeReady).map(e=>[e,de(e)]);return void await Promise.all([...We,...e].map(fe))}const s=w.resources;let a=[];_e||(await async function(){if(r.check(await(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABBAFgAAADAgEAChABDgACaR9AAQMAAAsACxoL"),e=>e.codePointAt(0))),!0}catch(e){return!1}})(),"This browser/engine doesn't support WASM exception handling. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),r.check(await(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])))(),"This browser/engine doesn't support WASM SIMD. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),p){const e=parseInt(h.process.versions.node.split(".")[0],10);r.check(e>=18,`Node.js version ${h.process.versions.node} is not supported. Please use Node.js 18 or later.`)}else if(y&&"function"==typeof h.version&&h.d8){const e=h.version(),t=parseInt(e.split(".")[0],10);r.check(t>=14,"This V8 shell is too old. Please use a modern version.")}}(),"function"==typeof t.onConfigLoaded&&await t.onConfigLoaded(w),A(),a=Ze(s.modulesAfterConfigLoaded).map(e=>[e,me(e)]),await Promise.all(a.map(([,e])=>e)),t.out||(t.out=console.log.bind(console)),t.err||(t.err=console.error.bind(console)),t.print||(t.print=t.out),t.printErr||(t.printErr=t.err),await async function(){p&&(await async function(){return p&&!H&&(H=await import(/*! webpackIgnore: true */"fs")),H}(),await async function(){return p&&!K&&(K=await import(/*! webpackIgnore: true */"node:url")),K}()),Q="function"==typeof globalThis.fetch,Q||(globalThis.fetch=Y)}(),_e=!0,We=a);const l=function(){const e=[];if(!w.appsettings)return e;for(const t of w.appsettings){const o=t.lastIndexOf("/"),n=o>=0?t.substring(o+1):t;"appsettings.json"!==n&&n!==`appsettings.${w.applicationEnvironment}.json`||e.push({name:t,virtualPath:n,cache:"no-cache",useCredentials:!0})}return e}();if(o&&i)return await async function(e){const t=w.resources;if(!t)return;const o=w.maxParallelDownloads??16,n=[],r=[];function i(e,t){!e.resolvedUrl&&e.name&&(e.resolvedUrl=F(e.name)),e.resolvedUrl&&e.name&&r.push({url:e.resolvedUrl,hash:e.hash,name:e.name,behavior:t})}if(t.coreAssembly&&t.coreAssembly.forEach(e=>i(e,"assembly")),t.assembly&&t.assembly.forEach(e=>i(e,"assembly")),t.vfs&&t.vfs.forEach(e=>i(e,"vfs")),e&&e.forEach(e=>i(e,"vfs")),t.icu&&t.icu.forEach(e=>i(e,"icu")),t.wasmNative&&t.wasmNative.forEach(e=>i(e,"dotnetwasm")),t.corePdb&&t.corePdb.forEach(e=>i(e,"pdb")),t.pdb&&t.pdb.forEach(e=>i(e,"pdb")),t.wasmSymbols&&t.wasmSymbols.forEach(e=>i(e,"symbols")),w.loadAllSatelliteResources&&t.satelliteResources)for(const e of Object.keys(t.satelliteResources))for(const o of t.satelliteResources[e])!o.resolvedUrl&&o.name&&(o.resolvedUrl=F(`${e}/${o.name}`)),i(o,"assembly");De([...t.jsModuleNative||[],...t.jsModuleRuntime||[],...t.jsModuleDiagnostics||[],...t.modulesAfterConfigLoaded||[],...t.modulesAfterRuntimeReady||[]]);let s=0;async function a(){for(;s<r.length;){const e=r[s++];try{await $e(e.url,e.hash,e.name,e.behavior)}catch{}}}const l=Math.min(o,r.length);for(let e=0;e<l;e++)n.push(a());await Promise.all(n)}(l),Ie="cacheOnly",void ze?.resolve(void 0);s.jsModuleDiagnostics&&s.jsModuleDiagnostics.length>0&&((await ue(s.jsModuleDiagnostics[0])).dotnetInitializeModule(e),s.wasmSymbols&&s.wasmSymbols.length>0&&await async function(e){const t=e;let o;try{ne++,t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name)),t.behavior="symbols",t.isOptional=t.isOptional||w.ignorePdbLoadErrors,o=await async function(e){let t;r.check(e&&e.resolvedUrl,"Bad asset.resolvedUrl");try{t=await Ee(e)}catch(t){const o=t instanceof Error?t.message:String(t);throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}': ${o}`,{cause:t})}if(!t.ok){if(e.isOptional)return n.warn(`Optional resource '${e.name}' failed to load from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`),null;throw new Error(`Failed to load resource '${e.name}' from '${e.resolvedUrl}'. HTTP status: ${t.status} ${t.statusText}`)}return t.text()}(t)}finally{Oe(t)}d.installNativeSymbols(o||"")}(s.wasmSymbols[0]));const c=ue(s.jsModuleNative[0]),u=ue(s.jsModuleRuntime[0]),m=function(e){ne++;const t=e;if(t.name&&!e.resolvedUrl&&(e.resolvedUrl=F(t.name)),t.behavior="dotnetwasm",!e.resolvedUrl)throw new Error("Invalid config, resources is not set");return ie=e,ae=Ee(t),ae}(s.wasmNative[0]),f=Ke(s.coreAssembly,be),b=function(){if(w.resources?.icu&&"invariant"!==w.globalizationMode){const e=w.applicationCulture||(g?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);w.applicationCulture||(w.applicationCulture=e),e&&void 0===w.environmentVariables.LANG&&(w.environmentVariables.LANG=`${e}.UTF-8`);const t=w.resources.icu;let o=null;if("custom"===w.globalizationMode){if(t.length>=1)return t[0].name}else e&&"all"!==w.globalizationMode?"sharded"===w.globalizationMode&&(o=function(e){const t=e.split("-")[0];return"en"===t||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(t)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(e)):o="icudt.dat";if(o)for(let e=0;e<t.length;e++){const n=t[e];if(n.virtualPath===o)return n.name}}return w.globalizationMode="invariant",w.environmentVariables.DOTNET_SYSTEM_GLOBALIZATION_INVARIANT="1",null}(),v=Ke(s.icu,pe,e=>e.name===b),R=Ke(s.assembly,be),E=w.loadAllSatelliteResources&&s.satelliteResources?ve(Object.keys(s.satelliteResources)):Promise.resolve(),x=Ke([...Ze(s.vfs),...l],ye),P=0!=w.debugLevel,S=Ke(s.corePdb,ge,()=>P),O=Ke(s.pdb,ge,()=>P);se.resolve();let k=[];o?De(Ze(s.modulesAfterRuntimeReady)):k=Ze(s.modulesAfterRuntimeReady).map(e=>[e,de(e)]);const C=(await c).dotnetInitializeModule(e);ce.propagateFrom(C);const j=(await u).dotnetInitializeModule(e);if(await ce.promise,T.nativeReady=!0,await f,await x,await v,await m,o||(t.runtimeKeepalivePush(),await Je()),await R,await E,await O,await S,await j,r.check(oe===ne,`Not all assets were downloaded. Downloaded ${oe} out of ${ne}`),o)return Ie="intoMemory",Be=!0,void ze?.resolve(void 0);"function"==typeof t.onDotnetReady&&await t.onDotnetReady(),await Promise.all([...a,...k].map(fe))}catch(e){ze?.reject(e),j(1,e)}finally{T.creatingRuntime=!1}}function Ve(e){T.creatingRuntime&&ce.reject(e)}async function Je(){r.check(!T.dotnetReady,"CoreCLR should be initialized just once");const e=a.initializeCoreCLR();if(0!=e){const t=new Error("Failed to initialize CoreCLR");Ne.reject(t),j(e,t)}T.dotnetReady=!0}function qe(e){Ne.resolve(e)}function Ge(e){Ne.reject(e)}function He(){return Ne.promise}function Ke(e,t,o){if(!e)return Promise.resolve([]);const n=o?e.filter(o):e;return Promise.all(n.map(t))}function Ze(e){return e||[]}let Qe=[];async function Ye(e,t){const o=[...w.resources?.modulesAfterConfigLoaded??[],...w.resources?.modulesAfterRuntimeReady??[]],n=[];for(const r of o)n.push(Xe(r,e,t));await Promise.all(n)}async function Xe(e,t,o){try{const n=await e.moduleExports;n&&(e.moduleExports=n),n&&"function"==typeof n[t]&&await n[t](...o)}catch(o){const r=e.name||e.resolvedUrl||"unknown",i=o instanceof Error?o.message:String(o),s=new Error(`Failed to invoke '${t}' on library initializer '${r}': ${i}`,{cause:o});throw n.warn(s.message),j(1,s),s}}function et(e,t){if(!e)throw new Error(`Assert failed: ${t}`)}function tt(e,t){if(!e){const e=t();throw new Error(`Assert failed: ${e}`)}}const ot="DOTNET: ";function nt(e,...t){w.diagnosticTracing&&("function"==typeof e&&(e=e()),console.debug(ot+e,...t))}function rt(e,...t){console.info(ot+e,...t)}function it(e,...t){console.warn(ot+e,...t)}function st(e,t){t&&"object"==typeof t&&t.silent||console.error(ot+e,at(t))}function at(e){let t,o="unknown exception";return e&&("object"==typeof e&&void 0===e.status&&(t=void 0!==e.stack?e.stack+"":(new Error).stack+""),o=e.message?e.message:"function"==typeof e.toString?e.toString():e+"",t?t.startsWith(o)?o=lt(t):o+="\n"+lt(t):o=lt(o)),o}function lt(e){return d.symbolicateStackTrace?d.symbolicateStackTrace(e):e}!function(){const e={INTERNAL:{},Module:{},runtimeId:void 0,runtimeBuildInfo:{productVersion:"11.0.0",gitHash:"1e402a166243ae99b9c0e33e199c2e5215f0820f",buildConfiguration:"Release",wasmEnableThreads:!1,wasmEnableSIMD:!0,wasmEnableExceptionHandling:!0},getConfig:R,exit:j,invokeLibraryInitializers:Ye},o=[e,[],w,void 0,void 0,void 0,void 0,void 0,void 0,void 0],s={getRunMainPromise:He,rejectRunMainPromise:Ge,resolveRunMainPromise:qe,createPromiseCompletionSource:L,isControllablePromise:$,getPromiseCompletionSource:D,isExited:P,isRuntimeRunning:S,addOnExitListener:O,abortStartup:Ve,quitNow:U,exit:j,normalizeException:at,fetchSatelliteAssemblies:ve,fetchLazyAssembly:Re};Object.assign(i,s);const a={debug:nt,info:rt,warn:it,error:st};Object.assign(n,a);const l={check:et,fastCheck:tt};Object.assign(r,l);const c={instantiateWasm:he};Object.assign(e.Module,c),o[3]=function(e,t,o){return[e.debug,e.info,e.warn,e.error,t.check,t.fastCheck,o.resolveRunMainPromise,o.rejectRunMainPromise,o.getRunMainPromise,o.createPromiseCompletionSource,o.isControllablePromise,o.getPromiseCompletionSource,o.isExited,o.isRuntimeRunning,o.addOnExitListener,o.abortStartup,o.quitNow,o.exit,o.normalizeException,o.fetchSatelliteAssemblies,o.fetchLazyAssembly]}(n,r,i),m(o,f),T.originalOnAbort=t.onAbort,T.originalOnExit=t.onExit,t.onAbort=C,t.onExit=k}(),await async function(){if(y&&"function"!=typeof globalThis.atob){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";globalThis.atob=t=>{const o=String(t).replace(/=+$/,"");let n="";for(let t=0,r=0,i=0;i<o.length;i++){const s=e.indexOf(o.charAt(i));-1!==s&&(r=t%4?64*r+s:s,t++%4&&(n+=String.fromCharCode(255&r>>(-2*t&6))))}return n}}if(p){if(globalThis.crypto||(globalThis.crypto={}),!globalThis.crypto.getRandomValues){let e;try{e=await import(/*! webpackIgnore: true */"node:crypto")}catch(e){}if(e){if(e.webcrypto)globalThis.crypto=e.webcrypto;else if(e.randomBytes){const t=t=>{t&&t.set(e.randomBytes(t.length))};globalThis.crypto.getRandomValues=t}}else globalThis.crypto.getRandomValues=()=>{throw new Error("Using node without crypto support. To enable current operation, either provide polyfill for 'globalThis.crypto.getRandomValues' or enable 'node:crypto' module.")}}globalThis.performance||(globalThis.performance=(await import(/*! webpackIgnore: true */"perf_hooks")).performance)}}();const ct=new class{withConfig(e){return E(e),this}withConfigSrc(e){return this}withApplicationArguments(...e){return Qe=e,this}withEnvironmentVariable(e,t){return E({environmentVariables:{[e]:t}}),this}withEnvironmentVariables(e){return E({environmentVariables:e}),this}withVirtualWorkingDirectory(e){return E({virtualWorkingDirectory:e}),this}withDiagnosticTracing(e){return E({diagnosticTracing:e}),this}withDebugging(e){return E({debugLevel:e}),this}withMainAssembly(e){return E({mainAssemblyName:e}),this}withApplicationArgumentsFromQuery(){if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}withApplicationEnvironment(e){return E({applicationEnvironment:e}),this}withApplicationCulture(e){return E({applicationCulture:e}),this}withResourceLoader(e){return ee=e,this}withModuleConfig(e){return Object.assign(t,e),this}async download(e){try{return A(),Fe(!0,e??!1)}catch(e){throw j(1,e),e}}async create(){try{return A(),await Fe(!1),this.dotnetApi=o,this.dotnetApi}catch(e){throw j(1,e),e}}run(){return this.runMain()}async runMain(){try{return this.dotnetApi?A():await this.create(),this.dotnetApi.runMain(w.mainAssemblyName,Qe)}catch(e){throw j(1,e),e}}async runMainAndExit(){try{return this.dotnetApi?A():await this.create(),this.dotnetApi.runMainAndExit(w.mainAssemblyName,Qe)}catch(e){throw j(1,e),e}}};ct.withConfig(/*json-start*/{
  "mainAssemblyName": "7-blazor-coreclr",
  "resources": {
    "hash": "sha256-2qFD88YSH2KOx2gJxqI2hBcYl/TExOFbrDefasoUH9I=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.2t5mn09wlw.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.0z4f63phum.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.rdxgseajyb.wasm",
        "hash": "sha256-Af995/8cru6JFjDC/epEte35sG8TQPO0kLdEX25LsC0=",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt_CJK.dat",
        "name": "icudt_CJK.5lgyv9xn0b.dat",
        "hash": "sha256-eZuX0pntrUwNrAmFCMwpxJjFA3/Myi/rW2x9mEZ+Mbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_EFIGS.dat",
        "name": "icudt_EFIGS.xyuimhy3ww.dat",
        "hash": "sha256-SQcxb+bdx2UXUCU9tFdOWCr4Ctk64xghCnr0JGLWWKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_no_CJK.dat",
        "name": "icudt_no_CJK.h0en30vv0c.dat",
        "hash": "sha256-T8YllylpxyWp9Aq4AiF+BMAxKXqYyzWB9RA5RqY19vs=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Private.CoreLib.wasm",
        "name": "System.Private.CoreLib.lu76ixnpwj.wasm",
        "hash": "sha256-PZPrqj5XdOg5VvsNQylvEFp4GKP1a4mQJInH8ULpKIk=",
        "cache": "force-cache",
        "tableSize": 17972,
        "payloadSize": 3251440
      }
    ],
    "assembly": [
      {
        "virtualPath": "7-blazor-coreclr.wasm",
        "name": "7-blazor-coreclr.60blb8lncc.wasm",
        "hash": "sha256-CrrR6/iu8sfc4XBumv3cRfpBmusAcHwmGE8QuIRmvts=",
        "cache": "force-cache",
        "tableSize": 125,
        "payloadSize": 30320
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.wasm",
        "name": "Microsoft.AspNetCore.Components.Web.46sx7325wm.wasm",
        "hash": "sha256-3L8ou33RS+dV0fxHIrxgMDh8d76oWsMcIZyyZ7XRuQc=",
        "cache": "force-cache",
        "tableSize": 431,
        "payloadSize": 91456
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.wasm",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.twaharl0p8.wasm",
        "hash": "sha256-fTfBefUAYSoSMsd1cS2wO7ToNB2dezeVxm7oB/+uFwc=",
        "cache": "force-cache",
        "payloadSize": 138832
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.wasm",
        "name": "Microsoft.AspNetCore.Components.n5n86erqng.wasm",
        "hash": "sha256-xeoKu6AZxPS3F6JRNSkxVNdOOygPvZe+OlGr5TgQfzg=",
        "cache": "force-cache",
        "tableSize": 1713,
        "payloadSize": 384320
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.wasm",
        "name": "Microsoft.Extensions.Configuration.Abstractions.yspjvget9q.wasm",
        "hash": "sha256-YuhDNfHyKW9cNnjSvO4c8dN/ZCXonhvIshRBm+n43+A=",
        "cache": "force-cache",
        "tableSize": 12,
        "payloadSize": 6256
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.wasm",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.fteulje2j2.wasm",
        "hash": "sha256-fZgbEq6WwZ7SpG/iwENexaieKfCwsuOWlFlWfZTl1PQ=",
        "cache": "force-cache",
        "tableSize": 68,
        "payloadSize": 14640
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.wasm",
        "name": "Microsoft.Extensions.Configuration.Json.fb9lnr6rtu.wasm",
        "hash": "sha256-awUcFmQNXAIYh5qznTO2DVihrPjXvubFR03p5u62PJg=",
        "cache": "force-cache",
        "tableSize": 57,
        "payloadSize": 12560
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.wasm",
        "name": "Microsoft.Extensions.Configuration.bc82gl8h0e.wasm",
        "hash": "sha256-RSVy5Y2Fc07B8whe1tHMw5Ep04UHqlm4C/xSFUGjr4E=",
        "cache": "force-cache",
        "tableSize": 49,
        "payloadSize": 10288
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.7pc3zn4tix.wasm",
        "hash": "sha256-C6LnpRe5dRwkS0SPGmDYkiFJ0D7t5wdK5RC1fNjvhYQ=",
        "cache": "force-cache",
        "payloadSize": 23120
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.uvumgoq40v.wasm",
        "hash": "sha256-JqpplbriAdy7XbHReV1FmstKrw9UGeg56vJClicUIl4=",
        "cache": "force-cache",
        "tableSize": 448,
        "payloadSize": 90064
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.wasm",
        "name": "Microsoft.Extensions.Hosting.Abstractions.25v94gpipy.wasm",
        "hash": "sha256-Gib+34C29M24wfr51cUyZHmJ7nU/FDaPCSJDT85M5qw=",
        "cache": "force-cache",
        "payloadSize": 5200
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.wasm",
        "name": "Microsoft.Extensions.Logging.Abstractions.8fq5gg6evo.wasm",
        "hash": "sha256-BEWJwbeXF2MHW+7iV4Tdl1+bNsuYvgL/qYZqK2GNBTo=",
        "cache": "force-cache",
        "tableSize": 235,
        "payloadSize": 42880
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.wasm",
        "name": "Microsoft.Extensions.Logging.0a4v79v4gc.wasm",
        "hash": "sha256-mL0KTPdj0fOQPgqkW1FjW7yTQZvGUzNXXfEw4/k8M98=",
        "cache": "force-cache",
        "tableSize": 119,
        "payloadSize": 24368
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.wasm",
        "name": "Microsoft.Extensions.Options.8n5zyni2eh.wasm",
        "hash": "sha256-rDo9+xFHfFW6YNKc204893tGICV00xH7nD8/WqVDe1c=",
        "cache": "force-cache",
        "tableSize": 103,
        "payloadSize": 25456
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.wasm",
        "name": "Microsoft.Extensions.Primitives.6210a8z28i.wasm",
        "hash": "sha256-ouCem/uR82KVUoZ5VatAkvui1q9A+c/oRIhvIDsojrM=",
        "cache": "force-cache",
        "tableSize": 88,
        "payloadSize": 14016
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.wasm",
        "name": "Microsoft.JSInterop.WebAssembly.ybbllj6kmb.wasm",
        "hash": "sha256-YhIzyyPG9K7yCUNdO8wm1XBIzFP0EpwhdyLOdCq6aIw=",
        "cache": "force-cache",
        "tableSize": 82,
        "payloadSize": 15056
      },
      {
        "virtualPath": "Microsoft.JSInterop.wasm",
        "name": "Microsoft.JSInterop.yjt70kmmwo.wasm",
        "hash": "sha256-or6wp2R6qKSSzJD1pMQRhDUWT1aiMiWffzs0zCyBILs=",
        "cache": "force-cache",
        "payloadSize": 45648
      },
      {
        "virtualPath": "ReproLib.wasm",
        "name": "ReproLib.9yidv5y31m.wasm",
        "hash": "sha256-MTQdDcYCEloOjKjaK9DU2SokYutx7I4m3ko5uE6vms4=",
        "cache": "force-cache",
        "tableSize": 17,
        "payloadSize": 4144
      },
      {
        "virtualPath": "System.Collections.Concurrent.wasm",
        "name": "System.Collections.Concurrent.bcp3wxwz7v.wasm",
        "hash": "sha256-9ViCcJDeewvZp9SZwi45wkprmQ0JCZ4WU/DelemMhMo=",
        "cache": "force-cache",
        "tableSize": 3,
        "payloadSize": 5008
      },
      {
        "virtualPath": "System.Collections.Immutable.wasm",
        "name": "System.Collections.Immutable.i0vhgic52m.wasm",
        "hash": "sha256-vrDjWsQqujW80eZAbr4H09CGa5wFl1LmxNsy2PKRWCE=",
        "cache": "force-cache",
        "tableSize": 343,
        "payloadSize": 72176
      },
      {
        "virtualPath": "System.Collections.wasm",
        "name": "System.Collections.i5o2jga6ih.wasm",
        "hash": "sha256-OsZqkh7YPd+RuFy8yx/DT30ruAI98kLxgjcnH/DXswE=",
        "cache": "force-cache",
        "tableSize": 150,
        "payloadSize": 33280
      },
      {
        "virtualPath": "System.ComponentModel.wasm",
        "name": "System.ComponentModel.vyff06c4we.wasm",
        "hash": "sha256-l5bQfuY5zrFV6TFVlRla76tMtWRUrjXNdHYXgbUbW7w=",
        "cache": "force-cache",
        "payloadSize": 4688
      },
      {
        "virtualPath": "System.Console.wasm",
        "name": "System.Console.iura3pybut.wasm",
        "hash": "sha256-enKdOyi10eBkl4eqqvuhPxnqw5pm5hJZm0taDoT6hAY=",
        "cache": "force-cache",
        "tableSize": 114,
        "payloadSize": 18672
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.wasm",
        "name": "System.Diagnostics.DiagnosticSource.zeb5tjxsom.wasm",
        "hash": "sha256-9b3qH0wVDZXHQ6TIvSm8KnvH9ChQwdL8XvG2LchciVM=",
        "cache": "force-cache",
        "tableSize": 39,
        "payloadSize": 8624
      },
      {
        "virtualPath": "System.IO.Pipelines.wasm",
        "name": "System.IO.Pipelines.j0ujtncp0i.wasm",
        "hash": "sha256-TegEuOjGuoX4hH8dEnhuHyimgviedW9VjOEbX6CWQHE=",
        "cache": "force-cache",
        "tableSize": 9,
        "payloadSize": 5840
      },
      {
        "virtualPath": "System.Linq.Expressions.wasm",
        "name": "System.Linq.Expressions.xtknxdud1p.wasm",
        "hash": "sha256-Nf76QbUeRE9t4GTSJDX15sXE9tZTwQoKjfXKvNBliXQ=",
        "cache": "force-cache",
        "tableSize": 11998,
        "payloadSize": 1040288
      },
      {
        "virtualPath": "System.Linq.wasm",
        "name": "System.Linq.f3gwah8bo5.wasm",
        "hash": "sha256-e4ddAcnzafM4NrqH6gpZWz/hTJa5wcnofjTuLFxWfEI=",
        "cache": "force-cache",
        "tableSize": 235,
        "payloadSize": 55504
      },
      {
        "virtualPath": "System.Memory.wasm",
        "name": "System.Memory.2q6983qmes.wasm",
        "hash": "sha256-Sp7CF+Io2l4BZZB7RgQXV2C8lobjBovgKUI3rUkMQbg=",
        "cache": "force-cache",
        "tableSize": 112,
        "payloadSize": 19984
      },
      {
        "virtualPath": "System.Net.Http.Json.wasm",
        "name": "System.Net.Http.Json.fkhypjq6dn.wasm",
        "hash": "sha256-kW0mzH9hQc6QDyBRVMVTnfLW2DNLuJdjqRNPpJFditc=",
        "cache": "force-cache",
        "tableSize": 149,
        "payloadSize": 26352
      },
      {
        "virtualPath": "System.Net.Http.wasm",
        "name": "System.Net.Http.vhbxlfi928.wasm",
        "hash": "sha256-c+mC75Bo4t10etDupNZuUFUjxxXLDFrJHy/vKT8uxTE=",
        "cache": "force-cache",
        "tableSize": 980,
        "payloadSize": 211504
      },
      {
        "virtualPath": "System.Net.Primitives.wasm",
        "name": "System.Net.Primitives.nunsw5d1i6.wasm",
        "hash": "sha256-QTTGSv0YVIOTraLx9NYMU9wKl0MOXq9pu8PJOVwAUro=",
        "cache": "force-cache",
        "tableSize": 7,
        "payloadSize": 7088
      },
      {
        "virtualPath": "System.Private.Uri.wasm",
        "name": "System.Private.Uri.4d2hvjakkj.wasm",
        "hash": "sha256-yI7LXsNxrmrhj0QDzxOFmWHIwRt/2pBGdvm9dds+o6s=",
        "cache": "force-cache",
        "tableSize": 298,
        "payloadSize": 88992
      },
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.wasm",
        "name": "System.Runtime.InteropServices.JavaScript.wnjkmu9es4.wasm",
        "hash": "sha256-jL7c748lnwUG0V2odxofsjJvTAyGx5XiQmiqIItpV7s=",
        "cache": "force-cache",
        "tableSize": 215,
        "payloadSize": 56000
      },
      {
        "virtualPath": "System.Runtime.wasm",
        "name": "System.Runtime.ajyhjdjp1q.wasm",
        "hash": "sha256-FoD5J+51Hd1utBbq4Vvd8x/vInx41QyEae8kWX3hiyY=",
        "cache": "force-cache",
        "payloadSize": 6224
      },
      {
        "virtualPath": "System.Security.Cryptography.wasm",
        "name": "System.Security.Cryptography.nbd9gtqzfz.wasm",
        "hash": "sha256-s6/6ZMd1LG1BAIoZ/Frx5tdrWnkrqGa40QBfDVkVrNg=",
        "cache": "force-cache",
        "tableSize": 153,
        "payloadSize": 28384
      },
      {
        "virtualPath": "System.Text.Encodings.Web.wasm",
        "name": "System.Text.Encodings.Web.dufpdd7pqe.wasm",
        "hash": "sha256-dU1pB9bSg3tDtr2nmCLLPhaXsWga9o21oETNC3ZkM+s=",
        "cache": "force-cache",
        "tableSize": 144,
        "payloadSize": 37648
      },
      {
        "virtualPath": "System.Text.Json.wasm",
        "name": "System.Text.Json.26cgw1km56.wasm",
        "hash": "sha256-ZtrhD0ld9rbP6c33OLNV0P13A/sGxLOgAF/YIIr9JtU=",
        "cache": "force-cache",
        "tableSize": 4373,
        "payloadSize": 766736
      },
      {
        "virtualPath": "System.Text.RegularExpressions.wasm",
        "name": "System.Text.RegularExpressions.hxr577tgoa.wasm",
        "hash": "sha256-pc+6kdmUYdxXtN4XqeXvaexGNae69RRjc1Wpm3K8gJ0=",
        "cache": "force-cache",
        "tableSize": 132,
        "payloadSize": 20656
      }
    ]
  },
  "debugLevel": 0,
  "globalizationMode": "sharded",
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
        "System.Globalization.Invariant": false,
        "System.TimeZoneInfo.Invariant": false,
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
        "Microsoft.AspNetCore.Components.Endpoints.NavigationManager.DisableThrowNavigationException": false,
        "System.Diagnostics.StackTrace.IsLineNumberSupported": false,
        "System.Runtime.CompilerServices.RuntimeFeature.IsMultithreadingSupported": false
      }
    }
  }
}/*json-end*/);export{ct as dotnet,j as exit};
//# sourceMappingURL=dotnet.js.map
