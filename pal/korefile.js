let project = new Project('pal');
if (platform !== Platform.Windows) {
	project.addFiles('**');
	project.addExcludes('src/arch/arm/**');
}
resolve(project);
