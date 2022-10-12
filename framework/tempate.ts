export function interpolate(template: string, data: object): string {
    return template.replace(/{{(.*?)}}/g, (match) => {
        return data[match.split(/{{|}}/).filter(Boolean)[0] as keyof object];
    });
}

export function parse(template: string): string[] {
	let result = /{{(.*?)}}/g.exec(template);
	const arr = [];
	let firstPos;

	while (result) {
		firstPos = result.index;
		if (firstPos !== 0) {
			arr.push(template.substring(0, firstPos));
			template = template.slice(firstPos);
		}

		arr.push(result[0]);
		template = template.slice(result[0].length);
		result = /{{(.*?)}}/g.exec(template);
	}

	if (template) arr.push(template);
	return arr;
}

export function compileToString(template: string[]): string {
    const ast: string[] = template;
	let fnStr = `""`;

	ast.map(t => {
		// checking to see if it is an interpolation
		if (t.startsWith("{{") && t.endsWith("}}")) {
			// append it to fnStr
			fnStr += `+data.${t.split(/{{|}}/).filter(Boolean)[0].trim()}`;
		} else {
			// append the string to the fnStr
			fnStr += `+"${t}"`;
		}
	});

	return fnStr;
}

export function getCompilationFunc(template: string): Function {
	return new Function("data", "return " + template)
}
