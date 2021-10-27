import { AppAdapter } from "./AppAdapter";
export declare class ElectronAppAdapter implements AppAdapter {
    private readonly app;
    constructor(app?: Electron.App);
    whenReady(): Promise<void>;
    readonly version: string;
    readonly name: string;
    readonly isPackaged: boolean;
    readonly appUpdateConfigPath: string;
    readonly userDataPath: string;
    readonly baseCachePath: string;
    quit(): void;
    onQuit(handler: (exitCode: number) => void): void;
}
