const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

// console.log('Start')

// fs.mkdir(path.resolve(__dirname,'dir'),(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("Папка створена")
// })
// console.log('end')

// fs.rmdir(path.resolve(__dirname,'dir'),(err)=>{
//     if(err){
//         throw err;
//     }
// })
// fs.writeFile(path.resolve(__dirname,'test.txt'),'5 qwertu 7 8 7 8',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Файл записано')
//     fs.appendFile(path.resolve(__dirname,'test.txt'),' Добавити в кінець',(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('Файл записано')
    
//     })

// })
const writeFileAsuns = async(path,data)=>{
    return new Promise((resolve,rejects) =>fs.writeFile(path,date,(err) =>{
        if(err){
            return rejects(err.massage)
        }
        resolve()
    }))
}
const appendFileAsuns = async(path,data)=>{
    return new Promise((resolve,rejects) =>fs.appendFile(path,data,(err) =>{
        if(err){
            return rejects(err.massage)
        }
        resolve()
    }))
}
writeFileAsuns(path.resolve(__dirname,'test.txt'),'data')
    .then(()=>appendFileAsuns('123'))
    .then(()=>appendFileAsuns('456'))
    .then(()=>appendFileAsuns('578'))
    