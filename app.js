
require('./cal_sul.js')

console.log('Exchange money')
let stdin =process.openStdin()
stdin.addListener("data",(d)=>{
    a =d.toString().trim()
    console.log(th2dol(a))
    stdin.destroy()
})
