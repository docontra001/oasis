import DashboardLayout from "../../components/layout/DashboardLayout";
import MainContent from "../../components/layout/MainContent";

export default function Astronomia() {
  return (
    <DashboardLayout>

      <MainContent
        titulo="🚀 Astronomia"
        endpoint="/api/feed/astronomia"
      />

    </DashboardLayout>
  );
}