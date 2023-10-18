"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toasterConfig } from "@/lib/helpers/configs/toaster-config";
import Ship from "@/components/organisms/ship-section/Ship";
import Layout from "@/components/templates/layout/Layout";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <ToastContainer {...toasterConfig} position="top-right" />
      <Layout>
        <Ship />
      </Layout>
    </ApolloProvider>
  );
}
