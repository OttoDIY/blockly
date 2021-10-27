import { UpdateInfo } from "builder-util-runtime";
import { Logger, ResolvedUpdateFileInfo } from "./main";
/** @private **/
export declare class DownloadedUpdateHelper {
    readonly cacheDir: string;
    private _file;
    private _packageFile;
    private versionInfo;
    private fileInfo;
    constructor(cacheDir: string);
    private _downloadedFileInfo;
    readonly downloadedFileInfo: CachedUpdateInfo | null;
    readonly file: string | null;
    readonly packageFile: string | null;
    readonly cacheDirForPendingUpdate: string;
    validateDownloadedPath(updateFile: string, updateInfo: UpdateInfo, fileInfo: ResolvedUpdateFileInfo, logger: Logger): Promise<string | null>;
    setDownloadedFile(downloadedFile: string, packageFile: string | null, versionInfo: UpdateInfo, fileInfo: ResolvedUpdateFileInfo, updateFileName: string, isSaveCache: boolean): Promise<void>;
    clear(): Promise<void>;
    private cleanCacheDirForPendingUpdate;
    private getValidCachedUpdateFile;
    private getUpdateInfoFile;
}
interface CachedUpdateInfo {
    fileName: string;
    sha512: string;
    readonly isAdminRightsRequired: boolean;
}
export declare function createTempUpdateFile(name: string, cacheDir: string, log: Logger): Promise<string>;
export {};
