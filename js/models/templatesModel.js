// now we need to wrap each one of these types inside a require.js module
// the define function comes with require.js
// the define function takes two arguments - an array of dependencies and a factory function which is called when all of the dependencies are loaded
define([
    'underscore',
    'backbone'
], function ( _, Backbone ) {

    var TemplatesModel = Backbone.Model.extend({

        retreiveAndSet: function(path,destination){
            $.get( path, function( data ) {
                console.log( data );
                this[destination] = data;
                console.log(this);
            }.bind(this));
        },

        initialize: function(){
            console.log('templatesModel initialized');
            this.retreiveAndSet("js/templates/data-display__result.html",'currentResultItemTemplate');
            this.retreiveAndSet("js/templates/search-display__result.html",'lastSearchedItemTemplate');
        },
    });

    var templatesModel = new TemplatesModel({
        currentResultItemTemplate: null,
        lastSearchedItemTemplate: null,
    });

    return templatesModel;
});

