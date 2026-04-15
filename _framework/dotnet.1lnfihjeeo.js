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
            abortInteropTimers: table[7],
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
            normalizeException: table[17],
            fetchSatelliteAssemblies: table[18],
            fetchLazyAssembly: table[19],
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
            instantiateWasm: table[5],
            instantiateWebcilModule: table[6],
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
        const interopLocal = {
            getWasmMemory: table[0],
            getWasmTable: table[1],
        };
        Object.assign(interop, interopLocal);
    }
    // keep in sync with nativeBrowserExportsToTable()
    function diagnosticsExportsFromTable(table, interop) {
        const interopLocal = {
            symbolicateStackTrace: table[0],
            installNativeSymbols: table[1],
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
            stringToUTF8: table[4],
            utf8ToStringRelaxed: table[5],
            zeroRegion: table[6],
            isSharedArrayBuffer: table[7],
            viewOrCopy: table[8],
            abortBackgroundTimers: table[9],
            abortPosix: table[10],
            getExitStatus: table[11],
            runBackgroundTimers: table[12],
        };
        Object.assign(interop, interopLocal);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const globalThisAny = globalThis;
const ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
const ENVIRONMENT_IS_WEB_WORKER = typeof importScripts === "function";
const ENVIRONMENT_IS_SIDECAR = ENVIRONMENT_IS_WEB_WORKER && typeof globalThisAny.dotnetSidecar !== "undefined"; // sidecar is emscripten main running in a web worker
const ENVIRONMENT_IS_WORKER = ENVIRONMENT_IS_WEB_WORKER && !ENVIRONMENT_IS_SIDECAR; // we redefine what ENVIRONMENT_IS_WORKER, we replace it in emscripten internals, so that sidecar works
const ENVIRONMENT_IS_WEB = typeof window === "object" || (ENVIRONMENT_IS_WEB_WORKER && !ENVIRONMENT_IS_NODE);
const ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE;
const VoidPtrNull = 0;
const CharPtrNull = 0;
const NativePointerNull = 0;
const browserVirtualAppBase = "/"; // keep in sync other places that define browserVirtualAppBase
const sizeOfPtr = 4;

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
    source.runtimeConfig.runtimeOptions.configProperties = { ...target.runtimeConfig.runtimeOptions.configProperties, ...source.runtimeConfig.runtimeOptions.configProperties };
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
    for (const key in target.satelliteResources) {
        if (!Object.prototype.hasOwnProperty.call(source.satelliteResources, key)) {
            source.satelliteResources[key] = target.satelliteResources[key] || [];
        }
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
        target.virtualWorkingDirectory = browserVirtualAppBase;
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
    if (!target.runtimeConfig) {
        target.runtimeConfig = { runtimeOptions: { configProperties: {} }, };
    }
    else if (!target.runtimeConfig.runtimeOptions) {
        target.runtimeConfig.runtimeOptions = { configProperties: {} };
    }
    else if (!target.runtimeConfig.runtimeOptions.configProperties) {
        target.runtimeConfig.runtimeOptions.configProperties = {};
    }
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

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const runtimeState = {
    creatingRuntime: false,
    nativeReady: false,
    dotnetReady: false,
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
    return runtimeState.dotnetReady && !isExited();
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
            if (dotnetRuntimeExports && dotnetRuntimeExports.abortInteropTimers) {
                dotnetRuntimeExports.abortInteropTimers();
            }
            if (dotnetBrowserUtilsExports && dotnetBrowserUtilsExports.abortBackgroundTimers) {
                dotnetBrowserUtilsExports.abortBackgroundTimers();
            }
            unregisterExit();
            if (!alreadySilent) {
                if (runtimeState.onExitListeners.length === 0 && !runtimeState.dotnetReady) {
                    dotnetLogger.error("Exiting during runtime startup: ", message);
                    dotnetLogger.debug(() => stack);
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
            if (runtimeState.creatingRuntime) {
                dotnetLogger.info(`Aborting startup, reason: ${reason}`);
                dotnetLoaderExports.abortStartup(reason);
            }
        }
        catch (err) {
            dotnetLogger.warn("dotnet.js exit() failed: ", err);
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
    if (runtimeState.dotnetReady) {
        Module.runtimeKeepalivePop();
        if (dotnetBrowserUtilsExports && dotnetBrowserUtilsExports.abortPosix) {
            dotnetBrowserUtilsExports.abortPosix(exitCode, reason, runtimeState.dotnetReady);
        }
    }
    if (exitCode !== 0 || !ENVIRONMENT_IS_WEB) {
        if (ENVIRONMENT_IS_SHELL && typeof globalThisAny.quit === "function") {
            globalThisAny.quit(exitCode);
        }
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

const bigInt=()=>(async e=>{try{return (await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0))===BigInt(0)}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11])),bulkMemory=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),exceptionsFinal=()=>(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABBAFgAAADAgEAChABDgACaR9AAQMAAAsACxoL"),(e=>e.codePointAt(0)))),!0}catch(e){return !1}})(),extendedConst=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0])),gc=()=>(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))(),jsStringBuiltins=()=>(async()=>{try{return await WebAssembly.instantiate(Uint8Array.from(atob("AGFzbQEAAAABBgFgAW8BfwIXAQ53YXNtOmpzLXN0cmluZwR0ZXN0AAA="),(e=>e.codePointAt(0))),{},{builtins:["js-string"]}),!0}catch(e){return !1}})(),jspi=()=>(async()=>"Suspending"in WebAssembly)(),memory64=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,5,3,1,4,1])),multiMemory=()=>(async()=>{try{return new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,5,5,2,0,0,0,0])),!0}catch(e){return !1}})(),multiValue=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11])),mutableGlobals=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1])),referenceTypes=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),relaxedSimd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),saturatedFloatToInt=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),signExtensions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),simd=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),streamingCompilation=()=>(async()=>"compileStreaming"in WebAssembly)(),tailCall=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11])),threads=()=>(async e=>{try{return "undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])),typeReflection=()=>(async()=>"Function"in WebAssembly)(),typedFunctionReferences=()=>(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABEANgAX8Bf2ABZAABf2AAAX8DBAMBAAIJBQEDAAEBChwDCwBBCkEqIAAUAGoLBwAgAEEBagsGANIBEAAL"),(e=>e.codePointAt(0)))),!0}catch(e){return !1}})();

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const scriptUrlQuery = /*! webpackIgnore: true */ import.meta.url;
const queryIndex = scriptUrlQuery.indexOf("?");
const modulesUniqueQuery = queryIndex > 0 ? scriptUrlQuery.substring(queryIndex) : "";
const scriptUrl = normalizeFileUrl(scriptUrlQuery);
const scriptDirectory = normalizeDirectoryUrl(scriptUrl);
async function validateEngineFeatures() {
    dotnetAssert.check(await exceptions(), "This browser/engine doesn't support WASM exception handling. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms");
    dotnetAssert.check(await simd(), "This browser/engine doesn't support WASM SIMD. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms");
    if (ENVIRONMENT_IS_NODE) {
        const nodeMajorVersion = parseInt(globalThisAny.process.versions.node.split(".")[0], 10);
        dotnetAssert.check(nodeMajorVersion >= 18, `Node.js version ${globalThisAny.process.versions.node} is not supported. Please use Node.js 18 or later.`);
    }
    else if (ENVIRONMENT_IS_SHELL) {
        if (typeof globalThisAny.version === "function" && globalThisAny.d8) {
            const v8v = globalThisAny.version();
            const v8MajorVersion = parseInt(v8v.split(".")[0], 10);
            dotnetAssert.check(v8MajorVersion >= 14, "This V8 shell is too old. Please use a modern version.");
        }
    }
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

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
let hasFetch = false;
async function initPolyfills() {
    if (ENVIRONMENT_IS_NODE) {
        await nodeFs();
        await nodeUrl();
    }
    hasFetch = typeof (globalThis.fetch) === "function";
    if (!hasFetch) {
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
async function fetchLike(url, init, expectedContentType) {
    try {
        if (ENVIRONMENT_IS_NODE) {
            const isFileUrl = url.startsWith("file://");
            if (!isFileUrl && hasFetch) {
                return globalThis.fetch(url, init || { credentials: "same-origin" });
            }
            if (isFileUrl) {
                url = _nodeUrl.fileURLToPath(url);
            }
            const arrayBuffer = await _nodeFs.promises.readFile(url);
            return responseLike(url, arrayBuffer, {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Length": arrayBuffer.byteLength.toString(),
                    "Content-Type": expectedContentType || "application/octet-stream"
                }
            });
        }
        else if (hasFetch) {
            return globalThis.fetch(url, init || { credentials: "same-origin" });
        }
        else if (typeof (read) === "function") {
            const isText = expectedContentType && (expectedContentType.startsWith("application/json") || expectedContentType.startsWith("text/plain"));
            const arrayBuffer = read(url, isText ? "utf8" : "binary");
            return responseLike(url, arrayBuffer, {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Length": isText ? arrayBuffer.length : arrayBuffer.byteLength.toString(),
                    "Content-Type": expectedContentType || "application/octet-stream"
                }
            });
        }
    }
    catch (e) {
        return responseLike(url, null, {
            status: 500,
            statusText: "ERR28: " + e,
            headers: {},
        });
    }
    throw new Error("No fetch implementation available");
}
function responseLike(url, body, options) {
    if (typeof globalThis.Response === "function") {
        const response = new Response(body, options);
        // Best-effort alignment with the fallback object shape:
        // only define `url` if it does not already exist on the response.
        if (typeof response.url === "undefined") {
            try {
                Object.defineProperty(response, "url", { value: url });
            }
            catch {
                // Ignore if the implementation does not allow redefining `url`
            }
        }
        return response;
    }
    return {
        ok: body !== null && options.status === 200,
        headers: {
            ...options.headers,
            get: (name) => options.headers[name] || null
        },
        url,
        arrayBuffer: () => {
            dotnetAssert.check(body !== null && body instanceof ArrayBuffer, "Response body is not a ArrayBuffer.");
            return Promise.resolve(body);
        },
        json: () => {
            dotnetAssert.check(body !== null && typeof body === "string", "Response body is not a string.");
            return Promise.resolve(JSON.parse(body));
        },
        text: () => {
            if (typeof body !== "string" && typeof globalThis.TextDecoder !== "undefined") {
                const decoder = new globalThis.TextDecoder("utf-8");
                return Promise.resolve(decoder.decode(body || new Uint8Array()));
            }
            dotnetAssert.check(body !== null && typeof body === "string", "Response body is not a string.");
            return Promise.resolve(body);
        }
    };
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
let throttlingPCS;
let currentParallelDownloads = 0;
let downloadedAssetsCount = 0;
let totalAssetsToDownload = 0;
let loadBootResourceCallback = undefined;
const loadedLazyAssemblies = new Set();
let mainWasmAsset = null;
function setLoadBootResourceCallback(callback) {
    loadBootResourceCallback = callback;
}
let wasmBinaryPromise = undefined;
const wasmMemoryPromiseController = createPromiseCompletionSource();
const nativeModulePromiseController = createPromiseCompletionSource(() => {
    dotnetUpdateInternals(dotnetInternals);
});
async function loadDotnetModule(asset) {
    return loadJSModule(asset);
}
async function loadJSModule(asset) {
    const assetInternal = asset;
    let mod = asset.moduleExports;
    totalAssetsToDownload++;
    if (!mod) {
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name, true);
        }
        assetInternal.behavior = "js-module-dotnet";
        if (typeof loadBootResourceCallback === "function") {
            const blazorType = behaviorToBlazorAssetTypeMap[assetInternal.behavior];
            dotnetAssert.check(blazorType, `Unsupported asset behavior: ${assetInternal.behavior}`);
            const customLoadResult = loadBootResourceCallback(blazorType, assetInternal.name, asset.resolvedUrl, assetInternal.integrity, assetInternal.behavior);
            dotnetAssert.check(typeof customLoadResult === "string", "loadBootResourceCallback for JS modules must return string URL");
            asset.resolvedUrl = makeURLAbsoluteWithApplicationBase(customLoadResult);
        }
        if (!asset.resolvedUrl)
            throw new Error("Invalid config, resources is not set");
        mod = await import(/* webpackIgnore: true */ asset.resolvedUrl);
    }
    onDownloadedAsset(assetInternal);
    return mod;
}
async function callLibraryInitializerOnRuntimeConfigLoaded(asset) {
    const module = await loadJSModule(asset);
    const name = asset.name || asset.resolvedUrl || "unknown";
    try {
        if (typeof module.onRuntimeConfigLoaded === "function") {
            await module.onRuntimeConfigLoaded(loaderConfig);
        }
        else if (typeof module.onRuntimeReady !== "function") {
            dotnetLogger.warn(`Module '${name}' does not export 'onRuntimeConfigLoaded' function. Make sure the module initializer is correctly defined and exported.`);
        }
        return module;
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Failed to invoke 'onRuntimeConfigLoaded' on library initializer '${name}': ${message}`, { cause: err });
    }
}
async function callLibraryInitializerOnRuntimeReady([asset, modulePromise]) {
    const module = await modulePromise;
    const name = asset.name || asset.resolvedUrl || "unknown";
    try {
        if (typeof module.onRuntimeReady === "function") {
            await module.onRuntimeReady(dotnetApi);
        }
        else if (typeof module.onRuntimeConfigLoaded !== "function") {
            dotnetLogger.warn(`Module '${name}' does not export 'onRuntimeReady' function. Make sure the module initializer is correctly defined and exported.`);
        }
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        throw new Error(`Failed to invoke 'onRuntimeReady' on library initializer '${name}': ${message}`, { cause: err });
    }
}
function fetchMainWasm(asset) {
    totalAssetsToDownload++;
    const assetInternal = asset;
    if (assetInternal.name && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetInternal.name);
    }
    assetInternal.behavior = "dotnetwasm";
    if (!asset.resolvedUrl)
        throw new Error("Invalid config, resources is not set");
    mainWasmAsset = asset;
    wasmBinaryPromise = loadResource(assetInternal);
    return wasmBinaryPromise;
}
async function instantiateMainWasm(imports, successCallback) {
    const assetInternal = mainWasmAsset;
    mainWasmAsset = null;
    let instance;
    let module;
    try {
        const result = await dotnetBrowserHostExports.instantiateWasm(wasmBinaryPromise, imports);
        instance = result.instance;
        module = result.module;
    }
    catch (err) {
        dotnetApi.exit(1, err);
        throw err;
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    successCallback(instance, module);
    const memory = dotnetNativeBrowserExports.getWasmMemory();
    wasmMemoryPromiseController.resolve(memory);
}
async function fetchIcu(asset) {
    const assetInternal = asset;
    let bytes;
    try {
        totalAssetsToDownload++;
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name);
        }
        assetInternal.behavior = "icu";
        bytes = await fetchBytes(assetInternal);
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    if (bytes) {
        await nativeModulePromiseController.promise;
        dotnetBrowserHostExports.loadIcuData(bytes);
    }
}
async function fetchAssembly(asset) {
    const assetInternal = asset;
    totalAssetsToDownload++;
    dotnetAssert.check(assetInternal.virtualPath, "Assembly asset must have virtualPath");
    const assetNameForUrl = assetInternal.culture
        ? `${assetInternal.culture}/${assetInternal.name}`
        : assetInternal.name;
    if (assetNameForUrl && !asset.resolvedUrl) {
        asset.resolvedUrl = locateFile(assetNameForUrl);
    }
    const isWebcilInWasm = assetInternal.virtualPath?.endsWith(".wasm") ?? false;
    normalizeVirtualPath(assetInternal);
    if (isWebcilInWasm) {
        await fetchWebcil(assetInternal);
    }
    else {
        await fetchDll(assetInternal);
    }
}
async function fetchWebcil(assetInternal) {
    try {
        assetInternal.behavior = "webcil";
        const webcilPromise = loadResource(assetInternal);
        const memory = await wasmMemoryPromiseController.promise;
        const instancePromise = dotnetBrowserHostExports.instantiateWebcilModule(webcilPromise, memory, assetInternal.virtualPath);
        await instancePromise;
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
}
async function fetchDll(assetInternal) {
    const virtualPath = assetInternal.virtualPath;
    assetInternal.behavior = "assembly";
    let bytes;
    try {
        bytes = await fetchBytes(assetInternal);
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    await nativeModulePromiseController.promise;
    if (bytes) {
        dotnetBrowserHostExports.registerDllBytes(bytes, virtualPath, assetInternal.shortName);
    }
}
async function fetchPdb(asset) {
    const assetInternal = asset;
    let bytes;
    try {
        totalAssetsToDownload++;
        dotnetAssert.check(assetInternal.virtualPath, "PDB asset must have virtualPath");
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name);
        }
        assetInternal.behavior = "pdb";
        assetInternal.isOptional = assetInternal.isOptional || loaderConfig.ignorePdbLoadErrors;
        normalizeVirtualPath(assetInternal);
        bytes = await fetchBytes(assetInternal);
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    if (bytes) {
        await nativeModulePromiseController.promise;
        dotnetBrowserHostExports.registerPdbBytes(bytes, assetInternal.virtualPath);
    }
}
async function fetchVfs(asset) {
    const assetInternal = asset;
    let bytes;
    try {
        totalAssetsToDownload++;
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name);
        }
        assetInternal.behavior = "vfs";
        bytes = await fetchBytes(assetInternal);
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    if (bytes) {
        await nativeModulePromiseController.promise;
        dotnetBrowserHostExports.installVfsFile(bytes, asset);
    }
}
async function fetchSatelliteAssemblies(culturesToLoad) {
    const satelliteResources = loaderConfig.resources?.satelliteResources;
    if (!satelliteResources) {
        return;
    }
    const promises = [];
    for (const culture of culturesToLoad) {
        if (!Object.prototype.hasOwnProperty.call(satelliteResources, culture)) {
            continue;
        }
        for (const asset of satelliteResources[culture]) {
            const assetInternal = asset;
            assetInternal.culture = culture;
            promises.push(fetchAssembly(asset));
        }
    }
    await Promise.all(promises);
}
async function fetchLazyAssembly(assemblyNameToLoad) {
    const lazyAssemblies = loaderConfig.resources?.lazyAssembly;
    if (!lazyAssemblies) {
        throw new Error("No assemblies have been marked as lazy-loadable. Use the 'BlazorWebAssemblyLazyLoad' item group in your project file to enable lazy loading an assembly.");
    }
    let assemblyNameWithoutExtension = assemblyNameToLoad;
    if (assemblyNameToLoad.endsWith(".dll"))
        assemblyNameWithoutExtension = assemblyNameToLoad.substring(0, assemblyNameToLoad.length - 4);
    else if (assemblyNameToLoad.endsWith(".wasm"))
        assemblyNameWithoutExtension = assemblyNameToLoad.substring(0, assemblyNameToLoad.length - 5);
    const assemblyNameToLoadDll = assemblyNameWithoutExtension + ".dll";
    const assemblyNameToLoadWasm = assemblyNameWithoutExtension + ".wasm";
    let dllAsset = null;
    for (const asset of lazyAssemblies) {
        if (asset.virtualPath === assemblyNameToLoadDll || asset.virtualPath === assemblyNameToLoadWasm) {
            dllAsset = asset;
            break;
        }
    }
    if (!dllAsset) {
        throw new Error(`${assemblyNameToLoad} must be marked with 'BlazorWebAssemblyLazyLoad' item group in your project file to allow lazy-loading.`);
    }
    if (loadedLazyAssemblies.has(dllAsset.virtualPath)) {
        return false;
    }
    await fetchAssembly(dllAsset);
    loadedLazyAssemblies.add(dllAsset.virtualPath);
    if (loaderConfig.debugLevel !== 0) {
        const pdbNameToLoad = assemblyNameWithoutExtension + ".pdb";
        const pdbAssets = loaderConfig.resources?.pdb;
        let pdbAssetToLoad;
        if (pdbAssets) {
            for (const pdbAsset of pdbAssets) {
                if (pdbAsset.virtualPath === pdbNameToLoad) {
                    pdbAssetToLoad = pdbAsset;
                    break;
                }
            }
        }
        if (!pdbAssetToLoad) {
            for (const lazyAsset of lazyAssemblies) {
                if (lazyAsset.virtualPath === pdbNameToLoad) {
                    pdbAssetToLoad = lazyAsset;
                    break;
                }
            }
        }
        if (pdbAssetToLoad) {
            await fetchPdb(pdbAssetToLoad);
        }
    }
    return true;
}
async function fetchNativeSymbols(asset) {
    const assetInternal = asset;
    let tableText;
    try {
        totalAssetsToDownload++;
        if (assetInternal.name && !asset.resolvedUrl) {
            asset.resolvedUrl = locateFile(assetInternal.name);
        }
        assetInternal.behavior = "symbols";
        assetInternal.isOptional = assetInternal.isOptional || loaderConfig.ignorePdbLoadErrors;
        tableText = await fetchText(assetInternal);
    }
    finally {
        onDownloadedAsset(assetInternal);
    }
    dotnetDiagnosticsExports.installNativeSymbols(tableText || "");
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
async function fetchText(asset) {
    dotnetAssert.check(asset && asset.resolvedUrl, "Bad asset.resolvedUrl");
    const response = await loadResource(asset);
    if (!response.ok) {
        if (asset.isOptional) {
            dotnetLogger.warn(`Optional resource '${asset.name}' failed to load from '${asset.resolvedUrl}'. HTTP status: ${response.status} ${response.statusText}`);
            return null;
        }
        throw new Error(`Failed to load resource '${asset.name}' from '${asset.resolvedUrl}'. HTTP status: ${response.status} ${response.statusText}`);
    }
    return response.text();
}
function loadResource(asset) {
    if (ENVIRONMENT_IS_SHELL || ENVIRONMENT_IS_NODE || asset.resolvedUrl && asset.resolvedUrl.indexOf("file://") !== -1) {
        // no need to retry or throttle local file access
        return loadResourceFetch(asset);
    }
    if (!loaderConfig.enableDownloadRetry || noRetry[asset.behavior]) {
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
                response = responseLike(asset.resolvedUrl, null, {
                    status: 404,
                    statusText: "No response",
                });
            }
        }
        catch (err) {
            response = responseLike(asset.resolvedUrl, null, {
                status: 500,
                statusText: err.message || "Exception during fetch",
            });
        }
        return response;
    }
}
// in order to prevent net::ERR_INSUFFICIENT_RESOURCES if we start downloading too many files at same time on a device with low resources
// also when downloading in background
async function loadResourceThrottle(asset) {
    while (throttlingPCS && !asset.priority) {
        await throttlingPCS.promise;
    }
    try {
        startThrottling(asset);
        const responsePromise = loadResourceFetch(asset);
        const response = await responsePromise;
        dotnetAssert.check(response, "Bad response in loadResourceThrottle");
        if (!noBuffer[asset.behavior]) {
            asset.buffer = await response.arrayBuffer();
        }
        if (!leaveAfterInstantiation[asset.behavior]) {
            finishThrottling(asset);
        }
        return response;
    }
    catch (err) {
        finishThrottling(asset);
        throw err;
    }
}
function startThrottling(asset) {
    asset.inprogress = true;
    ++currentParallelDownloads;
    if (currentParallelDownloads === loaderConfig.maxParallelDownloads) {
        dotnetLogger.debug("Throttling further parallel downloads");
        throttlingPCS = createPromiseCompletionSource();
    }
}
function finishThrottling(asset) {
    dotnetAssert.check(asset.inprogress, "Asset is not in progress in finishThrottling");
    asset.inprogress = false;
    --currentParallelDownloads;
    if (throttlingPCS && currentParallelDownloads == loaderConfig.maxParallelDownloads - 1) {
        dotnetLogger.debug("Resuming more parallel downloads");
        const oldThrottlingPCS = throttlingPCS;
        throttlingPCS = undefined;
        oldThrottlingPCS.resolve();
    }
}
async function loadResourceFetch(asset) {
    const expectedContentType = behaviorToContentTypeMap[asset.behavior];
    dotnetAssert.check(expectedContentType, `Unsupported asset behavior: ${asset.behavior}`);
    if (asset.buffer) {
        const arrayBuffer = await asset.buffer;
        return responseLike(asset.resolvedUrl, arrayBuffer, {
            status: 200,
            statusText: "OK",
            headers: {
                "Content-Length": arrayBuffer.byteLength.toString(),
                "Content-Type": expectedContentType,
            }
        });
    }
    if (asset.pendingDownload) {
        return asset.pendingDownload.response;
    }
    if (typeof loadBootResourceCallback === "function") {
        const blazorType = behaviorToBlazorAssetTypeMap[asset.behavior];
        dotnetAssert.check(blazorType, `Unsupported asset behavior: ${asset.behavior}`);
        const customLoadResult = loadBootResourceCallback(blazorType, asset.name, asset.resolvedUrl, asset.integrity, asset.behavior);
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
    return fetchLike(asset.resolvedUrl, fetchOptions, expectedContentType);
}
function onDownloadedAsset(asset) {
    if (asset.inprogress) {
        finishThrottling(asset);
    }
    ++downloadedAssetsCount;
    if (Module.onDownloadResourceProgress) {
        Module.onDownloadResourceProgress(downloadedAssetsCount, totalAssetsToDownload);
    }
    // release memory
    asset.buffer = null;
    asset.pendingDownload = undefined;
}
function verifyAllAssetsDownloaded() {
    dotnetAssert.check(downloadedAssetsCount === totalAssetsToDownload, `Not all assets were downloaded. Downloaded ${downloadedAssetsCount} out of ${totalAssetsToDownload}`);
}
function normalizeVirtualPath(asset) {
    dotnetAssert.check(asset.virtualPath, "Asset must have virtualPath");
    asset.virtualPath = asset.virtualPath.replace(/\.wasm$/, ".dll");
    asset.virtualPath = asset.virtualPath.startsWith("/")
        ? asset.virtualPath
        : asset.culture
            ? `${browserVirtualAppBase}${asset.culture}/${asset.virtualPath}`
            : browserVirtualAppBase + asset.virtualPath;
    asset.shortName = asset.virtualPath.startsWith(browserVirtualAppBase)
        ? asset.virtualPath.substring(browserVirtualAppBase.length)
        : asset.virtualPath.substring(asset.virtualPath.lastIndexOf("/") + 1);
}
const behaviorToBlazorAssetTypeMap = {
    "resource": "assembly",
    "assembly": "assembly",
    "pdb": "pdb",
    "icu": "globalization",
    "vfs": "configuration",
    "manifest": "manifest",
    "symbols": "pdb",
    "dotnetwasm": "dotnetwasm",
    "webcil": "assembly",
    "js-module-dotnet": "dotnetjs",
    "js-module-native": "dotnetjs",
    "js-module-runtime": "dotnetjs",
    "js-module-threads": "dotnetjs"
};
const behaviorToContentTypeMap = {
    "resource": "application/octet-stream",
    "assembly": "application/octet-stream",
    "pdb": "application/octet-stream",
    "icu": "application/octet-stream",
    "vfs": "application/octet-stream",
    "manifest": "application/json",
    "symbols": "text/plain; charset=utf-8",
    "dotnetwasm": "application/wasm",
    "webcil": "application/wasm",
};
const noRetry = {
    "dotnetwasm": 1,
    "symbols": 1,
};
const noBuffer = {
    "dotnetwasm": 1,
    "symbols": 1,
    "webcil": 1,
};
const leaveAfterInstantiation = {
    "dotnetwasm": 1,
    "webcil": 1,
};

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const runMainPromiseController = createPromiseCompletionSource();
// WASM-TODO: downloadOnly https://github.com/dotnet/runtime/issues/124896
// WASM-TODO: debugLevel
// many things happen in parallel here, but order matters for performance!
// ideally we want to utilize network and CPU at the same time
async function createRuntime(downloadOnly) {
    if (!loaderConfig.resources || !loaderConfig.resources.coreAssembly || !loaderConfig.resources.coreAssembly.length)
        throw new Error("Invalid config, resources is not set");
    try {
        runtimeState.creatingRuntime = true;
        const resources = loaderConfig.resources;
        await validateEngineFeatures();
        if (typeof Module.onConfigLoaded === "function") {
            await Module.onConfigLoaded(loaderConfig);
        }
        validateLoaderConfig();
        const modulesAfterConfigLoadedPromises = normalizeCollection(resources.modulesAfterConfigLoaded).map((a) => [a, callLibraryInitializerOnRuntimeConfigLoaded(a)]);
        await Promise.all(modulesAfterConfigLoadedPromises.map(([, p]) => p));
        // after onConfigLoaded hooks that could install polyfills, our polyfills can be initialized
        await initPolyfills();
        if (resources.jsModuleDiagnostics && resources.jsModuleDiagnostics.length > 0) {
            const diagnosticsModule = await loadDotnetModule(resources.jsModuleDiagnostics[0]);
            diagnosticsModule.dotnetInitializeModule(dotnetInternals);
            if (resources.wasmSymbols && resources.wasmSymbols.length > 0) {
                await fetchNativeSymbols(resources.wasmSymbols[0]);
            }
        }
        const nativeModulePromise = loadDotnetModule(resources.jsModuleNative[0]);
        const runtimeModulePromise = loadDotnetModule(resources.jsModuleRuntime[0]);
        const wasmNativePromise = fetchMainWasm(resources.wasmNative[0]);
        const coreAssembliesPromise = forEachResource(resources.coreAssembly, fetchAssembly);
        const coreVfsPromise = forEachResource(resources.coreVfs, fetchVfs);
        const icuResourceName = getIcuResourceName();
        const icuDataPromise = forEachResource(resources.icu, fetchIcu, asset => asset.name === icuResourceName);
        const assembliesPromise = forEachResource(resources.assembly, fetchAssembly);
        const satelliteResourcesPromise = loaderConfig.loadAllSatelliteResources && resources.satelliteResources
            ? fetchSatelliteAssemblies(Object.keys(resources.satelliteResources))
            : Promise.resolve();
        const vfsPromise = forEachResource(resources.vfs, fetchVfs);
        // WASM-TODO: also check that the debugger is linked in and check feature flags
        const isDebuggingSupported = loaderConfig.debugLevel != 0;
        const corePDBsPromise = forEachResource(resources.corePdb, fetchPdb, () => isDebuggingSupported);
        const pdbsPromise = forEachResource(resources.pdb, fetchPdb, () => isDebuggingSupported);
        const modulesAfterRuntimeReadyPromises = normalizeCollection(resources.modulesAfterRuntimeReady).map((a) => [a, loadJSModule(a)]);
        const nativeModule = await nativeModulePromise;
        const modulePromise = nativeModule.dotnetInitializeModule(dotnetInternals);
        nativeModulePromiseController.propagateFrom(modulePromise);
        const runtimeModule = await runtimeModulePromise;
        const runtimeModuleReady = runtimeModule.dotnetInitializeModule(dotnetInternals);
        await nativeModulePromiseController.promise;
        runtimeState.nativeReady = true;
        await coreAssembliesPromise;
        await coreVfsPromise;
        await vfsPromise;
        await icuDataPromise;
        await wasmNativePromise; // this is just to propagate errors
        if (!downloadOnly) {
            Module.runtimeKeepalivePush();
            await initializeCoreCLR();
        }
        await assembliesPromise;
        await satelliteResourcesPromise;
        await pdbsPromise;
        await corePDBsPromise;
        await runtimeModuleReady;
        verifyAllAssetsDownloaded();
        if (downloadOnly) {
            return;
        }
        if (typeof Module.onDotnetReady === "function") {
            await Module.onDotnetReady();
        }
        await Promise.all([...modulesAfterConfigLoadedPromises, ...modulesAfterRuntimeReadyPromises].map(callLibraryInitializerOnRuntimeReady));
    }
    catch (err) {
        exit(1, err);
    }
    finally {
        runtimeState.creatingRuntime = false;
    }
}
function abortStartup(reason) {
    if (runtimeState.creatingRuntime) {
        nativeModulePromiseController.reject(reason);
    }
}
async function initializeCoreCLR() {
    dotnetAssert.check(!runtimeState.dotnetReady, "CoreCLR should be initialized just once");
    const res = dotnetBrowserHostExports.initializeCoreCLR();
    if (res != 0) {
        const reason = new Error("Failed to initialize CoreCLR");
        runMainPromiseController.reject(reason);
        exit(res, reason);
    }
    runtimeState.dotnetReady = true;
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
function forEachResource(collection, callback, filter) {
    if (!collection) {
        return Promise.resolve([]);
    }
    const filteredCollection = filter ? collection.filter(filter) : collection;
    return Promise.all(filteredCollection.map(callback));
}
function normalizeCollection(collection) {
    if (!collection) {
        return [];
    }
    return collection;
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
    /**
     * @deprecated This method is no longer supported and will be removed in a future version.
     */
    withConfigSrc(_configSrc) {
        return this;
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
            else {
                validateLoaderConfig();
            }
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
            else {
                validateLoaderConfig();
            }
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

var GitHash = "5bed4499b04cbbaec57ac4209ae993acca3648cc";

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
        throw new Error(`Assert failed: ${message}`);
    }
}
// calls to fastCheck will be inlined by rollup
// so that the string formatting or allocation of a closure would only happen in failure cases
// this is important for performance sensitive code paths
function fastCheck(condition, messageFactory) {
    if (!condition) {
        const message = messageFactory();
        throw new Error(`Assert failed: ${message}`);
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
function error(msg, reason) {
    if (reason && typeof reason === "object" && reason.silent) {
        return;
    }
    console.error(prefix + msg, normalizeException(reason));
}
function normalizeException(reason) {
    let res = "unknown exception";
    let stack;
    if (reason) {
        if (typeof reason === "object" && reason.status === undefined) {
            if (reason.stack === undefined) {
                stack = reason.stack + "";
            }
            else {
                stack = new Error().stack + "";
            }
        }
        if (reason.message) {
            res = reason.message;
        }
        else if (typeof reason.toString === "function") {
            res = reason.toString();
        }
        else {
            res = reason + "";
        }
        if (stack) {
            // Some JS runtimes insert the error message at the top of the stack, some don't,
            //  so normalize it by using the stack as the result if it already contains the error
            if (stack.startsWith(res))
                res = symbolicateStackTrace(stack);
            else
                res += "\n" + symbolicateStackTrace(stack);
        }
        else {
            res = symbolicateStackTrace(res);
        }
    }
    return res;
}
function symbolicateStackTrace(message) {
    if (dotnetDiagnosticsExports.symbolicateStackTrace) {
        return dotnetDiagnosticsExports.symbolicateStackTrace(message);
    }
    return message;
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
        normalizeException,
        fetchSatelliteAssemblies,
        fetchLazyAssembly,
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
        instantiateWasm: instantiateMainWasm,
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
            dotnetLoaderExports.normalizeException,
            dotnetLoaderExports.fetchSatelliteAssemblies,
            dotnetLoaderExports.fetchLazyAssembly,
        ];
    }
    return dotnetApi;
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
dotnetInitializeModule();
await initPolyfillsAsync();
const dotnet = new HostBuilder();
dotnet.withConfig(/*json-start*/{
  "mainAssemblyName": "blazor_coreclr_demo",
  "resources": {
    "hash": "sha256-00t1j/dlZPiZOilcG5ifuY3ajpc5rXTLP9Uw8wp/Dlk=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.yxoq6d31sk.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.uz2dqcbypj.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.mqy6jhrhpl.wasm",
        "hash": "sha256-okO5AIpnwEbuZJotOulx5KjEDQPPvKjflnqtke0xPfY=",
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
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.pkw82vip9l.dll",
        "hash": "sha256-Fyv8P5a8FIv0MqkHvCWYfHM4N6PC9GxjUFz4+hVcRQQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.4xb6dch3kk.dll",
        "hash": "sha256-2C7AN5CR15EQdZsfPxOtd1G9tJ2NF0ZcxhOnT+5VM/o=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.lzu02rcdfg.dll",
        "hash": "sha256-H9UvRnRAeZP7bm7vM4Ek3LeF4VhddPWJscxnJnKYQ60=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.04lmd7e0ak.dll",
        "hash": "sha256-oGL7YaYKMlCCJPkizbVoGWBT2qKCO2hCRm8dESg+pFc=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.poe01aisbx.dll",
        "hash": "sha256-p4xehmc8tBb/Rii/3tPeAtShm7jU6O5c5LqpMvqZXXU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.r4dmhz5b30.dll",
        "hash": "sha256-+xjDU+msKZtkWPEyBXKQTBz+7SjxkfqCjv6KpGS13nY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.dll",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.x8jhu7sjoc.dll",
        "hash": "sha256-T6or6l+D6769yCZiQMAZnB+8zfZ0TUipUAwI97/ryHI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.kruranf2n4.dll",
        "hash": "sha256-gEouZMlM4cNMv/k8S0vxWkorWGIWFpa0Fxe/aod3wfM=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.xbvmvv3hoj.dll",
        "hash": "sha256-4+y3wuPmbxC8xV8bG2KJJRMkrCePItv3el1owf79HYA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.bsxtys45jc.dll",
        "hash": "sha256-td1SaBNwzgPW2lVwPv88caT8Y9oWj3AsZ56iiBEk/wU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.bq6tihw4yd.dll",
        "hash": "sha256-U/1XQ8t4iZlOjXsQ4QM2Qsmvq8ISDvKJuJDjr2uY5pA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.yft3am7rrt.dll",
        "hash": "sha256-MrYpz+c8zif6gCed0SOr33rm1w9IN0+YudcV6vHZYsI=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.q4ioxvywpy.dll",
        "hash": "sha256-NtE9JgKXouDZMAzAlflkECeJWTwrTvUjzmsm87Uhyrg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.zvk8aedu6t.dll",
        "hash": "sha256-QVLLf7MxxRur4SB8txWJZvi4WiqbELjtPILc3ZeHIgY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.dll",
        "name": "Microsoft.Extensions.Hosting.Abstractions.xo8azm7yl7.dll",
        "hash": "sha256-f6rufV1H8tjkYIH5YD8XzFIBCiVNnAWiKc4DetuFtkQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.lfhyph8dxd.dll",
        "hash": "sha256-wel0Ef5A3ukVn4JAfZiN3SCw+aZgab6nGjOqX9VZiRE=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.1rktrjoa1b.dll",
        "hash": "sha256-TTVIpdqAda80CMUAu5STgwVF3c0KvnDqV2nTkEHLqmY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.jdp27ylyq8.dll",
        "hash": "sha256-CRTmEWNUgv7eeNNUbdPy5HrY57SZoK7H/jIzIoLfQMk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.0k5xm030f1.dll",
        "hash": "sha256-YKAbPOt8KYJUfXKIgaV4Jy9hpmKxgj8MKlIqp8P+Ix8=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.cc1p8bf051.dll",
        "hash": "sha256-9Cjx22q9l37FzBHaaSVzK8V5PtdehXauSac1IsNzi3I=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.8ze1iv1cet.dll",
        "hash": "sha256-7L8Laf6L6zn6H4jYdo/CgVF6vHa08z+oPXDn/VF5s3E=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.e5gp4s07xa.dll",
        "hash": "sha256-AlKfd0o67hkipHb2XinNl7uzFq+OX05k/JQr75MS0tY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.exuvrqwehc.dll",
        "hash": "sha256-ri6m+erNwaTg524WCGxaU5U4FwQNO3fu0+bqDVSCSwo=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.uech5q897q.dll",
        "hash": "sha256-FuZopquL9aAOuNDGXdGYUeVcRRlVs3Z+K1OHiwJqFZU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.8f8c0lxfud.dll",
        "hash": "sha256-pPnQ7HfqNtUQrgDnCiKyOjSHh1gLl4JHiPhwKO/BSsY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.l8m2fsdgo1.dll",
        "hash": "sha256-6/NfsKkcHV3r8FxU4IsrpInfeVquCjd76N1Pcb/gmPY=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.iyswmz60xr.dll",
        "hash": "sha256-ZgNJrqhAAjTsBUAce82y1oWv+CT7X4tFirNF3P46zok=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.lcn1i39g9c.dll",
        "hash": "sha256-iwV9jxfum2vCig2WxmLL0FTkpWfSkcu6M4ehkEzDw2A=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.e8ritxjnvx.dll",
        "hash": "sha256-Xqucd0NO97ICFnTx//TnhU5ugOsbkWFFIojQUPmZ4qU=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.3mp3o8rwif.dll",
        "hash": "sha256-lXNUhuhTKMuJcTVlvdI+58NgfIigb/c/+RQ7s4Cg418=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.umvdan7t14.dll",
        "hash": "sha256-ZpcWazxt5SoesdRQ5P1YKFPz5zYZ8SvceOHWBotaDDk=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.34bkzrmrfe.dll",
        "hash": "sha256-vRteQYL/D7D6Kgjm/L7OAHKa1G14CHMQ8tNtE9RmPA0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.1t6hw18fav.dll",
        "hash": "sha256-S79AnSGcp3ifT7n5unmO0terAyb243I6cevBqCz6DRA=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.pgnjbr4h0q.dll",
        "hash": "sha256-d0vyzy/URZn3xMcVO613/R79JX8jtT9w06uPYSscZdQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.k68cbxia3m.dll",
        "hash": "sha256-lJyFpXZjXdikMXoNFlUkaJofJIfziSIXYJVXibkmge0=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.jouv3u4ypp.dll",
        "hash": "sha256-E4ggoWHWhkFGsBtvSwZsdvkXphGL1Dijx2zhcLaFwmQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.ou4xodgsul.dll",
        "hash": "sha256-MP1U/AajPBGEDwqEEdpwq+XpM2OGY2Aw+jqtPmx7uiQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "blazor_coreclr_demo.dll",
        "name": "blazor_coreclr_demo.89rks0l2zj.dll",
        "hash": "sha256-BM2rb8aXFRmFxmTxFdjPH6cH6NVdsUjKahykGKKbZec=",
        "cache": "force-cache"
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
}/*json-end*/);

export { dotnet, exit };
//# sourceMappingURL=dotnet.js.map
