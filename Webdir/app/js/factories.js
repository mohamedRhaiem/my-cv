var resumeFactories = angular.module('resumeFactories', []);

resumeFactories.factory('quizFactory', function() {
	var questions = [
	    {
			question: "Is tunisia in the middle east?",
			answer: false
		},
		{
			question: "China is the largest country in the world by population?",
			answer: true
		},
		{
			question: "Algeria is the country of one and a half million martyrs?",
			answer: true
		},
		{
			question: "Did the second world war end at 1945?",
			answer: true
		},
		{
			question: "Did China was the first country to issue paper currency?",
			answer: true
		},
		{
			question: "Did Atlanta hosted the 1996 Summer Olympics?",
			answer: true
		},
		{	
			question: "Did Albert Einstein invented telephone?",
			answer: false
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});