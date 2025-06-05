const startTime = Date.now(); 
const accessWhitelist = {
    '144244136': true,
    '66941954': true,
    '321493976':true,
};
const https = require("https");
const http = require("http");
const express = require("express");
const discord = require("discord.js");
const websockets = require("ws");
const urlParser = require("url");
const fs = require("fs");//683913140664008768
const cookieParser = require("cookie-parser");
const size_of = require("object-sizeof");
/** 
 * @param {String} cookies
 * @return {Object}
 */
const cookieParse = function(cookies){
    let array = cookies.split(";");
    let parsedCookie = {};
    array.forEach(function(str){
        let cookieData = str.match(/([\w]+)=([\w\d\s]+)/);
        parsedCookie[cookieData[1]] = cookieData[2];
    });
    return parsedCookie;
};
/** 
 * @param {String} query
 * @return {Object}
 */
const queryParse = function(query){
    let array = query.split("&");
    let parsedQuery = {};
    array.forEach(function(str){
        let queryData = str.match(/([\w]+)=([\w\d\s]+)/);
        parsedQuery[queryData[1]] = queryData[2];
    });
    return parsedQuery;
};
const thisIsJadesPC = (()=>{
    try{
        fs.accessSync("C:\\HOMESTORAGE\\JADEPCsignature.jade.txt", fs.constants.R_OK)
        return true;
    }
    catch(er){
        return true;
    };
})();
const timeConversion = function(seconds){
    seconds = Math.floor(seconds);
    let time = "";
    let days = Math.floor(seconds/86400);
    if (days > 0)
        if (days < 10){
            time += "0" + days + ":";
        }else  
            time += days + ":";
    let hour = Math.floor(seconds/3600%24);
    if (hour < 10){
        time += "0" + hour + ":";
    }else  
        time += hour + ":";
    let minute = Math.floor(seconds/60)%60;
    if (minute < 10){
        time += "0" + minute + ":";
    }else  
        time += minute + ":";
    seconds = seconds%60;
    if (seconds < 10){
        time += "0" + seconds;
    }else  
        time += seconds;
    return time;
}
let nearDateConversion = function(seconds){
    let factors = {Seconds: 1, Minutes: 1/60, Hours: 1/60, Days: 1/24, Months: 1/30, Years: 1/12};
    let timeLevel = "Seconds";
    for (let i in factors){
        let v = factors[i];
        if (v*seconds > 1){
            seconds = v * seconds;
            timeLevel = i;
        }else
            break;
    }
    return Math.floor(seconds+.5) + " " +  timeLevel;
}
let nearByteConversion = function(bytes){
    let factors = {B: 1, KB: 1/1024, MB: 1/1024, GB: 1/1024};
    let timeLevel = "B";
    for (let i in factors){
        let v = factors[i];
        if (v*bytes > 1){
            bytes = v * bytes;
            timeLevel = i;
        }else
            break;
    }
    return Math.floor(bytes+.5) +  timeLevel;
}
const proxyWriteReadQueue = {};
const request = require("request-promise");
const bot = new discord.Client(); 
if (thisIsJadesPC){
    bot.login("Discord Bot Token"); //Test Bot (Jadenarium Beta)
}else
    bot.login("Discord Bot Token"); //Main Bot
const secure = !thisIsJadesPC;
const { throws, match } = require("assert");
const { urlencoded, query } = require("express");
const { send } = require("process");
const e = require("express");
const { type } = require("os");
const { url } = require("inspector");
const { setInterval } = require("timers");
const { exec } = require("child_process");
const remoteConsolePortRange = {
    From: 40000,
    To: 45000
};
const primaryServerId = "605226863589064705";
const addressPointer = (()=>{
    if (thisIsJadesPC){
        return "http://localhost:38498"
    }
    return "https://jadeadminsystem.com"
})();
const responder = express();
responder.use(cookieParser());
const coordinatedVersion = {
    Version: "1.0.7",
    Channel: "714178329980174406",
    Releaser: "TheJades",
    ChangeLogs: [
        "Made some commands run asynchronous so that it doesn't slow down the server significantly.",
        "Roblox API Errors are caught and will be sent to syslogs",
        "Add a feature where the admin system saves the state of all proxies connected and place it in archives for later retrieval.",
        "Made proxy archival asynchronous to increase performance.",
        "Figuring out how to reduce api limit on roblox :flushed:",
        "Proposed Update: JadeFS - Database manager that will organize everything into one encrypted file.",
    ]
}
const verificationDatabase = {};
const blacklistedScripts = {
    "IY_GUI": ["IY_GUI"],
    "QuantomUI" : [
        "QuantomUI",
        "Mr Beans Admin"
    ],
    "MakerModelLua's TaskBar" : ["MakerModelLua's TaskBar"],
    "RC7" : ["RC7"],
    "Ultimate Troll Gui" : [
        "UTG",
        "Ultimate Trolling Gui",
        "Ultimate Troll Gui",
        "AccessUI",
        "AdrianUI",
        "UndetectedUTG",
        "SakuraUI"
    ],
    "AzureGui" : ["AzureGui"],
    "Kaspers Hub SS" : ["KHSS"],
    "Cool Modules" : ["CoolModulesGUI"],
    "Exoliner" : ["Exoliner", "_ZVN"],
    "Ro-Xploit" : ["RX6", "Ro-Exploit", "Ro Exploit", "Ro exploit"],
    "TheBossHub" : ["TheBossHub", "LockedHub"],
    "Snake Venom Admin" : ["SnakeVenomSS"],
    "Strato": ["STRATO"]
}
const mandatoryPunishments = {
    "Strato": true
};
const systemCurrentInfo = {
    LastCheck: Date.now(),
    CpuTime: 0,
    Cpu: 0,
    Memory: 0,
    SocketsUsed: 0
};
const storageUri = "storage/";
if (fs.existsSync(storageUri + "systemCache.json") == false){
    fs.writeFileSync(storageUri + "systemCache.json", "{}");
}
if (fs.existsSync(storageUri + "auths.json") == false){
    fs.writeFileSync(storageUri + "auths.json", "{}");
}
if (fs.existsSync(storageUri + "userdata") == false){
    fs.writeFileSync(storageUri + "userdata", "");
}
if (fs.existsSync(storageUri + "userdatamap.json") == false){
    fs.writeFileSync(storageUri + "userdatamap.json", "{\"Length\":0,\"Roblox\":{},\"Discord\":{},\"BanList\":{}}");
}
const systemCache = JSON.parse(fs.readFileSync(storageUri + "systemCache.json", "utf-8"));
/**
 * @type {SystemLog[]}
 */
let systemLogs = systemCache.systemLogs || [];
systemCache.systemLogs = systemLogs;
/**
 * 
 * @param {String} system 
 * @param {String} message 
 * @param {String} msgType [MESSAGE, WARNING, ERROR, INFO] 
 */
const systemLog = function(system, message, msgType){
    switch (msgType){
        case "ERROR":{
            console.error(`[${timeConversion((Date.now()-startTime)/1000)}][ERROR][${system}]: ${message}`);
            break;
        }
        case "WARNING":{
            console.warn(`[${timeConversion((Date.now()-startTime)/1000)}][WARN][${system}]: ${message}`);
            break;
        }
        case "INFO":{
            console.info(`[${timeConversion((Date.now()-startTime)/1000)}][INFO][${system}]: ${message}`);
            break;
        }
        default:{
            console.log(`[${timeConversion((Date.now()-startTime)/1000)}][MESSAGE][${system}]: ${message}`);
        }
    };
    let newLog = new SystemLog(message, system, msgType);
    systemCache.systemLogs.push(newLog);
    if (msgType == "ERROR" || msgType == "WARNING"){
        let trace = new Error().stack;
        systemLog("SystemLog" + msgType + "=>" + system, "[TRACE] " + message + "\n" +  trace, "MESSAGE");
    }
}
const authenticationTable = JSON.parse(fs.readFileSync(storageUri +"auths.json", "utf-8"));
const server = (function(){
    if (secure)
        if (fs.existsSync("/etc/letsencrypt/live/jadeadminsystem.com/")){
            return https.createServer({
                cert: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/cert.pem"),
                ca: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/fullchain.pem"),
                key: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/privkey.pem")
            }, responder);
        }else
            return https.createServer({
                cert: fs.readFileSync("encryption/certificate.crt"),
                ca: fs.readFileSync("encryption/ca_bundle.crt"),
                key: fs.readFileSync("encryption/private.key")
            }, responder);
    return http.createServer(responder);
})();
if (secure){
    server.listen(38499);
}else
    server.listen(process.env.PORT);
/**
 * @type {String[]}
 */
const trackedPlayerNames = [];
const trackedProxyIds = [];
/**
 * @type {String[]}
 */
const trackedDiscordNames = [];
const matchedTypes = {
    player: "RBXPlayer",
    bool: "boolean",
    lightingmode: "lightingMode",
    sparentclass: "sParentClass",
    lookfortype: "lookForType",
    punishmenttype: "punishmentType",
    protect: "boolean",
    visualize: "visualize",
    visualizertween: "visualizerTween", 
    lightingmode: "lightingMode", 
    hidden: "boolean", 
    full: "boolean", 
    streamState: "boolean"
};
var proxycommandsc = [
    {"Name":"Angry Gods", 
        "CMDVariation":["angry"],
        "Format":["player"], 
        "Description":"Strikes lightning at the player",
        "Function": function(tab){
            return {"Name":"GrabScript", "Info":["AngryGods", tab[2]]};
        }},
    {"Name":"Activate Server well being Manager", 
        "CMDVariation":["togglwell", "antilag"],
        "Format":["bool"], 
        "Description":"Toggle the system meant to remove scripts in workspace if there is lag",
        "Function": function(tab){
            if (tab[2] === "true"){
                return {"Name":"ToggleAntiLag", "Info":true}
            }else{
                return {"Name":"ToggleAntiLag", "Info":false}
            }
        }},
    {"Name":"Active Script Search", 
        "CMDVariation":["toggleactive", "blacklistsystem"],
        "Format":["bool"], 
        "Description":"Toggle the system meant to deter blacklisted scripts",
        "Function": function(tab){
            if (tab[2] === "true"){
                return {"Name":"ToggleActiveSearch", "Info":true}
            }else{
                return {"Name":"ToggleActiveSearch", "Info":false}
            }
        }},
    {"Name":"Ban", 
        "CMDVariation":["ban"],
        "Format":["player", "reason"], 
        "Description":"Server Bans the Player",
        "Function":function(tab){			
            return {"Name":"Ban", "Info":[tab[2], tab[3], true]}
        }},
    {"Name":"Baseplate", 
        "CMDVariation":["base", "baseplate"],
        "Format":[], 
        "Description":"Spawns in a baseplate at 0,0",
        "Function":function(tab){			
            return {"Name":"Base", "Info":[]}
        }},
    {"Name":"Banish Hammer", 
        "CMDVariation":["hammer", "begone", "banhammer"],
        "Format":["player"], 
        "Description":"Banishes the target player using a hammer",
        "Function":function(tab){			
            return {"Name":"Banish", "Info":[tab[2]]}
        }},
    {"Name":"Bot Logs", 
        "CMDVariation":["blogs"],
        "Format":["player", "streamState"], 
        "Description":"Toggles the streaming of a Player's textlog to the remote control console.",
        "Function":function(tab){			
            if (tab[3] == "false"){
                return {"Name":"BotLog", "Info":[tab[2], false]};
            }else
                return {"Name":"BotLog", "Info":[tab[2], true]};
        }},
    {"Name":"BypassRestrictions", 
        "CMDVariation":["bypassres", "trustkick"],
        "Format":["player"], 
        "Description":"Indicate's a person's logger that they can use mass kicking abilities!",
        "Function":function(tab){			
            return {"Name":"BypassRestrictions", "Info":[tab[2]]}
        }},
    {"Name":"Crash", 
        "CMDVariation":["demolish", "byebye"],
        "Format":["player"], 
        "Description":"GPU Crash, the most dangerous one.",
        "Function":function(tab){			
            return {"Name":"Crash", "Info":[tab[2]]}
        }},
    {"Name":"Change Lighting", 
        "CMDVariation":["lighting"],
        "Format":["lightingmode"], 
        "Description":"Changes the lighting to the following mode",
        "Function":function(tab){			
            return {"Name":"LoadLightingState", "Info":tab[2]}
        }},
    {"Name":"Descript", 
        "CMDVariation":["descript", "removescript"],
        "Format":[], 
        "Description":"Descripts the server",
        "Function":function(tab){			
            return {"Name":"Descript", "Info":true}
        }},
    {"Name":"Descript Workspace", 
        "CMDVariation":["wdescript","cleanworkspace"],
        "Format":[], 
        "Description":"Clean workspace of scripts and communicators(remotes and bindables)",
        "Function":function(tab){			
            return {"Name":"WDescript", "Info":[true]};
        }},
    {"Name":"Doom", 
        "CMDVariation":["doom"],
        "Format":["player"], 
        "Description":"Graves the target with a death message",
        "Function":function(tab){			
            return {"Name":"Doom", "Info":tab[2]}
        }},
    {"Name":"Firework Show!", 
        "CMDVariation":["fireworks","newyear", "shows"],
        "Format":["player"], 
        "Description":"Enjoy a great late new year with fireworks!",
        "Function":function(tab){			
            return {"Name":"FireworkShow", "Info":[tab[2]]};
        }},
    {"Name":"Forest Curse", 
        "CMDVariation":["curse", "forest"],
        "Format":["player"], 
        "Description":"Ss the player into a forest where they can't return to the real world.",
        "Function":function(tab){			
            return {"Name":"ForestSpook", "Info":tab[2]}
        }},
    {"Name":"Forest Undo", 
        "CMDVariation":["relieve", "release"],
        "Format":["player"], 
        "Description":"Retrieve the player from the forest world.",
        "Function":function(tab){			
            return {"Name":"ForestRelieve", "Info":tab[2]}
        }},
    {"Name":"GetGui", 
        "CMDVariation":["getgui", "idtextbox"],
        "Format":["player"], 
        "Description":"Outputs all the editable textbox along with their id",
        "Function":function(tab){			
            return {"Name":"GetGui", "Info":[tab[2]]}
        }},
    {"Name":"GetTool", 
        "CMDVariation":["gettool", "loadtool", "gear"],
        "Format":["player", "id"], 
        "Description":"Loads a RBX gear into a character",
        "Function":function(tab){			
            return {"Name":"GetTool", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Global Ban", 
        "CMDVariation":["gban", "trelloban"],
        "Format":["player", "reason"], 
        "Description":"Trello/Global Bans the Player, Last Resort for ultimate punishment.",
        "Function":function(tab){			
            return {"Name":"GBan", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Halt", 
        "CMDVariation":["halt"],
        "Format":[], 
        "Description":"Halts the Jade Loader2",
        "Function":function(tab){			
            return {"Name":"Halt", "Info":[]}
        }},
    {"Name":"Kick", 
        "CMDVariation":["kick"],
        "Format":["player", "reason"], 
        "Description":"Kicks the Player",
        "Function":function(tab){			
            return {"Name":"Kick", "Info":[tab[2], tab[3], true]}
        }},
    {"Name":"Kill", 
        "CMDVariation":["kill", "bj", "die"],
        "Format":["player"], 
        "Description":"Kills the target",
        "Function":function(tab){			
            return {"Name":"Kill", "Info":tab[2]}
        }},
    {"Name":"Text Logs", 
        "CMDVariation":["log", "monitor", "investigate"],
        "Format":["player"], 
        "Description":"Initializes a Player's logging system if it didn't load properly.",
        "Function": function(tab){
            return {"Name":"Leg", "Info":tab[2]}
        }},
    {"Name":"Music", 
        "CMDVariation":["audio", "music", "play"],
        "Format":["audioid", "protect", "visualize", "visualizertween"], 
        "Description":"Plays the following audio",
        "Function": function(tab){
            return {"Name":"Music", "Info":[tab[2], tab[3], tab[4], tab[5]]}
        }},
    {"Name":"MessageBar",
        "Description":"Display the following text on everybody's screen!",
        "CMDVariation":["m", "sm","message", "alert"],
        "Format":["message", "disguise"],
        "Function":function(tab){
            return {"Name":"DisplayMessage", "Info":[tab[3] || "Remote Controller",tab[2]]}
        }},
    {"Name":"Mute", 
        "CMDVariation":["mute"],
        "Format":["player"], 
        "Description":"Mute the following player. They won't be able to type into textboxes.",
        "Function":function(tab){			
            return {"Name":"Mute", "Info":[tab[2]]}
        }},
    {"Name":"Note", 
        "CMDVariation":["playernote", "note"],
        "Format":["player", "note"], 
        "Description":"Assign a note to a player.",
        "Function":function(tab){			
            return {"Name":"GNote", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Nuke", 
        "CMDVariation":["nuke", "scpnuk"],
        "Format":["seconds_elasped"], 
        "Description":"Nuke the map using scp stuff",
        "Function":function(tab){
            return {"Name":"Nuke", "Info":tab[2]}
        }},
    {"Name":"Nil", 
        "CMDVariation":["nil", "nill"],
        "Format":["player"], 
        "Description":"Sets the player's character parent to nil",
        "Function":function(tab){
            return {"Name":"Nil", "Info":tab[2]}
        }},
    {"Name":"Place Teleport", 
        "CMDVariation":["ptp", "placetp"],
        "Format":["player", "placeId"], 
        "Description":"Place teleports a player to a game server",
        "Function":function(tab){
            return {"Name":"PTeleport", "Info":[tab[2], tab[3]]};
        },
    },
    {"Name":"PrivateMessage", 
        "CMDVariation":["pm", "text"],
        "Format":["player", "message"], 
        "Description":"Display the following text on their screen! Not Logged!",
        "Function":function(tab){			
            return {"Name":"PrivateMessage", "Info":[tab[2], tab[3], true]}
        }},
    {"Name":"Respawn", 
        "CMDVariation":["res", "respawn", "repair"],
        "Format":["player"], 
        "Description":"Respawns the Target",
        "Function":function(tab){			
            return {"Name":"Respawn", "Info":tab[2]}
        }},
    {"Name":"Revenge MC", 
        "CMDVariation":["revenge"],
        "Format":["player", "full"], 
        "Description":"Play Revenge on a player",
        "Function":function(tab){
            if (tab[3] == "true"){
                return {"Name":"NewRevenge", "Info":tab[2]};
            }else
                return {"Name":"Revenge", "Info":tab[2]};
            
        }},
    {"Name":"Run clientsided code via HTTP(s) on someone", 
        "CMDVariation":["rlh", "runlocalhttp"],
        "Format":["player", "url_raw"], 
        "Description":"Allows you to run code on the client on someone via a raw http(s) link.",
        "Function":function(tab){			
            return {"Name":"RunLua", "Info":[tab[2], tab[3], nil, true]};
        }},
    {"Name":"Run Code", 
        "CMDVariation":["rs", "rc", "runcode"],
        "Format":["lua"], 
        "Description":"Allows you to run code on the server.",
        "Function":function(tab){			
            return {"Name":"RunLua", "Info":["", tab[2]]}
        }},
    {"Name":"Run Code on someone", 
        "CMDVariation":["rcs","rcp"],
        "Format":["player", "lua"], 
        "Description":"Allows you to run code on the server on someone.",
        "Function":function(tab){			
            return {"Name":"RunLua", "Info":[{Player: tab[2], Code: tab[3], Parent: "workspace"}]};
        }},
    {"Name":"Run Local Code", 
        "CMDVariation":["rls", "rlc", "runlocalcode"],
        "Format":["player", "lua"], 
        "Description":"Allows you to run code on a client.",
        "Function":function(tab){			
            return {"Name":"RunLocalLua", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Run Scripts", 
        "CMDVariation":["r","run", "runscripts"],
        "Format":["scripts", "player"], 
        "Description":"Runs a script that is avaliable on the Jade's Loader v2 Platform",
        "Function":function(tab){			
            return {"Name":"GrabScript", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Run serversided code via HTTP(s) on someone", 
        "CMDVariation":["rh","runhttp"],
        "Format":["player", "url_raw"], 
        "Description":"Allows you to run code on the server on someone via a raw http(s) link.",
        "Function":function(tab){			
            return {"Name":"RunLua", "Info":[tab[2], tab[3], true]};
        }},
    {"Name":"Unban", 
        "CMDVariation":["unban", "pardon"],
        "Format":["player", "reason"], 
        "Description":"Unbans the Player",
        "Function":function(tab){			
            return {"Name":"Unban", "Info":[tab[2]]}
        }},
    {"Name":"Unbanish", 
        "CMDVariation":["unbanish", "gift", "sorry"],
        "Format":["player"], 
        "Description":"Unbanishes the target playe",
        "Function":function(tab){			
            return {"Name":"Unbanish", "Info":[tab[2]]}
        }},
    {"Name":"UnLag", 
        "CMDVariation":["unlag", "removelag"],
        "Format":["player"], 
        "Description":"Remove any lag created by Jade Loader for the player",
        "Function":function(tab){			
            return {"Name":"Unlag", "Info":[tab[2]]}
        }},
    {"Name":"Unmute", 
        "CMDVariation":["unmute"],
        "Format":["player"], 
        "Description":"Unmute the following player",
        "Function":function(tab){			
            return {"Name":"Unmute", "Info":[tab[2]]}
        }},
    {"Name":"SetGui", 
        "CMDVariation":["setgui", "requesttextbox"],
        "Format":["player", "guiId", "text"], 
        "Description":"Request a remote input to the target's textbox",
        "Function":function(tab){			
            return {"Name":"SetGui", "Info":[tab[2], tab[3], tab[4]]}
        }},
    {"Name":"Set Punishment Script", 
        "CMDVariation":["setpunish", "statepunish"],
        "Format":["blacklistedscript", "punishmenttype"], 
        "Description":"Changes the punishment the loader will do on a player.",
        "Function":function(tab){			
            return {"Name":"SetPunishment", "Info":[tab[2], tab[3]]}
        }},
    {"Name":"Shutdown", 
        "CMDVariation":["shutdown", "kickall"],
        "Format":["reason"], 
        "Description":"Shuts down the server.",
        "Function":function(tab){
            return {"Name":"Shutdown", "Info":[tab[2], true]}
        }},
    {"Name":"Sound Mute", 
            "CMDVariation":["earplugs", "soundmute", "smute"],
            "Format":["player"], 
            "Description":"Defean the target so sounds played to them softens.",
            "Function":function(tab){			
                return {"Name":"SoundMute", "Info":[tab[2]]}
        }},
    {"Name":"StopMusic", 
        "CMDVariation":["stopmusic", "clearmusic"],
        "Format":[], 
        "Description":"Clears any Jade Loader v2 Audio",
        "Function":function(tab){			
            return {"Name":"StopMusic"}
        }},
    {"Name":"Teleport", 
        "CMDVariation":["tp", "teleport"],
        "Format":["player", "player"], 
        "Description":"Teleports a player to another player. The first parameter being the destination player. The second parameter being the target player.",
        "Function":function(tab){
            return {"Name":"Teleport", "Info":[tab[2], tab[3]]};
        },
    },
    {"Name":"ThrottleFPS", 
            "CMDVariation":["lag", "throttle", "slow"],
            "Format":["player", "targetfps"], 
            "Description":"Sets the player's fps to the provided fps",
            "Function":function(tab){			
                return {"Name":"Lag", "Info":[tab[2], tab[3]||  30]}
        }},
    {"Name":"UnSound Mute", 
            "CMDVariation":["unearplug", "unsmute"],
            "Format":["player"], 
            "Description":"Undefean the target so sounds played to them returns to normal.",
            "Function":function(tab){			
                return {"Name":"UnsoundMute", "Info":[tab[2]]}
        }},
    {"Name":"Vaporize Skid Admin Scripts", 
            "CMDVariation":["cleanse", "cleanadmin", "vaporize"],
            "Format":["player"], 
            "Description":"injects neurotoxin into stupid and abusive admin scripts so they go poof. Hates IY_GUI, QuantomUI and MakerModelLua's TaskBar",
            "Function":function(tab){			
                return {"Name":"VaporizeBadmins", "Info":[tab[2]]}
        }},
    {"Name":"Walkspeed", 
        "CMDVariation":["ws", "walkspeed"],
        "Format":["player", "walkspeed"], 
        "Description":"Change the walkspeed of a player",
        "Function":function(tab){
            return {"Name":"Walkspeed", "Info":[tab[2], tab[3]]};
        },
    },
]
class ConsoleClient{
    constructor(){
        this.NewLogs = [];
        this.AutoCorrectChanges = {
            boolean:["true", "false"],
            lightingMode: ["Day", "Night", "SpookyDark", "ZombieHours", "Morning", "ZombieDay"],
            punishmentType: ["banhammer", "angrygods", "respawn", "kick", "ban", "kill", "grave"],
            lookForType: ["foriegnsound", "foriegnparts", "models", "foriegnentities", "foriegnguis", "foriegnlabels"],
            sParentClass: ["workspace", "ServerScriptService", "nil"],
            visualizerTween: ["Burny", "Rainbow", "Nothing"],
            rank: ["President", "Administrator", "Moderator", "GuildModerator", "Whitelisted", "Member"],
            visualize: ["true", "false", "sphere"],
            banDuration: ["1 days","1 years","5 months", "12 hours", "30 minutes", "15 seconds", "420 hours", "777 seconds", "10000 years", "perm"],
            pageType: ["pages", "entries"],
            RBXPlayer_NOPROXY: trackedPlayerNames,
            DISCORD_PROFILE: trackedDiscordNames,
            proxyId: trackedProxyIds,
        };
        this.Status = {};
        /**
         * @type {string}
         */
        this.AttachedProxy = null;
        this.Key = 0;
        /** @type {JadeProfile} */
        this.JadeProfile;
        /** @type {WebSocket} */
        this.ConnectedSocket;
    }
}
class ActionInputParams{
    constructor(){
        /**
         * @type {Number} The minimum the number should be when input.
         */
        this.numberMin;
        /**
         * @type {Number} The maxium the number should be when input.
         */
        this.numberMax;
    }
}
class Action{
    /**
     * @param {discord.MessageEmbed} messageEmbed
     * @param {String} inputType [NUMBER, STRING, BOOLEAN]
     * @param {Function} callback
     * @param {ActionInputParams} inputParams
     */
    constructor(messageEmbed, inputType, callback, inputParams){
        this.MessageEmbed = messageEmbed;
        /**
        * @type {String} [NUMBER, STRING, BOOLEAN]
        */
        this.InputType = inputType;
        this.Callback = callback;
        /**
         * @type {ActionInputParams}
         */
        this.InputParams = inputParams || {};
    }
};
class SystemLog{
    /**
     * 
     * @param {String} message 
     * @param {String} system 
     * @param {String} messageType [MESSAGE, WARNING, ERROR, INFO] 
     */
    constructor(message, system, messageType){
        /** @type {String} */
        this.System = system || "Unknown System";
        /** @type {String} [MESSAGE, WARNING, ERROR, INFO]*/
        this.MessageType = messageType || "MESSAGE";
        /** @type {String} */
        this.Message = message;
        /** @type {number} */
        this.UTCLogged = Date.now();
    }
}
class ProxyLog{
    constructor(system, message, color, utc){
        /** @type {String} */
        this.System = system;
        /** @type {String} */
        this.Message = message;
        /** @type {number[]} */
        this.Color = color;
        /** @type {number} */
        this.UTCLogged = utc;
    }
}
class ProxyRequest{
    constructor(command, argument){
        /** @type {string} */
        this.Command = command;
        /** @type {string[] | string} */
        this.Arguments = argument;
    }
};
class ProxyClient{
    /**
     * 
     * @param {String} name
     * @param {number} proxyId 
     * @param {String} key 
     * @param {number} placeId 
     * @param {String} jobId 
     */
    constructor(name, proxyId, key, placeId, jobId){
        this.Name = name;
        this.Id = proxyId;
        this.Key = key;
        /** @type {ProxyLog[]} */
        this.Logs = [];
        /** @type {Array.<Object.<Number, Boolean>>} */
        this.Players = [];
        /** @type {ProxyRequest[]} */
        this.Request = [];
        this.PlaceId = placeId;
        this.PeakPerformance = 1/60;
        this.JobId = jobId;
        this.LastPing = Date.now();
    }
}
class IncomingRecieptRequest{
    constructor(){
        /** @type {import("request").Response} */
        this.Response;
        /** @type {import("request").Request} */
        this.Request;
        /** @type {ConsoleClient} */
        this.User;
        /** @type {discord.User} */
        this.DiscordUser;
        /** @type {(discord.TextChannel | discord.GuildChannel)} */
        this.DiscordChannel;
    }
    /**
     * 
     * @param {String} message 
     * @param {Number[]} color 
     * @param {Number} overrideTime UTC in MS FORMAT
     */
    Logger(message, color, overrideTime){
        
    }
    /**
     * 
     */
    FinishYield(){
        
    }
}
class RobloxUser{
    constructor(){
        /** @type {number} */
        this.UserId;
        /** @type {String} */
        this.Username;
    }
}
class Ban{
    /**
     * @param {JadeProfile} admin
     * @param {String} reason
     * @param {Number} duration -This is measured in seconds since UTC. -1 for permanent 
     */
    constructor(admin, reason, duration, id){
        /** @type {JadeProfile} */
        this.Banner = admin;
        /** @type {String} */
        if (reason.length > 1000)
            throw new Error("Cannot append reason with more than 1000 characters!");
        this.BanReason = reason;
        /** @type {Number} */
        this.Duration = duration;
        this.BanDate = Date.now();
        let banId = id;
        if (banId == null){
            banId = "";
            for (let i = 0;i<20;i++){
                banId += Math.floor(Math.random()*10);
            }
        }
        this.BanId = banId;
    }
}
class RobloxServer{
    constructor(){
        /** @type {String} */
        this.Id = "";
        /** @type {Number} */
        this.MaxPlayers;
        /** @type {Number} */
        this.Playing;
        /** @type {Number} */
        this.FPS;
        /** @type {Number} */
        this.Ping;
    }
}
const Roblox = {
    Cache: {},
    GetUserFromUserId:
    /**
     * @param {number} userId
     * @returns {Promise<RobloxUser>}
     */
    function(userId){
        return new Promise(function(accept, reject){
            if (Roblox.Cache[userId + "UserIdProfile"]){
                accept(Roblox.Cache[userId + "UserIdProfile"]);
                return;
            }
            let user;
            for (let i in Roblox.Cache){
                let v = Roblox.Cache[i];
                if (i.match(/UserNameProfile$/))
                if (v.UserId == userId){
                    user = v;
                }
            }
            if (user){
                Roblox.Cache[userId + "UserIdProfile"] = user;
                accept(user);
                return;
            }
            request("https://api.roblox.com/users/" + userId, {method: "GET"}, function(err, res){
                if (err){
                    reject(err);
                    return;
                }
                try{
                    let data = JSON.parse(res.body);
                    if (data.Username == null){
                        reject("No users found!");
                        return;
                    }
                    let user = new RobloxUser();
                    user.UserId = userId;
                    user.Username = data.Username;
                    Roblox.Cache[userId + "UserIdProfile"] = user;
                    accept(user);
                }
                catch(err){
                    systemLog("RobloxProfileCache", `From GetUserFromUserId: ${err}`, "ERROR");
                    reject(err);
                }
            }).catch(function(er){
                reject(er);
                return;
            });
        });
    },
    /**
     * @param {String} userName
     * @returns {Promise<RobloxUser>}
     */
    GetUserFromUserName: function(userName){
        return new Promise(function(accept, reject){
            if ( Roblox.Cache[userName.toLowerCase() + "UserNameProfile"]){
                accept(Roblox.Cache[userName.toLowerCase() + "UserNameProfile"]);
                return;
            }
            let user;
            for (let i in Roblox.Cache){
                let v = Roblox.Cache[i];
                if (i.match(/UserIdProfile$/))
                    if (v.Username.toLowerCase() == userName.toLowerCase()){
                        user = v;
                    }
            }
            if (user){
                Roblox.Cache[userName.toLowerCase() + "UserNameProfile"] = user;
                accept(user);
                return;
            }
            request("https://api.roblox.com/users/get-by-username/?username=" + userName, {method: "GET"}, function(err, res){
                if (err){
                    reject(err);
                    return;
                }
                try{
                    let data = JSON.parse(res.body);
                    if (data.Username == null){
                        reject("No users found!");
                        return;
                    }
                    let user = new RobloxUser();
                    user.UserId = data.Id;
                    user.Username = data.Username;
                    Roblox.Cache[userName.toLowerCase() + "UserNameProfile"] = user;
                    accept(user);
                }
                catch(err){
                    systemLog("RobloxProfileCache", `From GetUserFromUsername: ${err}`, "ERROR");
                    reject(err);
                }
            }).catch(function(er){
                reject(er);
                return;
            });
        });
    },
    GetHeadshotFromUserId:
    /**
     * @param {Number} userId
     * @return {Promise<String>} URL of headshot.
     */
    function(userId){
        return new Promise(function(accept, reject){
            if (Roblox.Cache[userId + "UserIdHeadshot"]){
                accept(Roblox.Cache[userId + "UserIdHeadshot"]);
                return;
            }
            request("https://thumbnails.roblox.com/v1/users/avatar-headshot?format=Png&isCircular=false&size=420x420&userIds=" + userId, function(err, res){
                if (err){
                    reject(err);
                    return;
                }
                try{
                    let data = JSON.parse(res.body);
                    if (data.data == null){
                        reject("Request returned nothing...");
                        return;
                    }
                    let headshotUrl = data.data[0].imageUrl;
                    Roblox.Cache[userId + "UserIdHeadshot"] = headshotUrl;
                    accept(headshotUrl);
                }
                catch(err){
                    systemLog("RobloxProfileCache", `From GetHeadshotFromUserId: ${err}`, "ERROR");
                    reject(err);
                }
            });
        });
    },
    GetServersFromplaceId:
    /**
     * @param {String} placeId
     * @returns {Promise<RobloxServer[]>}
     */
    function(placeId){
        return new Promise(function(accept, reject){
            request("https://games.roblox.com/v1/games/" + placeId +"/servers/Public?limit=100&sortOrder=Asc" + placeId, {method: "GET"}, function(err, res){
                if (err){
                    reject(err);
                    return;
                }
                try{
                    let data = JSON.parse(res.body).data;
                    let list = [];
                    data.forEach(function(value){
                        let server = new RobloxServer();
                        server.Id = value.id;
                        server.MaxPlayers = value.maxPlayers;
                        server.Playing = value.playing;
                        server.FPS = value.fps;
                        server.Ping = value.ping;
                        list.push(server);
                    });
                    accept(list);
                }
                catch(err){
                    systemLog("RobloxProfileCache", `From GetServersFromplaceId: ${err}`, "ERROR");
                    reject(err);
                }
            });
        });
    }
};
const RoVer = {
    Cache: {},
    Timeout: 0,
    GetRbxFromDiscord: 
    /**
     * @param {String} Snowflake
     * @returns {Promise<RobloxUser>}
     */
    function(snowflake){
        return new Promise(function(accept, reject){
            if (Date.now()-RoVer.Timeout < 60)
                reject("Rover Request Timeout. Cannot send more than 60 requests in a minute.")
            request("https://verify.eryn.io/api/user/" + snowflake, function(err, res){
                if (err){
                    if (res.statusCode == 429){
                        RoVer.Timeout = Date.now();
                    }
                    reject(err);
                    return;
                }
                try{
                    let id = JSON.parse(res.body).robloxId;
                    Roblox.GetUserFromUserId(id).then(function(va){
                        if (va){
                            RoVer.Cache[snowflake] = va;
                            accept(va);
                        }
                    }).catch(function(er){
                        reject(er);
                    });
                }
                catch(err){
                    systemLog("RoVer", `From GetRbxFromDiscord: ${err}`, "ERROR");
                    reject(err);
                }
            });
        })
    }
}
class Role{
    /**
     * 
     * @param {String} roleName 
     * @param {Number} rankId 
     * @param {Number[]} color 
     * @param {String} primaryRankId The rank's snowflake in the primary server if exists.
     */
    constructor(roleName, rankId, color, primaryRankId){
        /** @type {Number} */
        this.RankId = rankId;
        /** @type {String} */
        this.RoleName = roleName;
        /** @type {Number[]} */
        this.Color = color;
        /** @type {String} The rank's snowflake in the primary server. */
        this.PrimaryRankId = primaryRankId;
    }
}
let roles = {
    President: new Role("President", 256, [241, 196, 15], "605227436258361355"),
    VicePresident: new Role("Vice President", 255, [226, 186, 0], "759129667851780178"),
    ServerAdministrator: new Role("Server Administrator", 254, [235, 0, 231], "759129430328344606"),
    Developer: new Role("Developer", 253, [162, 0, 177], "759129781102182400"),
    Administrator: new Role("Administrator", 252, [128, 73, 255], "605227257027362817"),
    Moderator: new Role("Moderator", 251, [0, 170, 255], "727760897639972897"),
    VoidStaff: new Role("Void Staff", 250, [179, 66, 245]),
    GuildModerator: new Role("Guild Moderator", 201, [156, 255, 0], "745109068871499776"),
    Whitelisted: new Role("Whitelisted", 200, [0, 170, 255], "605226958451638281"),
    Member: new Role("Member", 1, [255, 255, 255], "609124414365106226")
};
let botIsReady = false;
/**
 * @param {Function} func The function that will execute when the bot is ready to do crap.
 */
let processBotReady = function(func){
    if (botIsReady){
        func();
    }else{
        bot.once("ready", function(){
            botIsReady = true;
            func();
        });
    }
}
processBotReady(function(){
    systemLog("System", "Sucessfully booted up JAS Bot Interface.", "INFO");
    systemLog("System", `Took ${nearDateConversion((Date.now()-startTime)/1000)} to boot up JAS Bot Interface.`, "INFO");
})
const proxyCache = {};
let updateProxyAutoCorrect = function(){
    trackedProxyIds.splice(0, trackedProxyIds.length);
    for (let i in proxyCache){
        /** @type {ProxyClient} */
        let proxyA = proxyCache[i];
        trackedProxyIds.push(String(proxyA.Id));
    }
    for (let i in consoleCache){
        /** @type {ConsoleClient} */
        let client = consoleCache[i];
        client.AutoCorrectChanges.proxyId = trackedProxyIds;
    }
};
let timeSinceUpdate = 0;
let updateDiscordBotWatch = function(){
    if (Date.now()-timeSinceUpdate < 2000){
        return;
    }
    timeSinceUpdate = Date.now();
    processBotReady(function(){
        fs.stat("storage/userdata", function(err, stats){
            let profiles = stats.size/5000;
            let proxies = 0;
            for (let in proxyCache){
                proxies ++;
            }
            bot.user.setPresence({
                activity: {
                    name: `${proxies} Online Proxies, ${profiles} JadeProfiles, ${Math.floor(Math.min(systemCurrentInfo.Cpu, 1)*100)}% CPU Usage`,
                    type: "PLAYING",
                }
            }); 
        })
    });
}
setInterval(updateDiscordBotWatch, 10000);
updateDiscordBotWatch();
class DiscordSimplified{
    /**
     * 
     * @param {discord.User} user 
     */
    constructor(user){
        this.Username = user.username;
        this.Discriminator = user.discriminator;
        this.Id = user.id;
        this.Formatted = `${user.username}#${user.discriminator} (${user.id})`;
    };
}
const Discord = {
    GetCache: function(){
        if (botIsReady == false){
            throw new Error("Bot isn't ready yet!");
        }
        let cache = bot.users.cache.array();
        /**
         * @type {DiscordSimplified[]}
         */
        let simplifiedArray = [];
        cache.forEach(function(va){
            let discordSimplified = Discord.GetDiscordSimplifiedFromUser(va)
            simplifiedArray.push(discordSimplified);
        });
        return simplifiedArray;
    },
    /**
     * @param {discord.User} user
     */
    GetDiscordSimplifiedFromUser: function(user){
        return new DiscordSimplified(user);
    },
    /** 
     * @param {String} format Format Example: TheJades#2903 (317118157711998976)
     * @return {Promise<discord.User>}
    */
    GetUserFromDiscordFormatted: function(format){
        return new Promise(function(resolve, reject){
            let matches = format.match(/(?:(.+)#(\d{4}))?(?: \((\d{17,19})\))?/);
            let username = matches[1];
            let discriminator = matches[2];
            let id = matches[3];
            if (username == null && discriminator == null && id == null)
                reject("Either Discord Username or Id isn't detected. No Discord Profiles Detected.");
            if (id){
                bot.users.fetch(id, true).then(function(va){
                    resolve(va);
                });
            }else{
                let discordUser = bot.users.cache.findKey(function(user){
                    return user.username == username && user.discriminator == user.discriminator;
                });
                if (discordUser){
                    resolve(discordUser);
                }else
                    reject("Discord Username and Discriminator found but no Discord Profiles found.");
            };
        });
    }
};
/**
 * 
 * @param {discord.User} user 
 */
let addDiscordToTracked = function(user){
    let simpA = Discord.GetDiscordSimplifiedFromUser(user).Formatted;
    if (trackedDiscordNames.find(simp =>{return simp == simpA}) == undefined){
        trackedDiscordNames.push(simpA);
        for (let i in consoleCache){
            /** @type {ConsoleClient} */
            let client = consoleCache[i];
            client.AutoCorrectChanges["DISCORD_PROFILE"] = trackedDiscordNames;
        }
    }
}
processBotReady(function(){
    bot.users.cache.array().forEach(function(va){
        addDiscordToTracked(va);
    });
    bot.on("guildMemberAdd", function(guild){
        let user = guild.user;
        addDiscordToTracked(user);
    });
});
if (thisIsJadesPC){
    systemLog("System", "Running debug mode on Jade's Admin System", "WARN");
}else
    systemLog("System", "Running normal mode on Jade's Admin System", "INFO");
const jadeProfileCache = {};
class JadeProfile{
    /** @param {(RobloxUser | discord.User)} Id */
    constructor(Id){
        let map = JSON.parse(fs.readFileSync(storageUri + "userdatamap.json"));
        let index = map.Roblox["RBX" + Id.UserId];
        if (Id.UserId == null && Id.id == null){
            throw new Error("Invalid User Object called when getting Jade Profile");
        }
        if (index == null)
            index = map.Discord["DIS" + Id.id];
        let self = this;
        /** @type {String} */
        this.AvatarUrl;
        /** @type {Role} */
        this.Role = roles.Member;
        /** @type {String} */
        this.Nickname;
        /** @type {RobloxUser} */
        this.RobloxUser;
        /** @type {discord.User[]} */
        this.DiscordUsers = [];
        /** @type {String} */
        this.Notes;
        /** @type {Ban} */
        this.BanData;
        /** @type {Table} */
        this.OtherData = {};
        /** @type {Table} */
        this.TempData = [];
        this.AuditLogs = [];
        this.functions = [];
        /** @type {Object} */
        this.References = {};
        let finish;
        let dataHead = (index || 0)*5000;
        this.ready = false;
        this.saveData = function(){
            return new Promise(function(accept, reject){
                try{
                    let stream = fs.createWriteStream(storageUri +"userdata", {start: dataHead, flags: "r+"});
                    let buffer = Buffer.alloc(5000);
                    let discordIds = [];
                    self.DiscordUsers.forEach(function(discordUser){
                        discordIds.push(discordUser.id);
                    });
                    let saveData = {
                        OtherData: self.OtherData,
                        Notes: self.Notes,
                        RobloxId: self.RobloxUser.UserId,
                        DiscordIds: discordIds,
                        Nickname: self.Nickname,
                        AvatarUrl: self.AvatarUrl,
                        Role: self.Role.RankId
                    };
                    if (self.BanData){
                        saveData.BanData = new Ban(self.BanData.Banner.RobloxUser.UserId, self.BanData.BanReason, self.BanData.Duration, self.BanData.BanId)
                        saveData.BanData.BanDate = self.BanData.BanDate;
                    }
                    buffer.write(JSON.stringify(saveData));
                    stream.on("finish", function(){
                        stream.end();
                        stream.close();
                        accept();
                    });
                    stream.end(buffer);
                }
                catch(er){
                    systemLog("Profile Manager", "JadeProfile " + self.Nickname + " failed to save! " + er, "ERROR");
                }
            });
        }
        let recreateSave;
        finish = function(){
            let stream = fs.createReadStream(storageUri +"userdata", {start: dataHead, end: dataHead+5000-1});
            let data = "";
            stream.on("data", function(buffer){
                data += buffer;
            });
            /** @param {Function} callback */
            stream.on("end", function(){
                data = data.replace(new RegExp(String.fromCharCode(0), "g"), "")
                let errored = false;
                let complete = function(){
                    self.ready = true;
                    self.functions.forEach(function(va){
                        va();
                    });
                };
                try{
                    data = JSON.parse(data);
                }
                catch(er){
                    systemLog("Profile Manager","JadeProfile: " + (Id.Username || Id.username) + "/" + (Id.UserId || Id.id) + " encountered data corruption. Data is unreadable. Reseting profile...", "WARNING");
                    errored = true;
                    self.index = index;
                    try{
                        recreateSave();
                        systemLog("Profile Manager", "JadeProfile: " + (Id.Username || Id.username) + "/" + (Id.UserId || Id.id) + " encountered data corruption. Data has been reset successfully.", "INFO");
                    }
                    catch(er){
                        throw new Error("Failed to create new Jade Profile to remove data corruption! " + er);
                    }
                }
                if (errored){
                    return;
                }
                Roblox.GetUserFromUserId(data.RobloxId).then(function(users){
                    self.RobloxUser = users;
                    if (trackedPlayerNames.find(va =>{return va == users.Username}) == undefined){
                        trackedPlayerNames.push(users.Username);
                        for (let i in consoleCache){
                            /** @type {ConsoleClient} */
                            let client = consoleCache[i];
                            client.AutoCorrectChanges["RBXPlayer_NOPROXY"] = trackedPlayerNames;
                        }
                    }
                    let queue = 0;
                    /** @type {String[]} */
                    let discordIds = data.DiscordIds || [];
                    if (data.DiscordId)
                        discordIds.push(data.DiscordId)
                    discordIds.forEach(function(id){
                        queue ++;
                        bot.users.fetch(id, true).then(function(va){
                            self.DiscordUsers.push(va);
                            jadeProfileCache[va.id] = self;
                            addDiscordToTracked(va);
                            queue --;
                            if (queue == 0)
                                complete();
                        });
                    })
                    self.Nickname = data.Nickname;
                    self.AvatarUrl = data.AvatarUrl;
                    self.BanData = data.BanData;
                    if (self.BanData){
                        queue ++;
                        Roblox.GetUserFromUserId(self.BanData.Banner).then(function(va){
                            let jadeProfile = GetJadeProfile(va);
                            self.BanData.Banner = jadeProfile;
                            if (self.BanData.Banner != self){
                                self.BanData.Banner.References["BanReference=>" + self.Nickname] = true;
                            };
                            let completedWhatSoEver = false;
                            jadeProfile.onComplete(()=>{
                                if (completedWhatSoEver)
                                    return;
                                completedWhatSoEver = true;
                                queue --;
                                if (queue == 0)
                                    complete();
                            });
                            setTimeout(() => {
                                if (completedWhatSoEver)
                                    return;
                                completedWhatSoEver = true;
                                queue --;
                                if (queue == 0)
                                    complete();
                            }, 1000);
                        })
                        if (self.BanData.BanId == null){
                            let banId = "";
                            for (let i = 0;i<20;i++){
                                banId += Math.floor(Math.random()*10);
                            }
                            self.BanData.BanId = banId;
                        }
                        self.BanData.Duration = Math.max(-1, self.BanData.Duration);
                    }
                    self.Notes = data.Notes;
                    self.OtherData = data.OtherData;
                    if (Array.isArray(self.OtherData)){
                        self.OtherData = {};
                    }
                    for (let i in roles){
                        let v = roles[i];
                        if (data.Role == v.RankId){
                            self.Role = v;
                        }
                    }
                    self.index = index;
                    if (queue != 0)
                        return;
                    complete();
                })
            });
        };
        recreateSave = function(){
            if (Id.UserId){
                Roblox.GetUserFromUserId(Id.UserId).then(function(user){
                    self.RobloxUser = user;
                    self.Nickname = self.RobloxUser.Username;
                    jadeProfileCache[Id.UserId] = undefined;
                    map.Roblox["RBX" + Id.UserId] = index;
                    fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
                    self.saveData().then(finish);
                });
            }else
                throw new Error("Unable to create Jade Profile from a Discord User. Discord: " + Id.username);
        }
        if (index == null){
            index = map.Length;
            map.Length ++;
            dataHead = index*5000;
            recreateSave();
        }else{
            finish();
        }
    }
    /** @param {discord.User} user */
    AppendDiscord(user){
        let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
        if (map.Discord["DIS" + user.id] == this.index)
            return;
        let self = this;
        if (map.Discord["DIS" + user.id] != this.index && map.Discord["DIS" + user.id] != undefined){
            let conflictProfile = GetJadeProfile(user);
            throw new Error(`Unable to append the Discord Account "${user.username}" to the Jade Profile "${self.Nickname}" with conflict. Can not have more than two profiles affiliated with a Discord Account. Conflicting JadeProfile: ${conflictProfile.Nickname}`);
        }
        jadeProfileCache[user.id] = this;
        this.DiscordUsers.push(user);
        map.Discord["DIS" + user.id] = this.index;
        fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
        this.saveData();
    }
    /** @param {discord.User} user */
    RemoveDiscord(user){
        if (jadeProfileCache[user.id] != this)
            throw new Error(`Unable to remove the Discord Account ${user.username}. This Discord Account isn't affiliated with this Jade Profile.`);
        delete jadeProfileCache[user.id];
        let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
        let findIndex = this.DiscordUsers.findIndex(function(va){
            return va.id == user.id;
        });
        if (findIndex != -1){
            this.DiscordUsers.splice(findIndex, 1);
        }
        delete map.Discord["DIS" + user.id];
        fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
        this.saveData();
    }
    /** @param {String} notes */
    ApplyNotes(notes){
        if (notes.length > 1000)
            throw new Error("Cannot append note with more than 1000 characters!");
        this.Notes = notes;
        this.saveData();
    }
    onComplete(callback){
        if (this.ready){
            callback();
        }else
            this.functions.push(callback);
    }
    ClearNotes(){
        this.Notes = undefined;
        this.saveData();
    }
    ClearDiscordData(){
        let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
        this.DiscordUsers.forEach(function(user){
            delete jadeProfileCache[user.id];
            delete map.Discord["DIS" + user.id];
        });
        this.DiscordUsers = [];
        fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
        this.saveData();
    }
    /** @param {Ban} banData */
    ApplyBan(banData){
        if (banData.BanReason.length > 1000)
            throw new Error("Cannot append reason with more than 1000 characters!");
        if (this.BanData){
            delete this.BanData.Banner.References["BanReference=>" + this.Nickname];
        }
        let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
        banData.Duration = Math.max(-1, banData.Duration);
        map.BanList[String(this.RobloxUser.UserId)] = true;
        fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
        this.BanData = banData;
        this.BanData.Banner.References["BanReference=>" + this.Nickname] = true;
        this.saveData();
    }
    ClearBan(){
        if (this.BanData == null)
            return;
        if (this.BanData.Banner != this){
            delete this.BanData.Banner.References["BanReference=>" + this.Nickname];
        };
        this.BanData = undefined;
        let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
        delete map.BanList[String(this.RobloxUser.UserId)];
        fs.writeFileSync(storageUri +"userdatamap.json", JSON.stringify(map));
        this.saveData();
    }
    /** @param {String} nickname */
    ApplyNickName (nickname){
        if (nickname.length > 1000)
            throw new Error("Cannot append nickname with more than 500 characters!");
        this.Nickname = nickname;
        this.saveData();
    }
    /** @param {Role} role */
    ApplyRole (role){
        this.Role = role;
        this.saveData();
    }
    ManualSave(){
        this.saveData();
    }
}
/** @type {JadeProfile} */
let owner;
/** 
 * @param {(RobloxUser | discord.User)} user
 */
const GetJadeProfile = function(user){
    /** @type {JadeProfile} */
    let jadeUser = jadeProfileCache[user.UserId || user.id];
    if (jadeUser == null){
        for (let i in jadeProfileCache){
            /** @type {JadeProfile} */
            let v = jadeProfileCache[i];
            if (v && v.RobloxUser && (v.RobloxUser.UserId == user.UserId || (v.DiscordUser && user.id && v.DiscordUser.id == user.id))){
                jadeUser = v;
                jadeProfileCache[user.UserId || user.id] = jadeUser;
                break;
            }
        }
    }
    if (jadeUser == null){
        jadeUser = new JadeProfile(user);
        if (user.UserId){
            jadeProfileCache[user.UserId] = jadeUser;
        }else{
            jadeUser.onComplete(function(){
                jadeProfileCache[jadeUser.RobloxUser.UserId] = jadeUser;
            });
        }
        jadeUser.References["System Cache"] = true;
        if (user.id){
            jadeProfileCache[user.id] = jadeUser;
        }
    }
    return jadeUser;
};
Roblox.GetUserFromUserId(144244136).then(function(va){
    owner = GetJadeProfile(va);
    owner.onComplete(function(){
        owner.OtherData.BadminRecords = {TheBossHub: [1]};
        if (owner.Role != roles.President)
            owner.ApplyRole(roles.President);
        bot.users.fetch("317118157711998976", true).then(function(va){
            owner.AppendDiscord(va);
        });
    });
});
let primaryServer;
processBotReady(function(){
    primaryServer = bot.guilds.cache.get(primaryServerId);
})
const consoleCache = {};
if (systemCache.proxyIdRead == null){
    if (fs.existsSync(storageUri + "proxies/currentPos.txt")){
        systemCache.proxyIdRead = Number(fs.readFileSync(storageUri +"proxies/currentPos.txt", "utf-8"));
    }else{
        systemCache.proxyIdRead = 0;
    }
}
/**
 * 
 * @param {String} ip 
 * @return {String}
 */
let censorIp = function(ip){
    const ipToCensore = []
    for (let i in ipToCensore){
        ip = ip.replace(ipToCensore[i].From, ipToCensore[i].To);
    }
    return ip;
};
/**
 * 
 * @param {discord.User} discordUser The snowflake of Discord Account that would be rank if they have a Jadeprofile.
 */
let autoRankInPrimaryServer = function(discordUser){
    let readyToRank = function(){
        primaryServer.members.fetch(discordUser, true).then(
            /** 
             * @param {discord.GuildMember} guildMember
             */
            function(guildMember){
                if (thisIsJadesPC)
                    return;
                let jadeProfile = GetJadeProfile(discordUser);
                jadeProfile.onComplete(function(){
                    let roleId = jadeProfile.Role.RankId;
                    if (roleId == 250)
                        roleId = 1;
                    for (let i in roles){
                        /** @type {Role} */
                        let v = roles[i];
                        if (v.PrimaryRankId == null)
                            continue;
                        if (roleId >= v.RankId){
                            guildMember.roles.add(v.PrimaryRankId, "Auto Rank by Jade's Bot. Their role was higher or equal to this role.").catch(function(){

                            });
                        }else
                            guildMember.roles.remove(v.PrimaryRankId, "Auto Rank by Jade's Bot. Their role was lower to this role.").catch(function(){

                            });
                }
            });
        });
    }
    if (botIsReady == false){
        bot.on("ready", function(){
            readyToRank();
        });
    }else
        readyToRank();
}

/**
 * Creates a new proxy cache under the following names, placeid and jobid.
 * @param {String} name 
 * @param {Number} placeid 
 * @param {String} jobid 
 */
let intialProxy = function(name, placeid, jobid){
    let key = "";
    for (let i = 0;i<10;i++){
        key = key + Math.floor(Math.random()*10);
    }
    systemCache.proxyIdRead ++;
    let proxy = new ProxyClient(name, systemCache.proxyIdRead, key, placeid, jobid);
    proxyCache[String(systemCache.proxyIdRead)] = proxy;
    updateProxyAutoCorrect();
    for (let i in consoleCache){
        /** @type {ConsoleClient} */
        let client = consoleCache[i];
        client.NewLogs.push({System: "ProxyManager", Message: "New Inbound Connection! ProxyId: " + systemCache.proxyIdRead + ". Place Name: " + name, Color: [0, 255, 85], Now: Date.now()})
    }
    return {Proxy: proxy, Key: key};
}
/**
 * 
 * @param {String} ip
 */
let verifyOriginsFromRoblox = function(ip){
    return new Promise(function(accept, reject){
        if (ip == "ip"){
            accept(true);
            return;
        }
        request("https://ipinfo.io/" + ip + "/json?token=7b61cf4c7287d3", {method: "GET"}, function(err, res){
            if (err){
                reject(err);
            }
            try{
                let data = JSON.parse(res.body);
                accept(data.org == "AS22697 Roblox");
            }
            catch(err){
                reject(err);
            }
        })
    });
}
/**
 * Checks if the following request's auth code is from a valid loader origin.
 * @param {String} code 
 */
let checkAuth = function(code){
    return Number(code) == Math.pow(Math.floor(Date.now()/10000)*10000%32*22, 2)%3441;
}
/*responder.get("/compareAuth", function(req, res){
    console.log(Math.floor((Math.floor(Date.now()/1000)/100000+29491+Math.pow(Math.floor(Date.now()/1000)*10000%3942*29482, 2)%34432525011)));
    res.send();
})*/
responder.get("/get", function(req, res){
    if (checkAuth(req.query.authCode) == false){
        res.status(403);
        res.send("(403) Unauthorized. Please do not use this service without permission.");
        return;
    }
    res.send(req.query.test)
})
/**
 * Tween Color
 * @param {number[]} color1 
 * @param {number[]} color2 
 * @param {number} lerp 
 * @returns {number[]}
 */
let lerpColor = function(color1, color2, lerp){
    let newColor = [];
    color1.forEach(function(value, index){
        newColor[index] = value + (color2[index]-value)*lerp;
    });
    return newColor;
};
if (fs.existsSync(storageUri +"rbxPlayerData.json")){
    Roblox.Cache = JSON.parse(fs.readFileSync(storageUri +"rbxPlayerData.json", "utf-8"));
}
let consoleCommands = [
    {
        Name: "a",
        Variations: ["motivateme"],
        Description: "sometimes when things are down",
        Role: 1,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let quotes = [
                `Don't worry, I'll be there for you ${core.User.JadeProfile.Nickname}`,
                `When times are rough, goals are hard to reach for. I'll be there to support you!`,
                `Imagine yourself in a boat in a empty peaceful lake.__peaceful music plays__`,
                `Take a rest, and have another shot at it when you are ready.`,
                `Even though the road ahead is hard, know for sure you be able to earn something from your journey.`,
                `Imagine yourself having a road trip to the mountains.__peaceful music plays__`,
            ]
            core.Logger(quotes[Math.floor(Math.random()*quotes.length)], [0, 255, 85]);
        }
    },
    {
        Name: "Spam Me Please",
        Variations: ["spam", "test"],
        Description: "spam test",
        Role: 255,
        Arguments: [["timesSpammed", "number"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.Logger("initiating Spam!", [255, 0, 255]);
            let counter = Number(parameters[0]);
            let timer;
            timer = setInterval(() => {
                core.Logger("Spamming " + (Number(parameters[0])-counter), [255, 0, 255]);
                counter -= 1;
                if (counter == 0){
                    clearInterval(timer);
                    core.Logger("Finished!", [255, 0, 255]);
                }
            }, 2);
            
        }
    },
    {
        Name: "Argument Test",
        Variations: ["arg", "testa"],
        Description: "LArg test",
        Role: 255,
        Arguments: [["input1", "string"], ["input2", "boolean"], ["input3", "number"], ["input4", "enum "],["input5", "string"], ["input6", "boolean"], ["input7", "number"], ["input8", "enum "]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.Logger("Argument 1" + parameters[0], [255, 0, 255]);
            core.Logger("Argument 2" + parameters[1], [255, 0, 255]);
            core.Logger("Argument 3" + parameters[2], [255, 0, 255]);
            core.Logger("Argument 4" + parameters[3], [255, 0, 255]);
        }
    },
    {
        Name: "Syslogs Test",
        Variations: ["systest"],
        Description: "LArg test",
        Role: 255,
        Arguments: [["messageType", "string"], ["message", "string"], ["system", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            systemLog("SyslogsTest" + (parameters[2] || "null"), parameters[1] || "", parameters[0] || "MESSAGE");
        }
    },
    {
        Name: "System Usage",
        Variations: ["sysinfo", "sysusage"],
        Description: "Displays the systems current resource usage",
        Discord_Support: true,
        Role: 1,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.Logger("CPU Usage: " + Math.floor(Math.min(systemCurrentInfo.Cpu, 1)*100) + "%", lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(systemCurrentInfo.Cpu, 1)));
            core.Logger("CPU UsageTime: " + Math.floor(systemCurrentInfo.Cpu*1000) + "ms", lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(systemCurrentInfo.Cpu, 1)));
            core.Logger("MEM HeapUsage: " + nearByteConversion(systemCurrentInfo.Memory), lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(systemCurrentInfo.Memory/1e+9, 1)));
            let amount = 0;
            for (let i in jadeProfileCache){
                if (i.length < 12){
                    amount ++;
                }
            }
            core.Logger("├MEM JadeProfiles Loaded: " + amount, lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(amount/100, 1)));//├└
            amount = 0;
            for (let i in proxyCache){
                amount ++;
            }
            core.Logger("├MEM Proxies Loaded: " + amount, lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(amount/100, 1)));
            amount = 0;
            for (let i in consoleCache){
                amount ++;
            }
            core.Logger("└MEM Consoles Loaded: " + amount, lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(amount/100, 1)));
            core.Logger("NET Console Sockets: " + systemCurrentInfo.SocketsUsed, lerpColor([255, 0, 0], [0, 255, 0], 1-Math.min(systemCurrentInfo.SocketsUsed/10, 1)));
            core.Logger("UP TIME: " + timeConversion((Date.now()-startTime)/1000), [0, 170, 255]);
        }
    },
    {
        Name: "Backdoor Tracker",
        Variations: ["backdoors"],
        Description: "Displays all known backdoors connected via HTTPs",
        Discord_Support: true,
        Role: 200,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            for (let i in systemCache.backdoorTracks){
                let time = systemCache.backdoorTracks[i].LastActivity;
                let players = systemCache.backdoorTracks[i].Players;
                core.Logger("Tracking a backdoor in [" + i + "]. Seen " + nearDateConversion((Date.now()-time)/1000) + " ago. Players: " + players, [0, 170, 255]);
            }
        }
    },
    {
        Name: "Close Socket",
        Variations: ["csocket", "closesocket", "dsoc"],
        Description: "Request the server to closing the socket.",
        Discord_Support: true,
        Role: 1,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.User.ConnectedSocket.close(4013, "User requests socket to be closed.");
        }
    },
    {
        Name: "Purge",
        Variations: ["expunge", "purge"],
        Description: "Destroys Discord Messages",
        Discord_Support:true,
        Role: 201,
        Arguments: [["amount", "number"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (core.DiscordChannel){
                let amount = Number(parameters[0]) || 5;
                core.Logger("Purging " + amount + " messages!", [255, 0, 0]);
                let channel = core.DiscordChannel;
                channel.bulkDelete(amount+1, true).then(function(messages){
                    core.Logger("Purged " + amount + " messages!", [255, 0, 0]);
                }).catch(function(er){
                    core.Logger("Oopsies! " + er, [255, 0, 0]);
                })
            }else
                core.Logger("Hmm, as if you aren't using Discord for this. Oh wait you aren't!", [255, 0, 0]);
        }
    },
    {
        Name: "Verify",
        Variations: ["verify"],
        Description: "Verify your Discord account with your Roblox Account using the Roblox Verifier Place.",
        Role: 1,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (core.DiscordUser == null){
                core.Logger("You must use this command in Jade's Discord Server", [255, 0, 0]);
                return;
            }
            let jadeProfile;
            try{
                jadeProfile = GetJadeProfile(core.DiscordUser)
            }
            catch(er){}
            if (jadeProfile){
                core.Logger("You are already verified! You are " + jadeProfile.RobloxUser.Username, [255, 0, 0]);
                autoRankInPrimaryServer(core.DiscordUser);
                return;
            }
            if (core.DiscordUser && jadeProfile == null){
                core.Logger("Sent your verification code to you via DMs", [0, 255, 85]);
                core.Logger("If you don't see it. Perhaps your setting for this server'Allow direct messages from server members.' is off.", [0, 255, 85]);
                let code = "";
                for (let i = 0;i<10;i++){
                    code += Math.floor(Math.random()*10);
                }
                let discordUser = core.DiscordUser;
                for (let i in verificationDatabase){
                    let v = verificationDatabase[i];
                    if (v && v.Id == discordUser.id){
                        code = i;
                    }
                }
                /** @type {discord.User} */
                verificationDatabase[code] = {Name: discordUser.username + "#" + discordUser.discriminator, Id: discordUser.id};
                discordUser.createDM().then(function(va){
                    va.send(`<@${discordUser.id}> Hey!\nYour Verification Code is ${code}. \nPlease take this code to this Roblox Place https://www.roblox.com/games/5187897592/Jades-Admin-System-Verification`)
                }).catch(function(er){
                    core.Logger(er, [255, 0, 0]);
                })
            }
        }
    },
    {
        Name: "RoVerify",
        Variations: ["roverify"],
        Description: "Verify your Discord account with your Roblox Account using the RoVerify API",
        Role: 1,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (core.DiscordUser == null){
                core.Logger("You must use this command in Jade's Discord Server", [255, 0, 0]);
                return;
            }
            let jadeProfile;
            try{
                jadeProfile = GetJadeProfile(core.DiscordUser)
            }
            catch(er){}
            if (jadeProfile){
                core.Logger("You are already verified! You are " + jadeProfile.RobloxUser.Username, [255, 0, 0]);
                autoRankInPrimaryServer(core.DiscordUser);
                return;
            }
            if (core.DiscordUser && jadeProfile == null){
                core.Logger("Requesting RoVer...", [0, 255, 85]);
                RoVer.GetRbxFromDiscord(core.DiscordUser.id).then(function(va){
                    if (va){
                        let jadeProfile = GetJadeProfile(va);
                        jadeProfile.onComplete(function(){
                            jadeProfile.AppendDiscord(core.DiscordUser);
                            core.Logger("You have been verified as " + va.Username + "! Your roles are being added...", [0, 255, 85]);
                            core.Logger("Welcome to Jade Incorporated! Heve fun!", [0, 255, 85]);
                            autoRankInPrimaryServer(core.DiscordUser);
                        });
                    }else{
                        core.Logger("Interesting... RoVer doesn't even know who you are! :shrug:", [255, 0, 0]);
                    }
                }).catch(function(er){
                    core.Logger(er, [255, 0, 0]);
                });
            }
        }
    },
    {
        Name: "Fighters Lyrics",
        Variations: ["fun"],
        Description: "eeeeeeeeeee",
        Role: 255,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let lyrics = [
                [25.5, "No more patience"],
                [27, "When I'm feelin low"],
                [29, "On vacation"],
                [30, "My mind wants to go"],
                [32.5, "Overthinking"],
                [34, "When I'm all alone"],
                [36.5, "Out of focus"],
                [38, "From all the alone"],
                [42.5, "Can you check for my vitals"],
                [45, "Think I need Revival"],
                [50.5, "Broken down and fading"],
                [52.5, "My heart keeps breaking"],
                [59.5, "Caught up in the storm"],
                [60, "But we're the survivors"],
                [62.5, "Lookin' out for love"],
                [64, "In a little bit of darkness"],
                [66, "Hold each other up"],
                [68, "When we falling down"],
                [69.5, "Never give it up"],
                [71, "Because we are"],
                [72, "/The Fighters!\\"],
                [74, "Caught up in the storm"],
                [75, "But we're the survivors"],
                [77.5, "Lookin' out for love"],
                [79, "In a little bit of darkness"],
                [81.5, "Hold each other up"],
                [83, "When we falling down"],
                [85, "Never give it up"],
                [86, "Because we are"],
                [88, "//The Fighters!!\\\\"],
                [121, "Underwater"],
                [122.8, "Swinging my fists"],
                [125, "Tension Rising"],
                [126, "But no part of this"],
                [129, "Nice to meet ya"],
                [130, "Been called a misfit"],
                [133, "No need to fake it"],
                [134, "We all got some shit"],
                [138, "Can you check for my vitals"],
                [141, "Think I need Revival"],
                [146, "Broken down and fading"],
                [148, "My heart keeps breaking"],
                [155.5, "Caught up in the storm"],
                [156, "But we're the survivors"],
                [158, "Lookin' out for love"],
                [160, "In a little bit of darkness"],
                [162, "Hold each other up"],
                [164, "When we falling down"],
                [166, "Never give it up"],
                [167, "Because we are"],
                [168, "/The Fighters!\\"],
                [170, "Caught up in the storm"],
                [171, "But we're the survivors"],
                [173, "Lookin' out for love"],
                [175.5, "In a little bit of darkness"],
                [177.5, "Hold each other up"],
                [179, "When we falling down"],
                [201, "Never give it up"],
                [202, "Because we are"],
                [204, "//The Fighters!!\\\\"],
                [300.5, "Caught up in the storm"],
                [302, "But we're the survivors"],
                [304.5, "Lookin' out for love"],
                [306, "In a little bit of darkness"],
                [308, "Hold each other up"],
                [310, "When we falling down"],
                [311, "Never give it up"],
                [313.5, "Because we are"],
                [315, "//The Fighters!!\\\\"],
            ];
            let songPassed = 0;
            lyrics.forEach(function(v){
                setTimeout(() => {
                    core.Logger(v[1], [0, 170, 255])
                }, v[0]*1000);
            });
        }
    },
    {
        Name: "Commands",
        Variations: ["cmd", "cmds", "help"],
        Description: "List all commands",
        Role: 1,
        Discord_Support: true,
        Arguments: [["search", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {String} */
            let search = parameters[0] || "";
            let convertedRoles = {};
            for (let i in roles){
                /**
                 * @type {Role}
                 */
                let role = roles[i];
                convertedRoles[role.RankId] = role;
            }
            consoleCommands.forEach(function(va, index){
                if (va.Proxy)
                    return;
                if (search.length != 0 && va.Name.toLowerCase().search(search.toLowerCase()) == -1){
                    return;
                }
                if (va.Role > core.User.JadeProfile.Role.RankId)
                    return;
                let parameters = "";
                va.Arguments.forEach(function(va, index){
                    parameters += va[0] + "[" + va[1] +  "];";
                })
                core.Logger("[" + index + "]" +  va.Name, [0, 255, 255]);
                core.Logger("[" + index + "]        ├Role Minimum Requirement: "+ convertedRoles[va.Role].RoleName, convertedRoles[va.Role].Color);
                core.Logger("[" + index + "]        ├Description: "+ va.Description, [200, 200, 255]);
                core.Logger("[" + index + "]        ├Arguments: {" + parameters + "}", [200, 200, 255]);
                let vari = "Variations: ";
                va.Variations.forEach(function(va, index){
                    vari += va + ", ";
                });
                core.Logger("[" + index + "]        └Variations: " + vari, [200, 200, 255]);//├└
            });
        }
    },
    {
        Name: "Eval Command",
        Variations: ["eval", "runcode"],
        Description: "Evaluate Javascript on this server. Meant for debugging purposes. Please use this sparingly.",
        Role: 255,
        Discord_Support: true,
        Arguments: [["evalCode", "javascript"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let authorized = {
                "144244136":true,
                "66941954":true
            };
            if (authorized[core.User.JadeProfile.RobloxUser.UserId] == null){
                core.Logger("Even though you have \"Permission\". You are certainly not a server administrator.", [255, 0, 0]);
                return;
            }
            let fakeConsole = new Proxy(console, {
                "get": function(target, index){
                    switch (index){
                        case "log":{
                            return function(...strings){
                                strings.forEach(function(va, index){
                                    let str = String(va);
                                    core.Logger(str, [255, 255, 255]);
                                });
                            };
                        }
                        case "warn":{
                            return function(...strings){
                                strings.forEach(function(va, index){
                                    let str = String(va);
                                    core.Logger(str, [255, 150, 0]);
                                });
                            };
                        }
                        case "info":{
                            return function(...strings){
                                strings.forEach(function(va, index){
                                    let str = String(va);
                                    core.Logger(str, [0, 200, 255]);
                                });
                            };
                        }
                        case "log":{
                            return function(...strings){
                                strings.forEach(function(va, index){
                                    let str = String(va);
                                    core.Logger(str, [255, 255, 255]);
                                });
                            };
                        }
                        default:{
                            return target[index];
                        }
                    }
                }
            });{
                let console = fakeConsole;
                fakeConsole = null;
                /**
                 * @type {String}
                 */
                let code = "";
                parameters.forEach(function(va, index){
                    code += va + ";";
                });
                let match = code.match(/```(\w+)\n([\w\s()"'{}.:=\]\[*\-<>+*/@|,\\; ]+)```/);
                core.Logger("Ran  " + code, [255, 255, 255]);
                if (match == null){
                    core.Logger("Returned value: " + eval(code), [255, 255, 255]);
                    return;
                }
                code = match[2];
                if (match[1] == "js" || match[1] == "javascript"){
                    core.Logger("Returned value: " + eval(code), [255, 255, 255]);
                }else
                    core.Logger("Discord Code was sent in invalid programming language. JS required, got " + match[1], [255, 0, 0]);
            }
        }
    },
    {
        Name: "Exec Shell Command",
        Variations: ["exec", "bash"],
        Description: "Evaluate a command on shell. Meant for debugging purposes. Please use this sparingly.",
        Role: 1,
        Discord_Support: true,
        Arguments: [["shellCode", "command"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let authorized = {
                "144244136":true,
                "66941954":true
            };
            if (authorized[core.User.JadeProfile.RobloxUser.UserId] == null){
                core.Logger("Even though you have \"Permission\". You are certainly not a server administrator.", [255, 0, 0]);
                return;
            }
            /**
             * @type {String}
             */
            let code = "";
            parameters.forEach(function(va, index){
                code += va + ";";
            });
            core.Logger("Ran  " + code, [255, 255, 255]);
            exec(code, (error, stdout, stderr) => {
                if (error) {
                    core.Logger(`error: \n${error.message}`, [255, 255, 255]);
                    return;
                }
                if (stderr) {
                    core.Logger(`stderr: \n${stderr}`, [255, 255, 255]);
                    return;
                }
                core.Logger(`stdout: \n${stdout}`, [255, 255, 255]);
            });
        }
    },
    {
        Name: "Sync Trello Database",
        Variations: ["resync", "trellosync"],
        Description: "Sync Trello Database to Jade's Admin System.",
        Role: 255,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let whitelisted = '{"iiJoeCats":true,"GreenBeanGreg":true,"danlovespoop":true,"qeeeqx":true,"SincereProdeadZ":true,"Babynightof":true,"slizerdizer":true,"SakuraSylveonYT":true,"StasIKMEGA":true,"the770zone":true,"aingoamTH":true,"ItsUncleBen":true,"TheUnknownRobloxains":true,"Chirunoo":true,"polikilopl":true,"ZZapGames":true,"yurixc":true,"Roseblood78":true,"ggggjjjjgj":true,"vakerbrony":true,"leanop":true,"NASA963":true,"X4142Y":true,"Jack_Hase":true,"ShadeblastHere":true,"YourCuteNoob":true,"DRCGaming":true,"icollectrobloxstuff":true,"MLGwarfare04":true,"Tennocon":true,"howells":true,"wf2gj2bj3hh_wf2gj":true,"Epickcin":true,"bellaouzo":true,"BlazingDracoz":true,"oldsuperstevengokuV2":true,"Crimson_Knights":true,"LeviathanDailyYT":true,"kirbymaster34":true,"iiForeverrCake":true,"TypicaIMod_ders":true,"mrfunnylaughs4":true,"natives3000":true,"RAISA_AGENT06":true,"Kyutatsuki_SDVX":true,"SuperBlockUAlt":true,"BunnyDreemurrr":true,"SmiteoApple":true,"Player1":true,"zachandmom":true,"SoftlockedUnderZero":true,"NASA960":true,"YoungJades":true,"pmcaom":true,"ChinoBreeze_OWO":true,"leanobeanos":true,"BigSkippermeme":true,"FearlessX96":true,"Nekyuuz":true,"TheJades":true,"zippo6z":true,"r123g9h8r13y_ruAre":true,"naero23":true,"pdnghiaqoi":true,"joshuadragoncity":true,"999buddy998":true,"Kzeec":true,"CJ4":true,"znyna":true,"fhihiyazin":true,"alexandruleonard":true,"Helkern":true,"PhantomGamer0001":true,"leSavanic":true,"HadesXhu":true,"KrYn0MoRe":true,"Player_57":true,"ii_law":true,"7_qz":true,"8pgi":true,"akabob123":true,"imallsomenobs":true,"soins1":true,"testthinglol":true,"jeffreyjr0":true,"Thecoolestmaximus":true,"bath1299":true,"pizzaeater0777":true,"foxynason":true,"AetherXI":true,"SmashGamerss":true}';
            let admins = '{"TheJades":10,"joshuadragon77":111,"YoungJades":10,"CJ4":4,"vakerbrony":5,"TheUnknownRobloxains":5,"MathiaAbyss":4,"NASA963":3,"SmiteoApple":10,"KrYn0MoRe":4,"bellaouzo":5,"zippo6z":6,"pizzaeater0777":5,"joshuadragoncity":8,"leanop":5,"AetherXI":5,"ChinoBreeze_OWO ":5,"NASA960":3,"Crimson_Knights":5}';
            let notes = {"72499716":"used quantom admin","277362912":"Crashing servers using fat cr script 1000x","129833105":"Used rainbow infinite","176432":"Run scripts on other people using UTG. ","1085733":"Using UTG","190255956":" [AUTO DETECTED] They possibly banned the Jade Incorporated Administrator (They were trello banned)leanop","449053148":"uses fat big head annoying script","339258183":"Using the BossHub, used ban word filter and attempted forcechat","521180783":"Exploits Void Teleport protection by teleporting people","910827666":"Using the OWO ban hammer and some form of a kickisher","82884502":"Possibly mass kicked using a kickisher","675742246":"Uses unoptimized edits and browses recently added to steal models","1236542756":"Using the raining toad script","874989182":"Possibly use Mr. Beans admin to mess up texts of the GUIs of everyone","334024392":"Used UTG and possibly shutdown a server","60259589":" [AUTO DETECTED] They possibly kicked the Jade Incoperated \nAdministrator SmiteoApple","1332967184":" [AUTO DETECTED] They possibly kicked the Jade Incoperated Administrator TheJades","1":"fat","930045528":" [AUTO DETECTED] They possibly kicked the Jade \nIncoperated Administrator leanop","1290292894":"Used UTG","1361214378":"Mass Kicked with kickisher","664639":"Runnings scripts on other people","120193671":"fat part spammer","64104382":"Possibly mass kicked using Derpz's script","1050548649":"is exqulillex, the fat skid","750573812":"Ran a bad gui on everybody","668721018":"Possibly ran a van script","66941954":"lazy furry","141866888":"likes to use banisher edits with obnoxious loud music","6664005":"","14508265":"hi","331850050":"Mass kicked","783153502":"Possibly banned thejodes","321493976":"Founder and CEO of Smite's Apples","342087995":"Running some servre destroyer","977703229":"attempted mass kicking","440313958":"Possibly mass kicked using a kickisher","1198897765":"Using UTG","144338110":"Used UTG","636072903":"nasa friend","123249587":"Uses kickisher, uses gui that contains quantom admin. Uses UTG","144244136":"big fat president","955699770":"UTG Man","104946564":"Playing Loud offensive music. \nOne of his audio consists of a loud arabian music","984982690":"Spams Veritas commands","289610650":"Used UTG","875640226":"Using UTG(accessUI)","242701942":"bad cr and bad edits","565236838":"kick banisher man","523847512":"Probably loaded a server destroyer, and a bad map","290307897":"Mass banning with TheBossHub","966980222":"Mass kicking with a foul reason","1213636842":"was banned for the reason being bad skidder","318177704":"Very naughty. Runs all sorts of bad stuff. IY_GUI, UTG. Doesn't care about rules.","1093854308":"fat","1171411065":"Used UTG","1096928268":"Possibly ran scripts on other players","410577221":"Using the Ultimate Trolling Gui. Edit","53815726":"Used UTG","104030830":"","65662912":"Running server destroyer that rain ducks. Also runs a script that notifies you for free Robux that steals your password.","905689197":"Used a Nuke script from pastebin. Possibly shutdown a server.","200029981":"Used UTG once","45204433":"rock","590081252":"fat kickisher mass kicker","390095229":"Used UTG","120076607":"Used UTG. Used kickisher to shutdown a server","310919970":"HOW","1084363702":"Used the Ultimate Troll Gui.","1326236087":"Possibly modified screengui so everyone can only say randoms tuff","946685823":"possibly mass kicked","58416504":"Used UTG. probably used chathax","295942410":"used utg","1145218588":"Using a kickisher to mass kick","1431233411":"Using a badmin to filter everything that contains the word 'ban'","166189871":"Using Rainbow Infinite Kickisher","404668764":" [AUTO DETECTED] They possibly banned the Jade Loader user howells","646215245":"Mass kicking","343541075":"CR Banisher","1149736503":"kick banisher and timestop","329720243":"friendo","259136515":"Used TheBossHub and inserted the anti ban script.","24239820":"guy","186311650":"Used alts to cause seizures in VoidSB","1072756443":"Using UTG","546053953":"Fat server destroyer","1011131703":"Kicked TheJades using dex explorer. abuse him","1100708296":"Possibly mass kicked by unknown means","126863717":" [AUTO DETECTED] They possibly banned the Jade Incoperated Administrator (They were trello banned)SmiteoApple","70676":"chink","461437395":"Running server destroyer scripts","4028":"Using scripts that spam objects","58736733":"nasa friend","1077695778":"Used UTG","1279247195":"acting irrationaly, misconduct","1016138242":" [AUTO DETECTED] They possibly kicked the Jade Incorporated Administrator TheJades","1154752995":"Used UTG","453568232":"Remote user","23329203":"Used RC7 and UTG","523326573":"Probably loaded a server destroyer, and a bad map","709085514":"Possibly shutdown a server using a kickisher","209937642":"Using Infinite Yield and UTG","526451293":"Using UTG","168478075":"Mass kicking attempt","140787345":"very rude","699518567":"Used TheBossHub and UTG, possibly used antiban script","33615323":"Using UTG. Spawns rainbow with NSFW content. Acts innocent.","1098706350":"Possibly mass kicked","195068090":" [AUTO DETECTED] They possibly banned the Jade Incoperated Administrator (They were trello banned)leanop","285726569":"Running scripts on other people","636724463":"Possibly shutdown a server with a kickisher","1263027971":"Possibly crashed servers and injected a a bad script","295727993":"possibly ran a bad gui on everybody","983395240":"Detected \nusing the Ultimate Troll Gui. The gui's name is AccessUI. Attempts to force chat people.","105098310":"Mass kicked because of lag.wowok","87780094":"banisher man","1246117287":"Used Gkv4","464585033":"Loud Music and Laggy Garbage","634787199":"Possibly shutdown a server, used /console in the past to achieve something","700304253":"Using IY_GUI, UTG(acessUI), Quantom Admin. bruh this dude....","1313180565":"Used TheBossHub","527578520":"Spams spammy models, doesn't care about rules","416282967":"Tried kicking TheJades using RoExploit","816734838":"Using laggy banisher"};
            whitelisted = JSON.parse(whitelisted);
            admins = JSON.parse(admins);
            let a = async function(){
                for (let i in whitelisted){
                    try{
                        core.Logger("Ranking " + i + " to Whitelisted", [0, 255, 85]);
                        let rbx = await Roblox.GetUserFromUserName(i);
                        let jade = GetJadeProfile(rbx);
                        jade.onComplete(function(){
                            if (jade.Role.RankId < 200)
                                jade.ApplyRole(roles.Whitelisted);
                        });
                    }
                    catch(er){
                        core.Logger("Failed Ranking " + i + " to Whitelisted", [255, 0, 85]);
                    }
                }
                core.Logger("Finished applying new whitelist data.", [0, 255, 85]);
                for (let i in admins){
                    try{
                        core.Logger("Ranking " + i + " to Administrator", [0, 255, 85]);
                        let rbx = await Roblox.GetUserFromUserName(i);
                        let jade = GetJadeProfile(rbx);
                        jade.onComplete(function(){
                            if (jade.Role.RankId < 252)
                                jade.ApplyRole(roles.Administrator);
                        });
                    }
                    catch(er){
                        core.Logger("Failed Ranking " + i + " to Administrator", [255, 0, 85]);
                    }
                }
                core.Logger("Finished applying new admin data.", [0, 255, 85]);
                for (let i in notes){
                    try{
                        core.Logger("Setting " + i + "'s note to " + notes[i], [0, 255, 85]);
                        let rbx = await Roblox.GetUserFromUserId(i);
                        let jade = GetJadeProfile(rbx);
                        jade.onComplete(function(){
                            jade.ApplyNotes(notes[i])
                        });
                    }  
                    catch(er){
                        core.Logger("Failed etting " + i + "'s note to " + notes[i], [255, 0, 85]);
                    }
                }
                core.Logger("Finished applying new notes data.", [0, 255, 85]);
            }
            a();
        }
    },
    {
        Name: "GBan",
        Variations: ["gban", "jadeBan"],
        Description: "Global bans the targeted Roblox Player(duration-example: 25 hours. or 13 seconds. or 100 year. or perm)",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"], ["reason", "string"], ["duration", "banDuration"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    let reason = parameters[1] || "No reason";
                    /** @type {String} */
                    let rawDuration = parameters[2] || "5 days";
                    let durationType = (rawDuration.match(/[A-z]+/g) || [])[0];
                    let number = Number((rawDuration.match(/[0-9]+/) || [])[0]) || 5;
                    let actDuration = 0;
                    switch(durationType){
                        case "year":
                            actDuration = 3.154e+7*number;
                            break;
                        case "years":
                            actDuration = 3.154e+7*number;
                            break;
                        case "month":
                            actDuration = 2.628e+6*number;
                            break;
                        case "months":
                            actDuration = 2.628e+6*number;
                            break;
                        case "day":
                            actDuration = 86400*number;
                            break;
                        case "days":
                            actDuration = 86400*number;
                            break;
                        case "hour":
                            actDuration = 3600*number;
                            break;
                        case "hours":
                            actDuration = 3600*number;
                            break;
                        case "minute":
                            actDuration = 60*number;
                            break;
                        case "minutes":
                            actDuration = 60*number;
                            break;
                        case "second":
                            actDuration = number;
                            break;
                        case "seconds":
                            actDuration = number;
                            break;
                        case "hour":
                            actDuration = 3600*number;
                            break;
                        case "hours":
                            actDuration = 3600*number;
                            break;
                        case "min":
                            actDuration = 60*number;
                            break;
                        case "mins":
                            actDuration = 60*number;
                            break;
                        case "sec":
                            actDuration = number;
                            break;
                        case "secs":
                            actDuration = number;
                            break;
                        case "perm":
                            actDuration = -1;
                            break;
                    }
                    if (actDuration == 0){
                        core.Logger("[Error]: Couldn't understand what your duration could have been.", [255, 0, 0]);
                    }else{
                        if (core.User.JadeProfile == null){
                            core.Logger("Who are you?", [255, 0, 0]);
                            return;
                        }
                        let ban = new Ban(core.User.JadeProfile, reason, actDuration);
                        jadeProfile.ApplyBan(ban);
                        core.Logger("Added the ban to " + jadeProfile.Nickname + "'s JadeProfile! The BanId is " + ban.BanId, [0, 255,85]);
                        if (actDuration != -1){
                            let banDate = new Date((Date.now()+actDuration*1000));
                            core.Logger("Sucessfully banned the Roblox account " + jadeProfile.RobloxUser.Username + " from Jade's Admin System for \"" + reason + "\". They will be unbanned on " + banDate.toUTCString() + ". That would be about " + nearDateConversion(actDuration) + " from here!", [0, 255,85]);
                        }else{
                            core.Logger("Sucessfully banned the Roblox account " + jadeProfile.RobloxUser.Username + " from Jade's Admin System for \"" + reason + "\". They are forever banned.", [0, 255,85]);
                        }
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Bandata Get",
        Variations: ["isbanned", "getban"],
        Description: "Grabs a Roblox Ban.",
        Role: 1,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    let banData = jadeProfile.BanData;
                    if (banData){
                        let expired = banData.BanDate+banData.Duration*1000-Date.now() < 0;
                        if (expired){
                            core.Logger(va.Username + " is not banned from Jade's Admin System!(expired)", [255, 0,0]);
                            if (banData.Duration == -1){
                                core.Logger(va.Username + " was banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This is a permanent ban. They were banned at " + new Date(banData.BanDate).toUTCString()+ ". The BanId is " + banData.BanId, [0, 255,85]);
                            }else{
                                core.Logger(va.Username + " was banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This ban lasts till " + 
                                    new Date((banData.BanDate+banData.Duration*1000)).toUTCString() + ". That would be about " + nearDateConversion(Math.max(banData.BanDate+banData.Duration*1000-Date.now(), 0)) + " from here. They were banned at " + new Date(banData.BanDate).toUTCString()+ ". The BanId is " + banData.BanId, [0, 255,85]);
                            }
                        }else{
                            core.Logger(va.Username + " is banned from Jade's Admin System!", [0, 255,85]);
                            if (banData.Duration == -1){
                                core.Logger(va.Username + " is banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This is a permanent ban. They were banned at " + new Date(banData.BanDate).toUTCString() + ". The BanId is " + banData.BanId, [0, 255,85]);
                            }else{
                                core.Logger(va.Username + " is banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This ban lasts till " + 
                                    new Date((banData.BanDate+banData.Duration*1000)).toUTCString() + ". That would be about " + nearDateConversion(Math.max(banData.BanDate+banData.Duration*1000-Date.now(), 0)/1000) + " from here. They were banned at " + new Date(banData.BanDate).toUTCString()+ ". The BanId is " + banData.BanId, [0, 255,85]);
                            }
                        }
                    }else{
                        core.Logger(va.Username + "'s JadeProfile doesn't have ban records! This must mean they are a good person??!", [0, 255,85]);
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Archive Proxy",
        Variations: ["archive", "saveproxy"],
        Description: "Archives a proxy for deep storage manually. Useful when restarting a server is required.",
        Role: 250,
        Discord_Support: true,
        Arguments: [["proxyid", "proxyId"]],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let proxy = proxyCache[parameters[0]];
            if (proxy){
                let viewed = null;
                for (let r in consoleCache){
                    /** @type {ConsoleClient} */
                    let console = consoleCache[r];
                    if (console.AttachedProxy == String(proxy.Id)){
                        viewed = true;
                        break;
                    }
                }
                if (viewed == null){
                    if (proxyWriteReadQueue[proxy.Id] == null){
                        proxyWriteReadQueue[proxy.Id] = true;
                        fs.writeFile(storageUri +"proxies/" + proxy.Id + "proxyArchive.txt", JSON.stringify(proxy), function(){
                            delete proxyWriteReadQueue[proxy.Id];
                            core.Logger("Successfully archived the proxy " + parameters[0] + "!", [0, 255,85]);
                        });
                    }else{
                        core.Logger("Successfully archived the proxy " + parameters[0] + "! Except something is already writing to it.", [0, 255,85]);
                    }
                    delete proxyCache[parameters[0]];
                    updateProxyAutoCorrect();
                }else
                    core.Logger("Someone's already viewing this proxy. Perhaps force disconnect them?", [255, 0, 85]);
            }else
                core.Logger("Unable to find the desired proxy. Perhaps it died???", [255, 0, 85]);
        }
    },
    {
        Name: "Make a system Announcement",
        Variations: ["announce"],
        Description: "Make a system announcement",
        Role: 252,
        Discord_Support: true,
        Arguments: [["announcement content", "string"]],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            let text = parameters[0] || "ohok";
            systemCache.announcements  = text;
            core.Logger("You announced! Here's what you said: \"" + text + "\"." , [0, 255, 85]);
        }
    },
    {
        Name: "Get system announcements",
        Variations: ["getannouncements", "readannounce", "gannounce"],
        Description: "Get system announcement",
        Role: 1,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            core.Logger("System Announcements: \"" + systemCache.announcements + "\"." , [0, 255, 85]);
        }
    },
    {
        Name: "Clear System Logs",
        Variations: ["csyslogs", "clearlogs"],
        Description: "Clears System Logs if it takes long to get.",
        Role: 255,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            core.Logger("Cleared " + systemCache.systemLogs.length + " log entries from system logs!", [0, 255, 85]);
            systemCache.systemLogs = [];
        }
    },
    {
        Name: "Whitelist game server",
        Variations: ["wlgame"],
        Description: "Whitelist a place so the server accepts connections from those places.",
        Role: 252,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            if (parameters[0] == null){
                core.Logger("Invalid place id selected", [255, 0, 85]);
                return;
            }
            core.Logger("Added " + parameters[0] + " to the whitelist", [0, 255, 85]);
            systemCache.whitelistedPlaces[parameters[0]] = true;
        }
    },
    {
        Name: "Make a birthday cake!",
        Variations: ["birthday", "bdcake", "bdcard"],
        Description: "Make a birthday cake for someone! :) 🎂 Cake is randomly generated",
        Role: 1,
        Discord_Support: true,
        Arguments: [["person's name", "string"], ["cake-image", "url"], ["message", "string"]],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            let cakeImages = ["https://pngimg.com/uploads/cake/cake_PNG13121.png","https://freesvg.org/img/1531584626.png", "/resources/Birthday.png"];
            let message = parameters[2];
            let person = parameters[0];
            let url = parameters[1];
            let id = Math.floor(Math.random()*10) + "BD" + Math.floor(Math.random()*10)+ Math.floor(Math.random()*10)+ Math.floor(Math.random()*10)+ Math.floor(Math.random()*10);
            if (url == null || url.length < 1){
                url = cakeImages[Math.floor(Math.random()*cakeImages.length)];
            }
            systemCache.birthdayCards[id] = {
                Person: person,
                Sender: core.User.JadeProfile.Nickname,
                Message: message,
                Cake: url,
                Id: id
            };
            if (person == null || person.length == 0){
                person = "Someone";
            }
            core.Logger("Successfully created a birthday cake for " + person + "!", [0, 255, 85]);
            if (core.DiscordChannel){
                core.DiscordChannel.send(addressPointer +"/birthdayCake?imagine=" + id);
            }else{
                core.Logger(addressPointer + "/birthdayCake?imagine=" + id);
            }
        }
    },
    {
        Name: "Unwhitelist game server",
        Variations: ["removewl"],
        Description: "Remove a game from the whitelist",
        Role: 252,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            if (parameters[0] == null){
                core.Logger("Invalid place id selected", [255, 0, 85]);
                return;
            }
            systemCache.whitelistedPlaces[parameters[0]] = undefined;
            core.Logger("Removed " + parameters[0] + " from the whitelist", [0, 255, 85]);
        }
    },
    {
        Name: "Get whitelisted places",
        Variations: ["getwl"],
        Description: "Display all whitelisted places the initializer can run in.",
        Role: 200,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core
         * @param {Array} parameters
         */
        Call: function(core, parameters){
            for (let i in systemCache.whitelistedPlaces){
                core.Logger(i, [255, 255, 255]);
            }
        }
    },
    {
        Name: "Get Notes",
        Variations: ["getnotes"],
        Description: "Grabs a JadeProfile/Roblox User's notes",
        Role: 1,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    let notes = jadeProfile.Notes;
                    if (notes){
                        core.Logger(va.Username + "'s notes: \"" + notes + "\"", [0, 255,85]);
                    }else{
                        core.Logger(va.Username + "'s JadeProfile doesn't have any notes! We don't know them...", [0, 255,85]);
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Set Notes",
        Variations: ["setnotes"],
        Description: "Sets a note for a JadeProfile/Roblox User",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"], ["notes","string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.ApplyNotes(parameters[1] || "ohok")
                core.Logger("Set " + va.Username + "'s notes to \"" + jadeProfile.Notes + "\"", [0, 255,85]);
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Get badmin Records",
        Variations: ["getbadmins", "getuserrecords", "badrecord"],
        Description: "Grabs the JadeProfile's badmin records to see if JASAO recorded them using bad stuff.",
        Role: 1,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.OtherData.BadminRecords){
                        core.Logger("Bad news! The person "+ jadeProfile.Nickname + " does have badmin records according to JASAO... :frown:", [255,0,0]);
                        let records = jadeProfile.OtherData.BadminRecords;
                        for (let i in records){
                            /** @type {Number[]} */
                            let v = records[i];
                            core.Logger(jadeProfile.Nickname + " has been detected using " + i + "!", [255,0,85]);
                            v.forEach(function(proxyId, i){
                                if (i == v.length-1){
                                    core.Logger("└ProxyId: " + proxyId, [255,0,85]);  
                                }else
                                    core.Logger("├ProxyId: " + proxyId, [255,0,85]);  
                            })
                        }
                    }else{
                        core.Logger("Good news! This person doesn't have any badmin records according to JASAO!", [0, 255,85]);
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Clear badmin Records",
        Variations: ["cbadmins", "crecords", "clearrecords"],
        Description: "Clear the JadeProfile's badmin records.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.OtherData.BadminRecords){
                        core.Logger("Sucessfully cleared \"" + jadeProfile.Nickname + "\"'s badmin records!", [0, 255,85]);
                        jadeProfile.OtherData.BadminRecords = undefined;
                        jadeProfile.ManualSave();
                    }else{
                        core.Logger("Good news! There is no need to clear this person's badmin records!", [0, 255,85]);
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Clear Notes",
        Variations: ["clenotes", "clnotes"],
        Description: "Clears the notes of a JadeProfile",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.ClearNotes();
                core.Logger("Cleared " + va.Username + "'s notes!", [0, 255,85]);
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Discord Verify",
        Variations: ["discordverify", "verifybypass"],
        Description: "Verify a JadeProfile with a affiliating Discord account.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"], ["discord account", "DISCORD_PROFILE"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.Role.RankId < core.User.JadeProfile.Role.RankId || accessWhitelist[String(core.User.JadeProfile.RobloxUser.UserId)]){
                        bot.users.fetch(parameters[1], true).then(function(va){
                            try{
                                jadeProfile.AppendDiscord(va);
                                core.Logger("Sucessfully verify bypassed " + jadeProfile.RobloxUser.Username + "'s discord connection! They are " + va.username + "#" + va.discriminator + "!", [0, 255, 85]);
                                autoRankInPrimaryServer(va);
                            }
                            catch(er){
                                core.Logger(er, [255, 0, 0]);
                            }
                        });
                    }else
                        core.Logger("You cannot modify " + jadeProfile.RobloxUser.Username + "'s discord connection!", [255, 0, 0]);
                });
            }).catch(function(er){
                core.Logger(er, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Roblox Discord Wipe",
        Variations: ["rbxwipe"],
        Description: "Wipes the JadeProfile's Discord Data using a Roblox Username.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.Role.RankId < core.User.JadeProfile.Role.RankId || accessWhitelist[String(core.User.JadeProfile.RobloxUser.UserId)]){
                        let discordUser = jadeProfile.DiscordUsers;
                        if (discordUser.length > 0){
                            jadeProfile.ClearDiscordData();
                            core.Logger("Sucessfully unverified " + jadeProfile.RobloxUser.Username + ". They no longer have any Discord Profile associated with them.", [0, 255, 85]);
                        }else
                            core.Logger(jadeProfile.RobloxUser.Username + " doesn't have a Discord Profile associated with them!", [255, 0, 0]);
                    }else
                        core.Logger("You cannot modify " + jadeProfile.RobloxUser.Username + "'s discord connection!", [255, 0, 0]);
                });
            }).catch(function(er){
                core.Logger(er, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Disconnects a Discord Account from a JadeProfile",
        Variations: ["dverify", "disvev", "revev"],
        Description: "Wipes the JadeProfile's Discord Data.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"], ["discord account", "DISCORD_PROFILE"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0]).then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.Role.RankId < core.User.JadeProfile.Role.RankId || accessWhitelist[String(core.User.JadeProfile.RobloxUser.UserId)]){
                        bot.users.fetch(parameters[1], true).then(function(discordUser){
                            jadeProfile.RemoveDiscord(discordUser);
                            core.Logger(`Sucessfully disconnected "${discordUser.username}#${discordUser.discriminator}" from the JadeProfile \"${jadeProfile.Nickname}\".`, [0, 255, 85]);
                        }).catch(function(er){
                            core.Logger(er, [255, 0, 0]);
                        });
                    }else
                        core.Logger("You cannot modify " + jadeProfile.RobloxUser.Username + "'s discord connection!", [255, 0, 0]);
                });
            }).catch(function(er){
                core.Logger(er, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Discord Verify Get",
        Variations: ["vevget"],
        Description: "Gets a Discord account's Roblox account",
        Role: 1,
        Discord_Support: true,
        Arguments: [["discord account", "DISCORD_PROFILE"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            bot.users.fetch(parameters[0], true).then(function(va){
                try{
                    let jadeProfile = GetJadeProfile(va);
                    jadeProfile.onComplete(function(){
                        if (jadeProfile.RobloxUser.UserId < 100){
                            core.Logger("Error: Unable to create Jade Profile from a Discord User. Discord: " + va.username, [255, 0, 0]);
                            return;
                        }
                        core.Logger("They are " + jadeProfile.RobloxUser.Username + ". Their Roblox Profile is https://www.roblox.com/users/" + jadeProfile.RobloxUser.UserId + "/profile", [0, 255, 85]);
                    });
                }
                catch(er){
                    core.Logger(String(er), [255, 0, 0]);
                }
            }).catch(function(er){
                    core.Logger(String(er), [255, 0, 0]);
                });
        }
    },
    {
        Name: "Roblox Verify Get",
        Variations: ["rvevget"],
        Description: "Gets a Roblox account's Discord account",
        Role: 1,
        Discord_Support: true,
        Arguments: [["username", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0]).then(function(rbx){
                let jadeProfile = GetJadeProfile(rbx);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.RobloxUser.UserId < 100){
                        core.Logger(rbx.Username + " doesn't have a Discord Account affiliated with them!", [255, 0, 0]);
                        return;
                    }
                    if (jadeProfile.DiscordUsers.length > 0){
                        core.Logger(rbx.Username + "'s Discords are...", [0, 255, 85]);
                        jadeProfile.DiscordUsers.forEach(function(va, index){
                            if (index == jadeProfile.DiscordUsers.length-1){
                                core.Logger("└"+ va.username + "#" + va.discriminator + " <@" + va.id + ">", [0, 255, 85]);
                            }else{
                                core.Logger("├"+ va.username + "#" + va.discriminator + " <@" + va.id + ">", [0, 255, 85]);
                            }
                        })
                    }else
                        core.Logger(rbx.Username + " doesn't have a Discord Account affiliated with them!", [255, 0, 0]);
                });
            }).catch(function(er){
                core.Logger(er, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Template",
        Variations: ["template"],
        Description: "Template",
        Role: 255,
        Arguments: [["template", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.Logger("Template", [0, 170, 255]);
        }
    },
    {
        Name: "Unban",
        Variations: ["ungban", "gpardon"],
        Description: "Removes a Roblox Player's ban from their profie.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    let banData = jadeProfile.BanData;
                    if (banData){
                        if (banData.Duration == -1){
                            core.Logger(va.Username + " was banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This is a permanent ban. They were banned at " + new Date(banData.BanDate).toUTCString(), [0, 255,85]);
                        }else{
                            core.Logger(va.Username + " was banned by " + banData.Banner.Nickname + " for \"" + banData.BanReason + "\". This ban lasts till " + 
                                new Date(banData.BanDate+banData.Duration*1000).toUTCString() + ". That would be about " + nearDateConversion(Math.max(banData.BanDate+banData.Duration*1000-Date.now(), 0)/1000) + " from here. They were banned at " + new Date(banData.BanDate).toUTCString(), [0, 255,85]);
                        }
                        jadeProfile.ClearBan();
                        core.Logger(va.Username + " is now unbanned from Jade's Admin System!", [0, 255,85]);
                    }else{
                        core.Logger(va.Username + " doesn't have any bans!", [255, 0,0]);
                    }
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Ranks",
        Variations: ["rank"],
        Description: "Ranks a Roblox Player by changing the role of their JadeProfile",
        Role: 251,
        Discord_Support: true,
        Arguments: [["player", "RBXPlayer_NOPROXY"], ["rank", "rank"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    /** @type {Role} */
                    let role = roles[parameters[1]];
                    if (role){
                        if (jadeProfile.Role.RankId < core.User.JadeProfile.Role.RankId || accessWhitelist[String(core.User.JadeProfile.RobloxUser.UserId)]){
                            if (role.RankId < core.User.JadeProfile.Role.RankId || accessWhitelist[String(core.User.JadeProfile.RobloxUser.UserId)]){
                                jadeProfile.ApplyRole(role);
                                core.Logger(jadeProfile.RobloxUser.Username + " has been ranked to " + role.RoleName, [0, 255,85]);
                                jadeProfile.DiscordUsers.forEach(function(user){
                                    autoRankInPrimaryServer(user);
                                })
                            }else
                                core.Logger("Hey! You can't change their rank to a rank higher than or equal to your rank!", [255, 0,0]);
                        }else
                            core.Logger("Hey! You can't change their rank of your level or higher than your level!", [255, 0,0]);
                    }else
                        core.Logger("Phony rank you chose..", [255, 0,0]);
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Rankget",
        Variations: ["getrank"],
        Description: "Get someone's rank",
        Discord_Support: true,
        Role: 1,
        Arguments: [["player", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0] || "").then(function(va){
                let jadeProfile = GetJadeProfile(va);
                jadeProfile.onComplete(function(){
                    core.Logger(jadeProfile.RobloxUser.Username + "'s rank is " + jadeProfile.Role.RoleName, jadeProfile.Role.Color);
                });
            }).catch(function(reason){
                core.Logger("[Error]: " + reason, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Template",
        Variations: ["template"],
        Description: "Template",
        Role: 255,
        Arguments: [["template", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            core.Logger("Template", [0, 170, 255]);
        }
    },
    {
        Name: "DevDebug JadeProfile Loaded",
        Variations: ["getjadepro", "mempro"],
        Description: "Gets all known cached JadeProfiles in memory includng the amount they are referenced.",
        Role: 1,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            for (let i in jadeProfileCache){
                if (i.length < 12){
                    /** @type {JadeProfile} */
                    let profile = jadeProfileCache[i];
                    let references = [];
                    if (profile == null)
                        continue;
                    for (let i in profile.References){
                        references.push(i);
                    }
                    if (references.length <= 1){
                        core.Logger(`${profile.Nickname}(${profile.RobloxUser.UserId}): ${references.length} references. Memory Usage: ${nearByteConversion(size_of(profile))}. Weak reference (Garbage Collect Soon)`, [255, 0, 0]);
                    }else
                        core.Logger(`${profile.Nickname}(${profile.RobloxUser.UserId}): ${references.length} references. Memory Usage: ${nearByteConversion(size_of(profile))}`, [0, 255, 0]);//├└
                    references.forEach(function(va, index){
                        if (index+1==references.length){
                            core.Logger("└" + va, [255, 255, 255]);
                        }else
                            core.Logger("├" + va, [255, 255, 255]);
                    });
                }
            }
        }
    },
    {
        Name: "Proxy Commands",
        Variations: ["pcmd", "proxycmd"],
        Description: "List all proxy commands",
        Discord_Support: true,
        Role: 250,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            consoleCommands.forEach(function(va, index){
                if (va.Proxy == null)
                    return;
                let parameters = "";
                va.Arguments.forEach(function(va, index){
                    parameters += va[0] + "[" + va[1] +  "];";
                })
                core.Logger("[" + index + "]" +  va.Name, [255, 255, 255]);
                core.Logger("[" + index + "]        ├Description: " + va.Description, [255, 255, 255]);
                core.Logger("[" + index + "]        ├Arguments: {" + parameters + "}", [255, 255, 255]);
                let vari = "Variations: ";
                va.Variations.forEach(function(va, index){
                    vari += va + ", ";
                });
                core.Logger("[" + index + "]        └Variations: " + vari, [255, 255, 255]);
                core.Logger("---------------------------------", [0, 170, 255]);
            });
        }
    },
    {
        Name: "Banlist",
        Variations: ["banlist"],
        Description: "Lists all banned players. Allows you to search for a specific one from a banid!",
        Role: 250,
        Discord_Support: true,
        Arguments: [["banIdSearch", "number"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let banidSearch = parameters[0] || "";
            let map = JSON.parse(fs.readFileSync(storageUri +"userdatamap.json"));
            for (let i in map.BanList){
                Roblox.GetUserFromUserId(Number(i)).then(function(va){
                    let jadeProfile = GetJadeProfile(va);
                    jadeProfile.onComplete(function(){
                        let banData = jadeProfile.BanData;
                        if (banData == null)
                            return;
                        if (banData.BanId && banData.BanId.substring(0, banidSearch.length) != banidSearch)
                            return;
                        let expired = banData.BanDate+banData.Duration*1000-Date.now() < 0;
                        if (expired){
                            core.Logger("[" + i + "]" +  jadeProfile.RobloxUser.Username + "(Expired)", [255, 0, 0]);
                        }else
                            core.Logger("[" + i + "]" +  jadeProfile.RobloxUser.Username, [0, 255, 85]);
                        core.Logger("[" + i + "]        ├Ban Id: " + banData.BanId, [255, 255, 255]);
                        core.Logger("[" + i + "]        ├Ban Reason: " + banData.BanReason, [255, 255, 255]);
                        core.Logger("[" + i + "]        ├Ban Date: " + new Date(banData.BanDate).toUTCString(), [255, 255, 255]);
                        core.Logger("[" + i + "]        ├Expirey: " +  new Date(banData.BanDate+banData.Duration*1000).toUTCString() + ". Expires in about " + nearDateConversion(Math.max(banData.BanDate+banData.Duration*1000-Date.now(), 0)/1000), [255, 255, 255]);
                        core.Logger("[" + i + "]        └Banner: " + banData.Banner.Nickname, [255, 255, 255]);
                    });
                });
            }
        }
    },
    {
        Name: "Proxy Attach",
        Variations: ["pa", "pattach", "proxyattach"],
        Description: "Attaches the console to a proxy",
        Role: 250,
        Arguments: [["proxyId", "proxyId"], ["initialReadHead", "number"], ["filter (seperate ,)", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let loader = proxyCache[parameters[0]];
            if (loader){
                if (core.User.ProxyStream){
                    clearInterval(core.User.ProxyStream)
                }
                core.User.AttachedProxy = parameters[0];
                let filter = new RegExp((parameters[2] || "").replace(/,/g, "|"), "i");
                let matchAll = false;
                (parameters[2] || "").split(",").forEach(function(va){
                    if (va == ""){
                        matchAll = true;
                    }
                });
                if (matchAll == false){
                    core.Logger("Attached to the proxy " + parameters[0] + "! With a filter: " + parameters[2] + ". Streaming logs...", [0, 255, 85]);
                }else{
                    core.Logger("Attached to the proxy " + parameters[0] + "! Streaming logs...", [0, 255, 85]);
                }
                let readHead = Math.max(loader.Logs.length - (parameters[1] | 20), 0);
                let lastPing = 0;
                let dictionaryPlayer = {};
                let playerArray = ["All"];
                core.User.ProxyStream = setInterval(() => {
                    for (let i = Math.max(readHead-1, 0);i<loader.Logs.length;i++){
                        let log = loader.Logs[i];
                        if (matchAll == false && log.System.match(filter) == null && log.Message.match(filter) == null)
                            continue;
                        core.Logger("[Proxy" + loader.Id + "][" + log.System + "]: " + log.Message, log.Color, Date.now()-loader.LastPing + log.UTCLogged*1000);
                    }
                    loader.Players.forEach(function(v){
                        if (dictionaryPlayer[v[0]] == null){
                            dictionaryPlayer[v[0]] = true;
                            Roblox.GetUserFromUserId(v[0]).then(function(user){
                                playerArray.push(user.Username);
                                core.User.AutoCorrectChanges.RBXPlayer = playerArray;
                            })
                        }
                    })
                    readHead = loader.Logs.length+1;
                    if (Date.now()/1000-loader.LastPing/1000 > 10 && (Date.now()-lastPing)/1000 > 10){
                        lastPing = Date.now();
                        core.Logger("[Proxy" + loader.Id + "][Network]: The proxy isn't responding! Perhaps disconnected? Last ping: " + Math.floor(Date.now()/1000-loader.LastPing/1000) + " seconds ago!", [255, 0, 85]);
                    }
                }, 50);
                core.Logger("By the way! The time in the logs shown are now reflective of when they were recorded when the proxy was online.", [0, 255, 85]);
            }else
                core.Logger("Unknown proxy selected! Check your numerals!", [255, 0, 85]);
        }
    },
    {
        Name: "Toggle Global Ban",
        Variations: ["tgban", "gbantoggle"],
        Description: "Toggles whether the admin system should ban players in game.",
        Role: 251,
        Discord_Support: true,
        Arguments: [["toggle", "boolean"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (parameters[0] == "true"){
                systemCache.disableBans = false;
                core.Logger("Enabled Punishments when global banning!", [0, 255, 85]);
                return;
            }
            core.Logger("Disabled Punishments when global banning!", [0, 255, 85]);
            systemCache.disableBans = true;
        }
    },
    {
        Name: "Proxy Deattach",
        Variations: ["pdeattach", "pdatch", "pdat"],
        Description: "Deattaches from the connected proxy",
        Role: 250,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let loader = proxyCache[core.User.AttachedProxy];
            if (loader){
                clearInterval(core.User.ProxyStream);
                core.Logger("Disattached from proxy " + core.User.AttachedProxy + "!", [0, 255, 85]);
                core.User.AttachedProxy = "-1";
                core.User.ProxyStream = null;
            }else
                core.Logger("You are already disconnected!", [255, 0, 85]);
        }
    },
    {
        Name: "Proxy Archive Retrieve",
        Variations: ["retrieve", "pret"],
        Description: "Retrives a proxy id from the archive into memory.",
        Role: 250,
        Discord_Support: true,
        Arguments: [["proxyid", "proxyId"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let loader = proxyCache[parameters[0]];
            if (loader == null){
                let file = fs.existsSync(storageUri +"proxies/" + parameters[0] + "proxyArchive.txt");
                if (file){
                    proxyCache[parameters[0]] = JSON.parse(fs.readFileSync(storageUri +"proxies/" + parameters[0] + "proxyArchive.txt", {encoding: "utf-8"}));
                    updateProxyAutoCorrect();
                    for (let r in consoleCache){
                        /** @type {ConsoleClient} */
                        let console = consoleCache[r];
                        if (console.JadeProfile && console.JadeProfile.Role.RankId >= 251)
                            console.NewLogs.push({System: "ProxyArchiver", Message: "Retrieved Proxy" + parameters[0] + " for use. The call was brought on by an Jade Inc Administrator!", Color: [0, 170, 255], Now: Date.now()});
                    }
                }else
                    core.Logger("Proxy" + parameters[0] + " doesn't exist in the archive!", [255, 0, 85]);
            }else
                core.Logger("Proxy" + parameters[0] + " already exists!", [255, 0, 85]);
        }
    },
    {
        Name: "Global Proxy Deattach",
        Variations: ["gpdat", "frel"],
        Description: "Deattaches the proxy from every console",
        Role: 251,
        Discord_Support: true,
        Arguments: [["proxyid", "proxyId"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let loader = proxyCache[parameters[0]];
            if (loader){
                let consoles = 0;
                for (let i in consoleCache){
                    /** @type {ConsoleClient} */
                    let console = consoleCache[i];
                    if (console.AttachedProxy == parameters[0]){
                        consoles ++;
                        console.AttachedProxy = -1;
                        if (console.ProxyStream)
                            clearInterval(console.ProxyStream);
                        console.ProxyStream = null;
                        if (console.JadeProfile && console.JadeProfile.Role.RankId >= 251)
                            console.NewLogs.push({System: "Global Proxy Deattach", Message: "Your connection to this proxy halted!", Color: [255, 0, 85], Now: Date.now()})
                    }
                }
                core.Logger("Successfully forced " + consoles + " console clients to deattach from Proxy" + loader.Id + "!", [0, 255, 85]);
            }else
                core.Logger("Unknown proxy selected! Check your numerals!", [255, 0, 85]);
        }
    },
    {
        Name: "Proxy Info",
        Variations: ["pinfo", "proxyinfo"],
        Description: "Displays the properties of a proxy",
        Role: 250,
        Discord_Support: true,
        Arguments: [["proxyid", "proxyId"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            /** @type {ProxyClient} */
            let loader = proxyCache[parameters[0]];
            if (loader){
                let i = parameters[0];
                core.Logger("[" + i + "]" + loader.Name + " / " + loader.PlaceId + " / " + loader.JobId, [255, 255, 255]);
                core.Logger("[" + i + "]        ├Proxy Id: " + loader.Id, [255, 255, 255]);
                if (Date.now()-loader.LastPing < 400){
                    core.Logger("[" + i + "]        ├Ping: " + Math.floor((Date.now()-loader.LastPing)/1000) + "s, " + (Date.now()-loader.LastPing) + "ms", [0, 255, 85]);
                }else if (Date.now()-loader.LastPing < 800){
                    core.Logger("[" + i + "]        ├Ping: " + Math.floor((Date.now()-loader.LastPing)/1000) + "s, " + (Date.now()-loader.LastPing) + "ms", [85, 255, 0]);
                }else if (Date.now()-loader.LastPing < 2000){
                    core.Logger("[" + i + "]        ├Ping: " + Math.floor((Date.now()-loader.LastPing)/1000) + "s, " + (Date.now()-loader.LastPing) + "ms", [255, 255, 0]);
                }else
                    core.Logger("[" + i + "]        ├Ping: " + Math.floor((Date.now()-loader.LastPing)/1000) + "s, " + (Date.now()-loader.LastPing) + "ms, Last pinged about " + nearDateConversion(Math.floor((Date.now()-loader.LastPing)/1000))  + " ago", [255, 0, 0]);
                let performance = Math.floor(Math.max(5-loader.PeakPerformance, 0)/5*100);
                if (performance > 90){
                    core.Logger("[" + i + "]        ├Peak Performance: " + performance + "%", [0, 255, 85]);
                }else if (performance > 75){
                    core.Logger("[" + i + "]        ├Peak Performance: " + performance + "%", [85, 255, 0]);
                }else if (performance > 50){
                    core.Logger("[" + i + "]        ├Peak Performance: " + performance + "%", [255, 255, 0]);
                }else
                    core.Logger("[" + i + "]        ├Peak Performance: " + performance + "%", [255, 0, 0]);
                let queue = loader.Players.length;
                let str = "";
                let strF = "";
                let online = 0;
                loader.Players.forEach(function(va){
                    Roblox.GetUserFromUserId(va[0]).then(function(player){
                        queue --;
                        if (loader.LastPing-va[1] < 5000){
                            str += player.Username + ", ";
                            online ++;
                        }else
                            strF += player.Username + ", ";
                        if (queue == 0){
                            core.Logger("[" + i + "]        ├Online Players(" + online +"/" + loader.Players.length + "): " + str, [0, 255, 85]);
                            core.Logger("[" + i + "]        └Offline Players(" + loader.Players.length + "): " + strF, [255, 85, 0]);
                        }
                    });
                });
                if (loader.Players.length == 0){
                    core.Logger("[" + i + "]        └An unexpected error occured when finding players. No one exists!", [255, 85, 0]);
                }
            }else
                core.Logger("Unknown proxy selected! Check your numerals!", [255, 0, 85]);
        }
    },
    {
        Name: "Deactivate Asset Lockdown",
        Variations: ["removelockdown", "unlockasset"],
        Description: "Unlocks the server from an asset lockdown",
        Role: 252,
        Discord_Support: true,
        Arguments: [["confirm", "boolean"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (parameters[0] == "yes"){
                systemLog("AssetLockdown",core.User.JadeProfile.RobloxUser.UserId + "/" + core.User.JadeProfile.Nickname + " turned off lockdown for assets!", "WARNING");
                core.Logger("Deactivated Asset Lockdown. Jade's Initializer should work!", [0, 255, 85]);
                systemCache.unauthorizedSeizure = false;
            }else{
                core.Logger("Please confirm by typing \"removelockdown;yes\". Unlocking asset lockdown will lock your activity in system logs!", [0, 255, 85]);
            }
        }
    },
    {
        Name: "System Logs",
        Variations: ["syslogs"],
        Description: "Displays the server's and system's logs",
        Role: 252,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (core.DiscordChannel && core.DiscordChannel.guild){
                core.Logger("Please run syslogs in the bot's DM, we wouldn't want to risk leak now do we?", [255, 0, 0])
            }else{
                systemCache.systemLogs.forEach(function(va, ind){
                    /** @type {SystemLog} */
                    let log = va;
                    log.Message = censorIp(log.Message);
                    switch(log.MessageType){
                        case "ERROR":{
                            core.Logger(`[ERROR][${log.System}]: ${log.Message}`, [255, 0, 0], log.UTCLogged);
                            break;
                        }
                        case "WARNING":{
                            core.Logger(`[WARN][${log.System}]: ${log.Message}`, [255, 100, 0], log.UTCLogged);
                            break;
                        }
                        case "INFO":{
                            core.Logger(`[INFO][${log.System}]: ${log.Message}`, [0, 170, 255], log.UTCLogged);
                            break;
                        }
                        default:{
                            core.Logger(`[MESSAGE][${log.System || "Unknown System"}]: ${log.Message}`, [255, 255, 255], log.UTCLogged);
                        }
                    }
                })
            }
        }
    },
    {
        Name: "JadeProfile Command Logs",
        Variations: ["clogs"],
        Description: "Displays a JadeProfile's system execution log/audits",
        Role: 252,
        Discord_Support: true,
        Arguments: [["Roblox Username", "RBXPlayer_NOPROXY"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            Roblox.GetUserFromUserName(parameters[0]).then(function(rbx){
                let jadeProfile = GetJadeProfile(rbx);
                jadeProfile.onComplete(function(){
                    if (jadeProfile.RobloxUser.UserId < 100){
                        core.Logger("interesting...", [255, 0, 0]);
                        return;
                    }
                    jadeProfile.AuditLogs.forEach(function(va, ind){
                        core.Logger(va.Message, [255, 255, 255], va.Time)
                    })
                });
            }).catch(function(er){
                core.Logger(er, [255, 0, 0]);
            });
        }
    },
    {
        Name: "Audit Logs",
        Variations: ["alogs", "audlogs"],
        Description: "Collects every JadeProfile's clogs and consolidate it into one.",
        Role: 252,
        Discord_Support: true,
        Arguments: [],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let list = [];
            core.Logger("Collecting clogs...", [0, 170, 255]);
            let queue = 1;
            let colorCodes = [
                [255, 0, 85],
                [255, 255, 0],
                [85, 255, 0],
                [0, 170, 255],
                [255, 0, 255],
                [255, 255, 255],
            ];
            let colorPointer = {};
            let complete = function(){
                queue --;
                if (queue == 0){
                    list.sort(function(va,va2){
                        return va.Time == va2.Time ? 0 : va.Time < va2.Time ? -1 : 1;
                    });
                    list.forEach(function(va){
                        core.Logger(`[${va.User.Nickname}]${va.Message}`, colorPointer[va.User.RobloxUser.UserId].Color, va.Time);
                    });
                    for (let i in colorPointer){
                        let data = colorPointer[i];
                        core.Logger(`${data.Profile.Nickname}'s colorcode is ${data.Color[0]}, ${data.Color[1]}, ${data.Color[2]}`, data.Color);
                    }
                }
            }
            for (let i in jadeProfileCache){
                if (i.length > 13 || jadeProfileCache[i] == null){
                    continue;
                }
                queue ++;
                /**
                 * @type {JadeProfile}
                 */
                let jadeProfile = jadeProfileCache[i];
                let color = colorCodes.length != 0 ? colorCodes.shift() : [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
                jadeProfile.onComplete(function(){
                    colorPointer[jadeProfile.RobloxUser.UserId] = {Color: color, Profile: jadeProfile};
                    let clogs = jadeProfile.AuditLogs;
                    clogs.forEach(function(va){
                        list.push({
                            User: jadeProfile,
                            Message: va.Message,
                            Time: va.Time
                        });
                    });
                    complete();
                });
            }
            complete();
        }
    },
    {
        Name: "ProxyExecute",
        Variations: ["p", "proxyrun", "prun", "pexe"],
        Description: "Runs a proxy command on a proxyServer without attaching to it. Useful for Discord crap",
        Role: 250,
        Discord_Support: true,
        Arguments: [["proxyId", "proxyId"], ["command", "Commands"], ["argument", "string"], ["argument", "string"], ["argument", "string"], ["argument", "string"],["bro_are_you_ok?", "string"], ["how many arguments do you need?????", "string"], ["stop, that's enough!", "string"], ["I SAID SSTOP!@", "string"], ["...", "string"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            if (proxyCache[parameters[0]]){
                let cmd = proxycommandsc.find(function(va){
                    for (let i = 0;i<va.CMDVariation.length;i++){
                        if (va.CMDVariation[i] == parameters[1]){
                            return true;
                        }
                    }
                });
                if (cmd){
                    func = cmd.Function;
                    let formattedCommand = func(parameters);
                    let parameterFormatted = formattedCommand.Info;
                    if (typeof(parameterFormatted) != "string"){
                        let str = "";
                        parameterFormatted.forEach(function(va){
                            str += va + ";"
                        });
                        parameterFormatted = str;
                    }else
                        parameterFormatted += ";";
                    core.Logger("Executed: " + formattedCommand.Name + ";" + parameterFormatted, [0, 255, 85]);
                    /** @type {ProxyClient} */
                    let actloader = proxyCache[parameters[0]];
                    actloader.Logs.push(new ProxyLog("ProxyExecute", core.User.JadeProfile.Nickname + " ran the proxy command " + cmd.Name, [255, 255, 0], Date.now()));
                    actloader.Request.push(new ProxyRequest(formattedCommand.Name, formattedCommand.Info));
                }else
                    core.Logger(parameters[1] + " isn't a valid proxy commmand!", [255, 0, 85]);
            }else
                core.Logger("Oops! No proxies listened to your request! Your proxy doesn't exist.", [255, 0, 85]);
        }
    },
    {
        Name: "Proxy Archives",
        Variations: ["proxyalist", "aloaders", "archives"],
        Description: "List all Jade Loader Proxies archived for deep storage",
        Role: 250,
        Discord_Yield: true,
        Discord_Support: true,
        Arguments: [["pageType", "pageType"], ["page", "number"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let orderedLogs = [];
            let queueA = 1;
            let finishedRequest = function(removeQueue){
                if (removeQueue == null)
                    queueA --;
                if (queueA == 0){
                    orderedLogs.forEach(function(va){
                        va.forEach(function(logs){
                            core.Logger(logs[0], logs[1]);
                        });
                    })
                    switch(parameters[0]){
                        case "pages":
                            core.Logger("Viewing Proxy List at Page " +  parameters[1] + ". Also viewing unarchived proxies");
                            break;
                        case "entries":
                            core.Logger("Viewing " + Number(parameters[1])*10 + " proxies on this page. Also viewing unarchived proxies");
                            break;
                    }
                    core.FinishYield();
                }
            };
            
            let maxLength = systemCache.proxyIdRead;
            for (let i in proxyCache){
                maxLength = Math.max(Number(i), maxLength);
            };
            if (parameters[0] == "pages")
                parameters[1] = parameters[1] || Math.max(Math.floor(maxLength/10), 0);
            parameters[1] = parameters[1] || 5;
            parameters[0] = parameters[0] || "entries";
            if (parameters[0] != "pages" && parameters[0] != "entries"){
                core.Logger("You must select a pageType, otherwise without a pageType, the server would crash! 😳", [255, 0, 0]);
                return;
            }
            (async ()=>{
                for (let i = 1;i<=systemCache.proxyIdRead;i++){
                    if ((parameters[0] == "pages" && (i >= parameters[1]*10 && i < parameters[1]*10+10) != true) || 
                        (parameters[0] == "entries" && (systemCache.proxyIdRead-i < parameters[1]*10) != true)){
                        continue;
                    }
                    if (proxyCache[String(i)] == null){
                        let file = await new Promise((accept)=>fs.access(storageUri +"proxies/" + String(i) + "proxyArchive.txt", fs.constants.R_OK,(err)=>accept(!err)));
                        if (file){
                            let proxy = JSON.parse(
                                await new Promise((accept, reject)=>fs.readFile(storageUri +"proxies/" + String(i) + "proxyArchive.txt", {encoding: "utf-8"}, (err, data)=>{
                                if (err) 
                                    reject(err); 
                                accept(data)
                            })));
                            let logs = [];
                            orderedLogs.push(logs);
                            logs.push(["[" + i + "]" + proxy.Name + " / " + proxy.PlaceId + " / " + proxy.JobId + "(Archived)", [255, 255, 0]]);
                            logs.push(["[" + i + "]        ├Proxy Id: " + proxy.Id, [255, 255, 255]]);
                            if (Date.now()-proxy.LastPing < 400){
                                logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms", [0, 255, 85]]);
                            }else if (Date.now()-proxy.LastPing < 800){
                                logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms", [85, 255, 0]]);
                            }else if (Date.now()-proxy.LastPing < 2000){
                                logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms", [255, 255, 0]]);
                            }else
                                logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms, Last pinged about " + nearDateConversion(Math.floor((Date.now()-proxy.LastPing)/1000))  + " ago", [255, 0, 0]]);
                            let performance = Math.floor(Math.max(5-proxy.PeakPerformance, 0)/5*100);
                            if (performance > 90){
                                logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [0, 255, 85]]);
                            }else if (performance > 75){
                                logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [85, 255, 0]]);
                            }else if (performance > 50){
                                logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [255, 255, 0]]);
                            }else
                                logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [255, 0, 0]]);
                            let queue = proxy.Players.length;
                            let str = "";
                            let strF = "";
                            let online = 0;
                            proxy.Players.forEach(function(va){
                                queueA ++;
                                Roblox.GetUserFromUserId(va[0]).then(function(player){
                                    queue --;
                                    if (proxy.LastPing-va[1] < 5000){
                                        str += player.Username + ", ";
                                        online ++;
                                    }else
                                        strF += player.Username + ", ";
                                    if (queue == 0){
                                        logs.push(["[" + i + "]        ├Online Players(" + online +"/" + proxy.Players.length + "): " + str, [0, 255, 85]]);
                                        logs.push(["[" + i + "]        └Offline Players(" + proxy.Players.length + "): " + strF, [255, 85, 0]]);
                                    }
                                    finishedRequest();
                                }).catch(function(er){
                                    logs.push(["[" + i + "] Error getting Roblox: " + va[0] + ". " + er, [255, 0, 0]]);
                                    finishedRequest();
                                });
                            });
                            if (proxy.Players.length == 0){
                                finishedRequest(true);
                                logs.push(["[" + i + "]        └An unexpected error occured when finding players. No one exists!", [255, 85, 0]]);
                            }
                        }
                    }
                }
                finishedRequest();
            })().catch(function(er){
                logs.push(["Ooopsies! " + er, [255, 0, 0]]);
            });
        }
    },
    {
        Name: "Proxy",
        Variations: ["proxylist", "loaders"],
        Description: "List all Jade Loader Proxies",
        Role: 250,
        Discord_Support: true,
        Arguments: [["pageType", "pageType"], ["page", "number"]],
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let orderedLogs = [];
            let queueA = 1;
            let finishedRequest = function(removeQueue){
                if (removeQueue == null)
                    queueA --;
                if (queueA == 0){
                    orderedLogs.forEach(function(va){
                        va.forEach(function(logs){
                            core.Logger(logs[0], logs[1]);
                        });
                    })
                    switch(parameters[0]){
                        case "pages":
                            core.Logger("Viewing Proxy List at Page " +  parameters[1] + ". Also viewing unarchived proxies");
                            break;
                        case "entries":
                            core.Logger("Viewing " + Number(parameters[1])*10 + " proxies on this page. Also viewing unarchived proxies");
                            break;
                    }
                }
            };
            
            let maxLength = systemCache.proxyIdRead;
            for (let i in proxyCache){
                maxLength = Math.max(Number(i), maxLength);
            };
            if (parameters[0] == "pages")
                parameters[1] = parameters[1] || Math.max(Math.floor(maxLength/10), 0);
            parameters[1] = parameters[1] || 5;
            parameters[0] = parameters[0] || "entries";
            if (parameters[0] != "pages" && parameters[0] != "entries"){
                core.Logger("You must select a pageType, otherwise without a pageType, the server would crash! 😳", [255, 0, 0]);
                return;
            }
            for (let i in proxyCache){
                /** @type {ProxyClient} */
                /*if ((Number(i) > parameters[0]*10-10 && Number(i) <= parameters[0]*10+10) != true){
                    continue;
                }*/
                let logs = [];
                let proxy = proxyCache[i];
                orderedLogs.push(logs);
                logs.push(["[" + i + "]" + proxy.Name + " / " + proxy.PlaceId + " / " + proxy.JobId, [255, 255, 255]]);
                logs.push(["[" + i + "]        ├Proxy Id: " + proxy.Id, [255, 255, 255]]);
                if (Date.now()-proxy.LastPing < 400){
                    logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, ", [0, 255, 85]]);
                }else if (Date.now()-proxy.LastPing < 800){
                    logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms", [85, 255, 0]]);
                }else if (Date.now()-proxy.LastPing < 2000){
                    logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms", [255, 255, 0]]);
                }else
                    logs.push(["[" + i + "]        ├Ping: " + Math.floor((Date.now()-proxy.LastPing)/1000) + "s, " + (Date.now()-proxy.LastPing) + "ms, Last pinged about " + nearDateConversion(Math.floor((Date.now()-proxy.LastPing)/1000))  + " ago", [255, 0, 0]]);
                let performance = Math.floor(Math.max(5-proxy.PeakPerformance, 0)/5*100);
                if (performance > 90){
                    logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [0, 255, 85]]);
                }else if (performance > 75){
                    logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [85, 255, 0]]);
                }else if (performance > 50){
                    logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [255, 255, 0]]);
                }else
                    logs.push(["[" + i + "]        ├Peak Performance: " + performance + "%", [255, 0, 0]]);
                let queue = proxy.Players.length;
                let str = "";
                let strF = "";
                let online = 0;
                proxy.Players.forEach(function(va){
                    queueA ++;
                    Roblox.GetUserFromUserId(va[0]).then(function(player){
                        queue --;
                        if (proxy.LastPing-va[1] < 5000){
                            str += player.Username + ", ";
                            online ++;
                        }else
                            strF += player.Username + ", ";
                        if (queue == 0){
                            logs.push(["[" + i + "]        ├Online Players(" + online +"/" + proxy.Players.length + "): " + str, [0, 255, 85]]);
                            logs.push(["[" + i + "]        └Offline Players(" + proxy.Players.length + "): " + strF, [255, 85, 0]]);
                        }
                        finishedRequest();
                    }).catch(function(){
                        finishedRequest(true);
                    });
                });
                if (proxy.Players.length == 0){
                    finishedRequest(true);
                    logs.push(["[" + i + "]        └An unexpected error occured when finding players. No one exists!", [255, 85, 0]]);
                }
            }
            finishedRequest();
        }
    },
];
proxycommandsc.forEach(function(command){
    let func = command.Function;
    let fixedFormat = [];
    command.Format.forEach(function(va){
        fixedFormat.push([va, matchedTypes[va] || "string"])
    });
    consoleCommands.push({
        Name: "[P]" + command.Name,
        Description: "[Proxy Command]" + command.Description,
        Variations: command.CMDVariation,
        Role: 250,
        Proxy: true,
        Arguments: fixedFormat,
        /**
         * @param {IncomingRecieptRequest} core 
         * @param {Array} parameters 
         */
        Call: function(core, parameters){
            let loader = core.User.AttachedProxy;
            if (proxyCache[loader]){
                let modifiedParameter = ["", ""];
                parameters.forEach(function(value){
                    modifiedParameter.push(value);
                });
                let formattedCommand = func(modifiedParameter);
                /** @type {ProxyClient} */
                let actloader = proxyCache[loader];
                actloader.Logs.push(new ProxyLog("ProxyExecute", core.User.JadeProfile.Nickname + " ran the proxy command " + this.Name, [255, 255, 0], Date.now()));
                actloader.Request.push(new ProxyRequest(formattedCommand.Name, formattedCommand.Info));
            }else
                core.Logger("Oops! No proxies listened to your request! Attached to one", [255, 0, 85]);
        }
    })
});
consoleCommands.sort(function(va1, va2){
    if (va1.Name == va2.Name){
        return 0;
    }
    for (let i = 0;i<Math.max(va1.Name.length, va2.Name.length);i++){
        if (va1.Name.charCodeAt(i) < va2.Name.charCodeAt(i)){
            return -1;
        }else if (va1.Name.charCodeAt(i) > va2.Name.charCodeAt(i)){
            return 1;
        }
    }
});
/**
 * 
 * @param {String} sessionKey
 * @param {String} remoteAddress
 * @return {Promise<Number>} --RankId
 */
const checkIfAuth = function(sessionKey, remoteAddress){
    return new Promise(function(resolve, reject){
        getJadeProfile(sessionKey, remoteAddress).then(function(va){
            resolve(va.Role.RankId);
        }).catch(function(er){
            resolve(0);
            systemLog("JadeProfileAuth", "Cannot find JadeProfile from " + sessionKey + ". Returned 0", "ERROR");
            systemLog("JadeProfileAuth", "Cannot find JadeProfile because " + er, "ERROR");
        });
    });
}
/**
 * 
 * @param {String} sessionKey
 * @param {String} remoteAddress
 * @returns {Promise<discord.User>}
 */
const getDiscordProfile = function(sessionKey, remoteAddress){
    return new Promise(function(resolve, reject){
        for (let i in authenticationTable){
            let v = authenticationTable[i];
            if ((v.Session == sessionKey || (v.Session[sessionKey] && Date.now()-v.Session[sessionKey] < 1000*1.2096e+06)) && v.Ip == remoteAddress){
                if (v.DiscordSession && v.DiscordSession[sessionKey]){
                    resolve(bot.users.resolve(v.DiscordSession[sessionKey]));
                    break;
                }
            }
        }
        reject("No JadeProfiles found on this key");
    });
}
/**
 * 
 * @param {String} sessionKey
 * @param {String} remoteAddress
 * @returns {Promise<JadeProfile>}
 */
const getJadeProfile = function(sessionKey, remoteAddress){
    return new Promise(function(resolve, reject){
        let finished = 0;
        for (let i in authenticationTable){
            let v = authenticationTable[i];
            if ((v.Session == sessionKey || (v.Session[sessionKey] && Date.now()-v.Session[sessionKey] < 1000*1.2096e+06)) && v.Ip == remoteAddress){
                let discord = v.DiscordSession ? v.DiscordSession[sessionKey] ? bot.users.resolve(v.DiscordSession[sessionKey]) : null : null;
                if (discord){
                    let account = GetJadeProfile(discord);
                    if (account){
                        finished  ++;
                        account.onComplete(function(){
                            finished --;
                            resolve(account);
                        });
                    }else
                        if (finished == 0)
                            reject("No JadeProfiles found on this key");
                }
                /*    Roblox.GetUserFromUserId(i).then(function(va){
                        finished --;
                        let account = GetJadeProfile(va);
                        if (account){
                            account.onComplete(function(){
                                resolve(account);
                            });
                        }else
                            if (finished == 0)
                                reject("No JadeProfiles found on this key");
                    });
                */
                break;
            }
        }
        if (finished == 0)
            reject("No JadeProfiles found on this key");
    });
}
const serverProvider = (function(){
    if (secure == false)
        return;
    if (fs.existsSync("/etc/letsencrypt/live/jadeadminsystem.com/")){
        return https.createServer({
            cert: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/cert.pem"),
            ca: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/fullchain.pem"),
            key: fs.readFileSync("/etc/letsencrypt/live/jadeadminsystem.com/privkey.pem")
        }, responder);
    }else
        return https.createServer({
            cert: fs.readFileSync("encryption/certificate.crt"),
            ca: fs.readFileSync("encryption/ca_bundle.crt"),
            key: fs.readFileSync("encryption/private.key")
        }, responder);
})() || http.createServer()
const remoteConsoleServer = new websockets.Server({server: serverProvider});
remoteConsoleServer.on("connection", function(socket, req){
    /** @param {JadeProfile} jadeProfile */
    /** @param {discord.User} discordProfile */
    let execute = function(jadeProfile, discordProfile){
        let parsedUrl = urlParser.parse(req.url);
        let parsedQuery = queryParse(parsedUrl.query);
        let sendDataInterval;
        let requested = false;
        let sendData = function(){
            requested = true;
            if (sendDataInterval == null){
                sendDataInterval = setInterval(() => {
                    if (requested == false || user.ConnectedSocket == null){
                        clearInterval(sendDataInterval);
                        sendDataInterval = null;
                        return;
                    }
                    requested = false;
                    let newAutoCorrectChanges = {};
                    for (let i in user.AutoCorrectChanges){
                        newAutoCorrectChanges[i] = user.AutoCorrectChanges[i];
                        user.AutoCorrects[i] = user.AutoCorrectChanges[i];
                        delete user.AutoCorrectChanges[i];
                    }
                    user.ConnectedSocket.send(JSON.stringify({
                        Id: "Updates",
                        Data:{
                            NewLogs: user.NewLogs2,
                            Status: user.Status,
                            AutoCorrectChanges: newAutoCorrectChanges
                        }
                    }));
                    user.NewLogs2 = [];
                }, 50);
            }
        }
        let proxyAutoCorrect = {
            "set": function(target, property, value){
                Reflect.set(...arguments);
                sendData();
                return true;
            }
        }
        let consoleClientProxy = {
            "set": function(target, property, value){
                Reflect.set(...arguments);
                if (property == "ConnectedSocket"){
                    sendData();
                }
                return true;
            }
        }
        if (consoleCache[parsedQuery.login] == null){
            /**
             * @type {JadeProfile}
             */
            let client = new Proxy(new ConsoleClient(), consoleClientProxy);
            consoleCache[parsedQuery.login] = client;
            let proxy = new Proxy(client.AutoCorrectChanges, proxyAutoCorrect);
            client.AutoCorrectChanges = proxy;
            client.JadeProfile = jadeProfile;
            jadeProfile.References["RemoteConsoleSocket"] = true;
            jadeProfile.ConnetedWithConsole = true;
            client.NewLogs2 = [];
            client.NewLogs = {
                push: function(logEntry){
                    client.NewLogs2.push(logEntry);
                    sendData();
                }
            }
            client.NewLogs.push({System: "System", Message: "Hello, " + jadeProfile.Nickname + "! You are rank " + jadeProfile.Role.RoleName, Color: [0, 170, 255], Now: Date.now()})
            sendData();
            client.AutoCorrects = {};
        }
        /** @type {ConsoleClient} */
        let user = consoleCache[parsedQuery.login];
        systemCurrentInfo.SocketsUsed ++;
        user.ConnectedSocket = socket;
        let pingInt;
        socket.on("close", function(){
            clearInterval(pingInt);
            systemCurrentInfo.SocketsUsed --;
            let loader = proxyCache[user.AttachedProxy];
            if (loader){
                clearInterval(user.ProxyStream);
                user.NewLogs.push({System: "System", Message: "Disattached from proxy " + user.AttachedProxy + " for socket connection lost!", Color: [0, 255, 85], Now: Date.now()});
                user.AttachedProxy = "-1";
                user.ProxyStream = null;
            }
        });
        let lastPing = Date.now();
        socket.on("message", function(message){
            let data = JSON.parse(message);
            let id = data.Id;
            switch(id){
                case "Execute":{
                    try{
                        let foundProfile = GetJadeProfile(discordProfile);
                        if (foundProfile != user.JadeProfile){
                            delete user.JadeProfile.References["RemoteConsoleSocket"];
                            foundProfile.References["RemoteConsoleSocket"] = true;
                            user.JadeProfile = foundProfile;
                        }
                    }
                    catch(er){
                        socket.close(4015, "JadeProfile refreshed attempt. JadeProfile isn't linked to logged in Discord Profile.");
                    }
                    let body = data.Arguments;
                    let commandName = body[0];
                    let parameters = body;
                    parameters.splice(0, 1);
                    let command = consoleCommands.find(function(value){
                        for (let i = 0;i<value.Variations.length;i++){
                            if (value.Variations[i] == commandName){
                                return true;
                            }
                        }
                        return false;
                    })
                    if (command){
                        if (command.Role <= jadeProfile.Role.RankId || accessWhitelist[String(jadeProfile.RobloxUser.UserId)]){
                            jadeProfile.References["Audit Logs Store"] = true;
                            jadeProfile.AuditLogs.push({Message: "[Remote]: Ran " + command.Name + " with the parameters [" + String(parameters) + "]", Time: Date.now()});
                            try{
                                let queue = 1;
                                let reciept = new IncomingRecieptRequest();
                                let complete = function(){
                                    queue --;
                                    if (queue == 0)
                                        command.Call(reciept,parameters);
                                };
                                let argumentsRequirements = command.Arguments;
                                parameters.forEach(function(va, index){
                                    if (argumentsRequirements[index] == null)
                                        return;
                                    let argumentType = argumentsRequirements[index][1];
                                    if (argumentType == "DISCORD_PROFILE"){
                                        queue ++;
                                        Discord.GetUserFromDiscordFormatted(va).then(function(user){
                                            parameters[index] = user.id;
                                            complete();
                                        }).catch(function(){
                                            user.NewLogs.push({System: "Command", Message: `Argument ${index+1} requires a valid DiscordSimplified format. Continuing without valid format. Might break...`, Color: [255, 85, 0], Now: Date.now()})
                                            complete();
                                        });
                                    }
                                });
                                user.NewLogs.push({System: "Command", Message: command.Name + " execution.", Color: [0, 255, 0], Now: Date.now()})
                                reciept.Logger = function(message, color, overrideTime){
                                    user.NewLogs.push({System: command.Name, Message: message, Color: color, Now: overrideTime || Date.now()})
                                };
                                reciept.Request = req;
                                reciept.User = user;
                                complete();
                            }
                            catch(exception){
                                user.NewLogs.push({System: "Command", Message: command.Name + " failed execution. " + String(exception), Color: [255, 0, 0], Now: Date.now()})
                                systemLog("Command", command.Name + " failed execution. " + String(exception), "ERROR");
                            }
                        }else{
                            user.NewLogs.push({System: "Command", Message: "Insufficient permissions to run " + command.Name, Color: [255, 0, 0], Now: Date.now()})
                        }
                    }else{
                        user.NewLogs.push({System: "Command", Message: commandName + " is not a command! Please use ;cmds for a list commands avaliable", Color: [255, 0, 0], Now: Date.now()})
                    }
                    break;
                }
                case "Ping":{
                    lastPing = Date.now();
                    socket.send(JSON.stringify({
                        Id: "Pong"
                    }));
                }
            }
        })
        pingInt = setInterval(()=>{
            if (Date.now()-lastPing > 600000){
                socket.close(4014, "Ping timeout. Client didn't respond within a minute.");
            }
        }, 10000);
        for (let i in user.AutoCorrects){
            if (user.AutoCorrectChanges[i] == null)
                user.AutoCorrectChanges[i] = user.AutoCorrects[i];
        }
    };
    let cookies = cookieParse(req.headers.cookie);
    getJadeProfile(cookies.loginSession, req.connection.remoteAddress).then(function(va){
        /** @type {JadeProfile} */
        let jadeProfile = va;
        /**if (jadeProfile.Role.RankId < 252){
            res.status(401);
            res.send("(401) Error. The server doesn't know who you are.");
            return;
        }**/
        getDiscordProfile(cookies.loginSession, req.connection.remoteAddress).then(function(va){
            execute(jadeProfile, va);
        }).catch(function(){
            socket.close(4016, "Discord profile isn't found! Relog in.");
        });
    }).catch(function(){
        socket.close(4017, "JadeProfile isn't found! Relog in.");
    })
});
serverProvider.listen(38500);
responder.get("/getConsoleData", function(req, res){
    /** @param {JadeProfile} jadeProfile */
    let execute = function(jadeProfile){
        if (consoleCache[req.query.login] == null){
            let client = new ConsoleClient();
            consoleCache[req.query.login] = client;
            client.JadeProfile = jadeProfile;
            jadeProfile.References["LegacyRemoteConsole"] = true;
            client.NewLogs.push({System: "System", Message: "Hello, " + jadeProfile.Nickname + "! You are rank " + jadeProfile.Role.RoleName, Color: [0, 170, 255], Now: Date.now()})
            client.AutoCorrects = {};
        }
        let user = consoleCache[req.query.login];
        if (req.query.new == "true")
            for (let i in user.AutoCorrects){
                if (user.AutoCorrectChanges[i] == null)
                    user.AutoCorrectChanges[i] = user.AutoCorrects[i];
            }
        res.send(JSON.stringify({
                NewLogs: user.NewLogs,
                Status: user.Status,
                AutoCorrectChanges: user.AutoCorrectChanges
        }));
        for (let i in user.AutoCorrectChanges){
            user.AutoCorrects[i] = user.AutoCorrectChanges[i];
        }
        user.AutoCorrectChanges = {};
        user.NewLogs = [];
    };
    getJadeProfile(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        /** @type {JadeProfile} */
        let jadeProfile = va;
        /**if (jadeProfile.Role.RankId < 252){
            res.status(401);
            res.send("(401) Error. The server doesn't know who you are.");
            return;
        }**/
        execute(jadeProfile);
    })
});
if (systemCache.unauthorizedSeizure == null){
    systemCache.unauthorizedSeizure = false; 
}
if (systemCache.versionRelease != coordinatedVersion.Version){
    systemCache.versionRelease = coordinatedVersion.Version;
    processBotReady(function(){
        bot.channels.fetch(coordinatedVersion.Channel).then(
            /** @param {discord.TextChannel} channel */
            function(channel){
                let content = "";
                coordinatedVersion.ChangeLogs.forEach(function(va){
                    content += "  -"+ va  + "\n";
                });
                channel.send("New Update for Jade's Admin System:\n  Released by \"" + coordinatedVersion.Releaser + "\"\n" + content);
        });
    });
}
if (systemCache.backdoorTracks == null){
    systemCache.backdoorTracks = {}; 
}
if (systemCache.disableBans == null){
    systemCache.disableBans = false; 
}
if (systemCache.birthdayCards == null){
    systemCache.birthdayCards = {}; 
}
if (systemCache.announcements == null){
    systemCache.announcements = "imagine jade's announcements 😳"; 
}
if (systemCache.whitelistedPlaces == null){
    systemCache.whitelistedPlaces = {843495510:true, 3510258906:true};
}
const hashedPlayerName = {};
const recievedIp = {};
responder.get("/jaderadioCode", function(req, res){
    res.send(encodeCode(fs.readFileSync("radio.lua", "utf-8")));
});
responder.get("/getCommands", function(req, res){
    let execute = function(){
        if (checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress) == 0){
            res.status(403);
            res.send("(403) Error. The server doesn't know who you are.");
            return;
        }
        let compiledCommands = [];
        consoleCommands.forEach(function(va){
            compiledCommands.push({
                Name: va.Name,
                Variations: va.Variations,
                Arguments: va.Arguments
            });
        })
        res.send(compiledCommands);
    };
    checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va == 0){
            res.status(403);
            res.send("(403) Error. The server doesn't know who you are.");
            return;
        }
        execute();
    })
})
responder.post("/verifyUser", function(req, res){
    try{
        let data = "";
        req.on("data", function(buffer){
            data += buffer;
        });
        req.on("end", function(){
            data = JSON.parse(data);
            let id = data.Id;
            let userId = data.UserId;
            let verifyData = verificationDatabase[id];
            if (verifyData){
                Roblox.GetUserFromUserId(userId).then(function(va){
                    let jadeProfile = GetJadeProfile(va);
                    jadeProfile.onComplete(function(){
                        bot.users.fetch(verifyData.Id, true).then(function(va){
                            jadeProfile.AppendDiscord(va);
                            res.send("true");
                            verificationDatabase[id] = null;
                            va.createDM().then(function(va){
                                va.send(`<@${va.id}> You have been verified as ${jadeProfile.RobloxUser.Username}! Welcome to Jade Incorporated!`);
                            });
                            autoRankInPrimaryServer(va);
                        }).catch(function(){
                            res.send("false");
                        });
                    });
                }).catch(function(){
                    res.send("false");
                });
            }else
                res.send("false");
        })
    }
    catch(er){
        res.status(400);
        res.send("Unable to verify with invalid body");
    }
});
responder.get("/getVerificationsJade", function(req, res){
   res.send(JSON.stringify(verificationDatabase));
});
responder.post("/consoleApply", function(req, res){
    /** @param {JadeProfile} e */
    let execute = function(e){
        if (req.query.login == null){
            res.send({Message: "Authentication resulting in null!", Color: [255, 0, 0]});
        }
        try{
            let data = "";
            req.on("data", function(buffer){
                data += buffer;
            })
            req.on("end", function(){
                let body = JSON.parse(data);
                let commandName = body[0];
                let parameters = body;
                parameters.splice(0, 1);
                let command = consoleCommands.find(function(value){
                    for (let i = 0;i<value.Variations.length;i++){
                        if (value.Variations[i] == commandName){
                            return true;
                        }
                    }
                    return false;
                })
                if (command){
                    if (command.Role <= e.Role.RankId || accessWhitelist[String(e.RobloxUser.UserId)]){
                        e.References["Audit Logs Store"] = true;
                        e.AuditLogs.push({Message: "[Remote]: Ran " + command.Name + " with the parameters [" + String(parameters) + "]", Time: Date.now()});
                        try{
                            let reciept = new IncomingRecieptRequest();
                            reciept.Logger = function(message, color, overrideTime){
                                consoleCache[req.query.login].NewLogs.push({System: command.Name, Message: message, Color: color, Now: overrideTime || Date.now()})
                            };
                            reciept.Response = res;
                            reciept.Request = req;
                            reciept.User = consoleCache[req.query.login];
                            command.Call(reciept,parameters);
                            res.send({Message: command.Name + " execution.", Color: [0, 255, 0]});
                        }
                        catch(exception){
                            res.send({Message: command.Name + " failed execution. " + String(exception), Color: [255, 0, 0]});
                        }
                    }else{
                        res.send({Message: "Insufficient permissions to run " + command.Name, Color: [255, 0, 0]});
                    }
                }else{
                    res.send({Message: commandName + " is not a command! Please use ;cmds for a list commands avaliable", Color: [255, 0, 0]});
                }
            })
        }
        catch(e){
            res.status(400);
            res.send("(400) Error. Invalid Body, therefore request wasn't understandable.");
            return;
        }
    }
    getJadeProfile(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va.Role.RankId == 0){
            res.status(403);
            res.send("(403) Error. The server doesn't know who you are.");
            return;
        }
        execute(va);
    })
})
responder.get("/console", function(req, res){
    checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va == 0){
            res.send('<script>window.location.assign("/authentication/")</script>');
            return;
        }
        res.send(fs.readFileSync("interface/index.html", "utf-8"));
    })
});
responder.get("/profilePage", function(req, res){
    checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va == 0){
            res.send('<script>window.location.assign("/authentication/")</script>');
            return;
        }
        res.send(fs.readFileSync("profilePage/index.html", "utf-8"));
    })
});
responder.post("/interactProfile", function(req, res){
    getJadeProfile(req.cookies.loginSession, req.connection.remoteAddress).then(function(admin){
        let data = "";
        req.on("data", function(buffer){
            data += buffer;
        });
        req.on("end", function(){
            try{
                data = JSON.parse(data);
                /** @type {String} */
                let username = data.Username;
                /** @type {Array} */
                let changes = data.Changes;
                let processRobloxUser = function(va){
                    let jadeProfile = GetJadeProfile(va);
                    jadeProfile.onComplete(function(){
                        let tasks = changes.length+1;
                        let completeTask = function(){
                            tasks --;
                            if (tasks == 0){
                                Roblox.GetHeadshotFromUserId(jadeProfile.RobloxUser.UserId).then(function(url){
                                    profileData = {
                                        Nickname: jadeProfile.Nickname,
                                        Notes: jadeProfile.Notes,
                                        Rank: jadeProfile.Role.RankId,
                                        Discords: (()=>{
                                            let ids = [];
                                            jadeProfile.DiscordUsers.forEach(function(disc){
                                                ids.push([disc.username + "#" + disc.discriminator, disc.id]);
                                            }); 
                                            return ids;
                                        })(),
                                        DiscordIcon: jadeProfile.DiscordUsers.length != 0 ? jadeProfile.DiscordUsers[0].avatarURL({dynamic:true}) : null,
                                        RobloxId: jadeProfile.RobloxUser.UserId,
                                        RobloxUserName: jadeProfile.RobloxUser.Username,
                                        AvatarUrl: url,
                                        JASAORecords: jadeProfile.OtherData.BadminRecords || []
                                    };
                                    if (jadeProfile.BanData)
                                        profileData.BanData = {Banner: jadeProfile.BanData.Banner.Nickname, BanId: jadeProfile.BanData.BanId, BanReason: jadeProfile.BanData.BanReason, BanDate: jadeProfile.BanData.BanDate, Duration: jadeProfile.BanData.Duration};
                                    res.send(JSON.stringify({
                                        ProfileData: profileData,
                                        Changes: changes
                                    }));
                                }).catch(function(err){
                                    res.status(500);
                                    res.send("Thumbnail request failed oops!");
                                });
                            }
                        }
                        try{
                            changes.forEach(function(change){
                                if (admin.Role.RankId < 251){
                                    change.Success = "Not Jade's Admin Staff Members";
                                    completeTask();
                                    return;
                                }
                                let action = change.Action;
                                let arguments = change.Arguments;
                                switch(action){
                                    case "Unban":{
                                        jadeProfile.ClearBan();
                                        admin.References["Audit Logs Store"] = true;
                                        admin.AuditLogs.push({Message: "[ProfileManager]: Unbanned " + jadeProfile.Nickname, Time: Date.now()});
                                        change.Success = true;
                                        completeTask();
                                        break;
                                    }
                                    case "Ban":{
                                        admin.References["Audit Logs Store"] = true;
                                        jadeProfile.ApplyBan(new Ban(admin, arguments.Reason, arguments.Duration));
                                        if (arguments.Duration == -1){
                                            admin.AuditLogs.push({Message: "[ProfileManager]: Banned " + jadeProfile.Nickname + " for the reason \"" + arguments.Reason + "\". Permanently", Time: Date.now()});
                                        }else
                                            admin.AuditLogs.push({Message: "[ProfileManager]: Banned " + jadeProfile.Nickname + " for the reason \"" + arguments.Reason + "\". For " + nearDateConversion(arguments.Duration), Time: Date.now()});
                                        change.Success = true;
                                        completeTask();
                                        break;
                                    }
                                    case "Notes":{
                                        jadeProfile.ApplyNotes(arguments);
                                        admin.References["Audit Logs Store"] = true;
                                        admin.AuditLogs.push({Message: "[ProfileManager]: Noted " + jadeProfile.Nickname + " with the text \"" + arguments + "\"", Time: Date.now()});
                                        change.Success = true;
                                        completeTask();
                                        break;
                                    }       
                                    case "ClearNotes":{
                                        admin.References["Audit Logs Store"] = true;
                                        admin.AuditLogs.push({Message: "[ProfileManager]: Cleared " + jadeProfile.Nickname + "'s notes. Their notes was \"" + jadeProfile.Notes + "\"", Time: Date.now()});
                                        jadeProfile.ClearNotes();
                                        change.Success = true;
                                        completeTask();
                                        break;
                                    }       
                                    case "DiscordRemove":{
                                        if (admin.Role.RankId > jadeProfile.Role.RankId || accessWhitelist[String(admin.RobloxUser.UserId)]){
                                            bot.users.fetch(arguments, true).then(function(user){
                                                jadeProfile.RemoveDiscord(user);
                                                admin.References["Audit Logs Store"] = true;
                                                admin.AuditLogs.push({Message: "[ProfileManager]: Removed " + jadeProfile.Nickname + "'s discord connection with \"" + arguments + "\"", Time: Date.now()});
                                                change.Success = true;
                                                completeTask();
                                            }).catch(function(er){
                                                change.Success = er.message;
                                                completeTask();
                                            });
                                        }else{
                                            change.Success = "Invalid Permission";
                                            completeTask();
                                        }
                                        break;
                                    } 
                                    case "DiscordAdd":{
                                        if (admin.Role.RankId > jadeProfile.Role.RankId || accessWhitelist[String(admin.RobloxUser.UserId)]){
                                            bot.users.fetch(arguments, true).then(function(user){
                                                jadeProfile.AppendDiscord(user);
                                                admin.References["Audit Logs Store"] = true;
                                                admin.AuditLogs.push({Message: "[ProfileManager]: Added " + jadeProfile.Nickname + "'s discord connection with \"" + arguments + "\"", Time: Date.now()});
                                                change.Success = true
                                                completeTask();
                                            }).catch(function(er){
                                                change.Success = er.message;
                                                completeTask();
                                            });
                                        }else{
                                            change.Success = "Invalid Permission";
                                            completeTask();
                                        }
                                        break;
                                    } 
                                    case "ClearJASAORecords":{
                                        admin.References["Audit Logs Store"] = true;
                                        admin.AuditLogs.push({Message: "[ProfileManager]: Cleared " + jadeProfile.Nickname + "'s JASAO Records", Time: Date.now()});
                                        completeTask();
                                        jadeProfile.OtherData.BadminRecords = null;
                                        jadeProfile.ManualSave();
                                        change.Success = true;
                                        break;
                                    } 
                                    case "Rank":{
                                        /** @type {Role} */
                                        let role = roles[arguments];
                                        if (role && ((admin.Role.RankId > jadeProfile.Role.RankId && role.RankId < admin.Role.RankId)||accessWhitelist[String(admin.RobloxUser.UserId)])){
                                            admin.References["Audit Logs Store"] = true;
                                            admin.AuditLogs.push({Message: "[ProfileManager]: Ranked " + jadeProfile.Nickname + " as \"" + role.RoleName + "\"", Time: Date.now()});
                                            jadeProfile.ApplyRole(role);
                                            jadeProfile.DiscordUsers.forEach(function(va){
                                                autoRankInPrimaryServer(va);
                                            })
                                            change.Success = true;
                                        }
                                        if (admin.Role.RankId <= jadeProfile.Role.RankId){
                                            change.Success = "Cannot change this person's rank.";
                                        }
                                        if (role.RankId >= admin.Role.RankId){
                                            change.Success = "Cannot apply a rank that is higher or at your level.";
                                        }
                                        completeTask();
                                        break;
                                    }                 
                                }
                            }); 
                            completeTask();
                        }
                        catch(er){
                            res.status(500);
                            res.send();
                        }
                        
                    });
                };
                let userIdSearch = username.match(/USERID:(\d+)/);
                if (userIdSearch){
                    Roblox.GetUserFromUserId(userIdSearch[1]).then(processRobloxUser).catch(function(){
                        res.status(400);
                        res.send("Invalid UserId");
                    })
                }else{
                    Roblox.GetUserFromUserName(username).then(processRobloxUser).catch(function(){
                        res.status(400);
                        res.send("Invalid Username");
                    })
                }
            }
            catch(er){
                res.sendStatus(400);
            }
        });
    }).catch(function(){
        res.status(403).send("Insufficient JadeProfile Authentication Data. Relog in.");
    });
});
responder.get("/home", function(req, res){
    checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va == 0){
            res.send('<script>window.location.assign("/authentication/")</script>');
            return;
        }
        res.send(fs.readFileSync("home/index.html", "utf-8"));
    })
});

responder.get("/authenticate", function(req, res){
    let success = false;
    if (req.query.code){
        let body = {
            "client_id": "722076274918586300",
            "client_secret":"kIUJIemJNnX2aek2iJkMhu2nU81mMh21",
            "grant_type":"authorization_code",
            "code": req.query.code,
            "redirect_uri": addressPointer + "/authenticate/",
            "scope": "identify"
        };
        let encode = "";
        for (let i in body){
            let v = body[i];
            encode += encodeURIComponent(i) + "=" + encodeURIComponent(v) + "&"
        }
        encode = encode.substring(0, encode.length-1);
        request("https://discord.com/api/oauth2/token", {method: "POST", headers: {
            "Content-Type":"application/x-www-form-urlencoded",
        }, body:encode},
        function(err, resa){
            if (err == null){
                let data = JSON.parse(resa.body);
                let token = data["access_token"];
                setTimeout(() => {
                    request("https://discord.com/api/users/@me", {
                        headers: {"Authorization": "Bearer " + token},
                    }, function(err, resa){
                        let user = JSON.parse(resa.body);
                        let userId = user.id;
                        let username = resa.username;
                        bot.users.fetch(userId, true).then(function(va){
                            try{
                                let jadeUser = GetJadeProfile(va);
                                jadeUser.onComplete(function(){
                                    if (jadeUser){
                                        let session = "";
                                        for (let i = 0;i<10;i++){
                                            session += Math.floor(Math.random()*10)
                                        }
                                        let auth = authenticationTable[jadeUser.RobloxUser.UserId] || {Session: {}, AccessCode: req.query.code};
                                        if (typeof(auth.Session) != "object"){
                                            auth = {Session: {[auth.Session]: Date.now()}, AccessCode: req.query.code};
                                        }
                                        auth.Ip = req.connection.remoteAddress;
                                        auth.Session[session] = Date.now();
                                        auth.DiscordSession = auth.DiscordSession || {};
                                        auth.DiscordSession[session] = va.id;
                                        authenticationTable[jadeUser.RobloxUser.UserId] = auth;
                                        success = true;
                                        systemLog("AuthenticationService", jadeUser.Nickname + " logged onto the admin system via Discord Oauth.", "INFO");
                                        res.send('<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script><script>setTimeout(()=>{Cookies.set("loginSession", ' + session + ', {"expires": 5});window.location.assign("/home/")}, 500)</script>');
                                        return;
                                    }
                                });
                            }
                            catch(er){
                                if (String(er).match("Error: Unable to create Jade Profile from a Discord User.")){
                                    let code = "";
                                    for (let i = 0;i<10;i++){
                                        code += Math.floor(Math.random()*10);
                                    }
                                    let discordUser = va;
                                    for (let i in verificationDatabase){
                                        let v = verificationDatabase[i];
                                        if (v && v.Id == discordUser.id){
                                            code = i;
                                        }
                                    }
                                    /** @type {discord.User} */
                                    verificationDatabase[code] = {Name: discordUser.username + "#" + discordUser.discriminator, Id: discordUser.id};
                                    success = true;
                                    res.send(fs.readFileSync("authenticationPage/verify.html", "utf-8").replace("##########", code));
                                }
                            }
                        });
                    });
                }, 100);
            }
        })
    }
    setTimeout(() => {
        if (success)
            return;
        res.send('<script>window.location.assign("/authentication/")</script>');
    }, 5000);
})
responder.get("/authentication", function(req, res){
    checkIfAuth(req.cookies.loginSession, req.connection.remoteAddress).then(function(va){
        if (va == 0){
            res.send(fs.readFileSync("authenticationPage/index.html", "utf-8").replace("JADE_REDIREC_URL", "https://discord.com/api/oauth2/authorize?client_id=722207625336586300&redirect_uri=" + encodeURIComponent(addressPointer + "/authenticate/") + "&response_type=code&scope=identify"));
            return;
        }else
            res.send('<script>window.location.assign("/home/")</script>');
    })
});
responder.get("/verify", function(req, res){
    res.send(fs.readFileSync("authenticationPage/verify.html", "utf-8"));
});
responder.get("/resources/*", function(req, res){
    let resources = req.url.substr(11, 100).replace(/[/]/g,"");
    res.send(fs.readFileSync("resources/" + resources));
});
responder.post("/initial", function(req, res){
    /*if (checkAuth(req.query.authCode) == false){
        res.status(403);
        res.send("(403) Unauthorized. Please do not use this service without permission.");
        return;
    }*/
    try{
        systemLog("ProxyService", "A new proxy has been connected from the IP: " +req.connection.remoteAddress, "INFO");
        let data = "";
        req.on("data", function(buffer){
            data += buffer;
        })
        req.on("end", function(){
            let body = JSON.parse(data);
            let form = intialProxy(body.Name, body.PlaceId, body.JobId);
            res.send(
                JSON.stringify(
                    {Key:form.Key,
                    Id:form.Proxy.Id}
                )
            );
            /*form.Proxy.Request.push(
                new ProxyRequest("RunLua", ["", fs.readFileSync("antinative.lua", "utf-8")])
            );*/
        })
    }
    catch(e){
        res.status(400);
        res.send("(400) Error. Invalid Body, therefore request wasn't understandable.");
        return;
    }
})
let dataRequests = {
    GetBadmins: function(){
        return new Promise(function(res, rej){
            res(blacklistedScripts);
        })
    },
    GetAnnouncements: function(){
        return new Promise(function(res, rej){
            res(systemCache.announcements);
        })
    },
    GetJadeProfile: function(pram){
        return new Promise(function(res, rej){
            let userId = pram[0];
            Roblox.GetUserFromUserId(userId).then(function(user){
                try{
                    let jadeProfile = GetJadeProfile(user);
                    jadeProfile.onComplete(function(){
                        let robloxPointedJadeProfile = {
                            RobloxId: jadeProfile.RobloxUser.UserId,
                            Notes: jadeProfile.Notes,
                            Role: jadeProfile.Role.RankId, 
                            Settings: jadeProfile.OtherData.ScriptSettings || {},
                            JASAORecords: jadeProfile.OtherData.BadminRecords
                        }
                        if (jadeProfile.DiscordUser){
                            jadeProfile.DiscordId = jadeProfile.DiscordUser.id
                        }
                        if (jadeProfile.BanData && systemCache.disableBans == false){
                            robloxPointedJadeProfile.BanData = {
                                BanId: jadeProfile.BanData.BanId,
                                Banner: jadeProfile.BanData.Banner.RobloxUser.UserId,
                                BanReason: jadeProfile.BanData.BanReason,
                                BanDuration: jadeProfile.BanData.Duration,
                                BanDate: jadeProfile.BanData.BanDate
                            }
                        }
                        res(robloxPointedJadeProfile);
                    });
                }
                catch(er){
                    rej(er);
                }
            }).catch(function(er){
                rej(er);
            });
        });
    }
};
responder.get("/apiv1/*", function(req, res){
    let apiResource = req.path.match(/(?:\/apiv1\/)(\w+)/)[1];
    let query = req.url.match(/[\?&]\w+=[\w\d\s]+/g);
    let params = [];
    if (query)
        query.forEach(function(va, i){
            params.push(va.match(/=([\w\d\s]+)/)[1]);
        });
    let returnData = {
        Success: false,
        StatusMessage: "NULL",
        Results: "",
        API: apiResource,
    }
    let api = dataRequests[apiResource];
    if (api){
        api(params).then(function(content){
            returnData.Results = content;
            returnData.Success = true;
            res.status(200);
            returnData.StatusMessage = "API requested successfully processed your request.";
            res.send(JSON.stringify(returnData));
        }).catch(function(er){
            res.status(400);
            returnData.StatusMessage = er;
            res.send(JSON.stringify(returnData));
        });
    }else{
        res.status(404);
        returnData.StatusMessage = `API requested is invalid/not found. Cannot find "${apiResource}"`;
        res.send(JSON.stringify(returnData));
    }
});
responder.get("/getJadeProfile", function(req, res){
    let userId = req.query.userId;
    dataRequests.GetJadeProfile([Number(userId)]).then(function(va){
        res.send(JSON.stringify(va));
    }).catch(function(er){
        res.status(400);
        res.send(er);
    });
});
responder.get("/birthdayCake/", function(req, res){
    let id = req.query.imagine;
    let data = systemCache.birthdayCards[id];
    let webPage = fs.readFileSync("birthdayPage/index.html", "utf-8");
    if (data){
        webPage = webPage.replace("JADE_sitename", "Jade's Admin System");
        webPage = webPage.replace("JADE_url", addressPointer + "/birthdayPage");
        webPage = webPage.replace("JADE_title", `Someone made a birthday cake for you, ${data.Person}!`);
        webPage = webPage.replace("JADE_description", data.Message);
        webPage = webPage.replace(/JADE_image/g, data.Cake);
        webPage = webPage.replace("JADE_color", "#00aaff");
        webPage = webPage.replace("JADE_person", data.Person + "!");
        webPage = webPage.replace("JADE_message", data.Message);
        webPage = webPage.replace("JADE_sender", data.Sender);
        res.send(webPage);
    }else
        res.send();
})
responder.post("/updateJadeProfileScriptSettings", function(req, res){
    let userId = req.query.userId;
    let data = "";
    req.on("data", function(buffer){
        data += buffer;
    });
    req.on("end", function(){
        Roblox.GetUserFromUserId(userId).then(function(rbx){
            let jadeProfile = GetJadeProfile(rbx);
            jadeProfile.onComplete(function(){
                let settings = jadeProfile.OtherData.ScriptSettings || {};
                jadeProfile.OtherData.ScriptSettings = settings;
                let newSettings = JSON.parse(data);
                for (let i in newSettings){
                    settings[i] = newSettings[i];
                }
                jadeProfile.ManualSave();
                res.send(settings);
            });
        }).catch(function(){
            res.status(400);
            res.send("Oopsie, unable to find roblox user.");
        });
    });
});
responder.post("/proxyProcess", function(req, res){
    try{
        let data = "";
        req.on("data", function(buffer){
            data += buffer;
        })
        req.on("end", function(){
            let body = JSON.parse(data);
            /** @type {ProxyClient} */
            let loader = proxyCache[String(body.Id)];
            if (loader == null){
                let file = fs.existsSync(storageUri +"proxies/" + body.Id + "proxyArchive.txt");
                if (file){
                    proxyCache[String(body.Id)] = JSON.parse(fs.readFileSync(storageUri +"proxies/" + body.Id + "proxyArchive.txt", {encoding: "utf-8"}));
                    updateProxyAutoCorrect();
                    loader = proxyCache[String(body.Id)];
                    for (let r in consoleCache){
                        /** @type {ConsoleClient} */
                        let console = consoleCache[r];
                        if (console.JadeProfile && console.JadeProfile.Role.RankId >= 251)
                            console.NewLogs.push({System: "ProxyArchiver", Message: "Retrieved Proxy" + loader.Id + " for use. The call was brought on by an incoming connection of an external server.", Color: [0, 170, 255], Now: Date.now()});
                    }
                }
            }
            if (loader){
                if (loader.Key == body.Key){
                    let players = body.Players;
                    let pendingDataRequests = 0;
                    let returnRequest = [];
                    let finish;
                    body.Requests = body.Requests || [];
                    body.Requests.forEach(function(va){
                        /** @type {String} */
                        let name = va[0];
                        /** @type {String[]} */
                        let parameters = va[1];
                        /** @type {Number} */
                        let index = va[2];
                        let request = dataRequests[name];
                        let done = 
                        /**
                         * 
                         * @param {String} data 
                         * @param {String} error 
                         */
                        function(data, error){
                            returnRequest.push({Index: index, Data: data, Error: error});
                            pendingDataRequests --;
                            if (pendingDataRequests == 0){
                                finish();
                            }
                        }
                        pendingDataRequests ++;
                        if (request){
                            request(parameters).then(function(va){
                                done(va);
                            }).catch(function(a){
                                done("Error Occured " + a);
                            });
                        }else
                            done(null, "Request not found.");
                    })
                    players.forEach(function(value){
                        let searched = loader.Players.find(
                            function(va){
                                return va[0] == value
                            }
                        );
                        if (searched == undefined){
                            loader.Players.push([value, Date.now()]);
                        }else{
                            searched[1] = Date.now();
                        }
                    });
                    loader.LastPing = Date.now() + 1/30;
                    loader.PeakPerformance = body.Performance;
                    body.Logs.forEach(function(va){
                        if (va[1] == "System" && va[0].match(/(?:\[Jade Loader v2\];)([\w\d\s]+)(?: joined the server!)/)){
                            let username = va[0].match(/(?:\[Jade Loader v2\];)([\w\d\s]+)(?: joined the server!)/)[1];
                            loader.Request.push(new ProxyRequest("BotLog", [username, true]));
                            loader.Logs.push(new ProxyLog("JASAO", "New player detected \"" + username + "\"... Running BotLogs on \"" + username + "\"...", [255, 0, 247], va[3]));
                        }
                        if (va[1] == "BotLog"){
                            try{
                                let proccessed = va[0].split(/(\[[\w\d\s]+\])/g);
                                if (proccessed[3] == "[NewScreenGui]"){
                                    let userName = proccessed[1].match(/[\w\d\s]+/)[0];
                                    if (userName){
                                        let found = null;
                                        let screenGuiName = va[0].match(/(?:\[[\w\d\s]+])(?:\[[\w\d\s]+]) (.+)/)[1];
                                        for (let i in blacklistedScripts){
                                            /** @type {String[]} */
                                            let array = blacklistedScripts[i];
                                            array.forEach(function(term){
                                                if (screenGuiName.search(term) != -1 && Math.abs(screenGuiName.length-term.length) < 5){
                                                    found = {
                                                        Badmin: i,
                                                        ProxyId: loader.Id,
                                                        SearchedContent: screenGuiName
                                                    };
                                                }
                                            });
                                        }
                                        if (found)
                                            Roblox.GetUserFromUserName(userName).then(function(rbxuser){
                                                let jadeProfile = GetJadeProfile(rbxuser);
                                                if (jadeProfile){
                                                    let badminRecords = jadeProfile.OtherData.BadminRecords || {};
                                                    jadeProfile.OtherData.BadminRecords = badminRecords;
                                                    badminRecords[found.Badmin] = badminRecords[found.Badmin] || [];
                                                    /** @type {Number[]} */
                                                    let recordType = badminRecords[found.Badmin];
                                                    recordType.push(found.ProxyId);
                                                    if (recordType.length > 10){
                                                        recordType.shift();
                                                    }
                                                    loader.Logs.push(new ProxyLog("JASAO", "Flagged individual \"" + userName + "\" for using the badmin \"" + found.Badmin + "\". Adding to their profile...", [255, 0, 247], va[3]));
                                                    jadeProfile.ManualSave();
                                                }
                                            });
                                    }
                                }
                            }
                            catch(er){
                                systemLog("JASAO Bot", `Failed to process log entry: ${er}`, "ERROR");
                            };
                        }
                        loader.Logs.push(new ProxyLog(va[1], va[0], va[2], va[3]));
                    });
                    let simplifiedRequests = [];
                    loader.Request.forEach(function(va){
                        let str = va.Command + ";";
                        if (typeof(va.Arguments) != "object"){
                            str += String(va.Arguments) + ";";
                        }else
                            va.Arguments.forEach(function(arg){
                                str += arg + ";";
                            });
                        simplifiedRequests.push({Name: va.Command, Info: va.Arguments, Info2: str});
                    });
                    finish = ()=>{
                        res.send(JSON.stringify({
                            Requests: simplifiedRequests,
                            DataResponse: returnRequest,
                        }));
                    }
                    if (pendingDataRequests == 0)
                        finish();
                    loader.Request = [];
                }else{
                    res.status(403);
                    res.send("(403) Unauthorized! You aren't a computer!");
                }
            }else{
                res.status(403);
                res.send("(403) Invalid Proxy Id");
            }
        })
    }
    catch(e){
        res.status(400);
        res.send("(400) Error. Invalid Body, therefore request wasn't understandable.");
        return;
    }
});
let formatCommand = function(commandText){
    let tab = [];
    while (true){
        let entry = commandText.search(/[^\\\\];/);
        if (entry != -1 || commandText[0] == ";"){
            if (commandText[0] == ";")
                entry = -1;
            tab.push(commandText.substr(0, entry+1).replace(/\\;/g, ";"));
            commandText = commandText.substr(entry+2);
        }else{
            tab.push(commandText.replace(/\\;/g, ";"));
            break;
        }
    }
    return tab;
}
const consoleOutputCache = {};
responder.get("/outputConsole/*", function(req, res){
    if (consoleOutputCache[req.query.id]){
        let createContent = function(index, va){
            let color = va.Color || [255, 255, 255];
            let content = va.Message;
            return `<div class="Entry" style="color:rgb(${color[0]},${color[1]},${color[2]})"><div class="LineNumber">${index}</div><div class="Content">${content}</div></div>`
        }
        /**
         * @type {String}
         */
        fs.readFile("consoleoutput/index.html", "utf-8", function(er, data){
            let template = data;
            let listString = "";
            let entries = consoleOutputCache[req.query.id];
            entries.forEach(function(va, index){
                listString += createContent(index, va) + "\n";
            });
            template = template.replace("ENTRY_SPOT_JADE", listString);
            res.setHeader("Cache-Control", "max-age=30");
            res.send(template);
        });
    }else{
        res.status(404);
        res.send("Output not found or removed?")
    }
});
responder.get("*", function(req, res){
    if (req.accepts("html")){
        res.status(302);
        res.setHeader("Location", "/home");
        res.send();
        return;
    }
    if (req.accepts("json")){
        res.status(404);
        res.send("{\"error\":\"Not Found\"}");
        return;
    }
    res.status(404);
    res.send("Not Found. You really have hit a deep end.");
});
bot.on("message", function(msgData){
    let author = msgData.author;
    let msg = msgData.content;
    if (author.id != bot.user.id && msg.match(/^;\w/)){
        let commandText = msg.substr(1);
        let command = formatCommand(commandText);
        let closestLength = 100;
        let commandSelected = null;
        let logs = [];
        let status = "Success";
        consoleCommands.forEach(function(value){
            let variant = value.Variations;
            for (let i = 0;i<variant.length;i++){
                if (variant[i].substring(0, command[0].length) == command[0] && closestLength > Math.abs(command[0].length-variant[i].length)){
                    closestLength = Math.abs(command[0].length-variant[i].length);
                    commandSelected = value;
                }
            }
        });
        if (consoleCache[author.id] == null){
            let client = new ConsoleClient();
            consoleCache[author.id] = client;
            client.AutoCorrects = {};
        }
        let client = consoleCache[author.id];
        try{
            client.JadeProfile = GetJadeProfile(author);
            client.JadeProfile.References["DiscordRemoteConsole"] = true;
        }
        catch(er){
            client.JadeProfile = null;
            logs.push({System: "System", Message: "Warning: Your JadeProfile cannot be created because your Roblox Account is unknown. Some commands may not work without a JadeProfile!", Now: Date.now()});
        }
        if (commandSelected == null && msgData.guild && msgData.guild.id != primaryServer){
            return;
        }
        let overrideColor;
        /** @type {JadeProfile} */
        let jadeProfile = client.JadeProfile;
        let lastMessage = Date.now();
        let commandName = command[0];
        let parameters = command;
        parameters.splice(0, 1);
        let queue = 1;
        let resume = function(){
            if (commandSelected){
                if (commandSelected.Discord_Support){
                    if (jadeProfile == null){
                        let assumedRole = 1;
                        if (assumedRole < commandSelected.Role){
                            logs.push({System: "System", Message: commandSelected.Name + " failed execution. Insufficient Permission", Now: Date.now()});
                            status = "Error";
                        }else{
                            try{
                                let reciept = new IncomingRecieptRequest();
                                let succesMeter = 0;
                                reciept.Logger = function(message, color, overrideTime){
                                    logs.push({Color: color, System: commandSelected.Name, Message: message, Now: overrideTime || Date.now()});
                                    lastMessage = Date.now();
                                    if (color){
                                        overrideColor = color;
                                        if (color[1] > 200){
                                            succesMeter ++;
                                        }else if (color[0] > 200){
                                            succesMeter--;
                                        }
                                        if (succesMeter >0){
                                            status = "Success";
                                        }else
                                            status = "Error?";
                                    }
                                };
                                reciept.FinishYield = function(){
                                    discordFinished = true;
                                };
                                reciept.User = client;
                                status = "Success";
                                reciept.DiscordChannel = msgData.channel;
                                reciept.DiscordUser = author;
                                logs.push({System: "System", Message: commandSelected.Name + " execution.", Now: Date.now()});
                                commandSelected.Call(reciept, parameters);
                            }
                            catch(exception){
                                systemLog("Command", commandSelected.Name + " failed execution. " + String(exception), "ERROR");
                                logs.push({System: "System", Message: commandSelected.Name + " failed execution. " + String(exception), Now: Date.now()});
                                status = "Error";
                            }
                        }
                    }else
                        jadeProfile.onComplete(function(){
                            if (jadeProfile.Role.RankId < commandSelected.Role && accessWhitelist[jadeProfile.RobloxUser.UserId] == null){
                                logs.push({System: "System", Message: commandSelected.Name + " failed execution. Insufficient Permission", Now: Date.now()});
                                status = "Error";
                                return;
                            }
                            jadeProfile.References["Audit Logs Store"] = true;
                            jadeProfile.AuditLogs.push({Message: "[Discord]: Ran " + commandSelected.Name + " with the parameters [" + String(parameters) + "]", Time: Date.now()});
                            try{
                                let reciept = new IncomingRecieptRequest();
                                let succesMeter = 0;
                                reciept.Logger = function(message, color, overrideTime){
                                    lastMessage = Date.now();
                                    logs.push({Color: color, System: commandSelected.Name, Message: message, Now: overrideTime || Date.now()});
                                    if (color){
                                        overrideColor = color;
                                        if (color[1] > 200){
                                            succesMeter ++;
                                        }else if (color[0] > 200){
                                            succesMeter--;
                                        }
                                        if (succesMeter >=0){
                                            status = "Success";
                                        }else
                                            status = "Error?";
                                    }
                                };
                                reciept.User = client;
                                reciept.FinishYield = function(){
                                    discordFinished = true;
                                };
                                reciept.DiscordUser = author;
                                status = "Success";
                                reciept.DiscordChannel = msgData.channel;
                                logs.push({System: "System", Message: commandSelected.Name + " execution.", Now: Date.now()});
                                commandSelected.Call(reciept, parameters);
                            }
                            catch(exception){
                                systemLog("Command", commandSelected.Name + " failed execution. " + String(exception), "ERROR");
                                logs.push({System: "System", Message: commandSelected.Name + " failed execution. " + String(exception), Now: Date.now()});
                                status = "Error";
                            }
                        });
                }else{
                    status = "Error"
                    logs.push({System: "System", Message: "You ran " + commandSelected.Name + ". However, it isn't compatible with Discord. You must use Jade's Remote Console for that!", Now: Date.now()});
                }
            }else{
                status = "Error"
                logs.push({System: "System", Message: commandName + " is not a command! Please use ;cmds for a list commands avaliable", Now: Date.now()});
            }
        };
        let complete = function(){
            queue --;
            if (queue == 0){
                resume();
            }
        }
        let discordFinished = true;
        if (commandSelected && commandSelected.Discord_Support){
            if (commandSelected.Discord_Yield){
                discordFinished = false;
            }
            let argumentsRequirements = commandSelected.Arguments;
            /**
             * @type {Action[]}
             */
            let actions = [];
            let someQueue = 1;
            let completeTask = async function(){
                someQueue --;
                if (someQueue == 0){
                    let dataReturn = [];
                    for (let i = 0;i<actions.length;i++){
                        /**
                         * @type {Action}
                         */
                        let action = actions[i];
                        let embed = action.MessageEmbed;
                        embed.setTitle(":grey_exclamation: Jade's Admin System Action: " + embed.title || "NULL");
                        logs.push({System: "System", Message: `Argument ${i+1} requires your attention.`, Now: Date.now()});
                        logs.push({System: "System", Message: `Argument ${i+1} says \"${embed.description || "nothing lol idk"}\"`, Now: Date.now()});
                        switch(action.InputType){
                            case "NUMBER":{
                                let inputMin = action.InputParams.numberMin;
                                let inputMax = action.InputParams.numberMax;
                                let someAdditionalStrings = "";
                                if (inputMin){
                                    someAdditionalStrings += ", from " + inputMin;
                                }
                                if (inputMax){
                                    someAdditionalStrings += " to " + inputMax;
                                }
                                someAdditionalStrings += ".";
                                embed.setDescription(embed.description + ".\nYou must enter a number value"+someAdditionalStrings);
                                break;
                            }
                            case "BOOLEAN":{
                                embed.setDescription(embed.description + ".\nYou must enter a yes/no value.");
                                break;
                            }
                            default:{
                                embed.setDescription(embed.description + ".\nYou must enter a string value.");
                            }
                        }
                        let msgSentAsEmbed = await msgData.channel.send(embed);//
                        let forceResolve;
                        let timeO = setTimeout(() => {
                            forceResolve({Type:"Forced"});
                            logs.push({System: "System", Message: "Timeout! You hadn't input in 10 seconds. OOpsies.", Now: Date.now()});
                        }, 10000);
                        let returnData = await new Promise(function(resolve, reject){
                            forceResolve = resolve;
                            bot.on("message", function(msg){
                                if (msg.author == msgData.author){
                                    switch(action.InputType){
                                        case "NUMBER":{
                                            let inputMin = action.InputParams ? action.InputParams.numberMin : -Infinity;
                                            let inputMax = action.InputParams ? action.InputParams.numberMax : Infinity;
                                            let parsedNumber = Number(msg.content);
                                            if (parsedNumber && inputMin <= parsedNumber && inputMax >= parsedNumber){
                                                resolve(parsedNumber);
                                            }
                                            break;
                                        }
                                        case "BOOLEAN":{
                                            let yeses = {"yes":true,"true":true,"agree":true,"1":true,"on":true};
                                            let nos = {"no":true,"false":true,"disagree":true,"0":true,"off":true};
                                            if (yeses[msg.content.toLowerCase()]){
                                                resolve(true);
                                            }else if (nos[msg.content.toLowerCase()]){
                                                resolve(true);
                                            }
                                            break;
                                        }
                                        default:{
                                            resolve(true);
                                        }
                                    }
                                }
                            });
                        });
                        msgSentAsEmbed.delete({timeout:1000});
                        if (returnData.Type =="Forced"){
                            break;
                        }
                        embed.setDescription("Input Value: " + returnData);
                        msgSentAsEmbed.edit(embed);
                        dataReturn[i] = returnData;
                    }
                    actions.forEach(function(va, index){
                        va.Callback(dataReturn[index]);
                    });
                    complete();
                }
            };
            parameters.forEach(function(va, index){
                if (argumentsRequirements[index] == null)
                    return;
                let argumentType = argumentsRequirements[index][1];
                if (argumentType == "DISCORD_PROFILE"){
                    queue ++;
                    someQueue ++;
                    Discord.GetUserFromDiscordFormatted(va).then(function(user){
                        parameters[index] = user.id;
                        complete();
                        completeTask();
                    }).catch(function(){
                        let closestMatch = [];
                        let checklist = new discord.MessageEmbed();
                        trackedDiscordNames.forEach(function(user){
                            if (closestMatch.length >= 20){
                                return;
                            }
                            if (user.toLowerCase().match(va.toLowerCase())){
                                closestMatch.push(user);
                                checklist.addField(`[${closestMatch.length}]`, user);
                            }
                        });
                        checklist.title = "Discord Profile Selection";
                        checklist.description = "Enter the number of the Discord Profile you want in Argument " + (index + 1);
                        let params = new ActionInputParams();
                        params.numberMax = closestMatch.length;
                        params.numberMin = 1;
                        if (closestMatch.length == 0){
                            parameters[index] = va;
                            logs.push({System: "System", Message: "Unable to search for DISCORD_SIMPLIFIED. Assuming argument satasified.", Now: Date.now()});
                            complete();
                        }else
                            if (closestMatch.length == 1){
                                Discord.GetUserFromDiscordFormatted(closestMatch[0]).then(function(va){
                                    parameters[index] = va.id;
                                    logs.push({System: "System", Message: "Auto selected " + va.username + "#" + va.discriminator + ".", Now: Date.now()});
                                    complete();
                                }).catch(function(er){
                                    logs.push({System: "System", Message: "An unknown error occured when getting Discord User from DISCORD_SIMP. " + er, Now: Date.now()});
                                    complete();
                                });
                            }else
                                actions.push(new Action(checklist, "NUMBER", function(int){
                                    let simp = closestMatch[int-1];
                                    Discord.GetUserFromDiscordFormatted(simp).then(function(va){
                                        parameters[index] = va.id;
                                        complete();
                                    }).catch(function(er){
                                        logs.push({System: "System", Message: "An unknown error occured when getting Discord User from DISCORD_SIMP. " + er, Now: Date.now()});
                                        complete();
                                    });
                                }, params));
                        completeTask();
                        //complete();
                    });
                }
            });
            completeTask();
        }else
            complete();
        let embded = new discord.MessageEmbed();
        embded.color = [embded];
        let desc = "null";
        embded.setTitle(":arrows_counterclockwise: Jade's Admin System Command Output");
        embded.setDescription("Loading...\n``This command is being executed\nOutputs awaiting...``");
        embded.setColor([0, 170, 255]);
        msgData.reply("imagine executiong by obt jadeo", embded).then(function(msg){
            let timeInt;
            let lastDesc = "";
            function applyText(){
                if (Date.now()-lastMessage < 3000 || queue != 0 || discordFinished == false){
                    let desc = "Loading...";
                    if (logs.length == 0){
                        desc += "\n``No logs outputed by command``";
                    }else{
                        desc += "\n``";
                        for (let i = 0;i<logs.length;i++){
                            let v = logs[i];
                            desc += "[" + timeConversion((Date.now()-v.Now)/1000) + "][" + v.System + "]" + v.Message + "\n";
                        }
                        desc += "``";
                    }
                    if (desc.length > 2048){
                        desc = "Loading...\n``. . .``";
                    }
                    if (desc != lastDesc){
                        lastDesc = desc;
                        embded.setDescription(desc);
                        msg.edit("", embded);
                    }
                    return;
                }
                clearInterval(timeInt);
                switch(status){
                    case "Success":
                        embded.setTitle(":white_check_mark: Jade's Admin System Command Output");
                        desc = "Success";
                        embded.setColor([0, 255, 85]);
                        break;
                    case "Error":
                        desc = "Error";
                        embded.setTitle(":x: Jade's Admin System Command Output");
                        embded.setColor([255, 0, 85]);
                        break;
                    case "Error?":
                        desc = "Output indicates error. May actually be successful...";
                        embded.setTitle(":x: Jade's Admin System Command Output");
                        embded.setColor([255, 0, 85]);
                        break;
                }
                if (overrideColor && status != "Error")
                    embded.setColor(overrideColor);
                if (logs.length == 0){
                    desc += "\n``No logs outputed by command``";
                }else{
                    desc += "\n``";
                    for (let i = 0;i<logs.length;i++){
                        let v = logs[i];
                        desc += "[" + timeConversion((Date.now()-v.Now)/1000) + "][" + v.System + "]" + v.Message + "\n";
                    }
                    desc += "``";
                }
                if (desc.length > 2048){
                    let randomKey = "";
                    for (let i = 0;i<10;i++){
                        randomKey += Math.floor(Math.random()*10);
                    }
                    desc = desc.replace(/\n/g, "<br>")
                    let textFormatted = [];
                    for (let i = 0;i<logs.length;i++){
                        let v = logs[i];
                        textFormatted.push({Message:"[" + timeConversion((Date.now()-v.Now)/1000) + "][" + v.System + "]" + v.Message + "\n", Color:v.Color});
                    }
                    consoleOutputCache[randomKey] = textFormatted;
                    embded.setDescription(status + "\n``Output is too large for Discord too handle\nYour output has been put into the following link.\nThe following link will expire in 30 seconds``\n" + addressPointer+ "/outputConsole/?id=" + randomKey);
                    setTimeout(() => {
                        consoleOutputCache[randomKey] = null;
                    }, 30*1000);
                }else{
                    embded.setDescription(desc);
                }
                if (jadeProfile){
                    embded.setFooter("Executed by [" + jadeProfile.Role.RoleName + "]" + author.username + "#" + author.discriminator);
                }else
                    embded.setFooter("Executed by [1]" + author.username + "#" + author.discriminator);
                msg.edit(`<@${author.id}>`, embded);
            }
            timeInt = setInterval(applyText, 1500);
            applyText();
        });
    }
});
let startCpu = process.cpuUsage();
systemCurrentInfo.Cpu = (startCpu.user + startCpu.system)/((Date.now()-systemCurrentInfo.LastCheck)*1000);
systemCurrentInfo.Memory = process.memoryUsage().heapUsed;
systemCurrentInfo.CpuTime = (startCpu.user + startCpu.system)/1000000;
setInterval(() => {
    let startCpu = process.cpuUsage();
    setTimeout(() => {
        startCpu = process.cpuUsage(startCpu);
        systemCurrentInfo.Cpu = (startCpu.user + startCpu.system)/((Date.now()-systemCurrentInfo.LastCheck)*1000);
        systemCurrentInfo.Memory = process.memoryUsage().heapUsed;
        systemCurrentInfo.LastCheck = Date.now();
        systemCurrentInfo.CpuTime = (startCpu.user + startCpu.system)/1000000;
    }, 7500);
}, 10000);
const saveServerState = () => {
    for (let i in proxyCache){
        /** @type {ProxyClient} */
        let proxy = proxyCache[i];
        let viewed = null;
        for (let r in consoleCache){
            /** @type {ConsoleClient} */
            let console = consoleCache[r];
            if (console.AttachedProxy == String(proxy.Id)){
                viewed = true;
                break;
            }
        }
        if (proxyWriteReadQueue[proxy.Id] == null){
            proxyWriteReadQueue[proxy.Id] = true;
            fs.writeFile(storageUri +"proxies/" + proxy.Id + "proxyArchive.txt", JSON.stringify(proxy), function(){
                delete proxyWriteReadQueue[proxy.Id];
            });
        }
        if ((Date.now()-proxy.LastPing)/1000 > 30 && viewed == null){
        if ((Date.now()-proxy.LastPing)/1000 > 30 && viewed == null){
            delete proxyCache[i];
            for (let r in consoleCache){
                /** @type {ConsoleClient} */
                let console = consoleCache[r];
                if (console.JadeProfile && console.JadeProfile.Role.RankId >= 251)
                    console.NewLogs.push({System: "ProxyArchiver", Message: "Archived Proxy" + proxy.Id + " for deep storage. " + Buffer.byteLength(JSON.stringify(proxy), "utf-8")+ " bytes of memory conserved. To restore an archived proxy, use ;retrieve;" + proxy.Id + "!", Color: [0, 170, 255], Now: Date.now()});
            }
        }
        updateProxyAutoCorrect();
    }
    fs.writeFileSync(storageUri + "rbxPlayerData.json", JSON.stringify(Roblox.Cache));
    fs.writeFileSync(storageUri + "auths.json", JSON.stringify(authenticationTable))
    fs.writeFileSync(storageUri + "systemCache.json", JSON.stringify(systemCache));
    for (let i in jadeProfileCache){
        /** @type {JadeProfile} */
        let profile = jadeProfileCache[i];
        if (i.length > 13){
            continue;
        }
        if (profile == null){
            delete jadeProfileCache[i];
            continue;
        }
        let references = 0;
        for (let i in profile.References){
            references ++;
        }
        if (profile && references == 1){
            if (profile.BanData){
                delete profile.BanData.Banner.References["BanReference=>" + profile.Nickname];
            }
            profile.DiscordUsers.forEach(function(va){
                delete jadeProfileCache[va.id];
            });
            delete jadeProfileCache[i];
        }
    }
}}
setInterval(saveServerState, 30000);
/**JadeProfile loader (stress test memory)
let crap = fs.readFileSync("storage/userdatamap.json", "utf-8");
crap = JSON.parse(crap);
let accounts = 0;
let completed = 0;
let max = 1500;
for (let i in crap.Roblox){
    accounts ++;
    if (accounts > max){
        break;
    }
    Roblox.GetUserFromUserId(i.match(/\d+/)).then(function(rbx){
        let jadeProfile = GetJadeProfile(rbx);
        jadeProfile.onComplete(function(){
            completed ++;
            console.log(Math.floor(completed/max*100) + "%, " + completed + " completed.");
        });
    });
}**/
systemLog("System", "Sucessfully booted up Jade's Admin System.", "INFO");
systemLog("System", `Took ${nearDateConversion((Date.now()-startTime)/1000)} to boot up Jade's Admin System.`, "INFO");
