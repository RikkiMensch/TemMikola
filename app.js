const MikolaBot = require('node-telegram-bot-api');
const { text } = require('stream/consumers');

const KonText = require('./helpers');
const KeyBoardMenu = require('./helpers');
const DEBUG = require('./helpers');

const TOKEN = '5312048318:AAHk7y4PiI4NSxDlT8KsO0i1EYMvSDv6lrk'


const Mikola = new MikolaBot(TOKEN, {
    polling: true// {
        //interval :200,
        //autoStart: true,
       /* params:{
         }*/
    //}
});

Mikola.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    Mikola.sendMessage(chatId, 'Інформація тут',{
        reply_markup:{
            inline_keyboard:[[
                {
                    text:'Mikola',
                    url:'t.me/Bot_Mikola_bot'
                }
            ]]
        }
    })
})
console.log('Bot has been started .....');
let htmL;
let inFo =[0,1,2,3,4,5,6,7,8,9,10];
//Лікари Likari
inFo[0] =`<b>Терапевт Polina Kromm: </b> <a href="Ardeystraße 27, 58452 Witten">Ardeystraße 27, 58452 Witten</a>
<b>Детский лікарь Lucyna Psonka:</b> <a href=" Wiesenstr 12 0230252826">Wiesenstr 12 0230252826</a> `
// Перекладач translate
inFo[1] = `<strong href = "http://www.atlantik-its.eu/de/company/"> http://www.atlantik-its.eu/de/company/
Reitz-Krasko  die Adresse: Am Westheck 96 44309 Dortmund(brackel)  reitz.krasko@gmail.com </strong>`
// Консультант helper
inFo[2] =` <a href="https://mfa.gov.ua/embassies/nimechchina">https://mfa.gov.ua/embassies/nimechchina</a>`
// Важлива адреса у Віттені VAdress
inFo[3] = `Help Kiosk: Hauptstr 19` 
// Горяча лінія HotLine
inFo[4] = `<strong> горячая линия допомоги 10 -14:00 понедельник по четверг </strong >
<b>01707828230</b>`
// Психолог та анкета допомоги  help
inFo[5] = `https://docs.google.com/forms/d/e/1FAIpQLScXmPoAHk014WKUqHfIsgwNjzA5snn8m8ATImFIKtf1hmgmwA/viewform?usp=sf_link`
// Інформація про школи у Віттені schoole
inFo[6] = `<strong>https://fb.watch/cuyrc68cy5/
https://fb.watch/cuyxRcwctO/</strong> `
// Щеплення для школи  medikament
inFo[7] = `<strong>https://www.rki.de/DE/Content/Infekt/Impfen/Materialien/Downloads-Impfkalender/Impfkalender_Russisch.pdf?__blob=publicationFile</strong> `
// Групи для молоді junggruppe
inFo[8] = `<strong>https://t.me/+rq4RHOX4wI0xNDIy
https://t.me/+XvLaKrNTQUYwMmZi
</strong> `
// Курси німецької мови deutsch
inFo[9] = `<strong>https://www.deutschlernen-ukraine.de/</strong> `
// Праця work
inFo[10] = `<strong>https://t.me/workersplatform
https://www.jobmine.app/ukraine-aktion</strong> `
// Розвагоньки  Feiern
inFo[11] = `<strong>Озеро Кеммнадер: 
https://www.google.com/search?client=ms-android-samsung-ss&output=search&q=Parkplatz+Kemnader+See+P2&ludocid=8593640187381783987&gsas=1&client=ms-android-samsung-ss&ibp=gwp;0,7&lsig=AB86z5UejF04GWEPMGy5mRPGS7CO&kgs=86c99f4870aa8d31&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local#lpg=cid:CgIgAQ%3D%3D</strong> `
// Красуні nett
inFo[12] = `<strong>https://t.me/+3X3TM458Vr85MzAy</strong> `

Mikola.on('message', msg => {
    const chatId = msg.chat.id;
     htmL = `
    <b>Hello, ${msg.from.first_name}</b>
    <strong>  ТУТ собрана вся часто задаваемая информация, пожалуйста выберете пункт который вас интересуетю Также необходимая информация для вас находиться ниже:</strong>
    `
});

Mikola.onText(/\/info/, (msg) => {
    
    const chatId = msg.chat.id;
   let x= 1;
    console.log(x);
  
    Mikola.sendMessage(chatId, htmL, {
        parse_mode: 'HTML',
        reply_markup:{
            inline_keyboard,
            
        }
    });
  });

/*Mikola.on('callback_query', query =>{
    if(query.data==='Likari'){
        Mikola.sendMessage(query.message.chat.id, Lik,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='translate'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='helper'){
        Mikola.sendMessage(query.message.chat.id, inFo,{
            parse_mode: 'HTML'
        })
    } else if(query.data==='help'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='schoole'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    } else if(query.data==='medikament'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    } else if(query.data==='junggruppe'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='deutsch'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='work'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='Feiern'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }else if(query.data==='nett'){
        Mikola.sendMessage(query.message.chat.id, htmL,{
            parse_mode: 'HTML'
        })
    }
    else {
        console.log('help')
    }
    
});*/
 

Mikola.on('callback_query', query =>{
     
    switch (query.data) {
        case 'Likari' : Mikola.sendMessage(query.message.chat.id, inFo[0],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'translate' : Mikola.sendMessage(query.message.chat.id, inFo[1],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'helper' : Mikola.sendMessage(query.message.chat.id, inFo[2],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'help' : Mikola.sendMessage(query.message.chat.id, inFo[5],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'schoole' : Mikola.sendMessage(query.message.chat.id, inFo[6],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'medikament' : Mikola.sendMessage(query.message.chat.id, inFo[7],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'deutsch' : Mikola.sendMessage(query.message.chat.id, inFo[9],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'work' : Mikola.sendMessage(query.message.chat.id, inFo[10],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'Feiern' : Mikola.sendMessage(query.message.chat.id, inFo[11],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'junggruppe' : Mikola.sendMessage(query.message.chat.id, inFo[8],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'nett ' : Mikola.sendMessage(query.message.chat.id, inFo[12],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'HotLine' : Mikola.sendMessage(query.message.chat.id, inFo[4],{
            parse_mode: 'HTML'
        });
            
            break;
        case 'VAdress' : Mikola.sendMessage(query.message.chat.id, inFo[3],{
            parse_mode: 'HTML'
        });
            
            break;
        
       
        default: console.log('help')
            break;
    }
 }) ;

