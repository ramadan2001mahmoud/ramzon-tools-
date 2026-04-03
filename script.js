// DOM Elements
const loader = document.getElementById('loader');
const toolsGrid = document.getElementById('toolsGrid');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const buyButton = document.getElementById('buyButton');
const closeModal = document.querySelector('.close');

// Dark Mode from localStorage
if(localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark-mode');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Tools Data
const toolsData = [
  { name: "Hammer", description: "Heavy-duty hammer for all construction needs." },
  { name: "Screwdriver Set", description: "Set of flathead and Philips screwdrivers." },
  { name: "Wrench", description: "Adjustable wrench suitable for all sizes." },
  { name: "Pliers", description: "Strong pliers for gripping and cutting." },
  { name: "Measuring Tape", description: "25ft tape for precise measurements." },
  { name: "Drill Machine", description: "Electric drill with multiple speed settings." },
  { name: "Saw", description: "Hand saw for wood cutting." },
  { name: "Level Tool", description: "Ensures surfaces are perfectly horizontal." },
  { name: "Safety Gloves", description: "Protects your hands during work." },
  { name: "Toolbox", description: "Organize all your tools in one place." },
  { name: "Paint Brush Set", description: "Set of brushes for all painting tasks." },
  { name: "Utility Knife", description: "Sharp knife for cutting various materials." },
  { name: "Sandpaper Pack", description: "Different grit sandpapers for smooth finishes." },
  { name: "Flashlight", description: "Bright flashlight for working in dark areas." },
  { name: "Wire Cutter", description: "Cuts wires cleanly and safely." }
];

// Render Tools
function renderTools(tools) {
  toolsGrid.innerHTML = "";
  tools.forEach(tool => {
    const div = document.createElement('div');
    div.className = "tool";
    div.innerHTML = `<h3>${tool.name}</h3><p>${tool.description}</p>`;
    div.addEventListener('click', () => {
      modalTitle.innerText = tool.name;
      modalDescription.innerText = tool.description;
      modal.style.display = 'block';
      localStorage.setItem('lastSelectedTool', tool.name);
    });
    toolsGrid.appendChild(div);
  });
}

// Filter
function filterTools() {
  const query = searchInput.value.toLowerCase();
  const filtered = toolsData.filter(tool => tool.name.toLowerCase().includes(query));
  renderTools(filtered);
}

// Modal Close
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if(e.target == modal) modal.style.display = 'none'; });

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderTools(toolsData);
    loader.style.display = 'none';
    toolsGrid.style.display = 'grid';
    searchContainer.style.display = 'block';

    searchInput.addEventListener('input', filterTools);

    // Highlight last selected tool
    const lastTool = localStorage.getItem('lastSelectedTool');
    if(lastTool) alert(`Last selected tool: ${lastTool}`);
  } catch(error) {
    loader.innerHTML = "Failed to load tools. Check console.";
    console.error("Error loading tools:", error);
  }
});
