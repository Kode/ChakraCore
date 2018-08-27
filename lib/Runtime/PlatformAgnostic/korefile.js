let project = new Project('PlatformAgnostic');
if (platform === 'win32') {
	project.addFiles('*');
	project.addFiles('Platform/Common/UnicodeText.Common.cpp');
	project.addFiles('Platform/Windows/*');
}
else {
	project.addFiles(
		'Platform/Common/UnicodeText.Common.cpp',
		'Platform/Common/HiResTimer.cpp',
		'Platform/Common/DateTime.cpp',
		'Platform/Linux/NumbersUtility.cpp',
		'Platform/Common/Thread.cpp',
		'Platform/Common/Trace.cpp',
		'Platform/Common/SystemInfo.Common.cpp',
		'Platform/POSIX/UnicodeText.cpp',
		'Platform/Unix/AssemblyCommon.cpp',
		'Platform/Unix/SystemInfo.cpp'
	);
}
resolve(project);
