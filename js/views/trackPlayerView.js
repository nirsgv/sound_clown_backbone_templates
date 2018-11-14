
define([
    'jquery',
    'underscore',
    'generalUtils',
    'currentResultsModel',
], function( $, _, generalUtils, currentResultsModel ){

    var TrackPlayerView = Backbone.View.extend({
        el: "#soundcloud-strip",
        //model: lastSearchedModel,
        attributes: {
            className: 'img-dispatcher',
        },
        events: {
           // "click .searched-display__result": "searchLastSearchedTitleHandler"
        },
        self: this,
        initialize: function(self){
            console.log(this.model);
            this.model.on("change",this.modelChanged, this);
        },

        modelChanged: function(){
            console.log(this.model.get('currentTrack'));
            console.log(this.attributes);
            console.log(generalUtils);
            this.render();
        },

        getImageSrc: function(){
            // item has image ? bring it : bring default image
            return this.model.get('currentTrack').artwork_url
                ? this.model.get('currentTrack').artwork_url
                : 'assets/img/soundcloud-logo.jpg';
        },

        getItemValueByProperty: function(property){
            // item has image ? bring it : bring default image
            return this.model.get('currentTrack')[property]
                ? this.model.get('currentTrack')[property]
                : '';
        },

        render: function(){
            var displayedPlayer = `
                <iframe id="sc-player" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&amp;{ ADD YOUR PARAMETERS HERE }">
                </iframe>
                                        `;

            this.$el.html(
                displayedPlayer
            );

            return this;
        }
    });
    return TrackPlayerView;
});

