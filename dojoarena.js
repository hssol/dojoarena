$(document).ready(function(){
    $('.stageselection button').hover(function(){
        var nameofimg = $(this).text();
        $('.container').css('background-image','url('+nameofimg+'.jpg)')
    })
    $('.select1').click(function(){
        console.log('this is clickable');
        var nameofimg = $(this).children("option:selected").val();
        $('.character1').attr('src', nameofimg+'.png')
    })
    $('.select2').click(function(){
        console.log('this is clickable');
        var nameofimg = $(this).children("option:selected").val();
        $('.character2').attr('src', nameofimg+'.png')
    })
    $('.stageselection button').click(function(){
        $('.stageselection').hide();
        console.log('this worked');
        $('.characterselection').show();   
    })

    $('button.fight').click(function(){
        $('.characterselection').hide();
    })
});