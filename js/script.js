$(document).ready(function(){
    var numb = 1;
    var priceNumb = 3;
    var price = priceNumb + ',000';
    
    $('.numb').html(numb);
    $('.price').html(price);
    
    $('.numbPlus').click(function(){
        numb++;
        priceNumb = 3*numb;
        price = priceNumb + ',000';
        $('.price').html(price);
        $('.numb').html(numb);
        
    })
    $('.numbMinus').click(function(){
        if(numb !== 1){
            numb--
            priceNumb = 3*numb;
            price = priceNumb + ',000';
            $('.price').html(price);
            $('.numb').html(numb);
        }
    })
})