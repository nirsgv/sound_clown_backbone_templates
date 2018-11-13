
define([
    'jquery',
    'underscore',
    'backbone',
    'generalUtils',
    'searchInputModel',
    'currentResultsModel',
    'lastSearchedModel'
], function( $, _, Backbone, generalUtils, searchInputModel, currentResultsModel, lastSearchedModel ){

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
            console.log(generalUtils);
        },

        onSearchSubmitHandler: function(){
            generalUtils.setCurrentResults(searchInputModel.get('currentString'));
            this.setLastSearchedModel(searchInputModel.get('currentString'));
        },

        setLastSearchedModel: function(name){
            var modifiedArr = lastSearchedModel.get('lastSearchedStrings').split(',');
            // check for duplicates failed, add to list, cut list for five items length in total
            if (modifiedArr.indexOf(name) === -1) {
                modifiedArr.push(name);
                modifiedArr = modifiedArr.slice(-1 * 5);
                // check for duplicates passed, move item to last position
            } else {
                const hasElementPosition = modifiedArr.indexOf(name);
                const removedItem = modifiedArr.splice(hasElementPosition, 1);
                modifiedArr.push(removedItem[0]);
            }
            lastSearchedModel.set({'lastSearchedStrings': modifiedArr.join(',')});
        },

        onInputChangeHandler: function(e){
            searchInputModel.set({'currentString': e.target.value});
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

