import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let MessageType = (await import(global.baileys)).default
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
${mg}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼

*${usedPrefix + command} efecto*

𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉
𝙀𝙅𝙀𝙈𝙋𝙇𝙊
*${usedPrefix + command} blue*

𝙀𝙁𝙀𝘾𝙏𝙊𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎
${effects.map(effect => `_» ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${fg}𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`
if (!/image\/(jpe?g|png)/.test(mime)) throw `${ag}𝙀𝙇 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 *jpg or jpeg*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`${fg}𝙉𝙊 𝙎𝙀 𝙋𝙐𝘿𝙊 𝙃𝘼𝘾𝙀𝙍 𝙇𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙎𝙄𝙊𝙉, 𝙀𝙉 𝙎𝙐 𝙇𝙐𝙂𝘼𝙍 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2|stickerefecto|efectosticker|filtrosticker|stickerfiltro)$/i
export default handler
