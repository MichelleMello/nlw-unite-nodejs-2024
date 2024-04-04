import fastify from "fastify";
import {z} from "zod";
import {PrismaClient} from '@prisma/client';

const app =  fastify();

const prisma = new PrismaClient({
    log: ["query"],
});


//Métodos HTTP: GET, POST, PUT, DELETE,...

//Corpo da requisição (Request Body): Dados para criação ou atualização de um registro
//Parâmetros de busca (Search Params/Query Params): dados para filtros e paginação
//Parâmetros de rota (Route Params): Identificar um recurso para atualização ou deleção (ex: /users/:id)  
//Cabeçalho da requisição (Request Header): Dados sobre a requisição
//Cabeçalho (Header): Contexto

//Semânticas = Significado

//Driver nativo/Query builder/ORM

//Object Relational Mapping (ORM) (Hibernate / Doctrine / ActiveRecord)


//Criar um evento
app.post("/events", async (request, reply) => {
    const createEventSchema = z.object({
        title: z.string().min(4),
        details: z.string().nullable(),
        maximumAttendees: z.number().int().positive().nullable(),
    })

    const data = createEventSchema.parse(request.body)

   const event = await prisma.event.create({
    data: {
        title: data.title,
        details: data.details,
        maximumAttendees: data.maximumAttendees,
        slug: data.title.toLowerCase().replace(" ", "-"),
        },
    })

        return {eventId: event.id};
})

app.listen({port: 3333}).then(() => {
    console.log("Server is running on port 3333")
    })