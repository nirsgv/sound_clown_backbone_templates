
define([
    'jquery',
    'underscore',
    'backbone',
    'fetchData',
    'generalUtils',
    'searchInputModel',
    'currentResultsModel',
    'CurrentResultsCollection',
    'track',
], function( $, _, Backbone, fetchData, generalUtils, searchInputModel, currentResultsModel, CurrentResultsCollection, track ){

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
            this.setCurrentResults(searchInputModel.currentString);
        },

        setCurrentResults: function(name){
            generalUtils.consoleLogSomething('something');
            fetchData.getTracks(name).then((res)=>{
                //currentResultsModel.currentResults = generalUtils.purifySearchResults(res);
                currentResultsModel.set({'currentResults': generalUtils.purifySearchResults(res)});
                console.log(currentResultsModel.get('currentResults'));
            });
        },

        onInputChangeHandler: function(e){
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

