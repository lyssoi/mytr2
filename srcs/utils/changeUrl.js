import { _render } from "../myreact/myreact.js";

export function changeUrl (url) {
    history.pushState(null, null, url);
    _render();
}