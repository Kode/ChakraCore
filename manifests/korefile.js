let project = new Project('manifests');

if (platform === Platform.Windows) {
	project.addCustomFile('Microsoft-Scripting-Chakra-Instrumentation.man', 'mc.exe /h "generated\\." /W "$(EventManifestXmlPath)\\winmeta.xml" /w "$(EventManifestXmlPath)\\eventman.xsd" /r "generated\\." /z %(Filename)Events -um /v "%(FullPath)"');
	project.addIncludeDir('generated');
	project.addFiles('generated/*');
}

resolve(project);
