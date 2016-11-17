'use strict';

var chai = require('chai'),
    getDeep = require('./index'),
    // examples
    in1 = {
        en: 'The title',
        fr: 'Le title'
    },
    out1 = 'The title',
    in2 = {
        title: {
            en: 'The title',
            fr: 'Le title'
        }
    },
    out2 = {
        title: 'The title'
    },
    in3 = [
        {
            en: 'item 1',
            fr: 'Le item 1'
        },
        {
            en: 'item 2',
            fr: 'Le item 2'
        }
    ],
    out3 = [
        'item 1',
        'item 2'
    ],
    in4 = {
        title: {
            en: 'the title',
            fr: 'Le title'
        },
        body: {
            en: 'the body',
            fr: 'Le body'
        },
        children: [
            {
                title: {
                    en: 'child 1',
                    fr: 'Le child 1'
                },
                body: {
                    en: 'the child body',
                    fr: 'Le child body'
                },
                children: [
                    {
                        title: {
                            en: 'item 1',
                            fr: 'Le item 1'
                        },
                        body: {
                            en: 'the body goes here',
                            fr: 'le body french'
                        }
                    },
                    {
                        title: {
                            en: 'item 2',
                            fr: 'Le item 2'
                        },
                        body: {
                            en: 'some more body',
                            fr: 'le body french more'
                        }
                    }
                ]

            },
            {
                title: {
                    en: 'child 2',
                    fr: 'Le child 2'
                },
                body: {
                    en: 'the child body',
                    fr: 'Le child body'
                },
                children: [
                    {
                        title: {
                            en: 'child item 1',
                            fr: 'Le item 1'
                        },
                        body: {
                            en: 'the child body goes here',
                            fr: 'le body french'
                        }
                    },
                    {
                        title: {
                            en: 'child item 2',
                            fr: 'Le item 2'
                        },
                        body: {
                            en: 'some more child body',
                            fr: 'le body french more'
                        }
                    }
                ]
            }
        ]
    },
    out4 = {
        title: 'the title',
        body: 'the body',
        children: [
            {
                title: 'child 1',
                body: 'the child body',
                children: [
                    {
                        title: 'item 1',
                        body: 'the body goes here'
                    },
                    {
                        title: 'item 2',
                        body: 'some more body'
                    }
                ]

            },
            {
                title: 'child 2',
                body: 'the child body',
                children: [
                    {
                        title: 'child item 1',
                        body: 'the child body goes here'
                    },
                    {
                        title: 'child item 2',
                        body: 'some more child body'
                    }
                ]
            }
        ]
    };

chai.should();

describe('getDeep', function() {
    it('should get object property', function() {
        getDeep('en', in1).should.deep.equal(out1);
    });

    it('should get object[prop][key] on each prop of object that is type object', function() {
        getDeep('en', in2).should.deep.equal(out2);
    });

    it('should work on arrays', function() {
        getDeep('en', in3).should.deep.equal(out3);
    });

    it('should work on nested objects and arrays', function() {
        getDeep('en', in4).should.deep.equal(out4);
    });

    it('should not modify the input', function() {
        Object.freeze(in4);
        chai.expect(getDeep.bind(null, 'en', in4)).to.not.throw();
    })
});
