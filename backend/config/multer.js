const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {

    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),

    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const fileName = `${hash.toString('HEX')}-${file.originalname}`;
                cb(null, fileName);
            })
        },
    }),

    limits: {
        fileSize: 2 * 1024 * 1024
    },

    fileFilter: (req, file, cb) => {
        const tipoPermitido = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ];

        if (tipoPermitido.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo do arquivo inválido.'))
        }
    }
}