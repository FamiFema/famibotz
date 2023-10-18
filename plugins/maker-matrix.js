import fetch from "node-fetch";
const rewards = {
  limit: 2000,
  money: 5000,
};
let handler = async (m, { conn, text, }) => {
let user = global.db.data.users[m.sender];
  if (!text) throw "Masukkan Parameter";

 for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] -= rewards[reward];
  }
  m.reply("proses..");

  let res = await fetch(`https://api.akuari.my.id/textpro/scraper-1?text=${text}&link=https://textpro.me/matrix-style-text-effect-online-884.html`);
let ris = await res.json();
let rus = ris.respon;
  await conn.sendMessage(m.chat, {
          image: { url: rus },
          caption: " Ni "
        });
};

handler.help = ["matrix"].map((v) => v + " <text>");

handler.tags = ["maker"];

handler.command = /^(matrix)$/i;

handler.register = true



handler.limit = 2000
handler.money = 5000



export default handler