
define([
    'jquery',
    'underscore',
    'generalUtils',
    'toggleSearchResultsModel',
    'LastSearchedItemView',
], function( $, _, generalUtils, toggleSearchResultsModel , LastSearchedItemView ){

    var LastSearchedView = Backbone.View.extend({
        el: "#lastSearched",
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
            this.model.on("change",this.render, this);
            toggleSearchResultsModel.on("change",this.justRender, this);
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
            var displayedLastResults = lastSearchedArr.map(s => new LastSearchedItemView({model:s}).render()).join('');

            var container = `<ul id="lastSearched" class="${toggleSearchResultsModel.get('currentlyToggled')==='searched' ? 'active' : 'inactive'}">${displayedLastResults}</ul>`;
            container.innerHTML = displayedLastResults;
            this.$el.html(container);

            return this;
        }
    });
    return LastSearchedView;
});

