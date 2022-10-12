export function interpolate(template: string, data: object): string {
    return template.replace(/{{(.*?)}}/g, (match) => {
        return data[match.split(/{{|}}/).filter(Boolean)[0] as keyof object];
    });
}

export function compileToString(template: ) {
    const ast = template;
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
