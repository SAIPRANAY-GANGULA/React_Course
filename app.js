const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Heading 1 !"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "Heading 2 !"
);
const div = React.createElement(
  "div",
  {
    id: "heading2",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(div);
