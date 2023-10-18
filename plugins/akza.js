import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?\n *Note: fitur ini untuk pengguna free jadi tidak bisa menjawab dengan tepat*`
  m.reply('Mencari jawaban');
  try {
    const akazareal = encodeURIComponent(text); 
    const response = await axios.get(`https://api.akuari.my.id/ai/gpt?chat=${akazareal}`);
    m.reply('ditemukan. generating.....');
    const zel = response.data;
    
    conn.sendMessage(m.chat, {
      text: `${zel.respon}
      
*_Message Openai from akzabotz_*`,
      contextInfo: {
        externalAdReply: {
          title: 'Akazamd',
          body: 'chat openai by akazamd',
          thumbnailUrl: 'https://telegra.ph/file/6bc4e87932d7ea57b79ef.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  } catch (error) {
    m.reply('error bjir🗿🥲');
  }
}

handler.help = ['akza <text>'];
handler.tags = ['ai'];
handler.command = /^(akza)$/i;

export default handler;
