import { ErrorCode, RestrictionLevel, SpoofChecks } from './enums';
export interface SpoofCheckerContract {
    safeToDisplayAsUnicode(label: string, isTldAscii: boolean): boolean;
}
export declare class SpoofChecker implements SpoofCheckerContract {
    status: ErrorCode;
    checks: SpoofChecks;
    restrictionLevel: RestrictionLevel;
    safeToDisplayAsUnicode(label: string, isTldAscii: boolean): boolean;
    private check;
    private getRestrictionLevel;
    private getNumerics;
    private isMadeOfLatinAlikeCyrillic;
}
