let handler = async (m, { conn }) => {
let rest = 'https://caliphapi.com/api/darkjokes?apikey=LQzZsX3D'
    conn.sendButtonImg(m.chat, rest, 'Dark? 🤨', wm2, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun']
handler.command = /^(dragjokes|darkjokes)$/i

module.exports = handler
