const connection = require('../../config/db');

module.exports = {
    async index(req, res) { },

    async show(req, res) { },

    async store(req, res) {
        const { originalname: file, size: size_image, filename: key_image } = req.file;
        const { nome, valor } = req.body;

        const [id] = await connection('produtos').insert({
            nome,
            valor,
            file,
            size_image,
            key_image,
            url_image: ''
        })

        return res.json({ id });
    },

    async update(req, res) { },

    async delete(req, res) { }
}