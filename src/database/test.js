const Database = require('./db');

const saveOrphanage =require('./saveOrphanage');

Database.then(async db => {

    // await saveOrphanage(db, {
    //     lat: "-27.229000",
    //     lng: "-49.6259000",
    //     name: "bllebe",
    //     about : "blable",
    //     whatsapp: "numero tel",
    //     images: [
    //         "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "blabla",
    //     opening_hours: "blablu",
    //     open_on_weekends: 1
    // });
    //
    // const dados = await db.all("SELECT * FROM orphanages");
    // console.log(dados);

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');

   // await db.run('DELETE FROM orphanages WHERE id="3"');
   // console.log(orphanage);
});