const questions = [
  {
    id: 1,
    title: 'What are the features of React?',
    info: 'The major features of React are listed below: it uses the virtual DOM instead of the real DOM, it uses server-side rendering, it follows uni-directional data flow or data binding.',
  },
  {
    id: 2,
    title: 'What is the virtual DOM?',
    info: 'The virtual DOM (Document Object Model) represents the real DOM that is stored in memory. React uses the virtual DOM to detect changes in the DOM tree and then updates the real DOM when necessary. This results in better UI performance.',
  },
  {
    id: 3,
    title: 'Which versions of React include Hooks?',
    info: 'Starting with 16.8.0, React includes a stable implementation of React Hooks for: React DOM, React Native, React DOM Server, React Test Renderer, React Shallow Renderer.',
  },
  {
    id: 4,
    title: "Why can’t browsers read JSX?",
    info: 'Browsers can only read JavaScript objects but JSX is not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform the JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.',
  },
  {
    id: 5,
    title: 'What is a state in React and how is it used?',
    info: 'States are the heart of React components. States are the data source and must be kept as simple as possible. Basically, states are the objects that determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components.',
  },
];
export default questions;
