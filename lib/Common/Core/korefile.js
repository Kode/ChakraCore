let project = new Project('Core');
project.addFiles('*');
if (platform !== Platform.Windows) {
	project.addExclude('GlobalSecurityPolicy.cpp');
}
resolve(project);
