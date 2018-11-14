
define([
    'jquery',
    'underscore',
    'currentResultsModel',
    'lastSearchedModel',
    'trackDispatcherModel',
    'generalUtils'
], function( $, _, currentResultsModel, lastSearchedModel, trackDispatcherModel, generalUtils){

    var SearchResultsView = Backbone.View.extend({
        el: "#searchResults",
        model: currentResultsModel,
        attributes: {
            className: 'dngnddn',
            id: 'dsfhfhb'
        },
        events: {
            "click .data-display__result": "dispatchTrackIntoImageDispatcher"
        },
        self: this,
        initialize: function(self){
            // console.log(generalUtils);
            // console.log(_);
            // console.log(this);
            // console.log(self);
            // console.log(this.model);
            // console.log(lastSearchedModel);
            // console.log(trackDispatcherModel);

            this.model.on("change",this.render, this);
        },

        getTrackById: function (tracks, id) {
            return tracks.filter(track => track.id === id)[0];
        },

        dispatchTrackIntoImageDispatcher: function(e){
            var relevantId = Number(e.currentTarget.getAttribute('track-id'));
            var relevantTracks = this.model.get('currentResults');
            trackDispatcherModel.set('currentTrack', this.getTrackById(relevantTracks,relevantId));

            var textElem = event.target.children[0];
            var destElem = document.getElementsByClassName('img-dispatcher')[0];
            this.animateClonedIntoDestination(textElem, destElem);
        },

        /**
         * Uses 'getBoundingClientRect' to return an element's center, horizontally and vertically,
         * returns an array of two items.
         * @param {DOM element} elem - an element from the DOM.
         */
        getCenter: function(elem) {
            console.log(elem);
            const elemBoundRect = elem.getBoundingClientRect();
            const horCenter = elemBoundRect.left + (elemBoundRect.width / 2);
            const verCenter = elemBoundRect.top + (elemBoundRect.height / 2);
            return [horCenter, verCenter];
        },
        /**
         * Uses 'getBoundingClientRect' to return an element's left offset and top offset position,
         * returns an array of two items.
         * @param {DOM element} elem - an element from the DOM.
         */
        getOffset: function(elem) {
            const elemBoundRect = elem.getBoundingClientRect();
            const horOffset = elemBoundRect.left;
            const verOffset = elemBoundRect.top;
            return [horOffset, verOffset];
        },
        /**
         * Uses 'getBoundingClientRect' to return an element's width and height,
         * returns an array of two items.
         * @param {DOM element} elem - an element from the DOM.
         */
        getSize: function(elem) {
            const elemBoundRect = elem.getBoundingClientRect();
            const width = elemBoundRect.width;
            const height = elemBoundRect.height;
            return [width, height];
        },

        animateClonedIntoDestination: function( startingElem, destinationElem ) {
            const startPosition = this.getOffset(startingElem);
            const destination = this.getCenter(destinationElem);
            console.log(destinationElem);

            const elemSize = this.getSize(startingElem);
            const clonedElemNode = startingElem.cloneNode(true);
            const uniqueId = Math.random().toFixed(6) * 10;
            clonedElemNode.classList.add('animated-cloned-element');
            clonedElemNode.setAttribute('id', uniqueId);
            clonedElemNode.setAttribute('style', `position:fixed;left:${startPosition[0]}px;top:${startPosition[1]}px;`);
            // clonedElemNode.trackId = id;
            clonedElemNode.addEventListener('transitionend', this.cloneTransitionEnded, false);
            const realXcenter = destination[0] - elemSize[0] / 2;
            const realYcenter = destination[1] - elemSize[1] / 2;
            event.target.parentNode.append(clonedElemNode);
            const catchClonedElement = document.getElementById(uniqueId);
             window.setTimeout(function () {
                 catchClonedElement.setAttribute('style', `position:fixed;left:${realXcenter}px;top:${realYcenter}px;`);
             }, 0);
        },
        cloneTransitionEnded: function (event) {
            //controller.loadTrack(event.target.trackId);
            event.target.remove();
        },
        render: function(){
            var results = this.model.get('currentResults').map(t => `
                    <li class="data-display__result" track-id="${t.id}">
                         <div class="waveform-bkg" style="background-image: url(${t.waveform_url})">
                            <span class="data-display__link">${t.title}</span>
                        </div>
                    </div>`).join('');
            this.$el.html(results);

            return this;
        }
    });

    return SearchResultsView;

});

