import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {

//let noetiqueta = fs.readFileSync('./media/e.webp')
let stiker = await sticker(imagen1, false, global.packname, global.author)  
let or = ['texto', 'sticker']; 
let media = or[Math.floor(Math.random() * 2)]
if (media === 'sticker') return this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: wm, body: '', sourceUrl: ig, thumbnail: imagen2}}})
if (media === 'texto') return await this.sendMessage(m.chat, {text: ['*QUE YO QUE?*', 'Que?', 'Hola?'].getRandom()}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
/*let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫', body: '©elrebelde', sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`, thumbnail: imagen2}}})}*/
    
return !0 }
export default handler
