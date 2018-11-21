
define([
    'jquery',
    'underscore',
], function( $, _ ){

    var LastSearchedItemView = Backbone.View.extend({
        //el: "#lastSearched",
        //model: lastSearchedModel,
        attributes: {
            className: 'sdf',
            id: 'abc'
        },
        events: {
            "click .searched-display__result": "searchLastSearchedTitleHandler"
        },
        self: this,
        initialize: function(self){
            //this.model.on("change",this.render, this);
        },

        render: function(){
            var tempObj = {s:this.model};
            var tempFn = _.template($('#search-display__result').html());
            var resultHtml = tempFn(tempObj);

            return resultHtml;
        }
    });
    return LastSearchedItemView;
});

