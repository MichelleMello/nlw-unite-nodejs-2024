import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from 'fastify-type-provider-zod'
import {z} from "zod";

import { generateSlug } from "./utils/generate-slug";

const app =  fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);




app.listen({port: 3333}).then(() => {
    console.log("Server is running on port 3333")
    })