const db = require('./_database')

async function deleteData(){

    await db.connect()
    
    const purgeAllMan = "DELETE FROM evento_participante WHERE participante_id IN (SELECT id FROM participante WHERE id = $1)"
    await db.query(purgeAllMan, [1])


    const purgeMan = "DELETE FROM participante WHERE id = $1"
    await db.query(purgeMan, [1])

    await db.end()

    console.log("Dados Excluidos");

}

try{
    deleteData()
}
catch(error){
    console.log("Ops!");
}
