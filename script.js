function openPanel(section) {
    const panel = document.getElementById("panel");

    // Hide all sections first
    const sections = document.querySelectorAll(".section-content");
    sections.forEach(sec => sec.style.display = "none");

    // Show selected section
    document.getElementById(section + "-content").style.display = "block";

    panel.classList.add("active");
}

function closePanel() {
    document.getElementById("panel").classList.remove("active");
}
