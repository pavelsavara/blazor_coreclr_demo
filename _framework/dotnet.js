//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.
//! This is generated file, see src/native/rollup.config.js




// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
let dotnetInternals;
let Module;
let dotnetApi;
const dotnetLogger = {};
const dotnetAssert = {};
const dotnetLoaderExports = {};
const dotnetRuntimeExports = {};
const dotnetBrowserHostExports = {};
const dotnetInteropJSExports = {};
const dotnetNativeBrowserExports = {};
const dotnetBrowserUtilsExports = {};
const dotnetDiagnosticsExports = {};
const VoidPtrNull$1 = 0;
const CharPtrNull$1 = 0;
const NativePointerNull$1 = 0;
function dotnetGetInternals() {
    return dotnetInternals;
}
// this should be called when we want to dispatch new internal functions to other JS modules
// subscriber parameter is the callback function with visibility to the current module's internal closure
function dotnetUpdateInternals(internals, subscriber) {
    if (!Array.isArray(internals))
        throw new Error("Expected internals to be an array");
    if (!Array.isArray(internals[1 /* InternalExchangeIndex.InternalUpdatesCallbacks */]))
        throw new Error("Expected internal updates to be an array");
    if (dotnetInternals === undefined) {
        dotnetInternals = internals;
    }
    else if (dotnetInternals !== internals) {
        throw new Error("Cannot replace internals");
    }
    if (dotnetApi === undefined) {
        dotnetApi = dotnetInternals[0 /* InternalExchangeIndex.RuntimeAPI */];
    }
    if (typeof dotnetApi !== "object")
        throw new Error("Expected internals to have RuntimeAPI");
    if (Module === undefined) {
        Module = dotnetApi.Module;
    }
    const updates = dotnetInternals[1 /* InternalExchangeIndex.InternalUpdatesCallbacks */];
    if (subscriber && !updates.includes(subscriber)) {
        updates.push(subscriber);
    }
    for (const subscriber of dotnetInternals[1 /* InternalExchangeIndex.InternalUpdatesCallbacks */]) {
        subscriber(dotnetInternals);
    }
}
function dotnetUpdateInternalsSubscriber() {
    /**
     * Functions below allow our JS modules to exchange internal interfaces by passing tables of functions in known order instead of using string symbols.
     * IMPORTANT: If you need to add more functions, make sure that you add them at the end of the table, so that the order of existing functions does not change.
     */
    if (Object.keys(dotnetLoaderExports).length === 0 && dotnetInternals[3 /* InternalExchangeIndex.LoaderExportsTable */]) {
        loaderExportsFromTable(dotnetInternals[3 /* InternalExchangeIndex.LoaderExportsTable */], dotnetLogger, dotnetAssert, dotnetLoaderExports);
    }
    if (Object.keys(dotnetRuntimeExports).length === 0 && dotnetInternals[4 /* InternalExchangeIndex.RuntimeExportsTable */]) {
        runtimeExportsFromTable(dotnetInternals[4 /* InternalExchangeIndex.RuntimeExportsTable */], dotnetRuntimeExports);
    }
    if (Object.keys(dotnetBrowserHostExports).length === 0 && dotnetInternals[5 /* InternalExchangeIndex.BrowserHostExportsTable */]) {
        browserHostExportsFromTable(dotnetInternals[5 /* InternalExchangeIndex.BrowserHostExportsTable */], dotnetBrowserHostExports);
    }
    if (Object.keys(dotnetBrowserUtilsExports).length === 0 && dotnetInternals[8 /* InternalExchangeIndex.BrowserUtilsExportsTable */]) {
        nativeHelperExportsFromTable(dotnetInternals[8 /* InternalExchangeIndex.BrowserUtilsExportsTable */], dotnetBrowserUtilsExports);
    }
    if (Object.keys(dotnetInteropJSExports).length === 0 && dotnetInternals[6 /* InternalExchangeIndex.InteropJavaScriptExportsTable */]) {
        interopJavaScriptExportsFromTable(dotnetInternals[6 /* InternalExchangeIndex.InteropJavaScriptExportsTable */], dotnetInteropJSExports);
    }
    if (Object.keys(dotnetNativeBrowserExports).length === 0 && dotnetInternals[7 /* InternalExchangeIndex.NativeBrowserExportsTable */]) {
        nativeBrowserExportsFromTable(dotnetInternals[7 /* InternalExchangeIndex.NativeBrowserExportsTable */], dotnetNativeBrowserExports);
    }
    if (Object.keys(dotnetDiagnosticsExports).length === 0 && dotnetInternals[9 /* InternalExchangeIndex.DiagnosticsExportsTable */]) {
        diagnosticsExportsFromTable(dotnetInternals[9 /* InternalExchangeIndex.DiagnosticsExportsTable */], dotnetDiagnosticsExports);
    }
    // keep in sync with runtimeExportsToTable()
    function runtimeExportsFromTable(table, runtime) {
        const runtimerLocal = {
            bindJSImportST: table[0],
            invokeJSImportST: table[1],
            releaseCSOwnedObject: table[2],
            resolveOrRejectPromise: table[3],
            cancelPromise: table[4],
            invokeJSFunction: table[5],
            forceDisposeProxies: table[6],
        };
        Object.assign(runtime, runtimerLocal);
    }
    // keep in sync with loaderExportsToTable()
    function loaderExportsFromTable(table, logger, assert, dotnetLoaderExports) {
        const loggerLocal = {
            debug: table[0],
            info: table[1],
            warn: table[2],
            error: table[3],
        };
        const assertLocal = {
            check: table[4],
            fastCheck: table[5],
        };
        const loaderExportsLocal = {
            resolveRunMainPromise: table[6],
            rejectRunMainPromise: table[7],
            getRunMainPromise: table[8],
            createPromiseCompletionSource: table[9],
            isControllablePromise: table[10],
            getPromiseCompletionSource: table[11],
            isExited: table[12],
            isRuntimeRunning: table[13],
            addOnExitListener: table[14],
            abortStartup: table[15],
            quitNow: table[16],
        };
        Object.assign(dotnetLoaderExports, loaderExportsLocal);
        Object.assign(logger, loggerLocal);
        Object.assign(assert, assertLocal);
    }
    // keep in sync with browserHostExportsToTable()
    function browserHostExportsFromTable(table, native) {
        const nativeLocal = {
            registerDllBytes: table[0],
            installVfsFile: table[1],
            loadIcuData: table[2],
            initializeCoreCLR: table[3],
            registerPdbBytes: table[4],
        };
        Object.assign(native, nativeLocal);
    }
    // keep in sync with interopJavaScriptExportsToTable()
    function interopJavaScriptExportsFromTable(table, interop) {
        const interopLocal = {
            SystemInteropJS_GetManagedStackTrace: table[0],
            SystemInteropJS_CallDelegate: table[1],
            SystemInteropJS_CompleteTask: table[2],
            SystemInteropJS_ReleaseJSOwnedObjectByGCHandle: table[3],
            SystemInteropJS_BindAssemblyExports: table[4],
            SystemInteropJS_CallJSExport: table[5],
        };
        Object.assign(interop, interopLocal);
    }
    // keep in sync with nativeBrowserExportsToTable()
    function nativeBrowserExportsFromTable(table, interop) {
        const interopLocal = {};
        Object.assign(interop, interopLocal);
    }
    // keep in sync with nativeBrowserExportsToTable()
    function diagnosticsExportsFromTable(table, interop) {
        const interopLocal = {
            symbolicateStackTrace: table[0],
        };
        Object.assign(interop, interopLocal);
    }
    // keep in sync with nativeHelperExportsToTable()
    function nativeHelperExportsFromTable(table, interop) {
        const interopLocal = {
            utf16ToString: table[0],
            stringToUTF16: table[1],
            stringToUTF16Ptr: table[2],
            stringToUTF8Ptr: table[3],
            zeroRegion: table[4],
            isSharedArrayBuffer: table[5],
            abortTimers: table[6],
            abortPosix: table[7],
            getExitStatus: table[8],
        };
        Object.assign(interop, interopLocal);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const loaderConfig = {};
function getLoaderConfig() {
    return loaderConfig;
}
function validateLoaderConfig() {
    if (!loaderConfig.mainAssemblyName) {
        throw new Error("Loader configuration error: 'mainAssemblyName' is required.");
    }
    if (!loaderConfig.resources || !loaderConfig.resources.coreAssembly || loaderConfig.resources.coreAssembly.length === 0) {
        throw new Error("Loader configuration error: 'resources.coreAssembly' is required and must contain at least one assembly.");
    }
}
function mergeLoaderConfig(source) {
    defaultConfig(loaderConfig);
    normalizeConfig(source);
    mergeConfigs(loaderConfig, source);
}
function mergeConfigs(target, source) {
    // no need to merge the same object
    if (target === source || source === undefined || source === null)
        return target;
    mergeResources(target.resources, source.resources);
    source.appendElementOnExit = source.appendElementOnExit !== undefined ? source.appendElementOnExit : target.appendElementOnExit;
    source.logExitCode = source.logExitCode !== undefined ? source.logExitCode : target.logExitCode;
    source.exitOnUnhandledError = source.exitOnUnhandledError !== undefined ? source.exitOnUnhandledError : target.exitOnUnhandledError;
    source.loadAllSatelliteResources = source.loadAllSatelliteResources !== undefined ? source.loadAllSatelliteResources : target.loadAllSatelliteResources;
    source.mainAssemblyName = source.mainAssemblyName !== undefined ? source.mainAssemblyName : target.mainAssemblyName;
    source.virtualWorkingDirectory = source.virtualWorkingDirectory !== undefined ? source.virtualWorkingDirectory : target.virtualWorkingDirectory;
    source.debugLevel = source.debugLevel !== undefined ? source.debugLevel : target.debugLevel;
    source.diagnosticTracing = source.diagnosticTracing !== undefined ? source.diagnosticTracing : target.diagnosticTracing;
    source.environmentVariables = { ...target.environmentVariables, ...source.environmentVariables };
    source.runtimeOptions = [...target.runtimeOptions, ...source.runtimeOptions];
    Object.assign(target, source);
    return target;
}
function mergeResources(target, source) {
    // no need to merge the same object
    if (target === source || source === undefined || source === null)
        return target;
    source.coreAssembly = [...target.coreAssembly, ...source.coreAssembly];
    source.assembly = [...target.assembly, ...source.assembly];
    source.lazyAssembly = [...target.lazyAssembly, ...source.lazyAssembly];
    source.corePdb = [...target.corePdb, ...source.corePdb];
    source.pdb = [...target.pdb, ...source.pdb];
    source.jsModuleWorker = [...target.jsModuleWorker, ...source.jsModuleWorker];
    source.jsModuleNative = [...target.jsModuleNative, ...source.jsModuleNative];
    source.jsModuleDiagnostics = [...target.jsModuleDiagnostics, ...source.jsModuleDiagnostics];
    source.jsModuleRuntime = [...target.jsModuleRuntime, ...source.jsModuleRuntime];
    source.wasmSymbols = [...target.wasmSymbols, ...source.wasmSymbols];
    source.wasmNative = [...target.wasmNative, ...source.wasmNative];
    source.icu = [...target.icu, ...source.icu];
    source.vfs = [...target.vfs, ...source.vfs];
    source.modulesAfterConfigLoaded = [...target.modulesAfterConfigLoaded, ...source.modulesAfterConfigLoaded];
    source.modulesAfterRuntimeReady = [...target.modulesAfterRuntimeReady, ...source.modulesAfterRuntimeReady];
    source.extensions = { ...target.extensions, ...source.extensions };
    for (const key in source.satelliteResources) {
        source.satelliteResources[key] = [...target.satelliteResources[key] || [], ...source.satelliteResources[key] || []];
    }
    return Object.assign(target, source);
}
function defaultConfig(target) {
    if (target.appendElementOnExit === undefined)
        target.appendElementOnExit = false;
    if (target.logExitCode === undefined)
        target.logExitCode = false;
    if (target.exitOnUnhandledError === undefined)
        target.exitOnUnhandledError = false;
    if (target.loadAllSatelliteResources === undefined)
        target.loadAllSatelliteResources = false;
    if (target.debugLevel === undefined)
        target.debugLevel = 0;
    if (target.diagnosticTracing === undefined)
        target.diagnosticTracing = false;
    if (target.virtualWorkingDirectory === undefined)
        target.virtualWorkingDirectory = "/";
    if (target.maxParallelDownloads === undefined)
        target.maxParallelDownloads = 16;
    normalizeConfig(target);
}
function normalizeConfig(target) {
    if (!target.resources)
        target.resources = {};
    normalizeResources(target.resources);
    if (!target.environmentVariables)
        target.environmentVariables = {};
    if (!target.runtimeOptions)
        target.runtimeOptions = [];
}
function normalizeResources(target) {
    if (!target.coreAssembly)
        target.coreAssembly = [];
    if (!target.assembly)
        target.assembly = [];
    if (!target.lazyAssembly)
        target.lazyAssembly = [];
    if (!target.corePdb)
        target.corePdb = [];
    if (!target.pdb)
        target.pdb = [];
    if (!target.jsModuleWorker)
        target.jsModuleWorker = [];
    if (!target.jsModuleNative)
        target.jsModuleNative = [];
    if (!target.jsModuleDiagnostics)
        target.jsModuleDiagnostics = [];
    if (!target.jsModuleRuntime)
        target.jsModuleRuntime = [];
    if (!target.wasmSymbols)
        target.wasmSymbols = [];
    if (!target.wasmNative)
        target.wasmNative = [];
    if (!target.icu)
        target.icu = [];
    if (!target.modulesAfterConfigLoaded)
        target.modulesAfterConfigLoaded = [];
    if (!target.modulesAfterRuntimeReady)
        target.modulesAfterRuntimeReady = [];
    if (!target.satelliteResources)
        target.satelliteResources = {};
    if (!target.extensions)
        target.extensions = {};
    if (!target.vfs)
        target.vfs = [];
}

const bigInt=()=>(async e=>{try{return (await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0))===BigInt(0)}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11])),bulkMemory=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),exceptionsFinal=()=>(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABBAFgAAADAgEAChABDgACaR9AAQMAAAsACxoL"),(e=>e.codePointAt(0)))),!0}catch(e){return !1}})(),extendedConst=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0])),gc=()=>(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))(),jsStringBuiltins=()=>(async()=>{try{return await WebAssembly.instantiate(Uint8Array.from(atob("AGFzbQEAAAABBgFgAW8BfwIXAQ53YXNtOmpzLXN0cmluZwR0ZXN0AAA="),(e=>e.codePointAt(0))),{},{builtins:["js-string"]}),!0}catch(e){return !1}})(),jspi=()=>(async()=>"Suspending"in WebAssembly)(),memory64=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1])),multiMemory=()=>(async()=>{try{return new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,5,5,2,0,0,0,0])),!0}catch(e){return !1}})(),multiValue=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11])),mutableGlobals=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1])),referenceTypes=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),relaxedSimd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),saturatedFloatToInt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),signExtensions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),streamingCompilation=()=>(async()=>"compileStreaming"in WebAssembly)(),tailCall=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11])),threads=()=>(async e=>{try{return "undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),typeReflection=()=>(async()=>"Function"in WebAssembly)(),typedFunctionReferences=()=>(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABEANgAX8Bf2ABZAABf2AAAX8DBAMBAAIJBQEDAAEBChwDCwBBCkEqIAAUAGoLBwAgAEEBagsGANIBEAAL"),(e=>e.codePointAt(0)))),!0}catch(e){return !1}})();

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
const ENVIRONMENT_IS_WEB_WORKER = typeof importScripts === "function";
const ENVIRONMENT_IS_SIDECAR = ENVIRONMENT_IS_WEB_WORKER && typeof globalThis.dotnetSidecar !== "undefined"; // sidecar is emscripten main running in a web worker
const ENVIRONMENT_IS_WORKER = ENVIRONMENT_IS_WEB_WORKER && !ENVIRONMENT_IS_SIDECAR; // we redefine what ENVIRONMENT_IS_WORKER, we replace it in emscripten internals, so that sidecar works
const ENVIRONMENT_IS_WEB = typeof window === "object" || (ENVIRONMENT_IS_WEB_WORKER && !ENVIRONMENT_IS_NODE);
const ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE;
const VoidPtrNull = 0;
const CharPtrNull = 0;
const NativePointerNull = 0;

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function initPolyfills() {
    if (typeof globalThis.fetch !== "function") {
        globalThis.fetch = fetchLike;
    }
}
async function initPolyfillsAsync() {
    if (ENVIRONMENT_IS_NODE) {
        if (!globalThis.crypto) {
            globalThis.crypto = {};
        }
        if (!globalThis.crypto.getRandomValues) {
            let nodeCrypto = undefined;
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore:
                nodeCrypto = await import(/*! webpackIgnore: true */ 'node:crypto');
            }
            catch (err) {
                // Noop, error throwing polyfill provided bellow
            }
            if (!nodeCrypto) {
                globalThis.crypto.getRandomValues = () => {
                    throw new Error("Using node without crypto support. To enable current operation, either provide polyfill for 'globalThis.crypto.getRandomValues' or enable 'node:crypto' module.");
                };
            }
            else if (nodeCrypto.webcrypto) {
                globalThis.crypto = nodeCrypto.webcrypto;
            }
            else if (nodeCrypto.randomBytes) {
                const getRandomValues = (buffer) => {
                    if (buffer) {
                        buffer.set(nodeCrypto.randomBytes(buffer.length));
                    }
                };
                globalThis.crypto.getRandomValues = getRandomValues;
            }
        }
        if (!globalThis.performance) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore:
            globalThis.performance = (await import(/*! webpackIgnore: true */ 'perf_hooks')).performance;
        }
    }
    // WASM-TODO: performance polyfill for V8
}
let _nodeFs = undefined;
let _nodeUrl = undefined;
async function nodeFs() {
    if (ENVIRONMENT_IS_NODE && !_nodeFs) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:
        _nodeFs = await import(/*! webpackIgnore: true */ 'fs');
    }
    return _nodeFs;
}
async function nodeUrl() {
    if (ENVIRONMENT_IS_NODE && !_nodeUrl) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore:
        _nodeUrl = await import(/*! webpackIgnore: true */ 'node:url');
    }
    return _nodeUrl;
}
async function fetchLike(url, init) {
    try {
        await nodeFs();
        await nodeUrl();
        // this need to be detected only after we import node modules in onConfigLoaded
        const hasFetch = typeof (globalThis.fetch) === "function";
        if (ENVIRONMENT_IS_NODE) {
            const isFileUrl = url.startsWith("file://");
            if (!isFileUrl && hasFetch) {
                return globalThis.fetch(url, init || { credentials: "same-origin" });
            }
            if (isFileUrl) {
                url = _nodeUrl.fileURLToPath(url);
            }
            const arrayBuffer = await _nodeFs.promises.readFile(url);
            return {
                ok: true,
                headers: {
                    length: 0,
                    get: () => null
                },
                url,
                arrayBuffer: () => arrayBuffer,
                json: () => {
                    throw new Error("NotImplementedException");
                },
                text: () => {
                    throw new Error("NotImplementedException");
                }
            };
        }
        else if (hasFetch) {
            return globalThis.fetch(url, init || { credentials: "same-origin" });
        }
        else if (typeof (read) === "function") {
            return {
                ok: true,
                url,
                headers: {
                    length: 0,
                    get: () => null
                },
                arrayBuffer: () => {
                    return new Uint8Array(read(url, "binary"));
                },
                json: () => {
                    return JSON.parse(read(url, "utf8"));
                },
                text: () => read(url, "utf8")
            };
        }
    }
    catch (e) {
        return {
            ok: false,
            url,
            status: 500,
            headers: {
                length: 0,
                get: () => null
            },
            statusText: "ERR28: " + e,
            arrayBuffer: () => {
                throw e;
            },
            json: () => {
                throw e;
            },
            text: () => {
                throw e;
            }
        };
    }
    throw new Error("No fetch implementation available");
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const scriptUrlQuery = /*! webpackIgnore: true */ import.meta.url;
const queryIndex = scriptUrlQuery.indexOf("?");
const modulesUniqueQuery = queryIndex > 0 ? scriptUrlQuery.substring(queryIndex) : "";
const scriptUrl = normalizeFileUrl(scriptUrlQuery);
const scriptDirectory = normalizeDirectoryUrl(scriptUrl);
async function validateWasmFeatures() {
    dotnetAssert.check(await exceptions, "This browser/engine doesn't support WASM exception handling. Please use a modern version. See also https://aka.ms/dotnet-wasm-features");
    dotnetAssert.check(await simd, "This browser/engine doesn't support WASM SIMD. Please use a modern version. See also https://aka.ms/dotnet-wasm-features");
}
function locateFile(path, isModule = false) {
    let res;
    if (isPathAbsolute(path)) {
        res = path;
    }
    else if (globalThis.URL) {
        res = new globalThis.URL(path, scriptDirectory).href;
    }
    else {
        res = scriptDirectory + path;
    }
    if (isModule) {
        res += modulesUniqueQuery;
    }
    return res;
}
function normalizeFileUrl(filename) {
    // unix vs windows
    // remove query string
    return filename.replace(/\\/g, "/").replace(/[?#].*/, "");
}
function normalizeDirectoryUrl(dir) {
    return dir.slice(0, dir.lastIndexOf("/")) + "/";
}
const protocolRx = /^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//;
const windowsAbsoluteRx = /[a-zA-Z]:[\\/]/;
function isPathAbsolute(path) {
    if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
        // unix /x.json
        // windows \x.json
        // windows C:\x.json
        // windows C:/x.json
        return path.startsWith("/") || path.startsWith("\\") || path.indexOf("///") !== -1 || windowsAbsoluteRx.test(path);
    }
    // anything with protocol is always absolute
    // windows file:///C:/x.json
    // windows http://C:/x.json
    return protocolRx.test(path);
}
function makeURLAbsoluteWithApplicationBase(url) {
    dotnetAssert.check(typeof url === "string", "url must be a string");
    if (!isPathAbsolute(url) && url.indexOf("./") !== 0 && url.indexOf("../") !== 0 && globalThis.URL && globalThis.document && globalThis.document.baseURI) {
        const absoluteUrl = new URL(url, globalThis.document.baseURI);
        return absoluteUrl.href;
    }
    return url;
}
function isShellHosted() {
    return ENVIRONMENT_IS_SHELL && typeof globalThis.arguments !== "undefined";
}
function isNodeHosted() {
    if (!ENVIRONMENT_IS_NODE || globalThis.process.argv.length < 3) {
        return false;
    }
    const argv1 = globalThis.process.argv[1].toLowerCase();
    const argScript = normalizeFileUrl("file:///" + locateFile(argv1));
    const importScript = normalizeFileUrl(locateFile(scriptUrl.toLowerCase()));
    return argScript === importScript;
}
// Finds resources when running in NodeJS environment without explicit configuration
async function findResources(dotnet) {
    if (!ENVIRONMENT_IS_NODE) {
        return;
    }
    const fs = await nodeFs();
    const mountedDir = "/managed";
    const files = await fs.promises.readdir(".");
    const assemblies = files
        // TODO-WASM: webCIL
        .filter(file => file.endsWith(".dll"))
        .map(filename => {
        // filename without path
        const name = filename.substring(filename.lastIndexOf("/") + 1);
        return { virtualPath: mountedDir + "/" + filename, name };
    });
    const mainAssemblyName = globalThis.process.argv[2];
    const runtimeConfigName = mainAssemblyName.replace(/\.dll$/, ".runtimeconfig.json");
    let runtimeConfig = {};
    if (fs.existsSync(runtimeConfigName)) {
        const json = await fs.promises.readFile(runtimeConfigName, { encoding: "utf8" });
        runtimeConfig = JSON.parse(json);
    }
    const icus = files
        .filter(file => file.startsWith("icudt") && file.endsWith(".dat"))
        .map(filename => {
        // filename without path
        const name = filename.substring(filename.lastIndexOf("/") + 1);
        return { virtualPath: name, name };
    });
    const environmentVariables = {};
    let globalizationMode = "all" /* GlobalizationMode.All */;
    if (!icus.length) {
        globalizationMode = "invariant" /* GlobalizationMode.Invariant */;
        environmentVariables["DOTNET_SYSTEM_GLOBALIZATION_INVARIANT"] = "1";
    }
    const config = {
        mainAssemblyName,
        runtimeConfig,
        globalizationMode,
        virtualWorkingDirectory: mountedDir,
        environmentVariables,
        resources: {
            jsModuleNative: [{ name: "dotnet.native.js" }],
            jsModuleRuntime: [{ name: "dotnet.runtime.js" }],
            wasmNative: [{ name: "dotnet.native.wasm", }],
            coreAssembly: [{ virtualPath: mountedDir + "/System.Private.CoreLib.dll", name: "System.Private.CoreLib.dll" },],
            assembly: assemblies,
            icu: icus,
        }
    };
    dotnet.withConfig(config);
    dotnet.withApplicationArguments(...globalThis.process.argv.slice(3));
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const runtimeState = {
    runtimeReady: false,
    exitCode: undefined,
    exitReason: undefined,
    originalOnAbort: undefined,
    originalOnExit: undefined,
    onExitListeners: [],
};
function isExited() {
    return runtimeState.exitCode !== undefined;
}
function isRuntimeRunning() {
    return runtimeState.runtimeReady && !isExited();
}
function addOnExitListener(cb) {
    runtimeState.onExitListeners.push(cb);
}
function registerExit() {
    runtimeState.originalOnAbort = Module.onAbort;
    runtimeState.originalOnExit = Module.onExit;
    Module.onAbort = onEmAbort;
    Module.onExit = onEmExit;
}
function unregisterExit() {
    if (Module.onAbort === onEmAbort) {
        Module.onAbort = runtimeState.originalOnAbort;
    }
    if (Module.onExit === onEmExit) {
        Module.onExit = runtimeState.originalOnExit;
    }
}
function onEmExit(code) {
    if (runtimeState.originalOnExit) {
        runtimeState.originalOnExit(code);
    }
    exit(code, runtimeState.exitReason);
}
function onEmAbort(reason) {
    if (runtimeState.originalOnAbort) {
        runtimeState.originalOnAbort(reason || runtimeState.exitReason);
    }
    exit(1, reason || runtimeState.exitReason);
}
function createExitStatus(exitCode, message) {
    const ExitStatus = dotnetBrowserUtilsExports.getExitStatus();
    const ex = typeof ExitStatus === "function"
        ? new ExitStatus(exitCode)
        : new Error("Exit with code " + exitCode + " " + message);
    ex.message = message;
    ex.toString = () => message;
    return ex;
}
// WASM-TODO: raise ExceptionHandling.RaiseAppDomainUnhandledExceptionEvent() - also for JS unhandled exceptions ?
function exit(exitCode, reason) {
    // unify shape of the reason object
    const is_object = reason && typeof reason === "object";
    exitCode = (is_object && typeof reason.status === "number")
        ? reason.status
        : exitCode === undefined
            ? -1
            : exitCode;
    const message = (is_object && typeof reason.message === "string")
        ? reason.message
        : "" + reason;
    reason = is_object
        ? reason
        : createExitStatus(exitCode, message);
    reason.status = exitCode;
    if (!reason.message) {
        reason.message = message;
    }
    // force stack property to be generated before we shut down managed code, or create current stack if it doesn't exist
    const stack = "" + (reason.stack || (new Error().stack));
    try {
        Object.defineProperty(reason, "stack", {
            get: () => stack
        });
    }
    catch (e) {
        // ignore
    }
    // don't report this error twice
    const alreadySilent = !!reason.silent;
    const alreadyExisted = isExited();
    reason.silent = true;
    let shouldQuitNow = true;
    if (!alreadyExisted && !runtimeState.exitReason) {
        runtimeState.exitReason = reason;
        try {
            unregisterExit();
            if (!alreadySilent) {
                if (runtimeState.onExitListeners.length === 0 && !runtimeState.runtimeReady) {
                    dotnetLogger.error(`Exiting during runtime startup: ${message} ${stack}`);
                }
                for (const listener of runtimeState.onExitListeners) {
                    try {
                        if (!listener(exitCode, reason, alreadySilent)) {
                            shouldQuitNow = false;
                        }
                    }
                    catch {
                        // ignore errors from listeners
                    }
                }
            }
            if (!runtimeState.runtimeReady) {
                dotnetLogger.debug(() => `Aborting startup, reason: ${reason}`);
                dotnetLoaderExports.abortStartup(reason);
            }
        }
        catch (err) {
            dotnetLogger.warn("dotnet.js exit() failed", err);
            // don't propagate any failures
        }
        runtimeState.exitCode = exitCode; // this also marks the runtime as not running
        if (shouldQuitNow) {
            quitNow(exitCode, reason);
        }
    }
    else if (!alreadySilent) {
        dotnetLogger.debug(`dotnet.js exit() called after previous exit: ${message} ${stack}`);
    }
    throw reason;
}
function quitNow(exitCode, reason) {
    if (runtimeState.runtimeReady) {
        Module.runtimeKeepalivePop();
        if (dotnetBrowserUtilsExports && dotnetBrowserUtilsExports.abortTimers) {
            dotnetBrowserUtilsExports.abortTimers();
        }
        if (dotnetBrowserUtilsExports && dotnetBrowserUtilsExports.abortPosix) {
            dotnetBrowserUtilsExports.abortPosix(exitCode);
        }
    }
    if (exitCode !== 0 || !ENVIRONMENT_IS_WEB) {
        if (ENVIRONMENT_IS_NODE && globalThis.process && typeof globalThis.process.exit === "function") {
            globalThis.process.exitCode = exitCode;
            globalThis.process.exit(exitCode);
        }
    }
    throw reason;
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/// a unique symbol used to mark a promise as controllable
const promiseCompletionSourceSymbol = Symbol.for("wasm promise control");
/// Creates a new promise together with a controller that can be used to resolve or reject that promise.
/// Optionally takes callbacks to be called immediately after a promise is resolved or rejected.
function createPromiseCompletionSource(afterResolve, afterReject) {
    let promiseControl = null;
    const promise = new Promise((resolve, reject) => {
        promiseControl = {
            isDone: false,
            promise: null,
            resolve: (data) => {
                if (!promiseControl.isDone) {
                    promiseControl.isDone = true;
                    resolve(data);
                    if (afterResolve) {
                        afterResolve();
                    }
                }
            },
            reject: (reason) => {
                if (!promiseControl.isDone) {
                    promiseControl.isDone = true;
                    reject(reason);
                    if (afterReject) {
                        afterReject();
                    }
                }
            },
            propagateFrom: (other) => {
                other.then(promiseControl.resolve).catch(promiseControl.reject);
            }
        };
    });
    promiseControl.promise = promise;
    const controllablePromise = promise;
    controllablePromise[promiseCompletionSourceSymbol] = promiseControl;
    return promiseControl;
}
function getPromiseCompletionSource(promise) {
    return promise[promiseCompletionSourceSymbol];
}
function isControllablePromise(promise) {
    return promise[promiseCompletionSourceSymbol] !== undefined;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getIcuResourceName() {
    if (loaderConfig.resources?.icu && loaderConfig.globalizationMode !== "invariant" /* GlobalizationMode.Invariant */) {
        const culture = loaderConfig.applicationCulture || (ENVIRONMENT_IS_WEB ? (globalThis.navigator && globalThis.navigator.languages && globalThis.navigator.languages[0]) : Intl.DateTimeFormat().resolvedOptions().locale);
        if (!loaderConfig.applicationCulture) {
            loaderConfig.applicationCulture = culture;
        }
        const icuFiles = loaderConfig.resources.icu;
        let icuFile = null;
        if (loaderConfig.globalizationMode === "custom" /* GlobalizationMode.Custom */) {
            // custom ICU file is saved in the resources with fingerprinting and does not require mapping
            if (icuFiles.length >= 1) {
                return icuFiles[0].name;
            }
        }
        else if (!culture || loaderConfig.globalizationMode === "all" /* GlobalizationMode.All */) {
            icuFile = "icudt.dat";
        }
        else if (loaderConfig.globalizationMode === "sharded" /* GlobalizationMode.Sharded */) {
            icuFile = getShardedIcuResourceName(culture);
        }
        if (icuFile) {
            for (let i = 0; i < icuFiles.length; i++) {
                const asset = icuFiles[i];
                if (asset.virtualPath === icuFile) {
                    return asset.name;
                }
            }
        }
    }
    loaderConfig.globalizationMode = "invariant" /* GlobalizationMode.Invariant */;
    loaderConfig.environmentVariables["DOTNET_SYSTEM_GLOBALIZATION_INVARIANT"] = "1";
    return null;
}
function getShardedIcuResourceName(culture) {
    const prefix = culture.split("-")[0];
    if (prefix === "en" || ["fr", "fr-FR", "it", "it-IT", "de", "de-DE", "es", "es-ES"].includes(culture)) {
        return "icudt_EFIGS.dat";
    }
    if (["zh", "ko", "ja"].includes(prefix)) {
        return "icudt_CJK.dat";
    }
    return "icudt_no_CJK.dat";
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
let throttlingPCS;
let currentParallelDownloads = 0;
let downloadedAssetsCount = 0;
let totalAssetsToDownload = 0;
let loadBootResourceCallback = undefined;
function setLoadBootResourceCallback(callback) {
    loadBootResourceCallback = callback;
}
let wasmBinaryPromise = undefined;
const nativeModulePromiseController = createPromiseCompletionSource(() => {
    dotnetUpdateInternals(dotnetInternals);
});
async function loadDotnetModule(asset) {
    return loadJSModule(asset);
}
async function loadJSModule(asset) {
    let mod = asset.moduleExports;
    totalAssetsToDownload++;
    if (!mod) {
        const assetInternal = asset;
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name, true);
        }
        assetInternal.behavior = "js-module-dotnet";
        if (typeof loadBootResourceCallback === "function") {
            const type = runtimeToBlazorAssetTypeMap[assetInternal.behavior];
            dotnetAssert.check(type, `Unsupported asset behavior: ${assetInternal.behavior}`);
            const customLoadResult = loadBootResourceCallback(type, assetInternal.name, asset.resolvedUrl, assetInternal.integrity, assetInternal.behavior);
            dotnetAssert.check(typeof customLoadResult === "string", "loadBootResourceCallback for JS modules must return string URL");
            asset.resolvedUrl = makeURLAbsoluteWithApplicationBase(customLoadResult);
        }
        if (!asset.resolvedUrl)
            throw new Error("Invalid config, resources is not set");
        mod = await import(/* webpackIgnore: true */ asset.resolvedUrl);
    }
    onDownloadedAsset();
    return mod;
}
function fetchWasm(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "dotnetwasm";
    if (!asset.resolvedUrl)
        throw new Error("Invalid config, resources is not set");
    wasmBinaryPromise = loadResource(assetInternal);
    return wasmBinaryPromise;
}
async function instantiateWasm(imports, successCallback) {
    if (wasmBinaryPromise instanceof globalThis.Response === false || !WebAssembly.instantiateStreaming) {
        const res = await checkResponseOk();
        const data = await res.arrayBuffer();
        const module = await WebAssembly.compile(data);
        const instance = await WebAssembly.instantiate(module, imports);
        onDownloadedAsset();
        successCallback(instance, module);
    }
    else {
        const instantiated = await WebAssembly.instantiateStreaming(wasmBinaryPromise, imports);
        await checkResponseOk();
        onDownloadedAsset();
        successCallback(instantiated.instance, instantiated.module);
    }
    async function checkResponseOk() {
        dotnetAssert.check(wasmBinaryPromise, "WASM binary promise was not initialized");
        const res = await wasmBinaryPromise;
        if (res.ok === false) {
            throw new Error(`Failed to load WebAssembly module. HTTP status: ${res.status} ${res.statusText}`);
        }
        const contentType = res.headers && res.headers.get ? res.headers.get("Content-Type") : undefined;
        if (ENVIRONMENT_IS_WEB && contentType !== "application/wasm") {
            dotnetLogger.warn("WebAssembly resource does not have the expected content type \"application/wasm\", so falling back to slower ArrayBuffer instantiation.");
        }
        return res;
    }
}
async function fetchIcu(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "icu";
    const bytes = await fetchBytes(assetInternal);
    await nativeModulePromiseController.promise;
    onDownloadedAsset();
    if (bytes) {
        dotnetBrowserHostExports.loadIcuData(bytes);
    }
}
async function fetchDll(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "assembly";
    const bytes = await fetchBytes(assetInternal);
    await nativeModulePromiseController.promise;
    onDownloadedAsset();
    if (bytes) {
        dotnetBrowserHostExports.registerDllBytes(bytes, asset);
    }
}
async function fetchPdb(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "pdb";
    assetInternal.isOptional = assetInternal.isOptional || loaderConfig.ignorePdbLoadErrors;
    const bytes = await fetchBytes(assetInternal);
    await nativeModulePromiseController.promise;
    onDownloadedAsset();
    if (bytes) {
        dotnetBrowserHostExports.registerPdbBytes(bytes, asset);
    }
}
async function fetchVfs(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "vfs";
    const bytes = await fetchBytes(assetInternal);
    await nativeModulePromiseController.promise;
    onDownloadedAsset();
    if (bytes) {
        dotnetBrowserHostExports.installVfsFile(bytes, asset);
    }
}
async function fetchBytes(asset) {
    dotnetAssert.check(asset && asset.resolvedUrl, "Bad asset.resolvedUrl");
    const response = await loadResource(asset);
    if (!response.ok) {
        if (asset.isOptional) {
            dotnetLogger.warn(`Optional resource '${asset.name}' failed to load from '${asset.resolvedUrl}'. HTTP status: ${response.status} ${response.statusText}`);
            return null;
        }
        throw new Error(`Failed to load resource '${asset.name}' from '${asset.resolvedUrl}'. HTTP status: ${response.status} ${response.statusText}`);
    }
    const buffer = await (asset.buffer || response.arrayBuffer());
    return new Uint8Array(buffer);
}
function loadResource(asset) {
    if ("dotnetwasm" === asset.behavior) {
        // `response.arrayBuffer()` can't be called twice.
        return loadResourceFetch(asset);
    }
    if (ENVIRONMENT_IS_SHELL || ENVIRONMENT_IS_NODE || asset.resolvedUrl && asset.resolvedUrl.indexOf("file://") !== -1) {
        // no need to retry or throttle local file access
        return loadResourceFetch(asset);
    }
    if (!loaderConfig.enableDownloadRetry) {
        // only throttle, no retry
        return loadResourceThrottle(asset);
    }
    // retry and throttle
    return loadResourceRetry(asset);
}
const noRetryStatusCodes = new Set([400, 401, 403, 404, 405, 406, 409, 410, 411, 413, 414, 415, 422, 426, 501, 505,]);
async function loadResourceRetry(asset) {
    let response;
    response = await loadResourceAttempt();
    if (response.ok || asset.isOptional || noRetryStatusCodes.has(response.status)) {
        return response;
    }
    if (response.status === 429) {
        // Too Many Requests
        await delay(100);
    }
    response = await loadResourceAttempt();
    if (response.ok || noRetryStatusCodes.has(response.status)) {
        return response;
    }
    await delay(100); // wait 100ms before the last retry
    response = await loadResourceAttempt();
    if (response.ok) {
        return response;
    }
    throw new Error(`Failed to load resource '${asset.name}' from '${asset.resolvedUrl}' after multiple attempts. Last HTTP status: ${response.status} ${response.statusText}`);
    async function loadResourceAttempt() {
        let response;
        try {
            response = await loadResourceThrottle(asset);
            if (!response) {
                response = {
                    ok: false,
                    status: -1,
                    statusText: "No response",
                };
            }
        }
        catch (err) {
            response = {
                ok: false,
                status: -1,
                statusText: err.message || "Exception during fetch",
            };
        }
        return response;
    }
}
// in order to prevent net::ERR_INSUFFICIENT_RESOURCES if we start downloading too many files at same time on a device with low resources
async function loadResourceThrottle(asset) {
    while (throttlingPCS) {
        await throttlingPCS.promise;
    }
    try {
        ++currentParallelDownloads;
        if (currentParallelDownloads === loaderConfig.maxParallelDownloads) {
            dotnetLogger.debug("Throttling further parallel downloads");
            throttlingPCS = createPromiseCompletionSource();
        }
        const responsePromise = loadResourceFetch(asset);
        const response = await responsePromise;
        dotnetAssert.check(response, "Bad response in loadResourceThrottle");
        asset.buffer = await response.arrayBuffer();
        return response;
    }
    finally {
        --currentParallelDownloads;
        if (throttlingPCS && currentParallelDownloads == loaderConfig.maxParallelDownloads - 1) {
            dotnetLogger.debug("Resuming more parallel downloads");
            const oldThrottlingPCS = throttlingPCS;
            throttlingPCS = undefined;
            oldThrottlingPCS.resolve();
        }
    }
}
async function loadResourceFetch(asset) {
    if (asset.buffer) {
        return {
            ok: true,
            headers: {
                length: 0,
                get: () => null
            },
            url: asset.resolvedUrl,
            arrayBuffer: () => Promise.resolve(asset.buffer),
            json: () => {
                throw new Error("NotImplementedException");
            },
            text: () => {
                throw new Error("NotImplementedException");
            }
        };
    }
    if (asset.pendingDownload) {
        return asset.pendingDownload.response;
    }
    if (typeof loadBootResourceCallback === "function") {
        const type = runtimeToBlazorAssetTypeMap[asset.behavior];
        dotnetAssert.check(type, `Unsupported asset behavior: ${asset.behavior}`);
        const customLoadResult = loadBootResourceCallback(type, asset.name, asset.resolvedUrl, asset.integrity, asset.behavior);
        if (typeof customLoadResult === "string") {
            asset.resolvedUrl = makeURLAbsoluteWithApplicationBase(customLoadResult);
        }
        else if (typeof customLoadResult === "object") {
            return customLoadResult;
        }
    }
    dotnetAssert.check(asset.resolvedUrl, "Bad asset.resolvedUrl");
    const fetchOptions = {};
    if (asset.cache) {
        // If the asset definition specifies a cache mode, use it.
        fetchOptions.cache = asset.cache;
    }
    else if (!loaderConfig.disableNoCacheFetch) {
        // Otherwise, for backwards compatibility use "no-cache" setting unless disabled by the user.
        // https://github.com/dotnet/runtime/issues/74815
        fetchOptions.cache = "no-cache";
    }
    if (asset.useCredentials) {
        // Include credentials so the server can allow download / provide user specific file
        fetchOptions.credentials = "include";
    }
    else {
        // `disableIntegrityCheck` is to give developers an easy opt-out from the integrity check
        if (!loaderConfig.disableIntegrityCheck && asset.hash) {
            // Any other resource than configuration should provide integrity check
            fetchOptions.integrity = asset.hash;
        }
    }
    return fetchLike(asset.resolvedUrl, fetchOptions);
}
function onDownloadedAsset() {
    ++downloadedAssetsCount;
    if (Module.onDownloadResourceProgress) {
        Module.onDownloadResourceProgress(downloadedAssetsCount, totalAssetsToDownload);
    }
}
function verifyAllAssetsDownloaded() {
    dotnetAssert.check(downloadedAssetsCount === totalAssetsToDownload, `Not all assets were downloaded. Downloaded ${downloadedAssetsCount} out of ${totalAssetsToDownload}`);
}
const runtimeToBlazorAssetTypeMap = {
    "resource": "assembly",
    "assembly": "assembly",
    "pdb": "pdb",
    "icu": "globalization",
    "vfs": "configuration",
    "manifest": "manifest",
    "dotnetwasm": "dotnetwasm",
    "js-module-dotnet": "dotnetjs",
    "js-module-native": "dotnetjs",
    "js-module-runtime": "dotnetjs",
    "js-module-threads": "dotnetjs"
};

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const runMainPromiseController = createPromiseCompletionSource();
// WASM-TODO: webCIL
// WASM-TODO: downloadOnly - blazor render mode auto pre-download. Really no start.
// WASM-TODO: loadAllSatelliteResources
// WASM-TODO: runtimeOptions
// WASM-TODO: debugLevel
// WASM-TODO: load symbolication json https://github.com/dotnet/runtime/issues/122647
// many things happen in parallel here, but order matters for performance!
// ideally we want to utilize network and CPU at the same time
async function createRuntime(downloadOnly) {
    if (!loaderConfig.resources || !loaderConfig.resources.coreAssembly || !loaderConfig.resources.coreAssembly.length)
        throw new Error("Invalid config, resources is not set");
    await validateWasmFeatures();
    if (typeof Module.onConfigLoaded === "function") {
        await Module.onConfigLoaded(loaderConfig);
    }
    const modulesAfterConfigLoaded = await Promise.all((loaderConfig.resources.modulesAfterConfigLoaded || []).map(loadJSModule));
    for (const afterConfigLoadedModule of modulesAfterConfigLoaded) {
        await afterConfigLoadedModule.onRuntimeConfigLoaded?.(loaderConfig);
    }
    if (loaderConfig.resources.jsModuleDiagnostics && loaderConfig.resources.jsModuleDiagnostics.length > 0) {
        const diagnosticsModule = await loadDotnetModule(loaderConfig.resources.jsModuleDiagnostics[0]);
        diagnosticsModule.dotnetInitializeModule(dotnetInternals);
    }
    const nativeModulePromise = loadDotnetModule(loaderConfig.resources.jsModuleNative[0]);
    const runtimeModulePromise = loadDotnetModule(loaderConfig.resources.jsModuleRuntime[0]);
    const wasmNativePromise = fetchWasm(loaderConfig.resources.wasmNative[0]);
    const coreAssembliesPromise = Promise.all(loaderConfig.resources.coreAssembly.map(fetchDll));
    const coreVfsPromise = Promise.all((loaderConfig.resources.coreVfs || []).map(fetchVfs));
    const assembliesPromise = Promise.all(loaderConfig.resources.assembly.map(fetchDll));
    const vfsPromise = Promise.all((loaderConfig.resources.vfs || []).map(fetchVfs));
    const icuResourceName = getIcuResourceName();
    const icuDataPromise = icuResourceName ? Promise.all((loaderConfig.resources.icu || []).filter(asset => asset.name === icuResourceName).map(fetchIcu)) : Promise.resolve([]);
    const corePDBsPromise = Promise.all((loaderConfig.resources.corePdb || []).map(fetchPdb));
    const pdbsPromise = Promise.all((loaderConfig.resources.pdb || []).map(fetchPdb));
    const modulesAfterRuntimeReadyPromise = Promise.all((loaderConfig.resources.modulesAfterRuntimeReady || []).map(loadJSModule));
    const nativeModule = await nativeModulePromise;
    const modulePromise = nativeModule.dotnetInitializeModule(dotnetInternals);
    nativeModulePromiseController.propagateFrom(modulePromise);
    const runtimeModule = await runtimeModulePromise;
    const runtimeModuleReady = runtimeModule.dotnetInitializeModule(dotnetInternals);
    await nativeModulePromiseController.promise;
    await coreAssembliesPromise;
    await coreVfsPromise;
    await vfsPromise;
    await icuDataPromise;
    await wasmNativePromise; // this is just to propagate errors
    if (!downloadOnly) {
        Module.runtimeKeepalivePush();
        initializeCoreCLR();
    }
    await assembliesPromise;
    await corePDBsPromise;
    await pdbsPromise;
    await runtimeModuleReady;
    verifyAllAssetsDownloaded();
    if (typeof Module.onDotnetReady === "function") {
        await Module.onDotnetReady();
    }
    const modulesAfterRuntimeReady = await modulesAfterRuntimeReadyPromise;
    for (const afterRuntimeReadyModule of modulesAfterRuntimeReady) {
        await afterRuntimeReadyModule.onRuntimeReady?.(loaderConfig);
    }
}
function abortStartup(reason) {
    nativeModulePromiseController.reject(reason);
}
function initializeCoreCLR() {
    dotnetAssert.check(!runtimeState.runtimeReady, "CoreCLR should be initialized just once");
    const res = dotnetBrowserHostExports.initializeCoreCLR();
    if (res != 0) {
        const reason = new Error("Failed to initialize CoreCLR");
        runMainPromiseController.reject(reason);
        exit(res, reason);
    }
    runtimeState.runtimeReady = true;
}
function resolveRunMainPromise(exitCode) {
    runMainPromiseController.resolve(exitCode);
}
function rejectRunMainPromise(reason) {
    runMainPromiseController.reject(reason);
}
function getRunMainPromise() {
    return runMainPromiseController.promise;
}
// Auto-start when in NodeJS environment as a entry script
async function selfHostNodeJS(dotnet) {
    try {
        if (isNodeHosted()) {
            await findResources(dotnet);
            await dotnet.runMainAndExit();
        }
        else if (isShellHosted()) {
            // because in V8 we can't probe directories to find assemblies
            throw new Error("Shell/V8 hosting is not supported");
        }
    }
    catch (err) {
        exit(1, err);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
let applicationArguments = [];
/* eslint-disable @typescript-eslint/no-unused-vars */
class HostBuilder {
    withConfig(config) {
        mergeLoaderConfig(config);
        return this;
    }
    withConfigSrc(_) {
        throw new Error("Not supported in this build");
    }
    withApplicationArguments(...args) {
        applicationArguments = args;
        return this;
    }
    withEnvironmentVariable(name, value) {
        mergeLoaderConfig({
            environmentVariables: {
                [name]: value
            }
        });
        return this;
    }
    withEnvironmentVariables(variables) {
        mergeLoaderConfig({
            environmentVariables: variables
        });
        return this;
    }
    withVirtualWorkingDirectory(vfsPath) {
        mergeLoaderConfig({
            virtualWorkingDirectory: vfsPath
        });
        return this;
    }
    withDiagnosticTracing(enabled) {
        mergeLoaderConfig({
            diagnosticTracing: enabled
        });
        return this;
    }
    withDebugging(level) {
        mergeLoaderConfig({
            debugLevel: level
        });
        return this;
    }
    withMainAssembly(mainAssemblyName) {
        mergeLoaderConfig({
            mainAssemblyName: mainAssemblyName
        });
        return this;
    }
    withApplicationArgumentsFromQuery() {
        if (!globalThis.window) {
            throw new Error("Missing window to the query parameters from");
        }
        if (typeof globalThis.URLSearchParams === "undefined") {
            throw new Error("URLSearchParams is supported");
        }
        const params = new URLSearchParams(globalThis.window.location.search);
        const values = params.getAll("arg");
        return this.withApplicationArguments(...values);
    }
    withApplicationEnvironment(applicationEnvironment) {
        mergeLoaderConfig({
            applicationEnvironment: applicationEnvironment
        });
        return this;
    }
    withApplicationCulture(applicationCulture) {
        mergeLoaderConfig({
            applicationCulture: applicationCulture
        });
        return this;
    }
    withResourceLoader(loadBootResource) {
        setLoadBootResourceCallback(loadBootResource);
        return this;
    }
    // internal
    withModuleConfig(moduleConfig) {
        Object.assign(Module, moduleConfig);
        return this;
    }
    async download() {
        try {
            validateLoaderConfig();
            return createRuntime(true);
        }
        catch (err) {
            exit(1, err);
            throw err;
        }
    }
    async create() {
        try {
            validateLoaderConfig();
            await createRuntime(false);
            this.dotnetApi = dotnetApi;
            return this.dotnetApi;
        }
        catch (err) {
            exit(1, err);
            throw err;
        }
    }
    /**
     * @deprecated use runMain() or runMainAndExit() instead.
     */
    run() {
        return this.runMain();
    }
    async runMain() {
        try {
            if (!this.dotnetApi) {
                await this.create();
            }
            validateLoaderConfig();
            return this.dotnetApi.runMain(loaderConfig.mainAssemblyName, applicationArguments);
        }
        catch (err) {
            exit(1, err);
            throw err;
        }
    }
    async runMainAndExit() {
        try {
            if (!this.dotnetApi) {
                await this.create();
            }
            validateLoaderConfig();
            return this.dotnetApi.runMainAndExit(loaderConfig.mainAssemblyName, applicationArguments);
        }
        catch (err) {
            exit(1, err);
            throw err;
        }
    }
}

var ProductVersion = "11.0.0";

var BuildConfiguration = "Release";

var GitHash = "4e8a3a79d90f3b8e7600ee6315bd2b858c4f9128";

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function invokeLibraryInitializers(functionName, args) {
    // functionName: "onRuntimeReady", "onRuntimeConfigLoaded"
    throw new Error("Not implemented");
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function check(condition, message) {
    if (!condition) {
        throw new Error(`dotnetAssert failed: ${message}`);
    }
}
// calls to fastCheck will be inlined by rollup
// so that the string formatting or allocation of a closure would only happen in failure cases
// this is important for performance sensitive code paths
function fastCheck(condition, messageFactory) {
    if (!condition) {
        const message = messageFactory();
        throw new Error(`dotnetAssert failed: ${message}`);
    }
}
/* eslint-disable no-console */
const prefix = "DOTNET: ";
function debug(msg, ...data) {
    if (!loaderConfig.diagnosticTracing) {
        return;
    }
    if (typeof msg === "function") {
        msg = msg();
    }
    console.debug(prefix + msg, ...data);
}
function info(msg, ...data) {
    console.info(prefix + msg, ...data);
}
function warn(msg, ...data) {
    console.warn(prefix + msg, ...data);
}
function error(msg, ...data) {
    if (data && data.length > 0 && data[0] && typeof data[0] === "object") {
        // don't log silent errors
        if (data[0].silent) {
            return;
        }
        if (data[0].toString) {
            console.error(prefix + msg, data[0].toString());
            return;
        }
    }
    console.error(prefix + msg, ...data);
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function dotnetInitializeModule() {
    const dotnetApi = {
        INTERNAL: {},
        Module: {},
        runtimeId: undefined,
        runtimeBuildInfo: {
            productVersion: ProductVersion,
            gitHash: GitHash,
            buildConfiguration: BuildConfiguration,
            wasmEnableThreads: false,
            wasmEnableSIMD: true,
            wasmEnableExceptionHandling: true,
        },
        getConfig: getLoaderConfig,
        exit,
        invokeLibraryInitializers,
    };
    const internals = [
        dotnetApi, //0
        [], //1
        loaderConfig, //2
        undefined, //3
        undefined, //4
        undefined, //5
        undefined, //6
        undefined, //7
        undefined, //8
        undefined,
    ];
    const loaderFunctions = {
        getRunMainPromise,
        rejectRunMainPromise,
        resolveRunMainPromise,
        createPromiseCompletionSource,
        isControllablePromise,
        getPromiseCompletionSource,
        isExited,
        isRuntimeRunning,
        addOnExitListener,
        abortStartup,
        quitNow,
    };
    Object.assign(dotnetLoaderExports, loaderFunctions);
    const logger = {
        debug,
        info,
        warn,
        error,
    };
    Object.assign(dotnetLogger, logger);
    const assert = {
        check,
        fastCheck,
    };
    Object.assign(dotnetAssert, assert);
    // emscripten extension point
    const localModule = {
        instantiateWasm,
    };
    Object.assign(dotnetApi.Module, localModule);
    internals[3 /* InternalExchangeIndex.LoaderExportsTable */] = loaderExportsToTable(dotnetLogger, dotnetAssert, dotnetLoaderExports);
    dotnetUpdateInternals(internals, dotnetUpdateInternalsSubscriber);
    registerExit();
    function loaderExportsToTable(logger, assert, dotnetLoaderExports) {
        // keep in sync with loaderExportsFromTable()
        return [
            logger.debug,
            logger.info,
            logger.warn,
            logger.error,
            assert.check,
            assert.fastCheck,
            dotnetLoaderExports.resolveRunMainPromise,
            dotnetLoaderExports.rejectRunMainPromise,
            dotnetLoaderExports.getRunMainPromise,
            dotnetLoaderExports.createPromiseCompletionSource,
            dotnetLoaderExports.isControllablePromise,
            dotnetLoaderExports.getPromiseCompletionSource,
            dotnetLoaderExports.isExited,
            dotnetLoaderExports.isRuntimeRunning,
            dotnetLoaderExports.addOnExitListener,
            dotnetLoaderExports.abortStartup,
            dotnetLoaderExports.quitNow,
        ];
    }
    return dotnetApi;
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
initPolyfills();
dotnetInitializeModule();
await initPolyfillsAsync();
const dotnet = new HostBuilder();
dotnet.withConfig(/*json-start*/{
  "mainAssemblyName": "StandaloneApp",
  "resources": {
    "hash": "sha256-TzdKIagAcY4nxidCqVv1og84Sr9I+IBmKrKHFVHD/20=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.m504vhcv1d.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.1c24im56p0.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.wn445etm8n.wasm",
        "integrity": "sha256-ZKKVhy/+kH6U+T/zf2cZ+yxH6pRN6H3fI57DJAkIagg="
      }
    ],
    "coreAssembly": [
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.yo5qnr21k6.dll",
        "integrity": "sha256-UsK3dyNEeHgKTT2dRT+1unQABl3MIwE2AJBzdNgX6VM="
      },
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.i2zanj124j.dll",
        "integrity": "sha256-CgOLgGoS4NIyI+RPVrO2vzjI5ex92cp5d9j6/SQswiM="
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.15icuhndmz.dll",
        "integrity": "sha256-1ViEA1iIOik3FIOEmiLF/VghTn2LV6n6z9Lh/s1O/PU="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.n41ziwb9cr.dll",
        "integrity": "sha256-d7KI0VVaGXd/WRZdiReMB1kbsCwcP/lAESLXR105F+w="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.7m4fyxejoz.dll",
        "integrity": "sha256-4RQ5YMJx+tapleVsi7USZ3omyNt3ZTFxHeuxyshAW5k="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.lmz31cb98y.dll",
        "integrity": "sha256-HRji+WdYh2c/4dBXnC7pvVLdb0n6AX/2ppiKl8uLW8k="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.dll",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.6vx5i04pdm.dll",
        "integrity": "sha256-sgyH8BghVwdSrc6HGQvqQXUsxeoxMjyZ4ids0bFEZbk="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.cxql45qbmu.dll",
        "integrity": "sha256-kJMtcaJ0cTpfS4pHdhrQXLohzNrskB+AK5d5TsLFueI="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.ivf02qxcqa.dll",
        "integrity": "sha256-orXpmXuQHTODEMIP0t/b2bm8KYZC4T1sajLLyEw1ErA="
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.vpg14i8ras.dll",
        "integrity": "sha256-HalF1/x0BeTVOSypamq8ZKuN1qKp3d0cSu4S/P83ZEw="
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.e49h5199xa.dll",
        "integrity": "sha256-kh6YrPyx+ZvovVIvRQYWg4tGfXin7UjI9+SnMss62+A="
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.dll",
        "name": "Microsoft.Extensions.Hosting.Abstractions.11oy2w35re.dll",
        "integrity": "sha256-2x8Yxn67v/frQkufezEZTif8XwyaAdt7qZtMz5aKmAE="
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.gptig2qv7m.dll",
        "integrity": "sha256-5B6Nxaz72+dNBqPPjBmrAOqBY8CJguJyEXAgllAxVZk="
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.e7u7zvabyi.dll",
        "integrity": "sha256-ViwyZalg6KCxn1m+NwfSk0F+74lJkfenLZ6rnAKX7Hs="
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.swm3k6wwgh.dll",
        "integrity": "sha256-vAKxnQ20ohhSNzGtpVkw9oqXLZh00gp1tg5ml5c7uZk="
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.li21w5wqqi.dll",
        "integrity": "sha256-/ZbA2FJ8+51pkvzDdGcfKUhHnNzHGlHjjc0HlPHGqHk="
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.86abg47t38.dll",
        "integrity": "sha256-QFhWprD0eec+wvnaSGXij5xv0ZLYPFXTu5qrvjBeHW8="
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.9e7mktpyhu.dll",
        "integrity": "sha256-D/nUlNtWrnSlO7k/JnWAxsGfQQ9C+EIIwaF3Vf3L/YI="
      },
      {
        "virtualPath": "StandaloneApp.dll",
        "name": "StandaloneApp.kn8n52x8kq.dll",
        "integrity": "sha256-cPeqR6seJk7ALUsKAgMbBanZTW3iWE8jFYm5TQP31pc="
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.yypwqenv6n.dll",
        "integrity": "sha256-es3sb3ABnE4qFvZpGe6yk+GeedMAG3z9mQTuLjjcQrY="
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.j5i1rdi7h3.dll",
        "integrity": "sha256-J0G/v6fIH2VsZ//qQBR+1Uly9kmiK2RPNMkVn5saiDA="
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.fn8m6sjwk5.dll",
        "integrity": "sha256-tUTeY13M5TOKrkHqV3rj3uFbeNdmqMFQzLQ/iOaofWU="
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.7l18ku2oe8.dll",
        "integrity": "sha256-C6bHJccfqeIftE14HVESskkotDI1nkbL+lxJy3EFYac="
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.wt8cllt2va.dll",
        "integrity": "sha256-tLBqGKt5eCFwj/C6bLTQzIWmvSPzjAP2kypQNidaHWA="
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.dr5ms7lkh6.dll",
        "integrity": "sha256-V9GVZibZFw+Q0FuiFUf7D//EdWpZpE8v4b3fec8TqqA="
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.nz8papl4uj.dll",
        "integrity": "sha256-w5dLArB3TWlilUAdlHoMgE3Ohsy59f7HWmwFK+bkDes="
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.w1q40v39qg.dll",
        "integrity": "sha256-5KhUBYTmyG5Itfnebi0ByjilWgk8TMHItK2w6ewpA84="
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.lbfwsffypb.dll",
        "integrity": "sha256-kb1fLu2WEH492F8h0+MHuwuQtwh3eiUAHYAJCP6CDUU="
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.fmrgr463u2.dll",
        "integrity": "sha256-15rV/T5/wRAPcSMR/BbSYD2pdRN2Qzai3Wr0rTyhe8s="
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.c5y0ukow41.dll",
        "integrity": "sha256-4NpPAZh3BisNykH4S85ZfBeVKjsBZMix+yAXZ8MnYA4="
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.oxkb18shrk.dll",
        "integrity": "sha256-RACGi7wPtTuE/DanBm5xvFnaoNyVapf1osXvAy+xLsM="
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.ugpkvh6kxq.dll",
        "integrity": "sha256-7oBeJpb5Rd09wdgF8QFrAI7B+BpEmVNxUnOxSgU0yOc="
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.g5rc3sux83.dll",
        "integrity": "sha256-dAce6VRtT/cXXllnqPERBOikPI7yYhrs/mADG1S0FGo="
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.ka5wly2ym9.dll",
        "integrity": "sha256-zH+3CzFSDCgpvqdHabdgQkv28+Qo1UqQOdCF1toGBgc="
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.p8ct61r1h4.dll",
        "integrity": "sha256-x8IAQfo8zpHnn5qFQRBxoxWPSVlbv0fKjM12vjiSbRU="
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.05cdbumbov.dll",
        "integrity": "sha256-TD7x7/owJviGj4G4BCQSonKL9BVSjSEtI1wYdW4pBBA="
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.6ggb63i5fg.dll",
        "integrity": "sha256-+sUoaJr+CF+la3gDkypF9YGtJJ+PyowbsofXLgG/XKQ="
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.pn1dd6ohqr.dll",
        "integrity": "sha256-pQ7YYTwYyg5YtSioF02Mm8FdqwE97kYe74MpYTZbgFc="
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.lka1mlkb4w.dll",
        "integrity": "sha256-xTXCktwlmd8xHddxgG814NoWZGQ5BnqZf6XwJyVqDgM="
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.rbftweprwe.dll",
        "integrity": "sha256-KaXgp0zqIvqjV+RSEsosCIN3HYWSuAuP572s6XwqEdQ="
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.mph2f2zym5.dll",
        "integrity": "sha256-1tK6StC8smnR/y1x9xeMokpg0icjXdyTbtWQNisWSLk="
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.a7txsmrnx0.dll",
        "integrity": "sha256-FjYf2NRzPx110B3L1+97atQW+ZZRK+OumsKuKrisZBI="
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
}/*json-end*/);
// Auto-start when in Node.js or Shell environment
selfHostNodeJS(dotnet).catch();

export { dotnet, exit };
//# sourceMappingURL=dotnet.js.map
