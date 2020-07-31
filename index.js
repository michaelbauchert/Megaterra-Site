import App from './components/App.svelte';

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});