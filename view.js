AFRAME.registerComponent("view",{
    init :function(){
        window.addEventListener("click",function(){
            var showroom = this.document.querySelector("#showroom")

            rotations = showroom.getAttribute("rotation")

            showroom.setAttribute("animation",{
                property : "rotation",
                from : `0 ${rotations.y} 0`,
                to : `0 ${rotations.y + 40} 0`,
                dur : "750"
            })

            rotations.y = rotations.y + 40

            showroom.setAttribute("rotation",rotations)

            console.log("done")

        })

    }
})