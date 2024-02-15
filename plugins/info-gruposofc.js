let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*𝐇𝐨𝐥𝐚 👋🏻, 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬, 𝐭𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐞𝐭𝐞 𝐚𝐥 𝐆𝐫𝐮𝐩𝐨𝐬 𝐝𝐞 ${wm} 𝐩𝐚𝐫𝐚 𝐩𝐚𝐬𝐚𝐫 𝐮𝐧 𝐫𝐚𝐭𝐨 𝐚𝐠𝐫𝐚𝐝𝐚𝐛𝐥𝐞 𝐮𝐬𝐚𝐧𝐝𝐨 𝐞𝐥 𝐁𝐨𝐭 𝐨 𝐩𝐥𝐚𝐭𝐢𝐜𝐚𝐧𝐝𝐨 𝐜𝐨𝐧 𝐥𝐚 𝐟𝐚𝐦𝐢𝐥𝐢𝐚 𝐝𝐞 ${wm}

* *${nn}*
  
* 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥 𝐝𝐞 𝐋𝐨𝐥𝐢𝐁𝐨𝐭-𝐌𝐃 💫
* *${nnn}*

* Infomarte sobre las nuevas actualizaciones del bot
* *${nna}*
 
* *¡Visita todos los enlaces oficiales en un único lugar!*
https://atom.bio/lolibot

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*
* *${nnnttt}*`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: nna}}})
//conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝙏𝙝𝙚-𝙇𝙤𝙡𝙞𝘽𝙤𝙩-𝙈𝘿', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.register = true
export default handler
