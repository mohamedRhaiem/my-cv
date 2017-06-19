var resumeDirectives = angular.module('resumeDirectives', ['ngAnimate']);

resumeDirectives.directive('quiz',['quizFactory','$animate','$timeout', function(quizFactory,$animate,$timeout) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'partials/sections/template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
				/*	scope.options = q.options;*/
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function(boolean) {

				if(boolean == scope.answer) {
					scope.score++;
					scope.correctAns = true;
				} else {
					 scope.correctAns = false;
					$timeout(function() {
  scope.$apply(function() {
         
         $animate.addClass(elem[0].firstElementChild, 'shake').then(function() {
            $animate.removeClass(elem[0].firstElementChild, 'shake');
          });
        });
})
					
					 
					
				}

				

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
}]);

