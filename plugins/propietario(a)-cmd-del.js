let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝙄𝙣𝙛𝙤❗] 𝑺𝒐𝒍𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒂𝒔𝒊𝒈𝒏𝒂𝒓 𝒕𝒆𝒙𝒕𝒐𝒔 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐  𝒂𝒔𝒊𝒈𝒏𝒂𝒅𝒐 𝒂 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒆 𝒊𝒎𝒂𝒈𝒆𝒏, 𝒑𝒂𝒓𝒂 𝒐𝒃𝒕𝒆𝒏𝒆𝒓 𝒆𝒍 𝒄𝒐́𝒅𝒊𝒈𝒐 𝒂𝒔𝒊𝒈𝒏𝒂𝒅𝒐 𝒖𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝙄𝙣𝙛𝙤❗] 𝑺𝒐𝒍𝒐 𝒆𝒍 𝒐𝒘𝒏𝒆𝒓 𝒑𝒖𝒆𝒅𝒆 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒄𝒊𝒐́𝒏*'
delete sticker[hash]
m.reply(`*[ ✔ ] 𝑬𝒍 𝒕𝒆𝒙𝒕𝒐/𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒂𝒔𝒊𝒈𝒏𝒂𝒅𝒐 𝒂𝒍 𝒔𝒕𝒊𝒄𝒌𝒆𝒓/𝒊𝒎𝒂𝒈𝒆𝒏 𝒇𝒖𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐 𝒅𝒆 𝒍𝒂 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
