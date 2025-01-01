// About Info

let personal = document.getElementById("personal-info");
let personalClick = document.getElementById("personal-info-click");

personalClick.addEventListener("click", () => {
    personalClick.style.visibility = "hidden";
    personal.style.display = "flex";
});

// Educational Info

let educational = document.getElementById("educational-info");
let educationalClick = document.getElementById("educational-info-click");

educationalClick.addEventListener("click", () => {
    educationalClick.style.visibility = "hidden";
    educational.style.display = "flex";
});

// Programming Field

let programmingField = document.getElementById("programming-field");
let programming = document.getElementById("programming");

programmingField.addEventListener("click", () => {
    programmingField.style.display = "none";
    programming.style.display = "flex";
});
programming.addEventListener("click", () => {
    programmingField.style.display = "flex";
    programming.style.display = "none";
});

// Frontend Field

let frontendField = document.getElementById("frontend-field");
let frontend = document.getElementById("frontend");

frontendField.addEventListener("click", () => {
    frontendField.style.display = "none";
    frontend.style.display = "flex";
});
frontend.addEventListener("click", () => {
    frontendField.style.display = "flex";
    frontend.style.display = "none";
});

// Backend Field

let backendField = document.getElementById("backend-field");
let backend = document.getElementById("backend");

backendField.addEventListener("click", () => {
    backendField.style.display = "none";
    backend.style.display = "flex";
});
backend.addEventListener("click", () => {
    backendField.style.display = "flex";
    backend.style.display = "none";
});

// Industrial Field

let industrialField = document.getElementById("industrial-field");
let industrial = document.getElementById("industrial");

industrialField.addEventListener("click", () => {
    industrialField.style.display = "none";
    industrial.style.display = "flex";
});
industrial.addEventListener("click", () => {
    industrialField.style.display = "flex";
    industrial.style.display = "none";
});

// SoftSkill Field

let softskillField = document.getElementById("softskill-field");
let softskill = document.getElementById("softskill");

softskillField.addEventListener("click", () => {
    softskillField.style.display = "none";
    softskill.style.display = "flex";
});
softskill.addEventListener("click", () => {
    softskillField.style.display = "flex";
    softskill.style.display = "none";
});

// Database Field

let databaseField = document.getElementById("database-field");
let database = document.getElementById("database");

databaseField.addEventListener("click", () => {
    databaseField.style.display = "none";
    database.style.display = "flex";
    database.style.justifyContent = "center";
    database.style.alignItems = "center";
});
database.addEventListener("click", () => {
    databaseField.style.display = "flex";
    database.style.display = "none";
});

// Version Control Field

let versionField = document.getElementById("version-field");
let version = document.getElementById("version");

versionField.addEventListener("click", () => {
    versionField.style.display = "none";
    version.style.display = "flex";
    version.style.justifyContent = "center";
    version.style.alignItems = "center";
});
version.addEventListener("click", () => {
    versionField.style.display = "flex";
    version.style.display = "none";
});