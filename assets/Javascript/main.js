// to make a array of an interval use for loop with for (i=firstnumber; i < second number; i++) {numbersarr.push(i)}
// the use array to run for loop that assigns 4 of the random values to images of crystal'=
// once values are assigned create onclick events for each crystal to add value assigned to total and display both values
// once taget value is reached then player gets you win and rest function is run,  If user goes past target number user alerted you lose and reset function is run.
// make assigning values to crystal images the reset function that will reset game and set new target number.
// crystal value 1-12 game # btwn 19 -120
$(document).ready(function () {
    var randomTargetvalarr = [];
    var randomjewelvaluearr = [];
    var randomvalforjewels = [];
    var targetVarible;
    var dispvalue = 0;
    var wins =0;
    var loses =0;
   
    function resettargetvalue() {
        dispvalue=0;
        for (i = 19; i < 120; i++) {
            randomTargetvalarr.push(i);

        }
        var targetVarible = randomTargetvalarr[Math.floor(Math.random() * randomTargetvalarr.length)];
        $('#target-text').text("Target Number: " + targetVarible);
        $('#usernumber-text').text("Your Number: " + dispvalue)
        $('#target-text').attr("value", targetVarible)
        
    }
    function resetcrystalvalue() {
        randomvalforjewels=[];
        for (j = 1; j < 12; j++) {
            randomjewelvaluearr.push(j);
        }
        for (l = 0; l < 4; l++) {
            var jewelrandval = randomjewelvaluearr[Math.floor(Math.random() * randomjewelvaluearr.length)];
            randomvalforjewels.push(jewelrandval);
            
        }
        console.log(randomvalforjewels);
        $('#jewel-1').attr("value", randomvalforjewels[0])
        $('#jewel-2').attr("value", randomvalforjewels[1])
        $('#jewel-3').attr("value", randomvalforjewels[2])
        $('#jewel-4').attr("value", randomvalforjewels[3])
    }
    function comparevals() {
        var targetVaribletext = $('#target-text').attr('value')
        var dispvaluetext = dispvalue;
        // var targetVaribletext= targetVarible;
        var dispvalueint = parseInt(dispvaluetext);
        var targetVaribleint = parseInt(targetVaribletext);
        console.log(dispvalue)
        console.log(targetVaribletext)
        if (dispvalueint === targetVaribleint){
            
            alert("YOU WON!!OMGGGGG");
            resetcrystalvalue();
            resettargetvalue();
            wins++;
            
        }
        else if (dispvalueint > targetVaribleint) {
            alert("YOU SUCK!")
            resetcrystalvalue();
            resettargetvalue();
            loses++;
            
        }
        $('#winstext').text("Wins: " + wins)
        $('#losestext').text("Loeses: " + loses)
    }

    $('#jewel-1').on('click', function() {
        var jewelsval = $('#jewel-1').attr('value');
        var jewelsvalint = parseInt(jewelsval)
        dispvalue += jewelsvalint
        $('#usernumber-text').text("Your Number: " + dispvalue)
        comparevals();
        
    })
    $('#jewel-2').on('click', function() {
        var jewelsval = $('#jewel-2').attr('value');
        var jewelsvalint = parseInt(jewelsval)
        dispvalue += jewelsvalint
        $('#usernumber-text').text("Your Number: " + dispvalue)
        comparevals();
    })
    $('#jewel-3').on('click', function() {
        var jewelsval = $('#jewel-3').attr('value');
        var jewelsvalint = parseInt(jewelsval)
        dispvalue += jewelsvalint
        $('#usernumber-text').text("Your Number: " + dispvalue)
        comparevals();
    })
    $('#jewel-4').on('click', function() {
        var jewelsval = $('#jewel-4').attr('value');
        var jewelsvalint = parseInt(jewelsval)
        dispvalue += jewelsvalint
        $('#usernumber-text').text("Your Number: " + dispvalue)
        comparevals();
    })

   
  
resettargetvalue();
resetcrystalvalue();
comparevals();

});
// end of code