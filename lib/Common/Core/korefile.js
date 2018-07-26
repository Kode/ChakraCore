let project = new Project('Core');
project.addFiles('*');
project.addExclude('GlobalSecurityPolicy.cpp');
resolve(project);
