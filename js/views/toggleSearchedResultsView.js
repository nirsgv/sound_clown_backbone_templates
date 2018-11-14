
define([
    'jquery',
    'underscore'
], function( $, _ ){

    var ToggleSearchedResultsView = Backbone.View.extend({
        el: "#toggleSearchResultsViews",
        //model: lastSearchedModel,
        attributes: {
            className: 'toggle-search-results-views',
        },
        events: {
            "click .toggle-item": "toggleSearchLists"
        },
        self: this,

        initialize: function(self){
            this.model.on("change",this.modelChanged, this);
        },

        modelChanged: function(){
            this.render();
        },

        toggleSearchLists: function(e){
            if (e.target.getAttribute('id')==='search-results-toggle-item'){
                this.model.set({'currentlyToggled':'results'});
            } else if
                (e.target.getAttribute('id')==='last-searches-toggle-item') {
                this.model.set({'currentlyToggled':'searched'});
            }
            console.log(this.model);
        },

        render: function(){
            var toggleSearchedResults = `
                                       <li class="toggle-item ${this.model.get('currentlyToggled')==='results' ? 'selected' : true}" id="search-results-toggle-item">Search results</li>
                                       <li class="toggle-item ${this.model.get('currentlyToggled')==='searched' ? 'selected' : true}" id="last-searches-toggle-item">Last searches</li>
                                        `;

            this.$el.html(
                toggleSearchedResults
            );

            return this;
        }
    });
    return ToggleSearchedResultsView;
});

