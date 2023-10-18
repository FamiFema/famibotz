import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
	if (!text) return m.reply(`Teksnya Mana Kak?\nContoh: .style1917 akaza`)
	  if (global.db.data.users[m.sender].limit < 1000) throw 'Limit anda kurang untuk memakai fitur ini, minimal 1000';
  global.db.data.users[m.sender].limit -= 1000;
  
  // Ganti user.money dengan variabel yang sesuai
  if (global.db.data.users[m.sender].money < 1000) throw 'Uang lu kurang bijir, minimal 1000';
  global.db.data.users[m.sender].money -= 1000;
  
    let meme = `https://api.akuari.my.id/ephoto/style-1917?text=${text}`
     await conn.sendFile(m.chat, meme, 'gambar.jpeg', 'ni kak');
}
handler.help = ['style1917 <teks>']
handler.tags = ['maker']
handler.command = /^style1917$/i
handler.limit = true

export default handler