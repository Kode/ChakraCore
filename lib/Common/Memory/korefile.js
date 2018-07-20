let project = new Project('Memory');
project.addFiles('*');
project.addFiles('amd64/*.cpp');
project.addFiles('amd64/*.h');
resolve(project);
