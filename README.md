# LLM Chat App

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- NextJS
- MantineUI
- Tanstack Query
- TailwindCSS

## Things to note

- Tentatively, the data is mocked. This can be updated once the structure from the backend is known
- TailwindCSS clashes with the native styling of MantineUI. Although the advised workaround to get them compatible has been implemented, some components inherently do not work well with this.

## Chat side

- Left and right are determined randomly
- User inputs will not show up because then a client-side state management tool will have to be installed to manage the data client-side. Instead, a fully-functioning app will sync the data state with the backend through `@tanstack/react-query`. All the hooks are present to make this app function in a go-live environment.
