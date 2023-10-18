import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import { generateWAMessageFromContent } from "@adiwajshing/baileys";

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let name = await conn.getName(m.sender);

  // Time
  let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss');
  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let week = d.toLocaleDateString(locale, { weekday: 'long' });

  // Kata
  let kata = `${pickRandom(['Semangat!', 'Jangan menyerah!'])}`;
   let fotonya = `${global.thumb}`;
  let tmb = `${global.thumb}`;
let caption = `*[Halo ${name}] ]*
*Di Bawah ini List maker By akazamd*
*[LIST]*
*.avengers* (memunculkan foto logo bertema evengers)
*.harrypotter* (memunculkan foto dengan text bertema harrypotter)
*.thunder* (membuat image dengan text bertema petir)
*.harry* (membuat foto bertema harrypotter dengan text)
*.diamond* (membuat img dengan tema diamond)
*.futuristik* (membuat img dengan tema futuristick keren)
*.joker* (membuat img dengan text bertema joker)
*.logo3dmetal* (memunculkan foto bertema 3d metal)
*.neon* (memunculkan img bertema neon)
*.neon2* (memunculkan img bertema neon kedua)
*.neon3* (memunculkan img bertema neon tiga)
*.trans* (memunculkan foto backgroun tranformer)
*.pornhub* (memunculkan foto dengan text\nKiri Dan kanan yang keren)
*.matrix* (memunculkan foto matrix yang sangat keren)
*.matrix2* (memunculkan foto matrix satu kali lihat)
*.attp* (memunculkan sticker berisi text dengan animasi)
*.ttp* (memunculkan sticker dengan text didalamnya)
*.qc* (membuat sticker dengan foto chat kamu)
*.butterfly* (memunculkan foto keren dan indah)
*.metalic* (memunculkan foto metal keren)
*.dalle* (memunculkan image dengan text openai)
*.totext* (mengubah foto menjadi text [ocr])
*.txt2img* (membuat foto sangat realistis dengan text)
*.filterai* (menambahkan foto dengan beberapa filter)
*.filter* (menambahkan foto dengan filter canvas)
*.neko* (premium user)
*.ppcopel* (membuat foto pp couple romantis)
*.ppcouple* (foto couple romantis)
*.darknes* (mengubah foto dengan efek dark)
*.pin* (memunculkan foto pinteres dengan text 20 foto pertext)
*.ppcp2* (foto couple2 bagus)
*.meme* (foto meme lucu )
*.love* (membuat foto didalam kotak cinta😍)
*.style1917* (membuat foto textpro dengan style style1917)
*.hornycard* (membuat foto hornycard)
*.naruto* (membuat foto naruto dari text)
*.randomgambar* (kumpulan foto meme +62)
*.smeme* (mengubah foto menjadi sticker dengan text atas bawah)
*.hd* (mengubah foto menjadi lebih hd😁)
*.qrcode* (membuat qrcode dari text)
*.wanted* (menambah kan foto dalam foto buronan)
*.metalic* (membuat gambar dari text bertema metal)
*.gimage* (memunculkan gambar dari google dengan text)
*.grass* (memunculkan foto di gras)
*[info]*
*jika mau request fitur langsung aja chat wa.me/6283843362676*
*jika mau donate gk masalah ketik aja .donate*
*jika mau sewa bot selahkan*
*jika mau beli sc hwv22 silahkan chat ke nomor diatas*
*jika mau beli sc v8 gas aja di atas nomor nya*
*jika mau beli sc v9 itu nomor nya diatas*
*[base]*
*Wa-Bot Md*
*KannaBot Md V1*
*[tqto]*
Terima kasih kepada base di atas dan pembuatnya
Terima kasih kepada Baileys untuk menyediakan libraly Gratis
Dont forget For donate bro
Al Md All Reversed
*[Powered By Al Akazamd]*

`
     let fotonyaa = "https://telegra.ph/file/c8307b624a194c2a056b8.jpg"
       await conn.sendMessage(m.chat, {
          image: { url: fotonya },
          caption: caption.trim()
        });
  await conn.sendFile(m.chat, './audio/akaza.mp3');

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
};

handler.help = ['makermenu'];
handler.tags = ['main'];
handler.command = /^(maker|menumaker|makermenu)$/i;
handler.register = false;
export default handler;