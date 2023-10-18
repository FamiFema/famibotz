import OpenAI from 'openai';
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw "Mau nanya apaan?";
    let user = global.db.data.users[m.sender];
    if (user.limit < 4000) return 'limit anda kurang untuk memakai fitur ini, fitur ini adalah fitur spesial yang ada di bot jadi fitur ini memiliki harga lebih mahal yaitu 4000 limit 7000money dan khusus premium saja\n\nopenai gratis pakai command = .akza';
    user.limit -= 4000;
    user.money -= 7000;
    const openai = new OpenAI({
        apiKey: global.openai, 
    });

    const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0
    });

    conn.sendMessage(m.chat, {
        text: response.choices[0].text,
        contextInfo: {
            externalAdReply: {
                title: 'akazamd',
                body: 'akzabotz',
                sourceUrl: global.sgc, // Replace with your source URL
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['openai'];
handler.tags = ['fun'];
handler.command = /^(chat|ai|openai)$/i;
handler.register = true;
handler.limit = 4000;
handler.money = 7000;
handler.premium = true;

export default handler;