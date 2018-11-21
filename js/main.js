// made to bootstrap the app
// global configuration

var LIB_PATH = 'lib/';

// we need to configure require.js so it will know where these modules are located
require.config({
   paths: {
       jquery: LIB_PATH+ 'jquery-min',
       underscore: LIB_PATH+ 'underscore-min',
       backbone: LIB_PATH+ 'backbone-min',
       doT: LIB_PATH+ 'doT',

       soundcloud_sdk: 'https://connect.soundcloud.com/sdk/sdk-3.3.0',
       soundcloud_api: 'https://w.soundcloud.com/player/api',

       generalUtils: 'utils/general_utils',
       constants: 'utils/constants',

       searchInput: 'views/searchInputView',
       searchResultsView: 'views/searchResultsView',
       searchResultView: 'views/searchResultView',
       LastSearchedView: 'views/LastSearchedView',
       LastSearchedItemView: 'views/LastSearchedItemView',
       TrackDispatcherView: 'views/trackDispatcherView',
       trackPlayerView: 'views/trackPlayerView',
       toggleSearchedResultsView: 'views/toggleSearchedResultsView',
       nextButtonView: 'views/nextButtonView',

       searchInputModel: 'models/searchInputModel',
       trackDispatcherModel: 'models/trackDispatcherModel',
       trackPlayerModel: 'models/trackPlayerModel',
       lastSearchedModel: 'models/lastSearchedModel',
       currentResultsModel: 'models/currentResultsModel',
       CurrentResultsCollection: 'collections/CurrentResultsCollection',
       toggleSearchResultsModel: 'models/toggleSearchResultsModel',
       templatesModel: 'models/templatesModel',

   }
});

// only need app to require all other modules
define(['app'], function(App,generalUtils){
    App.initialize(generalUtils);
});