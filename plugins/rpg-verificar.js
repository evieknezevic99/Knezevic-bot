import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `𝙔𝙖 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 🤨`
  if (!Reg.test(text)) throw `${mg}✳️ 𝙐𝙨𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix + command} nombre.edad*\n📌𝙀𝙟𝙚𝙢𝙥𝙡𝙤 : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ 𝐄𝐥. 𝐧𝐨𝐦𝐛𝐫𝐞 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐯𝐚𝐜𝐢𝐨'
  if (!age) throw '✳️ 𝐋𝐚 𝐞𝐝𝐚𝐝 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐞𝐬𝐭𝐚 𝐯𝐚𝐜𝐢𝐚'
  if (name.length >= 30) throw '✳️ 𝐅𝐮𝐚𝐚𝐚, 𝐪𝐮𝐞 𝐧𝐨𝐦𝐛𝐫𝐞 𝐭𝐚𝐥 𝐥𝐚𝐫𝐠𝐨𝐨𝐨𝐨𝐨' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 𝐏𝐚 𝐞𝐬𝐭𝐚 𝐯𝐢𝐞𝐣𝐨𝐬'
  if (age < 5) throw '🚼  𝐕𝐫𝐠 𝐥𝐨𝐬 𝐛𝐞𝐛𝐞𝐬 𝐬𝐚𝐛𝐞𝐧 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫? ✍️😳 '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 2
  let sn = createHash('md5').update(m.sender).digest('hex')
  await conn.reply(m.chat,  `━━〔 *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎*〕━━

დ *𝐍𝐨𝐦𝐛𝐫𝐞:* ${name}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
დ *𝐄𝐝𝐚𝐝:* ${age} 𝐚𝐧̃𝐨𝐬`, fkontak, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: [nna, nn, md, yt, tiktok].getRandom()}}})
await m.reply(`${sn}`)}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler
