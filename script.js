let count = 0;
$('.incre').on('click',function(){
     count = count + 1;
    $('.display').html(count);
})
   
$('.reset').on('click',function(){
    count = 0;
    $('.display').html(count);
})
    
   
$('.decre').on('click',function(){
    count = count - 1;
    $('.display').html(count);
})
    
   
    


