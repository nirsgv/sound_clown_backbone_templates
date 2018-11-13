
define([
    'jquery',
    'underscore',
    'generalUtils',
    'currentResultsModel',
], function( $, _, generalUtils, currentResultsModel ){

    var TrackDispatcherView = Backbone.View.extend({
        el: "#lastSearched",
        //model: lastSearchedModel,
        attributes: {
            className: 'img-dispatcher',
        },
        events: {
           // "click .searched-display__result": "searchLastSearchedTitleHandler"
        },
        self: this,
        initialize: function(self){
            this.model.on("change",this.modelChanged, this);
        },

        modelChanged: function(){
            console.log(this.model.get('currentTrack'));
            console.log(this.attributes);
            this.render();
        },

        getImageSrc: function(){
            // item has image ? bring it : bring default image
            return this.model.get('currentTrack').artwork_url
                ? this.model.get('currentTrack').artwork_url
                : 'assets/img/soundcloud-logo.jpg';
        },

        render: function(){
            var displayedLastResults = `<img class="${this.attributes.className}" src="${this.getImageSrc()}"/>`;

            this.$el.html(
                displayedLastResults
            );

            return this;
        }
    });
    return TrackDispatcherView;
});

