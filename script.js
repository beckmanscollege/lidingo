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
                    <img src="assets/1/astreakulturhus6.jpg" />
                    <p><strong>Credits:</strong>Iris Berglund, Stephanie Holmén, Olle Svensson</p>
                `,
        },
        {
            title: "Optiktornet MinusEtt",
            gid: 2,
            html: `
                    <p>Optiktornet MinusEtt är en mötesplats för Lidingös konst- och designskolor i det övergivna Optiktornet och bergrummet i AGA. Här kan studenter och allmänhet samlas för utställningar och evenemang, vilket ger Lidingö en ny, spännande plats som lockar en ung, kreativ målgrupp.</p>
                    <p>Lidingö har länge varit känt som en exklusiv, anrik och naturnära plats för familjer och äldre, men saknar en tydlig mötesplats för yngre konstnärer och designers. Trots att flera konst- och designskolor finns på ön, är kontakten mellan studenterna bristfällig. Vi vill därför skapa en gemensam plats där de kan samlas, knyta kontakter och visa upp sina projekt.</p>
                    <p>Optiktornet MinusEtt ägs gemensamt av Lidingös konst- och designskolor och drivs av skolornas alumner. Skandia Fastigheter och Lidingö Kommun har bidragit med lokaler för att främja konst, attrahera yngre målgrupper och stärka sitt varumärke. Optiktornet och bergrummet renoveras för att rymma en bar och säkra utställningslokaler. Verksamheten finansieras genom försäljning, sponsorer och bidrag. Skolorna ansvarar för lokalerna, alumner för driften, och studenter arrangerar evenemang. Via Optiktornet MinusEtt's hemsida kan allmänheten följa aktiviteter och studenter boka utställningar.</p>
                    <p><strong>Credits:</strong>Lina Johansson, Olle Ljung, Edda Eliasson</p>
                `,
        },
        {
            title: "",
            gid: 3,
            html: `
                    <p>På gränsens mellan norra och södra Sticklinge på Lidingö lanseras ett projekt för att antingen stärka grannskapets gemenskap - eller belysa en bristande sammanhållning i området.</p>
                    <p>"Ryktet om Lidingöborna som självupptagna översittare har orsakat både osämja och dålig självbild bland Lidingöborna själva, och för att öns rykte ska kunna räddas så måste det ske en förändring inifrån och ut.</p>
                    <p>"En dag så dyker det upp ett litet, portabelt växthus mitt i grannskapet. Det finns ingen tydlig avsändare eller en uttalad person som ska sköta om den. Ansvaret att hålla växten vid liv faller på samhället - för att växten ska må bra och skötas om så kommer Lidingöborna behöva samarbeta. Projektet skulle kunna se ut på olika sätt, antingen kan växthuset färdas mellan olika områden på Lidingö som en stafett, och bli ett gemensamt ansvar för hela ön, eller så kan respektive område få en egen växt.</p>
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
                    <p>Vårt koncept är en bar och en social mötesplats vars utformning och funktion för samman platsens historiska kontext med dess nuvarande kontext. Temat rörelse har lett oss till att skapa en cykelbar med tillhörande barbord, för att bjuda in folk i rörelse att stanna upp för en kort stund.</p>
                    <p>Platsen är i dagsläget ett "mellanområde", den bjuder halvt in cyklister och fotgängare (bron är enbart till för cykel/gång) men ingen stannar faktiskt där, då platsen saknar funktion. Med baren och de nya cykelborden på plats så finns det en anledning och möjlighet för folk att enkelt stanna på vägen till något annat, eller ha platsen som en destination i sig.</p>
                    <p>Utformandet sker i olika medier. Skalmodellen (1:100) är gjord med laserskuren MDF, olika typer av papper, metallstänger och lera. Skalmodellen på barborden är i 1:10 och gjord av MDF. Kompletterande så har vi även gjort konceptrenderingar med hjälp av CAD och Blender.</p>
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
        modelViewer.setAttribute("disable-quick-look", true);
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
