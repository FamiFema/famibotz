let handler = async (m, { conn, usedPrefix, command, args }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let text = args[0] // Mengambil argumen pertama sebagai teks
    if (!text) throw `id nya mana bang`
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Gambar tidak ditemukan'
        await conn.updateProfilePicture(text, img)
    } else throw `kirim/balas gambar dengan caption *${usedPrefix + command}*`
}
handler.help = ['setppid']
handler.tags = ['group']

handler.command = /^setppid$/i

handler.group = false
handler.admin = false
handler.botAdmin = false
handler.premium = true
export default handler