const _filterByRegex = regex => file => file.replace(regex, ' ')

const removeSpecialChar = _filterByRegex(/[?!@#$%^&*,-><•\\\[\]"]/gm); 
const removeNonASCII = _filterByRegex(/[^\x00-\x7F]/g)
const removeDigits = _filterByRegex(/\d/g);
const removeControlChar = _filterByRegex(/\r?\n|\r/g);
const removeHTMLTags = _filterByRegex(/(<([^>]+)>)/ig);

module.exports = {
    removeSpecialChar,
    removeNonASCII,
    removeDigits,
    removeControlChar,
    removeHTMLTags
}