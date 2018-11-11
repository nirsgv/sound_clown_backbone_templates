
define([
    'jquery',
    'underscore',
    'backbone',
    'fetchData',
    'generalUtils',
    'searchInputModel',
    'currentResultsModel'
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
            this.setCurrentResults(searchInputModel.get('currentString'));
        },

        setCurrentResults: function(name){
            generalUtils.consoleLogSomething('something');
            fetchData.getTracks(name).then((res)=>{
                currentResultsModel.set({'currentResults': generalUtils.purifySearchResults(res)});
            });
        },

        onInputChangeHandler: function(e){
            //searchInputModel.currentString = e.target.value;
            searchInputModel.set({'currentString': e.target.value});
            console.log(searchInputModel);
            console.log(searchInputModel.get('currentString'));
        },

        render: function(){
            this.$el.html(
                "<input class='textInput' placeholder='Write something...'/>" +
                "<button class='click'>click</button>"
            );
            return this;
        }
    });

    var searchInputView = new SearchInputView({
        el: "#main",
        model: currentResultsModel
    });



    return searchInputView;


});

