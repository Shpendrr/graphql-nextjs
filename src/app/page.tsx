"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>Next.js + Apollo Client</h1>
      </main>
    </ApolloProvider>
  );
}
