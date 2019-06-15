let project = new Project('pal');
if (platform !== Platform.Windows) {
	project.addFiles('**');
	project.addExcludes('src/arch/arm/**');
	if (platform !== Platform.OSX) {
		project.addExclude('src/exception/machexception.cpp');
		project.addExclude('src/exception/machmessage.cpp');
		project.addExclude('src/arch/i386/activationhandlerwrapper.S');
		project.addExclude('src/arch/i386/dispatchexceptionwrapper.S');
	}
}
resolve(project);
