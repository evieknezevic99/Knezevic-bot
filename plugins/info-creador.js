import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, text, args, command }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => '')
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('595986172767' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('595986172767' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'

await conn.sendContactArray(m.chat, [
[`${await conn.getName('595986172767'+'@s.whatsapp.net')}`, `💖 Creadora`, `Paraguay`, ig, bio],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot Ofc`, `📵 No Hacer Spam`, `Paraguay`, md, biobot]
], m)
}
handler.help = ['owner', 'contacto', 'creador', 'contactos']
handler.tags = ['info']
handler.command = /^(owner|contacto|creador|contactos)/i

handler.register = true

export default handler
