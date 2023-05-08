#! /usr/bin/env node
console.log("hello world");
const {name, description, version} = require('package.json')

if(process.argv.includes('--version')){
    const VERSION_MESSAGE= `my-hello-world-cli
    ${description}
    ${VERSION_MESSAGE} 
    Usage:
    --help  Help documentaion
    --version   Installed package version`
}