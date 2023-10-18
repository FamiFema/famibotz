import fetch from "node-fetch"
import axios from "axios"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
const from = m.chat;
let { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${global.lolkey}`)
const caption = `Lokasi : ${data.result.lokasi}\n`
caption += `Waktu : ${data.result.waktu}\n`
caption += `Potensi : ${data.result.potensi}\n`
caption += `Magnitude : ${data.result.magnitude}\n`
caption += `Kedalaman : ${data.result.kedalaman}\n`
caption += `Koordinat : ${data.result.koordinat}`
conn.sendMessage(from, { image: { url: data.result.map }, caption })
}  
handler.help = ['infogempa']
handler.tags = ['info']
handler.command = /^(infogempa|gempa)$/i
export default handler