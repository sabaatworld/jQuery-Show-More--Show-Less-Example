jQuery-Show-More--Show-Less-Example
===================================

A complete and easy implementation of the 'Show More' / 'Show Less' plugin.

This example code illustrates a simple way to setup your own 'Show More' / 'Show Less' feature using jQuery on pages in which you may want to display a large amount of text.

There are already a lot of plugins which do the job, but they do not provide all the features that I want. The code in this repo will basically help you understand how to make this work. You can use this sample code also if you are displaying content via AJAX. You will not need to import any files to get this working.

<b>What to take care of?</b>

<b>Assumption:</b> That your text on which you are applying is about 20,000 characters long. We will be showing the content in a &lt;pre&gt; HTML tag on the page with.

<b>CASE#1:</b> Your text may contain a lot of spaces and/or line breaks (Eg. A code file). In this case, if the whole text is shown, it will take a lot of space on the screen vertically. We use a size in pixels (whatever is suitable to you), to limit the amount of text shown along with the 'Show More' link.

<b>CASE#2:</b> Your text may not contain even a single space and is a continuos blob of characters. In this case, even thought the text may be of the max allowed length, it may still take up significantly less space vertically that the pixels size you choose to handle CASE#1. To handle this case you would have to place a limit on the minimum number of characters needed to be present before you will hide the text.

<b>TIP:</b> To determine the limit in CASE#2, you can do the following (Trial and error method):
A. Set the pixel limit in as told in the CASE#1 and try to display a text like mentioned in CASE#2.
B. Count the number of characters getting displayed using a word processor like 'Microsoft Word' or 'Notepad++'. This would be the required count.


<b>Example:</b> Open index.html in your browser to see this in action. All the content is present in the 'src' folder. The example page allows type your custom text and get the script applied to it, and keep on adding it like entries in a feed.
