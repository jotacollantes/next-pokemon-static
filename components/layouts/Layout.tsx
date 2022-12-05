import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  //children: ReactElement
  children: JSX.Element[] | JSX.Element;
  title?: string;
}
export const Layout = ({ children, title }: Props) => {
  const origin= (typeof window==='undefined'?'':window.location.origin)
  console.log(origin)
  return (
    <>
      <Head>
        {/* Si no viene title en las props se imprime 'Pokemon app' se puede hacer de 2 maneras */}
        {/* <title title={title ? title : 'Pokemon app' } /> */}
        <title title={title || "Pokemon app"} />
        <meta name="Jota" content="Jota Collantes" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es ña pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/image/banner.png`}
        />
      </Head>
      {/* navbar */}
      <Navbar />
      <main style={{ padding: "0px, 20px" }}>{children}</main>
    </>
  );
};
