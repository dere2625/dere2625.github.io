jQuery(function(){
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    var locations = [];
    // initialize each piece
    for (let i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        if(i< divs.length-1){
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            // div.style.backgroundImage = 'url("background.jpeg")';
            // div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        }
        
        
        // store x and y for later
        div.x = x;
        div.y = y;
        locations.push({a:div.x,b:div.y})
    } 



    var randoms = [];

    function getRandomNumber(){
        var ceiling = 16;
        var floor = 0;
        while(randoms.length<16){
            let flr = Math.floor(Math.random() * (ceiling - floor) + floor)
            if(!randoms.includes(flr)){
                randoms.push(flr);
            }
        }
        return 0;
    }

    getRandomNumber();


    $('#shufflebutton').click(function(){
        console.log('locations',locations);
        for(let j = 0; j< divs.length; j++){
            var s = divs[j];
            var index = randoms[j];
            s.style.left = locations[index].b+'px';
            s.style.top = locations[index].a+'px';
        }
        findNeighbors();
        
    })

    

    function findNeighbors(){
        var empty = document.getElementById('empty');
        let top = empty.style.top;
        let left = empty.style.left;
        for(let i=0; i<divs.length; i++){
            var div = divs[i];
            console.log(Math.abs((parseInt(div.style.top) - parseInt(parseInt(top)))));
            if(((div.style.left == left) && Math.abs((parseInt(div.style.top) - parseInt(top+100)) == 100))
            || ((div.style.left == left) && Math.abs(parseInt(top) - (parseInt(div.style.top))) == 100)
            ) {
                div.style.border = 'red 2px solid'
                div.style.borderRadius = '5px'
                div.classList.add('hello')
                
            }
            if(((div.style.top == top) && Math.abs((parseInt(div.style.left) - parseInt(left+100)) == 100))
            || ((div.style.top == top) && Math.abs(parseInt(left) - (parseInt(div.style.left))) == 100)
            ){
                div.style.border = 'red 2px solid'
                div.style.borderRadius = '5px'
                div.classList.add('hello')
            }

        }
        
    }

    $('body').on('click','.hello',function(){
        var empty = document.getElementById('empty');
        let top = empty.style.top;
        let left = empty.style.left;
        let tempTop = top;
        let tempLeft = left;
        let elementLeft = $(this).position().left;
        let elementTop = $(this).position().top;
        empty.style.top = elementTop+'px';
        empty.style.left = elementLeft+'px';
        $(this).css({top:tempTop,left:tempLeft});
        findNeighbors();
        console.log($(this).position());
    })
    
})
