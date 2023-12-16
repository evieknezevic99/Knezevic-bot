
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `─̶̸͞𒁹̷̸̶̷᳟᳟࡙⃛̅╈⃝⃟🇧🇷𝐊ᯰ᤻᤻𝗡𝝨⃨ٓࠢࠜ𝖹𝗘̷̸̲̲̲V𝗜𝗖̸̷ 𝐁̶𝚯̸𝐓̸̷ 

*${amix}*

➤ Grupos oficiales del LoliBot
1) *${nn}*

2) *${nnn}*

➤ Grupo del Colaboracion LoliBot, GataBot-MD
 *${nnnt}*

➤ Grupo del colaboración LoliBot, DorratBot-MD
*${nnnt2}*

➤ Grupo del col 3 (sin limite)
*${nnntt}*

➤ Infomarte sobre las nuevas actualizaciones del bot
 *${nna}*
 
➤ Grupos del ayuda sobre el bot
 *${nnntttt}*
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*⇶⃤꙰𝑬𝒏𝒍𝒂𝒄𝒆 𝒍𝒐𝒍𝒊𝒃𝒐𝒕ꦿ⃟⃢*
*${nnnttt}*

┞⃞࠘🇧🇷̶̸̸̷᪵᪵᤺᪰᩵᪰ 𝄈  𝐅࣭𝐌̶𝐋𝐀᪵.  𝐊𝐍̶𝚺࣪𝐙࠘𝐄𝐕𝐈𝐂᤺
https://chat.whatsapp.com/F8TdsJOP55P9Hyldgg3P63`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: prueba.getRandom()}}}) 
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
