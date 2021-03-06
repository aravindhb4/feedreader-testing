# Feed Reader Testing
***
An Udacity FEND - Feed Reader Testing Project using Jasmine

### Project Purpose

To do test automation using Jasmine on the Feed reader website to ensure its functionalities are working.

### Using the application
* Download the files and open *index.html*.
* Jasmine test suite results can be seen below the blog.
* If they all are green, then our test cases are satisfied.
* Below are the tests in *feedreader.js* file.


### Tests Done 

###### Rss Feeds
* Must be defined
* Each contain an url and is not empty
* Each contain a name and is not empty

###### The Menu
* The side menu is hidden by default
* Menu is visible when the menu icon is clicked
* Visibility toggles when the icon is clicked again

###### Initial Entries
* Atleast 1 feed entry is displayed after the API call

###### New Feed Selection
* The feed content changes if a new feed is selected from the menu

***
###### References
* Udacity's [Javascript Testing Course](https://www.udacity.com/course/javascript-testing--ud549)
* Jasmine [Documentation](https://jasmine.github.io/)