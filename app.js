/*
 *
 * Parcel( Bundlers ) Functionalities
 *
 * HMR -Hot Module Reloading
 * File Watcher algorithm: C++
 * Bundling
 * Minify
 * Cleaning you code
 * Dev abd Production Build
 * Super Fast build algorithms
 * Image Optimization
 * Caching while development
 * Compression
 * Compatibility with older versions: polyfills
 * Https on dev
 * Consistent Hashing Algorithms
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

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

//////////////////////////////////////////////////////////////////////////////
//
// const person1 = {
//   name: "person1",
//   print: function () {
//     console.log(this);
//   },
// };
//
// const person2 = {
//   name: "person2",
//   print: () => {
//     console.log(this);
//   },
// };
//
// person1.print(); //person1
// person1.print.call(); //window
// person1.print.call(this); //window
// person1.print.call(person2); //person2
//
// person2.print(); // window
// person2.print.call(); //window
// person2.print.call(this); //window
// person2.print.call(person1); // window
