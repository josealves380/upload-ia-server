import { fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPromptRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTrancriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-complete'

const app = fastify()

app.register(fastifyCors,{
  origin: '*'
})

app.register(getAllPromptRoute)
app.register(uploadVideoRoute)
app.register(createTrancriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP server running on port 3333')
})