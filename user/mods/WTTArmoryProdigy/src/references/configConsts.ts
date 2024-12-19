/* eslint-disable @typescript-eslint/naming-convention */

import type { IPreset } from "@spt/models/eft/common/IGlobals";
import type { Ixyz } from "@spt/models/eft/common/Ixyz";
import type { IPrefab } from "@spt/models/eft/common/tables/ICustomizationItem";

export interface ConfigItem 
{
    [itemId: string]: {
        itemTplToClone: string;
        overrideProperties: {
            Prefab: {
                path: string;
                rcid: string;
            };
            ReverbVolume: number;
        };
        parentId: string;
        fleaPriceRoubles: number;
        handbookPriceRoubles: number;
        handbookParentId: string;
        locales: {
            [locale: string]: {
                name: string;
                shortName: string;
                description: string;
            };
        };
        clearClonedProps: boolean;
        addtoInventorySlots: string[];
        addtoModSlots: boolean;
        modSlot: string[];
        ModdableItemWhitelist: string;
        ModdableItemBlacklist: string;
        addtoTraders: boolean;
        traderId: traderIDs;
        traderItems: {
            unlimitedCount: boolean;
            stackObjectsCount: number;
        }[];
        barterScheme: {
            count: number;
            _tpl: string;
        }[];
        loyallevelitems: number;
        addtoBots: boolean;
        addtoStaticLootContainers: boolean;
        StaticLootContainers: string;
        Probability: number;
        masteries: boolean;
        masterySections: {
            Name: string;
            Templates: string[];
            Level2: number;
            Level3: number;
        };
        addweaponpreset: boolean;
        weaponpresets: IPreset[];
        addtoHallOfFame: boolean;
        addtoSpecialSlots: boolean;
    };
};

export interface HeadConfig {
    path: string;
    addHeadToPlayer: boolean;
    side: string[];
    locales: {
        [key: string]: string; // This allows dynamic locale keys, such as "en", "ru", etc.
    };
}

export interface VoiceConfig 
{
    [voiceId: string]: {
        locales: {
            [key: string]: string; // This allows dynamic locale keys, such as "en", "ru", etc.
        };
        name: string;
        addVoiceToPlayer: boolean;
        sideSpecificVoice: string;
        addToBotTypes: Record<string, number>;
    };
}

export interface ClothingConfig {
    type: string;               // The type of clothing item, e.g., "bottom"
    suiteId: string;            // ID of the clothing item's suite
    outfitId: string;           // Unique identifier for the outfit
    bottomId?: string;           // ID of the clothing item's bottom
    locales: {
        [key: string]: string; // This allows dynamic locale keys, such as "en", "ru", etc.
    };
    topId?: string;             // ID of the clothing item's top
    handsId?: string;            // ID of the clothing item's hands
    side: string[];             // Side of the clothing item, e.g., ["usec", "bear"]
    bottomBundlePath?: string;         // Path to the clothing item's asset bundle
    topBundlePath?: string;      // Path to the clothing item's top asset bundle
    handsBundlePath?: string;    // Path to the clothing item's hands asset bundle
    watchPrefab?: IPrefab;       // Path to the watch prefab asset bundle
    watchPosition?: Ixyz;     // Position of the watch on the clothing item
    watchRotation?: Ixyz;     // Rotation of the watch on the clothing item
    handsBaseID?: string;        // ID of the clothing item's hands base
    traderId: string;           // Trader who sells this item, e.g., "RAGMAN"
    loyaltyLevel: number;       // Loyalty level required to purchase the item
    profileLevel: number;       // Player profile level required to purchase the item
    standing: number;           // Minimum standing required with the trader
    currencyId: string;         // Currency type for the item's price, e.g., "ROUBLES"
    price: number;              // Cost of the clothing item in the specified currency
}


export enum traderIDs 
    {
    MECHANIC = "5a7c2eca46aef81a7ca2145d",
    SKIER = "58330581ace78e27b8b10cee",
    PEACEKEEPER = "5935c25fb3acc3127c3d8cd9",
    THERAPIST = "54cb57776803fa99248b456e",
    PRAPOR = "54cb50c76803fa8b248b4571",
    JAEGAR = "5c0647fdd443bc2504c2d371",
    RAGMAN = "5ac3b934156ae10c4430e83c",
    FENCE = "579dc571d53a0658a154fbec",
    BADGER = "bd3a8b28356d9c6509966546"
}

export enum currencyIDs 
    {
    ROUBLES = "5449016a4bdc2d6f028b456f",
    EUROS = "569668774bdc2da2298b4568",
    DOLLARS = "5696686a4bdc2da3298b456a"
}
    
export enum allBotTypes 
    {

    // Arena Fighters
    ARENAFIGHTER  = "arenafighter",
    ARENAFIGHTEREVENT = "arenafighterevent",

    // Scavs
    ASSAULT = "assault",
    ASSAULTGROUP = "assaultgroup",
    MARKSMAN = "marksman",
    CRAZYASSAULTEVENT = "crazyassaultevent",
    CURSEDASSAULT = "cursedassault",

    // PMC's
    BEAR = "bear",
    USEC = "usec",
    PMCBEAR = "pmcbear",
    PMCUSEC = "pmcusec",
    PMC = "pmcbot",

    // ExUsec
    EXUSEC = "exusec",

    // Cultists
    CULTISTPRIEST = "sectantpriest",
    CULTISTWARRIOR = "sectantwarrior",
    CULTISTONI = "sectantoni",
    CULTISTPRIESTEVENT = "sectantpriestevent",
    CULTISTPREDVESTNIK = "sectantpredvestnik",
    CULTISTPRIZRAK = "sectantprizrak",

    // BTR
    BTR = "btrshooter",

    // Spirits
    SPIRITSPRING = "spiritspring",
    SPIRITWINTER = "spiritwinter",

    // Zombies
    INFECTEDASSAULT = "infectedassault",
    INFECTEDCIVIL = "infectedcivil",
    INFECTEDLABORANT = "infectedlaborant",
    INFECTEDPMC = "infectedpmc",
    INFECTEDTAGILLA = "infectedtagilla",

    
    // Santa
    GIFTER = "gifter",

    // Bosses & Followers

        // Kaban
        KABAN = "bossboar",
        KABANSNIPER = "bossboarsniper",
        FOLLOWERBOAR = "followerboar",
        FOLLOWERBOARCLOSE1 = "followerboarclose1",
        FOLLOWERBOARCLOSE2 = "followerboarclose2",

        // Killa
        KILLA = "bosskilla",

        // Kolontay
        KOLONTAY = "bosskolontay",
        FOLLOWERKOLONTAYASSAULT = "followerkolontayassault",
        FOLLOWERKOLONTAYSECURITY = "followerkolontaysecurity",

        // Partisan
        PARTISAN = "bosspartisan",

        // Reshala
        RESHALA = "bossbully",
        FOLLOWERRESHALA = "followerbully",

        // Gluhar
        GLUHAR = "bossgluhar",
        FOLLOWERGLUHARASSAULT = "followergluharassault",
        FOLLOWERGLUHARSCOUT = "followergluharscout",
        FOLLOWERGLUHARSECURITY = "followergluharsecurity",
        FOLLOWERGLUHARSNIPER = "followergluharsnipe",

        // Goons
        KNIGHT = "bossknight",
        FOLLOWERBIGPIPE = "followerbigpipe",
        FOLLOWERBIRDEYE = "followerbirdeye",

        // Shturman
        SHTURMAN = "bosskojaniy",
        FOLLOWERSHTURMAN = "followerkojaniy",

        // Sanitar
        SANITAR = "bosssanitar",
        FOLLOWERSANITAR = "followersanitar",

        // Tagilla
        TAGILLA = "bosstagilla",
        FOLLOWERTAGILLA = "followertagilla",

        // Zryachiy
        ZRYACHIY = "bosszryachiy",
        FOLLOWERZRYACHIY = "followerzryachiy",
        PEACEFULZRYACHIYEVENT = "peacefulzryachiyevent",
        RAVANGEZRYACHIYEVENT = "ravengezryachiyevent",

    // Traders

        // Peacemaker
        PEACEMAKER = "peacemaker",

        // Skier
        SKIER = "skier",

}

export enum inventorySlots 
    {
    FirstPrimaryWeapon = "55d729c64bdc2d89028b4570",
    SecondPrimaryWeapon = "55d729d14bdc2d86028b456e",
    Holster = "55d729d84bdc2de3098b456b",
    Scabbard = "55d729e34bdc2d1b198b456d",
    FaceCover = "55d729e84bdc2d8a028b4569",
    Headwear = "55d729ef4bdc2d3a168b456c",
    TacticalVest = "55d729f74bdc2d87028b456e",
    SecuredContainer = "55d72a054bdc2d88028b456e",
    Backpack = "55d72a104bdc2d89028b4571",
    ArmorVest = "55d72a194bdc2d86028b456f",
    Pockets = "55d72a274bdc2de3098b456c",
    Earpiece = "5665b7164bdc2d144c8b4570",
    Dogtag = "59f0be1e86f77453be490939",
    Eyewear = "5a0ad9313f1241000e072755",
    ArmBand = "5b3f583786f77411d552fb2b"
}

export enum Stashes 
    {
    LEVEL1 = "566abbc34bdc2d92178b4576",
    LEVEL2 = "5811ce572459770cba1a34ea",
    LEVEL3 = "5811ce662459770f6f490f32",
    LEVEL4 = "5811ce772459770e9e5f9532"
}

export interface QuestZone 
{
    zoneId: string;
    zoneName: string;
    zoneType: string;
    flareType?: string;
    zoneLocation: string;
    position: {
        x: string;
        y: string;
        z: string;
    };
    rotation: {
        x: string;
        y: string;
        z: string;
    };
    scale: {
        x: string;
        y: string;
        z: string;
    };
}
