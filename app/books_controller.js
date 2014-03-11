var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  // Add a selected book to cart
  $scope.addBookToCart = function(book) {

    if ($scope.cart.indexOf(book) === -1) {
      $scope.cart.push(book);
    }
    else {
      alert("this version only supports one copy of a book in the cart.");
    }
  };

  // set default sort to book title
  $scope.bookSort = 'title';
};
