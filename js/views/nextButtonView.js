
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
            return this.model.get('nextHref') ? 'next-results__button--active' : 'next-results__button--inactive';
        },

        render: function(){
            var nextHrefButton = `
                <a 
                id="${this.attributes.id}" 
                data-nextHref="${this.model.get('nextHref')}" 
                class="next-results__button ${this.isButtonActive()}">
                   <span class="next-results__text">Next results</span> 
                    <i class="next-results__icon icon next">
                         <svg class="icon" aria-hidden="true" focusable="false">
                            <use xlink:href="../../assets/img/icons.svg#next"></use>
                         </svg>    
                    </i>
                </a>

                                        `;

            this.$el.html(
                nextHrefButton
            );

            return this;
        }
    });
    return NextButtonView;
});

