import { supabase } from "./../lib/supabaseClient";

interface Country {
  id: string;
  name: string;
}

interface ExamplePage {
  countries: Country[];
}

function Page({ countries }: ExamplePage) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
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
