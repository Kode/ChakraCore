let project = new Project('Backend');
project.addFiles('*');
project.addFiles('amd64/*.cpp');
project.addFiles('amd64/*.h');
resolve(project);
