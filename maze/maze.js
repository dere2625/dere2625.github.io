jQuery(function(){
    var failed = false;
    var started = false;
    var finished = false;
    const startingPosition = $("#start").position();
    $("#start").click(function(){
        failed = false;
        started = true;
        finished = false;
        resetMaze();
        showNotification("Maze started!")

        $(this).parent().css("position","relative");
        $(this).css("position","absolute");
        
        $("#maze").mousemove(function(e){
            let maze = $(this).position(); 
            if(failed || finished){
                $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
                return;
            }
            $("#start").offset({top: maze.top + (e.pageY-maze.top),left:maze.left+(e.pageX-maze.left)})
            
        })
       
    })

    $(".boundary").mouseenter(function(){
        if(started && !failed){
            $(this).css("backgroundColor","red");
            failed = true;
            showNotification("Sorry. You Failed! :( Press on \"S\" to Restart")
        }
        
    })

    function resetMaze(){
        $(".boundary").css("backgroundColor","#eeeeee");
    }

    function showNotification(notifaction){
        $("#status").html(notifaction);
    }

    $("#end").mouseenter(function(){
        if(!failed && started){
            finished = true;
            showNotification("Congratulations. You Win! :)  Press on \"S\" to play again");
            $("#start").offset({top: maze.top + startingPosition.top ,left: maze.left + startingPosition.left})
        }
        else{
            showNotification("Sorry. You Failed! :( Press on \"S\" to Restart")
        }
        started = false;
    })

    $("#maze").mouseleave(function(){
        if(started){
            $(".boundary").css("backgroundColor","red");
            showNotification("Sorry. You Failed! :( Press on \"S\" to Restart")
        }
        failed = true;
        started = false;
        
    })

})