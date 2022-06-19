let handler = async (m, { conn }) => {
let api-hyzer = `https://caliphapi.com/api/aesthetic?apikey=YwWDHebP`
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.aesthetic', m)
}
handler.help = ['aesthetic']
handler.tags = ['random', 'image']
handler.command = /^(aesthetic)$/i

module.exports = handler
