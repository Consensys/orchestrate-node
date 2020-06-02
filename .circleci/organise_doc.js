'use strict'

const fs = require('fs')
const args = require('minimist')(process.argv.slice(2))

// get the output directory
const typedocJSON = require('../typedoc.json')
const typedocOutputDir = typedocJSON.out

// root dir is the absolute path to use, provided by CI
const rootDir = args.rootdir
if (!rootDir){
  console.error('rootDir argument must be defined');
  process.exit(1);
}

// source directories where typedoc put the doc
const sourceDir = `${rootDir}/${typedocOutputDir}`

// the tag being built and empty or null if none
const tag = args.tag

// if tag create a dir with tag defined and not empty name
// otherwise doc will go in latest directory by default
const targetDir = `${rootDir}/docs/${(tag) ? tag : 'latest'}`

// check if source exists and move files to latest or tag matching directory
fs.rename(sourceDir, targetDir, (err) => {
  if (err) throw err
  console.log('Doc organisation success')
})
