define([
    'underscore',
    'backbone',
    'searchResultsView'
], function ( _, Backbone ) {

    var LastSearchedModel = Backbone.Model.extend({
        defaults: {
            //LAST_SEARCHED: 'sound_clown.lastSearched',
            lastSearchedStrings: ''
        },
        initialize: function() {
            this.on('change', this.setLocalStorageByModel, this);
            console.log(this);

            const ls = this.get('LAST_SEARCHED');
            console.log(ls);
                if(window.localStorage.getItem('lastSearched')){
                    // if there is localStorage information, set it in this model
                    this.set('lastSearchedStrings',window.localStorage.getItem('lastSearched'));
                    console.log('window.localStorage.lastSearched: ' + window.localStorage.getItem('lastSearched'));
                    console.log('this model lastSearched: ' + this.get('lastSearchedStrings'));
                } else {
                    // if there is no localStorage information, set it in this model as an empty array
                    this.set('lastSearchedStrings', '');
                    console.log('this model lastSearched: ' + this.get('lastSearchedStrings'));
                }
            },

        setLocalStorageByModel: function() {
            window.localStorage.setItem('lastSearched', this.get('lastSearchedStrings'));
            console.log(window.localStorage);
        },
    });

    // initializing lastSearchedModel
    var lastSearchedModel = new LastSearchedModel({});


    return lastSearchedModel;
});

