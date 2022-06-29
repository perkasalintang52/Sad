let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/abff2f2c3398c30703d47.png', m, { packname: "Stiker", author: "By ZxyuuBotz" })
}

handler.customPrefix = /^(cok|anj|anjg|anjing|gblk|goblok|goblog|asu|ashu|asw|ngntd|ngentod|memek|mmk|kontol|kntl)$/i
handler.command = new RegExp

module.exports = handler
