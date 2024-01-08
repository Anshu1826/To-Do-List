$('.plus').click(()=>{
    $('input').fadeToggle(100);
})

$('input').keypress(function(e){
    console.log(e.key);
    if(e.key==='Enter'){
        const todoText = $('input').val();
        $('.list').prepend(`<li><span><img src="delete.png"></span>${todoText}</li>`);
    $('input').val('');
    }
})

$('ul').on('click','li',function(e){
    $(this).toggleClass('completed');
})
$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(700);
    e.stopPropogation();
})
