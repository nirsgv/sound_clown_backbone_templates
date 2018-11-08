
define([
    'underscore',
    'backbone',
    'constants',
], function( _, soundcloud_api, constants ){

    var initialize = function (constants){
        console.log('utils initialized');
        console.log(constants.user_id);
    };

    var fetchCollectionByName = function (name){

    };

    var fetchItemById = function (id){

    };

    var getTracks = function (queryString) {
        SC.initialize({
            client_id: 'E8IqLGTYxHll6SyaM7LKrMzKveWkcrjg'
        });
        return  SC.get('/tracks', {
            q: queryString,
            limit: 200
        });
    };

    // here we are using the revealing module pattern
    // what we are returning here we expose to the world as public
    return {
        initialize,
        fetchCollectionByName,
        fetchItemById,
        getTracks
    }
});

//getTracks().then()