var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: convert.
*/

unitConverter.controller('UnitConverterController', 
[
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.volumeValue = 0;
		
		ucc.metric_volume_units=
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metric"
			},
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metric"
			},
			
		];
		
		function volumeUpdated(){
			console.log(ucc.volumeValue);
		}
		
		ucc.lengthValue = 0;
		
		ucc.metric_length_units=
		[
			{
				unit_name: "Millimetre",
				unit_code: "mm",
				type: "metric"
			},
			{
				unit_name: "Centimeter",
				unit_code: "cm",
				type: "metric"
			},
			{
				unit_name: "Metre",
				unit_code: "m",
				type: "metric"
			},
			{
				unit_name: "Kilometre",
				unit_code: "km",
				type: "metric"
			},
		];
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		
		ucc.weightValue = 0;
		
		ucc.metric_weight_units=
		[
			{
				unit_name: "Milligram",
				unit_code: "mg",
				type: "metric"
			},
			{
				unit_name: "Gram",
				unit_code: "g",
				type: "metric"
			},
			{
				unit_name: "Kilogram",
				unit_code: "kg",
				type: "metric"
			},
			{
				unit_name: "Tonne",
				unit_code: "t",
				type: "metric"
			},
		];
		
		function weightUpdated(){
			console.log(ucc.weightValue);
		}
		
		ucc.imperial_volume_units=
		[
			{
				unit_name: "Cubic Inches",
				unit_code: "in3",
				type: "metric"
			},
			{
				unit_name: "Cubic Feet",
				unit_code: "ft3",
				type: "metric"
			},
			{
				unit_name: "Fluid Ounces",
				unit_code: "fl oz",
				type: "metric"
			},
			{
				unit_name: "Pints",
				unit_code: "pt",
				type: "metric"
			},
			{
				unit_name: "Gallons",
				unit_code: "gal",
				type: "metric"
			},
			{
				unit_name: "US Fluid Ounces",
				unit_code: "US fl oz",
				type: "metric"
			},
			{
				unit_name: "US Pints",
				unit_code: "US pt",
				type: "metric"
			},
			{
				unit_name: "US Gallons",
				unit_code: "US gal",
				type: "metric"
			},
		];
			
		$scope.$watch('ucc.lengthValue', lengthUpdated());
		$scope.$watch('ucc.volumeValue', volumeUpdated());
		$scope.$watch('ucc.weightValue', weightUpdated);
		
		ucc.selected_metric_volume_units = ucc.metric_volume_units[0];
		ucc.selected_metric_length_units = ucc.metric_length_units[0];
		ucc.selected_metric_weight_units = ucc.metric_weight_units[0];
		
		//behaviors
		
		ucc.showSelectedVolumeUnit = function(){
			console.log(ucc.selected_metric_volume_unit.unit_name);
		};
		
		ucc.showSelectedWeightUnit = function(){
			console.log(ucc.selected_metric_weight_unit.unit_name);
		};
		
		ucc.showSelectedLengthUnit = function(){
			console.log(ucc.selected_metric_length_unit.unit_name);
		};
		
	}
]);
