const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+916264309039";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,+916264309039";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+916264309039";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVFVocVRVeDZNTnQ3NllUTU5aVVlPUWR5bENhcmQ1RG04c1lRd0d1SGdnOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEZ4SkstM2hRUFNndGVoRldicl9XUVwiLFxuICBcInBob25lSWRcIjogXCI4ZmMzYzUyNy1kMzIwLTRmZTMtYjM1ZS1jNDczOTU3NjQyZGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAxMjMsXG4gICAgICAxOTcsXG4gICAgICAxNzYsXG4gICAgICAyNDUsXG4gICAgICAxNjEsXG4gICAgICAxNDIsXG4gICAgICAyMTUsXG4gICAgICAxNjcsXG4gICAgICAxMDMsXG4gICAgICAyMTMsXG4gICAgICAyMzcsXG4gICAgICAxNzEsXG4gICAgICAyMjQsXG4gICAgICAyMTEsXG4gICAgICA0NyxcbiAgICAgIDE3MCxcbiAgICAgIDM4LFxuICAgICAgMjIyLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTg4LFxuICAgICAgMTQxLFxuICAgICAgMTc4LFxuICAgICAgMTIsXG4gICAgICA0LFxuICAgICAgMTY1LFxuICAgICAgMTIxLFxuICAgICAgMTUwLFxuICAgICAgNTAsXG4gICAgICAxMzAsXG4gICAgICA1MyxcbiAgICAgIDE0NixcbiAgICAgIDYyLFxuICAgICAgMjQ2LFxuICAgICAgMTU4LFxuICAgICAgMjI0LFxuICAgICAgMjgsXG4gICAgICAyMCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0xNDk5VkhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyNjQzMDkwMzk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5lZXRlc2ggS291cmF2XCIsXG4gICAgXCJsaWRcIjogXCIyNjA4OTc5ODk3MzQ1NDM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUzJxT2dHRU5mODQ3Z0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImsrdlZLSEpISGxYTlR0eldqZExzZ0NOajh3Z2dyOWlEVjVWSWZ2SkNEbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV0dlNVk5aU90V0VzUDlGcHBUWVkxQ01INXNKWjJvK1M3QUVFb2tHT01NNEdDdnVaTlkxR2p3MVQzMnp6enpsRDRnVXIwdjkra3U0SHhzM2Y0Nk9QRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVBkWmh5RXFuQzlUYi9HbS8ySW8rSW9oTEdaTSt6NmxBWk5RdTN0bnFBdlZybWNZaTlyZE05RGNtL0RDdkY1aHNRVk1kQWkyaGt1eDF1WVp6SGx5Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjY0MzA5MDM5OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NjkxMjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHhiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxenFudHhScVdiWFVmK2F6c0dLWXdzNGM3cWs4eGJxUHNWSVAwWWVPMTl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MjkzNzg5MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTU5NjI3MzMzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
