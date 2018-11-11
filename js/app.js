
define([
    'underscore',
    'backbone',
    'models/track',
    'views/trackView',
    'constants',
    'searchInput',
    'currentResultsModel',
    'searchResultsView',
], function( _, Backbone, Track, TrackView, constants, searchInput, currentResultsModel, SearchResultsView ){
    console.log(constants);
    console.log(currentResultsModel);

    // because this is the app module, it is nice to have an initialize method on it
    // which we can call from the main module
    // which is responsible for starting the application

    var initialize = function (){
        var track = new Track({ title: "Track title very good!"});
        var trackView = new TrackView({ el: "#container", model: track });
        searchInput.render({asd:"asdasd"});

        var searchResultsView = new SearchResultsView({
            el: "#searchResults",
            model: currentResultsModel
        });

        searchResultsView.render({});

    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize: initialize
    }
});

