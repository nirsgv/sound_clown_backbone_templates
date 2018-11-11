
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'dot',
], function( $, _, currentResultsModel ,dot){

    var SearchResultView = Backbone.View.extend({
        el: "#searchResults",
        model: currentResultsModel,
        initialize: function(self){
            this.model.on("change",this.modelChanged, this);
            this.render();
        },

        modelChanged: function(){
            console.log('modelChanged');
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

        },

        render: function(){
            this.$el.html(
                "<li class='click-me-tmp'> rendered li </li>"
            );

            return this;
        }
    });






    return SearchResultView;


});

