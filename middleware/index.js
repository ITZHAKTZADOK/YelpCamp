var Campground = require("../models/campground.js"),
    Comment    = require("../models/comment.js");
    
var middlewareObj={};

middlewareObj.checkCampgroundOwnership = function checkCampgroundOwnership(req, res, next){
    //if user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err,foundCampground){
           if(err){
               res.redirect("back");
           } else{
                //if user own the campground?
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else{
                    res.redirect("back");
                }
           }
        });
    } else{
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function checkCommentOwnership(req, res, next){
    //if user logged in?
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err,foundComment){
           if(err){
               res.redirect("back");
           } else{
                //does user own the comment?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else{
                    res.redirect("back");
                }
           }
        });
    } else{
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Login First!")
    res.redirect("/login");
}


module.exports = middlewareObj;