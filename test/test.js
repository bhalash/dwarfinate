const tape = require('tape');
const dwarfinate = require('../');

const samples = [
    ['Garrett Parrott', 'Marvi Goldgrip'],
    ['Caira Doo', 'Urdar Ironstrike'],
    ['Linus Torvalds', 'Durvi Doomgrip'],
    ['Mark Grealish', 'Grundil Steelshield'],
    ['James Kirk', 'Dwalvi Bronzeaxe'],
    ['Benjamin Sisko', 'Thorli Doomstrike'],
    ["Paul Maud'Dib", 'Baldil Runespike'],
    ['Jean-Luc Picard', 'Dwalgi Goldheart'],
    ['Gurney Halleck', 'Marnar Steelaxe']
];

/**
 * dwarfinate() Method
 * =============================================================================
 */

tape('dwarfinate()', function(assert) {
    assert.plan(samples.length + 1);

    assert.equal(
        typeof dwarfinate,
        'function',
        'Should be a function.'
    );

    samples.forEach(sample => {
        const input = sample[0].split(' ');
        const output = sample[1];
        const msg = 'Actual and sample output should match';

        assert.equal(dwarfinate(...input), output, msg);
    });
});
