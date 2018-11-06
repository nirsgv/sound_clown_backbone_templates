
define([
    'jquery',
    'underscore',
    'backbone',
    'models/track',
], function($, _, Backbone, Track){

    var TrackView = Backbone.View.extend({

        render: function(){
            this.$el.html(this.model.get('title'));

            return this;
        }
    });

    return TrackView;
});

