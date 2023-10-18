import yargs from 'yargs'
import cfonts from 'cfonts'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import { createInterface } from 'readline';
import server from './uptime.js'

const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))

say('STARTING MODULE PLISS WAIT', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
  say('AKAZA_MD_V11', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
  say('CEKKING RESOURCE', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })
  say('RESOURCE ACCEPT ✅', { font: 'chrome', align: 'center', gradient: ['blue', 'green'] })

var isRunning = false

function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), { font: 'console', align: 'center', gradient: ['red', 'magenta'] })
  setupMaster({ exec: args[0], args: args.slice(1) })
  let p = fork()
  p.on('message', data => {
    console.log('dapat', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('[❗]Exited with code:', code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
}

// Code by akazamd

const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test']) {
  let timer;
  rl.question('Pilih aksi (1: qrcode, 2: code.js:Pairing code Note Jika tidak ada pilihan dalam 14detik maka akan otomatis dijalankannya main.js): ', (answer) => {
    clearTimeout(timer);
    if (answer === '1') {
      start('main.js')
    } else if (answer === '2') {
      start('code.js')
    } else {
      console.log('Pilihan tidak valid.')
      rl.close()
    }
  });

  timer = setTimeout(() => {
    start('main.js');
    rl.close();
  }, 14000);
}
