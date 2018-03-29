'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Route.on('/').render('welcome')
Route.on('/').render('app')

Route.get('/category', 'CategoryController.create')
Route.get('/category/create', 'CategoryController.create')
Route.get('/product/create', 'ProductController')

// Route.resource('/category', 'CategoryController')
// Route.resource('/product', 'ProductController')