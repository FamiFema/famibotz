import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Hay adakah yang bisa saya bantu??`;
  let name = conn.getName(m.sender)
const akazareal = encodeURIComponent(text); 
  global.db.data.users[m.sender].limit -= 2000
  let zamd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${global.lolkey}&text=${akazareal}&user=${name}`);
  let hasil = await zamd.json();
  m.reply(hasil.result)
};

handler.help = ['oiza'];
handler.tags = ['ai'];
handler.command = /^(oiza)$/i;
handler.limit = true;

export default handler;