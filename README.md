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
