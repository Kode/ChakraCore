let project = new Project('PlatformAgnostic');
project.addFiles('*');
project.addFiles('Platform/Common/UnicodeText.Common.cpp');
project.addFiles('Platform/Windows/*');
resolve(project);
