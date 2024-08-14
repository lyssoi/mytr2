import { render } from "./myreact/myreact.js";
import { App } from "./App.js";

const $app = document.querySelector(".App");

// const routes = {
//     "/" : Home,
//     "/userinfo/:id" : UserInfo,
// }

render($app, App);