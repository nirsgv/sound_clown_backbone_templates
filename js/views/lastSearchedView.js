
define([
    'jquery',
    'underscore',
    'generalUtils',
    'currentResultsModel',
], function( $, _, generalUtils, currentResultsModel ){

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
        },

        searchLastSearchedTitleHandler: function(e){
            var retreivedTitleForSearch = e.currentTarget.dataset.searched;
            generalUtils.setCurrentResults(retreivedTitleForSearch);
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

