'use strict'

const Model = use('Model')

class Category extends Model {
    static get table() {
        return 'category'
    }
}

module.exports = Category
