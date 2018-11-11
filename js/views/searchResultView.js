
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

        },

        render: function(){
            return  "<li class='click-me-tmp'> rendered li </li>"
        }

});



    return SearchResultView;


});

