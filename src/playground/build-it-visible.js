class Action extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1> Visibility toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Now you can see</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<Action />, document.getElementById("app"));
// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
// const render = () => {
//   const app = {
//     title: "Visibility Toggle",
//   };
//   const appRoot = document.getElementById("app");
//   const template = (
//     <div>
//       <h1> {app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Now you can see</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
