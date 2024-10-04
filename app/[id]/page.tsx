import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

function Page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-6">
      <Link
        href={"/"}
        className="flex items-center gap-1 text-sm transition hover:bg-gray-50/25 w-fit rounded-sm p-2"
      >
        <CircleArrowLeft size={16} />
        <span>Back</span>
      </Link>
      <div className="text-3xl font-bold mb-2">Preferences</div>
      <div className="text-3xl">{params.id}</div>
    </div>
  );
}

export default Page;
