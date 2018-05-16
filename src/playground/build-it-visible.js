class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Hey. There are some details you can now see!</p>
        </div>
      )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   hideDetails: true
// }

// const toggleDetails = () => {
//   app.hideDetails = !app.hideDetails;
//   render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDetails}>
//         {app.hideDetails ? 'Show details' : 'Hide details'}
//       </button>
//       {!app.hideDetails && (<p>Hey. There are some details you can now see!</p>)}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// };

// render();