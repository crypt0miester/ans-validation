export interface ScriptResolverContract {
    resolvedScripts: object;
    singleScript(): boolean;
}
export declare class ScriptResolver {
    readonly resolvedScripts: object;
    constructor(url: string);
    singleScript(): boolean;
}
