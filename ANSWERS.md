- [ ] Why would you use class component over function components (removing hooks from the question)?

If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.
Another feature which you cannot use in functional components are lifecycle hooks. The reason is the same like for state, all lifecycle hooks are coming from the React.Component which you extend from in class components. So if you need lifecycle hooks you should probably use a class component.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount()
componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.
componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.

componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.
You can call setState() in this lifecycle, but keep in mind that you will need to wrap it in a condition to check for state or prop changes from previous state.

componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot.
This component will never be re-rendered and because of that we cannot call setState() during this lifecycle method.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again.
Each time state or a prop is changed, the functional component is being re-rendered and, thusly, our custom hook is being called over and over again.
We can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.

- [ ] Why is it important to test our apps?

Testing our apps helps surface bugs faster, reduce the risk of regressions and allows us to trust the code.


