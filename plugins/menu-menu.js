import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `⧼⧼⧼ 💖 ${wm} 💖 ⧽⧽⧽

*Hola ${taguser} como esta 👋*

\`ᰔᩚ Creadora:\` Evie Knezevic
\`ᰔᩚ Instagram de la Creadora :\` 
${ig}
\`ᰔᩚ Tiempos activos :\` ${uptime}
\`ᰔᩚ Usuarios:\` ${Object.keys(global.db.data.users).length}
\`ᰔᩚ Registrado:\` ${rtotalreg} de ${totalreg} ${(conn.user.jid == global.conn.user.jid ? '' : `\n□ *Soy un sub bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
    
\`ᰔᩚ 𝐐𝐔𝐈𝐄𝐑𝐄 𝐎𝐁𝐓𝐄𝐍𝐄𝐑 𝐓𝐔 𝐁𝐎𝐓 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐙𝐀𝐃𝐎? :\`
• https://www.facebook.com/elrebelde21

${readMore}
┏━━━━━━ ⧼⧼⧼ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ⧽⧽⧽
┋ 💖 𝐁𝐨𝐭 𝐬𝐢𝐦𝐩𝐥𝐞 𝐬𝐨𝐥𝐨 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 💗
┋ 💖 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 💗
┋ 💖 𝐠𝐞𝐬𝐭𝐢𝐨𝐧 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 💗
┋━━━━━━ ⧼⧼⧼ 💖 𝐈𝐍𝐅𝐎𝐁𝐎𝐓 💖 ⧽⧽⧽ 
┃ᰔᩚ _${usedPrefix}infobot_
┃ᰔᩚ _${usedPrefix}grupos_
┃ᰔᩚ _${usedPrefix}estado_
┃ᰔᩚ _${usedPrefix}status_
┃ᰔᩚ _${usedPrefix}ping_
┃ᰔᩚ _${usedPrefix}enable_
┃ᰔᩚ _${usedPrefix}reporte_
┋━━━━━━ ⧼⧼⧼ 💖 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀 📥 ⧽⧽⧽ 
┃ᰔᩚ _${usedPrefix}play *<texto>*_
┃ᰔᩚ _${usedPrefix}playdoc *<texto>*_
┃ᰔᩚ _${usedPrefix}playlist *<texto>*_
┃ᰔᩚ _${usedPrefix}spotify *<texto>*_
┃ᰔᩚ _${usedPrefix}tiktok *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}instagram *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}gitclone *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}gdrive *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}twitter *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┃ᰔᩚ _${usedPrefix}stickerly *<texto>*_
┃ᰔᩚ _${usedPrefix}imagen *<texto>*_
┃ᰔᩚ _${usedPrefix}pinteret *<texto>*_
┃ᰔᩚ _${usedPrefix}igstalk *<nombre de usuario>*_
┋━━━━━━ ⧼⧼⧼ 💖 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 🔍 ⧽⧽⧽
┃ᰔᩚ _${usedPrefix}google *<texto>*_
┃ᰔᩚ _${usedPrefix}chatgpt_
┃ᰔᩚ _${usedPrefix}ia_
┋━━━━━━ ⧼⧼⧼ 💖 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 👽 ⧽⧽⧽
┃ᰔᩚ _${usedPrefix}sticker *<responder a imagen o video>*_
┃ᰔᩚ _${usedPrefix}qc_
┃ᰔᩚ _${usedPrefix}attp *<texto>*_
┃ᰔᩚ _${usedPrefix}wm *<packname> <author>*_
┋━━━━━━ ⧼⧼⧼ 💖𝐆𝐄𝐒𝐓𝐈𝐎𝐍 𝐆𝐑𝐔𝐏𝐎💎⧽⧽⧽ 
┃ᰔᩚ _${usedPrefix}add *<numero>*_
┃ᰔᩚ _${usedPrefix}kick *<@tag>*_
┃ᰔᩚ _${usedPrefix}grupo *<abrir / cerrar>*_
┃ᰔᩚ _${usedPrefix}promote *<@tag>*_
┃ᰔᩚ _${usedPrefix}demote *<@tag>*_
┃ᰔᩚ _${usedPrefix}link_
┋━ ⧼⧼⧼ 👑 𝐒𝐎𝐋𝐎 𝐏𝐀𝐑𝐀 ─̶̸͞𒁹̷̸̶̷᳟᳟࡙⃛̅╈⃝⃟🇧🇷𝐊ᯰ᤻᤻𝗡𝝨⃨ٓࠢࠜ𝖹𝗘̷̸̸̷ 💖 ⧽⧽⧽ 
┃ᰔ _${usedPrefix}autoadmin_
┃ᰔ _${usedPrefix}leavegc_
┃ᰔ _${usedPrefix}block *<@tag / numero>*_
┃ᰔ _${usedPrefix}unblock *<@tag / numero>*_
┃ᰔ _${usedPrefix}banchat_
┃ᰔ _${usedPrefix}unbanchat_
┃ᰔ _${usedPrefix}banuser *<@tag>*_
┃ᰔ _${usedPrefix}unbanuser *<@tag>*_
┃ᰔ _${usedPrefix}bc *<texto>*_
┃ᰔ _${usedPrefix}restart_
┃ᰔ _${usedPrefix}update_
┃ᰔ _${usedPrefix}addcmd_
┗━━━━━━━━━━━━━━━━━━━━━━━━━`.trim()
conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}})
	 
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
