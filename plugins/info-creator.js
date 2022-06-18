let handler = async (m, { conn }) => {
let caption = `_*-----[ *OWNER* ]-----*_

》 https://wa.me/6281322667077 (Romli)
》 https://wa.me/6281215710461 (Naii)

📮Note: 
 》 Owner Tidak Menerima Save
 》 Dilarang chat Aneh"
 》 Dilarang Spam or telpon

_Dah segitu Ae_`


conn.sendButton( m.chat, caption, `©️ 2022 ZxyuuBotz`, `Omke Banh🖒`, `.menu`, m)

       }
       
handler.customPrefix = /^(owner|creator)/i
handler.command = new RegExp
module.exports = handler
