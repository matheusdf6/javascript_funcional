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

const applyFileFilters = pipe(
    filters.removeHTMLTags,
    filters.removeNonASCII,
    filters.removeSpecialChar,
    filters.removeControlChar,
    filters.removeDigits
);


fileModule.getAllFilesFromDir('../legendas')
    .then(filterSRTFiles)
    .then(files => {
        fileModule.readAllFiles(files)
            .then(concatFiles)
            .then(applyFileFilters)
            .then(getWords)
            .then(countWords)
            .then(result => {
                fileModule.writeInDir('/', '/result.json', result)
                    .then(() => console.log("Arquivo salvo com sucesso!"))
                    .catch(err => {
                        throw new Error(`Erro ao criar o novo arquivo | ${err}`)
                    })
            })
            .catch( err => {
                throw new Error(err)
            })
    })
    .catch(console.log);