//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "2349070913356";
global.owner = process.env.OWNER_NUMBER || "2347047787798";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/";
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxsbmw5ZFV1bkhFK0ltSEdZalRhTFFuWS9TTnVWMitsbzY3azduN3UyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXZkbDlQUkFQVitqaDR4QmVtcnM1YmJ1NGFWaW5iMnluS3lpcXl1NXdFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpR2puazBldE9VQjRBT1BwQU12ZTlQamRLd2ZST1F2MFo2a0FHQ3RMVEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQXoycC9sRVZMMVNOcXdLM3NjbENaclBaYXM2U3RoU3NVbmdLYzVVR3hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFbVdESUoxNVE1Z0FYcGlzcnZiNm1IQXQ0NzJUQWJoVGw4VXQremVIRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhFUmx2dk1qSE1Ga2pLVDRaVmJ1Z25IK0xHc1pCN0o1T3lOL2tXd1R1bFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05ESE1OY3pBVDRrN3cwWDJCWVo5MVp3a3Y2YzhEL2pjOXFXTTBzRmxHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmFmYkJlb05DekpHNXcrN3R3VGw0Y2tLeHpmTEpGK0kzdFRNaHY5YTBSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlxWm1zbW1hSkFxVW1lKzNuVnd2TW9DU0J1aHRlVjV4bW85c2dMSmltNTNnYUZqSkVYNzlGVmpHcTltSTMwenZKQnZXZitKdWJGamhFUG1Xa0g5WWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6InVoWFpTMlFWSWo1L3JhdkJYRURRdzA0WUcxNFUrMHVJcmpReloyZjZXeTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0Nzc4Nzc5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzM0E0RDQ2OUE1MTNCQ0MwQjQ4MkM4RTI1RjVGNjgwOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0MDEzNTYyfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpbEp3WVA4dlRHV1N1UEptM2JLS2R3IiwicGhvbmVJZCI6IjI3YjkzYWQxLTY3OTMtNGZjNS1hMGJjLWNjNTQzMmFiYTRmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTTY5aDI2ZTREaFEyZzVaaThZanVmUVVhSjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEdLa0Z5WFVmdGFqczF0aEJJblpIZDY2bnBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJUQ0ozTFFYIiwibWUiOnsiaWQiOiIyMzQ3MDQ3Nzg3Nzk4OjMzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRHBrcm9CRU9qazY3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOc3FtTjZzOEw3RjBXdTNmZDdiZDdJK3Z6YmNHQ1ZLUFpYUHdpQlVMY0MwPSIsImFjY291bnRTaWduYXR1cmUiOiJqUXRmb3pnQ0xOb2RNTlg2ZjhUdEs1MVlUdHN0cWhxZzcxSEtjSFV5cWlrNVpMVDUrbjliWDZQY0tmcVc2SDBrV2ZSRVZWMXFJRHQrbzAyTmRNMi9DUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSjhZcm90ODVOa3BlQ20zTDVRcHp5RzB6VVlrRWExdmQvQVh4ditBcllGWXJtZG9BcHpqSVVsS3ByMnFUdTRMN3BBeFZoT2YrMS9DWnVVNEZPcjNKaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ3Nzg3Nzk4OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRiS3BqZXJQQyt4ZEZydDMzZTIzZXlQcjgyM0JnbFNqMlZ6OElnVkMzQXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQwMTM1NTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVdkIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF FERRYLOY`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "Ferryloy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
