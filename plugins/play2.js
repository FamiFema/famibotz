import { youtubeSearch } from '@bochilteam/scraper';
import fs from 'fs';
import ytdl from 'ytdl-core';
import util from 'util';

const handler = async (m, { conn, text, usedPrefix }) => {
  try {
    if (!text) throw `Use it like this: ${usedPrefix}play2 naruto blue bird`;
    
    m.reply('Searching...');
    let search = await youtubeSearch(text);
    
    if (!search || !search.video || !search.video[0]) throw 'Video not found, try another title';
    
    m.reply('Found, now downloading the video...');
    global.db.data.users[m.sender].limit -= 3000;
    let vid = search.video[0];
    let { authorName, title, thumbnail, duration, viewH, publishedTime, url } = vid;
    
    const downloadMp3 = async (Link) => {
      try {
        await ytdl.getInfo(Link);
        let mp3File = `audio_${Math.floor(Math.random() * 1000000)}.mp3`;
        
        ytdl(Link, { filter: 'audioonly' })
          .pipe(fs.createWriteStream(mp3File))
          .on('finish', async () => {
            await conn.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m });
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        m.reply(`${err}`);
      }
    }
    
    await downloadMp3(url);
  } catch (err) {
    m.reply(`${err}`);
  }
};

handler.help = ['play2'].map(v => v + ' <search>');
handler.tags = ['downloader'];
handler.command = /^play2$/i;
handler.exp = 0;
handler.limit = 3000;
handler.level = 11;

export default handler;