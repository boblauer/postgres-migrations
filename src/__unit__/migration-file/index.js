const test = require("ava")
const migrationFile = require("../../migration-file")

test("Hashes of JS files should be the same when the SQL is the same", async t => {
  const [js1, js2] = await Promise.all([
    migrationFile.load(__dirname + "/fixtures/different-js-same-sql-1/1_js.js"),
    migrationFile.load(__dirname + "/fixtures/different-js-same-sql-2/1_js.js"),
  ])

  console.log(js1, js2)

  t.is(js1.hash, js2.hash)
})

test("Hashes of JS files should be different when the SQL is different", async t => {
  const [js1, js2] = await Promise.all([
    migrationFile.load(__dirname + "/fixtures/same-js-different-sql-1/1_js.js"),
    migrationFile.load(__dirname + "/fixtures/same-js-different-sql-2/1_js.js"),
  ])

  console.log(js1, js2)

  t.not(js1.hash, js2.hash)
})