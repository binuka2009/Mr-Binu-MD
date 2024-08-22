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

let madeMenu = `*ʜᴇʟʟᴏ ᴅᴇᴀʀ,* ${pushname}

*➣ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ___⬇️*

${menu.download}

*➣ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ___🧬*

${menu.main}

*➣ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ___🔰*

${menu.group}

*➣ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ___⚙️*

${menu.owner}

*➣ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ___🔁*

${menu.convert}

*➣ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ___🔎*

${menu.search}

ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙɪɴᴜ ᴍᴅ`

await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/982640de2d7f18fced629.jpg"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
