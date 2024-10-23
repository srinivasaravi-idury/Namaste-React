import React from "react";
import ReactDOM from 'react-dom/client';
// complex way to create react element
const heading = React.createElement("h1",
    {id:"heading"},
    "Not rendered 😛"); 
// easy to create react ele using JSX which has HTML like syntax
const jsxHeading = <h1 id='heading'>Not Rendered 😛</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)