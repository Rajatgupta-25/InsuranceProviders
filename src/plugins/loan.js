import $ from 'jquery';

$(document).ready(function() {
    $("#next1").click(function() {
        $(".step-1").hide();
        $(".step-2").show();
        $(".step-3").hide();
        $("#form1").hide();
        $("#form2").show();
        $("#form3").hide();
        $("#next1").hide();
        $("#next2").show();
        $("#prev1").show();
        $("#prev2").hide();
        $("#submit").hide();
        $("#colNext1").hide();
        $("#colNext2").show();
        $("#colSubmit").hide();
    })
    $("#next2").click(function() {
        $(".step-1").hide();
        $(".step-2").hide();
        $(".step-3").show();
        $("#form1").hide();
        $("#form2").hide();
        $("#form3").show();
        $("#next1").hide();
        $("#next2").hide();
        $("#prev1").hide();
        $("#prev2").show();
        $("#submit").show();
        $("#colPrev1").hide();
        $("#colNext1").hide();
        $("#colNext2").hide();
        $("#colSubmit").show();
    })
    $("#prev1").click(function() {
        $(".step-1").show();
        $(".step-2").hide();
        $(".step-3").hide();
        $("#form1").show();
        $("#form2").hide();
        $("#form3").hide();
        $("#next1").show();
        $("#next2").hide();
        $("#prev1").hide();
        $("#prev2").hide();
        $("#submit").hide();
        $("#colNext2").hide();
        $("#colSubmit").hide();
        $("#colNext1").show();
    })
    $("#prev2").click(function() {
        $(".step-1").hide();
        $(".step-2").show();
        $(".step-3").hide();
        $("#form1").hide();
        $("#form2").show();
        $("#form3").hide();
        $("#next1").hide();
        $("#next2").show();
        $("#next3").hide();
        $("#prev1").show();
        $("#prev2").hide();
        $("#submit").hide();
        $("#colPrev1").show();
        $("#colNext1").hide();
        $("#colSubmit").hide();
        $("#colNext2").show();
    })
});