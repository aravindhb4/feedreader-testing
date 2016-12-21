/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // This test loops through each feed in the allFeeds 
         // object and ensures it has a URL defined
         // and that the URL is not empty.
         
        it('each have an url defined', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });


         // This test loops through each feed in the allFeeds 
         // object and ensures it has a name defined
         // and that the name is not empty.
        it('each have a name defined', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
        });
    });

    // This is the second test suite named 'The menu'
    describe('The menu', function() {

    	var hiddenMenu = $('body').hasClass('menu-hidden');
         // This test ensures that the menu element is
         // hidden by default. This checks if the CSS class to
         // hide the menu is present in the body
        it('is hidden by default', function() {
            expect(hiddenMenu).toBe(true);
        });

         // This test ensures that the menu changes
         // visibility when the menu icon is clicked. This test
         // should have two expectations: does the menu display when
         // clicked and does it hide when clicked again.
        it('is displayed when menu icon is clicked', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });

        //This test is to verify menu is hidden after second click
        it('is hidden when menu icon is clicked again', function() {
            $('a.menu-icon-link').click();
            expect(hiddenMenu).toBe(true);
        });

    });    

   // This is the third test suite named "Initial Entries" 
    describe('Initial Entries', function() {
        var entryCount;

        beforeEach(function(done) {
            loadFeed(0, done)
            });

         // This test suite ensures that when the loadFeed
         // function is called and completes its work, there is at least
         // a single .entry element within the .feed container.

        it('contain atleast a single entry', function() {
            entryCount = $('.feed .entry').length;
            expect(entryCount).toBeGreaterThan(0);
        });
    });

     // This is the final test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
        var compareContent;

        beforeEach(function(done) {
            loadFeed(1, function() {
                compareContent = $('.feed').html();
                done();
            });
        });

          // This test ensures that when a new feed is loaded
          // by the loadFeed function that the content actually changes.

        it('changes the content', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(compareContent);
                done();
            });
        });
    });

}());
