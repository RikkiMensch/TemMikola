
function DEBUG(obj = { }){
    return JSON.stringify(obj, null, 4)
};


module.exports = DEBUG;
module.exports = KeyBoardMenu;
function KeyBoardMenu(obj = { }){
    return JSON.stringify(obj,null,4)
}
inline_keyboard = KeyBoardMenu = [
       [
        {
            text: 'Горяча лінія',
             callback_data: 'HotLine'
            
         }
      
    ],
     [
         {
             text:'Важлива адреса у Віттені',
            callback_data: 'VAdress'
         }
    ],
    [
        {
            text:'Лікари',
            callback_data:'Likari'
        }
    ],[
            {
            text:'Перекладач',
            callback_data:'translate'
        }
    ],[
        {
            text:'Консультант',
            callback_data:'helper'
        }
    ],[
        {
            text:'Психолог та анкета допомоги',
            callback_data:'help'
        }
    ],[
        {
            text:'Інформація про школи у Віттені',
            callback_data:'schoole'
        }
    ],[
        {
            text:'Щеплення для школи',
            callback_data:'medikament'
        }
    ],[
        {
            text:'Групи для молоді',
            callback_data:'junggruppe'
        }
    ],[
        {
            text:'Курси німецької мови',
            callback_data:'deutsch'
        }
    ],[
        {
            text:'Праця',
            callback_data:'work'
        }
    ],[
        {
            text:'Розвагоньки',
            callback_data:'Feiern'
        }
    ],[
        {
            text:'Красуні',
            url: 'https://t.me/+3X3TM458Vr85MzAy'
        }
    ],
]

/*Mikola.onText(/\/help (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; 
    Mikola.sendMessage(chatId, resp);
  });*/