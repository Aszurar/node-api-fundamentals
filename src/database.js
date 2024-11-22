import fs from 'fs/promises'


const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor(){
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    const dataFormatted = JSON.stringify(this.#database)
    fs.writeFile(databasePath, dataFormatted)
  }

  select(table, search) {
    let data = this.#database[table] ?? []
    if(search){
      data = data.filter(row => {
        return Object.entries(search).some(([key, value]) => row[key].toLowerCase().includes(value.toLowerCase()))
      })
    }

    return data
  }

  insert(table, data) {
    // Check if table exists
    if(!this.#database[table]) {
      this.#database[table] = []
    }
    //check if data is null
    if(data) {
      const isAlreadyExistTable = Array.isArray(this.#database[table])
      // Check if already exist table, if true push data to table, if false create new table
      if(isAlreadyExistTable) {
        this.#database[table].push(data)
      } else {
        this.#database[table] = [data]
      }

      this.#persist()
    }
  }

  update(table, id, data){
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if(rowIndex > -1){
      this.#database[table][rowIndex] = {id, ...data}
      this.#persist()
    }
  }

  delete(table, id){
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if(rowIndex > -1){
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }
}