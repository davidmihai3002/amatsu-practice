import { PageLayout } from "@/components/ui/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-3xl font-bold my-4">Dashboard</h1>
        <div className="text-muted-foreground">
          Welcome to your dashboard
        </div>
      </div>
    </PageLayout>
  );
}
