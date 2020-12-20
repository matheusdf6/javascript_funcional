const fs = require('fs');
const path = require('path');
const { prettifyJSON } = require('./utils');

const _joinFullPath = ( path, files ) => files.map( file => `${path}/${file}`)

/**
 * Creates a filter by the file extension
 * @param {string} extension The file extension with '.'
 * @returns {function} The filter of the file extension
 */
const filterFilesByExtension = extension => 
    files => files.filter( file => file.includes(extension) )

/**
 * Get a list with all the files from the directory 
 * @param {string} dir The directory path from the file
 * @returns {Promise} A promise of the readed directory
 */
const getAllFilesFromDir = (dir) => new Promise((res, rej) => { 
    let fullPath = path.join(__dirname, dir);
    fs.readdir( fullPath, (err, files) => {
        if( err ) {
            rej(err)
        } else {
            res( _joinFullPath(fullPath, files) )
        }
    })
})

/**
 * Promisify the file read process
 * @param {string} file File path
 * @return {Promise} A promise of the readed file
 */
const readFile = file => new Promise((res, rej) => 
    fs.readFile( file, (err, content) => err ? rej(err) : res( content.toString() ) )
)

/**
 * Reads all the files  
 * @param {string[]} files List of file names
 * @returns {Promise} A promise of all readed files
 */
const readAllFiles = files => Promise.all( files.map(readFile) )

/**
 * Write data
 * @param {string} dir The name of the directory
 * @param {string} filename The name of the file with extension
 * @param {Object} data The object to print
 * @returns {Promise} A promise with writing status
 */
const writeInDir = (dir, filename, data) => new Promise( (res, rej) => {
    let fullPath = path.join(__dirname, dir, filename);
    fs.writeFile( fullPath, prettifyJSON(data), err => err ? rej(err) : res(true) )
});

module.exports = {
    getAllFilesFromDir,
    readFile,
    filterFilesByExtension,
    readAllFiles,
    writeInDir
}