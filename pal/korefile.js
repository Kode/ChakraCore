let project = new Project('pal');
if (platform !== 'win32') {
	project.addFiles('**');
	project.addExcludes('src/arch/arm/**');
}
resolve(project);
