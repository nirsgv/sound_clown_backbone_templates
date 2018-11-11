// made to bootstrap the app
// global configuration

var LIB_PATH = 'lib/';

// we need to configure require.js so it will know where these modules are located
require.config({
   paths: {
       jquery: LIB_PATH+ 'jquery-min',
       underscore: LIB_PATH+ 'underscore-min',
       backbone: LIB_PATH+ 'backbone-min',
       dot: LIB_PATH+ 'doT',
       soundcloud_sdk: 'https://connect.soundcloud.com/sdk/sdk-3.3.0',
       soundcloud_api: 'https://w.soundcloud.com/player/api',
       fetchData: 'utils/fetch_data',
       generalUtils: 'utils/general_utils',
       constants: 'utils/constants',
       searchInput: 'views/searchInputView',
       searchResultsView: 'views/searchResultsView',
       //searchResultView: 'views/searchResultView',
       searchInputModel: 'models/searchInputModel',
       track: 'models/Track',
       currentResultsModel: 'models/currentResultsModel',
       CurrentResultsCollection: 'collections/CurrentResultsCollection'
   }
});

// only need app to require all other modules
define(['app'], function(App){
    App.initialize();
});