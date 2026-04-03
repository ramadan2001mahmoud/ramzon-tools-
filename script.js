// Global Variables
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// DOM Elements
const loader = document.getElementById('loader');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const toolsGrid = document.getElementById('toolsGrid');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);

    applyTheme();
    setupNavigation();
    setupThemeToggle();
    createTools();
});

// Navigation
function setupNavigation() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Theme
function setupThemeToggle() {
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        applyTheme();
        localStorage.setItem('darkMode', isDarkMode);
    });
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

// Tools
const toolsConfig = [
    { title: "Text Uppercase", icon: "🔤" },
    { title: "Word Counter", icon: "📝" }
];

// Create Tools
function createTools() {
    toolsConfig.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";

        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-title">${tool.title}</div>
            </div>
            <textarea class="tool-input" placeholder="Enter text..."></textarea>
            <button onclick="runTool(this)">Run</button>
            <div class="tool-output"></div>
        `;

        toolsGrid.appendChild(card);
    });
}

// Tool Function
function runTool(btn) {
    const card = btn.parentElement;
    const input = card.querySelector(".tool-input").value;
    const output = card.querySelector(".tool-output");

    output.innerText = input.toUpperCase();
}
