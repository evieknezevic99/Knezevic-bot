let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `*╼╼╼╼╼╼╼[ 💖 DONACION 💖 ]╾╾╾╾╾╾╾╾*\n\n*Hola 👋, si quieres apoyar este proyecto, puedes hacerlo a través de donaciones voluntarias por PayPal o Mercado Pago Arg.*\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️Paypal:*\n• https://www.paypal.com/paypalme/elrebelde21\n\n╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍\n\n*❇️Mercado pago:*\n*• Alias :* elrebelde21\n*• CVU :* 0000003100059201491917`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": 'ᴾᵘᵉᵈᵉ ᵃᵖᵒʸᵃʳᵐᵉ ᶜᵒᵐᵖᵃʳᵗᶦᵉⁿᵈᵒ ᵉˢᵗᵒˢ ʸ ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ʳᵉᵍᵃˡᵃʳᵐᵉ ᵘⁿᵃ ⭐ ᴳʳᵃᶜᶦᵃˢ', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": 'https://www.paypal.com/paypalme/elrebelde21', 
"sourceUrl": 'https://www.paypal.com/paypalme/elrebelde21', 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ɢɪᴛʜᴜʙ', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|creditos$/i
handler.exp = 80
handler.register = true
export default handler
