# Get collecting with My Pretty Unicorn Collector!

![Unicorns](https://cdn.dribbble.com/users/141427/screenshots/2072640/lu_dribble_1x.png)

Let's create our very own unicorn app, where we can see a list of unicorns, add new unicorns to our list, and go to individual unicorn show pages.

## Part 1
Right now, we can't see any of the unicorns from our server on the page. Let's change that with a fetch request.

* Using the `UnicornPageContainer` and `UnicornIndexContainer` hook up the backend with the application such that each unicorn in `unicorns.json` is render as a name on the screen in a list

## Part 2
* In the `UnicornFormContainer` ensure that wha the user types into the fields are saved in state
* Hook up this form with a POST fetch to persist our unicorn in `unicorns.json`
* After posting, the new unicorn should appear in the list on the page

## Part 3
  I wish to see ONLY one unicorn on a page, where I can see all of the little details about a unicorn. We'll need a show page and react router to help us make our dreams come true.

  * Define routes in `App.js` such that router renders our app. Going to `"/"` or `"/unicorns"` should render the UnicornPageContainter as usual. Hook up App.js with your React app via main.js
  * Define a route for the `/unicorns/:id`, such that a new component, `UnicornShowContainer` is rendered on the screen
  * The `UnicornShowContainer` should display the `name` and `description` of our respective unicorn. Note: You'll likely need to make another fetch request on componentDidMount to retrieve this information.
  * Be sure to add a `Link` component, so that each `li` in our unicorns list is actually a link to the unicorn's show page.