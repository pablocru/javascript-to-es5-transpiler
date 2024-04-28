import { transform } from "@babel/standalone";

const TRANSPILE_ERROR_MESSAGE = "Unable to transpile this code";

/**
 * @param {string} inputCode
 */
export function transpileToES5(inputCode: string): string {
  try {
    const transpiledCode = transform(inputCode, { presets: ["env"] }).code;

    if (typeof transpiledCode !== "string")
      throw new Error(TRANSPILE_ERROR_MESSAGE);

    return transpiledCode;
  } catch (error) {
    console.error(error);
    return error instanceof Error ? error.message : TRANSPILE_ERROR_MESSAGE;
  }
}
