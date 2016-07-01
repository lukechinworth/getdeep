'use strict';

module.exports = function(key, object) {
    
    if (Array.isArray(object)) {

        return object.map(function(item) {
            return getDeep(key, item)
        });

    } else if (typeof object === 'object') {

        if (object[key]) {
            return object[key];
        }

        Object.keys(object).forEach(function(k) {
            object[k] = getDeep(key, object[k]);
        });
    }

    return object;
};