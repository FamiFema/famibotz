import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    try {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
        else who = m.quoted.sender ? m.quoted.sender : m.sender
        let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
      var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"~_*©辛AKAZAMD*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await conn.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key });//PESAN LEPAS
}
  conn.sendFile(m.chat, pp, "nih bang.png", 'Selesai....', m, { jpegThumbnail: await (await fetch(pp)).buffer() })
    } catch {
        let sender = m.sender
        let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
      var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"~_*©辛AKAZAMD*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await conn.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await conn.sendMessage(m.chat, {text: hawemod[i], edit: key });//PESAN LEPAS
}
  conn.sendFile(m.chat, pp, 'ppsad.png', "Selesai....", m, { jpegThumbnail: await (await fetch(pp)).buffer() })
    }
}
handler.help = ['getpp <@tag/reply>']
handler.tags = ['group']
handler.command = /^(getpp)$/i

export default handler