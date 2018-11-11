define([
    'underscore',
    'backbone',
    'searchResultsView'
], function (_, Backbone, searchResultsView) {

    var CurrentResultsModel = Backbone.Model.extend({

        initialize: function() {
            this.on('change', this.modelChanged, this);
            console.log(this);
        },

        modelChanged: function() {
            console.log('this model has changed');
            console.log(this.get('currentResults'));
            console.log(currentResultsModel.get('currentResults'));
        },
    });
    var currentResultsModel = new CurrentResultsModel({currentResults: []});
    console.log(currentResultsModel);

    return currentResultsModel;
});

