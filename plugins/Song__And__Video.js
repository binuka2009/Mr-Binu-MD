const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me Your Song Name Or Song URL...☄️")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎵 *<│ᴹᴿ 𝗕 𝗜 𝗡 𝗨 🐰💙 BOT SONG DOWNLOADER* 🎵

Title: ${data.title}
Description: ${data.description}
Time: ${data.time}
Ago: ${data.ago}
Views: ${data.views}

©ᴍᴀᴅᴇ ʙʏ ʙɪɴᴜ_ʙᴏᴛ
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});    

//========== Download Audio ==========

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//========== Send Audio Message ==========
await con.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



