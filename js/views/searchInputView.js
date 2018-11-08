
define([
    'jquery',
    'underscore',
    'backbone',
    'fetchData',
    'generalUtils',
    'searchInputModel',
    'currentResultsModel',
], function( $, _, Backbone, fetchData, generalUtils, searchInputModel, currentResultsModel ){

    var SearchInputView = Backbone.View.extend({
        el: 'input',
        attributes: {
            className: 'click',
            id: 'click'
        },
        events: {
            "click .click": "onSearchSubmitHandler",
            "input .textInput": "onInputChangeHandler"
        },

        initialize: function(){
        },

        onSearchSubmitHandler: function(){
            generalUtils.consoleLogSomething('something');
            fetchData.getTracks(searchInputModel.currentString).then((res)=>{
                currentResultsModel.currentResults = res;

                for (var i = 0; i<res.length; i++){
                    console.log(res[i]);
                }

                console.log(currentResultsModel.currentResults)
            });
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

