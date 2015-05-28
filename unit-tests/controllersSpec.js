'use strict';

describe('Lessons Schedule Controllers', function() {
	
	describe('ListLessonsCtrl', function() {
		var scope, ctrl, $httpBackend;
		
		beforeEach(module('schedule'));
		
		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('schedule/schedule.json')
				.respond([{day: "one"}, {day: "two"}]);
			
			scope = $rootScope.$new();
			ctrl = $controller(ListLessonsCtrl, {$scope: scope});
		}));
		
		it('should create "timetables" model with 2 days schedule fetched from xhr', function() {
			expect(scope.timetables).toBeUndefined();
			$httpBackend.flush();
			
			expect(scope.timetables).toEqual([{day: "one"}, {day: "two"}]);
		});
	});
	
});