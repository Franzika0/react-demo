import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "kkcompany-aws-hkt-alb-757878951.us-east-1.elb.amazonaws.com"
    ]
  }
})
