const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');


module.exports = {
    index(req, res) {
        return res.render('index')
    },
    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },
    async orphanage(req, res) {
        const id = req.query.id;
        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            let orphanage =results[0];

            orphanage.images = orphanage.images.split(',');
            orphanage.firstImage = orphanage.images[0];

            if(orphanage.open_on_weekends === "0") {
                orphanage.open_on_weekends = false;
            }

            return res.render('orphanage', {orphanage})

        }catch (error) {
            return res.send('Erro no banco de dados!' + error);
        }
    },
    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return res.render('orphanages',{orphanages});
        }catch (error) {
            return res.send('Erro no banco de dados!' + error);
        }
    },
    async saveOrphanage(req, res) {
        const fields = req.body;

        //valida se todos os campos estão preenchidos
        if(Object.values(fields).includes('')) {
            return res.send('Todosos campos devem ser preenchidos!')
        }
        try {
            //salvar um orfanato
            const db = await Database;
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            return res.redirect('/orphanages');
        }catch (error) {
            return res.send('Erro no banco de dados' +error)
        }



    }
}