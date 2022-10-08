export function init(selector: string): void {
    const root: HTMLElement | null = document.querySelector(selector);
    const sample_content = document.createTextNode("sample element");
    const new_p = document.createElement("div");
    new_p.appendChild(sample_content);
    root?.appendChild(new_p);
}