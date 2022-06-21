import { ReactNode } from "react";
import Header from "../Headers";
import Footer from "../Footer";
import styles from "../Layout/Layout.module.css"
import Head from "next/head"

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children,pageTitle } = props;
    return (
        <>
        <Head>
            <title>
                Basic NextJS | 
                {''}
                {pageTitle}
            </title>
            <meta name="description" content="Website Basic NextJS"></meta>
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    );   
}