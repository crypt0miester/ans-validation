export declare class Domain {
    readonly hostname: string;
    readonly labels: string[];
    readonly isTldAscii: boolean;
    readonly isTld: boolean;
    constructor(hostname: string);
}
