
define([
    'jquery',
    'underscore',
    'generalUtils',
    'trackPlayerModel',
], function( $, _, generalUtils, trackPlayerModel ){

    var TrackDispatcherView = Backbone.View.extend({
        el: "#lastSearched",
        //model: lastSearchedModel,
        attributes: {
            className: 'img-dispatcher',
        },
        events: {
            "click .img-dispatcher": "dispatchTrackToPlayer"
        },
        self: this,
        initialize: function(self){
            this.model.on("change",this.modelChanged, this);
            console.log(generalUtils);
        },

        dispatchTrackToPlayer: function(){
            console.log(this.model.get('currentTrack'));
            //console.log('before change: ',trackPlayerModel);
            trackPlayerModel.set(this.model.get('currentTrack'));
            //console.log('after change: ',trackPlayerModel);
            console.log(this.model);
            console.log(this.attributes);
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
            var displayedLastResults = `
                                <div class="img-wrap" data-id="${this.getItemValueByProperty('id')}">
                                    <h2>${this.getItemValueByProperty('title')}</h2>
                                    <img class="${this.attributes.className} animate-img-entrance" src="${this.getImageSrc('artwork_url')}" />
                                </div>
                                        `;

            this.$el.html(
                displayedLastResults
            );

            return this;
        }
    });
    return TrackDispatcherView;
});

