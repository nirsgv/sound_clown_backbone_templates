
define([
    'jquery',
    'underscore',
    'generalUtils',
    'toggleSearchResultsModel',
    'LastSearchedItemView',
    'templatesModel',
    'doT'
], function( $, _, generalUtils, toggleSearchResultsModel , LastSearchedItemView, templatesModel, doT ){

    var LastSearchedView = Backbone.View.extend({
        el: "#lastSearched",
        //model: lastSearchedModel,
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
            this.model.on("change",this.render, this);
            toggleSearchResultsModel.on("change",this.justRender, this);
            this.template = templatesModel.lastSearchedItemsIteratedTemplate;
        },

        justRender: function(){
            this.render();
        },

        searchLastSearchedTitleHandler: function(e){
            var retreivedTitleForSearch = e.currentTarget.dataset.searched;
            generalUtils.setCurrentResults(retreivedTitleForSearch);
            toggleSearchResultsModel.set({'currentlyToggled':'results'});
        },

        render: function(){
            var lastSearchedArr = this.model.get('lastSearchedStrings').split(',').reverse();
            var templateData = {
                lastSearchedArr
            };
            //var displayedLastResults = lastSearchedArr.map(s => new LastSearchedItemView({model:s}).render()).join('');
            var tempFn = doT.template(this.template);
            var resultHtml = tempFn(templateData);
            var container = `<ul class="last-searched__items ${toggleSearchResultsModel.get('currentlyToggled') ==='searched' ? 'active' : 'inactive'}" id="lastSearched">
                                ${resultHtml}
                             </ul>`;
            this.$el.html(container);
            return this;
        }
    });
    return LastSearchedView;
});

