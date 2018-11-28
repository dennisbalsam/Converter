
jQuery(document).ready(function(){
    $('#inches-to-centimeters').on('submit', function(evt){
        evt.preventDefault();
        var $inches = $('#inchesinput');
        var inches = $inches.val();
        console.log(inches);
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            var centimetersInInch = result.data.centimetersInInch;
            console.log(result.data.centimetersInInch)
            console.log(result);
            var centimeters = parseFloat(inches * centimetersInInch);
            centimetersrounded = centimeters.toFixed(2);
            console.log(centimetersrounded);
            $("#centimeters").html(centimetersrounded);
            
        });


    });
});


jQuery(document).ready(function(){
    $('#centimeters-to-inches').on('submit', function(evt){
        evt.preventDefault();
        var $centimeters = $('#centimetersinput');
        var centimeters= $centimeters.val();
        console.log(centimeters);
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            var centimetersInInch = result.data.centimetersInInch;
            console.log(result.data.centimetersInInch)
            console.log(result);
            var inches = parseFloat(centimeters / centimetersInInch);
            inchesrounded = inches.toFixed(4);
            console.log(inchesrounded);
            $("#inches").html(inchesrounded);
            
        });


    });
});