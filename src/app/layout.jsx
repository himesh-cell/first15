import '../index.css';

export const metadata = {
  title: 'First15 | University New Student Onboarding System',
  description: 'An integrated student onboarding platform solving newcomer friction with personalized checklists, interactive campus guidance, and senior buddy support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
