// Tennis Shot Tactics Database
const shotTactics = {
    forehand: {
        name: "Forehand",
        video: {
            id: "rm6Ys74Ueqk",
            title: "Forehand Tactics & Strategy Guide"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "Deep Crosscourt Rally",
                        description: "Hit deep crosscourt forehands to their backhand side. Aggressive baseliners often have weaker backhands and you can exploit this by keeping the ball deep and heavy.",
                        tip: "Aim 2-3 feet inside the baseline"
                    },
                    {
                        title: "Change of Pace",
                        description: "Mix in slice and slower balls to disrupt their rhythm. Aggressive players thrive on pace, so taking it away forces them to generate their own power.",
                        tip: "Use this when they're in a groove"
                    },
                    {
                        title: "Inside-Out Forehand",
                        description: "Run around your backhand to hit inside-out forehands to open up the court. This puts you in an offensive position and creates angles.",
                        tip: "Set up with quick footwork"
                    }
                ],
                clay: [
                    {
                        title: "High Heavy Topspin",
                        description: "Use heavy topspin that kicks up high on clay. This pushes aggressive baseliners back and makes it harder for them to attack.",
                        tip: "Brush up aggressively on the ball"
                    },
                    {
                        title: "Target the Backhand",
                        description: "Rally consistently to their backhand, building points patiently. Clay slows the ball, giving you time to construct points.",
                        tip: "Don't rush - clay rewards patience"
                    },
                    {
                        title: "Drop Shot Setup",
                        description: "After pushing them deep with heavy balls, use drop shots. The slow surface makes recovery difficult.",
                        tip: "Disguise it like a regular forehand"
                    }
                ],
                grass: [
                    {
                        title: "Flat and Fast",
                        description: "Hit flatter forehands that stay low on grass. This gives aggressive baseliners less time to set up their power shots.",
                        tip: "Keep your swing more level"
                    },
                    {
                        title: "Approach and Attack",
                        description: "Use your forehand as an approach shot to come to net. Grass favors the attacker, so take the initiative.",
                        tip: "Hit deep down the line, then close"
                    },
                    {
                        title: "Wide Angles",
                        description: "Use the faster surface to create sharper angles that pull them off court. Follow up by attacking the open court.",
                        tip: "Step into the court to take time away"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Aggressive Inside-Out",
                        description: "Take control with inside-out forehands. Counterpunchers want you to be passive, so dictate play by attacking their backhand.",
                        tip: "Move them side to side relentlessly"
                    },
                    {
                        title: "Come to Net",
                        description: "Use approach shots to pressure them. Counterpunchers are uncomfortable when you take away their time and rhythm.",
                        tip: "Approach on shorter balls"
                    },
                    {
                        title: "Hit Through Them",
                        description: "Go for bigger targets and accept some errors. Being too safe plays into their hands.",
                        tip: "Aim closer to lines when ahead in the point"
                    }
                ],
                clay: [
                    {
                        title: "Patient Aggression",
                        description: "Build points but look for short balls to attack. Don't try to hit winners from deep - wait for the right opportunity.",
                        tip: "Keep good court position"
                    },
                    {
                        title: "Heavy Ball Pressure",
                        description: "Use heavy topspin to push them back, then move forward when you get a weaker reply.",
                        tip: "Watch for floating returns"
                    },
                    {
                        title: "Drop Shot Variety",
                        description: "Mix in drop shots to bring them forward. Counterpunchers often struggle at the net.",
                        tip: "Follow your drop shot in"
                    }
                ],
                grass: [
                    {
                        title: "Serve and Volley Pattern",
                        description: "Attack early in points. On grass, you can't let counterpunchers get into long rallies where they're comfortable.",
                        tip: "First strike tennis"
                    },
                    {
                        title: "Chip and Charge",
                        description: "Slice approach shots that stay low on grass, then finish at net. This neutralizes their defensive ability.",
                        tip: "Get to net quickly"
                    },
                    {
                        title: "Quick Points",
                        description: "Keep points short with aggressive forehand winners. The fast surface helps you end points early.",
                        tip: "Take the ball early"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "Low Returns",
                        description: "Keep your forehand returns low to their feet. This makes their first volley difficult and can force errors.",
                        tip: "Aim for the service line area"
                    },
                    {
                        title: "Passing Shot Angles",
                        description: "When they come to net, use sharp crosscourt forehands. Make them cover the maximum distance.",
                        tip: "Don't try to hit too hard - placement wins"
                    },
                    {
                        title: "Lob Over Them",
                        description: "Use topspin lobs when they crowd the net. This pushes them back and can win points outright.",
                        tip: "Mix it in to keep them honest"
                    }
                ],
                clay: [
                    {
                        title: "High Topspin Passes",
                        description: "Hit with heavy topspin that dips at their feet. Clay gives you more time to set up passing shots.",
                        tip: "Take a full swing"
                    },
                    {
                        title: "Make Them Play",
                        description: "Hit neutralizing shots that force extra volleys. On clay, serve-volleyers often make errors on low bouncing balls.",
                        tip: "Patience on defense"
                    },
                    {
                        title: "Exploit the Bounce",
                        description: "Use the high clay bounce to hit dipping forehands. The surface works against net players.",
                        tip: "Let the court help you"
                    }
                ],
                grass: [
                    {
                        title: "Early Ball Taking",
                        description: "Take the ball early before they can close the net. Grass keeps the ball low, making this more effective.",
                        tip: "Move forward to meet the ball"
                    },
                    {
                        title: "Flat Passing Shots",
                        description: "Hit flat forehands through the court. On grass, low balls skid and are hard to volley.",
                        tip: "Keep it simple and low"
                    },
                    {
                        title: "Body Shots",
                        description: "Hit directly at them to jam their volley. This is often more effective than going for the lines.",
                        tip: "Aim at the hip"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Control the Center",
                        description: "Don't let them dictate patterns. Use your forehand to stay in rallies and look for opportunities to attack first.",
                        tip: "Stay balanced and ready"
                    },
                    {
                        title: "Exploit Transitions",
                        description: "All-court players move between styles. Attack when they're transitioning between baseline and net play.",
                        tip: "Watch their court position"
                    },
                    {
                        title: "Consistent Depth",
                        description: "Keep the ball deep to limit their options. Short balls give them too many choices.",
                        tip: "Depth over power"
                    }
                ],
                clay: [
                    {
                        title: "Out-Rally Them",
                        description: "Stay patient and consistent. Clay neutralizes many all-court tactics, so solid baseline play wins.",
                        tip: "Trust your legs"
                    },
                    {
                        title: "Vary Spin and Pace",
                        description: "Change your shots to prevent them finding rhythm. Mix topspin, slice, and pace changes.",
                        tip: "Be unpredictable"
                    },
                    {
                        title: "Physical Points",
                        description: "Make them work for every point. Long rallies on clay can wear down versatile players.",
                        tip: "Stay in every point"
                    }
                ],
                grass: [
                    {
                        title: "Take Your Chances",
                        description: "On grass, opportunities come quickly. Be ready to attack with your forehand when the chance arises.",
                        tip: "Decisive shot-making"
                    },
                    {
                        title: "Match Their Aggression",
                        description: "Don't be passive against all-court players on grass. They'll take control if you let them.",
                        tip: "Fire first"
                    },
                    {
                        title: "First Strike Tennis",
                        description: "Win points quickly with your forehand. Grass rewards the player who attacks first.",
                        tip: "Look for early opportunities"
                    }
                ]
            }
        }
    },
    backhand: {
        name: "Backhand",
        video: {
            id: "yQvDjFEjjog",
            title: "Backhand Tactics & Strategy Guide"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "Redirect Their Power",
                        description: "Use their pace against them by redirecting with your backhand. Aim down the line to change the point's direction.",
                        tip: "Compact swing, solid contact"
                    },
                    {
                        title: "Two-Handed Counterpunch",
                        description: "Stand your ground and drive through backhand exchanges. Don't get pushed back - hold your position.",
                        tip: "Load your legs and rotate"
                    },
                    {
                        title: "Slice to Disrupt",
                        description: "Use slice backhands to change the rhythm. The low bounce disrupts aggressive baseliners' timing.",
                        tip: "Keep it deep"
                    }
                ],
                clay: [
                    {
                        title: "Heavy Topspin Rally",
                        description: "Match their topspin with yours. On clay, a solid backhand rally game wears down aggressive players.",
                        tip: "Good racket head speed"
                    },
                    {
                        title: "Defensive Slice",
                        description: "Use slice to stay in points when pushed back. On clay, a deep slice is very effective defensively.",
                        tip: "Get under the ball"
                    },
                    {
                        title: "Cross-Court Base",
                        description: "Rally crosscourt until you get an opening. Clay gives you time to work the point.",
                        tip: "Patience and consistency"
                    }
                ],
                grass: [
                    {
                        title: "Low Driving Backhand",
                        description: "Keep backhand shots low on grass. This prevents aggressive players from attacking your ball.",
                        tip: "Flatten out your swing"
                    },
                    {
                        title: "Slice Approach",
                        description: "Use the slice backhand to approach net. The low bounce on grass makes this very effective.",
                        tip: "Follow it in"
                    },
                    {
                        title: "Down-the-Line Winner",
                        description: "Look for opportunities to go down the line. On grass, the ball shoots through quickly.",
                        tip: "Take the ball early"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Aggressive Down the Line",
                        description: "Hit backhand winners down the line to end points. Don't let counterpunchers extend rallies.",
                        tip: "Be bold with shot selection"
                    },
                    {
                        title: "Take Time Away",
                        description: "Step into the court and take the ball early on your backhand side. This pressures their defense.",
                        tip: "Move forward"
                    },
                    {
                        title: "Drop Shot Mix",
                        description: "Use backhand drop shots when they're deep. Counterpunchers often struggle coming forward.",
                        tip: "Disguise is key"
                    }
                ],
                clay: [
                    {
                        title: "Power Through",
                        description: "Generate your own pace with topspin backhands. Force them to deal with your shots.",
                        tip: "Full swing, heavy ball"
                    },
                    {
                        title: "Work the Angles",
                        description: "Use sharp crosscourt backhands to move them. Then attack the open court.",
                        tip: "Set up the point"
                    },
                    {
                        title: "Approach on Short Balls",
                        description: "When they float one short, approach with a backhand and come to net.",
                        tip: "Punish weak balls"
                    }
                ],
                grass: [
                    {
                        title: "Chip and Charge",
                        description: "Slice approach shots stay low on grass. Use this to force weak replies and finish at net.",
                        tip: "Get forward quickly"
                    },
                    {
                        title: "Flat Drive Winners",
                        description: "Go for flat backhand winners. Grass helps the ball skid through for clean winners.",
                        tip: "Commit to your shots"
                    },
                    {
                        title: "Short Points",
                        description: "End points quickly before they can settle into defense. Attack with your backhand early.",
                        tip: "First strike mentality"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "Dipping Returns",
                        description: "Return serves with topspin that dips at their feet. This makes their approach volley difficult.",
                        tip: "Aim short in the court"
                    },
                    {
                        title: "Two-Handed Pass",
                        description: "Use the stability of a two-handed backhand to hit firm passing shots. Go crosscourt for the highest margin.",
                        tip: "Stay balanced"
                    },
                    {
                        title: "Lob Defense",
                        description: "When pulled wide, lob with your backhand. This resets the point and can win outright.",
                        tip: "Topspin lob is safer"
                    }
                ],
                clay: [
                    {
                        title: "High Heavy Passes",
                        description: "Hit with plenty of topspin so the ball dips over the net and below their strike zone.",
                        tip: "Full swing, lots of spin"
                    },
                    {
                        title: "Make Them Volley Up",
                        description: "On clay, your passes will dip more. Force them to hit up on volleys for easier counter-attacks.",
                        tip: "Use the surface"
                    },
                    {
                        title: "Down-the-Line Pass",
                        description: "When they cover crosscourt, go down the line. Clay gives you time to execute.",
                        tip: "Read their position"
                    }
                ],
                grass: [
                    {
                        title: "Low Returns",
                        description: "Keep returns as low as possible. On grass, a low ball is very hard to volley cleanly.",
                        tip: "Block it back"
                    },
                    {
                        title: "Flat Through Pass",
                        description: "Hit flat backhands that stay low and skid. Don't try to lift the ball too much.",
                        tip: "Straight through the ball"
                    },
                    {
                        title: "At Their Body",
                        description: "Hit directly at the net player to jam them. Often more effective than going wide.",
                        tip: "Target the body"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Solid Rally Base",
                        description: "Use your backhand to stay in points and wait for opportunities. Don't force against versatile players.",
                        tip: "Consistency first"
                    },
                    {
                        title: "Change Direction",
                        description: "Be ready to switch from crosscourt to down-the-line. Keep all-court players guessing.",
                        tip: "Set up with footwork"
                    },
                    {
                        title: "Counter-Attack",
                        description: "When they approach, use your backhand to hit firm passing shots. All-court players can be vulnerable at net.",
                        tip: "Hold your ground"
                    }
                ],
                clay: [
                    {
                        title: "Heavy Rally Ball",
                        description: "Trade heavy topspin backhands. On clay, solid technique usually wins against variety.",
                        tip: "Trust your backhand"
                    },
                    {
                        title: "Outlast Them",
                        description: "All-court players can get impatient on clay. Stay steady with your backhand and wait for errors.",
                        tip: "Mental toughness"
                    },
                    {
                        title: "Exploit Short Balls",
                        description: "When they try to transition, look for short balls to attack with your backhand.",
                        tip: "Move in quickly"
                    }
                ],
                grass: [
                    {
                        title: "Take Risks",
                        description: "Go for backhand winners when you have the chance. Grass rewards decisive play.",
                        tip: "Commit fully"
                    },
                    {
                        title: "Mix Slice and Drive",
                        description: "Vary between slice and driven backhands to keep them off balance on the fast surface.",
                        tip: "Be unpredictable"
                    },
                    {
                        title: "Quick Reactions",
                        description: "Be ready to respond quickly with your backhand. Points on grass happen fast.",
                        tip: "Stay alert"
                    }
                ]
            }
        }
    },
    serve: {
        name: "Serve",
        video: {
            id: "FQBoLhSoz3M",
            title: "Serve Tactics & Placement Strategy"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "Wide Serves to Backhand",
                        description: "Serve wide to their backhand to pull them off court. This opens up the court for your next shot.",
                        tip: "Vary the placement"
                    },
                    {
                        title: "Body Serves",
                        description: "Jam aggressive baseliners with serves at their body. They can't wind up for big returns.",
                        tip: "Target the hip"
                    },
                    {
                        title: "Heavy Kick Serve",
                        description: "Use kick serves to push them back. High bouncing serves disrupt their timing.",
                        tip: "Brush up and across"
                    }
                ],
                clay: [
                    {
                        title: "High Kick to Backhand",
                        description: "The clay surface amplifies kick serves. Target their backhand with heavy spin.",
                        tip: "Really load the spin"
                    },
                    {
                        title: "Placement Over Power",
                        description: "On clay, serve placement matters more than power. Move them around with accurate serves.",
                        tip: "Pick your spots"
                    },
                    {
                        title: "Set Up the Rally",
                        description: "Use your serve to start the point in your favor. A good serve position on clay is invaluable.",
                        tip: "Think one shot ahead"
                    }
                ],
                grass: [
                    {
                        title: "Flat and Fast",
                        description: "Hit flat serves that skid through. Aggressive baseliners struggle with low, fast serves on grass.",
                        tip: "Go for pace"
                    },
                    {
                        title: "Slice Out Wide",
                        description: "Slice serves that curve away from them on grass. The surface enhances the slide effect.",
                        tip: "Really slice across"
                    },
                    {
                        title: "Serve and Volley",
                        description: "Follow your serve to net. On grass, a big serve followed by a volley is very effective.",
                        tip: "Attack their weakness"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Power Serves",
                        description: "Hit big first serves to win free points. Counterpunchers need rallies to be effective.",
                        tip: "Go for aces"
                    },
                    {
                        title: "Serve and First Strike",
                        description: "Follow your serve with an aggressive groundstroke. Don't let them settle into the point.",
                        tip: "Attack their return"
                    },
                    {
                        title: "Wide Serves",
                        description: "Pull them wide to create open court. Follow up immediately with an attack.",
                        tip: "Think offense"
                    }
                ],
                clay: [
                    {
                        title: "Vary Spin and Pace",
                        description: "Keep them guessing with different serves. Counterpunchers groove on predictable patterns.",
                        tip: "Mix it up"
                    },
                    {
                        title: "Kick Serve + Move In",
                        description: "Hit a heavy kick serve and look to step in on the return. Take control early.",
                        tip: "Aggressive court position"
                    },
                    {
                        title: "Target Patterns",
                        description: "Establish patterns to set up winners. Counterpunchers may give short balls after wide serves.",
                        tip: "Plan ahead"
                    }
                ],
                grass: [
                    {
                        title: "Serve and Volley",
                        description: "Get to net immediately. Counterpunchers can't use their defense against net attacks on grass.",
                        tip: "Close quickly"
                    },
                    {
                        title: "Big First Serves",
                        description: "Win points on your serve before they can return. Grass amplifies serve power.",
                        tip: "High first serve percentage"
                    },
                    {
                        title: "Short Points",
                        description: "Keep points short with aggressive serving. The surface is your ally.",
                        tip: "Attack mentality"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "Keep Them Honest",
                        description: "Hit returns at their feet to make their volleys difficult. Don't give easy put-aways.",
                        tip: "Low returns"
                    },
                    {
                        title: "Heavy First Serves",
                        description: "When you're serving, use power and placement to prevent easy returns.",
                        tip: "Serve with purpose"
                    },
                    {
                        title: "Mix First and Second",
                        description: "Don't be predictable. Vary between big first serves and spinny second serves.",
                        tip: "Keep them guessing"
                    }
                ],
                clay: [
                    {
                        title: "High Spin Serves",
                        description: "Use heavy topspin serves that bounce high. This makes their approach more difficult.",
                        tip: "Kick serves work well"
                    },
                    {
                        title: "Move Them Wide",
                        description: "Serve wide to make their approach longer and give you more passing options.",
                        tip: "Create angles"
                    },
                    {
                        title: "Body Serves",
                        description: "Jam them to prevent clean approach volleys. They need to hit good volleys to win.",
                        tip: "At their body"
                    }
                ],
                grass: [
                    {
                        title: "Match Their Aggression",
                        description: "You need to be aggressive too. Big serves set up easier third-shot attacks.",
                        tip: "Attack first"
                    },
                    {
                        title: "Slice Away",
                        description: "Slice serves that slide away on grass. This disrupts their serve-volley rhythm.",
                        tip: "Use the surface"
                    },
                    {
                        title: "Consider S&V Yourself",
                        description: "If they serve and volley, try it too. Level the playing field on grass.",
                        tip: "Mirror their tactics"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Consistent First Serves",
                        description: "Get a high percentage of first serves in. This prevents all-court players from dictating.",
                        tip: "Placement over power"
                    },
                    {
                        title: "Vary Everything",
                        description: "Mix pace, spin, and placement. Don't let them anticipate your patterns.",
                        tip: "Be unpredictable"
                    },
                    {
                        title: "Serve to Set Up",
                        description: "Think about what comes after your serve. Position yourself for a strong follow-up.",
                        tip: "Two-shot thinking"
                    }
                ],
                clay: [
                    {
                        title: "Patient Construction",
                        description: "Use your serve to start points well, then construct carefully. Don't rush on clay.",
                        tip: "Build the point"
                    },
                    {
                        title: "Kick Serve Base",
                        description: "The kick serve is very effective on clay. Use it as your go-to second serve.",
                        tip: "Trust the spin"
                    },
                    {
                        title: "Target Weaknesses",
                        description: "If they have a weaker side, target it consistently with your serve placement.",
                        tip: "Exploit patterns"
                    }
                ],
                grass: [
                    {
                        title: "Aggressive Serving",
                        description: "Go for big serves on grass. All-court players need to return well to execute their game.",
                        tip: "Take risks"
                    },
                    {
                        title: "First Strike",
                        description: "Win points quickly starting with your serve. Don't give them time to show versatility.",
                        tip: "End points early"
                    },
                    {
                        title: "Serve Patterns",
                        description: "Establish serve patterns that set up your strengths. Grass rewards preparation.",
                        tip: "Know your plays"
                    }
                ]
            }
        }
    },
    volley: {
        name: "Volley",
        video: {
            id: "c7P0hBGNFPM",
            title: "Volley Tactics & Net Play Strategy"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "Deep First Volleys",
                        description: "Your first volley should be deep to push them back. This takes away their power position.",
                        tip: "Punch through the ball"
                    },
                    {
                        title: "Take Away Angles",
                        description: "Position yourself to cut off their passing lanes. Aggressive baseliners look for angles.",
                        tip: "Read their preparation"
                    },
                    {
                        title: "Firm Hands",
                        description: "Keep firm hands on volleys against hard hitters. Use their pace against them.",
                        tip: "Don't swing - redirect"
                    }
                ],
                clay: [
                    {
                        title: "Move In Carefully",
                        description: "On clay, close to net gradually. Don't rush in against players who can pass easily.",
                        tip: "Good approach first"
                    },
                    {
                        title: "Angle Away",
                        description: "Use angle volleys to pull them off court. On clay, they have time to run - make them run far.",
                        tip: "Sharp angles"
                    },
                    {
                        title: "Expect the Lob",
                        description: "Aggressive baseliners often lob on clay. Be ready to retreat and hit overheads.",
                        tip: "Watch their racket"
                    }
                ],
                grass: [
                    {
                        title: "Close Quickly",
                        description: "Get to net fast on grass. The low bounce gives you an advantage at the net position.",
                        tip: "Aggressive closes"
                    },
                    {
                        title: "Low Volleys Win",
                        description: "On grass, even low volleys are effective. The surface keeps the ball down.",
                        tip: "Stay low"
                    },
                    {
                        title: "First Volley Depth",
                        description: "Even on grass, deep first volleys matter. Set up your put-away with the first volley.",
                        tip: "Patient approach"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Put Away Quickly",
                        description: "Don't give them extra shots. Finish points decisively at net.",
                        tip: "Go for winners early"
                    },
                    {
                        title: "Crowd the Net",
                        description: "Move in tight to take away their angles. Counterpunchers need space to pass.",
                        tip: "Aggressive positioning"
                    },
                    {
                        title: "Crosscourt Put-Aways",
                        description: "Volley to the open court crosscourt. This maximizes your margin for error.",
                        tip: "Safe but effective"
                    }
                ],
                clay: [
                    {
                        title: "Force Extra Passes",
                        description: "On clay, you might need multiple volleys. Stay patient and keep closing.",
                        tip: "Persistent pressure"
                    },
                    {
                        title: "Watch the Lob",
                        description: "Counterpunchers love to lob. Be ready to retreat for overheads on clay.",
                        tip: "Cover the lob"
                    },
                    {
                        title: "Angle Winners",
                        description: "Use sharp angles to end points. Pull them off court where they can't defend.",
                        tip: "Wide targets"
                    }
                ],
                grass: [
                    {
                        title: "Press the Attack",
                        description: "On grass, net play is your biggest advantage against counterpunchers. Press it.",
                        tip: "Dominate the net"
                    },
                    {
                        title: "Quick Hands",
                        description: "Be ready for hard hit passes. The ball comes fast on grass.",
                        tip: "Stay alert"
                    },
                    {
                        title: "One and Done",
                        description: "Try to end points in one volley. Grass helps you put balls away quickly.",
                        tip: "Decisive finishing"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "Win Net Battles",
                        description: "Both of you will be at net. Be confident in your volleying ability.",
                        tip: "Trust your hands"
                    },
                    {
                        title: "Reflex Volleys",
                        description: "Expect quick exchanges. Keep your racket up and be ready for fast play.",
                        tip: "Quick reactions"
                    },
                    {
                        title: "Low Volleys Well",
                        description: "You'll face low volleys against other net players. Practice these shots.",
                        tip: "Get down low"
                    }
                ],
                clay: [
                    {
                        title: "Touch Over Power",
                        description: "On clay, finesse volleys work well. Use touch to place the ball precisely.",
                        tip: "Soft hands"
                    },
                    {
                        title: "Dink Rallies",
                        description: "Short court volley rallies can happen on clay. Be patient and pick your spot.",
                        tip: "Wait for the chance"
                    },
                    {
                        title: "Half Volleys",
                        description: "Clay often produces half volleys. Be comfortable hitting these defensive shots.",
                        tip: "Stay down"
                    }
                ],
                grass: [
                    {
                        title: "Net Dominance",
                        description: "The better volleyer wins on grass. Be aggressive and confident at net.",
                        tip: "Impose your game"
                    },
                    {
                        title: "Reflex Practice",
                        description: "Fast exchanges at net are common. Rely on trained reflexes.",
                        tip: "React don't think"
                    },
                    {
                        title: "Split Step Timing",
                        description: "Perfect your split step timing to cover all angles at net on grass.",
                        tip: "Footwork first"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Pick Your Spots",
                        description: "Don't come to net randomly. Choose moments when you have a clear advantage.",
                        tip: "Smart approaches"
                    },
                    {
                        title: "Expect Variety",
                        description: "All-court players will mix lobs, passes, and dips. Be ready for everything.",
                        tip: "Stay balanced"
                    },
                    {
                        title: "Strong First Volleys",
                        description: "Make your first volley count. All-court players punish weak approaches.",
                        tip: "Quality over quantity"
                    }
                ],
                clay: [
                    {
                        title: "Selective Approaches",
                        description: "On clay against all-court players, be very selective about coming to net.",
                        tip: "Pick great opportunities"
                    },
                    {
                        title: "Deep Setup",
                        description: "Push them deep before approaching. This limits their options for passing.",
                        tip: "Set up the point"
                    },
                    {
                        title: "Patience at Net",
                        description: "You might need multiple volleys on clay. Stay calm and keep constructing.",
                        tip: "Stay composed"
                    }
                ],
                grass: [
                    {
                        title: "Be Aggressive",
                        description: "On grass, you should look to come to net frequently. The surface rewards it.",
                        tip: "Attack mentality"
                    },
                    {
                        title: "Quick Close",
                        description: "Close the net quickly before they can show their versatility.",
                        tip: "Move forward fast"
                    },
                    {
                        title: "Put Away Winners",
                        description: "Grass helps you put away volleys. Be decisive when you have the chance.",
                        tip: "Go for it"
                    }
                ]
            }
        }
    },
    "serve return": {
        name: "Serve Return",
        video: {
            id: "6FKqOiP63lg",
            title: "Return of Serve Tactics & Strategy"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "Block Returns Deep",
                        description: "Against big servers, use their pace to block returns deep. This neutralizes their advantage.",
                        tip: "Compact swing"
                    },
                    {
                        title: "Stand Back",
                        description: "Position further back to give yourself time against aggressive servers.",
                        tip: "Adjust your position"
                    },
                    {
                        title: "Target Their Backhand",
                        description: "Return crosscourt to their weaker side. Make them play from their backhand.",
                        tip: "Consistent placement"
                    }
                ],
                clay: [
                    {
                        title: "Take Your Time",
                        description: "Clay gives you extra time on returns. Use it to set up a good position.",
                        tip: "Don't rush"
                    },
                    {
                        title: "High Returns",
                        description: "Return with height and spin. This pushes them back and starts the rally.",
                        tip: "Heavy topspin"
                    },
                    {
                        title: "Deep Neutral Returns",
                        description: "On clay, a deep neutral return is often enough. Let them make the first error.",
                        tip: "Play solid"
                    }
                ],
                grass: [
                    {
                        title: "Take Early",
                        description: "On grass, move forward to take returns early. Don't let serves kick up high.",
                        tip: "Step in"
                    },
                    {
                        title: "Low Returns",
                        description: "Keep returns low on grass. This makes their second shot more difficult.",
                        tip: "Stay down"
                    },
                    {
                        title: "Aggressive Returns",
                        description: "When possible, attack the return. Don't be passive on grass.",
                        tip: "Go for it"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Attack Second Serves",
                        description: "Counterpunchers often have weaker second serves. Step in and attack them.",
                        tip: "Punish weakness"
                    },
                    {
                        title: "Deep Power Returns",
                        description: "Hit through your returns with depth. Don't let them get comfortable.",
                        tip: "Aggressive returns"
                    },
                    {
                        title: "Down the Line",
                        description: "Go down the line occasionally to keep them honest. Open up the court.",
                        tip: "Mix it up"
                    }
                ],
                clay: [
                    {
                        title: "Heavy Returns",
                        description: "Hit with heavy spin on returns. Set the tone for the rally immediately.",
                        tip: "Topspin returns"
                    },
                    {
                        title: "Move Inside",
                        description: "Step inside the baseline to return, taking time away from them.",
                        tip: "Aggressive position"
                    },
                    {
                        title: "Immediate Offense",
                        description: "Look to take control from the return. Don't let rallies become defensive battles.",
                        tip: "Attack early"
                    }
                ],
                grass: [
                    {
                        title: "Chip and Charge",
                        description: "Slice return and come to net. This neutralizes their baseline defense.",
                        tip: "Follow the return in"
                    },
                    {
                        title: "Take Time Away",
                        description: "Step in aggressively on returns. Grass helps you attack weak second serves.",
                        tip: "Be aggressive"
                    },
                    {
                        title: "End Points Early",
                        description: "Use your return to set up quick wins. Don't extend rallies unnecessarily.",
                        tip: "First strike"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "Low Dipping Returns",
                        description: "Hit returns that land at their feet as they approach. This makes volleys difficult.",
                        tip: "Aim short in court"
                    },
                    {
                        title: "Lob Returns",
                        description: "Mix in lob returns when they crowd the net. This keeps them honest.",
                        tip: "Surprise them"
                    },
                    {
                        title: "Hard at Their Body",
                        description: "Hit returns directly at their body to jam them. They can't volley cleanly.",
                        tip: "Target the hip"
                    }
                ],
                clay: [
                    {
                        title: "Heavy Topspin Returns",
                        description: "Hit with lots of spin so the ball dips at their feet. Clay enhances this effect.",
                        tip: "Load the spin"
                    },
                    {
                        title: "Make Them Volley",
                        description: "Don't try to pass every time. Make them play volleys on clay's difficult surface.",
                        tip: "Be patient"
                    },
                    {
                        title: "High Returns",
                        description: "Hit higher returns that force weak volleys. Then attack the floater.",
                        tip: "Set up the pass"
                    }
                ],
                grass: [
                    {
                        title: "Block Back Low",
                        description: "On grass, a low blocked return is very effective. Keep it simple.",
                        tip: "Low and firm"
                    },
                    {
                        title: "Go for Passes",
                        description: "When you have time, try to pass them. Grass gives your passing shots extra speed.",
                        tip: "Commit to the pass"
                    },
                    {
                        title: "Body Returns",
                        description: "Aim at their body frequently. Grass makes volleys harder when jammed.",
                        tip: "Direct at them"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Consistent Returns",
                        description: "Focus on getting a high percentage of returns in play. Start points solidly.",
                        tip: "Make the return"
                    },
                    {
                        title: "Vary Your Returns",
                        description: "Don't be predictable. Mix placement, pace, and spin on your returns.",
                        tip: "Keep them guessing"
                    },
                    {
                        title: "Set Up Your Strengths",
                        description: "Use your return to get into positions that favor your game.",
                        tip: "Think ahead"
                    }
                ],
                clay: [
                    {
                        title: "Heavy Returns",
                        description: "Hit with weight on clay. Push them back with your returns.",
                        tip: "Topspin depth"
                    },
                    {
                        title: "Rally Mentality",
                        description: "Think of the return as the first shot of a rally. Set yourself up well.",
                        tip: "Build the point"
                    },
                    {
                        title: "Control the Pattern",
                        description: "Use your return to dictate where the rally goes. Take control early.",
                        tip: "Be proactive"
                    }
                ],
                grass: [
                    {
                        title: "Take the Ball Early",
                        description: "Move forward to return on grass. Don't let the ball bounce up.",
                        tip: "Step in"
                    },
                    {
                        title: "Attack Returns",
                        description: "Look for opportunities to attack with your return. Grass rewards aggression.",
                        tip: "Be bold"
                    },
                    {
                        title: "Mix Up Returns",
                        description: "Use slice, drive, and chip returns to keep all-court players uncomfortable.",
                        tip: "Variety is key"
                    }
                ]
            }
        }
    },
    "drop shot": {
        name: "Drop Shot",
        video: {
            id: "FwCEhSfQrQY",
            title: "Drop Shot Tactics & When to Use It"
        },
        tactics: {
            "aggressive-baseliner": {
                hard: [
                    {
                        title: "After Deep Shots",
                        description: "Hit drop shots after pushing them deep. The longer their run, the more effective.",
                        tip: "Set it up first"
                    },
                    {
                        title: "Disguise It",
                        description: "Make your drop shot look like a regular groundstroke. Deception is key.",
                        tip: "Same preparation"
                    },
                    {
                        title: "Follow It In",
                        description: "Move forward after your drop shot. Be ready to volley their reply.",
                        tip: "Take the net"
                    }
                ],
                clay: [
                    {
                        title: "Use the Surface",
                        description: "Drop shots are extremely effective on clay. The ball dies on the soft surface.",
                        tip: "Exploit clay"
                    },
                    {
                        title: "After Heavy Balls",
                        description: "Mix in drop shots after heavy topspin rallies. The change of pace is devastating.",
                        tip: "Create contrast"
                    },
                    {
                        title: "Short Angles",
                        description: "Aim for short angles that pull them way off court on clay.",
                        tip: "Sharp angles"
                    }
                ],
                grass: [
                    {
                        title: "Low Bounce",
                        description: "On grass, drop shots stay very low. Use this to your advantage.",
                        tip: "Let it die"
                    },
                    {
                        title: "Quick Execution",
                        description: "Hit drop shots quickly on grass before they can read it. Pace disguises intent.",
                        tip: "Be decisive"
                    },
                    {
                        title: "When They're Deep",
                        description: "Only drop shot when they're behind the baseline. Grass makes recovery hard.",
                        tip: "Pick your moment"
                    }
                ]
            },
            "counterpuncher": {
                hard: [
                    {
                        title: "Break Their Rhythm",
                        description: "Use drop shots to stop their defensive patterns. Force them out of comfort zone.",
                        tip: "Disrupt the pattern"
                    },
                    {
                        title: "Bring Them Forward",
                        description: "Counterpunchers often struggle at net. Drop shots expose this weakness.",
                        tip: "Change the battleground"
                    },
                    {
                        title: "Set Up Winners",
                        description: "Drop shot, then pass them or lob when they approach.",
                        tip: "Two-shot combo"
                    }
                ],
                clay: [
                    {
                        title: "Strategic Weapon",
                        description: "On clay, drop shots against counterpunchers are essential. Use them regularly.",
                        tip: "Part of your arsenal"
                    },
                    {
                        title: "Physical Toll",
                        description: "Make them run forward repeatedly. This tires them and disrupts their game.",
                        tip: "Wear them down"
                    },
                    {
                        title: "Follow With Lob",
                        description: "Drop shot, then lob when they rush forward. Classic clay court combo.",
                        tip: "Drop and lob"
                    }
                ],
                grass: [
                    {
                        title: "Net Pressure",
                        description: "Use drop shots to force them to net where they're uncomfortable.",
                        tip: "Expose weakness"
                    },
                    {
                        title: "Quick Points",
                        description: "Drop shots on grass can end points immediately. Go for winners.",
                        tip: "Be clinical"
                    },
                    {
                        title: "Mix Up Play",
                        description: "Don't let them settle into long rallies. Drop shots keep them guessing.",
                        tip: "Stay unpredictable"
                    }
                ]
            },
            "serve-volley": {
                hard: [
                    {
                        title: "When They Stay Back",
                        description: "If they're at the baseline, drop shots can be effective. Don't use against net players.",
                        tip: "Pick the right moment"
                    },
                    {
                        title: "Retreat Weapon",
                        description: "If they've pushed you back, a drop shot can reset the point.",
                        tip: "Emergency option"
                    },
                    {
                        title: "Disguised Approach",
                        description: "Use a disguised drop shot to bring them in, then pass them.",
                        tip: "Set the trap"
                    }
                ],
                clay: [
                    {
                        title: "When They Rally",
                        description: "Even serve-volleyers rally more on clay. Use drop shots in these exchanges.",
                        tip: "Adapt to clay"
                    },
                    {
                        title: "Change Direction",
                        description: "After they approach, a drop shot can catch them moving the wrong way.",
                        tip: "Wrong-foot them"
                    },
                    {
                        title: "Soft Touch",
                        description: "Use very soft drop shots on clay. The surface does the work for you.",
                        tip: "Gentle touch"
                    }
                ],
                grass: [
                    {
                        title: "Limited Use",
                        description: "Against serve-volleyers on grass, drop shots are risky. They're already close to net.",
                        tip: "Be cautious"
                    },
                    {
                        title: "Surprise Element",
                        description: "Occasional drop shots can catch them off guard when they expect a drive.",
                        tip: "Rare surprise"
                    },
                    {
                        title: "Low Skidding Drop",
                        description: "On grass, your drop shot will stay low. Make them hit up.",
                        tip: "Use the surface"
                    }
                ]
            },
            "all-court": {
                hard: [
                    {
                        title: "Test Their Movement",
                        description: "Drop shots reveal if they're truly comfortable in all areas of the court.",
                        tip: "Test them"
                    },
                    {
                        title: "Pattern Breaker",
                        description: "Use drop shots to break up predictable patterns. Keep them uncomfortable.",
                        tip: "Disrupt rhythm"
                    },
                    {
                        title: "Quality Matters",
                        description: "All-court players can handle mediocre drop shots. Make sure yours are good.",
                        tip: "Execution is key"
                    }
                ],
                clay: [
                    {
                        title: "Regular Weapon",
                        description: "Against all-court players on clay, drop shots should be part of your game.",
                        tip: "Use them often"
                    },
                    {
                        title: "After Deep Balls",
                        description: "Push them back then drop shot. Classic clay court construction.",
                        tip: "Set it up"
                    },
                    {
                        title: "Both Sides",
                        description: "Hit drop shots from both forehand and backhand. Be unpredictable.",
                        tip: "Variety"
                    }
                ],
                grass: [
                    {
                        title: "Quick Decisions",
                        description: "On grass, decide fast. All-court players will close quickly if you hesitate.",
                        tip: "Commit quickly"
                    },
                    {
                        title: "Off-Pace Change",
                        description: "The pace change is most effective on grass. Hard balls then soft drop shots.",
                        tip: "Contrast is key"
                    },
                    {
                        title: "Winner Potential",
                        description: "On grass, your drop shots can be outright winners. Go for it.",
                        tip: "Be aggressive"
                    }
                ]
            }
        }
    }
};

// Available shots for suggestions
const availableShots = Object.keys(shotTactics);

// DOM Elements
const shotSearch = document.getElementById('shot-search');
const shotSuggestions = document.getElementById('shot-suggestions');
const opponentSelect = document.getElementById('opponent-type');
const surfaceSelect = document.getElementById('surface');
const shotResults = document.getElementById('shot-results');

// Show suggestions
function showShotSuggestions(query) {
    if (!query) {
        shotSuggestions.classList.remove('active');
        return;
    }

    const matches = availableShots.filter(shot =>
        shot.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
        shotSuggestions.classList.remove('active');
        return;
    }

    shotSuggestions.innerHTML = matches.map(shot =>
        `<div class="suggestion-item" data-shot="${shot}">${shotTactics[shot].name}</div>`
    ).join('');

    shotSuggestions.classList.add('active');
}

// Get tactics for a shot
function getTactics(shot, opponent, surface) {
    const shotData = shotTactics[shot];
    if (!shotData) return [];

    const results = [];

    if (opponent === 'all' && surface === 'all') {
        // Get all tactics
        for (const opp in shotData.tactics) {
            for (const surf in shotData.tactics[opp]) {
                results.push(...shotData.tactics[opp][surf].map(t => ({
                    ...t,
                    opponent: opp,
                    surface: surf
                })));
            }
        }
    } else if (opponent === 'all') {
        // Get all opponents for specific surface
        for (const opp in shotData.tactics) {
            if (shotData.tactics[opp][surface]) {
                results.push(...shotData.tactics[opp][surface].map(t => ({
                    ...t,
                    opponent: opp,
                    surface: surface
                })));
            }
        }
    } else if (surface === 'all') {
        // Get all surfaces for specific opponent
        if (shotData.tactics[opponent]) {
            for (const surf in shotData.tactics[opponent]) {
                results.push(...shotData.tactics[opponent][surf].map(t => ({
                    ...t,
                    opponent: opponent,
                    surface: surf
                })));
            }
        }
    } else {
        // Get specific opponent and surface
        if (shotData.tactics[opponent] && shotData.tactics[opponent][surface]) {
            results.push(...shotData.tactics[opponent][surface].map(t => ({
                ...t,
                opponent: opponent,
                surface: surface
            })));
        }
    }

    return results;
}

// Format opponent name
function formatOpponent(opponent) {
    const names = {
        'aggressive-baseliner': 'Aggressive Baseliner',
        'counterpuncher': 'Counterpuncher',
        'serve-volley': 'Serve & Volley',
        'all-court': 'All-Court'
    };
    return names[opponent] || opponent;
}

// Format surface name
function formatSurface(surface) {
    const names = {
        'hard': 'Hard Court',
        'clay': 'Clay',
        'grass': 'Grass'
    };
    return names[surface] || surface;
}

// Display results
function displayShotResults(shot) {
    const opponent = opponentSelect.value;
    const surface = surfaceSelect.value;

    if (!shot || !shotTactics[shot]) {
        shotResults.innerHTML = '<div class="results-empty">Enter a shot type to see tactical recommendations</div>';
        return;
    }

    const tactics = getTactics(shot, opponent, surface);

    if (tactics.length === 0) {
        shotResults.innerHTML = '<div class="results-empty">No tactics found for this combination</div>';
        return;
    }

    const shotName = shotTactics[shot].name;
    const video = shotTactics[shot].video;

    shotResults.innerHTML = `
        <div class="result-header">
            <h3>${shotName} Tactics</h3>
            <span class="result-count">${tactics.length} strategies</span>
        </div>
        ${video ? `
        <div class="video-container">
            <h4 class="video-title">${video.title}</h4>
            <div class="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/${video.id}"
                    title="${video.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        ` : ''}
        ${tactics.map(t => `
            <div class="result-card">
                <h4>${t.title}</h4>
                <p>${t.description}</p>
                <span class="tag">${formatOpponent(t.opponent)}</span>
                <span class="tag">${formatSurface(t.surface)}</span>
                ${t.tip ? `<div class="tip">Tip: ${t.tip}</div>` : ''}
            </div>
        `).join('')}
    `;
}

// Current selected shot
let currentShot = null;

// Event Listeners
shotSearch.addEventListener('input', (e) => {
    showShotSuggestions(e.target.value);
});

shotSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase();
        const match = availableShots.find(shot => shot.toLowerCase().includes(query));
        if (match) {
            currentShot = match;
            shotSearch.value = shotTactics[match].name;
            shotSuggestions.classList.remove('active');
            displayShotResults(match);
        }
    }
});

shotSuggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        const shot = e.target.dataset.shot;
        currentShot = shot;
        shotSearch.value = shotTactics[shot].name;
        shotSuggestions.classList.remove('active');
        displayShotResults(shot);
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        shotSuggestions.classList.remove('active');
    }
});

// Filter changes
opponentSelect.addEventListener('change', () => {
    if (currentShot) {
        displayShotResults(currentShot);
    }
});

surfaceSelect.addEventListener('change', () => {
    if (currentShot) {
        displayShotResults(currentShot);
    }
});

// Initial state
shotResults.innerHTML = '<div class="results-empty">Enter a shot type to see tactical recommendations</div>';
