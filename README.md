## Caching in Next.js
Next.js improves your application's performance and reduces costs by caching rendering work and data requests. This page provides an in-depth look at Next.js caching mechanisms, the APIs you can use to configure them, and how they interact with each other.
- https://nextjs.org/docs/app/building-your-application/caching

## Caching Mechanisms

| Mechanism            | What                        | Where  | Purpose                                      | Duration                          |
|----------------------|-----------------------------|--------|----------------------------------------------|-----------------------------------|
| [Request Memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)  | Return values of functions  | Server | Re-use data in a React Component tree        | Per-request lifecycle             |
| [Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache)           | Data                        | Server | Store data across user requests and deployments | Persistent (can be revalidated)   |
| [Full Route Cache](https://nextjs.org/docs/app/building-your-application/caching#full-route-cache)     | HTML and RSC payload        | Server | Reduce rendering cost and improve performance | Persistent (can be revalidated)   |
| [Router Cache](https://nextjs.org/docs/app/building-your-application/caching#client-side-router-cache)         | RSC Payload                 | Client | Reduce server requests on navigation         | User session or time-based        |

![caching-overview](https://github.com/user-attachments/assets/293a0dae-4b7c-4b62-8261-367de3ad3146)

## Getting Started

The repo contains both FE and BE apps. You can find the backend app inside the `backend` folder

- Next App
  
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


- Backend
```bash
cd backend
pnpm install
pnpm start
```
