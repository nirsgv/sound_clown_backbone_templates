
define([
    'jquery',
    'underscore',
    'templatesModel',
    'doT'
], function( $, _, templatesModel, doT ){

    var SearchResultView = Backbone.View.extend({
        tagName: 'li',
        template: null,

        initialize: function(){
            console.log(this.template);
            console.log(templatesModel);
            this.template = templatesModel.currentResultItemTemplate;
            console.log(this.template);
        },

        render: function(){
            console.log(this.template);
            console.log($('#data-display__result').html());
            var tempFn = doT.template(this.template);
                var resultHtml = tempFn(this.model);
            return  resultHtml
        }
});

    return SearchResultView;


});

