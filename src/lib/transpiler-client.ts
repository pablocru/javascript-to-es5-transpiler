import { transpileToES5 } from "./transpile-to-es5";

const button = document.getElementById("transpile");
const input = document.getElementById("input");
const output = document.getElementById("output");

if (isTextarea(input) && isTextarea(output) && isButton(button)) {
  button.onclick = transpilerEventFactory(input, output);

  function transpilerEventFactory(
    input: HTMLTextAreaElement,
    output: HTMLTextAreaElement,
  ) {
    return function transpilerEvent() {
      const transpiledCode = transpileToES5(input.value.trim());

      if (transpiledCode) output.value = transpiledCode;
    };
  }
}

function isTextarea(
  element: HTMLElement | null,
): element is HTMLTextAreaElement {
  return element instanceof HTMLTextAreaElement;
}

function isButton(element: HTMLElement | null): element is HTMLButtonElement {
  return element instanceof HTMLButtonElement;
}
