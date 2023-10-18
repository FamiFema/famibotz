import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Harap berikan pertanyaan yang ingin dijawab.';
  m.reply('Mencari jawaban...');
    let response = await fetch(`https://xzn.wtf/api/openai?text=${text}&apikey=${global.xzn}`);
    let result = await response.json();
    m.reply(result.result);
global.db.data.users[m.sender].limit -= 800;
};

handler.help = ['gpt <text>'];
handler.tags = ['ai'];
handler.command = /^gpt$/i;
handler.limit = 800;
export default handler;