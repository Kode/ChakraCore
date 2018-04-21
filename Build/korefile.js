let project = new Project('Chakra');
await project.addProject('../bin/ChakraCore');

project.addIncludeDir('VcBuild/obj/x64_debug/CoreManifests');
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

resolve(project);
