exports.donate = (id, A187, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${A187}*
╠════════════════════
║├≽️⚜ *DANA*: _0823-3432-3905_
║├≽️⚜ *PULSA*: _0823-3432-3905_
║├≽️⚜ *GOPAY*: _0823-3432-3905_
╠════════════════════
║  *${A187}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${A187}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY ADG-BOT*_
╚════════════════════`
}

