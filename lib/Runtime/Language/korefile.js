let project = new Project('Language');
project.addFiles('*');
project.addFiles('amd64/*.cpp');
project.addFiles('amd64/*.h');
project.addExclude('amd64/StackFrame.SystemV.cpp')
resolve(project);
