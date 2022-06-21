let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://yog-apikey.herokuapp.com/api/textpro/logo-wolf?apikey=YogGanz&text=Yogga&text2=Ganz`
  conn.sendFile(m.chat, res, 'wolflogo.jpg', `Nih kak`, m, false)
}
handler.help = ['wolflogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(wolflogo)$/i

module.exports = handler

