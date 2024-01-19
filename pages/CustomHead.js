// components/CustomHead.js
import Head from 'next/head';
import { useRouter } from "next/router";
const url = 'https://digitalconnexion.com';
const CustomHead = ({ title, description, og_title, og_description, schema_tag, organizationSchema }) => {
  const canonical_url = useRouter().pathname;  
  return (  
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${url}${canonical_url}`} />
      <meta property="og:title" content={og_title} />
      <meta property="og:description" content={og_description} />

      {schema_tag && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema_tag }} />}
      
      {organizationSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }} />}
    </Head>
  )
};

export default CustomHead;
