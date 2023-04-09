## Section 1: Folder Structure

### 1. Define a folder structure

- create a folder using Nextjs without src and app folder

```bash
npx create-next-app --typescript
```

import { Nunito } from "next/font/google";

- add `Nunito` font to the project using[layout](/app/layout.tsx)

```tsx
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone built with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
```
