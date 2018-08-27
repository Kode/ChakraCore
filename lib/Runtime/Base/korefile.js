let project = new Project('Base');
project.addFiles('*');
if (platform !== 'win32') {
	project.addExclude('DelayLoadLibrary.cpp');
	project.addExclude('Entropy.cpp');
}
resolve(project);
