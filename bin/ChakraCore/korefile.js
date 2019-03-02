let project = new Project('ChakraCore');
project.addFiles('ConfigParserExternals.cpp', 'ChakraCoreDllFunc.cpp', 'TestHooks.cpp', 'ChakraCore.rc');
resolve(project);
