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
    <Header/>
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
    <Footer/>
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
