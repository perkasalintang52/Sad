const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
	/*conn.p[id] = [
	await conn.sendContact(m.chat, numberowner, nameowner, { contexInfo: { forwardingScore: 99999, isForwarded: true } })
              conn.sendContact(m.chat, numberowner2, nameowner2, { contexInfo: { forwardingScore: 99999, isForwarded: true })
        ]*/
	await delay(100)
  return conn.sendMessage(m.chat, { text: `*Hallo kak* @${await m.sender.split('@')[0]},
-----[Owner]-----
https://wa.me/6281322667077 (Romli)
https://wa.me/6281215710461 (Naii)

Note:
》 Dilarang chat aneh"
》 Dilarang Telpon or Vc
》 Owner tidak menerima Save
_Dah Segitu ajah_`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
