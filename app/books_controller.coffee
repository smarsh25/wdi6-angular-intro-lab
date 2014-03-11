bookly = bookly or {}

bookly.bookApp = angular.module "bookApp", []

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.cart = []

  $scope.addBookToCart = (book) ->
    bookIndex = $scope.cart.indexOf book
    if bookIndex == -1
      book.quantity = 1
      $scope.cart.push book 
    else
      $scope.cart[bookIndex].quantity += 1
    return

  $scope.emptyCart = ->
     for book in $scope.cart 
      $scope.cart.pop
    return

  $scope.bookSort = 'title'

  $scope.cartTotal = ->
    sum = 0
    for book in $scope.cart
      sum += book.price * book.quantity
    return sum

  return
