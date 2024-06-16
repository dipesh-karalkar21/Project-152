AFRAME.registerComponent("basegen",{
    init :function(){
        var base = document.createElement("a-entity")
        
        base.setAttribute("geometry",{
            primitive : "cylinder",
            height : "0.25",
            radius : "1.5"
        })

        base.setAttribute("material",{
            src : "base.jpg"
        })

        base.setAttribute("rotation",{x:0,y:90,z:0})
        
        base.setAttribute("position",{x:0,y:0.51,z:0})

        var floor = document.createElement("a-entity")

        floor.setAttribute("geometry",{
            primitive : "box",
            height : "0.3",
            depth : "5",
            width : "5"
        })

        floor.setAttribute("position",{
            x: 0,
            y: 0.45,
            z:0
        })

        floor.setAttribute("material",{
            src : "floor.jpg"
        })

        var ceiling = document.createElement("a-entity")

        ceiling.setAttribute("geometry",{
            primitive : "box",
            height : "0.3",
            depth : "5",
            width : "5"
        })

        ceiling.setAttribute("position",{
            x: 0,
            y: 3.15,
            z:0
        })

        ceiling.setAttribute("material",{
            src : "ceiling.jpeg"
        })

        var wall = document.createElement("a-entity")
        var wall2 = document.createElement("a-entity")
        var wall3 = document.createElement("a-entity")
        
        wall.setAttribute("geometry",{
            primitive : "plane",
            height : "3",
            width : "5"
        })

        wall.setAttribute("position",{
            x:0,
            y:1.5,
            z:-2.5
        })

        wall.setAttribute("material",{
            src : "wall.jpg"
        })

        wall2.setAttribute("geometry",{
            primitive : "plane",
            height : "3",
            width : "5"
        })

        wall2.setAttribute("position",{
            x:2.5,
            y:1.5,
            z:0
        })

        wall2.setAttribute("rotation",{x:0,y:-90,z:0})

        wall2.setAttribute("material",{
            src : "wall.jpg"
        })

        wall3.setAttribute("geometry",{
            primitive : "plane",
            height : "3",
            width : "5"
        })

        wall3.setAttribute("position",{
            x:-2.5,
            y:1.5,
            z:0
        })

        wall3.setAttribute("rotation",{x:0,y:90,z:0})

        wall3.setAttribute("material",{
            src : "wall.jpg"
        })

        var showroom = document.querySelector("#showroom")
        var scene = document.querySelector("#scene")
        floor.appendChild(ceiling)
        floor.appendChild(wall)
        floor.appendChild(wall2)
        floor.appendChild(wall3)
        scene.appendChild(floor)
        showroom.appendChild(base)

    }
})