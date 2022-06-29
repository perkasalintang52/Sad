let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let zxyuu = 'https://telegra.ph/file/0487cb2df67c66d2ed7c5.jpg'
await conn.send2ButtonImg(m.chat, zxyuu, "*Mau Apa Tag owner Gua Ngab????🤨*", '*📮: Ada yang bisa saya bantu?*', 'OWNER', '.owner', 'KEMBALI', '.menu', m)
                        
}
handler.customPrefix = /@6281322667077/i
handler.command = new RegExp

module.exports = handler
