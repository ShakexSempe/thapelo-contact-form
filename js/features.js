// VARIABLES
const form = document.getElementById("features");
const feature = document.getElementById("feature");
const featureDescription = document.getElementById("feature-description");
const container = document.querySelector(".feature-container");
const list = document.querySelector(".feature-list");
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

console.log(form);
console.log(feature);
console.log(list);
console.log(featureDescription);
console.log(container);
console.log(submitBtn);
console.log(clearBtn);

const addItem = (e) => {
    console.log(feature.value);
    console.log(featureDescription.value);
    const nameValue = feature.value;
    const descValue = featureDescription.value;
    const id = new Date().getTime().toString();

    if(nameValue && !editFlag) {
        const element = document.createElement('article');

        element.classList.add('input-div');
        // add id
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);

        element.innerHTML = `<label for="feature">feature</label>
        <div class="delete-btn"><i title="delete feature" class="fas fa-trash-alt"></i></div>
        <input 
            name="feature"
            id="item" 
            title="feature item" 
            class="item-name" 
            type="text" 
            minlength="1" 
            value="${nameValue}"
            placeholder="${nameValue}" 
            required>

        <label for="feature-name">Description</label>
        <textarea 
            name="feature-description" 
            id="item-1-description" 
            title="Item description" 
            cols="30" rows="5"
            class="item-description"
            minlength="1" 
            value="${descValue}"
            placeholder="describe ${nameValue}"  
            required>${descValue}</textarea>`;
        
        list.appendChild(element);
        alert(`"${nameValue}" added as feature`);
        // BUTTON EVENT LISTENERS
        const deleteBtn = element.querySelector('.delete-btn');
        console.log(attribute.value);
        deleteBtn.addEventListener("click",  deleteItem);
    }
}

// add item
submitBtn.addEventListener('click' , addItem);
// deleteItem
deleteItem = (e) => {
    const element =  e.currentTarget.parentElement;
    list.removeChild(element);
    alert("feature deleted from list");
}
