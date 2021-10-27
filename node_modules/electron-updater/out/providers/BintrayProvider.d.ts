import { BintrayOptions, UpdateInfo } from "builder-util-runtime";
import { Provider, ResolvedUpdateFileInfo } from "../main";
import { ProviderRuntimeOptions } from "./Provider";
export declare class BintrayProvider extends Provider<UpdateInfo> {
    private client;
    private readonly baseUrl;
    constructor(configuration: BintrayOptions, runtimeOptions: ProviderRuntimeOptions);
    setRequestHeaders(value: any): void;
    getLatestVersion(): Promise<UpdateInfo>;
    resolveFiles(updateInfo: UpdateInfo): Array<ResolvedUpdateFileInfo>;
}
