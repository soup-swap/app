import { supabase } from "@/lib/supabaseClient";
import { Group } from "@/lib/types";
import Link from "next/link";
import { FC } from "react";

export async function getServerSideProps() {
  const result = await supabase.from("groups").select();
  return {
    props: {
      groups: result.data,
    },
  };
}

interface GroupPageProps {
  groups: Group[];
}

const GroupsList: FC<GroupPageProps> = ({ groups }) => {
  if (groups.length < 1) {
    return <div>You don&quot;t have any groups yet!</div>;
  }

  return (
    <ul>
      {groups.map((group) => (
        <Link key={group.group_id} href={`/groups/${group.group_id}`}>
          <li>{group.group_name}</li>
        </Link>
      ))}
    </ul>
  );
};

const GroupPage: FC<GroupPageProps> = ({ groups }) => {
  return (
    <div>
      <h1>My Groups</h1>
      <GroupsList groups={groups} />
      <Link href="/groups/new">Create a new group</Link>
    </div>
  );
};

export default GroupPage;
