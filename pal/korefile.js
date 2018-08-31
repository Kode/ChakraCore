let project = new Project('pal');
if (platform !== Platform.Windows) {
	project.addFiles('**');
	project.addExcludes('src/arch/arm/**');
	if (platform !== Platform.OSX) {
		project.addExcludes('src/exception/machexception.cpp');
		project.addExcludes('src/exception/machmessage.cpp');
	}
}
resolve(project);
