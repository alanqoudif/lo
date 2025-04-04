// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// تحديد ما إذا كنا في بيئة الإنتاج أم لا
const isProduction = process.env.NODE_ENV === 'production'

// دالة مساعدة لجعل المتغيرات البيئية اختيارية في التطوير ومطلوبة في الإنتاج
const envString = (required = true) => {
  return required ? z.string().min(1) : z.string().min(1).optional().default('dummy_value')
}

export const serverEnv = createEnv({
  server: {
    XAI_API_KEY: envString(isProduction),
    MISTRAL_API_KEY: envString(isProduction),
    COHERE_API_KEY: envString(isProduction), 
    CEREBRAS_API_KEY: envString(isProduction),
    GROQ_API_KEY: envString(isProduction),
    E2B_API_KEY: envString(isProduction),
    ELEVENLABS_API_KEY: envString(isProduction),
    TAVILY_API_KEY: envString(isProduction),
    EXA_API_KEY: envString(isProduction),
    TMDB_API_KEY: envString(isProduction),
    YT_ENDPOINT: envString(isProduction),
    FIRECRAWL_API_KEY: envString(isProduction),
    OPENWEATHER_API_KEY: envString(isProduction),
    SANDBOX_TEMPLATE_ID: envString(isProduction),
    GOOGLE_MAPS_API_KEY: envString(isProduction),
    MAPBOX_ACCESS_TOKEN: envString(isProduction),
    TRIPADVISOR_API_KEY: envString(isProduction),
    AVIATION_STACK_API_KEY: envString(isProduction),
    CRON_SECRET: envString(isProduction),
    BLOB_READ_WRITE_TOKEN: envString(isProduction),
    MEM0_API_KEY: envString(isProduction),
    MEM0_ORG_ID: envString(isProduction),
    MEM0_PROJECT_ID: envString(isProduction),
  },
  experimental__runtimeEnv: process.env,
})
