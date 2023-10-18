import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
		let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${global.lolkey}`)
		if (!res.ok) return m.reply(`Terjadi kesalahan, coba lagi nanti.`)
		let json = await res.json()
		await conn.sendMessage(m.chat, { image: { url: json.result.male }, caption: `male` })
		await conn.sendMessage(m.chat, { image: { url: json.result.female }, caption: `female` })
}

handler.help = ['ppcp2']
handler.tags = ['internet']
handler.command = /^ppcp2$/i
handler.limit = true
handler.register = true

export default handler