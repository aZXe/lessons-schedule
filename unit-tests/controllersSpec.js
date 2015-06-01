'use strict';

describe('Lessons Schedule Controllers', function() {
	
	beforeEach(function() {
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});
	
	beforeEach(module('schedule'));
	beforeEach(module('schedule.services'));
	
	describe('ListLessonsCtrl', function() {
		var scope, ctrl, $httpBackend;
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('schedule/schedule.json')
				.respond([{day: "one"}, {day: "two"}]);
			
			scope = $rootScope.$new();
			ctrl = $controller('ListLessonsCtrl', {$scope: scope});
		}));
		
		it('should create "timetables" model with 2 days schedule fetched from xhr', function() {
			expect(scope.timetables).toEqualData([]);
			$httpBackend.flush();
			
			expect(scope.timetables).toEqualData([{day: "one"}, {day: "two"}]);
		});
	});
	
});