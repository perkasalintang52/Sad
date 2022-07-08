const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Lintang
item.ORG: ytta!
item1.TEL;waid=6281322577123:6281322577123@s.whatsapp.net
item1.X-ABLabel:Sibuk 
item2.EMAIL;type=INTERNET:Eitss
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩Indonesia;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.URL:https://saweria.co/joceylintangg
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.send2But(m.chat, "*----------[ OWNER ]----------*\n\n• https://wa.me/6281322577123 (Lintang)\n• https://wa.me/6281322577123 (Lintang)\n\n📮Note:\n》 Chat Main' Ga bakal di tanggapi\n》 Dilarang Telpon Or vc\n\n_Dah Segitu ae_", 'SadBoy Botz><', 'Saweria', '.gcbot', 'Menunya', '.menu', sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
