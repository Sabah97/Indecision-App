console.log("App is running!");

const app = {
  title: "Indecision App!",
  subtitle: "English",
  options: [],
};
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");
const renderApp = () => {
  const template = (
    <div>
      <h1>Title: {app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? " Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option} </li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
renderApp();

//Challange #1
// const user = {
//   name: "Sabah",
//   Age: 22,
//   location: "Dhaka",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.Age && user.Age >= 18 && <p>Age: {user.Age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
