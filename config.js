const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9nsVQRYC#Kz0RJ9e4h_zrDQPPZ2tA9tRjED29zYH5CpO9_m0aPF8",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/xdhMJy1b/Screenshot-20240830-004711-Pixel-Lab.jpg",
SUDO_NB: process.env.SUDO_NB || "94760059126",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
