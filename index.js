const Discord = require('discord.js');
const {prefix, token, giphyToken} = require('./config.json');
const client = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');

var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken);

client.on('ready', () => {
    client.user.setActivity('In the Batcave',  { type: 'WATCHING'});
})

client.on('message', message => {
    
    if(message.content === `${prefix}clown`){
        message.channel.send('HahaHAHhahAHH1');
    }else if(message.content === `?movieList`){
        const movieEmbed = new Discord.MessageEmbed()
    //{ message.channel.send
        .setTitle('Jokers Roles')
        .setColor('#6f2da8')
        .setDescription('These are all of the movies I appeared In')
        .setFooter(`
        Batman: The movie (1966),
        Batman (1989),
        Batman Forever (1995),
        Batman: Mask of the Phantasm (1993),
        Batman Beyond: Return of the Joker (2000),
        The Batman (2004),
        The Dark Knight (2008),
        The Dark Knight Returns - P1 (2012),
        The Dark Knight Returns - P2 (2013),
        Lego Batman: The Movie DC Super Heroes Unite (2013),
        Lego DC Comics: Batman Be-Leagured (2014),
        Son of Batman (2014),
        Batman: Assault on Arkham (2014),
        Lego DC Comics Super Heros: Justice League - Attack of the legion of doom (2015),
        Batman: The Killing Joke (2016),
        Suicide Squad (2016),
        Batman: Return of the caped crusaders (2016),
        The Lego Batman Movie (2017),
        Batman vs Two-face (2017),
        Batman Ninja (2018),
        Lego DC Comics Super Heros: The Flash (2018),
        Scooby Doo & Batman: The Brave and the Bold (2018),
        Joker (2019),
        Batman: Hush (2019),
        Batman: Death in The Family (2020).
        `)
        message.channel.send(movieEmbed);
    }

});

client.on('message', message => {
    if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

        if(message.content.startsWith(`${prefix}kick`)) {

            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked")
            })
        }
    }
})

client.on('message', message => {
    if(message.content === `${prefix}hysterical`){
        giphy.search('gifs', {"q": "joker"})
            .then((response) => {
                var totalResponses = response.data.length;
                var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                var responseFinal = response.data[responseIndex];    
                message.channel.send(":clown: ", {files: [responseFinal.images.fixed_height.url]})
            }
        )
    }
})
/*
client.on('message', message => {
    if(message.conent === `?funnys`){
        image(message)
    }
})

function image(message){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "joker",
        method: "GET", 
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    
    request(options, function(error, response, responseBody){
        if(error){
            return;
        }

        $ = cheerio.load(responseBody);

        var links = $(".image a.Link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);
        if(!urls.length){
            return
        }
        

        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });

};   
*/




//custom emotes
/*
client.on('message', message => {
    if(message.content === `${prefix}mad`){
        message.channel.send(":jokermad:")                            
    }else if(message.content === `${prefix}cool`){
        message.channel.send === (":sunglasses_joker:");             
    }else if(message.content === `${prefix}happy`){
        message.channel.send === (":joker:");
    }else if(message.content === `${prefix}unamussed`){
        message.channel.send === (":joker_bruh: ");
    }else if(message.content === `${prefix}tf`){
        message.channel.send === (":joker_eyeroll: ");
    }else if(message.content === `${prefix}cryingLaugh`){
        message.channel.send === (":joker_laughing: ");
    }else if(message.content === `${prefix}shocked`){
        message.channel.send === (":joker_scream:")
    }
});
*/

//embed
client.on('message', message => {
    if(message.content === '?hello'){
        const info = new Discord.MessageEmbed()
            .setTitle('About Me')
            .setAuthor('The Joker')
            .setThumbnail('https://2.bp.blogspot.com/-HR8KsKFG74o/V8NRjfbrLrI/AAAAAAAAF4E/qS_TCV4MC_gm4iOnlexqRwHPbApPsMpPACLcB/s1600/jokercard3white.jpg')
            .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxw6dcD_PFdHzLRcOZ8qB43GzvE9KUv1QBPw&usqp=CAU')
            .setURL('https://en.wikipedia.org/wiki/Joker_(character)')
            .setColor('#24D330')
            .setDescription('Joker thinks this discord server isnt funny >8(')
            .setFooter('Joker is happily divorced to Margot Robbie')
            .setTimestamp()
        message.channel.send(info);
    }

    if(message.content === '?help'){
        const help = new Discord.MessageEmbed()
            .setTitle('So you need help?')
            .setColor('#990000')
            .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUjp3h5Snx8o4kmye_Z8kb-FbZKhiT22wiug&usqp=CAU')
            .addField('Best practices', 'Make sure you are using a ?')
            .addFields(
                { name: '?movieList', value: 'All joker appearances\n', inline: true},
                { name: '?hello', value: 'Intro to joker', inline: true},
                { name: '?clown', value: 'funny', inline: true},
                { name: '?help', value: 'All joker commands', inline: true},
                { name: '?hysterical', value: 'Great joker gifs', inline: true}
            )
        message.channel.send(help);
    }
})



client.login(token);


//AIzaSyA7fdr20hjAJJYbD9KWcVrQ_1SpYKmB2mw
