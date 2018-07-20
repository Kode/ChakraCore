let project = new Project('Language');
project.addFiles('*');
project.addFiles('amd64/*');
project.addExclude('amd64/StackFrame.SystemV.cpp')
resolve(project);
