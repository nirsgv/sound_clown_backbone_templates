
define([
    'underscore',
    'backbone',
    'constants',
    'searchInput',
    'currentResultsModel',
    'trackDispatcherModel',
    'searchResultsView',
    'TrackDispatcherView',
    'lastSearchedModel',
    'LastSearchedView',
    'generalUtils',
    'trackPlayerView',
    'trackPlayerModel',
    'toggleSearchedResultsView',
    'toggleSearchResultsModel'
], function ( _,
             Backbone,
             constants,
             searchInput,
             currentResultsModel,
             trackDispatcherModel,
             SearchResultsView,
             TrackDispatcherView,
             lastSearchedModel,
             LastSearchedView,
             generalUtils,
             TrackPlayerView,
             trackPlayerModel,
             ToggleSearchedResultsView,
             toggleSearchResultsModel
    ){
    console.log(constants);
    console.log(currentResultsModel);
    console.log(generalUtils);

    // because this is the app module, it is nice to have an initialize method on it
    // which is responsible for starting the application
    // which we can call from the main module

    var initialize = function (){
        searchInput.render({asd:"asdasd"});
        var toggleSearchedResultsView = new ToggleSearchedResultsView({el: "#toggleSearchResultsViews", model: toggleSearchResultsModel});
        toggleSearchedResultsView.render();
        var searchResultsView = new SearchResultsView({el: "#searchResultsContainer", model: currentResultsModel});
        searchResultsView.render();
        var lastSearchedView = new LastSearchedView({el: "#lastSearchedContainer", model: lastSearchedModel});
        lastSearchedView.render({});
        var trackDispatcherView = new TrackDispatcherView({el: "#track-dispatcher", model: trackDispatcherModel});
        trackDispatcherView.render();
        var trackPlayerView = new TrackPlayerView({el: "#soundcloud-strip", model: trackPlayerModel});
        trackPlayerView.render();

    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize: initialize
    }
});

