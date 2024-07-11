/* eslint-disable @typescript-eslint/naming-convention */
import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { JsonUtil } from "@spt/utils/JsonUtil";

export class QuestModifier {
    /**
     * Modify the quests in the given tables using the provided JSON utility.
     *
     * @param {IDatabaseTables} tables - the tables containing the quests
     * @param {JsonUtil} jsonUtil - the JSON utility for cloning objects
     * @return {void} 
     */
    public modifyQuests(tables: IDatabaseTables, jsonUtil: JsonUtil, debug: boolean): void {
        // Define new pistols
        const newPistols = [
            "665fe0e865683281eb8e7ed6"
        ];
        // Get the specific quest
        const stirrup = tables.templates.quests["596b455186f77457cb50eccb"];
        if (stirrup) {
            // Extract existing pistols
            const existingStirrupPistols = stirrup.conditions.AvailableForFinish[0].counter.conditions[0].weapon;
            try {
                // Clone the existing pistols array
                const updatedPistols = jsonUtil.clone(existingStirrupPistols);
                let modified = false;
                // Add new pistols if they do not already exist
                for (const pistol of newPistols) {
                    if (!updatedPistols.includes(pistol)) {
                        updatedPistols.push(pistol);
                        modified = true;

                        if (debug) {
                            console.log("Added new pistol:", pistol);
                        }
                    }
                    else {
                        if (debug) {
                            console.log("Pistol already exists:", pistol);
                        }
                    }
                }
                // Only update the quest if modifications were made
                if (modified) {
                    stirrup.conditions.AvailableForFinish[0].counter.conditions[0].weapon = updatedPistols;

                    if (debug) {
                        console.log("Modified quest:", stirrup.conditions.AvailableForFinish[0].counter.conditions[0].weapon);
                    }
                }
            }
            catch (error) {
                console.error("Error modifying quests:", error);
            }
        }

        // Get the specific quest
        const mallCop = tables.templates.quests["64e7b99017ab941a6f7bf9d7"];

        if (mallCop) {
            // Extract existing pistols
            const existingmallCopPistols = mallCop.conditions.AvailableForFinish[0].counter.conditions[0].weapon;
            try {
                // Clone the existing pistols array
                const updatedPistols = jsonUtil.clone(existingmallCopPistols);
                let modified = false;
                // Add new pistols if they do not already exist
                for (const pistol of newPistols) {
                    if (!updatedPistols.includes(pistol)) {
                        updatedPistols.push(pistol);
                        modified = true;

                        if (debug) {
                            console.log("Added new pistol:", pistol);
                        }
                    }
                    else {
                        if (debug) {
                            console.log("Pistol already exists:", pistol);
                        }
                    }
                }
                // Only update the quest if modifications were made
                if (modified) {
                    mallCop.conditions.AvailableForFinish[0].counter.conditions[0].weapon = updatedPistols;

                    if (debug) {
                        console.log("Modified quest:", mallCop.conditions.AvailableForFinish[0].counter.conditions[0].weapon);
                    }
                }
            }
            catch (error) {
                console.error("Error modifying quests:", error);
            }
        }
    }

}
