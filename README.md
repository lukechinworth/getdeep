# getdeep
like .get but goes all the way down

# use
```javascript
var getDeep = require('getdeep');
```

works on objects like normal
```javascript
getDeep('en', {en: 'the title', fr: 'le titre'}); // 'the title'
```

get deeper
```javascript
getDeep('en', {
    title: {
        en: 'The title',
        fr: 'Le title'
    },
    body: {
        en: 'The body',
        fr: 'le texte'
    }
}); // { title: 'The title', body: 'The body' }
```

get arrays
```javascript
getDeep('en', [
    {
        en: 'item 1',
        fr: 'point 1'
    },
    {
        en: 'item 2',
        fr: 'point 2'
    }
]); // ['item 1','item 2']
```
