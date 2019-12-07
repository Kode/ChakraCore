let project = new Project('Debug');
project.addFiles('*');
project.addExclude('SourceContextInfo.cpp');
resolve(project);
