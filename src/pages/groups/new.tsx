import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabaseClient";

interface GroupFormData {
  name: string;
  description: string;
}

export default function CreateGroupPage() {
  const { register, handleSubmit } = useForm<GroupFormData>();
  const onSubmit = async (values: GroupFormData) => {
    const result = await supabase.from("groups").insert({
      group_name: values.name,
      group_description: values.description
    });

    console.log("result");
    //console.log("group name", values.name);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Group Name</label>
        <input type="text" {...register("name")} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea {...register("description")} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
