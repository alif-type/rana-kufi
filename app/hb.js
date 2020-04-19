var Module=typeof Module!=="undefined"?Module:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var asm2wasmImports={"f64-rem":function(x,y){return x%y},"debugger":function(){}};var jsCallStartIndex=1;var functionPointers=new Array(5);function addFunction(func,sig){var base=0;for(var i=base;i<base+5;i++){if(!functionPointers[i]){functionPointers[i]=func;return jsCallStartIndex+i}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime;if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(typeof WebAssembly!=="object"){err("no native wasm support detected")}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":368,"maximum":368,"element":"anyfunc"});var ABORT=false;var EXITSTATUS=0;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heap[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heap.subarray&&UTF8Decoder){return UTF8Decoder.decode(heap.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heap[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;var WASM_PAGE_SIZE=65536;var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var DYNAMIC_BASE=5283680,DYNAMICTOP_PTR=40608;var INITIAL_INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_INITIAL_MEMORY/WASM_PAGE_SIZE,"maximum":INITIAL_INITIAL_MEMORY/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";out(what);err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";throw new WebAssembly.RuntimeError(what)}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile="hb.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={"env":asmLibraryArg,"wasi_snapshot_preview1":asmLibraryArg,"global":{"NaN":NaN,Infinity:Infinity},"global.Math":Math,"asm2wasm":asm2wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}Module["asm"]=createWasm;function ___assert_fail(condition,filename,line,func){abort("Assertion failed: "+UTF8ToString(condition)+", at: "+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}function _emscripten_get_heap_size(){return HEAPU8.length}function abortOnCannotGrowMemory(requestedSize){abort("OOM")}function _emscripten_resize_heap(requestedSize){abortOnCannotGrowMemory(requestedSize)}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function jsCall_ii(index,a1){return functionPointers[index](a1)}function jsCall_iii(index,a1,a2){return functionPointers[index](a1,a2)}function jsCall_iiii(index,a1,a2,a3){return functionPointers[index](a1,a2,a3)}function jsCall_iiiii(index,a1,a2,a3,a4){return functionPointers[index](a1,a2,a3,a4)}function jsCall_iiiiii(index,a1,a2,a3,a4,a5){return functionPointers[index](a1,a2,a3,a4,a5)}function jsCall_iiiiiii(index,a1,a2,a3,a4,a5,a6){return functionPointers[index](a1,a2,a3,a4,a5,a6)}function jsCall_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7){return functionPointers[index](a1,a2,a3,a4,a5,a6,a7)}function jsCall_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){return functionPointers[index](a1,a2,a3,a4,a5,a6,a7,a8)}function jsCall_vi(index,a1){functionPointers[index](a1)}function jsCall_vif(index,a1,a2){functionPointers[index](a1,a2)}function jsCall_viii(index,a1,a2,a3){functionPointers[index](a1,a2,a3)}function jsCall_viiii(index,a1,a2,a3,a4){functionPointers[index](a1,a2,a3,a4)}function jsCall_viiiii(index,a1,a2,a3,a4,a5){functionPointers[index](a1,a2,a3,a4,a5)}function jsCall_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7){functionPointers[index](a1,a2,a3,a4,a5,a6,a7)}function jsCall_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){functionPointers[index](a1,a2,a3,a4,a5,a6,a7,a8)}var asmGlobalArg={};var asmLibraryArg={"a":___assert_fail,"__memory_base":1024,"__table_base":0,"t":_emscripten_get_heap_size,"s":_emscripten_memcpy_big,"r":_emscripten_resize_heap,"b":abort,"q":jsCall_ii,"j":jsCall_iii,"i":jsCall_iiii,"h":jsCall_iiiii,"g":jsCall_iiiiii,"f":jsCall_iiiiiii,"e":jsCall_iiiiiiii,"d":jsCall_iiiiiiiii,"c":jsCall_vi,"p":jsCall_vif,"o":jsCall_viii,"n":jsCall_viiii,"m":jsCall_viiiii,"l":jsCall_viiiiiii,"k":jsCall_viiiiiiii,"memory":wasmMemory,"table":wasmTable};var asm=Module["asm"](asmGlobalArg,asmLibraryArg,buffer);Module["asm"]=asm;var _hb_blob_create=Module["_hb_blob_create"]=function(){return Module["asm"]["u"].apply(null,arguments)};var _hb_blob_get_data=Module["_hb_blob_get_data"]=function(){return Module["asm"]["v"].apply(null,arguments)};var _hb_buffer_add=Module["_hb_buffer_add"]=function(){return Module["asm"]["w"].apply(null,arguments)};var _hb_buffer_clear_contents=Module["_hb_buffer_clear_contents"]=function(){return Module["asm"]["x"].apply(null,arguments)};var _hb_buffer_create=Module["_hb_buffer_create"]=function(){return Module["asm"]["y"].apply(null,arguments)};var _hb_buffer_get_glyph_infos=Module["_hb_buffer_get_glyph_infos"]=function(){return Module["asm"]["z"].apply(null,arguments)};var _hb_buffer_get_glyph_positions=Module["_hb_buffer_get_glyph_positions"]=function(){return Module["asm"]["A"].apply(null,arguments)};var _hb_buffer_get_length=Module["_hb_buffer_get_length"]=function(){return Module["asm"]["B"].apply(null,arguments)};var _hb_buffer_set_content_type=Module["_hb_buffer_set_content_type"]=function(){return Module["asm"]["C"].apply(null,arguments)};var _hb_buffer_set_direction=Module["_hb_buffer_set_direction"]=function(){return Module["asm"]["D"].apply(null,arguments)};var _hb_buffer_set_script=Module["_hb_buffer_set_script"]=function(){return Module["asm"]["E"].apply(null,arguments)};var _hb_draw_funcs_create=Module["_hb_draw_funcs_create"]=function(){return Module["asm"]["F"].apply(null,arguments)};var _hb_draw_funcs_set_close_path_func=Module["_hb_draw_funcs_set_close_path_func"]=function(){return Module["asm"]["G"].apply(null,arguments)};var _hb_draw_funcs_set_cubic_to_func=Module["_hb_draw_funcs_set_cubic_to_func"]=function(){return Module["asm"]["H"].apply(null,arguments)};var _hb_draw_funcs_set_line_to_func=Module["_hb_draw_funcs_set_line_to_func"]=function(){return Module["asm"]["I"].apply(null,arguments)};var _hb_draw_funcs_set_move_to_func=Module["_hb_draw_funcs_set_move_to_func"]=function(){return Module["asm"]["J"].apply(null,arguments)};var _hb_draw_funcs_set_quadratic_to_func=Module["_hb_draw_funcs_set_quadratic_to_func"]=function(){return Module["asm"]["K"].apply(null,arguments)};var _hb_face_create=Module["_hb_face_create"]=function(){return Module["asm"]["L"].apply(null,arguments)};var _hb_face_get_upem=Module["_hb_face_get_upem"]=function(){return Module["asm"]["M"].apply(null,arguments)};var _hb_face_reference_table=Module["_hb_face_reference_table"]=function(){return Module["asm"]["N"].apply(null,arguments)};var _hb_font_create=Module["_hb_font_create"]=function(){return Module["asm"]["O"].apply(null,arguments)};var _hb_font_draw_glyph=Module["_hb_font_draw_glyph"]=function(){return Module["asm"]["P"].apply(null,arguments)};var _hb_font_get_face=Module["_hb_font_get_face"]=function(){return Module["asm"]["Q"].apply(null,arguments)};var _hb_font_get_glyph_extents=Module["_hb_font_get_glyph_extents"]=function(){return Module["asm"]["R"].apply(null,arguments)};var _hb_font_get_h_extents=Module["_hb_font_get_h_extents"]=function(){return Module["asm"]["S"].apply(null,arguments)};var _hb_font_set_scale=Module["_hb_font_set_scale"]=function(){return Module["asm"]["T"].apply(null,arguments)};var _hb_shape=Module["_hb_shape"]=function(){return Module["asm"]["U"].apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return Module["asm"]["W"].apply(null,arguments)};var dynCall_vi=Module["dynCall_vi"]=function(){return Module["asm"]["V"].apply(null,arguments)};Module["asm"]=asm;Module["addFunction"]=addFunction;Module["stackAlloc"]=stackAlloc;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}noExitRuntime=true;run();
