import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    m.reply('sedang di buat')
/*  if (!text) throw 'Mau cari ayat ke berapa? Contoh: .ayat 1';

  try {
    // Mengecek apakah input berisi angka atau bukan
    const ayatNumber = parseInt(text);
    if (!isNaN(ayatNumber)) {
      // Jika input berisi angka, cari ayat berdasarkan nomor ayat
      let zaayat = await fetch(`https://api.akuari.my.id/islami/alquran?query=${ayatNumber}`);
      let za = await zaayat.json();
      let caption = '';
      
      // Memeriksa apakah ayat ditemukan
      if (za.result && za.result.verses) {
        caption += `Ayat ${ayatNumber}:\n`;
        caption += `${za.result.verses[0].text}\n\n`;
      } else {
        throw 'Ayat tidak ditemukan.';
      }

      // Mengirimkan pesan dengan informasi ayat
      conn.sendMessage(m.chat, caption, m);
    } else {
      // Jika input bukan angka, cari ayat berdasarkan kata kunci
      let zaayat = await fetch(`https://api.akuari.my.id/islami/alquran?query=${text}`);
      let za = await zaayat.json();
      let caption = '';

      // Membuat perulangan untuk mencetak semua informasi ayat
      for (const verse of za.result.verses) {
        caption += `Ayat ${verse.number}:\n`;
        caption += `${verse.text}\n\n`;
      }

      // Menambahkan URL suara
      for (const recitation of za.result.recitations) {
        caption += `Recitation by ${recitation.name}\n`;
        caption += `${recitation.audio_url}\n\n`;
      }

      // Menambahkan semua tafsir
      for (const tafsirKey in za.result.tafsir.id.kemenag.text) {
        caption += `Tafsir Ayat ${tafsirKey}:\n`;
        caption += `${za.result.tafsir.id.kemenag.text[tafsirKey]}\n\n`;
      }

      // Mengirimkan pesan dengan semua informasi ayat, URL suara, dan tafsir
      conn.sendMessage(m.chat, caption, m);
    }
  } catch (error) {
    throw 'Terjadi kesalahan saat mengambil data dari API. Silakan coba lagi nanti.';
  }*/
}

handler.help = ['ayat <query>'];
handler.tags = ['islamic'];
handler.command = /^(ayat)$/i;
export default handler;