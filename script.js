// Global Variables
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let currentTool = null;

// DOM Elements
const loader = document.getElementById('loader');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const toolsGrid = document.getElementById('toolsGrid');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
    
    // Apply theme
    applyTheme();
    
    // Setup navigation
    setupNavigation();
    
    // Setup theme toggle
    setupThemeToggle();
    
    // Create tools
    createTools();
    
    // Setup smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navigation Setup
function setupNavigation() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Theme Management
function setupThemeToggle() {
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
    localStorage.setItem('darkMode', isDarkMode);
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

// Tools Configuration
const toolsConfig = [
    {
        id: 'text-converter',
        title: 'Text Converter',
        icon: '🔤',
        description: 'Convert text case'
    },
    {
        id: 'word-counter',
        title: 'Word Counter',
        icon: '📝',
        description: 'Count words, characters, sentences'
    },
    {
        id: 'remove-duplicates',
        title: 'Remove Duplicates',
        icon: '🗑️',
        description: 'Remove duplicate lines'
    },
    {
        id: 'number-cleaner',
        title: 'Number Cleaner',
        icon: '🔢',
        description: 'Clean numbers from symbols'
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        icon: '🔐',
        description: 'Generate strong passwords'
    },
    {
        id: 'json-formatter',
        title: 'JSON Formatter',
        icon: '💎',
        description: 'Format and validate JSON'
    }
];

// Create Tools UI
function createTools() {
    toolsConfig.forEach((tool, index) => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild