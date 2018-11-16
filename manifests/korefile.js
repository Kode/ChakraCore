let project = new Project('manifests');

if (platform === Platform.Windows) {
	//<EventManifestXmlPath Condition="'$(TargetPlatformVersion)'=='8.1'">$(WindowsSdkDir)Include\um</EventManifestXmlPath>
	//<EventManifestXmlPath Condition="'$(TargetPlatformVersion)'!='8.1'">$(WindowsSdkDir)Include\$(TargetPlatformVersion)\um</EventManifestXmlPath>
	const eventManifestXmlPath = '$(WindowsSdkDir)Include\\$(TargetPlatformVersion)\\um';
	project.addCustomFile('Microsoft-Scripting-Chakra-Instrumentation.man',
		'mc.exe /h "%(RelativeDir)generated\\." /W "' + eventManifestXmlPath + '\\winmeta.xml" /w "' + eventManifestXmlPath + '\\eventman.xsd" /r "%(RelativeDir)generated\\." /z %(Filename)Events -um /v "%(FullPath)"',
		'%(RelativeDir)generated\\%(Filename)Events.h;%(RelativeDir)generated\\%(Filename)Events.rc;%(RelativeDir)generated\\%(Filename)Events_MSG00001.bin;%(RelativeDir)generated\\%(Filename)EventsTEMP.bin');
	project.addIncludeDir('generated');
}

resolve(project);
