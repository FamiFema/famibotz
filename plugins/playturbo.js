import fetch from 'node-fetch';
//coded by akazamd
let handler = async (m, { conn, text }) => {
  if (!text || !text.includes("|")) {
    throw 'Contoh penggunaan: .playturbo dj dalinda|video atau .playturbo dj dalinda|audio';
  }

  let [judul, jenis] = text.split("|");
  judul = judul.trim();
  jenis = jenis.trim().toLowerCase();

  if (jenis !== 'video' && jenis !== 'audio') {
    throw 'Jenis yang diperbolehkan hanya "video" atau "audio".';
  }

  m.reply('Tunggu sedang melakukan permintaan...');

  let zafetch = await fetch(`https://api.akuari.my.id/downloader/play2?query=${judul}`);
  let res = await zafetch.json();

  let caption = `
  Judul: ${res.info.title}
  Creator: ${res.info.channel}
  Size: ${res.urldl_video.size}
  Quality: ${res.urldl_video.quality}
  Upload Date: ${res.info.uploadDate}
  Jumlah Tayangan: ${res.info.views}
  `;
  let caption2 = `
  Judul: ${res.info.title}
  Creator: ${res.info.channel}
  Size: ${res.urldl_audio.size}
  Upload Date: ${res.info.uploadDate}
  Jumlah Tayangan: ${res.info.views}
  *VIDEO SEDANG DI DOWNLOAD MOHON TUNGGU SEBENTAR YA*
  `;

  if (jenis === 'video' && res.urldl_video.link) {
    conn.sendMessage(m.chat, { video: { url: res.urldl_video.link }, caption: caption }, m);
  } else if (jenis === 'audio' && res.urldl_audio.link) {
    const audioDoc = {
      audio: {
        url: res.urldl_audio.link,
      },
      mimetype: 'audio/mp4',
      fileName: `${judul}.mp4`,
    };
    await m.reply(caption2);
    await conn.sendMessage(m.chat, audioDoc, m, { caption: caption }, { quoted: m });
  } else {
    conn.reply(m.chat, 'Tidak ada hasil yang cocok dengan jenis yang diminta.', m);
  }
};

handler.help = ['.playturbo <judul>|<video atau audio>'];
handler.tags = ['downloader'];
handler.command = /^playturbo$/i;
handler.exp = 0;
handler.register = false;
handler.premium = true;

export default handler;