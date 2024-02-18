import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]
const usuario = `@${m.sender.split`@`[0]}`;
if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `${ucapan()} ${usuario} si desea seguir usando el servicio del bot, toda administración, integrante, y más (si se puede debe seguir en ig a la propietaria de este bot)

──   𝗟𝗔𝗗𝗬  ﹙🇧🇷.̸ ﹚𝐄𝗩𝗜𝗘   @   𝗞𝗡𝖤𝗭𝗘𝗩𝖨𝗖

https://instagram.com/_brightness.eyes`, m, {contextInfo: {mentions: [m.sender], externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '﹙🇧🇷.̸ ﹚𝐄𝗩𝗜𝗘   @   𝗞𝗡𝖤𝗭𝗘𝗩𝖨𝗖', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})


user.pc = new Date * 1
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `Buenas`
  if (time >= 4) {
    res = `Buen dias`
  }
  if (time >= 11) {
    res = `Buenas tardes`
  }
  if (time >= 15) {
    res = `Buenas tardes`
  }
  if (time >= 17) {
    res = `Buenas noches`
  }
  return res
} 