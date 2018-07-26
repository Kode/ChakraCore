let project = new Project('Base');
project.addFiles('*');
project.addExcludes('DelayLoadLibrary.cpp', 'Entropy.cpp', 'WindowsFoundationAdapter.cpp');
resolve(project);
