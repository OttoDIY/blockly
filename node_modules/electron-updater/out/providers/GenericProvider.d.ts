import { GenericServerOptions, UpdateInfo } from "builder-util-runtime";
import { AppUpdater } from "../AppUpdater";
import { Provider, ResolvedUpdateFileInfo } from "../main";
import { ProviderRuntimeOptions } from "./Provider";
export declare class GenericProvider extends Provider<UpdateInfo> {
    private readonly configuration;
    private readonly updater;
    private readonly baseUrl;
    constructor(configuration: GenericServerOptions, updater: AppUpdater, runtimeOptions: ProviderRuntimeOptions);
    private readonly channel;
    getLatestVersion(): Promise<UpdateInfo>;
    resolveFiles(updateInfo: UpdateInfo): Array<ResolvedUpdateFileInfo>;
}
