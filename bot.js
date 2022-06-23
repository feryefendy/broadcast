const { Telegraf } = require('telegraf')

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "broadcast"
})

conn.connect(function(err){
    if(err){
        throw err;
    }
    console.log("connected !");
    conn.query("SELECT * FROM bot", function (err, result, fields){
        if(err){ throw err;
        }
        // console.log(result);
        result.forEach(item => {
            // console.log(item.id);
            let id = item.id;
            bot.telegram.sendMessage(id, 'Hallo Selamat sore')
        })
     })
});

process.env.BOT_TOKEN = ('5021766356:AAFP10ts4N_LFI3ryD5DK7ihS4KIYKbWRrI')
const bot = new Telegraf(process.env.BOT_TOKEN)  

// bot.telegram.sendMessage(5059277591, '😁')

// bot.telegram.sendMessage(5180200962, '⛔️')

// bot.telegram.sendMessage(1535893797, '😁')

// bot.command('start', ctx => {
//     console.log(ctx.update.message);
// });

bot.command('start', ctx => {
  let input_id = ctx.message.chat.id;
  let input_chat = ctx.message.text;
 
  // console.log(input_id);
  // console.log(input_chat);

  let botid = input_id;
  let botchat = input_chat;
  var sql = `INSERT INTO bot (id, chat) VALUES ('${botid}','${botchat}')`;
  conn.query(sql, function(err) {
      if(err){
          throw err;
      }
  })
  console.log(`${botid}, ${botchat}`);
});

bot.launch(); 