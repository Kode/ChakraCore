let project = new Project('Math');
project.addFiles('*');
project.addExclude('JavascriptMath.cpp');
resolve(project);
