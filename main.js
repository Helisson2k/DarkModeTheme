const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

const lightTheme = {
  "--background-color": "#FFF",
  "--text-color": "#1a1a1a",
  "button-background-color": "#9b8afb",
};

const darkTheme = {
  "--background-color": "#1a1a1a",
  "--text-color": "#FFF",
  "button-background-color": "#5925DC",
};
inputContainer.addEventListener("change", function () {
  const isChecked = inputContainer.checked;
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

function changeTheme(theme) {
  // alteração do tema...
  console.log(theme);
  for (let prop in theme) {
    changeProperty(prop, theme[prop]);
  }
}

function changeProperty(Property, value) {
  rootElement.style.setProperty(Property, value);
}
