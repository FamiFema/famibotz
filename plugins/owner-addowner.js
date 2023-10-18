import '../config.js';
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (global.nomorown.includes(who.split`@`[0])) throw 'dia udah menjadi owner !'
    global.nomorown.push(`${who.split`@`[0]}`)
    global.nomorown = `${global.nomorown}${who.split`@`[0]}` // Menggabungkan nomor yang ditag dengan global.nomorown dari file config.js
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang owner !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
}

handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

export default handler