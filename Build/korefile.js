let project = new Project('Chakra');

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
await project.addProject('../bin/ch');
await project.addProject('../bin/rl');
await project.addProject('../lib/Runtime/Base');
await project.addProject('../lib/WasmReader');
await project.addProject('../bin/GCStress');
await project.addProject('../lib/Runtime/PlatformAgnostic');
await project.addProject('../lib/JITClient');
await project.addProject('../lib/JITIDL');
await project.addProject('../lib/JITServer');
await project.addProject('../bin/NativeTests');
//await project.addProject('../Manifests');
await project.addProject('../pal');
await project.addProject('../lib/wabt');
//await project.addProject('../deps/Chakra.ICU');

project.addIncludeDirs(
	'VcBuild/obj/x64_debug/CoreManifests',
	'VcBuild/obj/x64_debug/ch',
	'VcBuild/obj/x64_debug/Chakra.JITIDL'
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

project.addDefine('_UNICODE');
project.addDefine('UNICODE');
project.addDefine('NOMINMAX');
project.addDefine('USE_EDGEMODE_JSRT');
project.addDefine('COM_STDMETHOD_CAN_THROW');
project.addDefine('USE_STATIC_RUNTIMELIB');
project.addDefine('CAN_BUILD_WABT=1');
project.addDefine('_DEBUG');
project.addDefine('DBG');
project.addDefine('DBG_DUMP');
project.addDefine('_CHAKRACOREBUILD');
project.addDefine('WIN32_LEAN_AND_MEAN=1');
project.addDefine('_WIN32_WINNT=0x0A00');
project.addDefine('WINVER=0x0A00');

project.addLib('Rpcrt4');
project.addLib('Mincore');
project.addLib('XmlLite');
project.addLib('Dbghelp');

resolve(project);
