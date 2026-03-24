declare module '@iarna/toml' {
  /** Parse a TOML-formatted string into a JavaScript object. */
  export function parse(input: string): any;
  /** Serialize a JavaScript object to a TOML-formatted string. */
  export function stringify(input: unknown): string;
}
