import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Balas gambar dengan perintah\n\n${usedPrefix + command}`

    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`

    m.reply('Generating....')
    let img = await q.download()
    let url = await uploadImage(img)

    let ku = await fetch(`https://api.akuari.my.id/other/ocr?img=${url}`);
    let meme = await ku.json();
    let capton = `*HASIL CONVERT*
    status = ${meme.status}
    hasil = ${meme.result}`;
    conn.sendMessage(m.chat, capton, m)
}

handler.help = ['totext']
handler.tags = ['maker']
handler.command = /^(totext)$/i

handler.register = true
handler.level = 6
handler.premium = true
export default handler