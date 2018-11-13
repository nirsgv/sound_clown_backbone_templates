
define([
    'underscore',
    'backbone',
    'currentResultsModel',
], function( _, Backbone, currentResultsModel ){

    var initialize = function(constants){

    };

    var consoleLogSomething = function(par){
        console.log(par);
    };

    var fetchCollectionByName = function(name){

    };

    var setCurrentResults = function(name){
        this.consoleLogSomething('something');
        this.getTracks(name).then((res)=>{
            currentResultsModel.set({'currentResults': this.purifySearchResults(res)});
        });
    };

    var getTracks = function (queryString) {
        SC.initialize({
            client_id: 'E8IqLGTYxHll6SyaM7LKrMzKveWkcrjg'
        });
        return  SC.get('/tracks', {
            q: queryString,
            limit: 20
        });
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

    var getTrackById = function (tracks, id) {
            return tracks.filter(track => track.id === id)[0];
    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize,
        fetchCollectionByName,
        getTrackById,
        consoleLogSomething,
        purifySearchResults,
        getTracks,
        setCurrentResults
    }
});

