const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👩‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*╔╭────────────╮╕*
*╭│ⱧEY, Here Is My Owner Info │─◎◎▷*
*╘╰────────────╯╜*
│
*├ᴏᴡɴᴇʀ ɴᴀᴍᴇ* - *Nethsara & Supun*
*├ɴᴜᴍʙᴇʀ* - *94760059126*
*├ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* - 
│https://whatsapp.com/channel/0029VaibOKrBfxoD0CDRxA42
│
╰─────╮
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀   
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀ 
    ⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇ 
   ⢤⣀⣀⣀  ⢸⣷⡄ ⣁⣀⣤⣴⣿⣿⣿⣆
     ⠹⠏   ⣿⣧ ⠹⣿⣿⣿⣿⣿⡿⣿
          ⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
           ⠦⠴⢿⢿⣿⡿⠷ ⣿ 
        ⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃ 
        ⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿  
        ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇  
            ⠙⠻⢿⣿⣿⣿⣿⠟⠁`
await conn.sendMessage(from,{image:{url: `https://i.postimg.cc/xdhMJy1b/Screenshot-20240830-004711-Pixel-Lab.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
