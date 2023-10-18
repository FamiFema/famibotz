import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import jimp from "jimp";
import PhoneNumber from "awesome-phonenumber";

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
    let name = await conn.getName(m.sender);
    let ucpn = `${ucapan()}`;
    let namaowner = await conn.getName('6283843362676@s.whatsapp.net');
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
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset 0 is 0.00
    // Offset 420 is 7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    let caption = `*[🧊Hello ${name}]*
*Selamat Datang Di List Menu AkazaMd*
*(Powered By Akazamd)*
*(Menu)*
*.allmenu* (menampilkan semua menu bot )
*.makermenu* (menampikan menu maker)
*.aimenu* (menampilkan menu chat ai)
*.downloadermenu* (menampilkan menu download)
*.funmenu* (menampikan menu fun)
*[Note]:* Bot ini menggunakan limit.
 Jika kamu kehabisan limit,
bisa ketik command seperti di bawah ini
*.daily* (claim harian)
*.weakly* (claim mingguan)
*.Yearly* (claim tahunan)
*.claimabad* (claim per abad)
*[Credits]:*
 Bot ini menggunakan base script Kannabotv2 (30%)
games-WaBot-Md (40%)
Hwv22 (30%)
*[Note2]:* Jika ingin request fitur,
Silahkan chat 6283843362676
Note owner slow respond. 
Jangan spam atau akan di block
*[Harga]:* Script Bot Ini dihargai sebagai berikut
*5k 1update no apikey*
*10k 2update free apikey*
*20k 4update free full apikey*
*[List Jualan]:* Sc Almd: mulai 5k
Sc hwv22: 7k\nsc bot campuran v8: 9k
Jasa culik member:
50 member 1k
100 member 3k
200 member 4k
300 member 9k
Jika masih kemahalan boleh kok tawar menawar asal ngotak aja
*[Info botz]:* 
Lib: adiwajshing/baileys dan whiskeysockets/baileys
Fitur: ketik .totalfitur
Author: Akazamd
Version Botz: 12.5
__________________________/`;
//bisa pakai sesuai selera kalian
// kalo mau pake tinggal hapus /**/ sisahkan satu yang mau dipake
//jangan sampai ada dua sendMessage kalo tidak bot akan jadi slow dan lemot dan error
/*    await conn.sendMessage(m.chat, {
                        text: caption.trim(),
video: { url: 'https://telegra.ph/file/915ce708cbec1846c0c9b.mp4' },
                        gifPlayback: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: false,
                                title: "AL Md Akazamd",
                                body: `Bot Created By Akazamd`,
                                sourceUrl: global.sgc,
                                mediaType: 2
                            }
                        }
                    }, {
                        quoted: m
                    })*/
/*conn.sendMessage(m.chat, {
video: { url: 'https://telegra.ph/file/915ce708cbec1846c0c9b.mp4' },
                        caption: caption.trim(),
                        gifPlayback: true
                    }, {
                        quoted: m
                    })*/
/*conn.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "2",
                           scheduledTimestampMs: 1200,
                           title: caption.trim()
                        }
                    }, {})*/
await conn.sendMessage(m.chat, {
    image: { url: global.thumb },
    mimetype: 'image/png',
    caption: caption.trim(),
    gifAttribution: 1,
    contextInfo: {
        externalAdReply: {
            title: 'akaza',
            body: 'Powered by akaza',
            thumbnailUrl: "https://telegra.ph/file/c8307b624a194c2a056b8.jpg",
            sourceUrl: global.sgc,
            mediaType: 1,
            showAdAttribution: false,
            renderLargerThumbnail: true
        }
    }
}, { quoted: m })
}

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(menu|menu1|m)$/i;
handler.register = false;
export default handler;

// Function

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
    return [ye, ' *Years️*\n',  mo, ' *Month*\n', d, ' *Days*\n', h, ' *Hours*\n', m, ' *Minute*\n', s, ' *Second*'].map(v => v.toString().padStart(2, '0')).join('');
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "Dini kak";
    if (time >= 4) {
        res = "Pagi kak";
    }
    if (time >= 10) {
        res = "Siang kak";
    }
    if (time >= 15) {
        res = "Sore kak";
    }
    if (time >= 18) {
        res = "Malam kak";
    }
    return res;
}