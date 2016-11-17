'use strict';

module.exports = getDeep;

function getDeep(key, thing) {
    
    if (Array.isArray(thing)) {

        return thing.map(function(item) {
            return getDeep(key, item)
        });

    } else if (typeof thing === 'object') {

        if (thing[key]) {
            return thing[key];
        }

        return Object.keys(thing).reduce(function(acc, k) {
            acc[k] = getDeep(key, thing[k]);

            return acc;
        }, {});
    }

    return thing;
}