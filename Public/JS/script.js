// Animação de revelação
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    revealItems.forEach((item, index) => {
        const delay = Math.min(index * 60, 240);
        item.style.transitionDelay = `${delay}ms`;
        observer.observe(item);
    });
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

// ====== //

// Lógica para exibir detalhes das skills
// Variaveis e valores
var info = document.getElementById("skill")
var buttons = document.getElementsByName("btn-skils")

function logica() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("logica").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("logica").style.color = "#fff";

    info.innerHTML = `<h3>Logica de Programação</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>86%</span>
                                </div>
                                <div class="meter-bar" style="--level: 86%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="86"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>82%</span>
                                </div>
                                <div class="meter-bar" style="--level: 82%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="82"></div>
                            </div>`
}

function Ingles() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Inglês").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("Inglês").style.color = "#ffff";

    info.innerHTML = `<h3>Inglês</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function Git() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("git").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("git").style.color = "#ffff";

    info.innerHTML = `<h3>Git</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function GitHub() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("github").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("github").style.color = "#ffff";

    info.innerHTML = `<h3>GitHub</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function Vercel() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("vercel").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("vercel").style.color = "#ffff";

    info.innerHTML = `<h3>Vercel</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function AWS() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("aws").style.backgroundColor = "#1e5f8a";
    var color = document.getElementById("aws").style.color = "#ffff";

    info.innerHTML = `<h3>Amazon Web Services</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function HTML() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("HTML").style.backgroundColor = "#c13584";
    var color = document.getElementById("HTML").style.color = "#ffff";

    info.innerHTML = `<h3>HTML</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function CSS() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("CSS").style.backgroundColor = "#c13584";
    var color = document.getElementById("CSS").style.color = "#ffff";

    info.innerHTML = `<h3>CSS</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function JavaScript() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("JavaScript").style.backgroundColor = "#c13584";
    var color = document.getElementById("JavaScript").style.color = "#fff";

    info.innerHTML = `<h3>JavaScript</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function TypeScript() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("TypeScript").style.backgroundColor = "#c13584";
    var color = document.getElementById("TypeScript").style.color = "#fff";

    info.innerHTML = `<h3>TypeScript</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function CSharp() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("CSharp").style.backgroundColor = "#4a90e2";
    var color = document.getElementById("CSharp").style.color = "#ffff";

    info.innerHTML = `<h3>C#</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function React() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("React").style.backgroundColor = "#4a90e2";
    var color = document.getElementById("React").style.color = "#ffff";

    info.innerHTML = `<h3>React</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function NodeJS() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Node.js").style.backgroundColor = "#4a90e2";
    var color = document.getElementById("Node.js").style.color = "#ffff";

    info.innerHTML = `<h3>Node.js</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function ExpressJS() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Express.js").style.backgroundColor = "#4a90e2";
    var color = document.getElementById("Express.js").style.color = "#ffff";

    info.innerHTML = `<h3>Express.js</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function API() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("APIs REST").style.backgroundColor = "#4a90e2";
    var color = document.getElementById("APIs REST").style.color = "#ffff";

    info.innerHTML = `<h3>APIs REST</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function Bootstrap() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Bootstrap").style.backgroundColor = "#8a2be2";
    var color = document.getElementById("Bootstrap").style.color = "#ffff";

    info.innerHTML = `<h3>Bootstrap</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function VueJS() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Vue.js").style.backgroundColor = "#8a2be2";
    var color = document.getElementById("Vue.js").style.color = "#ffff";

    info.innerHTML = `<h3>Vue.js</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function Angular() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Angular").style.backgroundColor = "#8a2be2";
    var color = document.getElementById("Angular").style.color = "#ffff";

    info.innerHTML = `<h3>Angular</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function SQL() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("SQL").style.backgroundColor = "#50c878";
    var color = document.getElementById("SQL").style.color = "#ffff";

    info.innerHTML = `<h3>SQL</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function MongoDB() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("MongoDB").style.backgroundColor = "#50c878";
    var color = document.getElementById("MongoDB").style.color = "#ffff";

    info.innerHTML = `<h3>MongoDB</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function Firebase() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Firebase").style.backgroundColor = "#50c878";
    var color = document.getElementById("Firebase").style.color = "#ffff";

    info.innerHTML = `<h3>Firebase</h3>
                        <div class="meter-list">
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Conhecimento</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>
                            <div class="meter-item">
                                <div class="meter-label">
                                    <span>Experiência</span>
                                    <span>80%</span>
                                </div>
                                <div class="meter-bar" style="--level: 80%;" role="progressbar" aria-valuemin="0"
                                    aria-valuemax="100" aria-valuenow="80"></div>
                            </div>`
}

function SoftSkills() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = " #e9eef6";
        buttons[i].style.color = " #233146";
    }
    var bgColor = document.getElementById("Soft Skills").style.backgroundColor = "#ffa500";
    var color = document.getElementById("Soft Skills").style.color = "#ffff";
    /*
        info.innerHTML = `<h3>Soft Skills</h3>
                            <div class="meter-list">
                                <div class="meter-item">
                                    <div class="meter-label">
                                        <span>Organização</span>
                                        <span>86%</span>
                                    </div>
                                    <div class="meter-bar" style="--level: 86%;" role="progressbar" aria-valuemin="0"
                                        aria-valuemax="100" aria-valuenow="86"></div>
                                </div>
                                <div class="meter-item">
                                    <div class="meter-label">
                                        <span>Aprendizado rápido</span>
                                        <span>82%</span>
                                    </div>
                                    <div class="meter-bar" style="--level: 82%;" role="progressbar" aria-valuemin="0"
                                        aria-valuemax="100" aria-valuenow="82"></div>
                                </div>
                                <div class="meter-item">
                                    <div class="meter-label">
                                        <span>Autonomia</span>
                                        <span>78%</span>
                                    </div>
                                    <div class="meter-bar" style="--level: 78%;" role="progressbar" aria-valuemin="0"
                                        aria-valuemax="100" aria-valuenow="78"></div>
                                </div>
                            </div>`
                            */
}