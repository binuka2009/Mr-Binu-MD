const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd  list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
}
}

let madeMunu = `*𝗛𝗲𝗹𝗹𝗼 𝗗𝗲𝗮𝗿, ${pushname}*
*𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎*

${menu.download}

> *𝙈𝘼𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝘼* 

${menu.main}

> *𝙂𝙍𝙊𝙐𝙋 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎* 

${menu.group}

> *𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎*

${menu.owner}

> *𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎* 

${menu.convert}

> *𝙎𝙀𝘼𝙍𝘾𝙃 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎* 

${menu.search}

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙɪɴᴜ ᴍᴅ
`

await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/982640de2d7f18fced629.jpg"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
