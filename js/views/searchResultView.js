
define([
    'jquery',
    'underscore'
], function( $, _ ){

    var SearchResultView = Backbone.View.extend({
        //el: "#searchResults",
        //model: currentResultsModel,
        tagName: 'li',
        initialize: function(self){
            //this.model.on("change",this.modelChanged, this);
            console.log(this.model);
            console.log(this.model.id);
            this.render();
        },

        modelChanged: function(){
            console.log('modelChanged');
        },

        render: function(){
                var tempFn = _.template($('#data-display__result').html());
                var resultHtml = tempFn(this.model);
                console.log(this.model);
                console.log(resultHtml);
            return  resultHtml
        }

});



    return SearchResultView;


});

