import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'; 
//di coding oleh akaza

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Balas gambar dengan perintah\n\n${usedPrefix + command} {filter}`


    let filter = text.trim().toLowerCase()

    if (!filter) {
        let availableFilters = [
            'anime_2d', 'cartoon_3d', 'pretty_soldier', 'bizarre',
            'romance_comic', 'maid_dressing', 'superhero_comic',
            'watercolor', 'doodle', 'america_comic', 'starry_girl'
        ]
        let sisa = availableFilters.join('\n') // Menggabungkan filter yang tersedia menjadi satu string dengan pemisah baris baru
        throw `Masukkan filternya! List filter berikut ini:\n${sisa}`
    }

    // List filter yang tersedia
    let availableFilters = [
        'anime_2d', 'cartoon_3d', 'pretty_soldier', 'bizarre',
        'romance_comic', 'maid_dressing', 'superhero_comic',
        'watercolor', 'doodle', 'america_comic', 'starry_girl'
    ]

    if (!availableFilters.includes(filter)) {
        throw `Filter '${filter}' tidak valid. Gunakan salah satu dari filter yang tersedia\n.anime_2d\ncartoon_3d\npretty_soldier\nbizarre\nromance_comic\nmaid_dressing\nsuperhero_comic\nwatercolor\ndoodle\namerica_comic\nstarry_girl`
    }

    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`

    m.reply('Generating....')
    let img = await q.download()
    let url = await uploadImage(img)
    let ku = await fetch(`https://xzn.wtf/api/aimirror?&apikey=${global.xzn}&url=${url}&filter=${filter}`);
    let meme = await ku.json();

    if (meme.generated_image_addresses && meme.generated_image_addresses.length > 0) {
        await conn.sendFile(m.chat, meme.generated_image_addresses[0], 'gambar.jpeg', 'By Akazamd');
    } else {
        throw 'Gagal menghasilkan gambar dengan filter tersebut.'
    }
}

handler.help = ['filterai']
handler.tags = ['maker']
handler.command = /^(ai-mirror|mirrorai|mirror)$/i

handler.register = true
handler.level = 5
handler.premium = true
export default handler