function openPanel(section) {
    const panel = document.getElementById("panel");
    const content = document.getElementById("panel-content");

    let text = "";

    if (section === "roots") {
        text = "<h2>Aboriginal Dot Painting</h2><p>Interdependent identity rooted in ancestry and land.</p>";
    }
    if (section === "trunk") {
        text = "<h2>Islamic Geometric Art</h2><p>Structured collective identity through symmetry and order.</p>";
    }
    if (section === "sumi") {
        text = "<h2>Japanese Sumi Ink</h2><p>Harmony and emotional restraint reflecting relational self.</p>";
    }
    if (section === "abstract") {
        text = "<h2>Abstract Expressionism</h2><p>Independent self through personal authorship and emotion.</p>";
    }

    content.innerHTML = text;
    panel.classList.add("active");
}

function closePanel() {
    document.getElementById("panel").classList.remove("active");
}
