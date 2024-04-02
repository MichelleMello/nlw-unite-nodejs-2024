import fastify from "fastify";

const app =  fastify();

//Métodos HTTP: GET, POST, PUT, DELETE,...

//Corpo da requisição (Request Body): Dados para criação ou atualização de um registro
//Parâmetros de busca (Search Params/Query Params): dados para filtros e paginação
//Parâmetros de rota (Route Params): Identificar um recurso para atualização ou deleção (ex: /users/:id)  
//Cabeçalho da requisição (Request Header): Dados sobre a requisição
//Cabeçalho (Header): Contexto

//Semânticas = Significado


//Endereço para o navegador
app.get("/", () => {
    return "Hello NLW Unite";
    });

app.listen({port: 3333}).then(() => {
    console.log("Server is running on port 3333");
    });