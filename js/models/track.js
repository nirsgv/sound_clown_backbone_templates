// now we need to wrap each one of these types inside a require.js module
// the define function comes with require.js
// the define function takes two arguments - an array of dependencies and a factory function which is called when all of the dependencies are loaded
define([
    'underscore',
    'backbone',
    'soundcloud_sdk',
    'soundcloud_api',
], function (_, Backbone, soundcloud_sdk, soundcloud_api) {
    var Track = Backbone.Model.extend();

    SC.initialize({
        client_id: 'E8IqLGTYxHll6SyaM7LKrMzKveWkcrjg'
    });

// find all sounds of buskers licensed under 'creative commons share alike'
    let myTracks;
    const getTracks = function (queryString) {
        SC.get('/tracks', {
            q: queryString, license: 'cc-by-sa'
        }).then(function (tracks) {
            myTracks = tracks;
            return myTracks;
        });
        const getMyTracks= function(){
            return myTracks;
        }
        // console.log(getTracks('abba'));
    };
    let zubi = getTracks('abba');
    console.log(zubi);
    // making use of the module pattern
    return Track;
});

