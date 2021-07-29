import React, { useLayoutEffect } from 'react';
import ReactDom from 'react-dom';

const App = ()
const userAge = 10;

const list = (

    <ul>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
    </ul>
);
const el = (
  <div>
    <h1>Hello world {userAge}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
      doloribus. Qui molestias odio sint accusantium ipsa. Vel ullam sit
      pariatur distinctio. Pariatur mollitia assumenda optio aperiam sint,
      dolore itaque dolorum!
    </p>
  </div>
);

ReactDom.render(el, document.getElementById("root"));
