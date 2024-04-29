let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝑩𝒂𝒏_𝒃𝒐𝒕〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت بان 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه بووس لفآججر〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*
*⌬〘 اذا كنت تريد صناعه بوت 〙⌬*
*⌬〘 فعليك الانضمام الي جروبنا 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 واتساب 〙⌬*

*https://chat.whatsapp.com/EW7a27PboPy9Adxh23RNMa*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/+201024480189 ⊱⏣*

*⌬〘 الدعم 〙⌬*

*⏣⊰ https://Solo.to/bøss51-51 ⊱⏣*

*✥━─━⌬〘𝑩𝒂𝒏_𝒃𝒐𝒕〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
