



$('#metodo').change(function(){
    var valorCambiado =$(this).val();
    if((valorCambiado == '2')||(valorCambiado == '3')){
       $('#div1').css('display','block');
     }
     else if(valorCambiado == '1')
     {
        $('#div1').css('display','none');
     }
});