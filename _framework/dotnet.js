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

const bigInt = () => (async e => { try { return (await WebAssembly.instantiate(e)).instance.exports.b(BigInt(0)) === BigInt(0) } catch (e) { return !1 } })(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3, 2, 1, 0, 7, 5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11])), bulkMemory = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), exceptions = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11])), exceptionsFinal = () => (async () => { try { return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABBAFgAAADAgEAChABDgACaR9AAQMAAAsACxoL"), (e => e.codePointAt(0)))), !0 } catch (e) { return !1 } })(), extendedConst = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 0, 1, 11, 9, 1, 0, 65, 1, 65, 2, 106, 11, 0])), gc = () => (async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 95, 1, 120, 0])))(), jsStringBuiltins = () => (async () => { try { return await WebAssembly.instantiate(Uint8Array.from(atob("AGFzbQEAAAABBgFgAW8BfwIXAQ53YXNtOmpzLXN0cmluZwR0ZXN0AAA="), (e => e.codePointAt(0))), {}, { builtins: ["js-string"] }), !0 } catch (e) { return !1 } })(), jspi = () => (async () => "Suspending" in WebAssembly)(), memory64 = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 3, 1, 4, 1])), multiMemory = () => (async () => { try { return new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 5, 5, 2, 0, 0, 0, 0])), !0 } catch (e) { return !1 } })(), multiValue = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 0, 2, 127, 127, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 65, 0, 11])), mutableGlobals = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 2, 8, 1, 1, 97, 1, 98, 3, 127, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 5, 1, 1, 97, 3, 1])), referenceTypes = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11])), relaxedSimd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 15, 1, 13, 0, 65, 1, 253, 15, 65, 2, 253, 15, 253, 128, 2, 11])), saturatedFloatToInt = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11])), signExtensions = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])), simd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), streamingCompilation = () => (async () => "compileStreaming" in WebAssembly)(), tailCall = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 6, 1, 4, 0, 18, 0, 11])), threads = () => (async e => { try { return "undefined" != typeof MessageChannel && (new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e) } catch (e) { return !1 } })(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])), typeReflection = () => (async () => "Function" in WebAssembly)(), typedFunctionReferences = () => (async () => { try { return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABEANgAX8Bf2ABZAABf2AAAX8DBAMBAAIJBQEDAAEBChwDCwBBCkEqIAAUAGoLBwAgAEEBagsGANIBEAAL"), (e => e.codePointAt(0)))), !0 } catch (e) { return !1 } })();

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
  "applicationEnvironment": "Development",
  "resources": {
    "hash": "sha256-Tv0b+fBVpNJpiJhI08fBqCHp/Zr2NyCdU2+RGGZd58Y=",
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
        "virtualPath": "System.Runtime.InteropServices.JavaScript.dll",
        "name": "System.Runtime.InteropServices.JavaScript.zfpxzzmbev.dll",
        "integrity": "sha256-D47feDgL5QVrZJG3mAT2LpEWYIuutJ1jJtSvX9KjYeY="
      },
      {
        "virtualPath": "System.Private.CoreLib.dll",
        "name": "System.Private.CoreLib.tbbojqyi77.dll",
        "integrity": "sha256-WYpgw3b+EuY9Q+bOpHweRn+tN39hpl7FrwDeYV+T26I="
      }
    ],
    "assembly": [
      {
        "virtualPath": "Microsoft.Extensions.Configuration.dll",
        "name": "Microsoft.Extensions.Configuration.vx02iadkkc.dll",
        "integrity": "sha256-vQSy806JOeGM1OjhJH0jZsthlet0+FrgjZk29liBEGA="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.dll",
        "name": "Microsoft.Extensions.Configuration.Abstractions.vahhr0icgy.dll",
        "integrity": "sha256-14yCDGyjeBRE9geDvKBLPoJZ8a5rqppSmwz5wvnEPAU="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Binder.dll",
        "name": "Microsoft.Extensions.Configuration.Binder.g2ral7t5pv.dll",
        "integrity": "sha256-iGgttFRnWFFZkmchHvkD8xqrIzOyLl2LYSNls3ZiSUQ="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.dll",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.4ttrwbpffq.dll",
        "integrity": "sha256-WLQdFpNxbtC0pQh+RcBRkqIstwzB6E1NBa9LfGtXv2M="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.FileExtensions.dll",
        "name": "Microsoft.Extensions.Configuration.FileExtensions.x71hi8jacd.dll",
        "integrity": "sha256-bULLX2h+4fEiYyBF6afq5Aik0Y5aCFCcEFSdcnUFB1g="
      },
      {
        "virtualPath": "Microsoft.Extensions.Configuration.Json.dll",
        "name": "Microsoft.Extensions.Configuration.Json.5lbbhfbmsx.dll",
        "integrity": "sha256-aYzaZjz3fKxJ6p7EvL7HlP1nwoPLvADffTxhu11K4Y4="
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.dll",
        "name": "Microsoft.Extensions.DependencyInjection.13gmngfufw.dll",
        "integrity": "sha256-7SGEYwh+/JVFj16WNwIgCztNbBs6X87/WrcMbObsakk="
      },
      {
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.dll",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.5309kjxa6n.dll",
        "integrity": "sha256-sbiiNfWF6rFQZGBmUEb+ipWGXLpbTv280WvrNGJPMRI="
      },
      {
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.dll",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.66wcb8wqbr.dll",
        "integrity": "sha256-Ikcs+Q+rfzTJv398Zmg0vvQBwOmt6jGjYF9FOgDgcO4="
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Abstractions.dll",
        "name": "Microsoft.Extensions.FileProviders.Abstractions.c1rjkoqoyz.dll",
        "integrity": "sha256-YFxmx/V3JvinU0PpnFC//eOZ2sMBiNcMXtcs8NiDKxs="
      },
      {
        "virtualPath": "Microsoft.Extensions.FileProviders.Physical.dll",
        "name": "Microsoft.Extensions.FileProviders.Physical.qrmzp845go.dll",
        "integrity": "sha256-+kjtRtPEVG7UQaZy8aoE66RDntbhXOwjhOxKhyCMV4g="
      },
      {
        "virtualPath": "Microsoft.Extensions.FileSystemGlobbing.dll",
        "name": "Microsoft.Extensions.FileSystemGlobbing.xurd9kegjb.dll",
        "integrity": "sha256-t9gUrrGfpKGmIjelOkPU29yDTgQJ3wP+PYW6I7A20CQ="
      },
      {
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.dll",
        "name": "Microsoft.Extensions.Hosting.Abstractions.2x5bkmu8of.dll",
        "integrity": "sha256-tn6sF5bavrMcL06z1wisW4Qdhy8c8BF3YgdLDPy41jg="
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.dll",
        "name": "Microsoft.Extensions.Logging.3iohy4nk7n.dll",
        "integrity": "sha256-S/gY8fLEn5hwmFKIkP4T0F0lOEuTgNd0YYOHb8tA1/0="
      },
      {
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.dll",
        "name": "Microsoft.Extensions.Logging.Abstractions.ci6ohvli6b.dll",
        "integrity": "sha256-9JPtXE0l6WpvunhSzy/OoSN+ichR3IRTMR92sM8uekQ="
      },
      {
        "virtualPath": "Microsoft.Extensions.Options.dll",
        "name": "Microsoft.Extensions.Options.hwoek6frpr.dll",
        "integrity": "sha256-b27ts7RouJWGkTC/13s72iVQtwr30/pQ7eZvljGwsPU="
      },
      {
        "virtualPath": "Microsoft.Extensions.Primitives.dll",
        "name": "Microsoft.Extensions.Primitives.pzkzdjhdfx.dll",
        "integrity": "sha256-Bf6MN3S1p+sJ10o0FLAkw2aJY5UfymqqLDi6i69vJtk="
      },
      {
        "virtualPath": "Microsoft.CSharp.dll",
        "name": "Microsoft.CSharp.z803h6zn53.dll",
        "integrity": "sha256-/WIipP1gKxjJEvI1LXnAlQjPwrebPpdINIuMXcdZn3U="
      },
      {
        "virtualPath": "Microsoft.VisualBasic.Core.dll",
        "name": "Microsoft.VisualBasic.Core.7pjnxfw2jb.dll",
        "integrity": "sha256-hV+kQj1QKaL1870AaosBOQwJpRX09GSxBTR3dk4V7VA="
      },
      {
        "virtualPath": "Microsoft.VisualBasic.dll",
        "name": "Microsoft.VisualBasic.ge1dmkpf0b.dll",
        "integrity": "sha256-WD5cAVVG6pQT/Prz8jJx4ia63l5nYP0AONgw285E9uw="
      },
      {
        "virtualPath": "Microsoft.Win32.Primitives.dll",
        "name": "Microsoft.Win32.Primitives.yq01lhmlt7.dll",
        "integrity": "sha256-CnPPMDtyC+wIqKFOsyy87rx6uJtae1+obtRHIvElu58="
      },
      {
        "virtualPath": "Microsoft.Win32.Registry.dll",
        "name": "Microsoft.Win32.Registry.nal0xxqutm.dll",
        "integrity": "sha256-MY86GX1DyrDkqRI03Qn+m7dNqjZMCGB2uaxGFQ7DPOg="
      },
      {
        "virtualPath": "System.AppContext.dll",
        "name": "System.AppContext.vr8wrjdztu.dll",
        "integrity": "sha256-lVRPBsAIAmCPDyrt+vXxVbOiB+rMue7gAV/e4TeMCG0="
      },
      {
        "virtualPath": "System.Buffers.dll",
        "name": "System.Buffers.kls5if2vy1.dll",
        "integrity": "sha256-+BFhJranh3TiR+Gmf0NGuGwlObanSPiW48Y1Rk1pdnc="
      },
      {
        "virtualPath": "System.Collections.Concurrent.dll",
        "name": "System.Collections.Concurrent.4el7e4ea26.dll",
        "integrity": "sha256-9NntJ+/Pxv63tZWm86tQjDD/7UenGCzy45CIYj3B6FY="
      },
      {
        "virtualPath": "System.Collections.Immutable.dll",
        "name": "System.Collections.Immutable.710jrx6z4d.dll",
        "integrity": "sha256-FTpaDLBihvWWQ5d2o+bhYGhGu+aDAf3NQOArAeEZLMI="
      },
      {
        "virtualPath": "System.Collections.NonGeneric.dll",
        "name": "System.Collections.NonGeneric.iiyzt72ps9.dll",
        "integrity": "sha256-hk1CqjsBOFzDtuKExlKY+5DU40BnCPqtWUOJOl81ceY="
      },
      {
        "virtualPath": "System.Collections.Specialized.dll",
        "name": "System.Collections.Specialized.us1ubauaje.dll",
        "integrity": "sha256-YujIbcRvuE+dWEkUJJrhfmcuE6Su7DbS6LrEGZOAsNs="
      },
      {
        "virtualPath": "System.Collections.dll",
        "name": "System.Collections.mv9par3ag9.dll",
        "integrity": "sha256-QkQRfnh1OA0wXMat0difjUCehQo98NtCT9RvaWpbm/E="
      },
      {
        "virtualPath": "System.ComponentModel.Annotations.dll",
        "name": "System.ComponentModel.Annotations.amvkefixms.dll",
        "integrity": "sha256-7livhaOBvHnKGmdo2sNyFsbKaNyv5S4nchGiMKcPSDg="
      },
      {
        "virtualPath": "System.ComponentModel.DataAnnotations.dll",
        "name": "System.ComponentModel.DataAnnotations.u4go2134y4.dll",
        "integrity": "sha256-rn0HO7AMLKpYbrF2Mxn4pXQg4BCKlNsKnCz5MDlT0Ic="
      },
      {
        "virtualPath": "System.ComponentModel.EventBasedAsync.dll",
        "name": "System.ComponentModel.EventBasedAsync.t3rqj2sto5.dll",
        "integrity": "sha256-R7mBRj31ZH+XTr3UdaW7liBMTj5DSXNmpqKeq42Zuv4="
      },
      {
        "virtualPath": "System.ComponentModel.Primitives.dll",
        "name": "System.ComponentModel.Primitives.6xapm0wco3.dll",
        "integrity": "sha256-itk2+AzxCNtd2vS/ia3BIS0akuhh6Bd8F7//eLYGyII="
      },
      {
        "virtualPath": "System.ComponentModel.TypeConverter.dll",
        "name": "System.ComponentModel.TypeConverter.163g9xe7r1.dll",
        "integrity": "sha256-9x5ZydxXGeTBjoo6lg2Dv0eQGecH/qTjqkntHWgwcI8="
      },
      {
        "virtualPath": "System.ComponentModel.dll",
        "name": "System.ComponentModel.b7qbbdbbnm.dll",
        "integrity": "sha256-mfcROkIBqmG3OrxX4KBaMi/EUWLo35tL8rRHEpYb8dc="
      },
      {
        "virtualPath": "System.Configuration.dll",
        "name": "System.Configuration.n7uk811mh3.dll",
        "integrity": "sha256-De5zs/GFHM6RH6Y6OjJ9rbLy7sTFwVSiN16dh8dlBzk="
      },
      {
        "virtualPath": "System.Console.dll",
        "name": "System.Console.srifyc30vg.dll",
        "integrity": "sha256-OLGhOUN6mjHhZUzFhq4v1mHQfmjA/Oe+YOOwqIDGd24="
      },
      {
        "virtualPath": "System.Core.dll",
        "name": "System.Core.1lbr52m022.dll",
        "integrity": "sha256-ZUA+0yUwL0o7b3nvxKhkVL1NJK8KMzZh/oD15H5mRFI="
      },
      {
        "virtualPath": "System.Data.Common.dll",
        "name": "System.Data.Common.0xvr960m7i.dll",
        "integrity": "sha256-rCQNlS5iE6DWiOftHryzXaYXAjwPgdEy9934BAwNT8w="
      },
      {
        "virtualPath": "System.Data.DataSetExtensions.dll",
        "name": "System.Data.DataSetExtensions.73n52rq19u.dll",
        "integrity": "sha256-3Y3yG36d87DjrQrK7C+LtXIg5WJ5sZ2kOfBZjpeuv5c="
      },
      {
        "virtualPath": "System.Data.dll",
        "name": "System.Data.sa8v9j5yli.dll",
        "integrity": "sha256-PB/c4aHuvECgG3ijfce4VOBVy8Tpd74KuCzzUM3r5iM="
      },
      {
        "virtualPath": "System.Diagnostics.Contracts.dll",
        "name": "System.Diagnostics.Contracts.9hzmjjtj1s.dll",
        "integrity": "sha256-HQwWZ9i7y2lrOFXDY9Owqe9r8IA9tDxwp6PW0rpXyaQ="
      },
      {
        "virtualPath": "System.Diagnostics.Debug.dll",
        "name": "System.Diagnostics.Debug.hfq31zxj52.dll",
        "integrity": "sha256-c3pC8IBB8I+A8AOe05NZCHtnaLQel0WF1ZglOnJycuk="
      },
      {
        "virtualPath": "System.Diagnostics.DiagnosticSource.dll",
        "name": "System.Diagnostics.DiagnosticSource.75agf5oob5.dll",
        "integrity": "sha256-pUUwO1UgKs2QUxqhLTnnQ2Znr03dAl+jzcauTdsNzwo="
      },
      {
        "virtualPath": "System.Diagnostics.FileVersionInfo.dll",
        "name": "System.Diagnostics.FileVersionInfo.r3fc0zz0nz.dll",
        "integrity": "sha256-iYzgb9/dGgKTAIUeYXoF+qHP8mz7QgehvjxCDGAEwm0="
      },
      {
        "virtualPath": "System.Diagnostics.Process.dll",
        "name": "System.Diagnostics.Process.xhtabfng0e.dll",
        "integrity": "sha256-1apHdFsonI1brQEYjsuBw+ghgi8kv9kWPyKLJ9kL7As="
      },
      {
        "virtualPath": "System.Diagnostics.StackTrace.dll",
        "name": "System.Diagnostics.StackTrace.htwbdw4sv4.dll",
        "integrity": "sha256-5WdUi7pA1scjvjBdvMuZxwzXIOlDA8NA9rOZtdvbFH4="
      },
      {
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.dll",
        "name": "System.Diagnostics.TextWriterTraceListener.4ov3lpglgk.dll",
        "integrity": "sha256-FDwTJQCyKUoudQv1N1X0EfvNrrnPzF8PbVB1k2HdsXQ="
      },
      {
        "virtualPath": "System.Diagnostics.Tools.dll",
        "name": "System.Diagnostics.Tools.m1zcwv2dyp.dll",
        "integrity": "sha256-lmc7el3HtR3MCQFjDtAkSHQYTYD0tO9gMkDKM4Mq0p0="
      },
      {
        "virtualPath": "System.Diagnostics.TraceSource.dll",
        "name": "System.Diagnostics.TraceSource.gk3j0j6gvr.dll",
        "integrity": "sha256-0CRBjlMNszYHyzmliJlV9JNI2dwluN5X6Q5XzY12J8A="
      },
      {
        "virtualPath": "System.Diagnostics.Tracing.dll",
        "name": "System.Diagnostics.Tracing.tg3gryvhwr.dll",
        "integrity": "sha256-c5fVrDug+xu62kqGNLBiVdD/PbLc5JwsZW/AsgorGKA="
      },
      {
        "virtualPath": "System.Drawing.Primitives.dll",
        "name": "System.Drawing.Primitives.wus87jr45y.dll",
        "integrity": "sha256-6Hj/3QwS0LHEicRQspGJetz6iU5CJ8fbuMOPF9AHxu0="
      },
      {
        "virtualPath": "System.Drawing.dll",
        "name": "System.Drawing.i4ts9pnzf4.dll",
        "integrity": "sha256-cl9Bm+12Mng5tvuDGYp/2hrRGPQ1QDSJ/6bVx9Xkk50="
      },
      {
        "virtualPath": "System.Dynamic.Runtime.dll",
        "name": "System.Dynamic.Runtime.3bb477ywdz.dll",
        "integrity": "sha256-PxXSaI/IM4F1a36B5YTdgnfYV0zJtjw/DmXsv2j1JFk="
      },
      {
        "virtualPath": "System.Formats.Asn1.dll",
        "name": "System.Formats.Asn1.lakpwc8tu2.dll",
        "integrity": "sha256-/cKBXpjZp71dkdY6BkJjTK6b1Ic5jNYah91FTn8otVs="
      },
      {
        "virtualPath": "System.Formats.Tar.dll",
        "name": "System.Formats.Tar.bdeyrxjb4t.dll",
        "integrity": "sha256-wXMB91PPiDvUL9+kBjGokFcDrPcQdbhIXHzh5sLNl7E="
      },
      {
        "virtualPath": "System.Globalization.Calendars.dll",
        "name": "System.Globalization.Calendars.n12i3kx6yp.dll",
        "integrity": "sha256-JeJkDgYKbQbW8v4C2ycDZe3p2ylB+zuPZatYBZ0Fhs8="
      },
      {
        "virtualPath": "System.Globalization.Extensions.dll",
        "name": "System.Globalization.Extensions.oi0fqx0cgh.dll",
        "integrity": "sha256-oNFsYgYnIieaAYTqVrlTxJiYBi7m+qdAKywKb9hyRIc="
      },
      {
        "virtualPath": "System.Globalization.dll",
        "name": "System.Globalization.zfg167cjt9.dll",
        "integrity": "sha256-gTRWW4MT2cntcy/lPc06Kl66/Dsk65QCtbHTN47g1l0="
      },
      {
        "virtualPath": "System.IO.Compression.Brotli.dll",
        "name": "System.IO.Compression.Brotli.3s2e0vi4y8.dll",
        "integrity": "sha256-kwHeMOiDEZRxrj8p3A0IFjR93bbf0RVGzVPjZuPztIs="
      },
      {
        "virtualPath": "System.IO.Compression.FileSystem.dll",
        "name": "System.IO.Compression.FileSystem.busz80mkqz.dll",
        "integrity": "sha256-PRubl8wTlaXEElPrewPCY6tFpKflWufal8g7U5ptVso="
      },
      {
        "virtualPath": "System.IO.Compression.ZipFile.dll",
        "name": "System.IO.Compression.ZipFile.amfnpulok0.dll",
        "integrity": "sha256-0u+GCCgVxGpzrVGkzcO0QMbaKPXc0aYAa7lnCcZHl+8="
      },
      {
        "virtualPath": "System.IO.Compression.dll",
        "name": "System.IO.Compression.k4ysfgoebx.dll",
        "integrity": "sha256-xErPjCwj0A0eCvpLUsgUlteppyywwk9BcWVUR3TuP6A="
      },
      {
        "virtualPath": "System.IO.FileSystem.AccessControl.dll",
        "name": "System.IO.FileSystem.AccessControl.gmuu6gt2ew.dll",
        "integrity": "sha256-iEzZE0be2yUr4PotL8SHoCa7UsiUFO6hdSU5+eqi5kw="
      },
      {
        "virtualPath": "System.IO.FileSystem.DriveInfo.dll",
        "name": "System.IO.FileSystem.DriveInfo.9vpvfog8y6.dll",
        "integrity": "sha256-S5yciOa1kRCaPx2MBBNi0hijl0b7m9d3hf3OjDPoG8k="
      },
      {
        "virtualPath": "System.IO.FileSystem.Primitives.dll",
        "name": "System.IO.FileSystem.Primitives.2w66oxvslw.dll",
        "integrity": "sha256-nmvOiPuiKaL2fqteHRFmga/3E+vBIcpHVh71lmMeBwU="
      },
      {
        "virtualPath": "System.IO.FileSystem.Watcher.dll",
        "name": "System.IO.FileSystem.Watcher.fibqo2txjf.dll",
        "integrity": "sha256-xyxJ5UO8ZqMkbBhryYA7XKOD2F941jQco52kXnSXT0E="
      },
      {
        "virtualPath": "System.IO.FileSystem.dll",
        "name": "System.IO.FileSystem.vr6vpw9t0o.dll",
        "integrity": "sha256-9cLPw1ijiT+pFvEKeTpSWTrs9ETutW48AmR2wJUOd54="
      },
      {
        "virtualPath": "System.IO.IsolatedStorage.dll",
        "name": "System.IO.IsolatedStorage.o9rd2lds2b.dll",
        "integrity": "sha256-tK5CeCpTSbHWdcus2w7I+Dhss3Dq9+XuTFJYkiIX9Pw="
      },
      {
        "virtualPath": "System.IO.MemoryMappedFiles.dll",
        "name": "System.IO.MemoryMappedFiles.syihy82fky.dll",
        "integrity": "sha256-vCMXTSgHGT29v0cBTMY2JdYJijggtxKxdQKP8ol+WEs="
      },
      {
        "virtualPath": "System.IO.Pipelines.dll",
        "name": "System.IO.Pipelines.1pxeilzcpb.dll",
        "integrity": "sha256-FZiWEEN9D9cUVgJR1rBgQuI6ebJbtcwGqmY47rYSoZc="
      },
      {
        "virtualPath": "System.IO.Pipes.AccessControl.dll",
        "name": "System.IO.Pipes.AccessControl.h7dgklsbl9.dll",
        "integrity": "sha256-3S737TWPvg4MLrrjg382KMgolL+USjn9HvDIReH0C2w="
      },
      {
        "virtualPath": "System.IO.Pipes.dll",
        "name": "System.IO.Pipes.l91teyw5xl.dll",
        "integrity": "sha256-qYGD1E10S6ISe9iky0taKg2QPvi1+hwEzNsKT9n84ds="
      },
      {
        "virtualPath": "System.IO.UnmanagedMemoryStream.dll",
        "name": "System.IO.UnmanagedMemoryStream.atvbkjd93v.dll",
        "integrity": "sha256-zkWGAM9VPqBrZIOOC08ksDCmG8PlcXh8sVSpHZe36W8="
      },
      {
        "virtualPath": "System.IO.dll",
        "name": "System.IO.fmn749c8zf.dll",
        "integrity": "sha256-V3vBm+ox8xQ/+P4QsmLydrAYazLwNcosHHFvMcXyQD4="
      },
      {
        "virtualPath": "System.Linq.AsyncEnumerable.dll",
        "name": "System.Linq.AsyncEnumerable.yhpg0htvle.dll",
        "integrity": "sha256-FlmMcvlWn9QuVq+9U6R7YjiwqyhpsRs+yA1lenVDOVY="
      },
      {
        "virtualPath": "System.Linq.Expressions.dll",
        "name": "System.Linq.Expressions.jsv56v08dn.dll",
        "integrity": "sha256-zS3tEnmqD0HkGyXoU2O1z0w+khqGdubzGCeGXeAQTGM="
      },
      {
        "virtualPath": "System.Linq.Parallel.dll",
        "name": "System.Linq.Parallel.jr1lpt5yls.dll",
        "integrity": "sha256-Lxn5gTPfmWYMseuftkviWyZONECDwRfvqUqOUO4IEzg="
      },
      {
        "virtualPath": "System.Linq.Queryable.dll",
        "name": "System.Linq.Queryable.0wspyhdbtk.dll",
        "integrity": "sha256-gMvTBJZr5HDliySpIJPdSwyGxI2FB9NeVfed6Mys7VA="
      },
      {
        "virtualPath": "System.Linq.dll",
        "name": "System.Linq.wi7b1cak0k.dll",
        "integrity": "sha256-KBT7vhnqSWmQ+whKsCf/zQc9+0wWVjX/6fa6t8NIkeU="
      },
      {
        "virtualPath": "System.Memory.dll",
        "name": "System.Memory.tikt0kxf7o.dll",
        "integrity": "sha256-Ja23T7pyvx9khUivpzqrF+wLI9RQ8Irh9J4Vwfy9PwE="
      },
      {
        "virtualPath": "System.Net.Http.Json.dll",
        "name": "System.Net.Http.Json.df6xbk5wpg.dll",
        "integrity": "sha256-yamy78+VU9ce1vwsW8MGjAiS+Zc6qLtRavxWjpHMR5s="
      },
      {
        "virtualPath": "System.Net.Http.dll",
        "name": "System.Net.Http.j5b5thfhlz.dll",
        "integrity": "sha256-txi1x7SFMy1nUrP2WRXNJEebEiAsp/7nL88GwdmQMTM="
      },
      {
        "virtualPath": "System.Net.HttpListener.dll",
        "name": "System.Net.HttpListener.5vu6tz97gl.dll",
        "integrity": "sha256-wdrv5038XstJCvnrVelM6OTXzzOsM8TmIuLB/j2qa4M="
      },
      {
        "virtualPath": "System.Net.Mail.dll",
        "name": "System.Net.Mail.w59f5vzqsk.dll",
        "integrity": "sha256-JI3yFCJVOBlo09WYQJerR3e7uNxcySdYgImfxDALPHQ="
      },
      {
        "virtualPath": "System.Net.NameResolution.dll",
        "name": "System.Net.NameResolution.mknm8b1hlv.dll",
        "integrity": "sha256-1oRUGADeIE4fXN0N4GN6Dgbp3UcWUs1B+mgWris0iKs="
      },
      {
        "virtualPath": "System.Net.NetworkInformation.dll",
        "name": "System.Net.NetworkInformation.7lma8z332m.dll",
        "integrity": "sha256-JQtlDYLgH2jVhHymBmxTZUJoLMu2Vs307etU8gHwTi4="
      },
      {
        "virtualPath": "System.Net.Ping.dll",
        "name": "System.Net.Ping.r93kii6dkc.dll",
        "integrity": "sha256-cThdlUzWfn+Cc0tUSAgFvbenuKf1dBN7NZ4Kvup6FrY="
      },
      {
        "virtualPath": "System.Net.Primitives.dll",
        "name": "System.Net.Primitives.vo4ks3gsdp.dll",
        "integrity": "sha256-QSOzF9QO9a7fovdL+m8akTm2VbdzUqU/hxh7p/LpKpE="
      },
      {
        "virtualPath": "System.Net.Quic.dll",
        "name": "System.Net.Quic.mflc2x3y36.dll",
        "integrity": "sha256-fvJnCd83O2jb2rNYJ8rylTnayfpkPBcES/TKBWUOKeU="
      },
      {
        "virtualPath": "System.Net.Requests.dll",
        "name": "System.Net.Requests.dyjf4569xt.dll",
        "integrity": "sha256-O5V53yJ82OXVhq1/ASWIqry2i4bP6Fzs2JSY7PiKQHs="
      },
      {
        "virtualPath": "System.Net.Security.dll",
        "name": "System.Net.Security.9ja3ptdovm.dll",
        "integrity": "sha256-FXXoytn3v1QGUjPBnfDWriUmM5HarSJoNjPQVtr4ELs="
      },
      {
        "virtualPath": "System.Net.ServerSentEvents.dll",
        "name": "System.Net.ServerSentEvents.1qdrgp45jj.dll",
        "integrity": "sha256-x+31qrK3GGTjGoKJWaX94ZN5QJFRrsZKYaxcJ5rTRTs="
      },
      {
        "virtualPath": "System.Net.ServicePoint.dll",
        "name": "System.Net.ServicePoint.4p2cu2h9x5.dll",
        "integrity": "sha256-qA6E/pB4N8gV2JmBdYq0UZmfnRYySSyoTAQ86UsUupU="
      },
      {
        "virtualPath": "System.Net.Sockets.dll",
        "name": "System.Net.Sockets.1u6pjh7rlk.dll",
        "integrity": "sha256-2fWMXz3HLkZ3PrNN6eM7CP0Q6Of4WyvL6dFe6NoAIqs="
      },
      {
        "virtualPath": "System.Net.WebClient.dll",
        "name": "System.Net.WebClient.teg9mux25c.dll",
        "integrity": "sha256-q6bz8Xo1apLpx6CLrTQ+ql1Cip4ejrzyrKt/64k3/xU="
      },
      {
        "virtualPath": "System.Net.WebHeaderCollection.dll",
        "name": "System.Net.WebHeaderCollection.rrjptq4839.dll",
        "integrity": "sha256-V1UD9Dyxxm9qH6wR5S0vwVkuMO8D820QPoZX0vjMSeE="
      },
      {
        "virtualPath": "System.Net.WebProxy.dll",
        "name": "System.Net.WebProxy.bz82h74hiz.dll",
        "integrity": "sha256-90YsCBTpAflgxEHSMQ1J4+SpmSHvDbkX9P4GqvWbpy4="
      },
      {
        "virtualPath": "System.Net.WebSockets.Client.dll",
        "name": "System.Net.WebSockets.Client.fltlm7gl2s.dll",
        "integrity": "sha256-ExtsPB1BXyYbt3Rrk9ne0NO/MQt5QACQTo3fKCyvwYs="
      },
      {
        "virtualPath": "System.Net.WebSockets.dll",
        "name": "System.Net.WebSockets.y737xq6wsh.dll",
        "integrity": "sha256-8iqmaGKFfxLz5umDRKp64KwJ6EqtPeo6MMvUJ9Cdx9o="
      },
      {
        "virtualPath": "System.Net.dll",
        "name": "System.Net.xvpca5rd9o.dll",
        "integrity": "sha256-84NIc1bghJLorejt4mRiQlyW+QvZtmwjjYn5d9TB3+Q="
      },
      {
        "virtualPath": "System.Numerics.Vectors.dll",
        "name": "System.Numerics.Vectors.w02fczhpfv.dll",
        "integrity": "sha256-AACuNxJZO9iB8xCjQ0noWdFewoxHOFL4pSDBICkdiR0="
      },
      {
        "virtualPath": "System.Numerics.dll",
        "name": "System.Numerics.db55kwtye4.dll",
        "integrity": "sha256-KQ7wwvEqJ3l3HuFYe5KjAD2WJha27r76riVoIcz4rNE="
      },
      {
        "virtualPath": "System.ObjectModel.dll",
        "name": "System.ObjectModel.q6nbrgfuzb.dll",
        "integrity": "sha256-3gp9Ed3wH5XW6/oSt6rSrZl3NI5dvke4BpaGSsdY7To="
      },
      {
        "virtualPath": "System.Private.DataContractSerialization.dll",
        "name": "System.Private.DataContractSerialization.kg88a2cu1m.dll",
        "integrity": "sha256-LFFrCciqpkOXINErmBmLd5QdNkBGl4F5PoAwq4tFgG4="
      },
      {
        "virtualPath": "System.Private.Uri.dll",
        "name": "System.Private.Uri.mqqxgc7ghm.dll",
        "integrity": "sha256-YsqnjyYvquLfv1coBTA5XvLErBDlalhJXgMR0uFndQI="
      },
      {
        "virtualPath": "System.Private.Xml.Linq.dll",
        "name": "System.Private.Xml.Linq.slumy5d2xs.dll",
        "integrity": "sha256-cCp+uqbS0mlQb5KfErd3GE+2kMD+IgRZzdpYPgZKM3w="
      },
      {
        "virtualPath": "System.Private.Xml.dll",
        "name": "System.Private.Xml.k2o4h4v5j7.dll",
        "integrity": "sha256-3MMqKwXpTzEG+zKzqKk6irqhFW4wmyOqWd+8VWCesEs="
      },
      {
        "virtualPath": "System.Reflection.DispatchProxy.dll",
        "name": "System.Reflection.DispatchProxy.gtap7tut4l.dll",
        "integrity": "sha256-BB6z9d/Jx6gDRA7hUN7aum8tIjwpj2iQsyEkTAiWRzY="
      },
      {
        "virtualPath": "System.Reflection.Emit.ILGeneration.dll",
        "name": "System.Reflection.Emit.ILGeneration.bkx7p54b92.dll",
        "integrity": "sha256-q5I1ylLiv9AcPL/xHbZA+oOw+UTweWZHRocGty7D0wc="
      },
      {
        "virtualPath": "System.Reflection.Emit.Lightweight.dll",
        "name": "System.Reflection.Emit.Lightweight.9b15xqf6tr.dll",
        "integrity": "sha256-5W52y9JXkXImF5oATunLCbckbAICdpokbw+FADpb3Xg="
      },
      {
        "virtualPath": "System.Reflection.Emit.dll",
        "name": "System.Reflection.Emit.sd30lp52c4.dll",
        "integrity": "sha256-IBqY4UnrpYIQ2DvD2qAZ+z75YyVFo9ANEqiuAJiR4KY="
      },
      {
        "virtualPath": "System.Reflection.Extensions.dll",
        "name": "System.Reflection.Extensions.e4ue9fzvx7.dll",
        "integrity": "sha256-AjsJwgU89Fe5EAPImuQxMB9elyZqxL7n2zhrq2AeCgM="
      },
      {
        "virtualPath": "System.Reflection.Metadata.dll",
        "name": "System.Reflection.Metadata.akhlfbgksd.dll",
        "integrity": "sha256-KsfycyEIEk4H/FHMxG4+ETbwsFlnJgn40yFePeLdFQs="
      },
      {
        "virtualPath": "System.Reflection.Primitives.dll",
        "name": "System.Reflection.Primitives.igaj5f5stc.dll",
        "integrity": "sha256-sszUPy/pdZhjei6cPYYEYV9euknIM4rhEav+JdJe5zE="
      },
      {
        "virtualPath": "System.Reflection.TypeExtensions.dll",
        "name": "System.Reflection.TypeExtensions.al3ccssv7c.dll",
        "integrity": "sha256-0mazeGj/rXngOLKYM3KICg7LEAnyBR4CPhnAWRzewbw="
      },
      {
        "virtualPath": "System.Reflection.dll",
        "name": "System.Reflection.ejs5gijn52.dll",
        "integrity": "sha256-uqfw5X7R5moVNkoT1KKK9udk+DcFfHNqZ5dHzKxteNI="
      },
      {
        "virtualPath": "System.Resources.Reader.dll",
        "name": "System.Resources.Reader.me9lq68ywv.dll",
        "integrity": "sha256-3lSyNhkm9gpc8nMINHAc7/nXu6S9VutR6/s9Grnvyi0="
      },
      {
        "virtualPath": "System.Resources.ResourceManager.dll",
        "name": "System.Resources.ResourceManager.c9hmtylax0.dll",
        "integrity": "sha256-4NXsNpOm5mUwV71Gz9mOkVhYTGzxBCI4rpJpNVjaqB4="
      },
      {
        "virtualPath": "System.Resources.Writer.dll",
        "name": "System.Resources.Writer.k4a6a0mb83.dll",
        "integrity": "sha256-PB2PU0YodoWOk3hDDzneHT9erHrH3YRMQv0xdUfwCWg="
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.dll",
        "name": "System.Runtime.CompilerServices.Unsafe.ig9f1ylebk.dll",
        "integrity": "sha256-XukimtJ3nDG/v9HAU6n64OZbae23fgDB6PhUmDeAMHk="
      },
      {
        "virtualPath": "System.Runtime.CompilerServices.VisualC.dll",
        "name": "System.Runtime.CompilerServices.VisualC.fdqhzj9e19.dll",
        "integrity": "sha256-w94bVl4x27RKa79jjSwYy2qhFe+82m7P76kjKVDV7zs="
      },
      {
        "virtualPath": "System.Runtime.Extensions.dll",
        "name": "System.Runtime.Extensions.p3unc6chht.dll",
        "integrity": "sha256-JVxwLPVuxwwXRqOTSO7OVUPUnOsDHQcnduW8AD0iRGI="
      },
      {
        "virtualPath": "System.Runtime.Handles.dll",
        "name": "System.Runtime.Handles.8myulp50qx.dll",
        "integrity": "sha256-QGwcSTY5MYfEILXM8y4DWk/PIUxz+NOqJxWI0dvrYik="
      },
      {
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.dll",
        "name": "System.Runtime.InteropServices.RuntimeInformation.16qn69isc5.dll",
        "integrity": "sha256-OY7IAF/EmpJPC5FSwVd9FXhHjT19NstP1KhVFY2SFA4="
      },
      {
        "virtualPath": "System.Runtime.InteropServices.dll",
        "name": "System.Runtime.InteropServices.lr6kejzs0v.dll",
        "integrity": "sha256-v3bmKPa58Kbuafv+KZjZkwtaBAridUHna3HSJmUvkb8="
      },
      {
        "virtualPath": "System.Runtime.Intrinsics.dll",
        "name": "System.Runtime.Intrinsics.uz06oe42wc.dll",
        "integrity": "sha256-duXm5EyuxT73jBz8FQHB6o0RVcVmryIJPY/eOmnYuAQ="
      },
      {
        "virtualPath": "System.Runtime.Loader.dll",
        "name": "System.Runtime.Loader.k0eyiuey72.dll",
        "integrity": "sha256-jJrUmUi82CfEjVWMsfuMu1bxErnUwYpcLMwfNBH3pFk="
      },
      {
        "virtualPath": "System.Runtime.Numerics.dll",
        "name": "System.Runtime.Numerics.spgzwcobee.dll",
        "integrity": "sha256-YE+5Xfs97/QxeJdyxJB9eprpMrUPrSe9KPMCrKdK27I="
      },
      {
        "virtualPath": "System.Runtime.Serialization.Formatters.dll",
        "name": "System.Runtime.Serialization.Formatters.j8kx3dm198.dll",
        "integrity": "sha256-s7tByqoYlZBCiLTfvhx3dYrrncPhSpd1YBQvs+ZcEss="
      },
      {
        "virtualPath": "System.Runtime.Serialization.Json.dll",
        "name": "System.Runtime.Serialization.Json.cp51neodwo.dll",
        "integrity": "sha256-4P3pm2fs15eWqmkReM+D8/H62rxeVYkmCqk6z3z641o="
      },
      {
        "virtualPath": "System.Runtime.Serialization.Primitives.dll",
        "name": "System.Runtime.Serialization.Primitives.m6zbmdxhvs.dll",
        "integrity": "sha256-Iv/GXoZW0biouVHz5wyh1/A8s3y/yUfEnY3/2trpHcQ="
      },
      {
        "virtualPath": "System.Runtime.Serialization.Xml.dll",
        "name": "System.Runtime.Serialization.Xml.ebszl982sa.dll",
        "integrity": "sha256-5ozjLlUrIPbhKUV9bffNzrD1Qii1whcnJXafdDcxSpM="
      },
      {
        "virtualPath": "System.Runtime.Serialization.dll",
        "name": "System.Runtime.Serialization.nw6ofv5hnv.dll",
        "integrity": "sha256-CexDwFvqh+XGidYu0LO+NT9huS512n1WSKZEf0JEBks="
      },
      {
        "virtualPath": "System.Runtime.dll",
        "name": "System.Runtime.wvcgwldoa0.dll",
        "integrity": "sha256-PAkjn8ODgVFwunfjMUTty+jcewLbI052dvyrgtZOZng="
      },
      {
        "virtualPath": "System.Security.AccessControl.dll",
        "name": "System.Security.AccessControl.f1zrq1bh45.dll",
        "integrity": "sha256-I9hYvb6GaQVtDUx1UqbqiKbzXQ77c6qX6RjCCm/B9S0="
      },
      {
        "virtualPath": "System.Security.Claims.dll",
        "name": "System.Security.Claims.caiikp2h4d.dll",
        "integrity": "sha256-FCWw0WX1/jhIA8Bj14jHf3iImtDw390y8GOw3gO79C4="
      },
      {
        "virtualPath": "System.Security.Cryptography.Algorithms.dll",
        "name": "System.Security.Cryptography.Algorithms.6qnbp3efv6.dll",
        "integrity": "sha256-Im7HpyJijuqu4S4ObZDconoI6TCPNN4bMzrxuMSW+Co="
      },
      {
        "virtualPath": "System.Security.Cryptography.Cng.dll",
        "name": "System.Security.Cryptography.Cng.wqfkzyh551.dll",
        "integrity": "sha256-uKd5JlGCvGN3r6xPGenPrIOOtgnFgfH6KR5S2TzMWzE="
      },
      {
        "virtualPath": "System.Security.Cryptography.Csp.dll",
        "name": "System.Security.Cryptography.Csp.nsp12nkgde.dll",
        "integrity": "sha256-13ZvrDSrmfRZvyJrtH/3XHgWewpRLoVGk5HyglCrRd8="
      },
      {
        "virtualPath": "System.Security.Cryptography.Encoding.dll",
        "name": "System.Security.Cryptography.Encoding.gnj5sjwy5b.dll",
        "integrity": "sha256-vDqzgALxSNsbagDVEcRRCwKHKl0lBMSTaNqn1byhXH8="
      },
      {
        "virtualPath": "System.Security.Cryptography.OpenSsl.dll",
        "name": "System.Security.Cryptography.OpenSsl.nmf20znnpp.dll",
        "integrity": "sha256-n1eVbGKkbDkXYN/DIYhEsdPkg+tT0w9jFFzmQsDE0iA="
      },
      {
        "virtualPath": "System.Security.Cryptography.Primitives.dll",
        "name": "System.Security.Cryptography.Primitives.omndu81kyq.dll",
        "integrity": "sha256-4MbFj9xMrSBU4+59bwULdtniBvYMtif65iKwS5ErSjc="
      },
      {
        "virtualPath": "System.Security.Cryptography.X509Certificates.dll",
        "name": "System.Security.Cryptography.X509Certificates.0n4lutvea3.dll",
        "integrity": "sha256-RBOLUL7ysHPZI9DJawts+dTWuaJVCQ35fn7rt1FAg+w="
      },
      {
        "virtualPath": "System.Security.Cryptography.dll",
        "name": "System.Security.Cryptography.zs0cfrhfs2.dll",
        "integrity": "sha256-7eUtBUulgvH28c9KVla3OqheQGas3vlTZnExr/dFwEA="
      },
      {
        "virtualPath": "System.Security.Principal.Windows.dll",
        "name": "System.Security.Principal.Windows.mwga4c314q.dll",
        "integrity": "sha256-6ueKCDPih+7IOvhDtg/D/AmMxb07vU5yTGs1xmnvAwA="
      },
      {
        "virtualPath": "System.Security.Principal.dll",
        "name": "System.Security.Principal.n9w4wl9b25.dll",
        "integrity": "sha256-pZ+uypJQNSjYx3gHhYZDxvwmCKgVb68GB6nyk1E64ew="
      },
      {
        "virtualPath": "System.Security.SecureString.dll",
        "name": "System.Security.SecureString.1llnpl0uty.dll",
        "integrity": "sha256-+4UepHyCZ+iECOTzJO6KS6bYVPJbBkkQLCcUYkkMxMc="
      },
      {
        "virtualPath": "System.Security.dll",
        "name": "System.Security.yhnz1d5jv6.dll",
        "integrity": "sha256-Spnh3ZBBKCLE2oX0VdNJLQBTs9BiZeD6ohq25O/9+nc="
      },
      {
        "virtualPath": "System.ServiceModel.Web.dll",
        "name": "System.ServiceModel.Web.2xre73vrlg.dll",
        "integrity": "sha256-KnipO6aWVrGGMfTa3XDuIjHe2ITrTu6bGocpEFZH+JQ="
      },
      {
        "virtualPath": "System.ServiceProcess.dll",
        "name": "System.ServiceProcess.phbs95sofh.dll",
        "integrity": "sha256-0zlBjw0zxETDCfdd4pTROk9re+HfUHCKUbCZKO+Ots4="
      },
      {
        "virtualPath": "System.Text.Encoding.CodePages.dll",
        "name": "System.Text.Encoding.CodePages.alrdd1p8zi.dll",
        "integrity": "sha256-EtII2mWezZi4wdIgnddpCwau9HFZCXHDPLo0Mbd+o30="
      },
      {
        "virtualPath": "System.Text.Encoding.Extensions.dll",
        "name": "System.Text.Encoding.Extensions.gjf01q6ybi.dll",
        "integrity": "sha256-VIg/LOb0ie241vV+Xi5Tc7l6Jc2SVa+y78N3aEtOSkM="
      },
      {
        "virtualPath": "System.Text.Encoding.dll",
        "name": "System.Text.Encoding.uh55ob0fi4.dll",
        "integrity": "sha256-7nA4oYY1fYm2wN47Qmwdn1q4uwwVvAyBHgByo41roo4="
      },
      {
        "virtualPath": "System.Text.Encodings.Web.dll",
        "name": "System.Text.Encodings.Web.16umoprgvv.dll",
        "integrity": "sha256-OQ5nsi7RfztdGUiV97QWbbl9NsZsxxetXG9Eu/MXOSY="
      },
      {
        "virtualPath": "System.Text.Json.dll",
        "name": "System.Text.Json.50zc7coxfw.dll",
        "integrity": "sha256-NROr7lWPUvMq1w8qF1kkUgBgwNHTeV0HdNojco/YFGo="
      },
      {
        "virtualPath": "System.Text.RegularExpressions.dll",
        "name": "System.Text.RegularExpressions.3tqamywdpe.dll",
        "integrity": "sha256-N4RxXeYdUlUhh2mkYWFb+nTQfG7DE8l5gRVidc/4DUo="
      },
      {
        "virtualPath": "System.Threading.AccessControl.dll",
        "name": "System.Threading.AccessControl.hx4dvwvd65.dll",
        "integrity": "sha256-y3YxxpTjI4DGN1xhwIxLH3oB7+c3vOwJHaD8NQq6QN4="
      },
      {
        "virtualPath": "System.Threading.Channels.dll",
        "name": "System.Threading.Channels.yweqtqdpga.dll",
        "integrity": "sha256-AsPubyG8VWlYUzsnTG0De+cWXxOAuYFnU9Zldp3OQTY="
      },
      {
        "virtualPath": "System.Threading.Overlapped.dll",
        "name": "System.Threading.Overlapped.ye4sq85or8.dll",
        "integrity": "sha256-Ws+/JITvn+dvzLy2tZ646wp3vm4LilKNoZF95BIUlcw="
      },
      {
        "virtualPath": "System.Threading.Tasks.Dataflow.dll",
        "name": "System.Threading.Tasks.Dataflow.wknxbdhj0a.dll",
        "integrity": "sha256-YPs8p+k1yVOdlyx7nKJ8EsdZtvrKr4jP849mIVEaNM8="
      },
      {
        "virtualPath": "System.Threading.Tasks.Extensions.dll",
        "name": "System.Threading.Tasks.Extensions.hhuklddvll.dll",
        "integrity": "sha256-qw/GcVsVX+OI1cKT6QJrsXDecWlw5L0TyC3OflzFSSQ="
      },
      {
        "virtualPath": "System.Threading.Tasks.Parallel.dll",
        "name": "System.Threading.Tasks.Parallel.h5pnmp1fc2.dll",
        "integrity": "sha256-63aYJNeKsU2omZLgVsWjBAeYgqPcPzn8TLithspaPy8="
      },
      {
        "virtualPath": "System.Threading.Tasks.dll",
        "name": "System.Threading.Tasks.ryxygbmgvf.dll",
        "integrity": "sha256-jaPdN6VdKWjRKgAs50Q2Wn+Yuf4N/0XXgnc6c1sOmgc="
      },
      {
        "virtualPath": "System.Threading.Thread.dll",
        "name": "System.Threading.Thread.d7wntbwneo.dll",
        "integrity": "sha256-yQtFRhtubz4DTPVRB+0TIYcUnDTCwind7/eU1CuEIT8="
      },
      {
        "virtualPath": "System.Threading.ThreadPool.dll",
        "name": "System.Threading.ThreadPool.oejv505pvw.dll",
        "integrity": "sha256-ACnF5xnGhV1CY01NQ7wDWWVDLNQqqDPwL6sAFFFZnWY="
      },
      {
        "virtualPath": "System.Threading.Timer.dll",
        "name": "System.Threading.Timer.2yrzdx0kvu.dll",
        "integrity": "sha256-Oskp66sQwaxVY+lPviEONBBu/fAQgCoQ6lxdmB321nA="
      },
      {
        "virtualPath": "System.Threading.dll",
        "name": "System.Threading.i88uh92a38.dll",
        "integrity": "sha256-zmWXQ8VOYazYPlkf9PISal5l8ulVQPcxNyp2dqZHAtc="
      },
      {
        "virtualPath": "System.Transactions.Local.dll",
        "name": "System.Transactions.Local.01xm0yoqxk.dll",
        "integrity": "sha256-tBjX9WHBe3BrsgqbMqlF6FouY+ySONRTcO2G8mSaGmc="
      },
      {
        "virtualPath": "System.Transactions.dll",
        "name": "System.Transactions.dabbvmanh7.dll",
        "integrity": "sha256-5QQo0g0LLAFD36fnqnMm71X0Mk9YCS1zFYYVgj8pHCY="
      },
      {
        "virtualPath": "System.ValueTuple.dll",
        "name": "System.ValueTuple.sysgnnarc1.dll",
        "integrity": "sha256-pInFb1JHWfd5umpxgTlopYIjs+ecM2fQxygSCZIo2X0="
      },
      {
        "virtualPath": "System.Web.HttpUtility.dll",
        "name": "System.Web.HttpUtility.nblabbmmdb.dll",
        "integrity": "sha256-jZ7bxNH6nzmhgRvLkIpUzKxOCGKEZylBhH1conQuZjc="
      },
      {
        "virtualPath": "System.Web.dll",
        "name": "System.Web.1qfc6uxhvq.dll",
        "integrity": "sha256-Z9cT2HZWtLOlcPh3Tm2miArFbnyd/D/ik5VLLehIaGI="
      },
      {
        "virtualPath": "System.Windows.dll",
        "name": "System.Windows.nlwcfd17gf.dll",
        "integrity": "sha256-9Tw9jzd8GiyQP99YyBkUazJ7uNzALevGSyo9tOMjFPQ="
      },
      {
        "virtualPath": "System.Xml.Linq.dll",
        "name": "System.Xml.Linq.2gxyrie8tt.dll",
        "integrity": "sha256-0kAi5Bilno4A9LgDYsc7L1C/RyZWzLovq2cDKwDWqZA="
      },
      {
        "virtualPath": "System.Xml.ReaderWriter.dll",
        "name": "System.Xml.ReaderWriter.wemg4uw2g6.dll",
        "integrity": "sha256-iO5XSrlR/Dz4XfeFIo9pkaaaVQOvqBro+YQJRH7RmzA="
      },
      {
        "virtualPath": "System.Xml.Serialization.dll",
        "name": "System.Xml.Serialization.ngu9myld5d.dll",
        "integrity": "sha256-ic98FPJjxpeizzPkQeL/PA8MtDlXGICtisueEtg2+h8="
      },
      {
        "virtualPath": "System.Xml.XDocument.dll",
        "name": "System.Xml.XDocument.nrsc2pookt.dll",
        "integrity": "sha256-o+LtpIZ6ps42pAvKdoOATzODBrXy6ZbkJtVpUsHu0S8="
      },
      {
        "virtualPath": "System.Xml.XPath.XDocument.dll",
        "name": "System.Xml.XPath.XDocument.nl8n8wiuhn.dll",
        "integrity": "sha256-tUzmoHLACe+a0cFhOqKJN0UJtLGJrz0Eg/eOzuilzwg="
      },
      {
        "virtualPath": "System.Xml.XPath.dll",
        "name": "System.Xml.XPath.r7rebvryvy.dll",
        "integrity": "sha256-R3hwRpmmJacZy/ax+E3OSn1DIkfqz6gIOTaQHlP9wHE="
      },
      {
        "virtualPath": "System.Xml.XmlDocument.dll",
        "name": "System.Xml.XmlDocument.3rzk563v66.dll",
        "integrity": "sha256-ASHsv7m2NwClTtEKNRhrcIdDKq0SEYrGfObDNYbTSgw="
      },
      {
        "virtualPath": "System.Xml.XmlSerializer.dll",
        "name": "System.Xml.XmlSerializer.vtclj6evcp.dll",
        "integrity": "sha256-zWCNSw5g27bBQ0DTflA1VaIrUC/cht+AkMWLhuWaU3Y="
      },
      {
        "virtualPath": "System.Xml.dll",
        "name": "System.Xml.w4xkye1wd6.dll",
        "integrity": "sha256-wE63eqBXbA5ppuo6g3v7bFuBPKRO+DevyJvKLDCZmmY="
      },
      {
        "virtualPath": "System.dll",
        "name": "System.g9j467b80v.dll",
        "integrity": "sha256-hCw7b04HYKoSUPa86DSDe3/oJLmUixXAqKeAaF9gh5A="
      },
      {
        "virtualPath": "WindowsBase.dll",
        "name": "WindowsBase.xw65fcxetm.dll",
        "integrity": "sha256-QWHhbNusYQokRDYFLy04HzlFjdb0popnJysopAjUIao="
      },
      {
        "virtualPath": "mscorlib.dll",
        "name": "mscorlib.x9y4exl2y6.dll",
        "integrity": "sha256-hUj81G62M4wS6ojkrFO1mQcBv9lRh/iYCYnUoz+mNyw="
      },
      {
        "virtualPath": "netstandard.dll",
        "name": "netstandard.jw8s6pib5q.dll",
        "integrity": "sha256-7TlfW6FhNpHLJuT4gVxkfIjBSh9ygOHN404pyXaZe4k="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.dll",
        "name": "Microsoft.AspNetCore.Components.qnz58dugma.dll",
        "integrity": "sha256-OoDu2orquxzG7MtYxHaL9aNpr9nEFgt/bwLf961EJ34="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.dll",
        "name": "Microsoft.AspNetCore.Components.Forms.d0wh751wep.dll",
        "integrity": "sha256-s5ih7whlCbfPlzT9Y7Ky1YtG1E4Jc3OUgIqQjphMn0U="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.Web.dll",
        "name": "Microsoft.AspNetCore.Components.Web.v0quvpo0zf.dll",
        "integrity": "sha256-wR3tqZ/XpC75YbufCxcteQBX9y0bsopKHqkJfZ2zt4Q="
      },
      {
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.dll",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.dkbhkflgkn.dll",
        "integrity": "sha256-MytzNFzOCL3eYTQxQtFyf5a7sf6d2+adMLQHP9PgPpQ="
      },
      {
        "virtualPath": "Microsoft.Extensions.Validation.dll",
        "name": "Microsoft.Extensions.Validation.wfatzg0mke.dll",
        "integrity": "sha256-5GKqw6ZNUJedySATMRm7McggusO8K3q516IwKXMKeRg="
      },
      {
        "virtualPath": "Microsoft.JSInterop.dll",
        "name": "Microsoft.JSInterop.ve1qfp6go0.dll",
        "integrity": "sha256-WaMcFE5reaW6dpGRoInzbM7UPGVr3ZLaTmv1htUdBPg="
      },
      {
        "virtualPath": "Microsoft.JSInterop.WebAssembly.dll",
        "name": "Microsoft.JSInterop.WebAssembly.79or95i6ri.dll",
        "integrity": "sha256-izB3WO+js38wLgp2qh8y4q3N+qr/KkPJjH8zwrzjfi4="
      },
      {
        "virtualPath": "StandaloneApp.dll",
        "name": "StandaloneApp.nlrolvalvf.dll",
        "integrity": "sha256-RW3NNVXWaHGdQnNVyXXL7PjBJYuusRfy+uSW84N0v20="
      }
    ],
  },
  "debugLevel": -1,
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
