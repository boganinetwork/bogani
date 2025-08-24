import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// If deploying to GitHub Pages at https://USERNAME.github.io/REPO,
// set base to '/REPO/'. In our workflow we export GH_PAGES=true,
// so the base becomes '/portfolioai/'. Adjust if your repo name differs.


const repoBase = '/bogani/'


export default defineConfig(({ mode }) => ({
plugins: [react()],
base: process.env.GH_PAGES ? repoBase : '/',
}))