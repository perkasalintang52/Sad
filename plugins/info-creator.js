let handler = async (m, { conn }) => {
let caption = `-------[*OWNER*]-------
https://wa.me/6281322667077 (Romli)
https://wa.me/6281215710462 (Naii)

📮 Note: 
•》Owner tidak menerima save
•》Chat aneh" ga bakal di tanggapi
•》Dilarang Spam or telpon
_Segitu Ajah_
conn.sendButton( m.chat, caption, `©️ 2022 ZxyuuBotz`, `Omke Banh🖒`, `thanks`, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
