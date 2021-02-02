import { SayHello } from "./sayHello";
import styles from "./styles.module.css";

const sayHello = new SayHello();
sayHello.hello("World");

const div = document.createElement("div");
const h1 = document.createElement("h1");
const span = document.createElement("span");

h1.innerText = "TypeScript rocks!";
span.innerText = "styled with css modules";

span.classList.add(styles.red);
div.appendChild(h1);
div.appendChild(span);

document.body.appendChild(div);
