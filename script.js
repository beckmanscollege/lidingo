document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Astrea Kulturhus",
            gid: 1,
            html: `
                    <p>Astrea kulturhus byggs ovanpå en stor parkeringsplats mitt i centrum, där hantverk, kreativitet och möten är i fokus. Här finns verkstäder med specialutrustning för keramik, screentryck och musikstudio, samt ett café och utrymme för evenemang som marknader och spelningar.</p>
                    <p>Lidingö saknar en kulturell samlingsplats för alla kreativa och skapande människor på ön. Vi ville skapa en plats som erbjuder just detta, med ett specifikt fokus på unga men också den breda allmänheten. Astrea har ett utbud av verkstäder som möjliggör konstnärligt skapande. Ett nytt kulturhus tror vi  skulle stärka gemenskapen, inkludera fler och berika kulturlivet på ön.</p>
                    <p>Modellen är byggd av laserskurna MDF skivor. Vi har sedan målat och spraymålat allt. Som en del av presentationen presenterar vi även materialprover samt skyltsystem i förminskad skala. 4 olika affischer har formgivigts för verksamheten som komminicerar Astreas utbud. Vi har även 3d-scannat modellen för att kunna presentera den digitalt.</p>
                    <img src="assets/1/astreakulturhus1.jpg" />
                    <img src="assets/1/astreakulturhus2.jpg" />
                    <img src="assets/1/astreakulturhus3.jpg" />
                    <img src="assets/1/astreakulturhus4.jpg" />
                    <img src="assets/1/astreakulturhus5.jpg" />
                    <img src="assets/1/astreakulturhus6.jpg" /
                    <p><strong>Credits:</strong>Iris Berglund, Stephanie Holmén, Olle Svensson</p>
                `,
        },
        {
            title: "Optiktornet MinusEtt",
            gid: 2,
            html: `
                    <p><strong>Credits:</strong>Lina Johansson, Olle Ljung, Edda Eliasson</p>
                `,
        },
        {
            title: "",
            gid: 3,
            html: `
                    <p><strong>Credits:</strong>Emma Bjelke Blomqvist, Wilmer Norrby, Emmy Seeger</p>
                `,
        },
        {
            title: "Tindra Grafittipark",
            gid: 4,
            html: `
                    <img src="assets/4/tindragrafittipark1.jpg" />
                    <img src="assets/4/tindragrafittipark2.jpg" />
                    <img src="assets/4/tindragrafittipark3.jpg" />
                    <p><strong>Credits:</strong>Linda Hjert, Mika Hyvönen, Tyra Östlund</p>
                `,
        },
        {
            title: "Gåshaxa x Elfvik",
            gid: 5,
            html: `
                    <p>Lidingö är rikt på natur och sevärdheter, dessa ligger dock långt ifrån varandra och kräver bil för att ta sig emellan. Detta projekt syftar till att knyta ihop sundet mellan Gåshaga och  Elfvik, såväl geografiskt som socialt. Med inspiration av skärgården och närliggande bebyggelse har vi formgivit en ögrupp med broar som aktiverar och leder besökarna över sundet.</p>
                    <p><strong>Credits:</strong>Felix Elofsson, Molly Schedin, Wilma Reichardt</p>
                `,
        },
        {
            title: "Fountain",
            gid: 6,
            html: `
                    <p>Utifrån stadshusets nuvarande arkitektur arbetar vi med en lösning som passar in utan att ta över. Den nya fontänen ska bli en naturlig del av platsen, samtidigt som den tillför något nytt och gör stadshuset mer relevant och inbjudande för människorna som vistas i området.</p>
                    <p>Hur förändrar man uppfattningen om en byggnad utan att riva den? Många Lidingöbor upplever att stadshusets utseende inte passar in i den idylliska miljö de förknippar med ön, och vi ser istället möjligheten att förbättra platsen genom att lyfta fram dess omgivning.</p>
                    <img src="assets/6/fountain1.jpg" />
                    <img src="assets/6/fountain2.jpg" />
                    <img src="assets/6/fountain3.jpg" />
                    <img src="assets/6/fountain4.jpg" />
                    <img src="assets/6/fountain5.jpg" />
                    <img src="assets/6/fountain6.jpg" />
                    <p><strong>Credits:</strong> Daniel Trewe, Ella Farestam, Linn Sehlstedt</p>
                `,
        },
        {
            title: "Ett spår av konst",
            gid: 7,
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
                    <img src="assets/7/ettsparavkonst11.jpg" />
                    <p><strong>Credits:</strong>Malte Lundberg, Phoebe Crookes, Ida Ädling</p>
                `,
        },
        {
            title: "Vindarnas Tempel",
            gid: 8,
            html: `
                    <h2>Koncept</h2>
                    <p>Med utgångspunkt från Lidingös historia och aktiviteter vill vi lysa upp varje station längst med lidingöbanan med konst. </p>
                    <h2>Problemformulering</h2>
                    <p>Tunnelbanan är världens längsta konstutställning som lockar många turister och besökare, konsten är väldigt uppskattad av de som åker tunnelbanan och bidrar med kulturella intryck. Motivationen till tunnelbanans konst var att alla har rätt till att se konst och det tycker vi lidingöborna också har. Genom att skapa konst längst med lidingöbanan så kanske man får folk att vilja åka ut till Lidingö för att se på den, och världens längsta konstustställning blir ännu längre. Vi tror även att de som bor på Lidingö och åker lidingöbanan varje dag kommer uppskatta något som lyser upp och bryter av från omgivningen.</p>
                    <p>Våran modell är byggd av MDF som vi har målat och spacklat för att få en organisk textur. Vi har byggt en minimodell av hur ett konstverk på Kottla Station hade kunnat se ut.</p>
                    <img src="assets/8/vindarnastempel1.png" />
                    <img src="assets/8/vindarnastempel2.png" />
                    <img src="assets/8/vindarnastempel3.png" />
                `,
        },
    ];

    const grid = document.querySelector(".grid");
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenTitle = document.getElementById("fullscreenTitle");
    const fullscreenContent = document.getElementById("fullscreenContent");
    const modelContainer = document.getElementById("modelContainer");

    // Generate grid dynamically
    projects.forEach((project, index) => {
        const path = project.gid;
        const modelPath = `assets/${path}/model.glb`;
        const environmentImagePath = `assets/${path}/environment.jpg`;
        const skyboxImagePath = `assets/${path}/skybox.jpg`;

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", index); // Use index to reference the project
        cell.setAttribute("data-title", project.title); // Use index to reference the project

        const modelViewer = document.createElement("model-viewer");
        modelViewer.setAttribute("src", modelPath);
        modelViewer.setAttribute("auto-rotate", true);
        modelViewer.setAttribute("preload", true);
        modelViewer.setAttribute("disable-pan", true);
        modelViewer.setAttribute("camera-controls", true);
        modelViewer.setAttribute("max-camera-orbit", "auto 90deg auto");
        // modelViewer.setAttribute("environment-image", environmentImagePath);
        modelViewer.setAttribute("interaction-prompt", "none");
        modelViewer.setAttribute("shadow-intensity", "2");
        modelViewer.setAttribute("skybox-height", "1.5m");
        // modelViewer.setAttribute("skybox-image", skyboxImagePath);
        modelViewer.setAttribute("style", "--poster-color: transparent;");

        cell.appendChild(modelViewer);
        grid.appendChild(cell);
    });

    // Show fullscreen on cell click
    grid.addEventListener("click", (e) => {
        const cell = e.target.closest(".cell");
        if (cell) {
            e;
            const index = parseInt(cell.getAttribute("data-index"), 10);
            const project = projects[index];

            fullscreen.style.display = "flex";
            fullscreenTitle.textContent = project.title || "";
            fullscreenContent.innerHTML = project.html || "";

            // Replace the model-viewer in the fullscreen model container
            modelContainer.innerHTML = "";
            const modelViewer = cell.querySelector("model-viewer");
            //modelViewer.setAttribute("ar", true);
            //modelViewer.setAttribute("ar-modes", "scene-viewer quick-look");
            if (modelViewer) {
                const clonedViewer = modelViewer.cloneNode(true);
                clonedViewer.style.width = "100%";
                clonedViewer.style.height = "100%";
                modelContainer.appendChild(clonedViewer);
            }
        }
    });

    // Close fullscreen by clicking on the title
    fullscreenTitle.addEventListener("click", () => {
        fullscreen.style.display = "none";
        modelContainer.innerHTML = "";
    });

    // Close fullscreen on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fullscreen.style.display = "none";
            modelContainer.innerHTML = "";
        }
    });

    // Prevent grid click functionality when in fullscreen mode
    fullscreen.addEventListener("click", (e) => {
        if (e.target === fullscreen) {
            fullscreen.style.display = "none";
            modelContainer.innerHTML = "";
        }
    });
});
