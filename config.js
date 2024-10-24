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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,+916264309039";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_24_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXdudlFCakNxQkc2aytnNFdQcFE5WG51c1VZSjJkUmxsME9vTFpJbWdxVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUUwempTendUSW11bVRXZ2h0WlFvUVwiLFxuICBcInBob25lSWRcIjogXCJlMWE0MWYxMy0wNGIwLTRlMDYtOTJjYS1iNmEzZGQ2NTJkNjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgOSxcbiAgICAgIDExNSxcbiAgICAgIDI1MixcbiAgICAgIDE1MyxcbiAgICAgIDE5NSxcbiAgICAgIDExNyxcbiAgICAgIDE3MixcbiAgICAgIDAsXG4gICAgICAxMDMsXG4gICAgICAyMTQsXG4gICAgICAxMjEsXG4gICAgICA3LFxuICAgICAgMjUyLFxuICAgICAgMjcsXG4gICAgICAxOTksXG4gICAgICAyMzEsXG4gICAgICA3MixcbiAgICAgIDE3LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTUyLFxuICAgICAgMTgxLFxuICAgICAgMzEsXG4gICAgICAyMjQsXG4gICAgICAxMDMsXG4gICAgICAyNDksXG4gICAgICAyNTAsXG4gICAgICAxMTMsXG4gICAgICAxMDEsXG4gICAgICAxNjAsXG4gICAgICAxNjcsXG4gICAgICA3OCxcbiAgICAgIDE3NCxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICA4MCxcbiAgICAgIDE4NyxcbiAgICAgIDIwOCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNGRUVaS1MzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTYyNjQzMDkwMzk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5lZXRlc2ggS291cmF2XCIsXG4gICAgXCJsaWRcIjogXCIyNjA4OTc5ODk3MzQ1NDM6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVzJxT2dHRU9INzVyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImsrdlZLSEpISGxYTlR0eldqZExzZ0NOajh3Z2dyOWlEVjVWSWZ2SkNEbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZldnWExsd0J6UkU2ZHVMVmgvQy9HQm1JWG5NSHRUYVRiazQxLzBQSWUzNTgyL0ZKcTdjLzBZcTVmWHhaR3B2dTVGUjlXYkxMdXFTcEFZaFd3QnI3Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUx5dnhycEJiTHdudks4dmJONHpUbEp0dmR0bmk5QkVVbENxZFBLZyt5QzlsOXU5a00zWTVpWndzQk9LeDRENHNpeGlPcTVtaFk5ckdTb2htWjRlRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjY0MzA5MDM5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NzQwMjYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHhjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvQXBFTDFBMUptU1FpN2hqaVcwNUtJMGNxcWZUSnhUSVBaTEdKSHhFeXowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MjkzNzg5MDAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
