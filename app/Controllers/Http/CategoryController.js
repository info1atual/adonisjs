'use strict'

const Category = use('App/Models/Category')

class CategoryController {
    constructor() {
        this.data = {}
    }

    * index(request, response) {
        let categories = yield Category.query()
            .orderBy('name')
            .fetch()
        console.log(categories)
        this.data.categories = categories.toJSON()

        yield response.sendView('categorylisting', this.data)
    }

    async create({ view }) {
        return view.render('categoryform', this.data)
    }

    * show(request, response) {
        let category = yield Category.find(request.param('id'))
        this.data.category = category.toJSON()

        yield response.sendView('categoryform', this.data)
    }

    * store(request, response) {
        let category = new Category()
        category.fill(request.input('category'))

        if (yield category.validate()) {
            yield category.save()
            this.data.messages = { info: 'Category saved' }
            yield this.create(request, response)
            //
        } else {
            this.data.category = category.toJSON()
            this.data.messages = { error: category.errors }

            yield response.sendView('categoryform', this.data)
        }
    }

    * update(request, response) {
        let category = yield Category.find(request.param('id'))
        category.fill(request.input('category'))

        if (yield category.validate()) {
            yield category.save()
            this.data.messages = { info: 'Category saved' }
            yield this.index(request, response)
            //
        } else {
            this.data.category = category.toJSON()
            this.data.messages = { error: category.errors }

            yield response.sendView('categoryform', this.data)
        }
    }

    * destroy(request, response) {
        let category = yield Category.find(request.param('id'))
        if (yield category.delete()) {
            this.data.messages = { info: 'Category deleted' }
        }

        yield this.index(request, response)
    }

}

module.exports = CategoryController
