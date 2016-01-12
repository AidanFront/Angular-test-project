(function() {
  
  var app = angular.module("homepass", ["ngMaterial", "homepass.countryCodes"]);
  
  var MainController = function($scope, countryCodes) {
    
      //Set ctrl variables   
      $scope.ctrl = {            
        correctMobileNumber: "411789776",
        correctVerificationNumber: "5502",
        country_codes: countryCodes
      };
      //Set default country to Australia   
      $scope.ctrl.selectedCountry = 13;
    
      //Check if mobile number is valid   
      $scope.search = function(inputMobileNumber) {
          inputMobileNumber = inputMobileNumber.replace(/\s/g, '');
          if ((inputMobileNumber == $scope.ctrl.correctMobileNumber || inputMobileNumber == ("0" + $scope.ctrl.correctMobileNumber) ) && $scope.ctrl.selectedCountry == 13) {
               $scope.ctrl.verified = true;
          } else {
              alert("Number is invalid - there is no account for this number (Note correct country code must be selected)" );
          };
      };
      
      //Check if verification code is valid   
      $scope.verification_code = function(inputVerificationNumber) {
          if (inputVerificationNumber == $scope.ctrl.correctVerificationNumber) {
              alert("Code Accepted");
          } else {
              alert("Verification code is invalid");
          };
      }; 
      $scope.resend_code = function() {
          alert("Verification code re-sent to number")
      }     
  };
  
  app.controller("Main_Controller", ["$scope", "countryCodes", MainController]);
  
}());
