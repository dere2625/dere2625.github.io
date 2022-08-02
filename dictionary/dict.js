jQuery(()=>{
    $("input[type='text']").on('input',()=>{
        $('.suggestion').css("display","unset");
        $('.displayzone').css("display","none");
        let word = $("#query").val();

        if(word == ''){
            $('.suggestion').css("display","none");
        }
        removeChildren();
        removeElements();
        fetchAllData(word,(res)=>{
            res.forEach((item)=>{
                $(".suggestion").append(
                    `<div class = "suggest">
                    <h4>${item.word}</h4>
                    <hr>
                    </div>`
                )
            })

            let selected = '';
            $(".suggest").click(function () {
                removeElements();
                selected = $(this).children("h4").text();
                $('.displayzone').css("display","flex");
                $('.suggestion').css("display","none");
                for(res of res){
                    $('.displayzone ol').append(
                        `<li>
                        <div class="content">
                            <h5>(${res.wordtype})</h5>
                            <q>${res.definition}</q>
                        </div>
                        </li>`
                    )
                }
            })
        })
    })

    function fetchAllData(query,showAll){
        $.ajax({
            url: "http://localhost:8081/words?"+query,
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                showAll(res);
            }
    })}


    function removeChildren(){
        $(".suggest").remove();
    }

    function removeElements(){
        $('li').remove();
    }
})