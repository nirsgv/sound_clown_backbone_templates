
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
           // "click .data-display__result": "chooseTrack"
        },
        self: this,
        initialize: function(self){
            this.model.on("change",this.render, this);
        },

        chooseTrack: function(e){
            console.log(e.currentTarget);
            console.log(e.currentTarget.getAttribute('track-id'));
        },

        render: function(){
            console.log('LastSearchedView rendered');
            console.log(this.model.get('lastSearchedStrings'));
            var lastSearchedArr = this.model.get('lastSearchedStrings').split(',');
            console.log(lastSearchedArr);
            var displayedLastResults = lastSearchedArr.map(s =>
                `<li class="data-display__result">
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

