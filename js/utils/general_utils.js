
define([
    'underscore',
    'backbone',
], function( _, Backbone ){

    var initialize = function (constants){

    };

    var alertSomething = function(){
        alert('something');
    };

    var fetchCollectionByName = function (name){

    };

    var fetchItemById = function (id){

    };
    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize,
        fetchCollectionByName,
        fetchItemById,
        alertSomething
    }
});

//getTracks().then()