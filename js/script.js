$('document').ready(function() {
	$('#readData1').load('data/data.txt');
	$.getJSON('data/data.json', successData);
});
function successData(output) {
	$.each(output.dataExamples, function(i, item) {
		var nameDiv = $("<div class='name'>");
		nameDiv.append(item.name);
		nameDiv.append(item.bio);
		$('#readData2').append(nameDiv);
	});
}