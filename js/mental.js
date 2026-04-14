// Mental Strategies Database
const mentalStrategies = {
    nervous: {
        name: "Nervous / Anxious",
        keywords: ["nervous", "anxious", "anxiety", "scared", "worried", "tense", "butterflies", "jittery"],
        strategies: [
            {
                title: "Box Breathing Technique",
                description: "Breathe in for 4 counts, hold for 4 counts, breathe out for 4 counts, hold for 4 counts. Repeat 3-4 times between points. This activates your parasympathetic nervous system and reduces anxiety.",
                tip: "Practice this in training so it becomes automatic in matches"
            },
            {
                title: "Focus on Process, Not Outcome",
                description: "Instead of thinking about winning or losing, focus on specific technical cues. Tell yourself what to do: 'Watch the ball, bend your knees, follow through.' This shifts attention from anxiety-producing thoughts to controllable actions.",
                tip: "Pick 2-3 simple cues for your key shots"
            },
            {
                title: "Embrace the Nerves",
                description: "Reframe nervousness as excitement. Tell yourself 'I'm excited to compete' instead of 'I'm nervous.' Research shows this simple reframe improves performance because both states have similar physical symptoms.",
                tip: "Say it out loud before the match starts"
            },
            {
                title: "Establish a Pre-Point Routine",
                description: "Create a consistent routine before each point: bounce the ball a set number of times, adjust your strings, take a deep breath. Routines provide familiarity and control in pressure situations.",
                tip: "Keep your routine under 10 seconds"
            },
            {
                title: "Progressive Muscle Relaxation",
                description: "During changeovers, systematically tense and release muscle groups. Start with your hands, then arms, shoulders, and legs. This releases physical tension that accompanies nervousness.",
                tip: "Even 30 seconds can make a difference"
            }
        ]
    },
    frustrated: {
        name: "Frustrated / Angry",
        keywords: ["frustrated", "angry", "mad", "annoyed", "irritated", "upset", "furious", "rage"],
        strategies: [
            {
                title: "The 16-Second Cure",
                description: "Sports psychologist Jim Loehr found that 16 seconds is ideal between points. Use this time to: turn away from the court, take a deep breath, relax your shoulders, then refocus on the next point. Don't rush into the next point while frustrated.",
                tip: "Walk slowly to your position"
            },
            {
                title: "Physical Reset",
                description: "Use physical actions to release frustration constructively: snap your fingers, tap your leg, or squeeze your racket briefly then release. This provides an outlet without hurting your game.",
                tip: "Keep it subtle and controlled"
            },
            {
                title: "Acceptance Mindset",
                description: "Accept that mistakes are part of tennis. Even pros miss easy shots. Say to yourself 'That happened, next point.' Dwelling on errors only ensures more errors. The past point is gone forever.",
                tip: "You'll miss about 40% of your shots - that's normal"
            },
            {
                title: "Redirect Energy",
                description: "Channel your frustration into positive intensity. Instead of getting angry, get determined. Use phrases like 'Come on, let's go' rather than negative self-talk. Energy is neutral - you choose how to use it.",
                tip: "Clench your fist and say 'Come on' with intensity"
            },
            {
                title: "Zoom Out",
                description: "Remind yourself it's one point in potentially hundreds. Ask: 'Will this matter in an hour? Tomorrow? Next week?' Perspective reduces the emotional weight of individual moments.",
                tip: "Think of the bigger picture"
            },
            {
                title: "Focus on What You Can Control",
                description: "You can't control line calls, your opponent's shots, or the wind. Focus only on your effort, attitude, and preparation for the next point. Let go of everything else.",
                tip: "Make a mental list: 'I can control...'"
            }
        ]
    },
    unfocused: {
        name: "Unfocused / Distracted",
        keywords: ["unfocused", "distracted", "can't concentrate", "losing focus", "mind wandering", "not present", "scattered"],
        strategies: [
            {
                title: "Ball Focus Technique",
                description: "Focus intensely on the ball's seams and rotation. Try to read the brand name as it comes toward you. This forces your mind into the present moment and crowds out distracting thoughts.",
                tip: "Say 'bounce-hit' in rhythm with the ball"
            },
            {
                title: "One Point at a Time",
                description: "Commit to playing just this one point with full attention. Don't think about the score, the set, or the match. After the point, reset and commit to the next single point.",
                tip: "Treat each point as its own mini-match"
            },
            {
                title: "Sensory Grounding",
                description: "Use your senses to return to the present: feel your feet on the court, notice the grip in your hand, hear the sounds around you. This 5-4-3-2-1 grounding technique stops mental drift.",
                tip: "Focus on the feeling of your strings"
            },
            {
                title: "Set Process Goals",
                description: "Give yourself specific targets for each point: 'Move my feet early' or 'Follow through completely.' Having a clear focus point prevents your mind from wandering to unhelpful places.",
                tip: "Pick one focus for each game"
            },
            {
                title: "Use Trigger Words",
                description: "Create a word or phrase that snaps you back to focus: 'Here,' 'Now,' 'Ready.' Say it before each point to activate your concentration. This becomes a mental switch over time.",
                tip: "Practice using it in training"
            },
            {
                title: "Simplify Your Game",
                description: "When unfocused, reduce complexity. Hit to larger targets, add more spin for margin, don't try difficult shots. A simpler game plan requires less concentration and can help you regain focus.",
                tip: "Think: high percentage tennis"
            }
        ]
    },
    tired: {
        name: "Tired / Fatigued",
        keywords: ["tired", "fatigued", "exhausted", "low energy", "sluggish", "drained", "heavy legs", "no energy"],
        strategies: [
            {
                title: "Strategic Energy Conservation",
                description: "Prioritize energy for important points. Play smart on less crucial points - use slice, hit to the center, don't chase everything. Save your best effort for big moments.",
                tip: "30-40, 40-30, and deuce are the key points"
            },
            {
                title: "Shorten Points",
                description: "When tired, long rallies hurt you more. Take calculated risks to end points sooner. Hit with more authority, approach the net when possible, and go for winners earlier in rallies.",
                tip: "Be aggressive early in points"
            },
            {
                title: "Hydration and Nutrition",
                description: "On changeovers, take small sips of water consistently. If you have energy gels or bananas, consume them. Even mild dehydration significantly impacts performance and decision-making.",
                tip: "Don't wait until you're thirsty"
            },
            {
                title: "Mental Energy Boost",
                description: "Physical tiredness is partly mental. Use self-talk to energize: 'I've trained for this,' 'I'm getting stronger,' 'My opponent is tired too.' Your brain can override some fatigue signals.",
                tip: "Fake energy until it becomes real"
            },
            {
                title: "Controlled Breathing",
                description: "Deep, rhythmic breathing increases oxygen flow and can provide a second wind. Between points, take 3-4 deep breaths. During rallies, exhale on contact to maintain rhythm.",
                tip: "Breathe from your diaphragm"
            },
            {
                title: "Body Language Hack",
                description: "Stand tall, shoulders back, move with purpose. Research shows that powerful body language actually increases energy and testosterone while decreasing cortisol. Act energized to feel energized.",
                tip: "Never let your opponent see you're tired"
            }
        ]
    },
    losing: {
        name: "Losing / Behind in Score",
        keywords: ["losing", "behind", "down", "getting beaten", "outplayed", "losing badly", "can't win"],
        strategies: [
            {
                title: "Focus on the Process",
                description: "Stop thinking about the score and focus on playing each point well. Many matches are lost because players give up mentally before it's over. Tennis scores can change quickly.",
                tip: "Ignore the scoreboard completely"
            },
            {
                title: "Change Something",
                description: "If what you're doing isn't working, change it. Hit to different targets, vary your pace, come to net more, or serve differently. The definition of insanity is doing the same thing expecting different results.",
                tip: "Make one tactical change and commit to it"
            },
            {
                title: "Mini Goals",
                description: "Instead of thinking about winning the match, set small achievable goals: win this point, win this game, hold serve. Small victories build momentum and confidence.",
                tip: "Celebrate small wins"
            },
            {
                title: "Remember Comebacks",
                description: "Think of times you or others have come back from behind. In tennis, you're never out until match point. Many famous matches have featured incredible comebacks from seemingly impossible deficits.",
                tip: "You only need to win one point at a time"
            },
            {
                title: "Increase Intensity",
                description: "Sometimes when losing, players become passive. Do the opposite - increase your energy and effort. Move your feet faster, pump yourself up, play with more urgency.",
                tip: "Energy is contagious - energize yourself"
            },
            {
                title: "Play Free",
                description: "When behind, you have nothing to lose. Use this freedom to play without fear. Go for your shots, take risks, and play aggressively. Pressure is now on your opponent to close it out.",
                tip: "What do you have to lose?"
            }
        ]
    },
    pressure: {
        name: "Feeling Pressure / Big Points",
        keywords: ["pressure", "big point", "tight", "choking", "can't close", "match point", "set point", "break point", "important point"],
        strategies: [
            {
                title: "Stick to Your Routine",
                description: "Big points should look exactly like regular points in your preparation. Same bounces, same breathing, same routine. Don't speed up or change your process under pressure.",
                tip: "Routine creates normalcy"
            },
            {
                title: "Play the Ball, Not the Moment",
                description: "The ball doesn't know it's match point. It behaves the same as any other ball. Focus on executing your technique rather than the significance of the moment.",
                tip: "It's still just tennis"
            },
            {
                title: "Trust Your Training",
                description: "You've hit thousands of these shots in practice. Trust that your body knows what to do. Overthinking leads to tightness. Let your trained instincts take over.",
                tip: "Your body knows - trust it"
            },
            {
                title: "Commit Fully to Your Decision",
                description: "Doubt causes tentative execution. Pick your shot and commit 100%. A fully committed 'wrong' shot is often better than a hesitant 'right' shot.",
                tip: "Decisive action beats perfect planning"
            },
            {
                title: "Slow Down Time",
                description: "Under pressure, everything seems faster. Deliberately slow down: walk slower, breathe deeper, take your time between points. You have more time than you think.",
                tip: "Use the full time allowed"
            },
            {
                title: "Present Moment Focus",
                description: "Don't think about what winning or losing means. Don't think about the celebration or disappointment. Stay completely in this moment, this point, this shot.",
                tip: "Future thinking creates pressure"
            }
        ]
    },
    confident: {
        name: "Lost Confidence / Self-Doubt",
        keywords: ["no confidence", "doubt", "self-doubt", "unsure", "hesitant", "don't trust", "lost confidence", "can't believe"],
        strategies: [
            {
                title: "Recall Past Success",
                description: "Remember times you played well and won tough matches. You have evidence that you can compete and win. That player still exists inside you.",
                tip: "Keep a 'success journal' to review"
            },
            {
                title: "Positive Self-Talk",
                description: "Replace 'I can't' with 'I can.' Instead of 'Don't miss,' think 'Smooth and solid.' Your inner dialogue shapes your performance. Be your own best coach, not your worst critic.",
                tip: "Talk to yourself like you'd talk to a friend"
            },
            {
                title: "Body Language First",
                description: "Act confident even if you don't feel it. Walk with purpose, keep your head up, use positive gestures. The body can lead the mind - confident posture creates confident feelings.",
                tip: "Fake it until you feel it"
            },
            {
                title: "Focus on Effort, Not Outcome",
                description: "You can always control your effort and attitude. Commit to giving 100% effort regardless of how you're playing. Effort builds confidence because it's completely in your control.",
                tip: "Effort is always available"
            },
            {
                title: "Simplify and Succeed",
                description: "Play within yourself. Hit shots you know you can make. As you string together successful shots, confidence naturally rebuilds. Don't try to hit your way out of doubt with risky shots.",
                tip: "Stack small successes"
            },
            {
                title: "Confidence Through Preparation",
                description: "Trust the work you've done. Your training has prepared you for this. Even if results aren't showing, your preparation gives you the tools to compete.",
                tip: "Trust your training"
            }
        ]
    },
    overthinking: {
        name: "Overthinking / Analysis Paralysis",
        keywords: ["overthinking", "thinking too much", "paralysis", "confused", "too many thoughts", "in my head", "can't decide"],
        strategies: [
            {
                title: "Trust Your Instincts",
                description: "Your first instinct is usually right. When you see the ball, your trained brain knows what to do. Stop second-guessing and just play. Analysis is for practice, not matches.",
                tip: "See ball, hit ball"
            },
            {
                title: "One Thought Maximum",
                description: "If you must think, limit yourself to ONE technical thought per shot. Not three things to remember - just one. 'Watch the ball' or 'Move early' - that's it.",
                tip: "Simple thought, simple execution"
            },
            {
                title: "Feel Over Think",
                description: "Shift from thinking mode to feeling mode. Focus on the sensation of a good shot - the rhythm, the timing, the flow. Let your body's muscle memory guide you.",
                tip: "Play by feel"
            },
            {
                title: "Use Visual Cues",
                description: "Instead of verbal thoughts, use images. Picture where you want the ball to go. Visualize the shot you want to hit. Images are processed faster than words.",
                tip: "See the shot in your mind"
            },
            {
                title: "Breath Reset",
                description: "When caught in a thinking spiral, take a deep breath and exhale all your thoughts with it. Start the next point with a clear, quiet mind.",
                tip: "Breathe out the thoughts"
            },
            {
                title: "Play Aggressive",
                description: "Overthinking often leads to passive play. Force yourself to be aggressive - this requires quick decisions and leaves no time for overanalysis.",
                tip: "Action beats analysis"
            }
        ]
    },
    intimidated: {
        name: "Intimidated by Opponent",
        keywords: ["intimidated", "scared of opponent", "better player", "outmatched", "can't beat", "too good", "no chance"],
        strategies: [
            {
                title: "Focus on Yourself",
                description: "You can't control how good they are, but you can control how you play. Focus entirely on executing your game plan. What they do is irrelevant to your process.",
                tip: "Control what you can control"
            },
            {
                title: "They're Human Too",
                description: "Every player has weaknesses. Every player makes errors. Every player feels pressure. They're not a machine - they're a person who has bad days too.",
                tip: "Look for their vulnerabilities"
            },
            {
                title: "Play the Ball, Not the Name",
                description: "The ball doesn't hit harder because of who's on the other side. Respond to what the ball does, not who hit it. Each shot is just a ball to be played.",
                tip: "Balls don't have reputations"
            },
            {
                title: "Nothing to Lose Mentality",
                description: "If they're the favorite, pressure is on them. You can play freely without expectation. This freedom often produces your best tennis.",
                tip: "Underdogs have advantages"
            },
            {
                title: "Make Them Beat You",
                description: "Don't beat yourself with unforced errors. Make them earn every point. Stay in rallies, compete hard, and see what happens. Upsets happen when favorites face resistance.",
                tip: "Be stubborn"
            },
            {
                title: "Compete on Each Point",
                description: "You might not win the match, but you can win individual points. Commit to competing fully on every single point. String enough points together and anything can happen.",
                tip: "Win the point in front of you"
            }
        ]
    },
    serving: {
        name: "Struggling with Serve / Double Faults",
        keywords: ["serving", "double fault", "serve problems", "can't serve", "serving badly", "yips", "service problems"],
        strategies: [
            {
                title: "Slow Down Your Motion",
                description: "When serving breaks down, it's often because you're rushing. Slow your entire motion by 20%. Focus on smooth rhythm rather than power.",
                tip: "Rhythm over speed"
            },
            {
                title: "Simplify Your Target",
                description: "Stop aiming for corners. Just get the ball in the box. Hit to the middle of the service box if needed. A serve in play is infinitely better than a double fault.",
                tip: "Large target, high percentage"
            },
            {
                title: "Focus on the Toss",
                description: "Most serve problems start with the toss. If your toss isn't right, catch it and start over. Take your time to get a consistent toss position.",
                tip: "Good toss, good serve"
            },
            {
                title: "Breathe Before Serving",
                description: "Take a deep breath before starting your motion. Exhale slowly. This relaxes your arm and shoulder muscles, which is essential for a fluid serve.",
                tip: "Relaxed muscles move better"
            },
            {
                title: "Trust Your Second Serve",
                description: "If first serves aren't going in, commit to a reliable second serve. A spinny, safe second serve that lands consistently is a weapon because it keeps you in points.",
                tip: "Second serve is not a weakness"
            },
            {
                title: "Positive Imagery",
                description: "Before serving, visualize the ball going exactly where you want it. See and feel a successful serve in your mind before you hit it.",
                tip: "See it, then do it"
            }
        ]
    }
};

// Get all keywords for searching
const allMentalStates = Object.keys(mentalStrategies);
const allKeywords = [];
for (const state in mentalStrategies) {
    mentalStrategies[state].keywords.forEach(keyword => {
        allKeywords.push({ keyword, state });
    });
}

// DOM Elements
const mentalSearch = document.getElementById('mental-search');
const mentalSuggestions = document.getElementById('mental-suggestions');
const mentalResults = document.getElementById('mental-results');

// Find matching mental states
function findMatchingStates(query) {
    if (!query) return [];

    query = query.toLowerCase();
    const matches = new Set();

    // Check direct state names
    allMentalStates.forEach(state => {
        if (mentalStrategies[state].name.toLowerCase().includes(query)) {
            matches.add(state);
        }
    });

    // Check keywords
    allKeywords.forEach(({ keyword, state }) => {
        if (keyword.includes(query)) {
            matches.add(state);
        }
    });

    return Array.from(matches);
}

// Show suggestions
function showMentalSuggestions(query) {
    if (!query || query.length < 2) {
        mentalSuggestions.classList.remove('active');
        return;
    }

    const matches = findMatchingStates(query);

    if (matches.length === 0) {
        mentalSuggestions.classList.remove('active');
        return;
    }

    mentalSuggestions.innerHTML = matches.map(state =>
        `<div class="suggestion-item" data-state="${state}">${mentalStrategies[state].name}</div>`
    ).join('');

    mentalSuggestions.classList.add('active');
}

// Display mental strategies
function displayMentalStrategies(state) {
    const stateData = mentalStrategies[state];
    if (!stateData) {
        mentalResults.innerHTML = '<div class="results-empty">Describe how you\'re feeling to get mental strategies</div>';
        return;
    }

    mentalResults.innerHTML = `
        <div class="result-header">
            <h3>Strategies for: ${stateData.name}</h3>
            <span class="result-count">${stateData.strategies.length} techniques</span>
        </div>
        ${stateData.strategies.map(s => `
            <div class="strategy-card">
                <h4>${s.title}</h4>
                <p>${s.description}</p>
                ${s.tip ? `<div class="tip">Pro tip: ${s.tip}</div>` : ''}
            </div>
        `).join('')}
    `;
}

// Event Listeners
mentalSearch.addEventListener('input', (e) => {
    showMentalSuggestions(e.target.value);
});

mentalSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const matches = findMatchingStates(e.target.value);
        if (matches.length > 0) {
            const state = matches[0];
            mentalSearch.value = mentalStrategies[state].name;
            mentalSuggestions.classList.remove('active');
            displayMentalStrategies(state);
        }
    }
});

mentalSuggestions.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        const state = e.target.dataset.state;
        mentalSearch.value = mentalStrategies[state].name;
        mentalSuggestions.classList.remove('active');
        displayMentalStrategies(state);
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#mental .search-container')) {
        mentalSuggestions.classList.remove('active');
    }
});

// Initial state
mentalResults.innerHTML = '<div class="results-empty">Describe how you\'re feeling to get mental strategies</div>';
