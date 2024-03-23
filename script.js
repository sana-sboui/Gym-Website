const form =document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadArea = document.querySelector(".upload-area");


form.addEventListener("click", ()=>{
  fileInput.click();
});


fileInput.onchange = ({target}) =>{
    let file = target.files[0]; //1st file khw
    if(file){
      let fileName = file.name;
      //console.log(fileName);

      if(fileName.length >= 12){ // for file name toooo long
        let splitName = fileName.split('.');
        fileName = splitName[0].substring(0, 12) + "... ." + splitName[1];
      }
      uploadFile(fileName);
    }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();//new xml obj ajax
  xhr.open("POST", "php/upload.php");// sending post request to file
  xhr.upload.addEventListener("progress", ({loaded, total})=>{

    let fileLoaded= Math.floor((loaded / total)*100);// % of loaded file size
    let fileTotal= Math.floor(total / 1000); //getting file size in KB
    let fileSize;


    //console.log(fileLoaded, fileTotal);
    (fileTotal < 1024) ? fileSize= fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="file"><ion-icon name="document-outline"></ion-icon></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name}&nbsp; &nbsp; Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%">
                              </div>
                            </div>
                          </div>
                        </li>`;

    progressArea.innerHTML= progressHTML;

    if(loaded == total){
      progressArea.innerHTML=""
      let uploadedHTML=`<li class="row"> 
                          <div class="content">
                            <i class="filee"><ion-icon name="document-outline"></ion-icon></i>
                            <div class="details">
                              <span class="name">${name}&nbsp; &nbsp; Uploaded</span>
                              <span class="size">${fileSize}</span>
                            </div>
                          </div>
                          <i class="check"> <ion-icon name="checkmark-outline"></ion-icon></i>
                        </li>`;
      uploadArea.insertAdjacentHTML("afterbegin", uploadedHTML)
    }

  });
  let formData = new FormData(form);
  xhr.send(formData);// sending form data to php
}







//sliderrrrrrrrrrrrrrrrrrrrrrrrrrrr

    const slider = document.querySelector('.slider');
    const arrowLeft = document.querySelector('.arrow.left');
    const arrowRight = document.querySelector('.arrow.right');
    let currentSlideIndex = 0;

    // Function to change the slide based on the direction (1 for next, -1 for previous)
    function changeSlide(direction) {
      currentSlideIndex += direction;

      // Ensure the index stays within the bounds of the number of slides
      if (currentSlideIndex < 0) {
        currentSlideIndex = slider.children.length - 1;
      } else if (currentSlideIndex >= slider.children.length) {
        currentSlideIndex = 0;
      }

      // Set the display property of each slide
      for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.display = i === currentSlideIndex ? 'block' : 'none';
        slider.children[i].style.opacity = i === currentSlideIndex ? '1' : '0';
      }
    }

    // Attach click event listeners to the arrows
    arrowLeft.addEventListener('click', () => changeSlide(-1));
    arrowRight.addEventListener('click', () => changeSlide(1));



//navbaaaaaaaaaaaaaaaaaaaaaar

    const navbarItems = document.querySelectorAll('.navbar a');

    navbarItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove the 'active' class from all items
        navbarItems.forEach(navItem => navItem.classList.remove('active'));
    
        // Add the 'active' class to the clicked item
        item.classList.add('active');
      });
    });






//videooooooooooooooooooooooooooooooooo

    function stopVideo(videoId, videoPlayerId) {
      const myVideo = document.getElementById(videoId);
      const videoPlayer = document.getElementById(videoPlayerId);
      myVideo.pause();
      myVideo.src = "";
      videoPlayer.style.display = "none";
    }

    function playVideo(file, videoPlayerId, myVideoId) {
      const myVideo = document.getElementById(myVideoId);
      const videoPlayer = document.getElementById(videoPlayerId);
      myVideo.src = file;
      videoPlayer.style.display = "block";
      
    }
