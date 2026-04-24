// Tennis Weekly Section — js/weekly.js
// Reads from weeklyData (weekly-data.js) and renders the section

(function () {
    'use strict';

    // ── Surface badge colours ──────────────────────────────────────────────
    const surfaceColours = {
        clay:  { bg: '#fef3c7', color: '#92400e', border: '#fcd34d', label: 'Clay' },
        grass: { bg: '#dcfce7', color: '#14532d', border: '#86efac', label: 'Grass' },
        hard:  { bg: '#dbeafe', color: '#1e3a8a', border: '#93c5fd', label: 'Hard' }
    };

    // ── Confidence badge colours ───────────────────────────────────────────
    const confidenceColours = {
        High:   { bg: '#dcfce7', color: '#15803d', border: '#86efac' },
        Medium: { bg: '#fef9c3', color: '#a16207', border: '#fde047' },
        Low:    { bg: '#fee2e2', color: '#b91c1c', border: '#fca5a5' }
    };

    // ── Helpers ────────────────────────────────────────────────────────────
    function surfaceBadge(surface) {
        const s = surface.toLowerCase();
        const c = surfaceColours[s] || surfaceColours.hard;
        return `<span class="weekly-surface-badge" style="background:${c.bg};color:${c.color};border-color:${c.border}">${c.label}</span>`;
    }

    function confidenceBadge(confidence) {
        const c = confidenceColours[confidence] || confidenceColours.Medium;
        return `<span class="weekly-confidence-badge" style="background:${c.bg};color:${c.color};border:1px solid ${c.border}">${confidence} Confidence</span>`;
    }

    function escHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // ── Render: week label ─────────────────────────────────────────────────
    function renderWeekLabel() {
        const el = document.getElementById('weekly-week-label');
        if (el) el.textContent = 'Week of ' + weeklyData.week;
    }

    // ── Render: Releases ──────────────────────────────────────────────────
    function renderReleases() {
        const container = document.getElementById('weekly-releases-list');
        if (!container) return;

        const html = weeklyData.releases.map(item => `
            <div class="weekly-release-card">
                <div class="weekly-release-emoji">${escHtml(item.image_emoji)}</div>
                <div class="weekly-release-body">
                    <div class="weekly-release-meta">
                        <span class="weekly-release-brand">${escHtml(item.brand)}</span>
                        <span class="weekly-release-category">${escHtml(item.category)}</span>
                    </div>
                    <h4 class="weekly-release-name">${escHtml(item.name)}</h4>
                    <p class="weekly-release-desc">${escHtml(item.description)}</p>
                    <span class="weekly-price-badge">${escHtml(item.price)}</span>
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    // ── Render: Scores ────────────────────────────────────────────────────
    function renderScores() {
        const container = document.getElementById('weekly-scores-list');
        if (!container) return;

        const html = weeklyData.scores.map(tournament => {
            const matchRows = tournament.results.map(match => {
                const p1Won = match.winner === match.player1;
                const p2Won = match.winner === match.player2;
                return `
                    <div class="weekly-match-row">
                        <div class="weekly-match-players">
                            <span class="weekly-player ${p1Won ? 'weekly-player--winner' : ''}">${escHtml(match.player1)}</span>
                            <span class="weekly-vs">vs</span>
                            <span class="weekly-player ${p2Won ? 'weekly-player--winner' : ''}">${escHtml(match.player2)}</span>
                        </div>
                        <div class="weekly-match-score">${escHtml(match.score)}</div>
                    </div>
                `;
            }).join('');

            return `
                <div class="weekly-tournament-block">
                    <div class="weekly-tournament-header">
                        <div class="weekly-tournament-info">
                            <span class="weekly-tournament-name">${escHtml(tournament.tournament)}</span>
                            <span class="weekly-tournament-round">${escHtml(tournament.round)}</span>
                        </div>
                        ${surfaceBadge(tournament.surface)}
                    </div>
                    <div class="weekly-match-list">${matchRows}</div>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
    }

    // ── Render: Tips ──────────────────────────────────────────────────────
    function renderTips() {
        const container = document.getElementById('weekly-tips-list');
        if (!container) return;

        const tipCards = weeklyData.tips.map(tip => `
            <div class="weekly-tip-card">
                <div class="weekly-tip-header">
                    <div class="weekly-tip-matchup">
                        <span class="weekly-tip-player1">${escHtml(tip.player1)}</span>
                        <span class="weekly-tip-divider">vs</span>
                        <span class="weekly-tip-player2">${escHtml(tip.player2)}</span>
                    </div>
                    ${confidenceBadge(tip.confidence)}
                </div>
                <div class="weekly-tip-meta">
                    ${surfaceBadge(tip.surface)}
                    <span class="weekly-tip-tournament">${escHtml(tip.tournament)}</span>
                    <span class="weekly-tip-date">${escHtml(tip.date)}</span>
                </div>
                <div class="weekly-tip-pick">
                    <span class="weekly-tip-pick-label">Our Pick:</span>
                    <span class="weekly-tip-pick-value">${escHtml(tip.tip)}</span>
                </div>
                <p class="weekly-tip-reasoning">${escHtml(tip.reasoning)}</p>
                <div class="weekly-tip-odds">
                    <span class="weekly-tip-odds-label">Indicative odds:</span>
                    <span class="weekly-tip-odds-value">${escHtml(tip.odds_favour)}</span>
                </div>
            </div>
        `).join('');

        const disclaimerHtml = `
            <div class="weekly-disclaimer-box">
                <div class="weekly-disclaimer-title">⚠️ Important Disclaimer</div>
                <p>${escHtml(weeklyData.disclaimer)}</p>
            </div>
        `;

        container.innerHTML = tipCards + disclaimerHtml;
    }

    // ── Tab switching ─────────────────────────────────────────────────────
    function initTabs() {
        const tabBtns = document.querySelectorAll('.weekly-tab-btn');
        const tabPanels = document.querySelectorAll('.weekly-tab-panel');

        if (!tabBtns.length) return;

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const target = this.dataset.tab;

                // Update buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Update panels
                tabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.id === 'tab-' + target) {
                        panel.classList.add('active');
                    }
                });
            });
        });
    }

    // ── Bootstrap ─────────────────────────────────────────────────────────
    function init() {
        if (typeof weeklyData === 'undefined') {
            console.warn('weekly.js: weeklyData not found. Make sure weekly-data.js is loaded first.');
            return;
        }

        renderWeekLabel();
        renderReleases();
        renderScores();
        renderTips();
        initTabs();

        // Set Releases tab active on load
        const firstBtn = document.querySelector('.weekly-tab-btn[data-tab="releases"]');
        const firstPanel = document.getElementById('tab-releases');
        if (firstBtn) firstBtn.classList.add('active');
        if (firstPanel) firstPanel.classList.add('active');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
