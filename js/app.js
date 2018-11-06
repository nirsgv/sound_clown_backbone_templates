
define([
    'underscore',
    'backbone',
    'models/track',
    'views/trackView',
], function(_, Backbone, Track, TrackView){

    // because this is the app module, it is nice to have an initialize method on it
    // which we can call from the main module
    // which is responsible for starting the application

    var initialize = function (){
        var track = new Track({ title: "Track title very good!"});
        var trackView = new TrackView({ el: "#container", model: track });

        trackView.render();
    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize: initialize
    }
});

