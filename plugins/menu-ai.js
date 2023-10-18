import moment from 'moment-timezone';
import fs from 'fs';
import fetch from 'node-fetch';
import jimp from 'jimp';
import PhoneNumber from 'awesome-phonenumber';
import { generateWAMessageFromContent } from '@adiwajshing/baileys';

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let name = await conn.getName(m.sender);
  let ucpn = `${ucapan()}`;

  // Time
  let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss');
  let wibh = moment.tz('Asia/Jakarta').format('HH');
  let wibm = moment.tz('Asia/Jakarta').format('mm');
  let wibs = moment.tz('Asia/Jakarta').format('ss');
  let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss');
  let wita = moment.tz('Asia/Makassar').format('HH:mm:ss');
  let wktuwib = `${wibh}:${wibm}:${wibs}`;

  let d = new Date(new Date() + 3600000);
  let locale = 'id';

  let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
  let week = d.toLocaleDateString(locale, { weekday: 'long' });
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Kata
  let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`;
  let menuai = `Hai ${name}
*${ucpn}*
Welcome To list OpenAi By Akazamd
P (khusus premium)
L (Limit)
F (Free)
*[List]*
*.ai* (bertanya ke ai) P
*.bard* (bertanya ke google bard) F
*.akza* (Bertanya ke ai za) F
*.gpt* (bertanya ke ai gpt) L
*.aixtream* (bertanya ke ai lol human) P
*[Donate]*
Itu list openai dari botz Akazamd
Jangan lupa donate bang 😁
berapapun terserah gk usah bilang ke saya
langsung aja, semoga yang donate dapat
5kali lebih banyak dari apa yang dia beri
ketik .donate untuk mengetahui list
Payment yang dapat di gunakan
Akazamd Almd 4ever
2023 © AKAZA BOT MD.`;

  let tmb = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg';

  await conn.sendMessage(m.chat, {
    caption: menuai.trim(),
    contextInfo: {
      externalAdReply: {
        title: 'akazamd',
        body: 'akzabotz',
        sourceUrl: sgc,
        thumbnailUrl: tmb,
        mediaType: 2,
        showAdAttribution: false,
        renderLargerThumbnail: true,
      },
    },
    quoted: m,
  });
};
handler.help = ['aimenu'];
handler.tags = ['main'];
handler.command = /^(menuai|aimenu)$/i;
handler.register = false;

export default handler;

// Function

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, '0')).join('');
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10;
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12;
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30;
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [
    ye, ' *Years️*\n',
    mo, ' *Month*\n',
    d, ' *Days*\n',
    h, ' *Hours*\n',
    m, ' *Minute*\n',
    s, ' *Second*',
  ].map(v => v.toString().padStart(2, '0')).join('');
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH');
  let res = 'Dini kak';
  if (time >= 4) {
    res = 'Pagi kak';
  }
  if (time >= 10) {
    res = 'Siang kak';
  }
  if (time >= 15) {
    res = 'Sore kak';
  }
  if (time >= 18) {
    res = 'Malam kak';
  }
  return res;
}
