/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sy3m6kyi823xesp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "duwjqkna",
    "name": "BelongsTo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "0mvlzui4whk4ey2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sy3m6kyi823xesp")

  // remove
  collection.schema.removeField("duwjqkna")

  return dao.saveCollection(collection)
})
