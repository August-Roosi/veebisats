window.onload = function() {



    fetch('https://api.npoint.io/4ae25c0382bbb1bfe1bb')
    
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            let mainBox = document.getElementById("mainPage")
            mainBox.style.display = "flex, column"
            mainBox.style.gap = "20px"  
            mainBox.style.margin = "auto"
            for (obj of json) {

                /*        <div class="posts">  */
                let postBox    = document.createElement("div")
                let header     = document.createElement("div")
                let image      = document.createElement("img")
                let profileBox = document.createElement("div")
                let link       = document.createElement("a")
                let icon       = document.createElement("img")
                

                postBox.className    = "posts"
                header.className     = "postHeader"
                image.className      = "postImage"
                profileBox.className = "postLogoImage"
                link.className       = ""
                icon.className       = "postLogoImage"




                console.log(header)
                header.innerHTML = header.innerHTML + obj.postcreatedate

                icon.src = "data:image/jpeg;charset=utf-8;base64," + obj.userimage


                postBox.innerHTML = postBox.innerHTML + obj.posttext

                //"data:image/jpeg;charset=utf-8;base64," - specifies the schematic to convert to image
                if (obj.postimage != ""){
                    image.src = "data:image/jpeg;charset=utf-8;base64," + obj.postimage 
                }
                

                icon.width = "40"
                image.width = "400"

                link.appendChild(icon)
                profileBox.appendChild(link)
                postBox.appendChild(profileBox)
                postBox.appendChild(header)
                postBox.appendChild(image)
                mainBox.appendChild(postBox)
  
            }

        }) 
        .catch(err => {
            let box = document.getElementById("mainPost")
            console.log(err)
            box.innerHTML = "error"
        })

}