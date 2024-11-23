let selectImgPath ;


function selectedImage(src) {
   let imagesBg = document.getElementsByClassName('bg-image')
    for(let i = 0; i < imagesBg.length; i++) {
        // imagesBg[i].className = 'bg-image'
    }
    event.target.classList.add('selectedImage')
    selectImgPath = src
}


function submitPost() {
  let post = document.getElementById("post");
  let userName = document.getElementById("username");
  let title = document.getElementById("title");
  let description = document.getElementById("desc");
  let currentDateTime = new Date().toLocaleString();
  let postName = document.getElementById("post-username")
  let postTime = document.getElementById("post-time")
  let postTitle = document.getElementById("post-title")
  let postDesc = document.getElementById("post-desc")
  let listingContainer = document.querySelector("#listingContainer");

  if (userName.value.trim() !== "") {
    if (title.value.trim() !== "") {
      if (description.value.trim() !== "") {
        postName.innerText = `@${userName.value}`
        postTime.innerText = currentDateTime
        postTitle.innerText = title.value
        postDesc.innerText = description.value
        post.content.cloneNode(true);
        listingContainer.innerHTML += post.innerHTML;
        console.log(post.innerHTML);
        
        
        
        
        
        
        
        
//         `<div class="card my-4">
// <div class="card-header d-flex justify-content-between">
//    <span>
//     ~@${userName.value}
//    </span>
//    <span>
//     ${currentDateTime}
//    </span>
// </div>
// <div  style="background-image: url('${selectImgPath}')" class="card-body postCardBody">
//     <h5 class="card-title">${title.value}</h5>
//     <p class="card-text">${description.value}</p>
// </div>
// <div class="d-flex justify-content-between px-5 border-top border-secondary-subtle py-3"><div onclick="changeIcon() id="like"><i class="bi bi-heart text-body-secondary"></i> Like</div>
//         <div><i class="bi bi-chat"></i> Comment</div>
//         <div>Share</div></div>
// </div>`;



userName.value = ''
title.value = ''
description.value = ''
      } else {
        alert("description is required");
      }
    } else {
      alert("Title is Required");
    }
  } else {
    alert("Username is required");
  }
}


// let liked = document.getElementById("like").innerHTML = `<i class="bi bi-heart-fill text-danger"></i> Like`
// let unlike = document.getElementById("like").innerHTML = `<i class="bi bi-heart text-body-secondary"></i> Like`
// function changeIcon(){
//   if(liked){
//     liked.innerHTML = unlike
//       }else{
//     unlike.innerHTML = liked
//     alert("asd")
//   }
// }