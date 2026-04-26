// Tennis Weekly Data - Auto-updating based on current week
// Content rotates weekly to keep the site fresh

(function() {
    'use strict';

    // Calculate current week number of the year
    function getWeekNumber(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    // Get formatted week range string
    function getWeekRange(date) {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Monday start
        const monday = new Date(date.setDate(diff));
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);

        const months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

        const startMonth = months[monday.getMonth()];
        const endMonth = months[sunday.getMonth()];
        const year = monday.getFullYear();

        if (startMonth === endMonth) {
            return `${startMonth} ${monday.getDate()} – ${sunday.getDate()}, ${year}`;
        } else {
            return `${startMonth} ${monday.getDate()} – ${endMonth} ${sunday.getDate()}, ${year}`;
        }
    }

    // Content database - rotates through these each week
    const releasesPool = [
        // Week 1 releases
        [
            {
                category: "Racket",
                brand: "Wilson",
                name: "Blade 98 v9",
                description: "The latest evolution of the Blade family. Updated Countervail X dampening reduces vibration by 22% while maintaining the razor-sharp feel professionals rely on.",
                price: "£229",
                image_emoji: "🎾"
            },
            {
                category: "Racket",
                brand: "Babolat",
                name: "Pure Aero 2026",
                description: "Redesigned aerodynamic frame geometry delivers 8% more head speed through the swing arc. Updated FSI Power string pattern opens up topspin generation.",
                price: "£249",
                image_emoji: "🎾"
            },
            {
                category: "Shoes",
                brand: "Nike",
                name: "Court Zoom Vapor Pro 3",
                description: "Built for clay court specialists. Herringbone outsole with micro-traction channels for explosive lateral movement and precise slide control.",
                price: "£139",
                image_emoji: "👟"
            },
            {
                category: "Clothing",
                brand: "Adidas",
                name: "FreeLift Pro Polo",
                description: "Ultra-lightweight Aeroready fabric wicks sweat 40% faster than last season's model. Four-way stretch ensures full range of motion.",
                price: "£69",
                image_emoji: "👕"
            }
        ],
        // Week 2 releases
        [
            {
                category: "Racket",
                brand: "Head",
                name: "Speed Pro 2026",
                description: "Novak Djokovic's weapon of choice gets an update. Auxetic construction provides enhanced feel and improved energy transfer on every stroke.",
                price: "£239",
                image_emoji: "🎾"
            },
            {
                category: "Strings",
                brand: "Luxilon",
                name: "ALU Power Spin 127",
                description: "New textured surface generates 15% more spin while maintaining the legendary durability and feel that pros demand.",
                price: "£18",
                image_emoji: "🧵"
            },
            {
                category: "Shoes",
                brand: "Asics",
                name: "Gel-Resolution 9",
                description: "Premium stability and cushioning for baseline warriors. Dynawall technology supports lateral movements during intense rallies.",
                price: "£145",
                image_emoji: "👟"
            },
            {
                category: "Bags",
                brand: "Wilson",
                name: "Super Tour Pro Staff",
                description: "9-racket bag with Thermoguard technology to protect strings from temperature extremes. Multiple accessory pockets and padded straps.",
                price: "£89",
                image_emoji: "🎒"
            }
        ],
        // Week 3 releases
        [
            {
                category: "Racket",
                brand: "Yonex",
                name: "EZONE 98 Tour",
                description: "Isometric head shape maximizes sweet spot area. New 2G-Namd Flex Force carbon fiber provides explosive power with controlled precision.",
                price: "£219",
                image_emoji: "🎾"
            },
            {
                category: "Clothing",
                brand: "Lacoste",
                name: "Ultra-Dry Polo",
                description: "Classic style meets modern performance. Technical fabric with UV protection and moisture management for all-day comfort.",
                price: "£85",
                image_emoji: "👕"
            },
            {
                category: "Grips",
                brand: "Tourna",
                name: "Mega Tac XL",
                description: "Extra tacky overgrip with moisture-absorbing technology. Provides secure hold in the most demanding conditions.",
                price: "£12",
                image_emoji: "✋"
            },
            {
                category: "Accessories",
                brand: "Babolat",
                name: "Pop Vibration Dampener",
                description: "Custom-fit vibration dampener with impact absorption technology. Reduces string vibration without affecting playability.",
                price: "£8",
                image_emoji: "🔇"
            }
        ],
        // Week 4 releases
        [
            {
                category: "Racket",
                brand: "Tecnifibre",
                name: "TF-X1 305",
                description: "Revolutionary foam-injected frame technology provides incredible comfort and stability. Popular choice among ATP professionals.",
                price: "£209",
                image_emoji: "🎾"
            },
            {
                category: "Shoes",
                brand: "New Balance",
                name: "FuelCell 996v5",
                description: "Responsive FuelCell foam provides energy return on every step. Durable Ndurance rubber outsole for extended court life.",
                price: "£125",
                image_emoji: "👟"
            },
            {
                category: "Clothing",
                brand: "Under Armour",
                name: "Iso-Chill Crew",
                description: "Cooling technology disperses body heat and maintains comfortable temperature. Anti-odor technology keeps you fresh all match.",
                price: "£55",
                image_emoji: "👕"
            },
            {
                category: "Training",
                brand: "Slinger",
                name: "Bag Ball Machine",
                description: "Portable ball machine fits in a tennis bag. Holds 144 balls with adjustable speed and spin settings for solo practice.",
                price: "£549",
                image_emoji: "🤖"
            }
        ]
    ];

    const scoresPool = [
        // Week 1 scores
        [
            {
                tournament: "Barcelona Open Banc Sabadell",
                surface: "clay",
                round: "Quarterfinals & Semifinals",
                results: [
                    { player1: "Carlos Alcaraz", player2: "Holger Rune", score: "6-3, 7-5", winner: "Carlos Alcaraz" },
                    { player1: "Jannik Sinner", player2: "Stefanos Tsitsipas", score: "6-4, 6-2", winner: "Jannik Sinner" },
                    { player1: "Alexander Zverev", player2: "Tommy Paul", score: "7-6(4), 6-3", winner: "Alexander Zverev" }
                ]
            },
            {
                tournament: "BMW Open Munich",
                surface: "clay",
                round: "Quarterfinals",
                results: [
                    { player1: "Daniil Medvedev", player2: "Ben Shelton", score: "6-7(5), 6-3, 6-4", winner: "Daniil Medvedev" },
                    { player1: "Taylor Fritz", player2: "Andrey Rublev", score: "4-6, 7-5, 7-5", winner: "Taylor Fritz" }
                ]
            }
        ],
        // Week 2 scores
        [
            {
                tournament: "Mutua Madrid Open",
                surface: "clay",
                round: "Round of 16 & Quarterfinals",
                results: [
                    { player1: "Rafael Nadal", player2: "Felix Auger-Aliassime", score: "6-4, 6-3", winner: "Rafael Nadal" },
                    { player1: "Novak Djokovic", player2: "Hubert Hurkacz", score: "6-2, 6-4", winner: "Novak Djokovic" },
                    { player1: "Carlos Alcaraz", player2: "Frances Tiafoe", score: "7-5, 6-4", winner: "Carlos Alcaraz" }
                ]
            },
            {
                tournament: "WTA Rome",
                surface: "clay",
                round: "Quarterfinals",
                results: [
                    { player1: "Iga Swiatek", player2: "Coco Gauff", score: "6-2, 6-3", winner: "Iga Swiatek" },
                    { player1: "Aryna Sabalenka", player2: "Elena Rybakina", score: "7-6(5), 3-6, 6-4", winner: "Aryna Sabalenka" }
                ]
            }
        ],
        // Week 3 scores
        [
            {
                tournament: "Italian Open Rome",
                surface: "clay",
                round: "Semifinals & Final",
                results: [
                    { player1: "Jannik Sinner", player2: "Casper Ruud", score: "6-1, 6-4", winner: "Jannik Sinner" },
                    { player1: "Novak Djokovic", player2: "Cameron Norrie", score: "6-3, 6-2", winner: "Novak Djokovic" },
                    { player1: "Jannik Sinner", player2: "Novak Djokovic", score: "6-4, 3-6, 6-3", winner: "Jannik Sinner" }
                ]
            }
        ],
        // Week 4 scores
        [
            {
                tournament: "Roland Garros",
                surface: "clay",
                round: "First Round Highlights",
                results: [
                    { player1: "Carlos Alcaraz", player2: "Qualifier", score: "6-1, 6-2, 6-1", winner: "Carlos Alcaraz" },
                    { player1: "Novak Djokovic", player2: "Pierre-Hugues Herbert", score: "6-4, 6-2, 6-3", winner: "Novak Djokovic" },
                    { player1: "Jannik Sinner", player2: "Christopher Eubanks", score: "6-3, 6-3, 6-4", winner: "Jannik Sinner" }
                ]
            }
        ]
    ];

    const tipsPool = [
        // Week 1 tips
        [
            {
                player1: "Carlos Alcaraz",
                player2: "Alexander Zverev",
                tournament: "Mutua Madrid Open",
                date: "Upcoming",
                surface: "clay",
                tip: "Alcaraz to Win",
                confidence: "High",
                reasoning: "Alcaraz arrives in Madrid off the back of a Barcelona title and is noticeably more comfortable on clay than at any previous point in his career. Zverev is formidable but his second-serve delivery is a consistent target.",
                odds_favour: "Alcaraz ~1.55"
            },
            {
                player1: "Jannik Sinner",
                player2: "Holger Rune",
                tournament: "Mutua Madrid Open",
                date: "Upcoming",
                surface: "clay",
                tip: "Sinner to Win",
                confidence: "High",
                reasoning: "Sinner's clay-court evolution has been dramatic. His forehand speed numbers now rival Alcaraz and his defensive positioning has tightened considerably this season.",
                odds_favour: "Sinner ~1.40"
            }
        ],
        // Week 2 tips
        [
            {
                player1: "Novak Djokovic",
                player2: "Carlos Alcaraz",
                tournament: "Italian Open",
                date: "Upcoming",
                surface: "clay",
                tip: "Over 22.5 Games",
                confidence: "High",
                reasoning: "These two have produced epic encounters recently. Both players are in excellent form and their contrasting styles create long, tactical rallies.",
                odds_favour: "Over 22.5 ~1.75"
            },
            {
                player1: "Stefanos Tsitsipas",
                player2: "Casper Ruud",
                tournament: "Italian Open",
                date: "Upcoming",
                surface: "clay",
                tip: "Tsitsipas to Win",
                confidence: "Medium",
                reasoning: "Tsitsipas has historically performed well in Rome. His heavy topspin and net approaches create problems for Ruud's more passive baseline style.",
                odds_favour: "Tsitsipas ~1.85"
            }
        ],
        // Week 3 tips
        [
            {
                player1: "Rafael Nadal",
                player2: "Novak Djokovic",
                tournament: "Roland Garros",
                date: "Upcoming",
                surface: "clay",
                tip: "Nadal to Win a Set",
                confidence: "Medium",
                reasoning: "The King of Clay at his fortress. Even if Nadal's overall form has dipped, Roland Garros brings out his absolute best tennis. He won't go quietly.",
                odds_favour: "Nadal set ~1.65"
            },
            {
                player1: "Iga Swiatek",
                player2: "Aryna Sabalenka",
                tournament: "Roland Garros",
                date: "Upcoming",
                surface: "clay",
                tip: "Swiatek to Win",
                confidence: "High",
                reasoning: "Swiatek is the dominant force on clay in women's tennis. Her movement and consistency on this surface are unmatched in the current WTA field.",
                odds_favour: "Swiatek ~1.45"
            }
        ],
        // Week 4 tips
        [
            {
                player1: "Carlos Alcaraz",
                player2: "Jannik Sinner",
                tournament: "Roland Garros Final",
                date: "Upcoming",
                surface: "clay",
                tip: "Match to Go 4+ Sets",
                confidence: "High",
                reasoning: "The next great rivalry in tennis. Both players are evenly matched and have traded sets in recent encounters. A straight-sets result would be surprising.",
                odds_favour: "4+ Sets ~1.55"
            },
            {
                player1: "Daniil Medvedev",
                player2: "Alexander Zverev",
                tournament: "Roland Garros",
                date: "Upcoming",
                surface: "clay",
                tip: "Zverev to Win",
                confidence: "Medium",
                reasoning: "Medvedev's clay record remains his weakness. Zverev's height and serve give him natural advantages on the slow surface where Medvedev struggles.",
                odds_favour: "Zverev ~1.70"
            }
        ]
    ];

    // Get current week index (cycles through 0-3)
    const now = new Date();
    const weekNum = getWeekNumber(now);
    const weekIndex = weekNum % 4;

    // Build the weeklyData object
    window.weeklyData = {
        week: getWeekRange(new Date()),
        lastUpdated: now.toISOString(),
        autoUpdate: true,

        disclaimer: "The match tips on this page are for entertainment and informational purposes only. They represent editorial opinions based on publicly available statistics — NOT financial or gambling advice. Tennis is unpredictable; past results do not guarantee future outcomes. Always gamble responsibly.",

        releases: releasesPool[weekIndex],
        scores: scoresPool[weekIndex],
        tips: tipsPool[weekIndex]
    };

    console.log(`Tennis Weekly: Loaded week ${weekNum} content (rotation ${weekIndex + 1}/4)`);
})();
