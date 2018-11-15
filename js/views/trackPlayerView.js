
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
            className: 'track-player',
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
            console.log(this);
            console.log(this.model.get('currentTrack'));
            console.log(this.attributes);
            console.log(generalUtils);
            this.render();
        },

        render: function(){
            var displayedPlayer = `
                <iframe class="${this.attributes.className}" id="sc-player" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=${this.model.get('permalink_url')}">
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

