let project = new Project('JITIDL');

project.addFiles('*');

if (platform === Platform.Windows) {
	project.addCustomFile('ChakraJIT.idl',
		'midl /I "%(RelativeDir)..\\Common" /out "%(RelativeDir)generated" %(FullPath) /acf "%(RelativeDir)ChakraJIT.acf" /prefix client "Client" server "Server"',
		'%(RelativeDir)generated\\ChakraJIT.h;%(RelativeDir)generated\\ChakraJIT_c.c;%(RelativeDir)generated\\ChakraJIT_s.c');
	project.addIncludeDir('generated');
}

resolve(project);
