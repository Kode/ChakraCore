let project = new Project('Base');
project.addFiles('*');
if (platform !== Platform.Windows) {
	project.addExclude('DelayLoadLibrary.cpp');
	project.addExclude('Entropy.cpp');
}
resolve(project);
