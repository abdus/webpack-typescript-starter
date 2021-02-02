// https://stackoverflow.com/a/41946697/8657006
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
