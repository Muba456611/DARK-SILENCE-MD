/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████-
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent Lover 🕵
contact me Silent Lover ♻️
© Copy coder alert ⚠
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DARK-SILENCE-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JDT2p6MTFTeG8xeGtXOFoxblN1MFdzOFlMakZIWlAxdTRyYllGOURYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTVLMHduYXNTbTZQZHVBbGdlUmlGWkJ4RVZyMEFBYWhFTUFQQWtTZ2szcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRmhJNEN2eDRoUFg3a01PVjVHdWlxcnQ1WUVkWEdlRTRLQms2MW8xajJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTczRQdzVxWnhPMnduZ25ZS0ttV014a1NGZjhWdXNLSUYzV3IxL0NxRkhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEZlZDZjJtMjRoWm96ZlZYN2pQNnVqdXB6OE92Qi9HQXlOVHBjZVhKa289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp3d3p0Z01rRkM5Z0dMaEQwVHMwYk5NRkdIQkJ1QmVmQlI4cXFidVFxZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBoaHRPQXJibFo3dUpFay9OeExrMkRWQTBkWURHenBwWmdEUTBKcXFtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRmZ2JmZDNPTTJ5UldNR1owS1YyNWt4K0cySzdJS3RlSGUwbWJlVGVHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcvTWYvdCsySVNsMnF5Z0F0ZnhqMlU3S2o4b1U2eXZyM2l3NnM3ZDN3Qjd5eFJGVzBoT1NrWDVaZ1R2YTBmMkI5ZGpvd0V0NTUyVlJ1cVo0M1J0Ymh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IjlTZVE4YTY3aVl4ejJJQ1hmKzdjZ3huRWJDQUdhbGhNZ1ZRd1lxRG1ENTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0lMRU5UWDQiLCJtZSI6eyJpZCI6IjI2MDc2OTI1NDYxNTozMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5NTgzNzg0MTkxNjA0NzozMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXaG5Pc1BFSy9GMjh3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InV4ZjZHSUJIZjJNUFBDQkhFRWhlR1g4enVVUVJ1SkdkYnAwUjNPYWNxMWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdTczZxODZNd0xJZnUwSmhQZDJKN0dmV3ZuMlZCbjJOMXR1SGdyaGVXY0NQV2VoaDFhNW9DZEFBN3A4ek1INXo5cldGbTR3bCt1eW84WG1YMXExbGdRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJobmFRUk1zRFVEVjA5WGxWc1JPSjVuZ2Q3NS9zY0x2c0JVMTMyTVVKVVVXVk5RaGNyMnZpUGtSS29WWENtbGdQQkxSNmpBdkFRRUtTOFJZaG9tSmtnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc2OTI1NDYxNTozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJic1graGlBUjM5akR6d2dSeEJJWGhsL003bEVFYmlSblc2ZEVkem1uS3RaIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MTQ5NjExNCwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJbXkifQ==",
    CAPTION: process.env.CAPTION || "POWERED BY MUBANGA",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_DOWNLOADING: process.env.AUTO_DOWNLOADING || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/IMG-20250505-WA0055.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "Md activated",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_CALL: process.env.ANTI_CALL || "false",
    BAD_NUMBER_BLOCKER: process.env.BAD_NUMBER_BLOCKER || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE ||"true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "260769254615",
    OWNER_NAME: process.env.OWNER_NAME || "Silent Lover",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "Dark Silence",
    STATUS_REPLY: process.env.STATUS_REPLY || "",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "true", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};

