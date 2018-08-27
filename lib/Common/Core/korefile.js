let project = new Project('Core');
project.addFiles('*');
if (platform !== 'win32') {
	project.addExclude('GlobalSecurityPolicy.cpp');
}
resolve(project);
