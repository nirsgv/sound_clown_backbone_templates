
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'searchResultsView',
    'lastSearchedModel',
    'searchResultView'
], function( $, _, currentResultsModel, SearchResultsView, LastSearchedModel, searchResultView){

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
            console.log(LastSearchedModel);
            //console.log(SearchResultView);
            //console.log(dot);
           // this.model.on("change",function(){console.log(this.get('currentResults'))});
            this.model.on("change",this.render, this);

        },

        chooseTrack: function(e){
            console.log(e.currentTarget);
            console.log(e.currentTarget.getAttribute('track-id'));
            // console.log(this.attributes);
            // console.log(currentResultsModel);
            // console.log(this);
            // console.log(self);

        },

        // printResults: function(currentResultsModel){
        //     console.log(this.el);
        //     console.log(this.$el);
        //     console.log(currentResultsModel);
        //     console.log(this.model.get('currentResults'));
        //     // these two are the same
        //
        //     console.log(this.model.get('currentResults'));
        //     var source = $('#searchResultTemplate').html();
        //     var template = _.template(source);
        //     console.log(template);
        // },

        render: function(){
            var results = this.model.get('currentResults').map(t => `
                    <li class="data-display__result" track-id="${t.id}">
                         <div class="waveform-bkg" style="background-image: url(${t.waveform_url})">
                            <span class="data-display__link">${t.title}</span>
                        </div>
                    </div>`).join('');
            this.$el.html(results);

            // var self = this;
            // this.model.each(function(venue){
            //     var view = new VenueView({ model: venue, bus: self.bus });
            //     self.$el.append(view.render().$el);
            // });
            //
            return this;
        }
    });






    return SearchResultsView;


});

