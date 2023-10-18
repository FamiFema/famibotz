import axios from "axios";
import cheerio from "cheerio";
import PhoneNumber from "awesome-phonenumber";

let handler = async (m, { conn, text }) => {
  if (!text) throw 'nomor siapa ni bang';
  var tosend = text;
  if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`);
  var targetnya = tosend.split('@')[0];
  try {
    let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/");
    let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
    let cookie = ntah.headers["set-cookie"].join("; ");
    let $ = cheerio.load(ntah.data);
    let $form = $("form");
    let url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
    let form = new URLSearchParams();
    form.append("jazoest", $form.find("input[name=jazoest]").val());
    form.append("lsd", $form.find("input[name=lsd]").val());
    form.append("step", "submit");
    form.append("country_selector", "+");
    form.append("phone_number", `+${targetnya}`);
    form.append("email", email.data[0]);
    form.append("email_confirm", email.data[0]);
    form.append("platform", "ANDROID");
    form.append("your_message", `I noticed that a user was using modified WhatsApp, so I asked support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
    Number: +${targetnya}`);
    form.append("__user", "0");
    form.append("__a", "1");
    form.append("__csr", "");
    form.append("__req", "8");
    form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0");
    form.append("dpr", "1");
    form.append("__ccg", "UNKNOWN");
    form.append("__rev", "1007965968");
    form.append("__comment_req", "0");
  
    let res = await axios({
      url,
      method: "POST",
      data: form,
      headers: {
        cookie
      }
    });
    m.reply(`Tunggu 1-24 Jam untuk proses banned dari bot dan tunggu ±30 Detik untuk melihat balasan email dari WhatsApp tuan Hw ModsðŸ¥ºðŸ™`);
    await loading(180000);
    let payload = String(res.data);
    if (payload.includes(`"payload":true`)) {
      reply(`WhatsApp Support:

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`);
    } else if (payload.includes(`"payload":false`)) {
      m.reply(`WhatsApp Support:

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
    } else m.reply(util.format(res.data));
  } catch (err) {
    m.reply(`${err}`);
  }
}

handler.command = ["kenon", "kenon"]; 
handler.help = ['kenon <number>']
handler.tags = ["hangker"]; 
handler.premium = true
handler.owner = true;

export default handler;
