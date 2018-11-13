
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'lastSearchedModel',
    'generalUtils',
    'trackDispatcherModel'
], function( $, _, currentResultsModel, lastSearchedModel, generalUtils, trackDispatcherModel){

    var SearchResultsView = Backbone.View.extend({
        el: "#searchResults",
        model: currentResultsModel,
        attributes: {
            className: 'dngnddn',
            id: 'dsfhfhb'
        },
        events: {
            "click .data-display__result": "chooseTrack"
        },
        self: this,
        initialize: function(self){
            console.log(_);
            console.log(this);
            console.log(self);
            console.log(this.model);
            console.log(lastSearchedModel);
            console.log(trackDispatcherModel);

            this.model.on("change",this.render, this);
        },

        getTrackById: function (tracks, id) {
            return tracks.filter(track => track.id === id)[0];
        },

        chooseTrack: function(e){
            var relevantId = Number(e.currentTarget.getAttribute('track-id'));
            var relevantTracks = this.model.get('currentResults');
            trackDispatcherModel.set('currentTrack', this.getTrackById(relevantTracks,relevantId));
            console.log(trackDispatcherModel);
        },

        render: function(){
            var results = this.model.get('currentResults').map(t => `
                    <li class="data-display__result" track-id="${t.id}">
                         <div class="waveform-bkg" style="background-image: url(${t.waveform_url})">
                            <span class="data-display__link">${t.title}</span>
                        </div>
                    </div>`).join('');
            this.$el.html(results);

            return this;
        }
    });

    return SearchResultsView;


});

