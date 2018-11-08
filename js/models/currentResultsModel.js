define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var CurrentResultsModel = Backbone.Model.extend();
    var currentResultsModel = new CurrentResultsModel({currentResults: []});

    return currentResultsModel;
});

