import { transpileToES5 } from "./transpile-to-es5";

const input = document.getElementById("input");
const output = document.getElementById("output");

const button = document.getElementById("transpile");

if (
  isTextarea(input) &&
  isTextarea(output) &&
  isButton(button)
) {
  button!.onclick = transpilerEventFactory(
    input as HTMLTextAreaElement,
    output as HTMLTextAreaElement
  );

  function transpilerEventFactory(
    input: HTMLTextAreaElement,
    output: HTMLTextAreaElement
  ) {
    return function transpilerEvent() {
      const transpiledCode = transpileToES5(input.value.trim());

      if (transpiledCode) output.value = transpiledCode;
    };
  }
}

function isTextarea(element: HTMLElement | null) {
  return Boolean(element && element instanceof HTMLTextAreaElement);
}

function isButton(element: HTMLElement | null) {
  return Boolean(element && element instanceof HTMLButtonElement);
}
