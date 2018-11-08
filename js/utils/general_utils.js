
define([
    'underscore',
    'backbone',
], function( _, Backbone ){

    var initialize = function (constants){

    };

    var consoleLogSomething = function (par){
        console.log(par);
    };

    var fetchCollectionByName = function (name){

    };

    var purifySearchResults = function (arr){
        return Array.isArray(arr) &&
            arr.map((item) => {
                return {
                    id:item.id,
                    artwork_url:item.artwork_url,
                    permalink_url:item.permalink_url,
                    waveform_url:item.waveform_url,
                    title:item.title
                }
            }
        );
    };

    var fetchItemById = function (id){

    };
    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize,
        fetchCollectionByName,
        fetchItemById,
        consoleLogSomething,
        purifySearchResults
    }
});

