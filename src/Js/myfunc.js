function getFilenameAndExtension(pathfilename){

    var filenameextension = pathfilename.replace(/^.*[\\\/]/, '');
    return filenameextension.substring(0, filenameextension.lastIndexOf('.'));
  
  }

  export {getFilenameAndExtension};