
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'searchResultsView'
], function( $, _, currentResultsModel, SearchResultsView){

    var SearchResultsView = Backbone.View.extend({
        el: "#searchResults",
        model: currentResultsModel,
        attributes: {
            className: 'dngnddn',
            id: 'dsfhfhb'
        },
        events: {
            "click .click-me-tmp": "onClickMeTmp"
        },
        self: this,
        initialize: function(self){
            console.log(_);
            console.log(this);
            console.log(self);
            //console.log(SearchResultView);
            //console.log(dot);
           // this.model.on("change",function(){console.log(this.get('currentResults'))});
            this.model.on("change",this.printResults, this);

        },

        onClickMeTmp: function(){
            console.log(currentResultsModel);
            console.log(this);
            console.log(self);

        },

        printResults: function(currentResultsModel){
            console.log(this.el);
            console.log(this.$el);
            console.log(currentResultsModel);
            console.log(this.model.get('currentResults'));
            // these two are the same

            console.log(this.model.get('currentResults'));
            var source = $('#searchResultTemplate').html();
            var template = _.template(source);
            console.log(template);

            var results = this.model.get('currentResults').map(t => `
                    <li class="data-display__result" track-id="${t.id}">
                         <div class="waveform-bkg" style="background-image: url(${t.waveform_url})">
                            <span class="data-display__link">${t.title}</span>
                        </div>
                    </div>`).join('');
            console.log(results);
            
            
           this.$el.html(results);




            // var source = $('#vehicleTemplate').html();
            // console.dir(source);
            // var template = _.template(source);
            // console.dir(template);
            // console.dir(this);
            // console.dir(this);
            // console.dir(this.attributes.id);
            //
            // this.$el.html(template(this.model.toJSON()));

            // this.get('currentResults').each(function(venue){
            //     console.log(venue);
            // });
        },

        render: function(){
            this.$el.html('');
            this.$el.html(
                //"<li class='click-me-tmp'> rendered li </li>"



            );

            // var self = this;
            //
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

