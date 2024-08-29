const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*╔╭────────────╮╕*
*╭│ⱧＥLLO, I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A Qҽҽɳ-乙azie-MD Whatsapp Bot Based │Third Party Application Provide* *Many │Services With A RealTime* *Automated │Consversational* *Experience, Enjoy💫.*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})