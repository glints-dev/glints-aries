const fs = require('fs');
const path = require('path');

let dtsFileDirectory = {};

function getAllJsFilesAndBuildDefinitionFileDirectory(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllJsFilesAndBuildDefinitionFileDirectory(
        dirPath + '/' + file,
        arrayOfFiles
      );
    } else if (file.endsWith('.d.ts')) {
      dtsFileDirectory[path.join(__dirname, dirPath, '/', file)] = true;
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
}

function checkForDefinitionFiles() {
  const libFiles = getAllJsFilesAndBuildDefinitionFileDirectory('lib');
  checkAllJsDefinitionFiles(libFiles);

  dtsFileDirectory = {};
  const esFiles = getAllJsFilesAndBuildDefinitionFileDirectory('es');
  checkAllJsDefinitionFiles(esFiles);

  console.log('All definition files are sucessfully generated');
}

function checkAllJsDefinitionFiles(files) {
  const missingDefinitionFiles = [];

  for (const file of files) {
    if (!dtsFileDirectory[file.replace('.js', '.d.ts')]) {
      missingDefinitionFiles.push(file);
    }
  }

  if (missingDefinitionFiles.length > 0) {
    console.error(
      'Missing definition files: ',
      missingDefinitionFiles.join(',')
    );
    throw new Error(
      'Some files are missing definition files, please check stack trace above'
    );
  }
}

checkForDefinitionFiles();
