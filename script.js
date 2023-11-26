window.onload = function() {

    // For simplicyty, I just changed the way we are fetching the file
    fetch("./data/posts.json")
    
    // Commented out fetching JSON from the web API endpoint
    //fetch('https://api.npoint.io/4ae25c0382bbb1bfe1bb')
    
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            let mainBox = document.getElementById("mainPage")
            for (obj of json) {

                /*        <div class="posts">  */
                let header     = document.createElement("div")
                let postBox    = document.createElement("div")
                let image      = document.createElement("img")
                let profileBox = document.createElement("div")
                let link       = document.createElement("a")
                let icon       = document.createElement("img")         
                
                let likeTray   = document.createElement("div") 
                let likeButton = document.createElement("button") 
                let likeCount  = 0

                header.className     = "postHeader"
                postBox.className    = "posts"
                image.className      = "postImage"
                profileBox.className = "postLogoImage"
                link.className       = ""
                icon.className       = "postLogoImage"
                likeButton.className = "likeButton"
                likeButton.innerText = "Like"


                console.log(header)
                header.innerHTML = header.innerHTML + obj.postcreatedate

                icon.src = "data:image/jpeg;charset=utf-8;base64," + obj.userimage


               

                //"data:image/jpeg;charset=utf-8;base64," - specifies the schematic to convert to image
                if (obj.postimage != ""){
                    image.src = "data:image/jpeg;charset=utf-8;base64," + obj.postimage 
                }
                
                likeButton.addEventListener("click", function () {
                    likeCount++;
                    header.querySelector(".likeCount").innerText = likeCount;
                });

                link.appendChild(icon)
                profileBox.appendChild(link)
                header.appendChild(profileBox)
                postBox.appendChild(header)
                postBox.appendChild(image)
                mainBox.appendChild(postBox)
                postBox.innerHTML = postBox.innerHTML + obj.posttext
                likeTray.appendChild(likeButton)
                likeTray.innerHTML += `<span class="likeCount">${likeCount}</span>`

  
            }
        }) 
        .catch(err => {
            let box = document.getElementById("mainPost")
            console.log(err)
            box.innerHTML = "error"
        })

        let resetButton = document.createElement("button");
        resetButton.className = "resetButton";
        resetButton.innerText = "Reset Likes";
        mainBox.appendChild(resetButton);

        resetButton.addEventListener("click", function () {
            document.querySelectorAll(".likeCount").forEach((count) => {
                count.innerText = 0;
            });
        });

        const profilePhoto = document.querySelector("#logo img");
        const userDropdown = document.querySelector("#userDropdown");

        profilePhoto.addEventListener("click", function () {
            userDropdown.classList.toggle("show-dropdown");
        });

}