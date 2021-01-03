const HeroRepository = require('../repositories/heroRepository')
const HeroService = require('../services/heroService')

const { join } = require('path')
const fileName = join(__dirname, '../../database', 'data.json')
const generateInstance = () => {
    const heroRepository = new HeroRepository({
        file: fileName
    })
    const heroService = new HeroService({
        heroRepository
    })

    return heroService
}

module.exports = { generateInstance }