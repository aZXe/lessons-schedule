'use strict';

//function ListLessonsCtrl($scope) {
angular.module('schedule', [])
.controller('ListLessonsCtrl', function($scope) {
	$scope.schedule = [
		{
			day: {date: '12.01.2015', dow: 'понедельник'},
			lessons: [
				{time: '9.45 – 12.35', title: 'ФАН', teacher: 'Чесалин В.И.', room: '351'},          
				{time: '16.00 – 18.50', title: 'С/К (инф)', teacher: 'Блинов И.Н.', room: '419'}          
			]
		},
		{
			day: {date: '13.01.2015', dow: 'вторник'},
			lessons: [
				{time: '9.45 – 12.35', title: 'ФАН', teacher: 'Чесалин В.И.', room: '351'},          
				{time: '13.00 - 15.50', title: 'Основы предпр. деятельности', teacher: 'Пытко Д.О.', room: '351'},          
				{time: '16.00 – 18.50', title: 'С/К (инф)', teacher: 'Блинов И.Н.', room: '433'}          
			]
		}
	];
});