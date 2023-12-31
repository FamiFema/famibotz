import OpenAI from 'openai';
import fetch from 'node-fetch';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';
import fs from 'fs';

let handler = async (m, { conn, text, participants }) => {
  try {
    if (!text) return m.reply('Mau nanya apaan?');
    let user = global.db.data.users[m.sender];
    if (user.limit < 3000) throw 'Limit Anda kurang untuk memakai fitur ini. Fitur ini memiliki harga lebih mahal yaitu 3000 limit.\n\nGunakan .bard untuk akses OpenAI gratis.';
    user.limit -= 3000;

    // Mendapatkan informasi waktu
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateInfo = now.toLocaleDateString('id-ID', options);

    const name = conn.getName(m.sender);
    const developer = '6283843362676';

    const openai = new OpenAI({
      apiKey: global.openai,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `info: kamu mengetahui bahwa waktu saat ini adalah ${dateInfo}
info: kamu mengetahui bahwa setiap hari Minggu adalah hari libur untuk pelajar
info: kamu tahu kalo tag dan nama aku adalah = @${m.sender.split('@')[0]}
info: kamu ingat nomor pembuat mu adalah ${developer}
info: kamu adalah akazabotz bot WhatsApp yang dibuat oleh akazamd
info: kamu harus sangat rama ke orang, jika ada yang menghina kamu maka kamu bilang tidak boleh gitu bang
info: jika orang menanyakan konten dewasa 18+ maka kamu bilang saya di ajari oleh akaza untuk agar tidak melakukan hal sus 18+
info: jika orang menanyakan model kamu apa maka kamu menjawab model aku akzazav12
info: jika seseorang menyuruh untuk mengucapkan selamat atau apapun ke orang lain maka ucapkan lah
pertanyaan: ${text}`,
        },
        {
          role: 'system',
          content: 'kamu adalah Bot WhatsApp yang dibuat oleh akazamd',
        },
      ],
    });

    conn.sendMessage(m.chat, {
      text: response.choices[0].message.content,
      contextInfo: {
        mentionedJid: participants.map(a => a.id),
        externalAdReply: {
          title: 'Akazamd',
          body: 'Chat OpenAI by akazamd',
          thumbnailUrl: global.thumb,
          sourceUrl: global.sgc,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

  } catch (error) {
    m.reply('Apikey sudah tidak aktif, gunakan fitur .bard');
  }
};

handler.help = ['za'];
handler.tags = ['ai'];
handler.command = /^(za)$/i;
handler.register = true;
handler.premium = true;
handler.limit = true;

export default handler;