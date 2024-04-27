import { transform } from "@babel/standalone";

/**
 * @param {string} inputCode
 */
export function transpileToES5(inputCode: string): string | undefined {
  try {
    const transpiledCode = transform(inputCode, { presets: ["env"] }).code;

    if (typeof transpiledCode !== "string")
      throw new Error("Unable to transpile this code");

    return transpiledCode;
  } catch (error) {
    console.error(error);
  }
}
