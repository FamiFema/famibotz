import axios from 'axios';

let handler = async (m, { conn, text }) => {
let lol = await axios.get('https://api.akuari.my.id/randomimganime/loli');
    conn.sendFile(m.chat, lol, 'loli.jpg', 'noh', '', m)
  }

handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
export default handler