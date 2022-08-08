jQuery(()=>{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let todaysdate = `${year}-${month}-${day}`

    var key = 'F86YR0BCz0Q0sPSXRdPURHkAywkcEoyksFN1LzoC'
    $('.input-group.date').datepicker({
        endDate:todaysdate,
        format: "yyyy/mm/dd",
        maxViewMode: 3,
        todayBtn: "linked",
        orientation: "bottom auto",
        autoclose:true,
        calendarWeeks: true
    });
    
    $('#show').click(()=>{
        
        let date = $('#date').val().replaceAll('/','-')
        console.log(date);
        if(date == null || date == '' || date == undefined){
            $('#date').css('border','1px red solid')
            return;
        }

        fetch('https://api.nasa.gov/planetary/apod',{api_key:key,date:date})
        .then(displayData)
        .catch(error =>{
            alert(error)
        })
    })
    fetch('https://api.nasa.gov/planetary/apod',{api_key:key,date:date})
        .then(displayData)
        .catch(error =>{
            alert(error)
        })

    function displayData(data){
        $('#info').text(data.explanation)
        $('#title').text(data.title)
        $('#image').attr('src',data.hdurl)
        
    }
})