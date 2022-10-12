import { init, createElement } from "../framework";
import { interpolate, parse, compileToString, getCompilationFunc } from "../framework/tempate";

let template = "value 1 - {{ value1 }}; value 2 - {{ value2 }};"
let parsed = parse(template);
let compilationstring = compileToString(parsed);
const compilationfunc = getCompilationFunc(compilationstring);
console.log(compilationfunc({value1: "123", value2: "456"}));

const el = createElement("p", interpolate("the date is: {{date}}", { date: "12/10/22" }));
init("#app", el);