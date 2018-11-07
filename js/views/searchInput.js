
define([
    'jquery',
    'underscore',
    'backbone',
    'fetchData',
    'generalUtils',
], function( $, _, Backbone, fetchData, generalUtils ){

    var SearchInputModel = Backbone.Model.extend();

    var searchInputModel = new SearchInputModel({currentString: ''});

    var SearchInputView = Backbone.View.extend({
        el: 'input',
        attributes: {
            className: 'click',
            id: 'click'
        },
        events: {
            "click .click": "onClickHandler",
            "input .textInput": "onInputChangeHandler"
        },

        initialize: function(){
        },

        onClickHandler: function(){
            generalUtils.consoleLogSomething('something');
            fetchData.getTracks(searchInputModel.currentString).then((res)=>{console.log(res)});
        },

        onInputChangeHandler: function(e){
            console.log(e.target.value);
            searchInputModel.currentString = e.target.value;
            console.log(searchInputModel.currentString);
        },

        render: function(){
            this.$el.html(
                "<input class='textInput' placeholder='Write something...'/>" +
                "<button class='click'>click</button>");

            return this;
        }

    });

    var searchInputView = new SearchInputView({
        el: "#main",
        model: 'song1'
    });

    searchInputView.render({asd:"asdasd"});


    return SearchInputView;


});

