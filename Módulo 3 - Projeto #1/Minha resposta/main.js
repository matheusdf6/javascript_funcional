const fileModule = require('./files');
const filters = require('./filters');
const { pipe } = require('./utils');

const filterSRTFiles = fileModule.filterFilesByExtension('.srt');
const concatFiles = files => files.reduce( (acc, file) => `${acc} ${file}`, '')
const getWords = str => str.match( /\w+/g )
const countWords = words => words.reduce((acc, word) => {
    acc[word] = Number( acc[word] ? acc[word] + 1 : 1 );
    return acc;
}, {})

const getFileString = () => new Promise((resolve, reject) => {
    fileModule.getAllFilesFromDir('../legendas')
        .then(filterSRTFiles)
        .then(files => {
            fileModule.readAllFiles(files)
                .then(concatFiles)
                .then(resolve)
                .catch(reject)
        })
        .catch(reject)
})


const applyFileFilters = pipe(
    filters.removeHTMLTags,
    filters.removeNonASCII,
    filters.removeSpecialChar,
    filters.removeControlChar,
    filters.removeDigits
);

const getWordsCount = () => new Promise((resolve, reject) => {
    getFileString()
        .then( applyFileFilters )
        .then( getWords )
        .then( countWords )
        .then( resolve )
        .catch( reject )
});

getWordsCount()
    .then( result => {
        fileModule.writeInDir('/', 'result.json', result)
            .then(console.log)
            .catch(console.error)
    });