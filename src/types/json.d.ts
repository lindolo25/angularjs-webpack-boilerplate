declare module "*.json" {
    const content: String;
    export default JSON.parse(content);
}