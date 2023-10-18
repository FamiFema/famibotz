import fs from 'fs';

// Fungsi untuk membaca database.json
function readDatabase() {
  try {
    const data = fs.readFileSync('store.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { lists: {} };
  }
}

// Fungsi untuk menambahkan daftar ke database.json
function addListToDatabase(text) {
  const data = readDatabase();
  const lists = data.lists;
  
  // Menghasilkan ID unik
  const id = `Id${Object.keys(lists).length + 1}`;
  
  // Menambahkan daftar ke dalam database
  lists[id] = { text };
  
  try {
    // Menyimpan perubahan ke dalam database.json
    fs.writeFileSync('store.json', JSON.stringify(data, null, 2), 'utf8');
    return id;
  } catch (error) {
    console.error('Error writing to database:', error);
    return null;
  }
}

// Fungsi untuk membuat file store.json jika belum ada
function createDatabaseIfNotExists() {
  if (!fs.existsSync('store.json')) {
    const initialData = { lists: {} };
    fs.writeFileSync('store.json', JSON.stringify(initialData, null, 2), 'utf8');
  }
}

createDatabaseIfNotExists(); // Panggil fungsi ini untuk memeriksa dan membuat file jika perlu

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan teks untuk ditambahkan ke daftar.';
  
  // Menambahkan daftar ke dalam database
  const id = addListToDatabase(text);
  
  if (id) {
    // Mengirim pesan konfirmasi dengan ID daftar yang telah ditambahkan
    conn.reply(m.chat, `Daftar berhasil ditambahkan dengan ID: ${id}`, m);
  } else {
    // Menampilkan pesan jika terjadi kesalahan
    conn.reply(m.chat, 'Terjadi kesalahan saat menambahkan daftar.', m);
  }
}
handler.help = ['addlist']
handler.command = /^(addlist)$/i
handler.tags = ['owner'];
export default handler;