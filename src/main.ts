import { init, createElement, render } from "../framework";

const el = createElement("p", `test element ${
    render(createElement("p", "what happens"), el)
}`);
init("#app", el);