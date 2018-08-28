let project = new Project('Chakra');

const release = false;

await project.addProject('../bin/ChakraCore');
await project.addProject('../lib/Common/Codex');
await project.addProject('../lib/Runtime/ByteCode');
await project.addProject('../lib/Runtime/Debug');
await project.addProject('../lib/Runtime/Language');
await project.addProject('../lib/Runtime/Library');
await project.addProject('../lib/Runtime/Types');
await project.addProject('../lib/Common/Common');
await project.addProject('../lib/Common/Core');
await project.addProject('../lib/Common/DataStructures');
await project.addProject('../lib/Common/Exceptions');
await project.addProject('../lib/Common/Memory');
await project.addProject('../lib/Backend');
await project.addProject('../lib/Parser');
await project.addProject('../lib/Jsrt');
await project.addProject('../lib/Jsrt/Core');
await project.addProject('../lib/Runtime/Math');
await project.addProject('../lib/Common/Util');
//await project.addProject('../bin/ch');
//await project.addProject('../bin/rl');
await project.addProject('../lib/Runtime/Base');
await project.addProject('../lib/WasmReader');
//await project.addProject('../bin/GCStress');
await project.addProject('../lib/Runtime/PlatformAgnostic');
if (platform === 'win32') {
	await project.addProject('../lib/JITClient');
	await project.addProject('../lib/JITServer');
	await project.addProject('../lib/wabt');
}
await project.addProject('../lib/JITIDL');
//await project.addProject('../bin/NativeTests');
//await project.addProject('../Manifests');
await project.addProject('../pal');
//await project.addProject('../deps/Chakra.ICU');

let buildDir = 'VcBuild/obj/x64_debug/';
if (release) {
	buildDir = 'VcBuild/obj/x64_release/'
}

if (platform !== 'win32') {
	project.addIncludeDir('../out/Release/pal/src')
}

project.addIncludeDirs(
	buildDir + 'CoreManifests',
	buildDir + 'ch',
	buildDir + 'Chakra.JITIDL'
);
project.addIncludeDirs(
	'../lib/Common',
	'../lib/Common/PlaceHolder',
	'../lib/Runtime',
	'../lib/Runtime/ByteCode',
	'../lib/Runtime/Math',
	'../lib/Jsrt',
	'../lib/Parser',
	'../lib/Backend',
	'../lib/WasmReader',
	'../lib/wabt/chakra',
	'../lib/Backend/amd64',
	'../lib',
	'../lib/Runtime/Debug',
	'../lib/Runtime',
	'../lib/Runtime/Base',
	'../bin/ChakraCore',
	'../bin/NativeTests',
	'../bin/External',
	'../lib/Runtime/PlatformAgnostic',
	'../lib/Common/Memory',
	'../lib/Runtime/Language',
	'../lib/wabt',
	'../lib/wabt/chakra/windows'
);

if (platform !== 'win32') {
	project.addIncludeDirs('../pal', '../pal/inc', '../pal/inc/rt', '../pal/src/include');
}

//project.addDefine('_UNICODE');
project.addDefine('UNICODE');
project.addDefine('NOMINMAX');
project.addDefine('USE_EDGEMODE_JSRT');
project.addDefine('COM_STDMETHOD_CAN_THROW');
project.addDefine('USE_STATIC_RUNTIMELIB');
if (!release) {
	project.addDefine('_DEBUG');
	project.addDefine('DBG');
	project.addDefine('DBG_DUMP');
}
project.addDefine('_CHAKRACOREBUILD');

if (platform === 'win32') {
	project.addDefine('WIN32_LEAN_AND_MEAN=1');
	project.addDefine('_WIN32_WINNT=0x0A00');
	project.addDefine('WINVER=0x0A00');
	project.addDefine('CAN_BUILD_WABT=1');

	project.addLib('Rpcrt4');
	project.addLib('Mincore');
	project.addLib('XmlLite');
	project.addLib('Dbghelp');
}
else {
	project.addDefine('TARGET_64');
	project.addDefine('PLATFORM_UNIX');
	project.addDefine('FEATURE_PAL');
	project.addDefine('PLATFORM_UNIX=1');
	project.addDefine('_M_X64');
	project.addDefine('_M_AMD64');
	project.addDefine('_AMD64_');
	project.addDefine('_SAFECRT_USE_CPP_OVERLOADS=1');
	project.addDefine('__STDC_WANT_LIB_EXT1__=1');
	project.addDefine('CLANG_HAS_DISABLE_TAIL_CALLS=1');
	project.addDefine('BIT64=1');
	project.addDefine('STACK_ALIGN=16');
	project.addDefine('LP64COMPATIBLE=1');
	project.addDefine('FEATURE_PAL=1');
	project.addDefine('PIC=1');
	project.addDefine('_FILE_OFFSET_BITS=64');
	project.addDefine('_WIN64=1');
	project.addDefine('NO_PAL_MINMAX');
	project.addDefine('_ENABLE_DYNAMIC_THUNKS=1');

	project.addCppFlags(
		'-fno-omit-frame-pointer',
		'-fdelayed-template-parsing',
		'-msse4.2',
		'-fasm-blocks',
		'-fms-extensions',
		'-fwrapv',
		'-fPIC',
		'-std=gnu++11',
		'-fdiagnostics-color=always',
		'-Wno-invalid-token-paste',
		'-Wno-return-type',
		'-Wno-address-of-temporary',
		'-fno-builtin',
		'-fstack-protector'
	);

	project.addCFlags(
		'-msse4.2',
		'-fasm-blocks',
		'-fwrapv',
		'-fms-extensions',
		'-fdiagnostics-color=always',
		'-fPIC',
		'-fno-builtin',
		'-fstack-protector'
	);
}

resolve(project);
