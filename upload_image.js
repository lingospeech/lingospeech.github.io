

const containerPage1 = document.querySelector('.container');
const containerPage2 = document.querySelector('.container-generate-image');

const backButtonPage1 = document.querySelector('.back-button-page1');
const nextButtonPage1 = document.querySelector('.next-button-page1');

const backButtonPage2 = document.querySelector('.back-button-page2');
const nextButtonPage2 = document.querySelector('.next-button-page2');

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const uploadImage = document.querySelector(".upload-image");
const generateImage = document.querySelector(".generate-image");
const descriptionImage = document.querySelector(".custom-input");
const promptInput = document.querySelector(".prompt-input");
const checkMessage = document.querySelector(".check-message");

let image ="image not selected";

selectImage.addEventListener('click', function () {
	inputFile.click();
})

uploadImage.addEventListener('click', function () {
    var input = document.getElementById("descriptionInput");

    if (input.value.trim() !== "") {
        console.log("correct");
        input.value = "";
        checkMessage.textContent = "Successfully uploaded";
        descriptionImage.style.display = "none";
        uploadImage.style.display = "none";
        console.log(image.name+" has been sent to server");
    } else {
        console.log("empty description");
        checkMessage.textContent = "Empty description";
    }

    
})

inputFile.addEventListener('change', (event) => {
	image = event.target.files[0];
    console.log(image.name);
	if(image.size < 1000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
            descriptionImage.style.display = "block";
            uploadImage.style.display = "block";
            checkMessage.textContent = "";
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})




backButtonPage1.addEventListener('click', function () {
    containerPage1.style.display = "block";
    containerPage2.style.display = "none";
    console.log("page 1");
})
nextButtonPage1.addEventListener('click', function () {
    containerPage1.style.display = "none";
    containerPage2.style.display = "block";
    console.log("page 2");
})

backButtonPage2.addEventListener('click', function () {
    containerPage1.style.display = "block";
    containerPage2.style.display = "none";
    console.log("page 1");
})
nextButtonPage2.addEventListener('click', function () {
    containerPage1.style.display = "none";
    containerPage2.style.display = "block";
    console.log("page 2");
})
