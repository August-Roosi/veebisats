window.onload = function() {

    // For simplicyty, I just changed the way we are fetching the file
    fetch("./data/posts.json")
    
    // Commented out fetching JSON from the web API endpoint
    //fetch('https://api.npoint.io/4ae25c0382bbb1bfe1bb')
    
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            let mainBox = document.getElementById("mainPage")
            mainBox.style.display = "flex, column"
            mainBox.style.gap = "20px"  
            mainBox.style.margin = "auto"
            for (obj of json) {

                /*        <div class="posts">  */
                let header     = document.createElement("div")
                let postBox    = document.createElement("div")
                let image      = document.createElement("img")
                let profileBox = document.createElement("div")
                let link       = document.createElement("a")
                let icon       = document.createElement("img")
                

                header.className     = "postHeader"
                postBox.className    = "posts"
                image.className      = "postImage"
                profileBox.className = "postLogoImage"
                link.className       = ""
                icon.className       = "postLogoImage"


                console.log(header)
                header.innerHTML = header.innerHTML + obj.postcreatedate

                icon.src = "data:image/jpeg;charset=utf-8;base64," + obj.userimage


               

                //"data:image/jpeg;charset=utf-8;base64," - specifies the schematic to convert to image
                if (obj.postimage != ""){
                    image.src = "data:image/jpeg;charset=utf-8;base64," + obj.postimage 
                }
                

                icon.width = "40"
                image.width = "400"

                link.appendChild(icon)
                profileBox.appendChild(link)
                header.appendChild(profileBox)
                postBox.appendChild(header)
                postBox.appendChild(image)
                mainBox.appendChild(postBox)
                postBox.innerHTML = postBox.innerHTML + obj.posttext
  
            }
        }) 
        .catch(err => {
            let box = document.getElementById("mainPost")
            console.log(err)
            box.innerHTML = "error"
        })

        const profilePhoto = document.querySelector("#logo img");
        const userDropdown = document.querySelector("#userDropdown");

        profilePhoto.addEventListener("click", function () {
            userDropdown.classList.toggle("show-dropdown");
        });

}