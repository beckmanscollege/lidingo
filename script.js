document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            gid: 1,
            title: "Astrea Kulturhus",
            lon: 18.139,
            lat: 59.366,
            flip: true,
            html: `
                    <p>Astrea kulturhus byggs ovanpå en stor parkeringsplats mitt i centrum, där hantverk, kreativitet och möten är i fokus. Här finns verkstäder med specialutrustning för keramik, screentryck och musikstudio, samt ett café och utrymme för evenemang som marknader och spelningar.</p>
                    <p>Lidingö saknar en kulturell samlingsplats för alla kreativa och skapande människor på ön. Vi ville skapa en plats som erbjuder just detta, med ett specifikt fokus på unga men också den breda allmänheten. Astrea har ett utbud av verkstäder som möjliggör konstnärligt skapande. Ett nytt kulturhus tror vi  skulle stärka gemenskapen, inkludera fler och berika kulturlivet på ön.</p>
                    <img src="assets/1/astreakulturhus1.jpg" />
                    <img src="assets/1/astreakulturhus2.jpg" />
                    <img src="assets/1/astreakulturhus3.jpg" />
                    <img src="assets/1/astreakulturhus4.jpg" />
                    <img src="assets/1/astreakulturhus5.jpg" />
                    <img src="assets/1/astreakulturhus6.jpg" />
                    <img src="assets/1/astreakulturhus7.jpg" />
                    <img src="assets/1/astreakulturhus8.jpg" />
                    <img src="assets/1/astreakulturhus9.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Iris Berglund, Stephanie Holmén, Olle Svensson</p>
                `,
        },
        {
            gid: 2,
            title: "Optiktornet MinusEtt",
            lon: 18.1556,
            lat: 59.3472,
            html: `
                    <p>Optiktornet MinusEtt är en mötesplats för Lidingös konst- och designskolor i det övergivna Optiktornet och bergrummet i AGA. Här kan studenter och allmänhet samlas för utställningar och evenemang, vilket ger Lidingö en ny, spännande plats som lockar en ung, kreativ målgrupp.</p>
                    <p>Lidingö har länge varit känt som en exklusiv, anrik och naturnära plats för familjer och äldre, men saknar en tydlig mötesplats för yngre konstnärer och designers. Trots att flera konst- och designskolor finns på ön, är kontakten mellan studenterna bristfällig. Vi vill därför skapa en gemensam plats där de kan samlas, knyta kontakter och visa upp sina projekt.</p>
                    <p>Optiktornet MinusEtt ägs gemensamt av Lidingös konst- och designskolor och drivs av skolornas alumner. Skandia Fastigheter och Lidingö Kommun har bidragit med lokaler för att främja konst, attrahera yngre målgrupper och stärka sitt varumärke. Optiktornet och bergrummet renoveras för att rymma en bar och säkra utställningslokaler. Verksamheten finansieras genom försäljning, sponsorer och bidrag. Skolorna ansvarar för lokalerna, alumner för driften, och studenter arrangerar evenemang. Via Optiktornet MinusEtt's hemsida kan allmänheten följa aktiviteter och studenter boka utställningar.</p>
                    <img src="assets/2/optiktornetminusett1.jpg" />
                    <img src="assets/2/optiktornetminusett2.jpg" />
                    <img src="assets/2/optiktornetminusett3.jpg" />
                    <img src="assets/2/optiktornetminusett4.jpg" />
                    <img src="assets/2/optiktornetminusett5.jpg" />
                    <img src="assets/2/optiktornetminusett6.jpg" />
                    <img src="assets/2/optiktornetminusett7.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Lina Johansson, Olle Ljung, Edda Eliasson</p>
                `,
        },
        {
            gid: 3,
            title: "Viveka",
            lon: 18.114561,
            lat: 59.383096,
            html: `
                    <p>På gränsens mellan norra och södra Sticklinge på Lidingö lanseras ett projekt för att antingen stärka grannskapets gemenskap - eller belysa en bristande sammanhållning i området.</p>
                    <p>Ryktet om Lidingöborna som självupptagna översittare har orsakat både osämja och dålig självbild bland Lidingöborna själva, och för att öns rykte ska kunna räddas så måste det ske en förändring inifrån och ut.</p>
                    <p>En dag så dyker det upp ett litet, portabelt växthus mitt i grannskapet. Det finns ingen tydlig avsändare eller en uttalad person som ska sköta om den. Ansvaret att hålla växten vid liv faller på samhället - för att växten ska må bra och skötas om så kommer Lidingöborna behöva samarbeta. Projektet skulle kunna se ut på olika sätt, antingen kan växthuset färdas mellan olika områden på Lidingö som en stafett, och bli ett gemensamt ansvar för hela ön, eller så kan respektive område få en egen växt.</p>
                    <img src="assets/3/viveka1.jpg" />
                    <img src="assets/3/viveka2.jpg" />
                    <img src="assets/3/viveka3.jpg" />
                    <img src="assets/3/viveka4.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Emma Bjelke Blomqvist, Wilmer Norrby, Emmy Seeger</p>
                `,
        },
        {
            gid: 4,
            title: "Tindra",
            lon: 18.13577,
            lat: 59.364163,
            html: `
                    <p>I det övergivna och nedklottrade Tindrahusets plats ska vi upprätta Tindra graffitipark. Parken ska vara ett levande galleri i konstant förändring, som hyllar Tindrahusets nuvarande roll som canvas för klotter. Projektet innefattar även en informationsskylt samt en hemsida där graffitin dokumenteras.</p>
                    <p>Tindrahuset är i mycket dåligt skick, anses vara en otrygg plats och ska rivas – men samtidigt är det kulturellt värdefullt. Graffitiparken hyllar husets historia och agerar som en alternativ mötesplats, annorlunda från Lidingös villaområden och fotbollsplaner.</p>
                    <p>Vi designar parkens upplägg och hemsidans gränssnitt utifrån koncept. Modellbygge sker i kartong och spackel, som sedan slipas och målas för att efterlikna betong. Ett komplementerande element blir en skärm som visar hemsidan, samt en informationsskylt i verklig skala, som följer samma estetik som parken.</p>
                    <img src="assets/4/tindra1.jpg" />
                    <img src="assets/4/tindra2.jpg" />
                    <img src="assets/4/tindra3.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Linda Hjert, Mika Hyvönen, Tyra Östlund</p>
                `,
        },
        {
            gid: 5,
            title: "Gåshaxa x Elfvik",
            lon: 18.228281,
            lat: 59.362983,
            html: `
                    <p>Lidingö är rikt på natur och sevärdheter, dessa ligger dock långt ifrån varandra och kräver bil för att ta sig emellan. Detta projekt syftar till att knyta ihop sundet mellan Gåshaga och  Elfvik, såväl geografiskt som socialt. Med inspiration av skärgården och närliggande bebyggelse har vi formgivit en ögrupp med broar som aktiverar och leder besökarna över sundet.</p>
                    <h3>Arbetsgrupp</h3>
                    <p>Felix Elofsson, Molly Schedin, Wilma Reichardt</p>
                `,
        },
        {
            gid: 6,
            title: "Fountain",
            lon: 18.13349,
            lat: 59.36431,
            html: `
                    <p>Utifrån stadshusets nuvarande arkitektur arbetar vi med en lösning som passar in utan att ta över. Den nya fontänen ska bli en naturlig del av platsen, samtidigt som den tillför något nytt och gör stadshuset mer relevant och inbjudande för människorna som vistas i området.</p>
                    <p>Hur förändrar man uppfattningen om en byggnad utan att riva den? Många Lidingöbor upplever att stadshusets utseende inte passar in i den idylliska miljö de förknippar med ön, och vi ser istället möjligheten att förbättra platsen genom att lyfta fram dess omgivning.</p>
                    <img src="assets/6/fountain1.jpg" />
                    <img src="assets/6/fountain2.jpg" />
                    <img src="assets/6/fountain3.jpg" />
                    <img src="assets/6/fountain4.jpg" />
                    <img src="assets/6/fountain5.jpg" />
                    <img src="assets/6/fountain6.jpg" />
                    <img src="assets/6/fountain7.jpg" />
                    <img src="assets/6/fountain8.jpg" />
                    <img src="assets/6/fountain9.jpg" />
                    <img src="assets/6/fountain10.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Daniel Trewe, Ella Farestam, Linn Sehlstedt</p>
                `,
        },
        {
            gid: 7,
            title: "Ett spår av konst",
            lon: 18.179641,
            lat: 59.344519,
            html: `
                    <p>Med utgångspunkt från Lidingös historia och aktiviteter vill vi lysa upp varje station längst med lidingöbanan med konst. </p>
                    <p>Tunnelbanan är världens längsta konstutställning som lockar många turister och besökare, konsten är väldigt uppskattad av de som åker tunnelbanan och bidrar med kulturella intryck. Motivationen till tunnelbanans konst var att alla har rätt till att se konst och det tycker vi lidingöborna också har. Genom att skapa konst längst med lidingöbanan så kanske man får folk att vilja åka ut till Lidingö för att se på den, och världens längsta konstustställning blir ännu längre. Vi tror även att de som bor på Lidingö och åker lidingöbanan varje dag kommer uppskatta något som lyser upp och bryter av från omgivningen.</p>
                    <p>Våran modell är byggd av MDF som vi har målat och spacklat för att få en organisk textur. Vi har byggt en minimodell av hur ett konstverk på Kottla Station hade kunnat se ut.</p>
                    <img src="assets/7/ettsparavkonst1.jpg" />
                    <img src="assets/7/ettsparavkonst2.jpg" />
                    <img src="assets/7/ettsparavkonst3.jpg" />
                    <img src="assets/7/ettsparavkonst4.jpg" />
                    <img src="assets/7/ettsparavkonst5.jpg" />
                    <img src="assets/7/ettsparavkonst6.jpg" />
                    <img src="assets/7/ettsparavkonst7.jpg" />
                    <img src="assets/7/ettsparavkonst8.jpg" />
                    <img src="assets/7/ettsparavkonst9.jpg" />
                    <img src="assets/7/ettsparavkonst10.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Malte Lundberg, Phoebe Crookes, Ida Ädling</p>
                    
                `,
        },
        {
            gid: 8,
            title: "Vindarnas Tempel",
            lon: 18.0642,
            lat: 59.2149,
            html: `
                    <p>Vårt koncept är en bar och en social mötesplats vars utformning och funktion för samman platsens historiska kontext med dess nuvarande kontext. Temat rörelse har lett oss till att skapa en cykelbar med tillhörande barbord, för att bjuda in folk i rörelse att stanna upp för en kort stund.</p>
                    <p>Platsen är i dagsläget ett "mellanområde", den bjuder halvt in cyklister och fotgängare (bron är enbart till för cykel/gång) men ingen stannar faktiskt där, då platsen saknar funktion. Med baren och de nya cykelborden på plats så finns det en anledning och möjlighet för folk att enkelt stanna på vägen till något annat, eller ha platsen som en destination i sig.</p>
                    <p>Utformandet sker i olika medier. Skalmodellen (1:100) är gjord med laserskuren MDF, olika typer av papper, metallstänger och lera. Skalmodellen på barborden är i 1:10 och gjord av MDF. Kompletterande så har vi även gjort konceptrenderingar med hjälp av CAD och Blender.</p>
                    <img src="assets/8/vindarnastempel1.jpg" />
                    <img src="assets/8/vindarnastempel2.jpg" />
                    <img src="assets/8/vindarnastempel3.jpg" />
                    <h3>Arbetsgrupp</h3>
                    <p>Celine Skolleborg, Bobby Rahman, Hanna Hedberg, Filippa Holm</p>
                `,
        },
    ];

    const grid = document.querySelector(".grid");
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenTitle = document.getElementById("fullscreenTitle");
    const fullscreenContent = document.getElementById("fullscreenContent");
    const modelContainer = document.getElementById("modelContainer");

    /**
     * Determines if the device is desktop based on user agent.
     */
    const isDesktop = () =>
        !/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS/i.test(
            navigator.userAgent
        );

    /**
     * Generates a Google Maps link for given longitude and latitude.
     */
    const generateGoogleMapsLink = (lon, lat) =>
        `https://www.google.com/maps?q=${lat},${lon}&z=15`;

    /**
     * Opens a project in fullscreen view based on its ID and updates the hash.
     */
    const openProjectById = (projectId) => {
        const project = projects.find((p) => p.gid === projectId);
        if (!project) {
            console.error(`Project with ID ${projectId} not found.`);
            return;
        }

        // Update hash in the URL
        window.history.pushState(null, "", `#${projectId}`);

        fullscreen.style.display = "flex";
        fullscreenTitle.textContent = project.title || "Untitled";
        fullscreenContent.innerHTML = `
            <a href="${generateGoogleMapsLink(
                project.lon,
                project.lat
            )}" target="_blank">
                ${project.lat}, ${project.lon}
            </a>
        `;
        fullscreenContent.innerHTML += project.html || "";

        modelContainer.innerHTML = ""; // Clear previous model
        const modelViewer = document.createElement("model-viewer");
        modelViewer.setAttribute("src", `assets/${project.gid}/model.glb`);
        modelViewer.setAttribute("auto-rotate", true);
        modelViewer.setAttribute("preload", true);
        modelViewer.setAttribute("camera-controls", true);
        modelViewer.style.width = "100%";
        modelViewer.style.height = "100%";
        modelContainer.appendChild(modelViewer);
    };

    /**
     * Initializes the grid with project cells.
     */
    const initializeGrid = () => {
        projects.forEach((project, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-index", index);

            const modelViewer = document.createElement("model-viewer");

            if (isDesktop()) {
                modelViewer.setAttribute(
                    "src",
                    `assets/${project.gid}/model.glb`
                );
            } else {
                const shadowRoot = modelViewer.shadowRoot;
                // Find the #default-poster element inside the shadow root
                const defaultPoster =
                    shadowRoot.querySelector("#default-poster");
                // Apply custom styles to the default poster
                defaultPoster.style.backgroundSize = "cover";
                modelViewer.setAttribute(
                    "poster",
                    `assets/${project.gid}/poster.jpg`
                );
            }
            modelViewer.setAttribute("auto-rotate", true);
            modelViewer.setAttribute("preload", true);
            // modelViewer.setAttribute("skybox-image", `assets/${project.gid}/skybox.jpg`);

            cell.appendChild(modelViewer);
            grid.appendChild(cell);

            cell.addEventListener("click", () => openProjectById(project.gid));
        });
    };

    /**
     * Handles fullscreen close actions and clears the hash.
     */
    const closeFullscreen = () => {
        fullscreen.style.display = "none";
        modelContainer.innerHTML = ""; // Clear the model viewer
        window.history.pushState(null, "", window.location.pathname); // Remove the hash
    };

    // Event Listeners
    fullscreenTitle.addEventListener("click", closeFullscreen);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeFullscreen();
    });

    // Handle URL hash to open project automatically
    const hash = window.location.hash;
    if (hash) {
        const projectId = parseInt(hash.replace("#", ""), 10);
        if (!isNaN(projectId)) openProjectById(projectId);
    }

    // Initialize the grid on page load
    initializeGrid();

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    /**
     * Applies a random background color to each cell.
     */
    const applyRandomBackgroundColors = () => {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            const randomColor = getRandomColor();
            cell.style.setProperty("--bg-color", randomColor);
        });
    };

    applyRandomBackgroundColors();
});
