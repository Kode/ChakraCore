let project = new Project('JITClient');
project.addFiles('*');
project.addExclude('JITManager.cpp');
resolve(project);
