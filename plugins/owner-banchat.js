let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, '*BOT OFF*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: prueba.getRandom()}}}) 
//m.reply(`*BOT OFF*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|ban2|banchat1$/i
handler.botAdmin = true
handler.admin = true 
export default handler
