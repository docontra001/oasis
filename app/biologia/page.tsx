import DashboardLayout from "../../components/layout/DashboardLayout";
import MainContent from "../../components/layout/MainContent";

export default function Biologia() {
  return (
    <DashboardLayout>

      <MainContent
        titulo="🧬 Biologia"
        endpoint="/api/feed/biologia"
      />

    </DashboardLayout>
  );
}