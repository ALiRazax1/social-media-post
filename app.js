let selectImgPath ;


function selectedImage(src) {
   let imagesBg = document.getElementsByClassName('bg-image')
    for(let i = 0; i < imagesBg.length; i++) {
      imagesBg[i].style.border = '2px solid transparent'

    }
    event.target.style.border = '2px solid #08295a'
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
  let bgImage = document.getElementById("card-img")
  let listingContainer = document.querySelector("#listingContainer");

  if (userName.value.trim() !== "") {
    if (title.value.trim() !== "") {
      if (description.value.trim() !== "") {
        postName.innerText = `@${userName.value}`
        postTime.innerText = currentDateTime
        postTitle.innerText = title.value
        postDesc.innerText = description.value
        bgImage.style.backgroundImage = `url('${selectImgPath}')`
        listingContainer.innerHTML += post.innerHTML;
        console.log(post.innerHTML);
        
        
        
        
        
        
        
        


        title.focus();
        title.classList.remove("border-danger")
        description.focus();
        description.classList.remove("border-danger")
        userName.focus();
        userName.classList.remove("border-danger")

userName.value = ''
title.value = ''
description.value = ''
      } else {
        description.focus();
        description.classList.add("border-danger") ;
        
      }
    } else {title.focus();
      title.classList.add("border-danger") ;
      ;
    }
  } else {userName.focus();
    userName.classList.add("border-danger") ;
    
  }
}

function changeIcon() {
  let likeButton = document.getElementById("like"); 
  let isLiked = likeButton.innerHTML.includes("bi-heart-fill"); 

  if (isLiked) {
    likeButton.innerHTML = `<i class="bi bi-heart text-body-secondary"></i> Like`; 
  } else {
    likeButton.innerHTML = `<i class="bi bi-heart-fill text-danger"></i> Like`; 
  }
}
function writeComment(){
  document.querySelector(".commentSection").style.display = "flex"
}
function comment() {
  let comment = document.getElementById("a");
  let commentInput = document.getElementById("commentInput");
  let commentText = commentInput.value.trim();

  if (commentText !== "") {
comment.innerHTML += `<h6>${document.getElementById("post-username").innerText}</h6> <p>${commentText}</p>`;
    commentInput.value = "";
  }
}