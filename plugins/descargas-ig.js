import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import instagramGetUrl from 'instagram-url-direct'
import vm from 'node:vm'
import { instagram } from "@xct007/frieren-scraper";
import { instagramdl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        }, 
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.instagram.com/tv/Cd8U99IloVA/?igshid=YmMyMTA2M2Y=*`
  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
try {
const datTa = await instagram.v1(args[0])
if (datTa.error) return m.reply(`${datTa.message}`);
for (let urRRl of datTa) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${urRRl.url}`)).text()    
let tXXxt = `✨ *ENLACE:* ${shortUrRRl}\n\n${wm}`.trim()    
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m)    
await new Promise(resolve => setTimeout(resolve, 10000))}
} catch {  
try {  
const AA = await savefrom(args[0])    
let shortUrl222 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt222 = `✨ *ENLACE:* ${shortUrl222}\n\n${wm}`.trim()
await conn.sendFile(m.chat, AA.url[0].url, 'error.mp4', txt222, m)
} catch {
console.log('Error en el intento 1')  
try {    
const resultss = await instagramGetUrl(args[0]).url_list[0]    
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `✨ *ENLACE:* ${shortUrl2}\n\n${wm}`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
} catch {  
console.log('Error en el intento 2')  
try {
const resultssss = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt4 = `✨ *ENLACE:* ${shortUrl3}\n\n${wm}`.trim()
for (const { url } of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
} catch {
console.log('Error en el intento 3')  
try {   
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `✨ *ENLACE:* ${shortUrl1}\n\n${wm}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)     
} catch { 
console.log('Error en el intento 4, sin resultados')  
conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()} 𝙀𝙍𝙍𝙊𝙍 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼`, edit: key});
handler.limit = 0
}}}}}}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70
handler.register = true
export default handler
async function savefrom(urlL) {
let body = new URLSearchParams({ "sf_url": encodeURI(urlL), "sf_submit": "", "new": 2, "lang": "id", "app": "", "country": "id", "os": "Windows", "browser": "Chrome", "channel": " main", "sf-nomad": 1 });
let { data } = await axios({ "url": "https://worker.sf-tools.com/savefrom.php", "method": "POST", "data": body, "headers": { "content-type": "application/x-www-form-urlencoded", "origin": "https://id.savefrom.net", "referer": "https://id.savefrom.net/", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36" }});
let exec = '[]["filter"]["constructor"](b).call(a);';
data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
let context = { "scriptResult": "", "i": 0 };
vm.createContext(context);
new vm.Script(data).runInContext(context);
return JSON.parse(context.scriptResult.split("window.parent.sf.videoResult.show(")?.[1].split(");")?.[0])
}
