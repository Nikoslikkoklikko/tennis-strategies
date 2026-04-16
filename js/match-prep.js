// Match Preparation AI - Game Plan Generator

// Drills Database
const drillsDatabase = {
    forehand: {
        offensive: [
            {
                name: "Inside-Out Forehand Drill",
                description: "Start at the center, have feeder hit to your backhand side. Run around and hit inside-out forehands to the ad court.",
                duration: "15 minutes",
                focus: "Footwork, power, angle creation",
                video: "Ky3LnN5fzpE"
            },
            {
                name: "Crosscourt Rally with Targets",
                description: "Rally crosscourt forehands with cones placed 3 feet from the baseline. Focus on depth and consistency.",
                duration: "10 minutes",
                focus: "Depth, consistency, topspin",
                video: "rm6Ys74Ueqk"
            },
            {
                name: "Approach Shot Practice",
                description: "Feed short balls, hit forehand approach shots down the line, then finish with a volley.",
                duration: "15 minutes",
                focus: "Transition game, net approach",
                video: "c7P0hBGNFPM"
            }
        ],
        defensive: [
            {
                name: "Deep Rally Recovery",
                description: "Partner hits deep balls, practice hitting high topspin forehands while moving back, then recover to center.",
                duration: "10 minutes",
                focus: "Defense, recovery, heavy ball",
                video: "rm6Ys74Ueqk"
            },
            {
                name: "Running Forehand Drill",
                description: "Partner hits wide balls, practice running forehands while maintaining balance and depth.",
                duration: "15 minutes",
                focus: "Movement, balance, court coverage",
                video: "rm6Ys74Ueqk"
            }
        ]
    },
    backhand: {
        offensive: [
            {
                name: "Down-the-Line Backhand Drill",
                description: "Rally crosscourt, then look for opportunity to go down the line. Focus on timing and flat contact.",
                duration: "15 minutes",
                focus: "Timing, flat shots, finishing",
                video: "yQvDjFEjjog"
            },
            {
                name: "Two-Handed Power Drill",
                description: "Feed medium-paced balls, drive through with full rotation. Focus on generating your own power.",
                duration: "10 minutes",
                focus: "Power generation, rotation",
                video: "yQvDjFEjjog"
            }
        ],
        defensive: [
            {
                name: "Slice Backhand Control",
                description: "Practice slice backhands to deep targets. Focus on staying low and keeping the ball deep.",
                duration: "10 minutes",
                focus: "Slice, depth, consistency",
                video: "yQvDjFEjjog"
            },
            {
                name: "Crosscourt Backhand Rally",
                description: "Sustained crosscourt backhand rallies. Focus on consistency and gradually increasing pace.",
                duration: "15 minutes",
                focus: "Consistency, building points",
                video: "yQvDjFEjjog"
            }
        ]
    },
    serve: {
        power: [
            {
                name: "Flat Serve Target Practice",
                description: "Place targets in corners of service box. Hit flat serves aiming for targets. Track percentage.",
                duration: "15 minutes",
                focus: "Power, placement, accuracy",
                video: "FQBoLhSoz3M"
            },
            {
                name: "Serve Speed Building",
                description: "Start at 70% power, gradually increase to 100%. Focus on fluid motion and acceleration.",
                duration: "10 minutes",
                focus: "Power development, technique",
                video: "FQBoLhSoz3M"
            }
        ],
        spin: [
            {
                name: "Kick Serve Development",
                description: "Practice kick serves focusing on brush up motion. Target deep in the box with high net clearance.",
                duration: "15 minutes",
                focus: "Spin, consistency, bounce",
                video: "FQBoLhSoz3M"
            },
            {
                name: "Slice Serve Wide",
                description: "Practice slice serves to the wide targets. Focus on sidespin and pulling opponent off court.",
                duration: "10 minutes",
                focus: "Slice, angles, deception",
                video: "FQBoLhSoz3M"
            }
        ],
        tactical: [
            {
                name: "Serve + 1 Pattern",
                description: "Serve to specific location, then hit predetermined groundstroke. Practice serve patterns.",
                duration: "20 minutes",
                focus: "Patterns, point construction",
                video: "FQBoLhSoz3M"
            },
            {
                name: "Body Serve Practice",
                description: "Practice serving directly at the body. Focus on jamming the returner.",
                duration: "10 minutes",
                focus: "Placement, jamming opponent",
                video: "FQBoLhSoz3M"
            }
        ]
    },
    volley: {
        technique: [
            {
                name: "Volley-Volley Drill",
                description: "Both players at net, hit volleys back and forth. Focus on soft hands and control.",
                duration: "10 minutes",
                focus: "Touch, reflexes, control",
                video: "c7P0hBGNFPM"
            },
            {
                name: "Low Volley Practice",
                description: "Partner hits balls at your feet. Practice staying low and blocking volleys back deep.",
                duration: "10 minutes",
                focus: "Low volleys, defense at net",
                video: "c7P0hBGNFPM"
            }
        ],
        movement: [
            {
                name: "Approach and Volley",
                description: "Hit approach shot, close to net, hit volley. Focus on split step timing.",
                duration: "15 minutes",
                focus: "Transition, movement, closing",
                video: "c7P0hBGNFPM"
            },
            {
                name: "Serve and Volley Drill",
                description: "Serve and immediately come to net. Practice first volley placement.",
                duration: "15 minutes",
                focus: "Serve and volley, first volley",
                video: "c7P0hBGNFPM"
            }
        ]
    },
    returning: {
        aggressive: [
            {
                name: "Attack Second Serve",
                description: "Partner hits second serves, step in and attack. Focus on taking the ball early.",
                duration: "15 minutes",
                focus: "Aggression, timing, positioning",
                video: "6FKqOiP63lg"
            },
            {
                name: "Return Winner Drill",
                description: "Practice going for return winners down the line. Focus on reading the serve.",
                duration: "10 minutes",
                focus: "Reading serve, finishing",
                video: "6FKqOiP63lg"
            }
        ],
        defensive: [
            {
                name: "Block Return Drill",
                description: "Against hard serves, practice compact block returns. Focus on solid contact and depth.",
                duration: "10 minutes",
                focus: "Compact swing, neutralizing",
                video: "6FKqOiP63lg"
            },
            {
                name: "Chip Return Practice",
                description: "Practice slice chip returns that stay low. Good against serve-volleyers.",
                duration: "10 minutes",
                focus: "Slice, low balls, control",
                video: "6FKqOiP63lg"
            }
        ]
    },
    movement: {
        speed: [
            {
                name: "Spider Drill",
                description: "Start at center, touch each corner of the court and return to center. 5 repetitions.",
                duration: "10 minutes",
                focus: "Speed, agility, recovery",
                video: null
            },
            {
                name: "Suicide Runs",
                description: "Sprint to service line, back to baseline, to net, back to baseline. 6 repetitions.",
                duration: "10 minutes",
                focus: "Conditioning, speed",
                video: null
            }
        ],
        footwork: [
            {
                name: "Shadow Swings",
                description: "Move to positions on court and shadow swing without ball. Focus on proper footwork.",
                duration: "10 minutes",
                focus: "Footwork patterns, positioning",
                video: null
            },
            {
                name: "Ladder Drills",
                description: "Agility ladder exercises: quick feet, lateral movements, in-out patterns.",
                duration: "10 minutes",
                focus: "Quick feet, coordination",
                video: null
            }
        ]
    },
    dropshot: {
        technique: [
            {
                name: "Drop Shot Touch Drill",
                description: "From baseline, practice drop shots that land in service box. Focus on soft hands.",
                duration: "10 minutes",
                focus: "Touch, disguise, feel",
                video: "FwCEhSfQrQY"
            },
            {
                name: "Drop Shot + Lob",
                description: "Hit drop shot, partner runs in, then lob over them. Practice the combination.",
                duration: "15 minutes",
                focus: "Combinations, strategy",
                video: "FwCEhSfQrQY"
            }
        ]
    },
    mental: {
        focus: [
            {
                name: "Ball Focus Meditation",
                description: "Hit balls while focusing only on the ball's rotation and contact point. Clear all other thoughts.",
                duration: "10 minutes",
                focus: "Concentration, present moment",
                video: null
            },
            {
                name: "Pressure Point Simulation",
                description: "Play points starting at 30-40 or deuce. Practice performing under pressure.",
                duration: "20 minutes",
                focus: "Pressure handling, clutch play",
                video: null
            }
        ],
        routine: [
            {
                name: "Pre-Point Routine Practice",
                description: "Practice your between-point routine: bounces, breaths, self-talk. Make it automatic.",
                duration: "15 minutes",
                focus: "Routine, consistency, calm",
                video: null
            },
            {
                name: "Visualization Session",
                description: "Close eyes and visualize playing points perfectly. See successful shots in detail.",
                duration: "10 minutes",
                focus: "Mental imagery, confidence",
                video: null
            }
        ]
    }
};

// Tactical Plans Database
const tacticalPlans = {
    "aggressive-baseliner": {
        general: [
            "Avoid getting into baseline power exchanges where they dominate",
            "Use variety to disrupt their rhythm - change pace, spin, and height",
            "Consider coming to net to take away their comfortable rally position",
            "Target their backhand which is often less powerful than their forehand"
        ],
        surface: {
            hard: "Keep balls deep to push them back. Mix in slice to change the pace. Look for short balls to attack.",
            clay: "Use heavy topspin to push them back. Be patient and construct points. Drop shots work well when they're deep.",
            grass: "Take the ball early to reduce their time. Come to net more often. Flat shots that stay low are effective."
        }
    },
    "counterpuncher": {
        general: [
            "Don't try to hit through them - they'll retrieve everything",
            "Come to net to make them hit passing shots under pressure",
            "Use drop shots to bring them forward where they're less comfortable",
            "Be patient but look to take control when you get a short ball"
        ],
        surface: {
            hard: "Look to attack early in points. Use angles to move them. Come to net on approach shots.",
            clay: "Be very patient but aggressive when the opportunity arises. Drop shots are very effective.",
            grass: "Attack constantly. Serve and volley. Don't let them settle into defensive patterns."
        }
    },
    "serve-volley": {
        general: [
            "Focus on return games - low returns at their feet",
            "Be ready for net approaches and have passing shots prepared",
            "Mix in lobs to keep them honest at net",
            "On your serve, hold serve and make them serve under pressure"
        ],
        surface: {
            hard: "Hit returns low with dip. Go for passing shots when they approach. Target their body.",
            clay: "High topspin returns that dip. Make them hit low volleys. Pass them with heavy balls.",
            grass: "Block returns back low. Go for flat passing shots. Consider serve and volley yourself."
        }
    },
    "all-court": {
        general: [
            "Be prepared for anything - they're unpredictable",
            "Try to control the pattern of play before they do",
            "Stick to your strengths and make them adapt to you",
            "Watch for patterns in their play and exploit them"
        ],
        surface: {
            hard: "Stay consistent and wait for your opportunities. Don't let them dictate play.",
            clay: "Out-rally them with patience. Use the surface to slow down their variety.",
            grass: "Be aggressive and take your chances. First strike tennis works well."
        }
    },
    "pusher": {
        general: [
            "Don't let them frustrate you - stay patient",
            "Come to net to end points on your terms",
            "Hit with purpose - don't just rally with them",
            "Use drop shots and angles to move them around"
        ],
        surface: {
            hard: "Be aggressive but smart. Come to net regularly. Don't overhit trying to blast winners.",
            clay: "Very difficult matchup. Be extremely patient. Drop shots and net play are essential.",
            grass: "Attack constantly. The surface helps you end points quickly. Serve and volley."
        }
    },
    "big-server": {
        general: [
            "Stay focused on return games - every return in play matters",
            "Stand back further to return and give yourself time",
            "Put pressure on their service games when you can",
            "Break their rhythm by making them play long points"
        ],
        surface: {
            hard: "Block returns back deep. Make them play after the serve. Target second serves.",
            clay: "Stand back and use the slower surface. Return heavy balls that make them work.",
            grass: "Hardest surface to return. Stay compact, aim for the service box, just get it back."
        }
    }
};

// Mental Plans Database
const mentalPlans = {
    practice: {
        pre_match: [
            "Use this match to work on specific areas of your game",
            "Set process goals rather than outcome goals",
            "Experiment with new tactics without pressure"
        ],
        during_match: [
            "Focus on execution rather than the score",
            "Try things even if they don't always work",
            "Stay positive and treat errors as learning opportunities"
        ],
        key_moments: [
            "Practice your routines even in a practice match",
            "Simulate pressure situations mentally",
            "Work on staying focused throughout"
        ]
    },
    league: {
        pre_match: [
            "Visualize yourself executing your game plan",
            "Remind yourself of your preparation and training",
            "Focus on controlling what you can control"
        ],
        during_match: [
            "Stick to your game plan in the first few games",
            "Make tactical adjustments only after evaluating what works",
            "Stay in the present moment - one point at a time"
        ],
        key_moments: [
            "Trust your training and instincts",
            "Use your breathing routine to stay calm",
            "Play the ball, not the situation"
        ]
    },
    tournament: {
        pre_match: [
            "Stick to your pre-match routine exactly",
            "Avoid overthinking - trust your preparation",
            "Channel nervous energy into focused intensity"
        ],
        during_match: [
            "Play your game, not your opponent's",
            "Stay composed regardless of score or situation",
            "Focus on process goals between points"
        ],
        key_moments: [
            "Big points are just regular points - same routine",
            "Take your time between points when you need to",
            "Commit fully to every shot - no tentative play"
        ]
    },
    finals: {
        pre_match: [
            "Remind yourself you earned the right to be here",
            "Embrace the pressure - it's a privilege to be in a final",
            "Your opponent feels the same pressure - maybe more"
        ],
        during_match: [
            "The bigger the moment, the simpler your focus should be",
            "Don't change what got you here",
            "Stay physically active - move your feet, stay engaged"
        ],
        key_moments: [
            "Play to win, not to avoid losing",
            "This is what you train for - enjoy the challenge",
            "Champions make big shots when they matter most"
        ]
    }
};

// Get checked values from checkbox group
function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Generate tactical recommendations based on inputs
function generateTacticalPlan(opponentStyle, surface, oppStrengths, oppWeaknesses, myStrengths) {
    const tactics = [];
    const stylePlan = tacticalPlans[opponentStyle];

    // Add general tactics for opponent style
    tactics.push({
        category: "General Strategy vs " + formatStyle(opponentStyle),
        items: stylePlan.general,
        priority: "high"
    });

    // Add surface-specific tactics
    tactics.push({
        category: "Surface-Specific Tactics (" + formatSurface(surface) + ")",
        items: [stylePlan.surface[surface]],
        priority: "high"
    });

    // Add tactics based on opponent weaknesses
    if (oppWeaknesses.length > 0) {
        const weaknessTactics = [];
        if (oppWeaknesses.includes('forehand')) {
            weaknessTactics.push("Target their forehand side consistently - make them hit the shot they don't like");
        }
        if (oppWeaknesses.includes('backhand')) {
            weaknessTactics.push("Rally to their backhand and build points from there");
        }
        if (oppWeaknesses.includes('serve')) {
            weaknessTactics.push("Be aggressive on return games - their serve is an opportunity for you");
        }
        if (oppWeaknesses.includes('volleys')) {
            weaknessTactics.push("Hit at their feet when they come to net. Use passing shots and lobs freely");
        }
        if (oppWeaknesses.includes('movement')) {
            weaknessTactics.push("Move them around the court. Use angles and drop shots to exploit their movement");
        }
        if (oppWeaknesses.includes('fitness')) {
            weaknessTactics.push("Extend rallies and make them work. Their level will drop as the match goes on");
        }
        if (oppWeaknesses.includes('mental')) {
            weaknessTactics.push("Stay solid early to frustrate them. Let their errors build up and affect them mentally");
        }
        if (oppWeaknesses.includes('pressure')) {
            weaknessTactics.push("Make them play the big points. Stay in points and let them feel the pressure");
        }

        if (weaknessTactics.length > 0) {
            tactics.push({
                category: "Exploiting Opponent's Weaknesses",
                items: weaknessTactics,
                priority: "high"
            });
        }
    }

    // Add tactics based on opponent strengths to avoid
    if (oppStrengths.length > 0) {
        const avoidTactics = [];
        if (oppStrengths.includes('forehand')) {
            avoidTactics.push("Avoid hitting to their forehand in neutral rallies - keep it to their backhand");
        }
        if (oppStrengths.includes('backhand')) {
            avoidTactics.push("Don't feed their backhand - look to move them or hit to their forehand");
        }
        if (oppStrengths.includes('serve')) {
            avoidTactics.push("Focus on just getting returns in play. Don't try to do too much against their serve");
        }
        if (oppStrengths.includes('volleys')) {
            avoidTactics.push("Keep them back on the baseline. Don't give them easy approaches to net");
        }
        if (oppStrengths.includes('speed')) {
            avoidTactics.push("Don't just try to hit winners past them - use changes of pace and height");
        }
        if (oppStrengths.includes('consistency')) {
            avoidTactics.push("Be patient but look to take control. Don't try to out-rally someone more consistent");
        }
        if (oppStrengths.includes('mental')) {
            avoidTactics.push("Don't expect them to give you free points. You'll need to earn every point");
        }
        if (oppStrengths.includes('power')) {
            avoidTactics.push("Don't engage in power rallies. Use their pace against them and redirect");
        }

        if (avoidTactics.length > 0) {
            tactics.push({
                category: "Neutralizing Opponent's Strengths",
                items: avoidTactics,
                priority: "medium"
            });
        }
    }

    // Add tactics to leverage your strengths
    if (myStrengths.length > 0) {
        const myTactics = [];
        if (myStrengths.includes('forehand')) {
            myTactics.push("Look to run around your backhand and use your forehand as a weapon");
        }
        if (myStrengths.includes('backhand')) {
            myTactics.push("Don't be afraid to rally backhand to backhand - you can win those exchanges");
        }
        if (myStrengths.includes('serve')) {
            myTactics.push("Be aggressive with your serve. Set up points with good serving");
        }
        if (myStrengths.includes('volleys')) {
            myTactics.push("Look for opportunities to come to net. Your volleys are a weapon");
        }
        if (myStrengths.includes('speed')) {
            myTactics.push("Use your speed to cover the court and make them hit extra shots");
        }
        if (myStrengths.includes('consistency')) {
            myTactics.push("Make them beat you. Stay in rallies and wait for their errors");
        }
        if (myStrengths.includes('mental')) {
            myTactics.push("Trust your mental strength in tight moments. You can handle pressure better");
        }
        if (myStrengths.includes('slice')) {
            myTactics.push("Use your slice to change the pace and rhythm. Mix it in regularly");
        }

        if (myTactics.length > 0) {
            tactics.push({
                category: "Leveraging Your Strengths",
                items: myTactics,
                priority: "high"
            });
        }
    }

    return tactics;
}

// Generate mental plan
function generateMentalPlan(importance, opponentStyle, oppStrengths) {
    const mentalPlan = mentalPlans[importance];
    const plan = {
        preMatch: [...mentalPlan.pre_match],
        duringMatch: [...mentalPlan.during_match],
        keyMoments: [...mentalPlan.key_moments]
    };

    // Add opponent-specific mental tips
    if (opponentStyle === 'counterpuncher' || opponentStyle === 'pusher') {
        plan.duringMatch.push("Stay patient - frustration is their weapon against you");
    }
    if (opponentStyle === 'aggressive-baseliner') {
        plan.duringMatch.push("Don't be intimidated by their power - stay solid and they'll make errors");
    }
    if (oppStrengths.includes('mental')) {
        plan.keyMoments.push("Expect them to compete hard on every point - match their intensity");
    }

    return plan;
}

// Generate drills based on match situation
function generateDrills(opponentStyle, surface, oppWeaknesses, myStrengths) {
    const drills = [];

    // Always include serve drills
    drills.push({
        category: "Serve Practice",
        drills: [
            drillsDatabase.serve.tactical[0], // Serve + 1
            surface === 'clay' ? drillsDatabase.serve.spin[0] : drillsDatabase.serve.power[0]
        ]
    });

    // Return drills based on opponent
    if (opponentStyle === 'big-server' || opponentStyle === 'serve-volley') {
        drills.push({
            category: "Return Practice",
            drills: [
                drillsDatabase.returning.defensive[0],
                drillsDatabase.returning.defensive[1]
            ]
        });
    } else {
        drills.push({
            category: "Return Practice",
            drills: [
                drillsDatabase.returning.aggressive[0],
                drillsDatabase.returning.aggressive[1]
            ]
        });
    }

    // Groundstroke drills based on opponent weaknesses
    if (oppWeaknesses.includes('backhand')) {
        drills.push({
            category: "Targeting Their Backhand",
            drills: [
                drillsDatabase.forehand.offensive[0], // Inside out
                drillsDatabase.forehand.offensive[1]  // Crosscourt
            ]
        });
    }

    if (oppWeaknesses.includes('forehand')) {
        drills.push({
            category: "Targeting Their Forehand",
            drills: [
                drillsDatabase.backhand.offensive[0], // Down the line
                drillsDatabase.backhand.offensive[1]  // Power
            ]
        });
    }

    // Net play if they're weak at net or you're good at net
    if (oppWeaknesses.includes('volleys') || myStrengths.includes('volleys')) {
        drills.push({
            category: "Net Play",
            drills: [
                drillsDatabase.volley.movement[0], // Approach and volley
                drillsDatabase.forehand.offensive[2] // Approach shot
            ]
        });
    }

    // Movement if they're slow or have bad movement
    if (oppWeaknesses.includes('movement') || oppWeaknesses.includes('fitness')) {
        drills.push({
            category: "Moving Your Opponent",
            drills: [
                drillsDatabase.dropshot.technique[0],
                drillsDatabase.dropshot.technique[1]
            ]
        });
    }

    // Mental preparation
    drills.push({
        category: "Mental Preparation",
        drills: [
            drillsDatabase.mental.focus[1], // Pressure simulation
            drillsDatabase.mental.routine[0] // Pre-point routine
        ]
    });

    return drills;
}

// Format helper functions
function formatStyle(style) {
    const styles = {
        'aggressive-baseliner': 'Aggressive Baseliner',
        'counterpuncher': 'Counterpuncher',
        'serve-volley': 'Serve & Volleyer',
        'all-court': 'All-Court Player',
        'pusher': 'Pusher',
        'big-server': 'Big Server'
    };
    return styles[style] || style;
}

function formatSurface(surface) {
    const surfaces = {
        'hard': 'Hard Court',
        'clay': 'Clay',
        'grass': 'Grass'
    };
    return surfaces[surface] || surface;
}

function formatImportance(importance) {
    const levels = {
        'practice': 'Practice Match',
        'league': 'League Match',
        'tournament': 'Tournament Match',
        'finals': 'Finals / Big Match'
    };
    return levels[importance] || importance;
}

// Generate the full match plan
function generateMatchPlan() {
    const opponentName = document.getElementById('opponent-name').value || 'Your Opponent';
    const surface = document.getElementById('match-surface').value;
    const opponentStyle = document.getElementById('opponent-style').value;
    const importance = document.getElementById('match-importance').value;
    const oppStrengths = getCheckedValues('opp-strength');
    const oppWeaknesses = getCheckedValues('opp-weakness');
    const myStrengths = getCheckedValues('my-strength');

    const tactics = generateTacticalPlan(opponentStyle, surface, oppStrengths, oppWeaknesses, myStrengths);
    const mentalPlan = generateMentalPlan(importance, opponentStyle, oppStrengths);
    const drills = generateDrills(opponentStyle, surface, oppWeaknesses, myStrengths);

    displayMatchPlan(opponentName, surface, opponentStyle, importance, tactics, mentalPlan, drills);
}

// Display the match plan
function displayMatchPlan(opponentName, surface, opponentStyle, importance, tactics, mentalPlan, drills) {
    const resultsDiv = document.getElementById('match-plan-results');

    let html = `
        <div class="match-plan">
            <div class="plan-header">
                <h3>Match Plan: vs ${opponentName}</h3>
                <div class="plan-meta">
                    <span class="meta-tag">${formatSurface(surface)}</span>
                    <span class="meta-tag">${formatStyle(opponentStyle)}</span>
                    <span class="meta-tag">${formatImportance(importance)}</span>
                </div>
            </div>

            <!-- Tactical Plan Section -->
            <div class="plan-section">
                <h4 class="section-title">
                    <span class="section-icon">&#127942;</span> Tactical Game Plan
                </h4>
                ${tactics.map(t => `
                    <div class="tactic-card ${t.priority}">
                        <h5>${t.category}</h5>
                        <ul>
                            ${t.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <!-- Mental Plan Section -->
            <div class="plan-section">
                <h4 class="section-title">
                    <span class="section-icon">&#129504;</span> Mental Game Plan
                </h4>

                <div class="mental-card">
                    <h5>Pre-Match Mindset</h5>
                    <ul>
                        ${mentalPlan.preMatch.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="mental-card">
                    <h5>During the Match</h5>
                    <ul>
                        ${mentalPlan.duringMatch.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="mental-card">
                    <h5>Key Moments Strategy</h5>
                    <ul>
                        ${mentalPlan.keyMoments.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Drills Section -->
            <div class="plan-section">
                <h4 class="section-title">
                    <span class="section-icon">&#127934;</span> Practice Drills
                </h4>
                <p class="drill-intro">Complete these drills before your match to prepare specifically for this opponent:</p>

                ${drills.map(category => `
                    <div class="drill-category">
                        <h5>${category.category}</h5>
                        ${category.drills.map(drill => `
                            <div class="drill-card">
                                <div class="drill-header">
                                    <span class="drill-name">${drill.name}</span>
                                    <span class="drill-duration">${drill.duration}</span>
                                </div>
                                <p class="drill-description">${drill.description}</p>
                                <div class="drill-focus">Focus: ${drill.focus}</div>
                                ${drill.video ? `
                                    <div class="drill-video">
                                        <button class="show-video-btn" onclick="toggleDrillVideo(this, '${drill.video}')">
                                            &#9658; Watch Demo Video
                                        </button>
                                        <div class="drill-video-container" style="display:none;"></div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>

            <!-- Quick Reference Card -->
            <div class="plan-section">
                <h4 class="section-title">
                    <span class="section-icon">&#128203;</span> Quick Reference Card
                </h4>
                <div class="quick-ref-card">
                    <div class="ref-item">
                        <strong>Key Tactic:</strong> ${tactics[0].items[0]}
                    </div>
                    <div class="ref-item">
                        <strong>Surface Tip:</strong> ${tactics[1].items[0]}
                    </div>
                    <div class="ref-item">
                        <strong>Mental Focus:</strong> ${mentalPlan.keyMoments[0]}
                    </div>
                    <div class="ref-item">
                        <strong>Remember:</strong> Play your game, trust your preparation, compete on every point.
                    </div>
                </div>
            </div>

            <div class="plan-footer">
                <p>Good luck! Trust your preparation and play your best tennis.</p>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = html;
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Toggle drill video
function toggleDrillVideo(button, videoId) {
    const container = button.nextElementSibling;
    if (container.style.display === 'none') {
        container.style.display = 'block';
        container.innerHTML = `
            <div class="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/${videoId}"
                    title="Drill Demo"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        `;
        button.innerHTML = '&#9660; Hide Video';
    } else {
        container.style.display = 'none';
        container.innerHTML = '';
        button.innerHTML = '&#9658; Watch Demo Video';
    }
}

// Event Listener with ripple effect
document.getElementById('generate-plan').addEventListener('click', function(e) {
    const btn = this;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    const rect = btn.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
    generateMatchPlan();
});
