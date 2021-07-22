import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST'){
        const TOKEN = 'e892fc0fd0780cc0f8dfde28410c17'
        const client = new SiteClient(TOKEN);
    
        const registroCriado = await client.items.create({
            itemType: "976993",
            ...request.body,
           // title: 'Comunidade Teste',
            //imageUrl: 'https://github.com/oLuizJunior.png',
            //creatorSlug: "oLuizJunior"
        })

        console.log(registroCriado);

        response.json({
            dados:'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}
