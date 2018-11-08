define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var CurrentResultsModel = Backbone.Model.extend({
        initialize: function() {
            this.on('change', this.notify, this);
        },
        notify: function() {
            console.log('this model has changed');
        },
    });
    var currentResultsModel = new CurrentResultsModel({currentResults: []});

    return currentResultsModel;
});

