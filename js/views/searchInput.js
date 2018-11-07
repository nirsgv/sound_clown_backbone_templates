
define([
    'jquery',
    'underscore',
    'backbone',
    'fetchData',
    'generalUtils',
], function( $, _, Backbone, fetchData, generalUtils ){

    var SearchInputView = Backbone.View.extend({
        el: 'input',
        attributes: {
          className: 'asfsdf',
            id: 'wer'
        },
        events: {
            "click .click": "onClickHandler"
        },

        initialize: function(){
        },

        onClickHandler: function(){
            generalUtils.alertSomething();
            console.log(fetchData.getTracks('aphex twin'));

        },

        render: function(){
            this.$el.html("<button class='click'>click</button>");

            return this;
        }

    });

    var searchInputView = new SearchInputView({
        el: "#main",
        title: 'song1'
    });

    searchInputView.render({className:"asdasd"});


    return SearchInputView;


});

