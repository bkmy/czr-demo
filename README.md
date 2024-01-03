## Notes

**CZR demo**

- This is a [Next.js](https://nextjs.org/) [TypeScript](https://github.com/microsoft/TypeScript) & [tailwindcss](https://github.com/tailwindlabs/tailwindcss) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- For pretty commits and linting I'm also using [`husky`](https://github.com/typicode/husky), [`commitlint`](https://github.com/conventional-changelog/commitlint) with `config-conventional`.

- [`zod`](https://github.com/colinhacks/zod) for TypeScript-first schema validation with static type inference.

- [`zustand`](https://github.com/pmndrs/zustand) as a state management solution.

- UI styled with [`shadcn-ui`](https://github.com/shadcn-ui/ui).

Most of the features were implemnented, while initially I had in mind to make use of server side rendering I switched project list component into client rendering for easier filtering. 

Nice to have features that I would like to add are loading states, skeletons, etc.
In case of dealing with a real API endpoint likely I would use `tanstack query` or `useswr` for handling data fetched data.

Should you have any questions - please reach out.

## TODO

- [x] Project setup (Next.js & TypeScript)
- [x] API endpoint to retrieve mocked data
- [x] Projects marketplace page
- [x] Cart summary page
- [x] Display SDGs in a single line
- [x] Filters
- [x] Manage cart
- [x] Test (Add To Cart)
- [ ] Summary


## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



