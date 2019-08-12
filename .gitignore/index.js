const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ";";                      
var prefix1 = "Alpha dev";


client.login("NjA5OTQ3Njg3MDIxOTY5NDA4.XU-JOQ.OEk646HFn-BE0CarjkJXy4mtvkA")

client.on("ready", () => { 
  console.log("message?");
  console.log("-1")                
  client.user.setGame(";help | noNamed v1");
});
var array1 = [1,2];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [1,2]

console.log(firstElement);
// expected output: 1
   

client.on("message", message =>{
  if(!message.guild) return
  if(message.content === prefix + "help")
  {
    var embed = new Discord.RichEmbed()
    .setColor('#C43C3C')
    .setDescription(`
    **noNamed __V1__**
     __Voici la liste des commandes disponbiles :__

    **;meme** -- affiche la listes des commandes de memes disponibles.
    **;staff** -- toutes les commandes de modérations.
    **;division** -- montre toutes les commandes des Divisions actuellement disponibles.
    **;son** -- listes de commande de sons mp3
    `)
    return message.channel.send({embed})
  }
})

client.on("message", message =>{
  if(!message.guild) return
  if(message.content === prefix + "legg")
  {
      message.channel.send("https://tenor.com/view/monday-wtf-seal-communism-lol-gif-5098714")
  }
  if(message.content === prefix + "ping"){           
        message.channel.send(`pong !
https://tenor.com/view/cats-ping-pong-gif-8942945`)
    }
  if(message.content === prefix + "issou"){
      message.channel.send("https://tenor.com/view/lol-mdr-issou-risistas-xd-gif-7717009")}
  if(message.content === prefix + "murloc")
    {
      message.channel.send({files :["./Sound_of_a_Murloc.mp3"]})
    }
  if(message.content === prefix + "windowsXP")
  {
      message.channel.send({files :["./Microsoft_Windows_XP_Startup_Sound.mp3"]})
  }
  if(message.content === prefix + "yeahboy")
  {
      message.channel.send({files :["./Yeah_Boy_meme_for_mp3.mp3"]})
    }
  if(message.content === prefix + "yee")
  {
      message.channel.send({files :["./Yee.mp3"]})
    }
  if(message.content === prefix + "cheh")
  {
      message.channel.send({files :["./CHEH_-_MASKEY.mp3"]})
    }
  if(message.content === prefix + "kobalaD")
  {
      message.channel.send({files :["./MISTER_V_IMITE_Koba_LaD.mp3"]})
  }
  if(message.content === prefix + "kobalaD2")
  {
      message.channel.send({files :["./MISTER_V_IMITE_Koba_LaD - 2.mp3"]})
  }
})

client.on("message", message =>
{
    if(message.content === prefix + "meme")
    {
        var embed = new Discord.RichEmbed()
        .setColor('#C43C3C')
        .setDescription(`
        **noNamed __V1__**
        __Voici la liste des commandes de memes disponbiles :__

        **;legg** -- meme GIF d'un phoque communiste.
        **;ping** -- pong !
        **;issou** -- meme issou GIF
        `)
    return message.channel.send({embed})
    }
    if(message.content === prefix + "staff")
    {
        var embed = new Discord.RichEmbed()
        .setColor("#C43C3C")
        .setDescription(`
        **noNamed __V1__**
        __Voici la liste des commandes de memes disponbiles :__
        
        **;kick @user** -- kick un utilisateur du discord
        **;ban @user** -- ban de façons permanente un utilisateur du discord
        **;mute @user** -- mute un utilisateur
        **;unmute @user** -- unmute un utilisateur mute auparavent
        `)
        return message.channel.send({embed})
    }
    if(message.content === prefix + "division")
    {
        var embed = new Discord.RichEmbed()
        .setColor("#C43C3C")
        .setDescription(`
        __Voici la liste des commandes de divisions disponbiles :__

        **Les commandes de Division sont temporairement indisponibles.**
        `)
        return message.channel.send({embed})
    }
    if(message.content === prefix + "son")
    {
        var embed = new Discord.RichEmbed()
        .setColor("#C43C3C")
        .setDescription(`
        **noNamed __V1__**
        __Voici la liste des commandes de memes disponbiles :__
        
        **;murloc** -- cris saturé du murloc pour le plaisir des oreils :)
        **;windowsXP** -- son du démarrage windowsXP saturé
        **;yeahboy** -- meme yeah boy
        **;yee** -- yeee dinosaure
        **;cheh** -- cheh de maskey
        **;kobalaD** -- Hunhuuu
        **;kobalaD2** -- partis de la parodie de misterV
        `)
        return message.channel.send({embed})
    }
})

client.on("message", message =>{
  let command = message.content.split(" ")[0];
  const args = message.content.slice(prefix.length).split(/ +/)
  command = args.shift().toLowerCase();

  if(command === "kick")
  {
    let modRole = message.guild.roles.find("name", "Empereur");
    if(!message.member.roles.has(modRole.id)){
      return message.reply("Tu n'as pas la persmission d'exécuter cette commande !").catch(console.error);
    }
    if(message.mentions.users.size === 0)
    {
      return message.reply("Vueillez mentionner l'utilisateur à kick.").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember)
    {
      return message.reply("Cet utilisateur est introuvable ou vous n'avez pas les permissions de l'éxpulser !")
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
      return message.reply("Je n'ai pas la permission nécaissaire pour kick un utilisateur !").catch(console.error);
    }
    kickMember.kick().then(member =>{
      message.reply(` a expulser ${member.user.username}.`).catch(console.error);
      message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été expulser de la Flotte par **${message.author.username}**`)
      console.log("un utilisateur a été kick.")
    }).catch(console.error)
  }

  if(command === "ban")
  {
    let modRole = message.guild.roles.find("name", "Empereur");
    if(!message.member.roles.has(modRole.id))
    {
      return message.reply("Tu n'as pas la permission d'exécuter cette commande !").catch(console.error);
    }
    const member = message.mentions.members.first();
    if(!member) return message.reply("Vueillez mentionner l'utilisateur à bannir.");
    member.ban().then(member =>{
      message.reply(` a banni ${member.user.username}.`).catch(console.error);
      message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été banni de la Flotte par **${message.author.username}**`)
      console.log("un utilisateur a été banni")
    }).catch(console.error)
  }

  if(command === "mute")
  {
    let modRole = message.guild.roles.find("name", "Empereur");
    if(!message.member.roles.has(modRole.id))
    {
      return message.reply("Tu n'as pas la permission d'exécuter cette commande !").catch(console.error);
    }
    const member = message.mentions.members.first();
    if(!member) return message.reply("Vueillez mentionner l'utilisateur à muter.");
    member.addRole("610020181695135744").then(member =>{
      message.reply(` a mute ${member.user.username}.`).catch(console.error);
      message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été mute par **${message.author.username}**`)
      console.log("un utilsateur a été mute.")
      member.user.send(`Vous avez été mute du serveur de la Flotte des Mexicains par **${message.author.username}**.`)
    }).catch(console.error)
  }

  if(command === "unmute")
  {
    let modRole = message.guild.roles.find("name", "Empereur");
    if(!message.member.roles.has(modRole.id))
    {
      return message.reply("Tu n'as pas la permission d'exécuter cette commande !").catch(console.error);
    }
    const member = message.mentions.members.first();
    if(!member) return message.reply("Vueillez mentionner l'utilisateur à unmute.");
    member.removeRole("610020181695135744").then(member =>{
      message.reply(` a unmute ${member.user.username}.`).catch(console.error);
      message.guild.channels.find("name", "logs").send(`**${member.user.username}** a été unmute par **${message.author.username}**`)
      console.log("un utilsateur a été unmute.")
      member.user.send(`Vous avez été unmute du serveur de la Flotte des Mexicains par **${message.author.username}**.`)
    }).catch(console.error)
  }
})


client.on("message", message =>
{
  if(!message.guild) return
  if(message.content === prefix + "divisions stats")
  {
    if(message.member.roles.get("603022069428518932")) //division 1
    {
      message.channel.send("Les informations de votre Division vous ont été envoyés par MP.")
      message.author.send(`
      **noNamed V1**
      __Voici les stats de votre Division :__

      Nombres de joueurs dans votre division : 2
      Chef de votre Division : Xosmo#3408
      `)
    }
  }
  if(message.member.roles.get("603022111300124692")) //division 2
  {
    message.channel.send("Les informations de votre Division vous ont été envoyés par MP.")
      message.author.send(`
      **noNamed V1**
      __Voici les stats de votre Division :__

      Nombres de joueurs dans votre division : 0
      Chef de votre Division : Disponible
      `)
  }
  if(message.member.roles.get("603022234986217483")) //division 3
  {
    message.channel.send("Les informations de votre Divisions vous ont été envoyés par MP.")
    message.author.send(`
    **noNamed V1**
      __Voici les stats de votre Division :__

      Nombres de joueurs dans votre division : 0
      Chef de votre Division : Disponible
    `)
  }
  if(message.member.roles.get("603022331048361994"))
  {
    message.channel.send("Les informations de votre Divisions vous ont été envoyés par MP.")
    message.author.send(`
    **noNamed V1**
      __Voici les stats de votre Division :__

      Nombres de joueurs dans votre division : 0
      Chef de votre Division : Disponible
    `)
  }
})
