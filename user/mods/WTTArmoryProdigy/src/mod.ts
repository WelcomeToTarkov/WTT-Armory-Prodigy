/* eslint-disable @typescript-eslint/naming-convention */

import fs from "node:fs";
import path from "node:path";

import type { DependencyContainer } from "tsyringe";
import type { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import type { IPreSptLoadMod } from "@spt/models/external/IPreSptLoadMod";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";

// WTT imports
import { WTTInstanceManager } from "./WTTInstanceManager";

// Boss imports
import { CustomItemService } from "./CustomItemService";

// Custom Trader Assort Items
import { CustomAssortSchemeService } from "./CustomAssortSchemeService";



class WTTArmoryProdigy
implements IPreSptLoadMod, IPostDBLoadMod
{
    private instanceManager: WTTInstanceManager = new WTTInstanceManager();
    private version: string;
    private modName = "WTTArmoryProdigy";
    private config;

    //#region CustomBosses
    private customItemService: CustomItemService = new CustomItemService();
    //#endregion

    private customAssortSchemeService: CustomAssortSchemeService = new CustomAssortSchemeService();

    debug = false;

    // Anything that needs done on preSptLoad, place here.
    public preSptLoad(container: DependencyContainer): void 
    {
    // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.instanceManager.preSptLoad(container, this.modName);
        this.instanceManager.debug = this.debug;
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE

        this.getVersionFromJson();
        this.displayCreditBanner();

        // Custom Bosses
        this.customItemService.preSptLoad(this.instanceManager);

        this.customAssortSchemeService.preSptLoad(this.instanceManager);

    }

    // Anything that needs done on postDBLoad, place here.
    postDBLoad(container: DependencyContainer): void 
    {
    // Initialize the instance manager DO NOTHING ELSE BEFORE THIS
        this.instanceManager.postDBLoad(container);
        // EVERYTHING AFTER HERE MUST USE THE INSTANCE


        // Bosses
        this.customItemService.postDBLoad();

        this.customAssortSchemeService.postDBLoad();
        this.instanceManager.logger.log(
            `[${this.modName}] Database: Loading complete.`,
            LogTextColor.GREEN
        );
    }

    private getVersionFromJson(): void 
    {
        const packageJsonPath = path.join(__dirname, "../package.json");

        fs.readFile(packageJsonPath, "utf-8", (err, data) => 
        {
            if (err) 
            {
                console.error("Error reading file:", err);
                return;
            }

            const jsonData = JSON.parse(data);
            this.version = jsonData.version;
        });
    }

    private displayCreditBanner(): void 
    {
        this.instanceManager.colorLog
        (`[${this.modName}] Developers: Tron and the WTT Team
                                                    A new prodigy has risen.`, "green");
    }

}

module.exports = { mod: new WTTArmoryProdigy() };
