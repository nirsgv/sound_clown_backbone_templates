// now we need to wrap each one of these types inside a require.js module
// the define function comes with require.js
// the define function takes two arguments - an array of dependencies and a factory function which is called when all of the dependencies are loaded
define([
    'underscore',
    'backbone',
], function (_, Backbone, soundcloud_sdk, soundcloud_api) {
    var CurrentResultsCollection = Backbone.Collection.extend({Model: Vehicle});
    var currentResultsCollection = new CurrentResultsCollection({currentResults: []});


    // making use of the module pattern
    return currentTracks;
});

