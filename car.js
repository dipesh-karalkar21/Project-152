AFRAME.registerComponent("cargen",{
    init :function(){
        var car = document.createElement("a-entity")
        
        car.setAttribute("gltf-model","#car")
        
        car.setAttribute("position",{x:0,y:1,z:0})

        var showroom = document.querySelector("#showroom")

        showroom.appendChild(car)

    }
})