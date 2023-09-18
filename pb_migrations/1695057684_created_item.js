/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sy3m6kyi823xesp",
    "created": "2023-09-18 17:21:24.224Z",
    "updated": "2023-09-18 17:21:24.224Z",
    "name": "item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8tramgph",
        "name": "Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sy3m6kyi823xesp");

  return dao.deleteCollection(collection);
})
