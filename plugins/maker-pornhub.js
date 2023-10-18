import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender];
    let [text1, text2] = text.split('|');
    if (!text1 || !text2) throw 'Teksnya Mana Kak?\nContoh: .pornhub teks1|teks2';

    if (user.limit < 1000) throw 'Limit anda kurang untuk memakai fitur ini, minimal 1000';
    user.limit -= 1000;

    if (user.money < 1000) throw 'Uang Anda kurang, minimal 1000';
    user.money -= 1000;

    let meme = await fetch(`https://api.akuari.my.id/ephoto/pornhub?text=${encodeURIComponent(text1)}&text_2=${encodeURIComponent(text2)}`);
    let img = await meme.buffer();
    
    await conn.sendFile(m.chat, img, 'gambar.jpeg', 'Selesai');
};

handler.help = ['pornhub <teks1|teks2>'];
handler.tags = ['maker'];
handler.command = /^pornhub$/i;
handler.limit = true;

export default handler;