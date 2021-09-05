import $ from 'jquery';

$(document).ready(function() {
	$("#micOnRaj").click(function() {
		$("#micOffRaj").show();
		$(this).hide();
	})
	$("#micOffRaj").click(function() {
		$("#micOnRaj").show();
		$(this).hide();
	})
	$("#videoOnRaj").click(function() {
		$("#videoOffRaj").show();
		$("#unavailableRaj").show();
		$("#videoWithRaj").hide();
		$(this).hide();
	})
	$("#videoOffRaj").click(function() {
		$("#videoOnRaj").show();
		$("#unavailableRaj").hide();
		$("#videoWithRaj").show();
		$(this).hide();
	})
});
	