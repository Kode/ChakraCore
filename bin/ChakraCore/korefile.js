let project = new Project('ChakraCore');
project.addFiles('ConfigParserExternals.cpp', 'ChakraCoreDllFunc.cpp', 'TestHooks.cpp');
project.addIncludeDirs('../../lib/Common', '../../lib/Common/PlaceHolder', '../../lib/Runtime', '../../lib/Runtime/ByteCode', '../../lib/Jsrt', '../../lib/Parser', '../../lib/Backend');
resolve(project);
