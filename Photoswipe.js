/*
		 This example shows how to set up the gallery without
		 using the Code.photoSwipe() helper or the $.photoSwipe() jQuery plugin.
		 
		 The example finds the Gallery container, then finds all anchor tags in 
		 the container (thumbnails).
		 
		 It then sets a click event listener on the container.
		 
		 When the user clicks the container, it checks to see if an image has been
		 clicked (i.e. a thumbnail).
		 
		 It then attempts to find the index number of the thumbnail clicked 
		 (from our list of thumbnails) and starts PhotoSwipe at that index.
		 */
		 
		if(typeof document.querySelectorAll === 'function') {
			
			document.addEventListener('DOMContentLoaded', function(){
				
				// Find the element holding our photos
				var galleryEl = document.getElementById('Gallery');
				
				
				// Find all the photos in our gallery
				var thumbEls = galleryEl.querySelectorAll('a');
				
				if (thumbEls.length < 1) {
					return;
				}
				
				// Set options (optional)
				Code.PhotoSwipe.Current.setOptions({
					loop: false
				});
				
				
				// Tell PhotoSwipe about the photos
				Code.PhotoSwipe.Current.setImages(thumbEls);
				
				
				// Listen out for when the user clicks the gallery
				galleryEl.addEventListener('click', function(e){
					
					// If we clicked an image, start the gallery at that image
					if (e.target.nodeName !== 'IMG'){
						return;
					}
					
					e.preventDefault();
					
					var linkEl = e.target.parentNode;
					
					var startingIndex = 0;
					for (startingIndex; startingIndex<thumbEls.length; startingIndex++){
						if (thumbEls[startingIndex] === linkEl){
							break;
						}
					}
					
					// Start PhotoSwipe
					Code.PhotoSwipe.Current.show(startingIndex);
				
				}, false);
			
			
			}, false); 
			
		}
