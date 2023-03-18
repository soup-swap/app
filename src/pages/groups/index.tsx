import { Group } from "@/lib/types";
import Link from "next/link";
import { FC } from "react";

export async function getServerSideProps() {
  return {
    props: {
      groups: [{ id: 1, name: "Souperheroes" }],
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
        <Link key={group.id} href={`/groups/${group.id}`}>
          <li>{group.name}</li>
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
