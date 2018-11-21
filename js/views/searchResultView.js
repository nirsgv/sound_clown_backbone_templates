
define([
    'jquery',
    'underscore',
], function( $, _ ){

    var SearchResultView = Backbone.View.extend({
        tagName: 'li',
        // template: $.get( "js/templates/search-display__result.html", function( data ) {
        //     console.log( data );
        //     //alert( "Load was performed." );
        // }).done(function(datas) {
        //     console.log( datas );
        //     return datas.responseText;
        // }),

        initialize: function(self){
            console.log(this.template);
            this.render();
        },

        render: function(){

            //var tempFn = _.template($('#data-display__result').load("../templates/search-display__result.html"));

            // $.get( "js/templates/search-display__result.html", function( data ) {
            //     console.log( data );
            //     //alert( "Load was performed." );
            // }).done(function(data) {
            //     ttt = data.responseText;
            // });
            // console.log( ttt );

            var tempFn = _.template($('#data-display__result').html());
                var resultHtml = tempFn(this.model);
                //console.log(this.model);
                //console.log(resultHtml);
            return  resultHtml
        }

});



    return SearchResultView;


});

