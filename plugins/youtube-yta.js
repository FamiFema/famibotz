import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

var handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Urlnya Mana, Bro? >:(';
  m.reply('Tunggu sebentar...');

  const [url, buffer] = args[0].split('|');
  if (!url) throw 'Format URL salah. Gunakan seperti ini: .yta link|128kbps';
  if (!buffer) throw 'Buffer tidak ditentukan. Gunakan seperti ini: .yta link|128kbps';

  const v = url;
  const availableBuffers = ['64kbps', '128kbps', '192kbps', '256kbps', '320kbps'];

  if (!availableBuffers.includes(buffer)) {
    return conn.reply(m.chat, `Buffer '${buffer}' tidak tersedia. Pilih dari: ${availableBuffers.join(', ')}`, m);
  }

  try {
    const yt = await youtubedl(v).catch(async () => await youtubedlv2(v));
    const dl_url = await yt.audio[buffer].download();
    const ttl = await yt.title;
    const size = await yt.audio[buffer].fileSizeH;

    const info = `
• Judul: ${ttl}
• Ukuran: ${size}
• Link YouTube: ${v}`;

    await m.reply(info);

    let doc = {
      audio: {
        url: dl_url,
      },
      mimetype: 'audio/mp4',
      fileName: `${ttl}.mp3`,
    };

    return conn.sendMessage(m.chat, doc, { quoted: m });
  } catch (e) {
    console.error(e);
    throw 'Terjadi kesalahan saat mengunduh audio.';
  }
};

handler.tags = ['downloader'];
handler.help = ['ytmp3'];
handler.command = /^yta|ytmp3|youtubemp3$/i;
handler.limit = true;

export default handler;
