const app = {
  title: 'Visibility Toggle',
  hideDetails: true
}

const toggleDetails = () => {
  app.hideDetails = !app.hideDetails;
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>
        {app.hideDetails ? 'Show details' : 'Hide details'}
      </button>
      {!app.hideDetails && (<p>Hey. There are some details you can now see!</p>)}
    </div>
  )
  ReactDOM.render(template, appRoot);
};

render();