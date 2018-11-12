
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'searchResultsView',
    'lastSearchedModel'
], function( $, _, currentResultsModel, SearchResultsView, LastSearchedModel ){

    var LastSearchedView = Backbone.View.extend({
        el: "#lastSearched",
        //model: lastSearchedModel,
        attributes: {
            className: 'sdf',
            id: 'abc'
        },
        events: {
            "click .searched-display__result": "searchLastSearchedTitle"
        },
        self: this,
        initialize: function(self){
            this.model.on("change",this.render, this);
        },

        searchLastSearchedTitle: function(e){
            console.log(e.currentTarget);
            console.log(e.currentTarget.dataset.searched);
        },

        render: function(){
            console.log('LastSearchedView rendered');
            console.log(this.model.get('lastSearchedStrings'));
            var lastSearchedArr = this.model.get('lastSearchedStrings').split(',');
            console.log(lastSearchedArr);
            var displayedLastResults = lastSearchedArr.map(s =>
                `<li class="searched-display__result" data-searched="${s}">
                             <span class="data-display__link">${s}</span>
                 </div>`
            ).join('');
            console.log(displayedLastResults);
            this.$el.html(displayedLastResults);

            return this;
        }
    });
    return LastSearchedView;
});

