import { init, createElement } from "../framework";
import { interpolate } from "../framework/tempate";

const el = createElement("p", interpolate("the date is: {{date}}", { date: "12/10/22" }));
init("#app", el);