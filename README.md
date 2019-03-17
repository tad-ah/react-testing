# Demo project for testing

## Rendering

### In `src/Button.jsx`:

1. The first test `it sets the expected text to state when clicked` checks whether the state is set 
when `onClick` is triggered.

2. The test `it shows the expected text when clicked` shows how to check if a given text is being rendered -> 
what the user sees!

### In `src/Users.jsx`:

`shows a list of users` demos how to trigger the `componentDidMount` method and how to mock a method call which a 
component depends on.

E.g. `Users.componentDidMount` calls `axios.get`. 