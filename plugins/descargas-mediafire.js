import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `ingrese un enlace de MediaFire.*\n\n*Ej:* _${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE_`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `━━⪻ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 - 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 ⪼━━━
❥ *Nombre:* ${resEX.filename}
❥ *Tamaño:* ${resEX.filesizeH}
❥ *Extensión:* ${resEX.ext}\n\n
*𝐒𝐞 𝐞𝐬𝐭𝐚́ 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨. 𝐞𝐬𝐩𝐞𝐫𝐞 🏃‍♂️💨...*`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `━━⪻ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 - 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 ⪼━━━\n
❥ *Nombre:* ${name}
❥ *Tamaño:* ${size}
❥ *Extensión:* ${mime}\n\n
*𝐒𝐞 𝐞𝐬𝐭𝐚́ 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨. 𝐞𝐬𝐩𝐞𝐫𝐞 🏃‍♂️💨...*`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('━━⪻ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 - 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 ⪼━━━\n\n*[ ❗ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*');
    }
  }
};
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
handler.register = true
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
