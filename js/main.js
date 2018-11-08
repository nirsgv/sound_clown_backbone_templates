// made to bootstrap the app
// global configuration

var LIB_PATH = 'lib/';

// we need to configure require.js so it will know where these modules are located
require.config({
   paths: {
       jquery: LIB_PATH+ 'jquery-min',
       underscore: LIB_PATH+ 'underscore-min',
       backbone: LIB_PATH+ 'backbone-min',
       soundcloud_sdk: 'https://connect.soundcloud.com/sdk/sdk-3.3.0',
       soundcloud_api: 'https://w.soundcloud.com/player/api',
       fetchData: 'utils/fetch_data',
       generalUtils: 'utils/general_utils',
       constants: 'utils/constants',
       searchInput: 'views/searchInputView',
       searchInputModel: 'models/searchInputModel',
       currentResultsModel: 'models/currentResultsModel'
   }
});

// only need app to require all other modules
define(['app'], function(App){
    App.initialize();
});