let project = new Project('JITIDL');

project.addFiles('*');

if (platform === Platform.Windows) {
	project.addCustomFile('ChakraJIT.idl', 'midl /I ..\Common /out generated ChakraJIT.idl');
	project.addIncludeDir('generated');
	project.addFiles('generated/*');
}

resolve(project);
