let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `💝 𝑳𝒊𝒔𝒕𝒂 𝒅𝒆 𝒓𝒆𝒍𝒂𝒄𝒊𝒐𝒏
*╭•·–––––––––––––––––––·•*
│ *𝑻𝒐𝒕𝒂𝒍 : ${relacion.length} 𝑼𝒔𝒖𝒂𝒓𝒊𝒐* ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Pareja' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.sendButton(m.chat, caption, `💟 𝑴𝒊 𝒑𝒂𝒋𝒆𝒓𝒂 ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ *No tiene Pareja*`}\n${wm}`, null, [ 
['𝑴𝒆𝒏𝒖 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i

export default handler
