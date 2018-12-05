
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
            "click .search__button": "onSearchSubmitHandler",
            "input .search__input": "onInputChangeHandler"
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
                modifiedArr = modifiedArr.slice(-1 * 6);
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
            var content = `<section id="input-container" class="search container">
                             <input class='search__input' placeholder='Write something...'/>
                <a 
                id="${this.attributes.id}" 
                class="search__button"
                >
                   <span class="search__text"></span> 
                    <i class="search__icon icon search">
                         <svg class="icon" aria-hidden="true" focusable="false">
                            <use xlink:href="../../assets/img/icons.svg#search"></use>
                         </svg>    
                    </i>
                </a>                             
                           </section>`;
            this.$el.prepend(content);
            return this;
        }
    });

    var searchInputView = new SearchInputView({
        el: "#search-with-toggle-strip",
        model: currentResultsModel
    });

    return searchInputView;

});

