/**
 * The height in pixels after which the content should be hidden.
 * This value should match the max-height set for CSS of #heightLimited.
 */
var cutoffHeightInPixels = 500;

/**
 * The number of characters in the content after which the content should be
 * hidden
 */
var cutoffContentLength = 2000;

/**
 * Execute on DOM Ready
 */
$(function() {
	
	/**
	 * Registering click handler for the btnAdd. On click this will create the
	 * html corresponding to a feed entry and add it to the feed. If the content
	 * exceeds the cutoff values mentioned above, it will display the 'Show
	 * More' link.
	 */
	$('#btnAdd').click(function() {
		console.log('Going to add new entry to feed');
		var contentText = $('#txtContent').val();
		var feedEntryHtml = $('<div class="container" style="display:none;"><div class="titleArea">This is the title</div><br/></div>'); 
		var pre = $('<pre class="actualContent"></pre>');
		pre.html(contentText);
		feedEntryHtml.append(pre);
		$('#ajaxResultArea').append(feedEntryHtml);
		if(feedEntryHtml.height() > cutoffHeightInPixels || contentText.length > cutoffContentLength) {
			var showMoreSpan = $('<span class="clickable">Show More</span>');
			feedEntryHtml.append(showMoreSpan);
			feedEntryHtml.children('.actualContent').addClass('heightLimited');
		}
		feedEntryHtml.show();
		console.log(feedEntryHtml.height() + ":" + pre.height());
	 //''
	});
	

	/**
	 * Register a click handler for the show more spans to toggle the
	 * heightLimited class based on their text. Setting the click handler in
	 * this way would ensure that the newly added spans to the DOM will also
	 * get the click handler associated.
	 */
	$(document).on('click', '.clickable', function() {
		var currentSpanText = $(this).html();
		var newSpanText = currentSpanText === 'Show More' ? 'Show Less' : 'Show More';
		$(this).html(newSpanText);
		$(this).siblings('.actualContent').toggleClass('heightLimited');
	});
	
});