<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="en" ng-app="gn1Prototype">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><spring:message code="home.title" /></title>
    <link href="prototypeRest/resources/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body ng-controller="PeopleCtrl">
      <div class="container">
          <div ng-view>
              
          </div>
            <hr>
            <p>@<spring:message code="home.copyright" /> GN1</p>
      </div>
  </body>
  <script src="prototypeRest/resources/js/jquery.js"></script>
  <script src="prototypeRest/resources/js/prototypeRest.js"></script>
  <script src="prototypeRest/resources/angularjs/angular.1.3.12.min.js"></script>
  <script src="prototypeRest/resources/angularjs/angular-route.min.js"></script>
  <script src="prototypeRest/resources/angularjs/app.js"></script>
</html>