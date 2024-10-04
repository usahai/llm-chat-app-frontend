import { ActionIcon } from "@mantine/core";
import { Settings } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

interface PreferencesProps {
  id: string;
}

function Preferences({ id }: PreferencesProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
  }

  return (
    <Link onClick={handleClick} href={id}>
      <ActionIcon className="rounded-full p-2 hover:bg-slate-700">
        <Settings type="button" />
      </ActionIcon>
    </Link>
  );
}

export default Preferences;
