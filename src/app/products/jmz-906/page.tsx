import { notFound } from "next/navigation";

// Keep the preview implementation and product assets for a future relaunch,
// while the former public product URL returns a non-indexable 404.
export default function UnpublishedJmz906Page() {
  notFound();
}
