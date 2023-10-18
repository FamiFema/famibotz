/*
𝐀𝐮𝐭𝐡𝐨𝐫 : AKAZA_MD
Base : game wabot md dan kannabot md
🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿🗿
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let wktugeneral = `${wibh}:${wibm}:${wibs}`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


/*============= MAIN INFO =============*/
global.autoTyping = true // ubah ke true buat autotyping kalo gamau false mati ye aowkwkwkw
global.owner = [['6283843362676', 'AKAZA_MD', true]]
global.mods = [
['6283843362676']
]
global.prems = ['6283843362676']
global.nomorbot = [['6283843362676']]
global.nomorown = [
  ['6283843362676'],
  ['62882021343518']
] // Tambain no mor lu disini
global.nomorwa = '6283843362676'
global.site = 'web.alandikasaputra.repl.co'
global.sepuh = [['62882021343518']]
/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'AKAZA_MD'
global.namebot = 'AKAZA_MDV11'
global.wm = '© AKAZA_MD_V11 BY AKAZAMD'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\ngithub.com/Aal-oss\n\nAKAZA_MDV11\n${owner}`
global.stickauth = `© AKAZA_BOT_MD BY AKAZAMD`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

global.nameown1= 'AKAZA'
global.nameown2 = 'AKAZA'
global.Linkgc = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'
global.lynk = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'
global.sgc = 'https://chat.whatsapp.com/KNco6fyw228K9qFVvoIPSH'

//*============= COSMED =============*/
global.sig = '-'
global.sgh = 'https://github.com/Aal-oss' //github
global.sdc = '-' //discord
global.snh = '-'

/*============= TAMPILAN =============*/
global.ListHargaSewa = '*├ 10 Hari IDR 5.000\n├ 15 Hari IDR 8.000\n├ 15+5 Hari IDR 13.000\n├ 30 Hari IDR 20.000*'
global.LyAtas1 = '*☰ ━━━ ❨*'
global.LyAtas2 = '*❩ ━━┄┈ •⟅*'
global.Ly = '*┃*'
global.lybwh = '*┗━━┈┈ ⳻⳻*'
global.sym = '*◈▻*'
global.sym2 = '*➭*'
global.dmenut = '*ଓ═┅═━–〈*' //top
global.dmenub = '*┊↬*' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '*┅═┅═❏ *HALAMAN UTAMA* ❏═┅═┅*'
global.cmenut = '*❏––––––『*' //top
global.cmenuh = '*』––––––*' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '*\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     *'
global.pmenus = '✦'
global.htki = '*––––––『*' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['*⛶*','*❏*','*⫹⫺*']

/*============= RESPON =============*/
global.stiker_wait = 'sek🗿...'
global.wait = 'Please Wait...'
global.eror = 'Error bjir aowkwkw'

/*============= RESPON GAME =============*/
global.benar = 'Bener'
global.salah = 'mayan lah🗿'
global.dikit = "Kurang dikit padahal🗿"

/*============= WATERMARK =============*/
global.readMore = readMore
global.author = 'AKAZA_MD'
global.namebot = 'AKAZA_MDV11'
global.wm = '© AKAZA_MD_V11 BY AKAZAMD'
global.watermark = wm
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.stickpack = `Sticker Dibuat dengan ${namebot}\ngithub.com/Aal-oss\n\nAKAZA_MDV11\n${owner}`
global.stickauth = `© AKAZA_BOT_MD BY AKAZAMD`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`

/*============= RPG GAME =============*/
global.multiplier = 200// The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🗿',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
/*============= DONASI =============*/
global.pdana = '6283843362676'
global.povo = '-'
global.pgopay = '083843362676'
global.plinkaja = '-' //link aja
global.ppulsa = '083843362676'
global.ppulsa2 = '083843362676'
global.psaweria = '-'


/*============= WEB API KEY =============*/
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.lolkey = 'd08ee7b5f60be15286356e40' //buy API at https://api.lolhuman.xyz
global.fg = 'H6MoiQTj'//buy di https://api-fgmods.ddns.net/ (api sedang mati)
global.fg2 = 'HVxCizzv'// buy di https://api-fgmods.ddns.net/ (mati )
global.lankey = 'HYoauZFG' //buy API at https://api.lannn.me/
global.botcahx = 'ueaAzx8P' //https://api.botcahx.live/
global.uptime = 'u2216792-9a23a0f8d019389b5caec37f' // Masukin APIKEY uptimerobot kamu disini ===== https://uptimerobot.com/dashboard?ref=website-header#mySettings
global.xzn = 'akazaa' //daftar sendiri jika key habis https://xzn.wtf/
global.xyro = 'AdKElWTHbd' //https://api.xyroinee.xyz/
global.ryzen = 'd2d8bf10'
//kalo mau work ambil apikei di https://api.ryzendesu.com/
global.hugging = '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'
//kalo ini mah no limit
global.oni = 'iqYPEC6DlJTZ' //ambil apikey di oni-chan.my.id
global.APIs = {
  // name: 'https://website'
  lol: 'https://api.lolhuman.xyz',
  malas : 'https://xzn.wtf',
  erde: 'https://api.erdwpe.com',
  xyro : 'https://api.xyroinee.xyz' //web api terserah ganti apa aja (buat welcome sama leave gc)
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'd08ee7b5f60be15286356e40',
  'https://xzn.wtf': 'akaza',
}

/*============= OTHER =============*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
global.giflogo = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
global.thumbs = ['https://telegra.ph/file/c8307b624a194c2a056b8.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg' //ini juga ganti 
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/a7ac2b46f82ef7ea083f9.jpg']
global.thumblvlup = [
  'https://telegra.ph/file/c8307b624a194c2a056b8.jpg',
  'https://telegra.ph/file/6bc4e87932d7ea57b79ef.jpg',
  'https://telegra.ph/file/bc2302ee38daa46c094ea.jpg',
  'https://telegra.ph/file/c552a9fb2848811247f82.jpg'
]

global.dtu = 'INSTAGRAM'
global.urlnya = "-"
global.dtc = 'CALL OWNER'
global.phn = '083843362676'

/*============= JANGAN DIUBAH =============*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/c8307b624a194c2a056b8.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.magenta("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})