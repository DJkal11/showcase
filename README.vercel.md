Deploying locally to Vercel (no GitHub repo)

1. Install the Vercel CLI (if not installed):

   npm i -g vercel

2. Build the project locally:

   npm run build

   The Vite build outputs to `dist/` by default.

3. Log in to Vercel from the CLI (opens browser):

   vercel login

4. From the project root run:

   vercel --prod

   The CLI will detect `vercel.json` and use `dist/` as the static build output.

Notes
- The included `vercel.json` config instructs Vercel to use the static-build adapter and treat `dist/` as the publish directory.
- If you prefer to connect a Git provider, you can also import the project in the Vercel dashboard.
