let project = new Project('PlatformAgnostic');
if (platform === Platform.Windows) {
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
		'Platform/POSIX/*'
	);

	if (platform === Platform.OSX) {
		project.addFiles(
			'Platform/Unix/AssemblyCommon.cpp',
			'Platform/Unix/SystemInfo.cpp'
		);
	}
	else {
		project.addFiles(
			'Platform/Linux/SystemInfo.cpp',
			'Platform/Linux/PerfTrace.cpp'
		);
	}
}

resolve(project);
