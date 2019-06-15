let project = new Project('Parser');
project.addFiles('*');
project.addExclude('HashFunc.cpp');
resolve(project);
