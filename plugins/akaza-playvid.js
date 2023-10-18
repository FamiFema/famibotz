import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`
  m.reply('mencari...')
  
  const r = await yts(text);
  
  if (!r.videos || r.videos.length === 0) throw 'Video Not Found, Try Another Title';
  
  const v = r.videos[0].url;
      const downloadMp4 = async (link) => {
      try {
        await ytdl.getInfo(link);
        const mp4File = `video_${Math.floor(Math.random() * 1000000)}.mp4`;
        ytdl(link)
          .pipe(fs.createWriteStream(mp4File))
          .on('finish', async () => {
            await conn.sendMessage(m.chat, { video: fs.readFileSync(mp4File) }, { quoted: m });
            fs.unlinkSync(mp4File);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    };

  let zafetch = await fetch(`https://api.akuari.my.id/downloader/play2?query=${text}`);
  let res = await zafetch.json();

  let caption = `
  Judul: ${res.info.title}
  Creator: ${res.info.channel}
  Size: ${res.urldl_video.size}
  Quality: ${res.urldl_video.quality}
  Upload Date: ${res.info.uploadDate}
  Jumlah Tayangan: ${res.info.views}
  `;
  
  conn.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: caption
                        }
                    }, {})
  await downloadMp4(audioo);
}

handler.command = /^(playv|playvid|playvideo)$/i;
handler.help = ["playv <judul>"];
handler.tags = ['downloader'];
handler.register = true;
handler.premium = true;
export default handler;