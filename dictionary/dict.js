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
        var elements = [];
        $.ajax({
            url: "http://localhost:8081/words?"+word,
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                res.forEach((item)=>{
                    elements.push(item);
                        // console.log(item);
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
                    
                    let response = $.ajax({
                        url: "http://localhost:8081/words?"+word,
                        type: 'GET',
                        dataType: 'json', // added data type
                        success: function(res) {
                            for(response of res){
                                $('.displayzone ol').append(
                                    `<li>
                                    <div class="content">
                                        <h5>(${response.wordtype})</h5>
                                        <q>${response.definition}</q>
                                    </div>
                                    </li>`
                                )
                            }
                        }
                    })
                    
                    
                })
            }
        });
    })

    function removeChildren(){
        $(".suggest").remove();
    }

    function removeElements(){
        $('li').remove();
    }
})