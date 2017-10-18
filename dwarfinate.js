const dwarfNames = require('./names');

/**
 * Return first and last characters of the given name.
 *
 * @example
 *
 *  'Garrett' => ['g', 't']
 *  'Caira' => ['c', 'a']
 *
 * @private
 * @param {string} name
 * @return {string[]}
 */

function getNameLetters(name) {
    const [first] = name.toLowerCase().split('').slice(0, -1);
    const [last] = name.toLowerCase().split('').slice(-1);

    return [first, last];
}

/**
 * Are all passed names valid? (string of length > 0);
 *
 * @param {string[]} names - Names to validate.
 * @return {boolean}
 */

function validNames(...names) {
    return names.every(name => typeof name === 'string' && name.length);
}

/**
 * Dwarfinate a name name of the given kind (first name or last name).
 *
 * @private
 * @param {string} name - Name to dwarfinate.
 * @param {string} kind - Kind of name to dwarfinate (first or last).
 * @return {string} - Dwarfinated name.
 */

function dwarfName(name, kind = 'first') {
    const [first, last] = getNameLetters(name);
    return [dwarfNames[kind].start[first], dwarfNames[kind].end[last]].join('');
}

/**
 * Dwarfinate someone's full name.
 *
 * @example
 *
 *  'Garrett Parrott' => 'Marvi Goldgrip'
 *  'Caira Doo' => 'Urdar Ironstrike'
 *
 * @public
 * @param {string} first - First name to dwarfinate.
 * @return {string} name - Surname to dwarfinate.
 */

module.exports = function dwarfinate(firstName, lastName) {
    if (validNames(firstName, lastName)) {
        return [dwarfName(firstName, 'first'), dwarfName(lastName, 'last')].join(' ');
    } else {
        throw `Invalid names "${firstName}" and "${lastName}" given!`;
    }
};
