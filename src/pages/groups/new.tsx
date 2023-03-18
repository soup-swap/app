import { useForm } from "react-hook-form";

interface GroupFormData {
  name: string;
  description: string;
}

export default function CreateGroupPage() {
  const { register, handleSubmit } = useForm<GroupFormData>();
  const onSubmit = (values: GroupFormData) => {
    console.log("group values", values);
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
