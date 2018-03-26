'use strict'

const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 50)
      table.decimal('price')
      table.integer('category_id').unsigned()
      table.foreign('category_id').references('product.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
