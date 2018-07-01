var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
    
var data = [
        {
            name:"Salmon Creek",
            image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices porta sollicitudin. Donec et consectetur nisi. Fusce tempus ut lacus at luctus. Nunc non enim in leo molestie feugiat. Suspendisse potenti. Sed tempus bibendum mauris non viverra. Aliquam porta, enim vitae finibus condimentum, libero ipsum finibus purus, feugiat vehicula arcu magna convallis turpis. Maecenas id nisi semper ligula blandit commodo. Vestibulum congue venenatis pharetra. Nulla id feugiat felis. Proin nisi nunc, rutrum in enim non, bibendum accumsan magna. In tellus enim, varius in ultricies ut, malesuada in lacus."
        },
        {
            name:"Granite Hill",
            image:"https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices porta sollicitudin. Donec et consectetur nisi. Fusce tempus ut lacus at luctus. Nunc non enim in leo molestie feugiat. Suspendisse potenti. Sed tempus bibendum mauris non viverra. Aliquam porta, enim vitae finibus condimentum, libero ipsum finibus purus, feugiat vehicula arcu magna convallis turpis. Maecenas id nisi semper ligula blandit commodo. Vestibulum congue venenatis pharetra. Nulla id feugiat felis. Proin nisi nunc, rutrum in enim non, bibendum accumsan magna. In tellus enim, varius in ultricies ut, malesuada in lacus."
        },
        {
            name:"Itzik's place", 
            image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices porta sollicitudin. Donec et consectetur nisi. Fusce tempus ut lacus at luctus. Nunc non enim in leo molestie feugiat. Suspendisse potenti. Sed tempus bibendum mauris non viverra. Aliquam porta, enim vitae finibus condimentum, libero ipsum finibus purus, feugiat vehicula arcu magna convallis turpis. Maecenas id nisi semper ligula blandit commodo. Vestibulum congue venenatis pharetra. Nulla id feugiat felis. Proin nisi nunc, rutrum in enim non, bibendum accumsan magna. In tellus enim, varius in ultricies ut, malesuada in lacus."
        }
    ]
    
function seedDB(){
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        } else{
            console.log("campground removed");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else{
                        console.log("campground created");
                        Comment.create(
                            {
                                text:"this place is great but I wish there was internet",
                                author: "Humor"
                            },function(err,comment){
                                if(err){
                                    console.log(err)
                                } else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created comment");
                                }
                            })
                    }
                });
            });
        }
    });
}

module.exports =seedDB;