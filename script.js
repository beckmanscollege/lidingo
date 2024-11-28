document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        title: "Astrea Kulturhus",
        description: "Astrea Kulturhus är en vision för ett nytt kulturellt centrum på Lidingö. Ett mötesplats för konst, musik och gemenskap, där invånare och besökare kan samlas för att utforska kreativa uttryck.",
        model: "assets/Bell Flower.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Optiktornet",
        description: "Optiktornet är ett utsiktstorn på Lidingö som ger besökare en fantastisk utsikt över ön och dess omgivningar. Tornet är designat för att skapa en symbol för framtidens Lidingö.",
        model: "assets/Fall Tree.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Växtskåp",
        description: "Växtskåp är ett initiativ för att skapa en grönare Lidingö genom innovativa odlingslösningar. Små växthus placeras på offentliga platser för att främja lokal matproduktion.",
        model: "assets/Flower.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Tindra Graffitipark",
        description: "Tindra Graffitipark är en plats för kreativa uttryck och gatukonst. Här får unga konstnärer möjlighet att skapa och visa upp sin konst i ett tillåtande och inspirerande miljö.",
        model: "assets/Flower1.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Lidingöbron",
        description: "Lidingöbron är en central del av infrastrukturen på Lidingö. Denna vision fokuserar på att modernisera bron för att göra den säkrare och mer miljövänlig.",
        model: "assets/Tree.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Fountain Next Level",
        description: "Fountain Next Level är en modern fontäninstallation som kombinerar vatten, ljus och konst för att skapa en visuell upplevelse på Lidingö.",
        model: "assets/Tree2.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Konst på Lidingöbanan",
        description: "Konst på Lidingöbanan är ett projekt som syftar till att försköna stationerna och tågen med konstverk som återspeglar Lidingös identitet.",
        model: "assets/Tree3.glb",
        image: "https://via.placeholder.com/600x400"
      },
      {
        title: "Vindarnas Tempel",
        description: "Vindarnas Tempel är ett utrymme för reflektion och kontemplation, designat för att fånga väder och vind som en del av upplevelsen på Lidingö.",
        model: "assets/tulip 3.glb",
        image: "https://via.placeholder.com/600x400"
      }
    ];
  
    // Shuffle projects array
    projects.sort(() => Math.random() - 0.5);
  
    const grid = document.getElementById('grid');
    const colors = ["#FFB6C1", "#ADD8E6", "#98FB98", "#FFD700", "#FFDEAD", "#AFEEEE", "#E6E6FA", "#FFE4E1"];
  
    // Randomize the color for the center cell
    const centerCell = document.querySelector('.cell.center');
    centerCell.style.setProperty('--bg-color', '#ffffff');
  
    // Add shuffled projects to the grid (skip the center cell)
    projects.forEach((project, index) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.setProperty('--bg-color', colors[Math.floor(Math.random() * colors.length)]);
      cell.setAttribute('data-title', project.title);
      cell.setAttribute('data-description', project.description);
      cell.setAttribute('data-image', project.image);
  
      const modelViewer = document.createElement('model-viewer');
      modelViewer.setAttribute('src', project.model);
      modelViewer.setAttribute('auto-rotate', true);
      modelViewer.setAttribute('preload', true);
      modelViewer.setAttribute('reveal-when-loaded', true);
      modelViewer.setAttribute('controls', true);
      modelViewer.setAttribute('background-color', 'transparent');
      modelViewer.setAttribute('style', '--poster-color: transparent;');
      modelViewer.style.width = '80%';
      modelViewer.style.height = '80%';
  
      cell.appendChild(modelViewer);
      grid.appendChild(cell);
    });
  
    const fullscreen = document.getElementById('fullscreen');
    const floatingTitle = document.getElementById('floatingTitle');
    const modelContainer = document.getElementById('modelContainer');
    const fullscreenTitle = document.getElementById('fullscreenTitle');
    const fullscreenText = document.getElementById('fullscreenText');
    const fullscreenImage = document.getElementById('fullscreenImage');
  
    // Handle click on grid cells
    grid.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell');
      if (cell && !cell.classList.contains('center')) {
        const title = cell.getAttribute('data-title');
        const description = cell.getAttribute('data-description');
        const image = cell.getAttribute('data-image');
        const modelViewer = cell.querySelector('model-viewer');
  
        fullscreenTitle.textContent = title;
        fullscreenText.textContent = description;
        fullscreenImage.src = image;
        fullscreenImage.style.display = 'block';
  
        // Clone the model-viewer element to maintain state
        const newModelViewer = modelViewer.cloneNode(true);
        newModelViewer.setAttribute('style', 'width: 100%; height: 100%;');
        modelContainer.innerHTML = '';
        modelContainer.appendChild(newModelViewer);
  
        fullscreen.style.display = 'flex';
      }
    });
  
    // Handle click on floating title to close fullscreen
    floatingTitle.addEventListener('click', () => {
      fullscreen.style.display = 'none';
      modelContainer.innerHTML = '';
    });
  });
  