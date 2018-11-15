
define([
    'jquery',
    'underscore',
    'generalUtils',
    'currentResultsModel',
], function( $, _, generalUtils, currentResultsModel ){

    var NextButtonView = Backbone.View.extend({
        el: "#soundcloud-strip",
        //model: lastSearchedModel,
        attributes: {
            id: 'next-href-button',
        },
        events: {
            "click #next-href-button": "searchNextResultsHandler"
        },
        self: this,
        initialize: function(self){
            console.log(this.model);
            this.model.on("change",this.modelChanged, this);
        },

        modelChanged: function(){
            console.log(this);
            console.log(this.model);
            console.log(generalUtils);

            this.render();
        },

        searchNextResultsHandler: function(){
            console.log(this);
            console.log(this.model);
            generalUtils.getNextBatch(this.model.get('nextHref'));

            this.render();
        },

        isButtonActive: function(){
            return this.model.get('nextHref') ? 'active' : 'inactive';
        },

        render: function(){
            var nextHrefButton = `
                <button 
                id="${this.attributes.id}" 
                data-nextHref="${this.model.get('nextHref')}" 
                class="next-results-button ${this.isButtonActive()}">
                    Next results
                </button>
                                        `;

            this.$el.html(
                nextHrefButton
            );

            return this;
        }
    });
    return NextButtonView;
});

