let project = new Project('Language');
project.addFiles('*');
/*project.addFiles('amd64/*');
project.addExclude('amd64/StackFrame.SystemV.cpp');*/
project.addFile('amd64/StackFrame.h');
project.addFile('amd64/StackFrame.cpp');
//project.addFile('amd64/amd64_Thunks.asm');
project.addFile('amd64/JavascriptOperatorsA.asm');
resolve(project);
