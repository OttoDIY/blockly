/// <reference types="node" />
import { CancellationToken, HttpExecutor, UpdateFileInfo, UpdateInfo } from "builder-util-runtime";
import { OutgoingHttpHeaders, RequestOptions } from "http";
import { URL } from "url";
import { ResolvedUpdateFileInfo } from "../main";
export declare type ProviderPlatform = "darwin" | "linux" | "win32";
export interface ProviderRuntimeOptions {
    isUseMultipleRangeRequest: boolean;
    platform: ProviderPlatform;
    executor: HttpExecutor<any>;
}
export declare abstract class Provider<T extends UpdateInfo> {
    private readonly runtimeOptions;
    private requestHeaders;
    protected readonly executor: HttpExecutor<any>;
    protected constructor(runtimeOptions: ProviderRuntimeOptions);
    readonly isUseMultipleRangeRequest: boolean;
    private getChannelFilePrefix;
    protected getDefaultChannelName(): string;
    protected getCustomChannelName(channel: string): string;
    readonly fileExtraDownloadHeaders: OutgoingHttpHeaders | null;
    setRequestHeaders(value: OutgoingHttpHeaders | null): void;
    abstract getLatestVersion(): Promise<T>;
    abstract resolveFiles(updateInfo: UpdateInfo): Array<ResolvedUpdateFileInfo>;
    /**
     * Method to perform API request only to resolve update info, but not to download update.
     */
    protected httpRequest(url: URL, headers?: OutgoingHttpHeaders | null, cancellationToken?: CancellationToken): Promise<string | null>;
    protected createRequestOptions(url: URL, headers?: OutgoingHttpHeaders | null): RequestOptions;
}
export declare function findFile(files: Array<ResolvedUpdateFileInfo>, extension: string, not?: Array<string>): ResolvedUpdateFileInfo | null | undefined;
export declare function parseUpdateInfo(rawData: string | null, channelFile: string, channelFileUrl: URL): UpdateInfo;
export declare function getFileList(updateInfo: UpdateInfo): Array<UpdateFileInfo>;
export declare function resolveFiles(updateInfo: UpdateInfo, baseUrl: URL, pathTransformer?: (p: string) => string): Array<ResolvedUpdateFileInfo>;
