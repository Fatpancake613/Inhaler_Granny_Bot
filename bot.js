require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = ">>";


var sheild = true

client.on("ready", () => {
    console.log(`${client.user.tag} has logged in.`)
    client.user.setActivity("Shawty's Melody", {
        type: "LISTENING",
        URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    );
});
client.on("message", async (message) => {
    if (message.author.bot === true) {return};
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
            if (message.content === "hi hi") {
       
                message.channel.send("hello")
            }
            if (message.content === "oopie") {
       //         console.log(`oopie secret by ${message.author.tag}`)
                message.reply("oopie")
            }
            if (message.content === "cock") {
         //       console.log(`"r o o s t e r" secret by ${message.author.tag}`)
                message.react("🐓")
            }
            if (message.content === "your stupid") {
           //     console.log(`youre secret by ${message.author.tag}`)
                message.channel.send("You're*")
            }
            if (message.content === "Your stupid") {
             //   console.log(`youre secret by ${message.author.tag}`)
                message.channel.send("You're*")
            }
            if (message.content === "youre stupid") {
               /// console.log(`youre secret by ${message.author.tag}`)
                message.channel.send("Close, but it's \"You're\"")
            }
            if (message.content === "Youre stupid") {
       ///         console.log(`youre secret by ${message.author.tag}`)
                message.channel.send("Close, but it's \"You're\"")
            }
            if (message.content === "communism") {
          //      console.log(`communism secret by ${message.author.tag}`)
                message.channel.send("https://tenor.com/view/cccp-flag-wave-star-logo-gif-16196191")
            }
            if (message.content === "communist") {
            //    console.log(`communist secret by ${message.author.tag}`)
                message.channel.send("https://tenor.com/view/cccp-flag-wave-star-logo-gif-16196191")
            }
     
        if (CMD_NAME === "ban") {const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!')
            if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')
    
            
    
            if(!args[0]) return message.channel.send('Please specify a user');
    
            if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
            if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');
    
            if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');
    
            let reason = args.slice(1).join(" ");
    
            if(!reason) reason = 'Unspecified';
    
            member.ban({reason: `${reason}`}).catch(err => { 
              message.channel.send('Something went wrong')
                console.log(err)
            })
            message.channel.send(`Banned ${member} With reason of "${reason}"`)
        }

        if (CMD_NAME === "cookies") {
            message.channel.send(`How to make granny cookies :older_woman:\nTotal time: 1 hour\n\nIngredients include:\n1 cup butter, softened\n1 cup white sugar\n1 cup packed brown sugar\n2 eggs\n2 teaspoons vanilla extract\n1 teaspoon baking soda\n2 teaspoons hot water\n½ teaspoon salt\n3 cups all-purpose flour\n2 cups semisweet chocolate chips\n1 cup chopped walnuts\n\n\nStep 1:\nPreheat oven to 350 degrees F (175 degrees C).\n\nStep 2:\nCream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.\n\nStep 3:\nBake for about 10 minutes in the preheated oven, or until edges are nicely browned.\n\nStep 4:\nWait for them to cool and enjoy :yum:`)
        }

        if (CMD_NAME === "commence_mayhem") {
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have administrator permissions.");
            else {
                sheild = false
                console.log(`${message.author.tag} just used the >>commence_mayhem command. Wow`);
                message.channel.send("...Oh my, I didn't know people would even know about the command, let alone use it. Haha server go boom boom");
            };
        }
        
        if (CMD_NAME === "react") { message.react("🆗") }


        if (CMD_NAME === "help") {
            if (args.length == 0) { message.channel.send("There is: \n>>help (optional arguements makes description of command inputted) \n>>invite \n>>yeet \n>>drownsin \n>>spamDM (Case sensitive)\n>>react \n>>source\n>>makemesay (arguement)\n>>ban (User)\n>>kick (User)\n>>spam\n>>cookies\n>>checkperms\n\n\nThere is also some secrets~~") }
            else if (args == "yeet") { message.channel.send("yeet\nSays \"YEET\", could be used for ping I guess") }
            else if (args == "secret") {
              
                message.channel.send("You just found the secret dictionary!\nIf you say \"hi hi\" the bot says \"hello\"\nIf you say \"oopie\" the bot says it back\nIf you say \"cock\" the bot reacts with 🐓\nIf you say \"communism\" or \"communist\" the bot responds with a communism logo gif\nIf you say >>godmode the bot hacks into the owners account\nIf you say \"your stupid\" or \"Your stupid\" or \"youre stupid\" or \"Youre stupid\" it corrects you by saying \"You're*\" and \"Close, but it's 'You're'\"\n\n\n\n\n>>commence_mayhem\nWarning: **Dangerous in servers.** Lets anybody use the kick/ban command. Do not use this because once turned on, the only ways to turn it off is kicking the bot or the developer resets the bot for an update. Requires administrator.")
            }
            else if (args == "checkperms") {
                message.channel.send('>>checkperms @user\nCheck all permissions of tagged user. ')
            }
            else if (args == "source") {
                message.channel.send(">>sourcen\nDisplays a GitHub link to the bots source code.")
            }
            else if (args == "spamDM") {
                message.channel.send(">>spamDM\nLooks like somebody would like to talk to you.")
            else if (args == "secrets") {
               
                message.channel.send("You just found the secret dictionary!\nIf you say \"hi hi\" the bot says \"hello\"\nIf you say \"oopie\" the bot says it back\nIf you say \"cock\" the bot reacts with 🐓\nIf you say \"communism\" or \"communist\" the bot responds with a communism logo gif\nIf you say >>godmode the bot hacks into the owners account\nIf you say \"your stupid\" or \"Your stupid\" or \"youre stupid\" or \"Youre stupid\" it corrects you by saying \"You're*\" and \"Close, but it's 'You're'\"\n\n\n\n\n>>commence_mayhem\nWarning: **Dangerous in servers.** Lets anybody use the kick/ban command. Do not use this because once turned on, the only ways to turn it off is kicking the bot or the developer resets the bot for an update. Requires administrator.")
            }
            else if (args == "update") {message.channel.send(">>update\nShows what I fixed/added/got rid of. ")}
            else if (args == "cookies") {message.channel.send("Teaches you how to make your own grandma cookies! :yum:")}
            else if (args == "drownsin") { message.channel.send("drownsin\nIt tells you how you drowned in sadness") }
            else if (args == "kick") { message.channel.send("kick (User)\nKicks a user with an @ mention") }
            else if (args == "ban") { message.channel.send("ban (User)\nBans a user with an @ mention") }
            else if (args == "makemesay") { message.channel.send("makemesay (arguement)\nUsing this command makes me say anything you want me to.") }
            else if (args == "spam") { message.channel.send("spam\nSpam sends 100 messages all saying raga raga, please dont use this. You need manage messages perm to use this command.") }
            else {
                message.channel.send("Couldn't find the command. Displaying default message.")
                message.channel.send("There is: \n>>help \n>>invite \n>>yeet \n>>drownsin \n>>react \n>>source\n>>makemesay (arguement)\n>>ban (User)\n>>kick (User)\n>>spam\n>>spamDM (Case sensitive)\n>>cookies\n>>checkperms\n\n\nThere is also some secrets~~")
            }
        } 
        if (CMD_NAME === "yeet") { message.channel.send("YEET") }
        if (CMD_NAME === "drownsin") { message.reply("drowned in saddness. RIP") }
        if (CMD_NAME === "kick") {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                message.reply(`Successfully kicked ${user.tag}`);
              })
              .catch(err => {
                message.reply('I was unable to kick the member');
                console.error(err);
              });
          } else {
            message.reply(`My man wasn't found`);
          }
        } else {
          message.reply("You either added nobody to kick or you didn't mention them.");
        }      }
        

        if (CMD_NAME == "update") {
//aaaaaaaasdfsadfasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssREALEAWSEF
message.channel.send("Releases:\n3-31-21:\nCreated checkperms command. \nCreated cookies command.\nFixed kick and ban commands.\n Added update command.\n\n4-2-21:\nAdded a spamDM command")





        }
                if (CMD_NAME == "spamDM") {
           if (message.channel.type === "dm") {
            var helpme = 2046
      
            while (helpme != 0) {
                message.channel.send("I would like to talk to you " + helpme + " times");
                helpme -= 1
            }
           }
           else {
               message.channel.send("Use in DM.");
               return;
            }
        }
        if (CMD_NAME == "source") {
            message.channel.send("https://github.com/Fatpancake613/Inhaler_Granny_Bot/tree/main")
        }
        
        if (CMD_NAME === "godmode") {
            message.channel.send("God mode activating. . .")
            setTimeout(() => {console.log("d") }, 2000)
            message.channel.send("Starting hypertechnology . . .")
            setTimeout(() => {console.log("d")}, 2000)
            message.channel.send("Online")
            message.channel.send("Hypertechnological illumination sensors not working. . . Troubleshooting. . .")
            setTimeout(() => {console.log("d")}, 2000)
            message.channel.send("False alarm. Check hypertechnological problem sensors. God mode activated.")
            message.channel.send("Hacked into discord server. The person who owns this server's password has now been stored in a server.")
            setTimeout(() => {console.log("d")}, 2000)
            message.channel.send("Logging in to leave out of all servers . . .")
            setTimeout(() => {console.log("d")}, 2000)
            message.channel.send("Done. After server owner reopens discord the changes will be made.")
       

        }
        if (CMD_NAME == "spam") {
            if (!message.member.hasPermission("MANAGE_MESSAGES"))
                return message.reply('You do not have permissions to use that command');
            var a = 100;
            while (a != 0) {
                message.channel.send("raga raga")
                a -= 1
            };
        }
        if (CMD_NAME === "makemesay") {
            if (args == "") {
                message.channel.send("Bruh, you can't make me say nothing. You can't make me put in images either.")
            } else {
                message.channel.send(message.content.split(">>makemesay "))
            }
            


        }
   

        if (CMD_NAME === "invite") {
            message.channel.send("https://discord.com/oauth2/authorize?client_id=793494191194898433&scope=bot&permissions=3142 invite to bot\n https://discord.gg/3FJAUeNPMM feedback/report bugs/whatever else people use those for")
        }
             
        if (CMD_NAME === "checkperms") {
            const membie = message.member
            if (args.length != 0) {
            const member = message.mentions.members.first();
                           /*if (message.member.hasPermission("ADMINISTRATOR")) {
                                admin = true
                            } else {admin = false};
                            if (message.member.hasPermission("CREATE_INSTANT_INVITE")) {
                                invite = true
                             } else {invite = false};
                            if (message.member.hasPermission("KICK_MEMBERS")) {
                                kick = true
                            } else {kick = false};
                            if (message.member.hasPermission("BAN_MEMBERS")) {
                                ban = true
                            }  else {ban = false};
                            if (message.member.hasPermission("MANAGE_CHANNELS")) {
                                managechannels = true
                            }  else {managechannels = false};
                            if (message.member.hasPermission("MANAGE_GUILD")) {
                                manageguild = true
                            }  else {manageguild = false};
                            if (message.member.hasPermission("ADD_REACTIONS")) {
                                addreactions = true
                            }  else {addreactions = false};
                            if (message.member.hasPermission("VIEW_ADUIT_LOG")) {
                                viewaduitlog = true
                            }  else {viewaduitlog = false};
                            if (message.member.hasPermission("PRIORITY_SPEAKER")) {
                                priorityspeaker = true
                            } else {priorityspeaker = false};
                            if (message.member.hasPermission("STREAM")) {
                                stream = true
                            } else {stream = false};
                            if (message.member.hasPermission("VIEW_CHANNEL")) {
                                viewchannel = true
                            }  else {viewchannel = false};
                            if (message.member.hasPermission("SEND_MESSAGES")) {
                                sendmessages = true
                            } else {sendmessages = false};
                            if (message.member.hasPermission("SEND_TTS_MESSAGES")) {
                                sendttsmessages = true
                            } else {sendttsmessages = false};
                            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                                managemessages = true
                            }  else {managemessages = false};
                            if (message.member.hasPermission("EMBED_LINKS")) {
                                embedlinks = true
                            }  else {embedlinks = false};
                            if (message.member.hasPermission("ATTACH_FILES")) {
                                attachfiles = true
                            } else {attachfiles = false};
                            if (message.member.hasPermission("READ_MESSAGE_HISTORY")) {
                                readmessagehistory = true
                            } else {readmessagehistory = false};
                            if (message.member.hasPermission("MENTION_EVERYONE")) {
                                mentioneveryone = true
                            } else {mentioneveryone = false};
                            if (message.member.hasPermission("USE_EXTERNAL_EMOJIS")) {
                                externalemojis = true
                            }else {externalemojis = false};
                            if (message.member.hasPermission("VIEW_GUILD_INSIGHTS")) {
                                viewguildinsites = true
                            } else {viewguildinsites = false};
                            if (message.member.hasPermission("CONNECT")) {
                                connect = true
                            } else {connect = false};
                            if (message.member.hasPermission("SPEAK")) {
                                speak = true
                            } else {speak = false};
                            if (message.member.hasPermission("MUTE_MEMBERS")) {
                                mutemembers = true
                            } else {mutemembers = false};
                            if (message.member.hasPermission("DEAFEN_MEMBERS")) {
                                deafenmembers = true
                            }else {deafenmembers = false};
                            if (message.member.hasPermission("MOVE_MEMBERS")) {
                                movemembers = true
                            }else {movemembers = false};
                            if (message.member.hasPermission("USE_VAD")) {
                                usevad = true
                            }else {usevad = false};
                            if (message.member.hasPermission("CHANGE_NICKNAME")) {
                                changenickname = true
                            }else {changenickname = false};
                            if (message.member.hasPermission("CHANGE_NICKNAMES")) {
                                changenicknameS = true
                            }else {changenicknameS = false};
                            if (message.member.hasPermission("MANAGE_ROLES")) {
                                manageroles = true
                            }else {manageroles = false};
                            if (message.member.hasPermission("MANAGE_WEBHOOKS")) {
                                managewebhooks = true
                                console.log("Webhooks is true")
                            } else {managewebhooks = false};
                            console.log("Webhooks checked.")
                            if (message.member.hasPermission("MANAGE_EMOJIS")) {
                                manageemojis = true
                            } else {manageemojis = false};
                            console.log("Admin after all check permissions: " + admin)*/
                            message.channel.send("Administrator: " + member.hasPermission("ADMINISTRATOR") + "\nCreate Invite: " + member.hasPermission("CREATE_INSTANT_INVITE") + "\nKick Members: " + member.hasPermission("KICK_MEMBERS") + "\nBan Members: " + member.hasPermission("BAN_MEMBERS") + "\nManage Channels: " + member.hasPermission("MANAGE_CHANNELS") + "\nManage Guild: " + member.hasPermission("MANAGE_GUILD") + "\nAdd Reactions: " + member.hasPermission("ADD_REACTIONS") + "\nView Aduit Log: " + member.hasPermission("VIEW_AUDIT_LOG") + "\nPriority Speaker: " + member.hasPermission("PRIORITY_SPEAKER") + "\nStream: " + member.hasPermission("STREAM") + "\nView Channel: " + member.hasPermission("VIEW_CHANNEL") + "\nSend Messages: " + member.hasPermission("SEND_MESSAGES") + "\nSend TTS Messages: " + member.hasPermission("SEND_TTS_MESSAGES") + "\nManage Messages: " + member.hasPermission("MANAGE_MESSAGES") + "\nEmbed Links: " + member.hasPermission("EMBED_LINKS") + "\nAttach Files: " + member.hasPermission("ATTACH_FILES") + "\nRead Message History: " + member.hasPermission("READ_MESSAGE_HISTORY") + "\nMention Everyone: " + member.hasPermission("MENTION_EVERYONE") + "\nUse External Emojis: " + member.hasPermission("USE_EXTERNAL_EMOJIS") + "\nView Guild Insights: " + member.hasPermission("VIEW_GUILD_INSIGHTS") + "\nConnect: " + member.hasPermission("CONNECT") + "\nSpeak: " + member.hasPermission("SPEAK") + "\nMute Members: " + member.hasPermission("MUTE_MEMBERS") + "\nDeafen Members: " + member.hasPermission("DEAFEN_MEMBERS") + "\nMove Members: " + member.hasPermission("MOVE_MEMBERS") + "\nUse VAD (Voice Activity Detection): " + member.hasPermission("USE_VAD") + "\nChange Nickname (Self): " + member.hasPermission("CHANGE_NICKNAME") + "\nChange Nickname (Others): " + member.hasPermission("MANAGE_NICKNAMES") + "\nManage Roles: " + member.hasPermission("MANAGE_ROLES") + "\nManage Webhooks: " + member.hasPermission("MANAGE_WEBHOOKS") + "\nManage Emojis: " + member.hasPermission("MANAGE_EMOJIS"))
                        }
                     else {
                        message.channel.send("Administrator: " + membie.hasPermission("ADMINISTRATOR") + "\nCreate Invite: " + membie.hasPermission("CREATE_INSTANT_INVITE") + "\nKick Members: " + membie.hasPermission("KICK_MEMBERS") + "\nBan Members: " + membie.hasPermission("BAN_MEMBERS") + "\nManage Channels: " + membie.hasPermission("MANAGE_CHANNELS") + "\nManage Guild: " + membie.hasPermission("MANAGE_GUILD") + "\nAdd Reactions: " + membie.hasPermission("ADD_REACTIONS") + "\nView Aduit Log: " + membie.hasPermission("VIEW_AUDIT_LOG") + "\nPriority Speaker: " + membie.hasPermission("PRIORITY_SPEAKER") + "\nStream: " + membie.hasPermission("STREAM") + "\nView Channel: " + membie.hasPermission("VIEW_CHANNEL") + "\nSend Messages: " + membie.hasPermission("SEND_MESSAGES") + "\nSend TTS Messages: " + membie.hasPermission("SEND_TTS_MESSAGES") + "\nManage Messages: " + membie.hasPermission("MANAGE_MESSAGES") + "\nEmbed Links: " + membie.hasPermission("EMBED_LINKS") + "\nAttach Files: " + membie.hasPermission("ATTACH_FILES") + "\nRead Message History: " + membie.hasPermission("READ_MESSAGE_HISTORY") + "\nMention Everyone: " + membie.hasPermission("MENTION_EVERYONE") + "\nUse External Emojis: " + membie.hasPermission("USE_EXTERNAL_EMOJIS") + "\nView Guild Insights: " + membie.hasPermission("VIEW_GUILD_INSIGHTS") + "\nConnect: " + membie.hasPermission("CONNECT") + "\nSpeak: " + membie.hasPermission("SPEAK") + "\nMute Members: " + membie.hasPermission("MUTE_MEMBERS") + "\nDeafen Members: " + membie.hasPermission("DEAFEN_MEMBERS") + "\nMove Members: " + membie.hasPermission("MOVE_MEMBERS") + "\nUse VAD (Voice Activity Detection): " + membie.hasPermission("USE_VAD") + "\nChange Nickname (Self): " + membie.hasPermission("CHANGE_NICKNAME") + "\nChange Nickname (Others): " + membie.hasPermission("MANAGE_NICKNAMES") + "\nManage Roles: " + membie.hasPermission("MANAGE_ROLES") + "\nManage Webhooks: " + membie.hasPermission("MANAGE_WEBHOOKS") + "\nManage Emojis: " + membie.hasPermission("MANAGE_EMOJIS"))
                     }
                            
             
                    

 

                        
        }




    }
    });
    client.login("I am not giving you my login code")
    //If you know what you are doing (and probably if you dont know what you are doing too) you can tell all the secrets in my code but i actually dont care so
