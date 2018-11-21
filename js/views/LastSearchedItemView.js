
define([
    'jquery',
    'underscore',
    'templatesModel',
    'doT'
], function( $, _, templatesModel, doT ){

    var LastSearchedItemView = Backbone.View.extend({
        template: null,
        attributes: {
            className: 'sdf',
            id: 'abc'
        },
        events: {
            "click .searched-display__result": "searchLastSearchedTitleHandler"
        },
        self: this,
        initialize: function(self){
            console.log(this.template);
            console.log(templatesModel);
            this.template = templatesModel.lastSearchedItemTemplate;
            console.log(this.template);
        },

        render: function(){
            var tempObj = {s:this.model};
            // var tempFn = _.template($('#search-display__result').html());
            var tempFn = doT.template(this.template);
            var resultHtml = tempFn(tempObj);

            return resultHtml;
        }
    });
    return LastSearchedItemView;
});

