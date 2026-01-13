//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.
//! This is generated file, see src/native/rollup.config.js


var GitHash = "4e8a3a79d90f3b8e7600ee6315bd2b858c4f9128";

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

var BuildConfiguration = "Release";

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const JSHandleDisposed = -1;
const JSHandleNull = 0;
const GCHandleNull = 0;
const GCHandleInvalid = -1;
const JavaScriptMarshalerArgSize = 32;
const JSMarshalerTypeSize = 32;
const JSMarshalerSignatureHeaderSize = 4 * 8; // without Exception and Result

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const jsInteropState = {
    isPendingSynchronousCall: false,
    proxyGCHandle: undefined,
    cspPolicy: false,
    isInitialized: false,
    enablePerfMeasure: false,
    managedThreadTID: 0,
};
const csToJsMarshalers = new Map();
const jsToCsMarshalers = new Map();
const jsinteropDoc = "For more information see https://aka.ms/dotnet-wasm-jsinterop";
function getMarshalerToCsByType(marshalerType) {
    if (marshalerType === 0 /* MarshalerType.None */ || marshalerType === 1 /* MarshalerType.Void */) {
        return undefined;
    }
    const converter = jsToCsMarshalers.get(marshalerType);
    if (!(converter && typeof converter === "function")) throw new Error(`Assert failed: ERR30: Unknown converter for type ${marshalerType}`); // inlined fastCheck
    return converter;
}
function getMarshalerToJsByType(marshalerType) {
    if (marshalerType === 0 /* MarshalerType.None */ || marshalerType === 1 /* MarshalerType.Void */) {
        return undefined;
    }
    const converter = csToJsMarshalers.get(marshalerType);
    if (!(converter && typeof converter === "function")) throw new Error(`Assert failed: ERR41: Unknown converter for type ${marshalerType}. ${jsinteropDoc}`); // inlined fastCheck
    return converter;
}
function allocStackFrame(size) {
    const bytes = JavaScriptMarshalerArgSize * size;
    const args = Module.stackAlloc(bytes);
    dotnetBrowserUtilsExports.zeroRegion(args, bytes);
    setArgsContext(args);
    return args;
}
function getArg(args, index) {
    dotnetAssert.check(args, "Null args");
    return args + (index * JavaScriptMarshalerArgSize);
}
function isArgsException(args) {
    dotnetAssert.check(args, "Null args");
    const exceptionType = getArgType(args);
    return exceptionType !== 0 /* MarshalerType.None */;
}
function isReceiverShouldFree(args) {
    dotnetAssert.check(args, "Null args");
    return dotnetApi.getHeapB8(args + 20 /* JSMarshalerArgumentOffsets.ReceiverShouldFree */);
}
function getSyncDoneSemaphorePtr(args) {
    dotnetAssert.check(args, "Null args");
    return dotnetApi.getHeapU32(args + 28 /* JSMarshalerArgumentOffsets.SyncDoneSemaphorePtr */);
}
function getCallerNativeTid(args) {
    dotnetAssert.check(args, "Null args");
    return dotnetApi.getHeapI32(args + 24 /* JSMarshalerArgumentOffsets.CallerNativeTID */);
}
function setReceiverShouldFree(args) {
    dotnetApi.setHeapB8(args + 20 /* JSMarshalerArgumentOffsets.ReceiverShouldFree */, true);
}
function setArgsContext(args) {
    dotnetAssert.check(args, "Null args");
    const exc = getArg(args, 0);
    const res = getArg(args, 1);
    setArgProxyContext(exc);
    setArgProxyContext(res);
}
function getSig(signature, index) {
    dotnetAssert.check(signature, "Null signatures");
    return signature + (index * JSMarshalerTypeSize) + JSMarshalerSignatureHeaderSize;
}
function getSignatureType(sig) {
    dotnetAssert.check(sig, "Null sig");
    return dotnetApi.getHeapU8(sig + 0 /* JSBindingTypeOffsets.Type */);
}
function getSignatureResType(sig) {
    dotnetAssert.check(sig, "Null sig");
    return dotnetApi.getHeapU8(sig + 16 /* JSBindingTypeOffsets.ResultMarshalerType */);
}
function getSignatureArg1Type(sig) {
    dotnetAssert.check(sig, "Null sig");
    return dotnetApi.getHeapU8(sig + 20 /* JSBindingTypeOffsets.Arg1MarshalerType */);
}
function getSignatureArg2Type(sig) {
    dotnetAssert.check(sig, "Null sig");
    return dotnetApi.getHeapU8(sig + 24 /* JSBindingTypeOffsets.Arg2MarshalerType */);
}
function getSignatureArg3Type(sig) {
    dotnetAssert.check(sig, "Null sig");
    return dotnetApi.getHeapU8(sig + 28 /* JSBindingTypeOffsets.Arg3MarshalerType */);
}
function getSignatureArgumentCount(signature) {
    dotnetAssert.check(signature, "Null signatures");
    return dotnetApi.getHeapI32(signature + 4 /* JSBindingHeaderOffsets.ArgumentCount */);
}
function getSignatureVersion(signature) {
    dotnetAssert.check(signature, "Null signatures");
    return dotnetApi.getHeapI32(signature + 0 /* JSBindingHeaderOffsets.Version */);
}
function getSignatureHandle(signature) {
    dotnetAssert.check(signature, "Null signatures");
    return dotnetApi.getHeapI32(signature + 8 /* JSBindingHeaderOffsets.ImportHandle */);
}
function getSignatureFunctionName(signature) {
    dotnetAssert.check(signature, "Null signatures");
    const functionNameOffset = dotnetApi.getHeapI32(signature + 16 /* JSBindingHeaderOffsets.FunctionNameOffset */);
    if (functionNameOffset === 0)
        return null;
    const functionNameLength = dotnetApi.getHeapI32(signature + 20 /* JSBindingHeaderOffsets.FunctionNameLength */);
    dotnetAssert.check(functionNameOffset, "Null name");
    return dotnetBrowserUtilsExports.utf16ToString(signature + functionNameOffset, signature + functionNameOffset + functionNameLength);
}
function getSignatureModuleName(signature) {
    dotnetAssert.check(signature, "Null signatures");
    const moduleNameOffset = dotnetApi.getHeapI32(signature + 24 /* JSBindingHeaderOffsets.ModuleNameOffset */);
    if (moduleNameOffset === 0)
        return null;
    const moduleNameLength = dotnetApi.getHeapI32(signature + 28 /* JSBindingHeaderOffsets.ModuleNameLength */);
    return dotnetBrowserUtilsExports.utf16ToString(signature + moduleNameOffset, signature + moduleNameOffset + moduleNameLength);
}
function getSigType(sig) {
    dotnetAssert.check(sig, "Null signatures");
    return dotnetApi.getHeapU8(sig);
}
function getArgType(arg) {
    dotnetAssert.check(arg, "Null arg");
    const type = dotnetApi.getHeapU8(arg + 12 /* JSMarshalerArgumentOffsets.Type */);
    return type;
}
function getArgElementType(arg) {
    dotnetAssert.check(arg, "Null arg");
    const type = dotnetApi.getHeapU8(arg + 13 /* JSMarshalerArgumentOffsets.ElementType */);
    return type;
}
function setArgType(arg, type) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapU8(arg + 12 /* JSMarshalerArgumentOffsets.Type */, type);
}
function setArgElementType(arg, type) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapU8(arg + 13 /* JSMarshalerArgumentOffsets.ElementType */, type);
}
function getArgBool(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapB8(arg);
}
function getArgU8(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapU8(arg);
}
function getArgU16(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapU16(arg);
}
function getArgI16(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI16(arg);
}
function getArgI32(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI32(arg);
}
function getArgIntptr(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapU32(arg);
}
function getArgI52(arg) {
    dotnetAssert.check(arg, "Null arg");
    // we know that the range check and conversion from Int64 was be done on C# side
    return dotnetApi.getHeapF64(arg);
}
function getArgI64Big(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI64Big(arg);
}
function getArgDate(arg) {
    dotnetAssert.check(arg, "Null arg");
    const unixTime = dotnetApi.getHeapF64(arg);
    const date = new Date(unixTime);
    return date;
}
function getArgF32(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapF32(arg);
}
function getArgF64(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapF64(arg);
}
function setArgBool(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    if (!(typeof value === "boolean")) throw new Error(`Assert failed: Value is not a Boolean: ${value} (${typeof (value)})`); // inlined fastCheck
    dotnetApi.setHeapB8(arg, value);
}
function setArgU8(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapU8(arg, value);
}
function setArgU16(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapU16(arg, value);
}
function setArgI16(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI16(arg, value);
}
function setArgI32(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI32(arg, value);
}
function setArgIntptr(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapU32(arg, value);
}
function setArgI52(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    if (!(Number.isSafeInteger(value))) throw new Error(`Assert failed: Value is not an integer: ${value} (${typeof (value)})`); // inlined fastCheck
    // we know that conversion to Int64 would be done on C# side
    dotnetApi.setHeapF64(arg, value);
}
function setArgI64Big(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI64Big(arg, value);
}
function setArgDate(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    // getTime() is always UTC
    const unixTime = value.getTime();
    dotnetApi.setHeapF64(arg, unixTime);
}
function setArgF64(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapF64(arg, value);
}
function setArgF32(arg, value) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapF32(arg, value);
}
function getArgJsHandle(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI32(arg + 4 /* JSMarshalerArgumentOffsets.JSHandle */);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setArgProxyContext(arg) {
    /*TODO-WASM threads only
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI32(<any>arg + JSMarshalerArgumentOffsets.ContextHandle, <any>jsInteropState.proxyGCHandle);
    */
}
function setJsHandle(arg, jsHandle) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI32(arg + 4 /* JSMarshalerArgumentOffsets.JSHandle */, jsHandle);
    setArgProxyContext(arg);
}
function getArgGcHandle(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI32(arg + 4 /* JSMarshalerArgumentOffsets.GCHandle */);
}
function setGcHandle(arg, gcHandle) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI32(arg + 4 /* JSMarshalerArgumentOffsets.GCHandle */, gcHandle);
    setArgProxyContext(arg);
}
function getArgLength(arg) {
    dotnetAssert.check(arg, "Null arg");
    return dotnetApi.getHeapI32(arg + 8 /* JSMarshalerArgumentOffsets.Length */);
}
function setArgLength(arg, size) {
    dotnetAssert.check(arg, "Null arg");
    dotnetApi.setHeapI32(arg + 8 /* JSMarshalerArgumentOffsets.Length */, size);
}
function getSignatureMarshaler(signature, index) {
    dotnetAssert.check(signature, "Null signatures");
    const sig = getSig(signature, index);
    return dotnetApi.getHeapU32(sig + 8 /* JSBindingHeaderOffsets.ImportHandle */);
}
function arrayElementSize(elementType) {
    return elementType == 4 /* MarshalerType.Byte */ ? 1
        : elementType == 7 /* MarshalerType.Int32 */ ? 4
            : elementType == 8 /* MarshalerType.Int52 */ ? 8
                : elementType == 10 /* MarshalerType.Double */ ? 8
                    : elementType == 15 /* MarshalerType.String */ ? JavaScriptMarshalerArgSize
                        : elementType == 14 /* MarshalerType.Object */ ? JavaScriptMarshalerArgSize
                            : elementType == 13 /* MarshalerType.JSObject */ ? JavaScriptMarshalerArgSize
                                : -1;
}

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
function fixupPointer(signature, shiftAmount) {
    return (signature >>> shiftAmount);
}
function normalizeException(ex) {
    let res = "unknown exception";
    if (ex) {
        res = ex.toString();
        const stack = ex.stack;
        if (stack) {
            // Some JS runtimes insert the error message at the top of the stack, some don't,
            //  so normalize it by using the stack as the result if it already contains the error
            if (stack.startsWith(res))
                res = stack;
            else
                res += "\n" + stack;
        }
        if (dotnetDiagnosticsExports.symbolicateStackTrace) {
            res = dotnetDiagnosticsExports.symbolicateStackTrace(res);
        }
    }
    return res;
}
function isRuntimeRunning() {
    return dotnetLoaderExports.isRuntimeRunning();
}
function assertRuntimeRunning() {
    dotnetAssert.check(isRuntimeRunning(), "The runtime is not running.");
}
function assertJsInterop() {
    dotnetAssert.check(isRuntimeRunning() && jsInteropState.isInitialized, "The runtime is not running.");
}
function startMeasure() {
    if (jsInteropState.enablePerfMeasure) {
        return globalThis.performance.now();
    }
    return undefined;
}
function endMeasure(start, block, id) {
    if (jsInteropState.enablePerfMeasure && start) {
        // API is slightly different between web and Nodejs
        const options = ENVIRONMENT_IS_WEB
            ? { start: start }
            : { startTime: start };
        const name = id ? `${block}${id} ` : block;
        globalThis.performance.measure(name, options);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const useWeakRef = typeof globalThis.WeakRef === "function";
function createWeakRef(jsObj) {
    if (useWeakRef) {
        return new WeakRef(jsObj);
    }
    else {
        // this is trivial WeakRef replacement, which holds strong reference, instead of weak one, when the browser doesn't support it
        return createStrongRef(jsObj);
    }
}
function createStrongRef(jsObj) {
    return {
        deref: () => {
            return jsObj;
        },
        dispose: () => {
            jsObj = null;
        }
    };
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function getManagedStackTrace(exceptionGCHandle) {
    assertRuntimeRunning();
    const sp = Module.stackSave();
    try {
        const size = 3;
        const args = allocStackFrame(size);
        const arg1 = getArg(args, 2);
        setArgType(arg1, 16 /* MarshalerType.Exception */);
        setGcHandle(arg1, exceptionGCHandle);
        dotnetInteropJSExports.SystemInteropJS_GetManagedStackTrace(args);
        const res = getArg(args, 1);
        return marshalStringToJs(res);
    }
    finally {
        if (isRuntimeRunning())
            Module.stackRestore(sp);
    }
}
function releaseJsOwnedObjectByGcHandle(gcHandle) {
    dotnetAssert.check(gcHandle, "Must be valid gcHandle");
    assertRuntimeRunning();
    const sp = Module.stackSave();
    try {
        const size = 3;
        const args = allocStackFrame(size);
        const arg1 = getArg(args, 2);
        setArgType(arg1, 14 /* MarshalerType.Object */);
        setGcHandle(arg1, gcHandle);
        // this must stay synchronous for freeGcvHandle sake, to not use-after-free
        // also on JSWebWorker, because the message could arrive after the worker is terminated and the GCHandle of JSProxyContext is already freed
        dotnetInteropJSExports.SystemInteropJS_ReleaseJSOwnedObjectByGCHandle(args);
    }
    finally {
        if (isRuntimeRunning())
            Module.stackRestore(sp);
    }
}
function callDelegate(callbackGcHandle, arg1Js, arg2Js, arg3Js, resConverter, arg1Converter, arg2Converter, arg3Converter) {
    assertRuntimeRunning();
    const sp = Module.stackSave();
    try {
        const size = 6;
        const args = allocStackFrame(size);
        const arg1 = getArg(args, 2);
        setArgType(arg1, 14 /* MarshalerType.Object */);
        setGcHandle(arg1, callbackGcHandle);
        // payload arg numbers are shifted by one, the real first is a gcHandle of the callback
        if (arg1Converter) {
            const arg2 = getArg(args, 3);
            arg1Converter(arg2, arg1Js);
        }
        if (arg2Converter) {
            const arg3 = getArg(args, 4);
            arg2Converter(arg3, arg2Js);
        }
        if (arg3Converter) {
            const arg4 = getArg(args, 5);
            arg3Converter(arg4, arg3Js);
        }
        dotnetInteropJSExports.SystemInteropJS_CallDelegate(args);
        if (isArgsException(args)) {
            const exc = getArg(args, 0);
            throw marshalExceptionToJs(exc);
        }
        if (resConverter) {
            const res = getArg(args, 1);
            return resConverter(res);
        }
    }
    finally {
        if (isRuntimeRunning())
            Module.stackRestore(sp);
    }
}
function completeTask(holderGcHandle, error, data, resConverter) {
    assertRuntimeRunning();
    const sp = Module.stackSave();
    try {
        const size = 5;
        const args = allocStackFrame(size);
        const arg1 = getArg(args, 2);
        setArgType(arg1, 14 /* MarshalerType.Object */);
        setGcHandle(arg1, holderGcHandle);
        const arg2 = getArg(args, 3);
        if (error) {
            marshalExceptionToCs(arg2, error);
        }
        else {
            setArgType(arg2, 0 /* MarshalerType.None */);
            const arg3 = getArg(args, 4);
            dotnetAssert.check(resConverter, "resConverter missing");
            resConverter(arg3, data);
        }
        dotnetInteropJSExports.SystemInteropJS_CompleteTask(args);
    }
    finally {
        if (isRuntimeRunning())
            Module.stackRestore(sp);
    }
}
function bindAssemblyExports(assemblyName) {
    assertRuntimeRunning();
    const sp = Module.stackSave();
    try {
        const size = 3;
        const args = allocStackFrame(size);
        const res = getArg(args, 1);
        const arg1 = getArg(args, 2);
        marshalStringToCs(arg1, assemblyName);
        // because this is async, we could pre-allocate the promise
        let promise = beginMarshalTaskToJs(res, 30 /* MarshalerType.TaskPreCreated */);
        dotnetInteropJSExports.SystemInteropJS_BindAssemblyExports(args);
        if (isArgsException(args)) {
            // TODO free pre-created promise
            const exc = getArg(args, 0);
            throw marshalExceptionToJs(exc);
        }
        // in case the C# side returned synchronously
        promise = endMarshalTaskToJs(args, marshalInt32ToJs, promise);
        if (promise === null || promise === undefined) {
            promise = Promise.resolve();
        }
        return promise;
    }
    finally {
        // synchronously
        if (isRuntimeRunning())
            Module.stackRestore(sp);
    }
}
function invokeJSExport(methodHandle, args) {
    assertJsInterop();
    dotnetInteropJSExports.SystemInteropJS_CallJSExport(methodHandle, args);
    if (isArgsException(args)) {
        const exc = getArg(args, 0);
        throw marshalExceptionToJs(exc);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const boundCsFunctionSymbol = Symbol.for("wasm bound_cs_function");
const boundJsFunctionSymbol = Symbol.for("wasm bound_js_function");
const importedJsFunctionSymbol = Symbol.for("wasm imported_js_function");
const proxyDebugSymbol = Symbol.for("wasm proxyDebug");
const promiseHolderSymbol = Symbol.for("wasm promise_holder");
let forceDisposeProxiesInProgress = false;
const useFinalizationRegistry = typeof globalThis.FinalizationRegistry === "function";
let jsOwnedObjectRegistry;
// this is array, not map. We maintain list of gaps in _JsHandleFreeList so that it could be as compact as possible
// 0th element is always null, because JSHandle == 0 is invalid handle.
const _CsOwnedObjectsByJsHandle = [null];
const _CsOwnedObjectsByJsvHandle = [null];
const _JsHandleFreeList = [];
let _nextJSHandle = 1;
const jsOwnedObjectTable = new Map();
const _GcvHandleFreeList = [];
let nextGcvHandle = -2;
const jsImportWrapperByFnHandle = [null]; // 0th slot is dummy, main thread we free them on shutdown. On web worker thread we free them when worker is detached.
const exportsByAssembly = new Map();
// GCVHandle is like GCHandle, but it's not tracked and allocated by the coreCLR GC, but just by JS.
// It's used when we need to create GCHandle-like identity ahead of time, before calling coreCLR.
// they have negative values, so that they don't collide with GCHandles.
function allocGcvHandle() {
    const gcvHandle = _GcvHandleFreeList.length ? _GcvHandleFreeList.pop() : nextGcvHandle--;
    return gcvHandle;
}
function freeGcvHandle(gcvHandle) {
    _GcvHandleFreeList.push(gcvHandle);
}
function isJsvHandle(jsHandle) {
    return jsHandle < -1;
}
function isJsHandle(jsHandle) {
    return jsHandle > 0;
}
function isGcvHandle(gcHandle) {
    return gcHandle < -1;
}
// NOTE: FinalizationRegistry and WeakRef are missing on Safari below 14.1
if (useFinalizationRegistry) {
    jsOwnedObjectRegistry = new globalThis.FinalizationRegistry(_jsOwnedObjectFinalized);
}
const jsOwnedGcHandleSymbol = Symbol.for("wasm jsOwnedGcHandle");
const csOwnedJsHandleSymbol = Symbol.for("wasm cs_owned_jsHandle");
const doNotForceDispose = Symbol.for("wasm doNotForceDispose");
function getJSObjectFromJSHandle(jsHandle) {
    if (isJsHandle(jsHandle))
        return _CsOwnedObjectsByJsHandle[jsHandle];
    if (isJsvHandle(jsHandle))
        return _CsOwnedObjectsByJsvHandle[0 - jsHandle];
    return null;
}
function getJsHandleFromJSObject(jsObj) {
    assertJsInterop();
    if (jsObj[csOwnedJsHandleSymbol]) {
        return jsObj[csOwnedJsHandleSymbol];
    }
    const jsHandle = _JsHandleFreeList.length ? _JsHandleFreeList.pop() : _nextJSHandle++;
    // note _cs_owned_objects_by_jsHandle is list, not Map. That's why we maintain _jsHandle_free_list.
    _CsOwnedObjectsByJsHandle[jsHandle] = jsObj;
    if (Object.isExtensible(jsObj)) {
        const isPrototype = typeof jsObj === "function" && Object.prototype.hasOwnProperty.call(jsObj, "prototype");
        if (!isPrototype) {
            jsObj[csOwnedJsHandleSymbol] = jsHandle;
        }
    }
    // else
    //   The consequence of not adding the csOwnedJsHandleSymbol is, that we could have multiple JSHandles and multiple proxy instances.
    //   Throwing exception would prevent us from creating any proxy of non-extensible things.
    //   If we have weakmap instead, we would pay the price of the lookup for all proxies, not just non-extensible objects.
    return jsHandle;
}
function registerWithJsvHandle(jsObj, jsvHandle) {
    assertJsInterop();
    // note _cs_owned_objects_by_jsHandle is list, not Map. That's why we maintain _jsHandle_free_list.
    _CsOwnedObjectsByJsvHandle[0 - jsvHandle] = jsObj;
    if (Object.isExtensible(jsObj)) {
        jsObj[csOwnedJsHandleSymbol] = jsvHandle;
    }
}
// note: in MT, this is called from locked JSProxyContext. Don't call anything that would need locking.
function releaseCSOwnedObject(jsHandle) {
    let obj;
    if (isJsHandle(jsHandle)) {
        obj = _CsOwnedObjectsByJsHandle[jsHandle];
        _CsOwnedObjectsByJsHandle[jsHandle] = undefined;
        _JsHandleFreeList.push(jsHandle);
    }
    else if (isJsvHandle(jsHandle)) {
        obj = _CsOwnedObjectsByJsvHandle[0 - jsHandle];
        _CsOwnedObjectsByJsvHandle[0 - jsHandle] = undefined;
        // see free list in JSProxyContext.FreeJSVHandle
    }
    dotnetAssert.check(obj !== undefined && obj !== null, "ObjectDisposedException");
    if (typeof obj[csOwnedJsHandleSymbol] !== "undefined") {
        obj[csOwnedJsHandleSymbol] = undefined;
    }
}
function setupManagedProxy(owner, gcHandle) {
    assertJsInterop();
    // keep the gcHandle so that we could easily convert it back to original C# object for roundtrip
    owner[jsOwnedGcHandleSymbol] = gcHandle;
    // NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry/WeakRef
    if (useFinalizationRegistry) {
        // register for GC of the C# object after the JS side is done with the object
        jsOwnedObjectRegistry.register(owner, gcHandle, owner);
    }
    // register for instance reuse
    // NOTE: this would be leaking C# objects when the browser doesn't support FinalizationRegistry/WeakRef
    const wr = createWeakRef(owner);
    jsOwnedObjectTable.set(gcHandle, wr);
}
function upgradeManagedProxyToStrongRef(owner, gcHandle) {
    const sr = createStrongRef(owner);
    if (useFinalizationRegistry) {
        jsOwnedObjectRegistry.unregister(owner);
    }
    jsOwnedObjectTable.set(gcHandle, sr);
}
function teardownManagedProxy(owner, gcHandle, skipManaged) {
    assertJsInterop();
    // The JS object associated with this gcHandle has been collected by the JS GC.
    // As such, it's not possible for this gcHandle to be invoked by JS anymore, so
    //  we can release the tracking weakref (it's null now, by definition),
    //  and tell the C# side to stop holding a reference to the managed object.
    // "The FinalizationRegistry callback is called potentially multiple times"
    if (owner) {
        gcHandle = owner[jsOwnedGcHandleSymbol];
        owner[jsOwnedGcHandleSymbol] = GCHandleNull;
        if (useFinalizationRegistry) {
            jsOwnedObjectRegistry.unregister(owner);
        }
    }
    if (gcHandle !== GCHandleNull && jsOwnedObjectTable.delete(gcHandle) && !skipManaged) {
        if (isRuntimeRunning() && !forceDisposeProxiesInProgress) {
            releaseJsOwnedObjectByGcHandle(gcHandle);
        }
    }
    if (isGcvHandle(gcHandle)) {
        freeGcvHandle(gcHandle);
    }
}
function assertNotDisposed(result) {
    const gcHandle = result[jsOwnedGcHandleSymbol];
    dotnetAssert.check(gcHandle != GCHandleNull, "ObjectDisposedException");
    return gcHandle;
}
function _jsOwnedObjectFinalized(gcHandle) {
    if (!isRuntimeRunning()) {
        // We're shutting down, so don't bother doing anything else.
        return;
    }
    teardownManagedProxy(null, gcHandle);
}
function lookupJsOwnedObject(gcHandle) {
    if (!gcHandle)
        return null;
    const wr = jsOwnedObjectTable.get(gcHandle);
    if (wr) {
        // this could be null even before _jsOwnedObjectFinalized was called
        // TODO: are there race condition consequences ?
        return wr.deref();
    }
    return null;
}
// when we arrive here from UninstallWebWorkerInterop, the C# will unregister the handles too.
// when called from elsewhere, C# side could be unbalanced!!
function forceDisposeProxies(disposeMethods, verbose) {
    let keepSomeCsAlive = false;
    let keepSomeJsAlive = false;
    forceDisposeProxiesInProgress = true;
    let doneImports = 0;
    let doneExports = 0;
    let doneGCHandles = 0;
    let doneJSHandles = 0;
    // dispose all proxies to C# objects
    const gcHandles = [...jsOwnedObjectTable.keys()];
    for (const gcHandle of gcHandles) {
        const wr = jsOwnedObjectTable.get(gcHandle);
        const obj = wr && wr.deref();
        if (useFinalizationRegistry && obj) {
            jsOwnedObjectRegistry.unregister(obj);
        }
        if (obj) {
            const keepAlive = typeof obj[doNotForceDispose] === "boolean" && obj[doNotForceDispose];
            if (verbose) {
                const proxyDebug = BuildConfiguration === "Debug" ? obj[proxyDebugSymbol] : undefined;
                if (BuildConfiguration === "Debug" && proxyDebug) {
                    dotnetLogger.warn(`${proxyDebug} ${typeof obj} was still alive. ${keepAlive ? "keeping" : "disposing"}.`);
                }
                else {
                    dotnetLogger.warn(`Proxy of C# ${typeof obj} with GCHandle ${gcHandle} was still alive. ${keepAlive ? "keeping" : "disposing"}.`);
                }
            }
            if (!keepAlive) {
                const promiseControl = dotnetLoaderExports.getPromiseCompletionSource(obj);
                if (promiseControl) {
                    promiseControl.reject(new Error("Process is being terminated."));
                }
                if (typeof obj.dispose === "function") {
                    obj.dispose();
                }
                if (obj[jsOwnedGcHandleSymbol] === gcHandle) {
                    obj[jsOwnedGcHandleSymbol] = GCHandleNull;
                }
                if (!useWeakRef && wr)
                    wr.dispose();
                doneGCHandles++;
            }
            else {
                keepSomeCsAlive = true;
            }
        }
    }
    if (!keepSomeCsAlive) {
        jsOwnedObjectTable.clear();
        if (useFinalizationRegistry) {
            jsOwnedObjectRegistry = new globalThis.FinalizationRegistry(_jsOwnedObjectFinalized);
        }
    }
    const freeJsHandle = (jsHandle, list) => {
        const obj = list[jsHandle];
        const keepAlive = obj && typeof obj[doNotForceDispose] === "boolean" && obj[doNotForceDispose];
        if (!keepAlive) {
            list[jsHandle] = undefined;
        }
        if (obj) {
            if (verbose) {
                const proxyDebug = BuildConfiguration === "Debug" ? obj[proxyDebugSymbol] : undefined;
                if (BuildConfiguration === "Debug" && proxyDebug) {
                    dotnetLogger.warn(`${proxyDebug} ${typeof obj} was still alive. ${keepAlive ? "keeping" : "disposing"}.`);
                }
                else {
                    dotnetLogger.warn(`Proxy of JS ${typeof obj} with JSHandle ${jsHandle} was still alive. ${keepAlive ? "keeping" : "disposing"}.`);
                }
            }
            if (!keepAlive) {
                const promiseControl = dotnetLoaderExports.getPromiseCompletionSource(obj);
                if (promiseControl) {
                    promiseControl.reject(new Error("Process is being terminated."));
                }
                if (typeof obj.dispose === "function") {
                    obj.dispose();
                }
                if (obj[csOwnedJsHandleSymbol] === jsHandle) {
                    obj[csOwnedJsHandleSymbol] = undefined;
                }
                doneJSHandles++;
            }
            else {
                keepSomeJsAlive = true;
            }
        }
    };
    // dispose all proxies to JS objects
    for (let jsHandle = 0; jsHandle < _CsOwnedObjectsByJsHandle.length; jsHandle++) {
        freeJsHandle(jsHandle, _CsOwnedObjectsByJsHandle);
    }
    for (let jsvHandle = 0; jsvHandle < _CsOwnedObjectsByJsvHandle.length; jsvHandle++) {
        freeJsHandle(jsvHandle, _CsOwnedObjectsByJsvHandle);
    }
    if (!keepSomeJsAlive) {
        _CsOwnedObjectsByJsHandle.length = 1;
        _CsOwnedObjectsByJsvHandle.length = 1;
        _nextJSHandle = 1;
        _JsHandleFreeList.length = 0;
    }
    _GcvHandleFreeList.length = 0;
    nextGcvHandle = -2;
    if (disposeMethods) {
        // dispose all [JSImport]
        for (const boundFn of jsImportWrapperByFnHandle) {
            if (boundFn) {
                const closure = boundFn[importedJsFunctionSymbol];
                if (closure) {
                    closure.disposed = true;
                    doneImports++;
                }
            }
        }
        jsImportWrapperByFnHandle.length = 1;
        // dispose all [JSExport]
        const assemblyExports = [...exportsByAssembly.values()];
        for (const assemblyExport of assemblyExports) {
            for (const exportName in assemblyExport) {
                const boundFn = assemblyExport[exportName];
                const closure = boundFn[boundCsFunctionSymbol];
                if (closure) {
                    closure.disposed = true;
                    doneExports++;
                }
            }
        }
        exportsByAssembly.clear();
    }
    dotnetLogger.info(`forceDisposeProxies done: ${doneImports} imports, ${doneExports} exports, ${doneGCHandles} GCHandles, ${doneJSHandles} JSHandles.`);
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
class MemoryView {
    constructor(_pointer, _length, _viewType) {
        this._pointer = _pointer;
        this._length = _length;
        this._viewType = _viewType;
    }
    _unsafe_create_view() {
        // this view must be short lived so that it doesn't fail after wasm memory growth
        // for that reason we also don't give the view out to end user and provide set/slice/copyTo API instead
        const view = this._viewType == 0 /* MemoryViewType.Byte */ ? new Uint8Array(dotnetApi.localHeapViewU8().buffer, this._pointer >>> 0, this._length)
            : this._viewType == 1 /* MemoryViewType.Int32 */ ? new Int32Array(dotnetApi.localHeapViewI32().buffer, this._pointer >>> 0, this._length)
                : this._viewType == 2 /* MemoryViewType.Double */ ? new Float64Array(dotnetApi.localHeapViewF64().buffer, this._pointer >>> 0, this._length)
                    : null;
        if (!view)
            throw new Error("NotImplementedException");
        return view;
    }
    set(source, targetOffset) {
        dotnetAssert.check(!this.isDisposed, "ObjectDisposedException");
        const targetView = this._unsafe_create_view();
        if (!(source && targetView && source.constructor === targetView.constructor)) throw new Error(`Assert failed: Expected ${targetView.constructor}`); // inlined fastCheck
        targetView.set(source, targetOffset || 0 >>> 0);
        // TODO consider memory write barrier
    }
    copyTo(target, sourceOffset) {
        dotnetAssert.check(!this.isDisposed, "ObjectDisposedException");
        const sourceView = this._unsafe_create_view();
        if (!(target && sourceView && target.constructor === sourceView.constructor)) throw new Error(`Assert failed: Expected ${sourceView.constructor}`); // inlined fastCheck
        const trimmedSource = sourceView.subarray(sourceOffset || 0 >>> 0);
        // TODO consider memory read barrier
        target.set(trimmedSource);
    }
    slice(start, end) {
        dotnetAssert.check(!this.isDisposed, "ObjectDisposedException");
        const sourceView = this._unsafe_create_view();
        // TODO consider memory read barrier
        return sourceView.slice(start || 0 >>> 0, end ? end >>> 0 : undefined);
    }
    get length() {
        dotnetAssert.check(!this.isDisposed, "ObjectDisposedException");
        return this._length;
    }
    get byteLength() {
        dotnetAssert.check(!this.isDisposed, "ObjectDisposedException");
        return this._viewType == 0 /* MemoryViewType.Byte */ ? this._length
            : this._viewType == 1 /* MemoryViewType.Int32 */ ? this._length << 2
                : this._viewType == 2 /* MemoryViewType.Double */ ? this._length << 3
                    : 0;
    }
}
class Span extends MemoryView {
    constructor(pointer, length, viewType) {
        super(pointer, length, viewType);
        this._isDisposed = false;
    }
    dispose() {
        this._isDisposed = true;
    }
    get isDisposed() {
        return this._isDisposed;
    }
}
class ArraySegment extends MemoryView {
    constructor(pointer, length, viewType) {
        super(pointer, length, viewType);
    }
    dispose() {
        teardownManagedProxy(this, GCHandleNull);
    }
    get isDisposed() {
        return this[jsOwnedGcHandleSymbol] === GCHandleNull;
    }
}
class ManagedObject {
    dispose() {
        teardownManagedProxy(this, GCHandleNull);
    }
    get isDisposed() {
        return this[jsOwnedGcHandleSymbol] === GCHandleNull;
    }
    toString() {
        return `CsObject(gcHandle: ${this[jsOwnedGcHandleSymbol]})`;
    }
}
class ManagedError extends Error {
    constructor(message) {
        super(message);
        this.superStack = Object.getOwnPropertyDescriptor(this, "stack"); // this works on Chrome
        Object.defineProperty(this, "stack", {
            get: this.getManageStack,
        });
    }
    getSuperStack() {
        if (this.superStack) {
            if (this.superStack.value !== undefined)
                return this.superStack.value;
            if (this.superStack.get !== undefined)
                return this.superStack.get.call(this);
        }
        return super.stack; // this works on FF
    }
    getManageStack() {
        if (this.managedStack) {
            return this.managedStack;
        }
        if (!isRuntimeRunning()) {
            this.managedStack = "... omitted managed stack trace.\n" + this.getSuperStack();
            return this.managedStack;
        }
        const gcHandle = this[jsOwnedGcHandleSymbol];
        if (gcHandle !== GCHandleNull) {
            const managedStack = getManagedStackTrace(gcHandle);
            if (managedStack) {
                this.managedStack = managedStack + "\n" + this.getSuperStack();
                return this.managedStack;
            }
        }
        return this.getSuperStack();
    }
    dispose() {
        teardownManagedProxy(this, GCHandleNull);
    }
    get isDisposed() {
        return this[jsOwnedGcHandleSymbol] === GCHandleNull;
    }
}
class PromiseHolder extends ManagedObject {
    constructor(promise, gc_handle, res_converter) {
        super();
        this.promise = promise;
        this.gc_handle = gc_handle;
        this.res_converter = res_converter;
        this.isResolved = false;
        this.isPosted = false;
        this.isPostponed = false;
        this.data = null;
        this.reason = undefined;
    }
    resolve(data) {
        if (!isRuntimeRunning()) {
            dotnetLogger.debug("This promise resolution can't be propagated to managed code, runtime already exited.");
            return;
        }
        dotnetAssert.check(!this.isResolved, "resolve could be called only once");
        dotnetAssert.check(!this.isDisposed, "resolve is already disposed.");
        this.isResolved = true;
        this.completeTaskWrapper(data, null);
    }
    reject(reason) {
        if (!isRuntimeRunning()) {
            dotnetLogger.debug("This promise rejection can't be propagated to managed code, runtime already exited.");
            return;
        }
        if (!reason) {
            reason = new Error();
        }
        dotnetAssert.check(!this.isResolved, "reject could be called only once");
        dotnetAssert.check(!this.isDisposed, "resolve is already disposed.");
        this.isResolved = true;
        this.completeTaskWrapper(null, reason);
    }
    cancel() {
        if (!isRuntimeRunning()) {
            dotnetLogger.debug("This promise cancelation can't be propagated to managed code, runtime already exited.");
            return;
        }
        dotnetAssert.check(!this.isResolved, "cancel could be called only once");
        dotnetAssert.check(!this.isDisposed, "resolve is already disposed.");
        if (this.isPostponed) {
            // there was racing resolve/reject which was postponed, to retain valid GCHandle
            // in this case we just finish the original resolve/reject
            // and we need to use the postponed data/reason
            this.isResolved = true;
            if (this.reason !== undefined) {
                this.completeTaskWrapper(null, this.reason);
            }
            else {
                this.completeTaskWrapper(this.data, null);
            }
        }
        else {
            // there is no racing resolve/reject, we can reject/cancel the promise
            const promise = this.promise;
            if (!dotnetLoaderExports.isControllablePromise(promise)) {
                throw new Error("Expected a controllable promise.");
            }
            const pcs = dotnetLoaderExports.getPromiseCompletionSource(promise);
            const reason = new Error("OperationCanceledException");
            reason[promiseHolderSymbol] = this;
            pcs.reject(reason);
        }
    }
    // we can do this just once, because it will be dispose the GCHandle
    completeTaskWrapper(data, reason) {
        try {
            dotnetAssert.check(!this.isPosted, "Promise is already posted to managed.");
            this.isPosted = true;
            // we can unregister the GC handle just on JS side
            teardownManagedProxy(this, this.gc_handle, /*skipManaged: */ true);
            // order of operations with teardown_managed_proxy matters
            // so that managed user code running in the continuation could allocate the same GCHandle number and the local registry would be already ok with that
            completeTask(this.gc_handle, reason, data, this.res_converter);
        }
        catch (ex) {
            // there is no point to propagate the exception into the unhandled promise rejection
        }
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function isThenable(js_obj) {
    // When using an external Promise library like Bluebird the Promise.resolve may not be sufficient
    // to identify the object as a Promise.
    return Promise.resolve(js_obj) === js_obj ||
        ((typeof js_obj === "object" || typeof js_obj === "function") && typeof js_obj.then === "function");
}
function wrapAsCancelablePromise(fn) {
    const pcs = dotnetLoaderExports.createPromiseCompletionSource();
    const inner = fn();
    inner.then((data) => pcs.resolve(data)).catch((reason) => pcs.reject(reason));
    return pcs.promise;
}
function wrapAsCancelable(inner) {
    const pcs = dotnetLoaderExports.createPromiseCompletionSource();
    inner.then((data) => pcs.resolve(data)).catch((reason) => pcs.reject(reason));
    return pcs.promise;
}
function cancelPromise(task_holder_gc_handle) {
    // cancelation should not arrive earlier than the promise created by marshaling in SystemInteropJS_InvokeJSImportSync
    if (!isRuntimeRunning()) {
        dotnetLogger.debug("This promise can't be canceled, mono runtime already exited.");
        return;
    }
    const holder = lookupJsOwnedObject(task_holder_gc_handle);
    if (!(!!holder)) throw new Error(`Assert failed: Expected Promise for GCHandle ${task_holder_gc_handle}`); // inlined fastCheck
    holder.cancel();
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function initializeMarshalersToCs() {
    if (jsToCsMarshalers.size == 0) {
        jsToCsMarshalers.set(21 /* MarshalerType.Array */, marshalArrayToCs);
        jsToCsMarshalers.set(23 /* MarshalerType.Span */, _marshalSpanToCs);
        jsToCsMarshalers.set(22 /* MarshalerType.ArraySegment */, _marshalArraySegmentToCs);
        jsToCsMarshalers.set(3 /* MarshalerType.Boolean */, marshalBoolToCs);
        jsToCsMarshalers.set(4 /* MarshalerType.Byte */, _marshalByteToCs);
        jsToCsMarshalers.set(5 /* MarshalerType.Char */, _marshalCharToCs);
        jsToCsMarshalers.set(6 /* MarshalerType.Int16 */, _marshalInt16ToCs);
        jsToCsMarshalers.set(7 /* MarshalerType.Int32 */, _marshalInt32ToCs);
        jsToCsMarshalers.set(8 /* MarshalerType.Int52 */, _marshalInt52ToCs);
        jsToCsMarshalers.set(9 /* MarshalerType.BigInt64 */, _marshalBigint64ToCs);
        jsToCsMarshalers.set(10 /* MarshalerType.Double */, _marshalDoubleToCs);
        jsToCsMarshalers.set(11 /* MarshalerType.Single */, _marshalFloatToCs);
        jsToCsMarshalers.set(12 /* MarshalerType.IntPtr */, marshalIntptrToCs);
        jsToCsMarshalers.set(17 /* MarshalerType.DateTime */, _marshalDateTimeToCs);
        jsToCsMarshalers.set(18 /* MarshalerType.DateTimeOffset */, _marshalDateTimeOffsetToCs);
        jsToCsMarshalers.set(15 /* MarshalerType.String */, marshalStringToCs);
        jsToCsMarshalers.set(16 /* MarshalerType.Exception */, marshalExceptionToCs);
        jsToCsMarshalers.set(27 /* MarshalerType.JSException */, marshalExceptionToCs);
        jsToCsMarshalers.set(13 /* MarshalerType.JSObject */, marshalJsObjectToCs);
        jsToCsMarshalers.set(14 /* MarshalerType.Object */, marshalCsObjectToCs);
        jsToCsMarshalers.set(20 /* MarshalerType.Task */, marshalTaskToCs);
        jsToCsMarshalers.set(28 /* MarshalerType.TaskResolved */, marshalTaskToCs);
        jsToCsMarshalers.set(29 /* MarshalerType.TaskRejected */, marshalTaskToCs);
        jsToCsMarshalers.set(24 /* MarshalerType.Action */, _marshalFunctionToCs);
        jsToCsMarshalers.set(25 /* MarshalerType.Function */, _marshalFunctionToCs);
        jsToCsMarshalers.set(0 /* MarshalerType.None */, _marshalNullToCs); // also void
        jsToCsMarshalers.set(2 /* MarshalerType.Discard */, _marshalNullToCs); // also void
        jsToCsMarshalers.set(1 /* MarshalerType.Void */, _marshalNullToCs); // also void
        jsToCsMarshalers.set(26 /* MarshalerType.DiscardNoWait */, _marshalNullToCs); // also void
    }
}
function bindArgMarshalToCs(sig, marshalerType, index) {
    if (marshalerType === 0 /* MarshalerType.None */ || marshalerType === 1 /* MarshalerType.Void */ || marshalerType === 2 /* MarshalerType.Discard */ || marshalerType === 26 /* MarshalerType.DiscardNoWait */) {
        return undefined;
    }
    let resMarshaler = undefined;
    let arg1Marshaler = undefined;
    let arg2Marshaler = undefined;
    let arg3Marshaler = undefined;
    arg1Marshaler = getMarshalerToJsByType(getSignatureArg1Type(sig));
    arg2Marshaler = getMarshalerToJsByType(getSignatureArg2Type(sig));
    arg3Marshaler = getMarshalerToJsByType(getSignatureArg3Type(sig));
    const marshalerTypeRes = getSignatureResType(sig);
    resMarshaler = getMarshalerToCsByType(marshalerTypeRes);
    if (marshalerType === 19 /* MarshalerType.Nullable */) {
        // nullable has nested type information, it's stored in res slot of the signature. The marshaler is the same as for non-nullable primitive type.
        marshalerType = marshalerTypeRes;
    }
    const converter = getMarshalerToCsByType(marshalerType);
    const elementType = getSignatureArg1Type(sig);
    const argOffset = index * JavaScriptMarshalerArgSize;
    return (args, value) => {
        converter(args + argOffset, value, elementType, resMarshaler, arg1Marshaler, arg2Marshaler, arg3Marshaler);
    };
}
function marshalBoolToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 3 /* MarshalerType.Boolean */);
        setArgBool(arg, value);
    }
}
function _marshalByteToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 4 /* MarshalerType.Byte */);
        setArgU8(arg, value);
    }
}
function _marshalCharToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 5 /* MarshalerType.Char */);
        setArgU16(arg, value);
    }
}
function _marshalInt16ToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 6 /* MarshalerType.Int16 */);
        setArgI16(arg, value);
    }
}
function _marshalInt32ToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 7 /* MarshalerType.Int32 */);
        setArgI32(arg, value);
    }
}
function _marshalInt52ToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 8 /* MarshalerType.Int52 */);
        setArgI52(arg, value);
    }
}
function _marshalBigint64ToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 9 /* MarshalerType.BigInt64 */);
        setArgI64Big(arg, value);
    }
}
function _marshalDoubleToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 10 /* MarshalerType.Double */);
        setArgF64(arg, value);
    }
}
function _marshalFloatToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 11 /* MarshalerType.Single */);
        setArgF32(arg, value);
    }
}
function marshalIntptrToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 12 /* MarshalerType.IntPtr */);
        setArgIntptr(arg, value);
    }
}
function _marshalDateTimeToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        dotnetAssert.check(value instanceof Date, "Value is not a Date");
        setArgType(arg, 17 /* MarshalerType.DateTime */);
        setArgDate(arg, value);
    }
}
function _marshalDateTimeOffsetToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        dotnetAssert.check(value instanceof Date, "Value is not a Date");
        setArgType(arg, 18 /* MarshalerType.DateTimeOffset */);
        setArgDate(arg, value);
    }
}
function marshalStringToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        setArgType(arg, 15 /* MarshalerType.String */);
        dotnetAssert.check(typeof value === "string", "Value is not a String");
        _marshalStringToCsImpl(arg, value);
    }
}
function _marshalStringToCsImpl(arg, value) {
    const bufferLen = value.length * 2;
    const buffer = Module._malloc(bufferLen); // together with Marshal.FreeHGlobal
    dotnetBrowserUtilsExports.stringToUTF16(buffer, buffer + bufferLen, value);
    setArgIntptr(arg, buffer);
    setArgLength(arg, value.length);
}
function _marshalNullToCs(arg) {
    setArgType(arg, 0 /* MarshalerType.None */);
}
function _marshalFunctionToCs(arg, value, _, resConverter, arg1Converter, arg2Converter, arg3Converter) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
        return;
    }
    dotnetAssert.check(value && value instanceof Function, "Value is not a Function");
    // TODO: we could try to cache value -> existing JSHandle
    const wrapper = function delegateWrapper(args) {
        const exc = getArg(args, 0);
        const res = getArg(args, 1);
        const arg1 = getArg(args, 2);
        const arg2 = getArg(args, 3);
        const arg3 = getArg(args, 4);
        const previousPendingSynchronousCall = jsInteropState.isPendingSynchronousCall;
        try {
            dotnetAssert.check(!wrapper.isDisposed, "Function is disposed and should not be invoked anymore.");
            let arg1Js = undefined;
            let arg2Js = undefined;
            let arg3Js = undefined;
            if (arg1Converter) {
                arg1Js = arg1Converter(arg1);
            }
            if (arg2Converter) {
                arg2Js = arg2Converter(arg2);
            }
            if (arg3Converter) {
                arg3Js = arg3Converter(arg3);
            }
            jsInteropState.isPendingSynchronousCall = true; // this is always synchronous call for now
            const resJs = value(arg1Js, arg2Js, arg3Js);
            if (resConverter) {
                resConverter(res, resJs);
            }
        }
        catch (ex) {
            marshalExceptionToCs(exc, ex);
        }
        finally {
            jsInteropState.isPendingSynchronousCall = previousPendingSynchronousCall;
        }
    };
    wrapper[boundJsFunctionSymbol] = true;
    wrapper.isDisposed = false;
    wrapper.dispose = () => {
        wrapper.isDisposed = true;
    };
    const boundFunctionHandle = getJsHandleFromJSObject(wrapper);
    if (BuildConfiguration === "Debug") {
        const anyValue = value;
        if (anyValue[proxyDebugSymbol] === undefined) {
            wrapper[proxyDebugSymbol] = `Proxy of JS Function with JSHandle ${boundFunctionHandle}`;
        }
        else {
            wrapper[proxyDebugSymbol] = anyValue[proxyDebugSymbol];
        }
    }
    setJsHandle(arg, boundFunctionHandle);
    setArgType(arg, 25 /* MarshalerType.Function */); //TODO or action ?
}
function marshalTaskToCs(arg, value, _, resConverter) {
    const handleIsPreallocated = getArgType(arg) == 30 /* MarshalerType.TaskPreCreated */;
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    dotnetAssert.check(isThenable(value), "Value is not a Promise");
    const gcHandle = handleIsPreallocated ? getArgGcHandle(arg) : allocGcvHandle();
    if (!handleIsPreallocated) {
        setGcHandle(arg, gcHandle);
        setArgType(arg, 20 /* MarshalerType.Task */);
    }
    const holder = new PromiseHolder(value, gcHandle, resConverter || marshalCsObjectToCs);
    setupManagedProxy(holder, gcHandle);
    if (BuildConfiguration === "Debug") {
        holder[proxyDebugSymbol] = `PromiseHolder with GCHandle ${gcHandle}`;
    }
    value.then(data => holder.resolve(data), reason => holder.reject(reason));
}
function marshalExceptionToCs(arg, value) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else if (value instanceof ManagedError) {
        setArgType(arg, 16 /* MarshalerType.Exception */);
        // this is managed exception round-trip
        const gcHandle = assertNotDisposed(value);
        setGcHandle(arg, gcHandle);
    }
    else {
        if (!(typeof value === "object" || typeof value === "string")) throw new Error(`Assert failed: Value is not an Error ${typeof value}`); // inlined fastCheck
        setArgType(arg, 27 /* MarshalerType.JSException */);
        const message = value.toString();
        _marshalStringToCsImpl(arg, message);
        const knownJsHandle = value[csOwnedJsHandleSymbol];
        if (knownJsHandle) {
            setJsHandle(arg, knownJsHandle);
        }
        else {
            const jsHandle = getJsHandleFromJSObject(value);
            if (BuildConfiguration === "Debug" && Object.isExtensible(value)) {
                value[proxyDebugSymbol] = `JS Error with JSHandle ${jsHandle}`;
            }
            setJsHandle(arg, jsHandle);
        }
    }
}
function marshalJsObjectToCs(arg, value) {
    if (value === undefined || value === null) {
        setArgType(arg, 0 /* MarshalerType.None */);
        setArgProxyContext(arg);
    }
    else {
        // if value was ManagedObject, it would be double proxied, but the C# signature requires that
        if (!(value[jsOwnedGcHandleSymbol] === undefined)) throw new Error(`Assert failed: JSObject proxy of ManagedObject proxy is not supported. ${jsinteropDoc}`); // inlined fastCheck
        if (!(typeof value === "function" || typeof value === "object")) throw new Error(`Assert failed: JSObject proxy of ${typeof value} is not supported`); // inlined fastCheck
        setArgType(arg, 13 /* MarshalerType.JSObject */);
        const jsHandle = getJsHandleFromJSObject(value);
        if (BuildConfiguration === "Debug" && Object.isExtensible(value)) {
            value[proxyDebugSymbol] = `JS Object with JSHandle ${jsHandle}`;
        }
        setJsHandle(arg, jsHandle);
    }
}
function marshalCsObjectToCs(arg, value) {
    if (value === undefined || value === null) {
        setArgType(arg, 0 /* MarshalerType.None */);
        setArgProxyContext(arg);
    }
    else {
        const gcHandle = value[jsOwnedGcHandleSymbol];
        const jsType = typeof (value);
        if (gcHandle === undefined) {
            if (jsType === "string" || jsType === "symbol") {
                setArgType(arg, 15 /* MarshalerType.String */);
                _marshalStringToCsImpl(arg, value);
            }
            else if (jsType === "number") {
                setArgType(arg, 10 /* MarshalerType.Double */);
                setArgF64(arg, value);
            }
            else if (jsType === "bigint") {
                // we do it because not all bigint values could fit into Int64
                throw new Error("NotImplementedException: bigint");
            }
            else if (jsType === "boolean") {
                setArgType(arg, 3 /* MarshalerType.Boolean */);
                setArgBool(arg, value);
            }
            else if (value instanceof Date) {
                setArgType(arg, 17 /* MarshalerType.DateTime */);
                setArgDate(arg, value);
            }
            else if (value instanceof Error) {
                marshalExceptionToCs(arg, value);
            }
            else if (value instanceof Uint8Array) {
                marshalArrayToCsImpl(arg, value, 4 /* MarshalerType.Byte */);
            }
            else if (value instanceof Float64Array) {
                marshalArrayToCsImpl(arg, value, 10 /* MarshalerType.Double */);
            }
            else if (value instanceof Int32Array) {
                marshalArrayToCsImpl(arg, value, 7 /* MarshalerType.Int32 */);
            }
            else if (Array.isArray(value)) {
                marshalArrayToCsImpl(arg, value, 14 /* MarshalerType.Object */);
            }
            else if (value instanceof Int16Array
                || value instanceof Int8Array
                || value instanceof Uint8ClampedArray
                || value instanceof Uint16Array
                || value instanceof Uint32Array
                || value instanceof Float32Array) {
                throw new Error("NotImplementedException: TypedArray");
            }
            else if (isThenable(value)) {
                marshalTaskToCs(arg, value);
            }
            else if (value instanceof Span) {
                throw new Error("NotImplementedException: Span");
            }
            else if (jsType == "object") {
                const jsHandle = getJsHandleFromJSObject(value);
                setArgType(arg, 13 /* MarshalerType.JSObject */);
                if (BuildConfiguration === "Debug" && Object.isExtensible(value)) {
                    value[proxyDebugSymbol] = `JS Object with JSHandle ${jsHandle}`;
                }
                setJsHandle(arg, jsHandle);
            }
            else {
                throw new Error(`JSObject proxy is not supported for ${jsType} ${value}`);
            }
        }
        else {
            assertNotDisposed(value);
            if (value instanceof ArraySegment) {
                throw new Error("NotImplementedException: ArraySegment. " + jsinteropDoc);
            }
            else if (value instanceof ManagedError) {
                setArgType(arg, 16 /* MarshalerType.Exception */);
                setGcHandle(arg, gcHandle);
            }
            else if (value instanceof ManagedObject) {
                setArgType(arg, 14 /* MarshalerType.Object */);
                setGcHandle(arg, gcHandle);
            }
            else {
                throw new Error("NotImplementedException " + jsType + ". " + jsinteropDoc);
            }
        }
    }
}
function marshalArrayToCs(arg, value, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    marshalArrayToCsImpl(arg, value, elementType);
}
function marshalArrayToCsImpl(arg, value, elementType) {
    if (value === null || value === undefined) {
        setArgType(arg, 0 /* MarshalerType.None */);
    }
    else {
        const elementSize = arrayElementSize(elementType);
        if (!(elementSize != -1)) throw new Error(`Assert failed: Element type ${elementType} not supported`); // inlined fastCheck
        const length = value.length;
        const bufferLength = elementSize * length;
        const bufferPtr = Module._malloc(bufferLength);
        if (elementType == 15 /* MarshalerType.String */) {
            dotnetAssert.check(Array.isArray(value), "Value is not an Array");
            dotnetBrowserUtilsExports.zeroRegion(bufferPtr, bufferLength);
            for (let index = 0; index < length; index++) {
                const elementArg = getArg(bufferPtr, index);
                marshalStringToCs(elementArg, value[index]);
            }
        }
        else if (elementType == 14 /* MarshalerType.Object */) {
            dotnetAssert.check(Array.isArray(value), "Value is not an Array");
            dotnetBrowserUtilsExports.zeroRegion(bufferPtr, bufferLength);
            for (let index = 0; index < length; index++) {
                const elementArg = getArg(bufferPtr, index);
                marshalCsObjectToCs(elementArg, value[index]);
            }
        }
        else if (elementType == 13 /* MarshalerType.JSObject */) {
            dotnetAssert.check(Array.isArray(value), "Value is not an Array");
            dotnetBrowserUtilsExports.zeroRegion(bufferPtr, bufferLength);
            for (let index = 0; index < length; index++) {
                const elementArg = getArg(bufferPtr, index);
                marshalJsObjectToCs(elementArg, value[index]);
            }
        }
        else if (elementType == 4 /* MarshalerType.Byte */) {
            dotnetAssert.check(Array.isArray(value) || value instanceof Uint8Array, "Value is not an Array or Uint8Array");
            const bufferOffset = fixupPointer(bufferPtr, 0);
            const targetView = dotnetApi.localHeapViewU8().subarray(bufferOffset, bufferOffset + length);
            targetView.set(value);
        }
        else if (elementType == 7 /* MarshalerType.Int32 */) {
            dotnetAssert.check(Array.isArray(value) || value instanceof Int32Array, "Value is not an Array or Int32Array");
            const bufferOffset = fixupPointer(bufferPtr, 2);
            const targetView = dotnetApi.localHeapViewI32().subarray(bufferOffset, bufferOffset + length);
            targetView.set(value);
        }
        else if (elementType == 10 /* MarshalerType.Double */) {
            dotnetAssert.check(Array.isArray(value) || value instanceof Float64Array, "Value is not an Array or Float64Array");
            const bufferOffset = fixupPointer(bufferPtr, 3);
            const targetView = dotnetApi.localHeapViewF64().subarray(bufferOffset, bufferOffset + length);
            targetView.set(value);
        }
        else {
            throw new Error("not implemented");
        }
        setArgIntptr(arg, bufferPtr);
        setArgType(arg, 21 /* MarshalerType.Array */);
        setArgElementType(arg, elementType);
        setArgLength(arg, value.length);
    }
}
function _marshalSpanToCs(arg, value, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    dotnetAssert.check(!value.isDisposed, "ObjectDisposedException");
    checkViewType(elementType, value._viewType);
    setArgType(arg, 23 /* MarshalerType.Span */);
    setArgIntptr(arg, value._pointer);
    setArgLength(arg, value.length);
}
// this only supports round-trip
function _marshalArraySegmentToCs(arg, value, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    const gcHandle = assertNotDisposed(value);
    dotnetAssert.check(gcHandle, "Only roundtrip of ArraySegment instance created by C#");
    checkViewType(elementType, value._viewType);
    setArgType(arg, 22 /* MarshalerType.ArraySegment */);
    setArgIntptr(arg, value._pointer);
    setArgLength(arg, value.length);
    setGcHandle(arg, gcHandle);
}
function checkViewType(elementType, viewType) {
    if (elementType == 4 /* MarshalerType.Byte */) {
        dotnetAssert.check(0 /* MemoryViewType.Byte */ == viewType, "Expected MemoryViewType.Byte");
    }
    else if (elementType == 7 /* MarshalerType.Int32 */) {
        dotnetAssert.check(1 /* MemoryViewType.Int32 */ == viewType, "Expected MemoryViewType.Int32");
    }
    else if (elementType == 10 /* MarshalerType.Double */) {
        dotnetAssert.check(2 /* MemoryViewType.Double */ == viewType, "Expected MemoryViewType.Double");
    }
    else {
        throw new Error(`NotImplementedException ${elementType} `);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function initializeMarshalersToJs() {
    if (csToJsMarshalers.size == 0) {
        csToJsMarshalers.set(21 /* MarshalerType.Array */, _marshalArrayToJs);
        csToJsMarshalers.set(23 /* MarshalerType.Span */, _marshalSpanToJs);
        csToJsMarshalers.set(22 /* MarshalerType.ArraySegment */, _marshalArraySegmentToJs);
        csToJsMarshalers.set(3 /* MarshalerType.Boolean */, _marshalBoolToJs);
        csToJsMarshalers.set(4 /* MarshalerType.Byte */, _marshalByteToJs);
        csToJsMarshalers.set(5 /* MarshalerType.Char */, _marshalCharToJs);
        csToJsMarshalers.set(6 /* MarshalerType.Int16 */, _marshalInt16ToJs);
        csToJsMarshalers.set(7 /* MarshalerType.Int32 */, marshalInt32ToJs);
        csToJsMarshalers.set(8 /* MarshalerType.Int52 */, _marshalInt52ToJs);
        csToJsMarshalers.set(9 /* MarshalerType.BigInt64 */, _marshalBigint64ToJs);
        csToJsMarshalers.set(11 /* MarshalerType.Single */, _marshalFloatToJs);
        csToJsMarshalers.set(12 /* MarshalerType.IntPtr */, _marshalIntptrToJs);
        csToJsMarshalers.set(10 /* MarshalerType.Double */, _marshalDoubleToJs);
        csToJsMarshalers.set(15 /* MarshalerType.String */, marshalStringToJs);
        csToJsMarshalers.set(16 /* MarshalerType.Exception */, marshalExceptionToJs);
        csToJsMarshalers.set(27 /* MarshalerType.JSException */, marshalExceptionToJs);
        csToJsMarshalers.set(13 /* MarshalerType.JSObject */, _marshalJsObjectToJs);
        csToJsMarshalers.set(14 /* MarshalerType.Object */, _marshalCsObjectToJs);
        csToJsMarshalers.set(17 /* MarshalerType.DateTime */, _marshalDatetimeToJs);
        csToJsMarshalers.set(18 /* MarshalerType.DateTimeOffset */, _marshalDatetimeToJs);
        csToJsMarshalers.set(20 /* MarshalerType.Task */, marshalTaskToJs);
        csToJsMarshalers.set(29 /* MarshalerType.TaskRejected */, marshalTaskToJs);
        csToJsMarshalers.set(28 /* MarshalerType.TaskResolved */, marshalTaskToJs);
        csToJsMarshalers.set(30 /* MarshalerType.TaskPreCreated */, beginMarshalTaskToJs);
        csToJsMarshalers.set(24 /* MarshalerType.Action */, _marshalDelegateToJs);
        csToJsMarshalers.set(25 /* MarshalerType.Function */, _marshalDelegateToJs);
        csToJsMarshalers.set(0 /* MarshalerType.None */, _marshalNullToJs);
        csToJsMarshalers.set(1 /* MarshalerType.Void */, _marshalNullToJs);
        csToJsMarshalers.set(2 /* MarshalerType.Discard */, _marshalNullToJs);
        csToJsMarshalers.set(26 /* MarshalerType.DiscardNoWait */, _marshalNullToJs);
    }
}
function bindArgMarshalToJs(sig, marshalerType, index) {
    if (marshalerType === 0 /* MarshalerType.None */ || marshalerType === 1 /* MarshalerType.Void */ || marshalerType === 2 /* MarshalerType.Discard */ || marshalerType === 26 /* MarshalerType.DiscardNoWait */) {
        return undefined;
    }
    let resMarshaler = undefined;
    let arg1Marshaler = undefined;
    let arg2Marshaler = undefined;
    let arg3Marshaler = undefined;
    arg1Marshaler = getMarshalerToCsByType(getSignatureArg1Type(sig));
    arg2Marshaler = getMarshalerToCsByType(getSignatureArg2Type(sig));
    arg3Marshaler = getMarshalerToCsByType(getSignatureArg3Type(sig));
    const marshalerTypeRes = getSignatureResType(sig);
    resMarshaler = getMarshalerToJsByType(marshalerTypeRes);
    if (marshalerType === 19 /* MarshalerType.Nullable */) {
        // nullable has nested type information, it's stored in res slot of the signature. The marshaler is the same as for non-nullable primitive type.
        marshalerType = marshalerTypeRes;
    }
    const converter = getMarshalerToJsByType(marshalerType);
    const elementType = getSignatureArg1Type(sig);
    const argOffset = index * JavaScriptMarshalerArgSize;
    return (args) => {
        return converter(args + argOffset, elementType, resMarshaler, arg1Marshaler, arg2Marshaler, arg3Marshaler);
    };
}
function _marshalBoolToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgBool(arg);
}
function _marshalByteToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgU8(arg);
}
function _marshalCharToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgU16(arg);
}
function _marshalInt16ToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgI16(arg);
}
function marshalInt32ToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgI32(arg);
}
function _marshalInt52ToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgI52(arg);
}
function _marshalBigint64ToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgI64Big(arg);
}
function _marshalFloatToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgF32(arg);
}
function _marshalDoubleToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgF64(arg);
}
function _marshalIntptrToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgIntptr(arg);
}
function _marshalNullToJs() {
    return null;
}
function _marshalDatetimeToJs(arg) {
    const type = getArgType(arg);
    if (type === 0 /* MarshalerType.None */) {
        return null;
    }
    return getArgDate(arg);
}
// NOTE: at the moment, this can't dispatch async calls (with Task/Promise return type). Therefore we don't have to worry about pre-created Task.
function _marshalDelegateToJs(arg, _, resConverter, arg1Converter, arg2Converter, arg3Converter) {
    const type = getArgType(arg);
    if (type === 0 /* MarshalerType.None */) {
        return null;
    }
    const gcHandle = getArgGcHandle(arg);
    let result = lookupJsOwnedObject(gcHandle);
    if (result === null || result === undefined) {
        // this will create new Function for the C# delegate
        result = (arg1Js, arg2Js, arg3Js) => {
            dotnetAssert.check(!result.isDisposed, "Delegate is disposed and should not be invoked anymore.");
            // arg numbers are shifted by one, the real first is a gc handle of the callback
            return callDelegate(gcHandle, arg1Js, arg2Js, arg3Js, resConverter, arg1Converter, arg2Converter, arg3Converter);
        };
        result.dispose = () => {
            if (!result.isDisposed) {
                result.isDisposed = true;
                teardownManagedProxy(result, gcHandle);
            }
        };
        result.isDisposed = false;
        if (BuildConfiguration === "Debug") {
            result[proxyDebugSymbol] = `C# Delegate with GCHandle ${gcHandle}`;
        }
        setupManagedProxy(result, gcHandle);
    }
    return result;
}
class TaskHolder {
    constructor(promise, resolveOrReject) {
        this.promise = promise;
        this.resolveOrReject = resolveOrReject;
    }
}
function marshalTaskToJs(arg, _, resConverter) {
    const type = getArgType(arg);
    // this path is used only when Task is passed as argument to JSImport and virtual JSHandle would be used
    dotnetAssert.check(type != 30 /* MarshalerType.TaskPreCreated */, "Unexpected Task type: TaskPreCreated");
    // if there is synchronous result, return it
    const promise = tryMarshalSyncTaskToJs(arg, type, resConverter);
    if (promise !== false) {
        return promise;
    }
    const jsvHandle = getArgJsHandle(arg);
    const holder = createTaskHolder(resConverter);
    registerWithJsvHandle(holder, jsvHandle);
    if (BuildConfiguration === "Debug") {
        holder[proxyDebugSymbol] = `TaskHolder with JSVHandle ${jsvHandle}`;
    }
    return holder.promise;
}
function beginMarshalTaskToJs(arg, _, resConverter) {
    // this path is used when Task is returned from JSExport/call_entry_point
    const holder = createTaskHolder(resConverter);
    const jsHandle = getJsHandleFromJSObject(holder);
    if (BuildConfiguration === "Debug") {
        holder[proxyDebugSymbol] = `TaskHolder with JSHandle ${jsHandle}`;
    }
    setJsHandle(arg, jsHandle);
    setArgType(arg, 30 /* MarshalerType.TaskPreCreated */);
    return holder.promise;
}
function endMarshalTaskToJs(args, resConverter, eagerPromise) {
    // this path is used when Task is returned from JSExport/call_entry_point
    const res = getArg(args, 1);
    const type = getArgType(res);
    // if there is no synchronous result, return eagerPromise we created earlier
    if (type === 30 /* MarshalerType.TaskPreCreated */) {
        return eagerPromise;
    }
    // otherwise drop the eagerPromise's handle
    const jsHandle = getJsHandleFromJSObject(eagerPromise);
    releaseCSOwnedObject(jsHandle);
    // get the synchronous result
    const promise = tryMarshalSyncTaskToJs(res, type, resConverter);
    // make sure we got the result
    if (!(promise !== false)) throw new Error(`Assert failed: Expected synchronous result, got: ${type}`); // inlined fastCheck
    return promise;
}
function tryMarshalSyncTaskToJs(arg, type, resConverter) {
    if (type === 0 /* MarshalerType.None */) {
        return null;
    }
    if (type === 29 /* MarshalerType.TaskRejected */) {
        return Promise.reject(marshalExceptionToJs(arg));
    }
    if (type === 28 /* MarshalerType.TaskResolved */) {
        const elementType = getArgElementType(arg);
        if (elementType === 1 /* MarshalerType.Void */) {
            return Promise.resolve();
        }
        // this will change the type to the actual type of the result
        setArgType(arg, elementType);
        if (!resConverter) {
            // when we arrived here from _marshalCsObjectToJs
            resConverter = csToJsMarshalers.get(elementType);
        }
        if (!(resConverter)) throw new Error(`Assert failed: Unknown subConverter for type ${elementType}. ${jsinteropDoc}`); // inlined fastCheck
        const val = resConverter(arg);
        return Promise.resolve(val);
    }
    return false;
}
function createTaskHolder(resConverter) {
    const pcs = dotnetLoaderExports.createPromiseCompletionSource();
    const holder = new TaskHolder(pcs.promise, (type, jsHandle, argInner) => {
        if (type === 29 /* MarshalerType.TaskRejected */) {
            const reason = marshalExceptionToJs(argInner);
            pcs.reject(reason);
        }
        else if (type === 28 /* MarshalerType.TaskResolved */) {
            const type = getArgType(argInner);
            if (type === 1 /* MarshalerType.Void */) {
                pcs.resolve(undefined);
            }
            else {
                if (!resConverter) {
                    // when we arrived here from _marshalCsObjectToJs
                    resConverter = csToJsMarshalers.get(type);
                }
                if (!(resConverter)) throw new Error(`Assert failed: Unknown subConverter for type ${type}. ${jsinteropDoc}`); // inlined fastCheck
                const jsValue = resConverter(argInner);
                pcs.resolve(jsValue);
            }
        }
        else {
            if (!(false)) throw new Error(`Assert failed: Unexpected type ${type}`); // inlined fastCheck
        }
        releaseCSOwnedObject(jsHandle);
    });
    return holder;
}
function marshalStringToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    const buffer = getArgIntptr(arg);
    const len = getArgLength(arg) * 2;
    const value = dotnetBrowserUtilsExports.utf16ToString(buffer, buffer + len);
    Module._free(buffer);
    return value;
}
function marshalExceptionToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    if (type == 27 /* MarshalerType.JSException */) {
        // this is JSException roundtrip
        const jsHandle = getArgJsHandle(arg);
        const jsObj = getJSObjectFromJSHandle(jsHandle);
        return jsObj;
    }
    const gcHandle = getArgGcHandle(arg);
    let result = lookupJsOwnedObject(gcHandle);
    if (result === null || result === undefined) {
        // this will create new ManagedError
        const message = marshalStringToJs(arg);
        result = new ManagedError(message);
        if (BuildConfiguration === "Debug") {
            result[proxyDebugSymbol] = `C# Exception with GCHandle ${gcHandle}`;
        }
        setupManagedProxy(result, gcHandle);
    }
    return result;
}
function _marshalJsObjectToJs(arg) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    const jsHandle = getArgJsHandle(arg);
    const jsObj = getJSObjectFromJSHandle(jsHandle);
    if (!(jsObj !== undefined)) throw new Error(`Assert failed: JS object JSHandle ${jsHandle} was not found`); // inlined fastCheck
    return jsObj;
}
function _marshalCsObjectToJs(arg) {
    const marshalerType = getArgType(arg);
    if (marshalerType == 0 /* MarshalerType.None */) {
        return null;
    }
    if (marshalerType == 13 /* MarshalerType.JSObject */) {
        const jsHandle = getArgJsHandle(arg);
        const jsObj = getJSObjectFromJSHandle(jsHandle);
        return jsObj;
    }
    if (marshalerType == 21 /* MarshalerType.Array */) {
        const elementType = getArgElementType(arg);
        return _marshalArrayToJs_impl(arg, elementType);
    }
    if (marshalerType == 14 /* MarshalerType.Object */) {
        const gcHandle = getArgGcHandle(arg);
        if (gcHandle === GCHandleNull) {
            return null;
        }
        // see if we have js owned instance for this gcHandle already
        let result = lookupJsOwnedObject(gcHandle);
        // If the JS object for this gcHandle was already collected (or was never created)
        if (!result) {
            result = new ManagedObject();
            if (BuildConfiguration === "Debug") {
                result[proxyDebugSymbol] = `C# Object with GCHandle ${gcHandle}`;
            }
            setupManagedProxy(result, gcHandle);
        }
        return result;
    }
    // other types
    const converter = csToJsMarshalers.get(marshalerType);
    if (!(converter)) throw new Error(`Assert failed: Unknown converter for type ${marshalerType}. ${jsinteropDoc}`); // inlined fastCheck
    return converter(arg);
}
function _marshalArrayToJs(arg, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    return _marshalArrayToJs_impl(arg, elementType);
}
function _marshalArrayToJs_impl(arg, elementType) {
    const type = getArgType(arg);
    if (type == 0 /* MarshalerType.None */) {
        return null;
    }
    const elementSize = arrayElementSize(elementType);
    if (!(elementSize != -1)) throw new Error(`Assert failed: Element type ${elementType} not supported`); // inlined fastCheck
    const bufferPtr = getArgIntptr(arg);
    const length = getArgLength(arg);
    let result = null;
    if (elementType == 15 /* MarshalerType.String */) {
        result = new Array(length);
        for (let index = 0; index < length; index++) {
            const elementArg = getArg(bufferPtr, index);
            result[index] = marshalStringToJs(elementArg);
        }
    }
    else if (elementType == 14 /* MarshalerType.Object */) {
        result = new Array(length);
        for (let index = 0; index < length; index++) {
            const elementArg = getArg(bufferPtr, index);
            result[index] = _marshalCsObjectToJs(elementArg);
        }
    }
    else if (elementType == 13 /* MarshalerType.JSObject */) {
        result = new Array(length);
        for (let index = 0; index < length; index++) {
            const elementArg = getArg(bufferPtr, index);
            result[index] = _marshalJsObjectToJs(elementArg);
        }
    }
    else if (elementType == 4 /* MarshalerType.Byte */) {
        const bufferOffset = fixupPointer(bufferPtr, 0);
        const sourceView = dotnetApi.localHeapViewU8().subarray(bufferOffset, bufferOffset + length);
        result = sourceView.slice(); //copy
    }
    else if (elementType == 7 /* MarshalerType.Int32 */) {
        const bufferOffset = fixupPointer(bufferPtr, 2);
        const sourceView = dotnetApi.localHeapViewI32().subarray(bufferOffset, bufferOffset + length);
        result = sourceView.slice(); //copy
    }
    else if (elementType == 10 /* MarshalerType.Double */) {
        const bufferOffset = fixupPointer(bufferPtr, 3);
        const sourceView = dotnetApi.localHeapViewF64().subarray(bufferOffset, bufferOffset + length);
        result = sourceView.slice(); //copy
    }
    else {
        throw new Error(`NotImplementedException ${elementType}. ${jsinteropDoc}`);
    }
    Module._free(bufferPtr);
    return result;
}
function _marshalSpanToJs(arg, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    const bufferPtr = getArgIntptr(arg);
    const length = getArgLength(arg);
    let result = null;
    if (elementType == 4 /* MarshalerType.Byte */) {
        result = new Span(bufferPtr, length, 0 /* MemoryViewType.Byte */);
    }
    else if (elementType == 7 /* MarshalerType.Int32 */) {
        result = new Span(bufferPtr, length, 1 /* MemoryViewType.Int32 */);
    }
    else if (elementType == 10 /* MarshalerType.Double */) {
        result = new Span(bufferPtr, length, 2 /* MemoryViewType.Double */);
    }
    else {
        throw new Error(`NotImplementedException ${elementType}. ${jsinteropDoc}`);
    }
    return result;
}
function _marshalArraySegmentToJs(arg, elementType) {
    dotnetAssert.check(!!elementType, "Expected valid elementType parameter");
    const bufferPtr = getArgIntptr(arg);
    const length = getArgLength(arg);
    let result = null;
    if (elementType == 4 /* MarshalerType.Byte */) {
        result = new ArraySegment(bufferPtr, length, 0 /* MemoryViewType.Byte */);
    }
    else if (elementType == 7 /* MarshalerType.Int32 */) {
        result = new ArraySegment(bufferPtr, length, 1 /* MemoryViewType.Int32 */);
    }
    else if (elementType == 10 /* MarshalerType.Double */) {
        result = new ArraySegment(bufferPtr, length, 2 /* MemoryViewType.Double */);
    }
    else {
        throw new Error(`NotImplementedException ${elementType}. ${jsinteropDoc}`);
    }
    const gcHandle = getArgGcHandle(arg);
    if (BuildConfiguration === "Debug") {
        result[proxyDebugSymbol] = `C# ArraySegment with GCHandle ${gcHandle}`;
    }
    setupManagedProxy(result, gcHandle);
    return result;
}
function resolveOrRejectPromise(args) {
    if (!isRuntimeRunning()) {
        dotnetLogger.debug("This promise resolution/rejection can't be propagated to managed code, mono runtime already exited.");
        return;
    }
    args = fixupPointer(args, 0);
    const exc = getArg(args, 0);
    // TODO-WASM const receiver_should_free = WasmEnableThreads && is_receiver_should_free(args);
    try {
        assertRuntimeRunning();
        const res = getArg(args, 1);
        const argHandle = getArg(args, 2);
        const argValue = getArg(args, 3);
        const type = getArgType(argHandle);
        const jsHandle = getArgJsHandle(argHandle);
        const holder = getJSObjectFromJSHandle(jsHandle);
        if (!(holder)) throw new Error(`Assert failed: Cannot find Promise for JSHandle ${jsHandle}`); // inlined fastCheck
        holder.resolveOrReject(type, jsHandle, argValue);
        /* TODO-WASM if (receiver_should_free) {
            // this works together with AllocHGlobal in JSFunctionBinding.ResolveOrRejectPromise
            free(args as any);
        } else {*/
        setArgType(res, 1 /* MarshalerType.Void */);
        setArgType(exc, 0 /* MarshalerType.None */);
        //}
    }
    catch (ex) {
        /* TODO-WASM if (receiver_should_free) {
            mono_assert(false, () => `Failed to resolve or reject promise ${ex}`);
        }*/
        marshalExceptionToCs(exc, ex);
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
const importedModulesPromises = new Map();
const importedModules = new Map();
function setModuleImports(moduleName, moduleImports) {
    importedModules.set(moduleName, moduleImports);
    dotnetLogger.debug(() => `added module imports '${moduleName}'`);
}
function bindJSImportST(signature) {
    try {
        signature = fixupPointer(signature, 0);
        bindJsImport(signature);
        return VoidPtrNull$1;
    }
    catch (ex) {
        return dotnetBrowserUtilsExports.stringToUTF16Ptr(normalizeException(ex));
    }
}
function invokeJSImportST(functionHandle, args) {
    assertRuntimeRunning();
    args = fixupPointer(args, 0);
    const boundFn = jsImportWrapperByFnHandle[functionHandle];
    if (!(boundFn)) throw new Error(`Assert failed: Imported function handle expected ${functionHandle}`); // inlined fastCheck
    boundFn(args);
}
function bindJsImport(signature) {
    assertJsInterop();
    const mark = startMeasure();
    const version = getSignatureVersion(signature);
    if (!(version === 2)) throw new Error(`Assert failed: Signature version ${version} mismatch.`); // inlined fastCheck
    const jsFunctionName = getSignatureFunctionName(signature);
    const jsModuleName = getSignatureModuleName(signature);
    const functionHandle = getSignatureHandle(signature);
    dotnetLogger.debug(() => `Binding [JSImport] ${jsFunctionName} from ${jsModuleName} module`);
    const fn = lookupJsImport(jsFunctionName, jsModuleName);
    const argsCount = getSignatureArgumentCount(signature);
    const argMarshalers = new Array(argsCount);
    const argCleanup = new Array(argsCount);
    let hasCleanup = false;
    for (let index = 0; index < argsCount; index++) {
        const sig = getSig(signature, index + 2);
        const marshalerType = getSignatureType(sig);
        const argMarshaler = bindArgMarshalToJs(sig, marshalerType, index + 2);
        dotnetAssert.check(argMarshaler, "ERR42: argument marshaler must be resolved");
        argMarshalers[index] = argMarshaler;
        if (marshalerType === 23 /* MarshalerType.Span */) {
            argCleanup[index] = (jsArg) => {
                if (jsArg) {
                    jsArg.dispose();
                }
            };
            hasCleanup = true;
        }
    }
    const resSig = getSig(signature, 1);
    const resmarshalerType = getSignatureType(resSig);
    const resConverter = bindArgMarshalToCs(resSig, resmarshalerType, 1);
    const isDiscardNoWait = resmarshalerType == 26 /* MarshalerType.DiscardNoWait */;
    const isAsync = resmarshalerType == 20 /* MarshalerType.Task */ || resmarshalerType == 30 /* MarshalerType.TaskPreCreated */;
    const closure = {
        fn,
        fqn: jsModuleName + ":" + jsFunctionName,
        argsCount,
        argMarshalers,
        resConverter,
        hasCleanup,
        argCleanup,
        isDiscardNoWait,
        isAsync,
        isDisposed: false,
    };
    let boundFn;
    if (isAsync || isDiscardNoWait || hasCleanup) {
        boundFn = bindFn$1(closure);
    }
    else {
        if (argsCount == 0 && !resConverter) {
            boundFn = bind_fn_0V(closure);
        }
        else if (argsCount == 1 && !resConverter) {
            boundFn = bind_fn_1V(closure);
        }
        else if (argsCount == 1 && resConverter) {
            boundFn = bind_fn_1R(closure);
        }
        else if (argsCount == 2 && resConverter) {
            boundFn = bind_fn_2R(closure);
        }
        else {
            boundFn = bindFn$1(closure);
        }
    }
    let wrappedFn = boundFn;
    // this is just to make debugging easier by naming the function in the stack trace.
    // It's not CSP compliant and possibly not performant, that's why it's only enabled in debug builds
    // in Release configuration, it would be a trimmed by rollup
    if (BuildConfiguration === "Debug" && !jsInteropState.cspPolicy) {
        try {
            const fname = jsFunctionName.replaceAll(".", "_");
            const url = `//# sourceURL=https://dotnet/JSImport/${fname}`;
            const body = `return (function JSImport_${fname}(){ return fn.apply(this, arguments)});`;
            wrappedFn = new Function("fn", url + "\r\n" + body)(wrappedFn);
        }
        catch (ex) {
            jsInteropState.cspPolicy = true;
        }
    }
    wrappedFn[importedJsFunctionSymbol] = closure;
    jsImportWrapperByFnHandle[functionHandle] = wrappedFn;
    endMeasure(mark, "mono.bindJsFunction:" /* MeasuredBlock.bindJsFunction */, jsFunctionName);
    return wrappedFn;
}
function bind_fn_0V(closure) {
    const fn = closure.fn;
    const fqn = closure.fqn;
    closure = null;
    return function boundFn_0V(args) {
        const mark = startMeasure();
        try {
            // call user function
            fn();
        }
        catch (ex) {
            marshalExceptionToCs(args, ex);
        }
        finally {
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bind_fn_1V(closure) {
    const fn = closure.fn;
    const marshaler1 = closure.argMarshalers[0];
    const fqn = closure.fqn;
    closure = null;
    return function boundFn_1V(args) {
        const mark = startMeasure();
        try {
            const arg1 = marshaler1(args);
            // call user function
            fn(arg1);
        }
        catch (ex) {
            marshalExceptionToCs(args, ex);
        }
        finally {
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bind_fn_1R(closure) {
    const fn = closure.fn;
    const marshaler1 = closure.argMarshalers[0];
    const resConverter = closure.resConverter;
    const fqn = closure.fqn;
    closure = null;
    return function boundFn_1R(args) {
        const mark = startMeasure();
        try {
            const arg1 = marshaler1(args);
            // call user function
            const jsResult = fn(arg1);
            resConverter(args, jsResult);
        }
        catch (ex) {
            marshalExceptionToCs(args, ex);
        }
        finally {
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bind_fn_2R(closure) {
    const fn = closure.fn;
    const marshaler1 = closure.argMarshalers[0];
    const marshaler2 = closure.argMarshalers[1];
    const resConverter = closure.resConverter;
    const fqn = closure.fqn;
    closure = null;
    return function boundFn_2R(args) {
        const mark = startMeasure();
        try {
            const arg1 = marshaler1(args);
            const arg2 = marshaler2(args);
            // call user function
            const jsResult = fn(arg1, arg2);
            resConverter(args, jsResult);
        }
        catch (ex) {
            marshalExceptionToCs(args, ex);
        }
        finally {
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn$1(closure) {
    const argsCount = closure.argsCount;
    const argMarshalers = closure.argMarshalers;
    const resConverter = closure.resConverter;
    const argCleanup = closure.argCleanup;
    const hasCleanup = closure.hasCleanup;
    const fn = closure.fn;
    const fqn = closure.fqn;
    closure = null;
    return function boundFn(args) {
        const receiverShouldFree = isReceiverShouldFree(args);
        const mark = startMeasure();
        try {
            const jsArgs = new Array(argsCount);
            for (let index = 0; index < argsCount; index++) {
                const marshaler = argMarshalers[index];
                const jsArg = marshaler(args);
                jsArgs[index] = jsArg;
            }
            // call user function
            const jsResult = fn(...jsArgs);
            if (resConverter) {
                resConverter(args, jsResult);
            }
            if (hasCleanup) {
                for (let index = 0; index < argsCount; index++) {
                    const cleanup = argCleanup[index];
                    if (cleanup) {
                        cleanup(jsArgs[index]);
                    }
                }
            }
        }
        catch (ex) {
            marshalExceptionToCs(args, ex);
        }
        finally {
            if (receiverShouldFree) {
                Module._free(args);
            }
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function lookupJsImport(functionName, jsModuleName) {
    dotnetAssert.check(functionName && typeof functionName === "string", "functionName must be string");
    let scope = {};
    const parts = functionName.split(".");
    if (jsModuleName) {
        scope = importedModules.get(jsModuleName);
        if (!(scope)) throw new Error(`Assert failed: ES6 module ${jsModuleName} was not imported yet, please call JSHost.ImportAsync() first in order to invoke ${functionName}.`); // inlined fastCheck
    }
    else if (parts[0] === "INTERNAL") {
        scope = dotnetApi.INTERNAL;
        parts.shift();
    }
    else if (parts[0] === "globalThis") {
        scope = globalThis;
        parts.shift();
    }
    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        const newscope = scope[part];
        if (!newscope) {
            throw new Error(`${part} not found while looking up ${functionName}`);
        }
        scope = newscope;
    }
    const fname = parts[parts.length - 1];
    const fn = scope[fname];
    if (typeof (fn) !== "function") {
        throw new Error(`${functionName} must be a Function but was ${typeof fn}`);
    }
    // if the function was already bound to some object it would stay bound to original object. That's good.
    return fn.bind(scope);
}
function invokeJSFunction(functionJSHandle, args) {
    assertRuntimeRunning();
    const boundFn = getJSObjectFromJSHandle(functionJSHandle);
    if (!(boundFn && typeof (boundFn) === "function" && boundFn[boundJsFunctionSymbol])) throw new Error(`Assert failed: Bound function handle expected ${functionJSHandle}`); // inlined fastCheck
    args = fixupPointer(args, 0);
    boundFn(args);
}
function setProperty(self, name, value) {
    dotnetAssert.check(self, "Null reference");
    self[name] = value;
}
function getProperty(self, name) {
    dotnetAssert.check(self, "Null reference");
    return self[name];
}
function hasProperty(self, name) {
    dotnetAssert.check(self, "Null reference");
    return name in self;
}
function getTypeOfProperty(self, name) {
    dotnetAssert.check(self, "Null reference");
    return typeof self[name];
}
function getGlobalThis() {
    return globalThis;
}
function getDotnetInstance() {
    return dotnetApi;
}
function dynamicImport(module_name, module_url) {
    assertJsInterop();
    dotnetAssert.check(module_name && typeof module_name === "string", "module_name must be string");
    dotnetAssert.check(module_url && typeof module_url === "string", "module_url must be string");
    let promise = importedModulesPromises.get(module_name);
    const newPromise = !promise;
    if (newPromise) {
        dotnetLogger.debug(() => `importing ES6 module '${module_name}' from '${module_url}'`);
        promise = import(/*! webpackIgnore: true */ module_url);
        importedModulesPromises.set(module_name, promise);
    }
    return wrapAsCancelablePromise(async function register() {
        const module = await promise;
        if (newPromise) {
            importedModules.set(module_name, module);
            dotnetLogger.debug(() => `imported ES6 module '${module_name}' from '${module_url}'`);
        }
        return module;
    });
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
async function getAssemblyExports(assemblyName) {
    assertJsInterop();
    if (assemblyName.endsWith(".dll")) {
        assemblyName = assemblyName.substring(0, assemblyName.length - 4);
    }
    const result = exportsByAssembly.get(assemblyName);
    if (!result) {
        await bindAssemblyExports(assemblyName);
    }
    return exportsByAssembly.get(assemblyName) || {};
}
function bindCsFunction(methodHandle, assemblyName, namespaceName, shortClassName, methodName, signatureHash, signature) {
    const fullyQualifiedName = `[${assemblyName}] ${namespaceName}.${shortClassName}:${methodName}`;
    const mark = startMeasure();
    dotnetLogger.debug(() => `Binding [JSExport] ${namespaceName}.${shortClassName}:${methodName} from ${assemblyName} assembly`);
    const version = getSignatureVersion(signature);
    if (!(version === 2)) throw new Error(`Assert failed: Signature version ${version} mismatch.`); // inlined fastCheck
    const argsCount = getSignatureArgumentCount(signature);
    const argMarshalers = new Array(argsCount);
    for (let index = 0; index < argsCount; index++) {
        const sig = getSig(signature, index + 2);
        const marshalerType = getSignatureType(sig);
        const argMarshaler = bindArgMarshalToCs(sig, marshalerType, index + 2);
        dotnetAssert.check(argMarshaler, "ERR43: argument marshaler must be resolved");
        argMarshalers[index] = argMarshaler;
    }
    const resSig = getSig(signature, 1);
    let resMarshalerType = getSignatureType(resSig);
    const isAsync = resMarshalerType == 20 /* MarshalerType.Task */;
    const isDiscardNoWait = resMarshalerType == 26 /* MarshalerType.DiscardNoWait */;
    if (isAsync) {
        resMarshalerType = 30 /* MarshalerType.TaskPreCreated */;
    }
    const resConverter = bindArgMarshalToJs(resSig, resMarshalerType, 1);
    const closure = {
        methodHandle,
        fullyQualifiedName,
        argsCount,
        argMarshalers,
        resConverter,
        isAsync,
        isDiscardNoWait,
        isDisposed: false,
    };
    let boundFn;
    if (isAsync) {
        if (argsCount == 1 && resConverter) {
            boundFn = bindFn_1RA(closure);
        }
        else if (argsCount == 2 && resConverter) {
            boundFn = bindFn_2RA(closure);
        }
        else {
            boundFn = bindFn(closure);
        }
    }
    else if (isDiscardNoWait) {
        boundFn = bindFn(closure);
    }
    else {
        if (argsCount == 0 && !resConverter) {
            boundFn = bindFn_0V(closure);
        }
        else if (argsCount == 1 && !resConverter) {
            boundFn = bindFn_1V(closure);
        }
        else if (argsCount == 1 && resConverter) {
            boundFn = bindFn_1R(closure);
        }
        else if (argsCount == 2 && resConverter) {
            boundFn = bindFn_2R(closure);
        }
        else {
            boundFn = bindFn(closure);
        }
    }
    // this is just to make debugging easier.
    // It's not CSP compliant and possibly not performant, that's why it's only enabled in debug builds
    // in Release configuration, it would be a trimmed by rollup
    if (BuildConfiguration === "Debug" && !jsInteropState.cspPolicy) {
        try {
            const url = `//# sourceURL=https://dotnet/JSExport/${methodName}`;
            const body = `return (function JSExport_${methodName}(){ return fn.apply(this, arguments)});`;
            boundFn = new Function("fn", url + "\r\n" + body)(boundFn);
        }
        catch (ex) {
            jsInteropState.cspPolicy = true;
        }
    }
    boundFn[boundCsFunctionSymbol] = closure;
    walkExportsToSeFunction(assemblyName, namespaceName, shortClassName, methodName, signatureHash, boundFn);
    endMeasure(mark, "mono.bindCsFunction:" /* MeasuredBlock.bindCsFunction */, fullyQualifiedName);
}
function bindFn_0V(closure) {
    const method = closure.methodHandle;
    const fqn = closure.fullyQualifiedName;
    closure = null;
    return function boundFn_0V() {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 2;
            const args = allocStackFrame(size);
            // call C# side
            invokeJSExport(method, args);
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn_1V(closure) {
    const method = closure.methodHandle;
    const marshaler1 = closure.argMarshalers[0];
    const fqn = closure.fullyQualifiedName;
    return function boundFn_1V(arg1) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 3;
            const args = allocStackFrame(size);
            marshaler1(args, arg1);
            // call C# side
            invokeJSExport(method, args);
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn_1R(closure) {
    const method = closure.methodHandle;
    const marshaler1 = closure.argMarshalers[0];
    const resConverter = closure.resConverter;
    const fqn = closure.fullyQualifiedName;
    return function boundFn_1R(arg1) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 3;
            const args = allocStackFrame(size);
            marshaler1(args, arg1);
            // call C# side
            invokeJSExport(method, args);
            const jsResult = resConverter(args);
            return jsResult;
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn_1RA(closure) {
    const methodHandle = closure.methodHandle;
    const marshaler1 = closure.argMarshalers[0];
    const resConverter = closure.resConverter;
    const fqn = closure.fullyQualifiedName;
    closure = null;
    return function bindFn_1RA(arg1) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 3;
            const args = allocStackFrame(size);
            marshaler1(args, arg1);
            // pre-allocate the promise
            let promise = resConverter(args);
            // call C# side
            invokeJSExport(methodHandle, args);
            // in case the C# side returned synchronously
            promise = endMarshalTaskToJs(args, undefined, promise);
            return promise;
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn_2R(closure) {
    const method = closure.methodHandle;
    const marshaler1 = closure.argMarshalers[0];
    const marshaler2 = closure.argMarshalers[1];
    const resConverter = closure.resConverter;
    const fqn = closure.fullyQualifiedName;
    closure = null;
    return function boundFn_2R(arg1, arg2) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 4;
            const args = allocStackFrame(size);
            marshaler1(args, arg1);
            marshaler2(args, arg2);
            // call C# side
            invokeJSExport(method, args);
            const jsResult = resConverter(args);
            return jsResult;
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn_2RA(closure) {
    const methodHandle = closure.methodHandle;
    const marshaler1 = closure.argMarshalers[0];
    const marshaler2 = closure.argMarshalers[1];
    const resConverter = closure.resConverter;
    const fqn = closure.fullyQualifiedName;
    closure = null;
    return function bindFn_2RA(arg1, arg2) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 4;
            const args = allocStackFrame(size);
            marshaler1(args, arg1);
            marshaler2(args, arg2);
            // pre-allocate the promise
            let promise = resConverter(args);
            // call C# side
            invokeJSExport(methodHandle, args);
            // in case the C# side returned synchronously
            promise = endMarshalTaskToJs(args, undefined, promise);
            return promise;
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function bindFn(closure) {
    const argsCount = closure.argsCount;
    const argMarshalers = closure.argMarshalers;
    const resConverter = closure.resConverter;
    const methodHandle = closure.methodHandle;
    const fqn = closure.fullyQualifiedName;
    const isAsync = closure.isAsync;
    const isDiscardNoWait = closure.isDiscardNoWait;
    return function boundFn(...jsArgs) {
        const mark = startMeasure();
        assertRuntimeRunning();
        const sp = Module.stackSave();
        try {
            const size = 2 + argsCount;
            const args = allocStackFrame(size);
            for (let index = 0; index < argsCount; index++) {
                const marshaler = argMarshalers[index];
                if (marshaler) {
                    const jsArg = jsArgs[index];
                    marshaler(args, jsArg);
                }
            }
            let jsResult = undefined;
            if (isAsync) {
                // pre-allocate the promise
                jsResult = resConverter(args);
            }
            // call C# side
            if (isAsync) {
                invokeJSExport(methodHandle, args);
                // in case the C# side returned synchronously
                jsResult = endMarshalTaskToJs(args, undefined, jsResult);
            }
            else if (isDiscardNoWait) {
                // call C# side, fire and forget
                invokeJSExport(methodHandle, args);
            }
            else {
                invokeJSExport(methodHandle, args);
                if (resConverter) {
                    jsResult = resConverter(args);
                }
            }
            return jsResult;
        }
        finally {
            if (isRuntimeRunning())
                Module.stackRestore(sp);
            endMeasure(mark, "mono.callCsFunction:" /* MeasuredBlock.callCsFunction */, fqn);
        }
    };
}
function walkExportsToSeFunction(assembly, namespace, classname, methodname, signatureHash, fn) {
    const parts = `${namespace}.${classname}`.replace(/\+/g, ".").replace(/\//g, ".").split(".");
    let scope = undefined;
    let assemblyScope = exportsByAssembly.get(assembly);
    if (!assemblyScope) {
        assemblyScope = {};
        exportsByAssembly.set(assembly, assemblyScope);
        exportsByAssembly.set(assembly + ".dll", assemblyScope);
    }
    scope = assemblyScope;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part != "") {
            let newscope = scope[part];
            if (typeof newscope === "undefined") {
                newscope = {};
                scope[part] = newscope;
            }
            if (!(newscope)) throw new Error(`Assert failed: ${part} not found while looking up ${classname}`); // inlined fastCheck
            scope = newscope;
        }
    }
    if (!scope[methodname]) {
        scope[methodname] = fn;
    }
    scope[`${methodname}.${signatureHash}`] = fn;
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function loadSatelliteAssemblies(culturesToLoad) {
    throw new Error("TODO: loadSatelliteAssemblies is not implemented yet");
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function loadLazyAssembly(assemblyNameToLoad) {
    throw new Error("TODO: loadLazyAssembly is not implemented yet");
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
function dotnetInitializeModule(internals) {
    if (!Array.isArray(internals))
        throw new Error("Expected internals to be an array");
    const runtimeApi = internals[0 /* InternalExchangeIndex.RuntimeAPI */];
    if (typeof runtimeApi !== "object")
        throw new Error("Expected internals to have RuntimeAPI");
    if (runtimeApi.runtimeBuildInfo.gitHash && runtimeApi.runtimeBuildInfo.gitHash !== GitHash) {
        throw new Error(`Mismatched git hashes between loader and runtime. Loader: ${runtimeApi.runtimeBuildInfo.gitHash}, Runtime: ${GitHash}`);
    }
    const runtimeApiLocal = {
        getAssemblyExports,
        setModuleImports,
    };
    Object.assign(runtimeApi, runtimeApiLocal);
    Object.assign(runtimeApi.INTERNAL, {
        hasProperty,
        getTypeOfProperty,
        getProperty,
        setProperty,
        getGlobalThis,
        getDotnetInstance,
        dynamicImport,
        bindCsFunction,
        loadSatelliteAssemblies,
        loadLazyAssembly,
    });
    internals[4 /* InternalExchangeIndex.RuntimeExportsTable */] = runtimeExportsToTable({
        bindJSImportST,
        invokeJSImportST,
        releaseCSOwnedObject,
        resolveOrRejectPromise,
        cancelPromise,
        invokeJSFunction,
        forceDisposeProxies,
    });
    dotnetUpdateInternals(internals, dotnetUpdateInternalsSubscriber);
    initializeMarshalersToJs();
    initializeMarshalersToCs();
    jsInteropState.isInitialized = true;
    jsInteropState.enablePerfMeasure = globalThis.performance && typeof globalThis.performance.measure === "function";
    function runtimeExportsToTable(map) {
        // keep in sync with runtimeExportsFromTable()
        return [
            map.bindJSImportST,
            map.invokeJSImportST,
            map.releaseCSOwnedObject,
            map.resolveOrRejectPromise,
            map.cancelPromise,
            map.invokeJSFunction,
            map.forceDisposeProxies,
        ];
    }
}

// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

export { dotnetInitializeModule };
//# sourceMappingURL=dotnet.runtime.js.map
