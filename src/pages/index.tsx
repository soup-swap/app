import { supabase } from "./../lib/supabaseClient";
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

interface Country {
  id: string;
  name: string;
}

interface ExamplePage {
  countries: Country[];
}

function Page({ countries }: ExamplePage) {
  return (
    <>
      <Header />
      <h1>Soup Swap</h1>
      <p>
        Sign up to drop drop the swap swap!
      </p>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("countries").select();
  console.log(data);

  return {
    props: {
      countries: data,
    },
  };
}

export default Page;
