let handler = async (m, { conn, command, text }) => {
  if (!text) throw 'Mana pencariannya, contoh:\n.tx2img robot,akazamd,nocounter'
  m.reply('Tunggu ya...')
  global.db.data.users[m.sender].limit -= 1000
  let res = `https://xzn.wtf/api/txt2img?text=${encodeURIComponent(text)}&apikey=${global.xzn}`
  let caption = 'Ni, woi!\nHarga 1000 limit, minimal makasih dululah kalo nanti banyak yang make gw biat agar khusus premium🗿☕'
  conn.sendFile(m.chat, res, 'txt2img.jpg', caption, m)
}
handler.help = ['txt2image']
handler.tags = ['maker']
handler.command = /^(txt2img?|tx2img)$/i
handler.limit = 1000
export default handler