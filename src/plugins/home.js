import $ from 'jquery';

$(document).ready(function() {
    $("#investment").click(function() {
        $("#showInvestment").show();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#loans").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").show();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#investMore").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").show();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#offers").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").show();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#inTouch").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").show();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#advices").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").show();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#plans").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").show();
        $("#homeCon").hide();
        $("#back").show();
    })
    $("#investMoreBtn").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").show();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").hide();
        $("#back").show();     
    })
    $("#back").click(function() {
        $("#showInvestment").hide();
        $("#showLoan").hide();
        $("#showInvestMore").hide();
        $("#showOffers").hide();
        $("#showGetInTouch").hide();
        $("#showAdvices").hide();
        $("#showPlans").hide();
        $("#homeCon").show();
        $("#back").hide();
    })
});