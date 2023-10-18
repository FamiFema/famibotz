import fs from 'fs';

// Fungsi untuk membaca database.json
function readDatabase() {
  try {
    const data = fs.readFileSync('store.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { Write: { list: {} } };
  }
}

// Fungsi untuk mengambil teks berdasarkan ID
function getListById(id) {
  const data = readDatabase();
  const lists = data.Write.list;

  if (id in lists) {
    return lists[id];
  } else {
    return null; // ID tidak ditemukan
  }
}

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan ID daftar untuk mengambil teksnya.';
  
  // Mengambil teks dari database berdasarkan ID
  const listText = getListById(text);

  if (listText) {
    // Mengirim teks yang berhasil diambil
    conn.reply(m.chat, `Teks dari ID ${text}: ${listText}`, m);
  } else {
    // Menampilkan pesan jika ID tidak ditemukan
    conn.reply(m.chat, `ID ${text} tidak ditemukan.`, m);
  }
}
handler.help = ['getlist']
handler.command = /^(getlist)$/i
handler.tags = ['owner'];
export default handler;