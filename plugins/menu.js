const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*╭───────────◉◉►*
*│Hey, I'm Qҽҽɳ-乙azie-MD V1, created by*
*│NBT✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻 𝗗9𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mfire*
*│►.tw*
*│►.gd*
│─────────
│👾 𝗔𝗜 𝗠𝗲𝗻𝘂 👾
*│─────────*
*│►.ai*
*│►.gen (comming soon!)*
│─────────
│⛥ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ⛥
*│─────────*
*│►.restart*
*│►.kick*
*│►.add*
*│►.addsudo*
│─────────
│💫 𝗖𝗵𝗲𝗰𝗸 𝗠𝗲𝗻𝘂 💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.owner*
*╰───────────◎◎►**`
await conn.sendMessage(from,{image:{url: `https://i.postimg.cc/xdhMJy1b/Screenshot-20240830-004711-Pixel-Lab.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
