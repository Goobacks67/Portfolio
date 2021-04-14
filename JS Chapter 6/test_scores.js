var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function(){
	var score = parseInt($("score").value)
	if($("name").value != "" && score >= 0 && score <= 100)
	{
		names.push($("name").value);
		scores.push(score);
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	} else {
		alert("You must enter a name and a valid score");
	}
};

var displayResults = function(){
	var sum = 0;
	var highIndex = 0;
	for(i = 0; i < scores.length; i++)
	{
		sum += scores[i];
		if(scores[i] > scores[highIndex])
		{
			highIndex = i;
		}
	}
	var results = "<h2>Results</h2>";
	results += "<p>Average score = " + sum/scores.length + "</p>";
	results += "<p>High score = " + names[highIndex] + " with a score of " + scores[highIndex] + "</p>";
	results += "<h2>Scores</h2>";
	$("results").innerHTML = results;
};
var displayScores = function(){
	var table = $("scores_table");
	table.innerHTML = "";
	var header = table.createTHead();
	var row = header.insertRow(0);
	var cell = row.insertCell(0);
	cell.innerHTML = "<b>Name</b>";
	cell = row.insertCell(1);
	cell.innerHTML = "<b>Score</b>";
	for(i = 0;i < scores.length; i++)
	{
		var row = table.insertRow(i+1);
		var cell = row.insertCell(0);
		cell.innerHTML = names[i];
		cell = row.insertCell(1);
		cell.innerHTML = scores[i];
	}
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};



