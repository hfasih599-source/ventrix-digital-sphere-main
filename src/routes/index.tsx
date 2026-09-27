import { createFileRoute } from "@tanstack/react-router";
import { VentrixLanding } from "@/components/ventrix/VentrixLanding";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <VentrixLanding />;
}
