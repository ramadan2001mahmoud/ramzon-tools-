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

// Tools Data – 10 أدوات شائعة
const toolsData = [
  { name: "Hammer", description: "مطرقة قوية ومتينة لجميع أعمال البناء والصيانة." },
  { name: "Screwdriver Set", description: "مجموعة مفكات (Philips & Flathead) لجميع الاستخدامات." },
  { name: "Cordless Drill", description: "مثقاب كهربائي لاسلكي متعدد السرعات مع بطارية طويلة العمر." },
  { name: "Adjustable Wrench", description: "مفتاح قابل للتعديل لتناسب جميع الأحجام." },
  { name: "Pliers", description: "كماشة قوية للقص والقبض على المعادن والأسلاك." },
  { name: "Measuring Tape", description: "شريط قياس 5 متر/25 قدم لقياسات دقيقة." },
  { name: "Level Tool", description: "ميزان للتأكد من تساوي الأسطح بدقة عالية." },
  { name: "Utility Knife", description: "سكين متعدد الاستخدامات للقص الدقيق." },
  { name: "Toolbox", description: "صندوق أدوات متين لتنظيم جميع أدواتك." },
  { name: "Safety Gloves", description: "قفازات حماية للوقاية من الإصابات أثناء العمل." }
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

    // Show last selected tool
    const lastTool = localStorage.getItem('lastSelectedTool');
    if(lastTool) console.log(`Last selected tool: ${lastTool}`);
  } catch(error) {
    loader.innerHTML = "Failed to load tools. Check console.";
    console.error("Error loading tools:", error);
  }
});
