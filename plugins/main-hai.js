let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c7c5ab6aa01d3d4308d57.png', m, { packname: "Stiker", author: "By ZxyuuBotz" })
}

handler.customPrefix = /^(hai|haii|halo|hallo|bot|botz)$/i
handler.command = new RegExp

module.exports = handler
