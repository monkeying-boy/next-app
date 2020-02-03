import Head from 'next/head';
import "@/assets/less/main.less";

export default ({ Component, pageProps }) => ( 
    <>  
        <Head>
            <title>我的博客</title>
            <meta name="description" content="介绍"/>
            <meta name="keywords" content="关键字"/>
        </Head>
        <Component {...pageProps} />
    </>
);
