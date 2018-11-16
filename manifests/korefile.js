let project = new Project('manifests');

if (platform === Platform.Windows) {
	project.addCustomFile('Microsoft-Scripting-Chakra-Instrumentation.man',
		'mc.exe /h "%(RelativeDir)generated\\." /W "$(EventManifestXmlPath)\\winmeta.xml" /w "$(EventManifestXmlPath)\\eventman.xsd" /r "%(RelativeDir)generated\\." /z %(Filename)Events -um /v "%(FullPath)"',
		'%(RelativeDir)generated\\%(Filename)Events.h;%(RelativeDir)generated\\%(Filename)Events.rc;%(RelativeDir)generated\\%(Filename)Events_MSG00001.bin;%(RelativeDir)generated\\%(Filename)EventsTEMP.bin');
	project.addIncludeDir('generated');
}

resolve(project);
