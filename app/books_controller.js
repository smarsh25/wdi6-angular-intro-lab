var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  // Add a selected book to cart
  $scope.addBookToCart = function(book) {
    $scope.cart.push(book);
  };

  // set default sort to book title
  $scope.bookSort = 'title';
};
