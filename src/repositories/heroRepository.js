const { readFile, writeFile } = require('fs/promises')

class HeroRepository {
    constructor({ file }) {
        this.file = file
    }

    async _currentFileContent() {
        return JSON.parse(await readFile(this.file))
    }

    async find(itemId) {
        const all = await this._currentFileContent()
        if(!itemId) return all
        const item = all.find(({ id }) => itemId === id)
        return item
    }

    async create(data) {
        const currentFile = await this._currentFileContent()
        currentFile.push(data)

        await writeFile(this.file, JSON.stringify(currentFile))

        return data.id
    }
}

// const heroRepository = new HeroRepository({
//     file: './../../database/data.json'
// })


// heroRepository.create({ id: 2, name: "Xuxa", age: 2000, power: "Ancient" }).then(console.log).catch(error => console.log('error', error))
// heroRepository.find(1).then(console.log).catch(error => console.log('error', error))

module.exports = HeroRepository