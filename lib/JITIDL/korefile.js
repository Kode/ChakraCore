let project = new Project('JITIDL');

project.addFiles('*');

if (platform === Platform.Windows) {
	project.addCustomFile('ChakraJIT.idl',
		'midl /I "%(RelativeDir)..\\Common" /D$(Configuration) /out "%(RelativeDir)generated\\$(Configuration)" %(FullPath) /acf "%(RelativeDir)ChakraJIT.acf" /prefix client "Client" server "Server"',
		'%(RelativeDir)generated\\$(Configuration)\\ChakraJIT.h;%(RelativeDir)generated\\$(Configuration)\\ChakraJIT_c.c;%(RelativeDir)generated\\$(Configuration)\\ChakraJIT_s.c');
	project.addIncludeDir('generated');
}

resolve(project);
