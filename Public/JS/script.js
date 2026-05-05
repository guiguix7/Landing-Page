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

function logica() {
    var info = document.getElementById("skill")
    var bgColor = document.getElementById("logica").style.backgroundColor = "#11345b";
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
