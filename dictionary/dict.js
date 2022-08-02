jQuery(()=>{
    $("input[type='text']").on('input',()=>{
        $('.suggestion').css("display","unset");
        $('.displayzone').css("display","none");
        let word = $("#query").val();


        removeChildren();
        removeElements();
        data.forEach((item)=>{
            if(item.word.startsWith(word) && word != ''){
                $(".suggestion").append(
                    `<div class = "suggest">
                    <h4>${item.word}</h4>
                    <hr>
                    </div>`
                )
            }
        })


        let selected = '';
        $(".suggest").click(function () {
            removeElements();
            selected = $(this).children("h4").text();
            $('.displayzone').css("display","flex");
            $('.suggestion').css("display","none");
            
            let response = data.filter((data)=> data.word === selected);
            for(res of response){
                $('.displayzone ol').append(
                    `<li>
                    <div class="content">
                        <h5>(${res.type})</h5>
                        <q>${res.meaning}</q>
                    </div>
                    </li>`
                )
            }
            
        })
    })

    function removeChildren(){
        $(".suggest").remove();
    }

    function removeElements(){
        $('li').remove();
    }
})