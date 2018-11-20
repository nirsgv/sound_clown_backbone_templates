
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
            this.model.on("change",this.render, this);
        },

        render: function(){
            var lastSearchedArr = this.model.get('lastSearchedStrings').split(',').reverse();
            var displayedLastResults = lastSearchedArr.map(s =>
                `<li class="searched-display__result" data-searched="${s}">
                             <span class="data-display__link">${s}</span>
                 </div>`
            ).join('');
            var container = `<ul id="lastSearched" class="${toggleSearchResultsModel.get('currentlyToggled')==='searched' ? 'active' : 'inactive'}">
                ${displayedLastResults}</ul>`;
            container.innerHTML = displayedLastResults;
            this.$el.html(container);

            return this;
        }
    });
    return LastSearchedItemView;
});

