const os = require('os')

console.log(os.uptime())
console.log(os.userInfo())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.group(currentOS)