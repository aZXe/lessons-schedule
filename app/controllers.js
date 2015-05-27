'use strict';

//function ListLessonsCtrl($scope) {
angular.module('schedule', [])
.controller('ListLessonsCtrl', function($scope) {
	$scope.schedule = [
		{
			day: {date: '12.01.2015', dow: '�����������'},
			lessons: [
				{time: '9.45 � 12.35', title: '���', teacher: '������� �.�.', room: '351'},          
				{time: '16.00 � 18.50', title: '�/� (���)', teacher: '������ �.�.', room: '419'}          
			]
		},
		{
			day: {date: '13.01.2015', dow: '�������'},
			lessons: [
				{time: '9.45 � 12.35', title: '���', teacher: '������� �.�.', room: '351'},          
				{time: '13.00 - 15.50', title: '������ ������. ������������', teacher: '����� �.�.', room: '351'},          
				{time: '16.00 � 18.50', title: '�/� (���)', teacher: '������ �.�.', room: '433'}          
			]
		}
	];
});