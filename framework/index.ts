export function init(selector: string, element: Element): void {
    const root: HTMLElement | null = document.querySelector(selector);
    if (root) {
        render(element, root);
    } else {
        console.log("problem");
    }
}

type Element = {
    type: string,
    template: string,
}

export function createElement(type: string, template: string): Element {
    return { type, template };
}

export function render(el: Element, parent: HTMLElement): void {
    const content = document.createTextNode(el.template);
    const element = document.createElement(el.type);
    element.appendChild(content);
    parent.appendChild(element);
}