let project = new Project('Language');
project.addFiles('*');
if (platform === Platform.Windows) {
	project.addFiles('amd64/*');
	project.addExclude('amd64/StackFrame.SystemV.cpp')
}
else {
	project.addFiles('amd64/AsmJsJitTemplate.cpp');
	project.addFiles('amd64/StackFrame.SystemV.cpp');
	project.addFiles('amd64/JavascriptOperatorsA.S');
	project.addFiles('amd64/amd64_Thunks.S');
}
resolve(project);
