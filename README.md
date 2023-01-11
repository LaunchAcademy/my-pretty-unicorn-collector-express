# Get collecting with My Pretty Unicorn Collector!

![Unicorns](https://cdn.dribbble.com/users/141427/screenshots/2072640/lu_dribble_1x.png)

Let's create our very own unicorn app, where we can see a list of unicorns, add new unicorns to our list, and go to individual unicorn show pages.

Much of the code has already been implemented. The backend APIs are already configured. In the front-end, the component and even some JSX has already been written.

That said, feel free to play around with the codebase as you see fit.

## Part 1

Right now, we can't see any of the unicorns from our server on the page. Let's change that with a fetch request. The top level component to start is the `UnicornPageContainer`, though this may change when React Router is implemented.

* Using the `UnicornPageContainer` and `UnicornIndexContainer` hook up the backend with the application such that each unicorn in `unicorns.json` is rendered as a name on the screen in a list

## Part 2

* In the `UnicornFormContainer` ensure that when the user types into the provided form, that the input is saved to state.
* Hook up this form with a POST fetch to persist our unicorn in `unicorns.json` file in our server.
* After posting, the new unicorn should appear in the list on the page without needing a refresh.

## Part 3

I wish to see a unicorn details page (about only one unicorn). The page should display all properties of a unicorn. For this, we will need to implement React Router at the top of our React app to have separate pages for the UnicornPageContainer and UnicornShowContainer respectively.

Note: Make sure that `main.js` is rendering the `App`!

* Define routes in `App.js` such that the router renders our app. Going to `"/"` or `"/unicorns"` should render the UnicornPageContainer as usual. Hook up App.js with your React app via main.js
* Define a route for the `/unicorns/:id`, such that a new component, `UnicornShowContainer` is rendered on the screen
* The `UnicornShowContainer` should display the `name` and `description` of our respective unicorn. Note: You'll need to make another fetch request when the component first renders to retrieve this information.
* Be sure to add a `Link` component from React Router, so that each `li` in our unicorns list is actually a link to a unicorn's show page
