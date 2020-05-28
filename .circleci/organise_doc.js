'use strict';

const fs = require('fs-extra');
const args = require('minimist')(process.argv.slice(2));

// get the output directory
const DOC_OUTPUT_DIR = require('../typedoc.json').out;

// root dir is the absolute path to use, provided by CI
const ROOT_DIR = args.rootdir;
// the tag being built and empty or null if none
const TAG = args.tag;

// if no tag, doc sill gon in latest directory
const TARGET_DIR = (TAG == '' || TAG == null) ? 'latest' : TAG;

// source directories where JSdoc put the doc
const SOURCE_DIR = `${ROOT_DIR}/${DOC_OUTPUT_DIR}`;

// check if source exists and move files to latest or tag matching directory
fs.pathExists(SOURCE_DIR)
.then(exists => {
  if(exists){
    fs.move(SOURCE_DIR,`${ROOT_DIR}/docs/${TARGET_DIR}`)
  }else{
    throw(`${SOURCE_DIR} doesn't exist!`);
  }
})
// then remove the initial empty dir
.then(() => {fs.remove(SOURCE_DIR)})
.then(() => {console.log('Doc organisation success')})
.catch(err => {console.error(err)});
