
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'dot',
], function( $, _, currentResultsModel ,dot){

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
            console.log(dot);
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
            console.log(currentResultsModel.get('currentResults'));

            var source = $('#vehicleTemplate').html();
            var results = currentResultsModel.get('currentResults').map(t => `<li class="data-display__result" track-id="qwe" >
                    <span class="data-display__link">${t.title}${source}</span>
                </li>`).join('');
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

