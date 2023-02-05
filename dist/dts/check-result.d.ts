import { RestrictionLevel, SpoofChecks } from './enums';
interface CheckResultContract {
    checks: SpoofChecks;
    numerics: string[];
    restrictionLevel: RestrictionLevel;
    toCombinedBitmask(expectedChecks: number): SpoofChecks | RestrictionLevel;
}
export declare class CheckResult implements CheckResultContract {
    checks: SpoofChecks;
    numerics: string[];
    restrictionLevel: RestrictionLevel;
    toCombinedBitmask(enabledChecks: number): SpoofChecks | RestrictionLevel;
}
export {};
