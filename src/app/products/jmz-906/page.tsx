import { redirect } from "next/navigation";

// JMZ-906 is temporarily unavailable. Keep the archived implementation and
// assets for a future relaunch, while directing old public links to the live
// product catalog instead of leaving visitors on a 404 page.
export default function UnpublishedJmz906Page() {
  redirect("/products");
}
