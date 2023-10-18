let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
    if (!text && !m.quoted) return m.reply("Input text\nReply pesan");
    
    let params = text.split("|");
    if (params.length < 3) return m.reply("Masukkan warna dan font contoh #000|7");
    
    let q = params[1].trim();
    let font = parseInt(params[2].trim());
    
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    let count = get.length;
    let sentCount = 0;
    m.reply(wait);
    
    for (let i = 0; i < get.length; i++) {
        setTimeout(function() {
            if (text) {
                conn.sendMessage('status@broadcast', {
                    text: text
                }, {
                    backgroundColor: q,
                    font: font,
                    statusJidList: [get[i]]
                });
            } else if (m.quoted) {
                conn.copyNForward(get[i], m.getQuotedObj(), false);
            } else if (text && m.quoted) {
                conn.sendMessage('status@broadcast', {
                    text: text + "\n" + m.quoted.text
                }, {
                    backgroundColor: '#315575',
                    font: 3,
                    statusJidList: [get[i]]
                });
            }
            count--;
            sentCount++;
            if (count === 0) {
                m.reply(`Berhasil Push sw:\nJumlah Pesan Terkirim: *${sentCount}*`);
            }
        }, i * 40);
    }
}

handler.help = ['pushsw']
handler.tags = ['owner']
handler.command = /^(pushsw)$/i

handler.owner = true
handler.group = true

export default handler