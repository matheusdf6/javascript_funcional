/**
 * Chaining functions
 * @param  {...Function} funcs Function to chain results
 * @returns {any} The transformed data
 */
const pipe = (...funcs) => str => funcs.reduce((acc, fun) => fun(acc), str)

/**
 * Transforms the JSON to a pretty string
 * @param {Object} json The object to print
 */
const prettifyJSON = json => JSON.stringify(json)
                .split(',')
                .join(',\n\t')
                .replace('{','{\n\t')
                .replace('}','\n}')

module.exports = {
    pipe,
    prettifyJSON
}
