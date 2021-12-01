/* 
function functionName(paraméter) {
    // paraméter === "argumentum as a string";
}
functionName("argumentum as a string");

const argument = "argumentum as a string";

const functionName = function (paraméter) {
    // paraméter === "argumentum as a string";

}
functionName("argumentum as a string");
functionName(argument);

const functionName = (paraméter) => {
    // paraméter === "argumentum as a string";

}
functionName("argumentum as a string");

*/
const inputElement = (type, name, label) => {
    return  `
        <div>
            <label class="${type}" for="${name}">${label}</label>
            <input type="${type}" name="${name}" class="${type}" id="${name}">
        </div>
    `;
}

const selectElement = (type, name, label, selectOptions) => {
    let optionElements ="";
    for (const option of selectOptions) {
        optionElements += `<option value="${option}">${option}</option>`;
    }
    return  `
        <div>
            <label class="${type}" for="${name}">${label}</label>
            <${type} name="${name}" class="${type}" id="${name}">${optionElements}</${type}>
        </div>
    `;
}

const formElement = `
    <form id="form">
        ${inputElement("text", "firstName", "Keresztneved")}
        ${inputElement("file", "profilePicture", "Profilképed")}
        ${inputElement("email", "personalEmail", "Email címed")}
        ${inputElement("checkbox", "newsLetter", "Szeretnél-e hírlevelet kapni?")}
        ${inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?")}
        ${selectElement("select", "where", "Hol hallottál rólunk?", ["Internetről", "Ismerőstől", "Egyéb"])}
        <button>OK</button>
    </form>
`;

const formSubmit = (e) => {
    e.preventDefault();
    const et = e.target;
    
    et.classList.add("submitted");
    const etValue = et.querySelector(`select[name="where"]`).value;
    console.log(etValue);
}

const inputEvent = (event) => {
    console.log(event.target.value);
    const fName = document.querySelector(`input[name='firstName']`);

    // if (event.target.name === "firstName") {
    const tryForm = fName.closest("#form");    
    console.log(tryForm);
    if (event.target.getAttribute("name") === "firstName") {
        document.getElementById("inputValueContent").innerHTML = event.target.value;
    }
}

function loadEvent() {
    const root = document.getElementById("root");

    root.insertAdjacentHTML('beforeend',formElement);
    root.insertAdjacentHTML('beforeend',`
        <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit",formSubmit);
    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }

}

window.addEventListener("load", loadEvent);