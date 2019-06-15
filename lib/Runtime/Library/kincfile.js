let project = new Project('Library');
project.addFiles('*');
project.addFiles('amd64/*');
resolve(project);
