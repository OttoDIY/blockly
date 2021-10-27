import { AllPublishOptions } from "builder-util-runtime";
import { AppAdapter } from "./AppAdapter";
import { AppUpdater, DownloadUpdateOptions } from "./AppUpdater";
export declare class MacUpdater extends AppUpdater {
    private readonly nativeUpdater;
    private updateInfoForPendingUpdateDownloadedEvent;
    constructor(options?: AllPublishOptions, app?: AppAdapter);
    protected doDownloadUpdate(downloadUpdateOptions: DownloadUpdateOptions): Promise<Array<string>>;
    quitAndInstall(): void;
}
