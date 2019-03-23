let project = new Project('JITIDL');

project.addFiles('*');

if (platform === Platform.Windows) {
	project.addCustomFile('ChakraJIT.idl',
		'midl "%(FullPath)" /acf "%(RelativeDir)ChakraJIT.acf" /prefix client "Client" server "Server" /env x64 /out"%(RelativeDir)generated\\$(Configuration)" /h "ChakraJIT.h" /W1 /I"%(RelativeDir)..\\Common" /char unsigned /tlb "%(RelativeDir)generated\\$(Configuration)\\Chakra.JITIDL.tlb" /target "NT60" /D "WINVER=0x0601" /D$(Configuration) /lcid 1033 /nologo',
		'%(RelativeDir)generated\\$(Configuration)\\ChakraJIT.h;%(RelativeDir)generated\\$(Configuration)\\ChakraJIT_c.c;%(RelativeDir)generated\\$(Configuration)\\ChakraJIT_s.c');
	project.addIncludeDir('generated');
}

resolve(project);
