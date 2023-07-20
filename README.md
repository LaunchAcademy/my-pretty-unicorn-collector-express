# Get collecting with My Pretty Unicorn Collector!

![Unicorns](https://cdn.dribbble.com/users/141427/screenshots/2072640/lu_dribble_1x.png)

Let's create our very own unicorn app, where we can see a list of unicorns, add new unicorns to our list, and go to individual unicorn show pages.

Much of the code has already been implemented. The backend APIs endpoints are already configured for you, but be sure to familiarize yourself with what each does. In the React front-end, some of the code has been provided for you, but you need to add the logic.

```
git clone https://github.com/LaunchAcademy/my-pretty-unicorn-collector-express
cd my-pretty-unicorn-collector-express
yarn install
yarn dev
```

## Step 1: Unicorn Dashboard 
We want to see all of the unicorns that are currently stored in the `unicorns.json` file appear on the page. We should see these unicorns (and the unicorn form) when navigating to "/unicorns"

#### Acceptance Criteria 
- At the "/unicorns" path, the UnicornDashboard should be the topmost component in your tree (after React Router). Use the appropriate React Router code in `App` to set this up.
- The UnicornDashboard renders our UnicornList component, which is responsible for displaying each unicorn on the page
- Update the UnicornDashboard to fetch available unicorns from the `/api/v1/unicorns` endpoint
- Add the fetched unicorns to state to display each unicorn's name

## Step 2: The Form and Persisting New Unicorn Buddies

- At the same `/unicorns` path, the new unicorn form should be displayed
- In the `UnicornFormContainer` ensure that when the user types into the provided form, that the input is saved to state.
- Hook up this form with a POST fetch to persist our unicorn in `unicorns.json` file in our server.
- After posting, the new unicorn should appear in the list on the page without needing a refresh.
- The `value` property of each input field should be reliant on a related state value

Optional: 
- Add a default unicorn name and unicorn description that a user can edit once interacting with the form
- Add a "Clear" button that erases the text from the form (and from state)

## Unicorn Details Page

## Part 3

- At the path "/unicorns/:id", the `UnicornDetailsPage` should be rendered, displaying the name and description of the unicorn whose `id` matches the id in the URL e.g. `/unicorns/3` should display the unicorn that has an id of 3.
- ensure that the appropriate fetch request is made using this id (accessible via React Router props) to populate the unicorn state for this page
- A user can navigate to this page by clicking on the name of a unicorn from the `UnicornDashboard`. Ensure that React Router is used for navigation. No `<a>` tags.
