const Emitter = require('events');

const emitter = new Emitter();

emitter.on('massage',(date,second,third)=>{
    console.log('Ви надіслали повідомлення '+date);
    console.log('Другий аргумент '+second);
})
const MESSAGE = process.env.message || '';

if(MESSAGE){
    emitter.emit('massage',MESSAGE,123)
}else{
    emitter.emit('massage',MESSAGE,'Ви невказали повідомлення')
}
