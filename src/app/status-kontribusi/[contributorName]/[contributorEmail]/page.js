import { StatusKontribusiPage } from "@/components/status-kontribusi/StatusKontribusiPage";
import { API_URL } from "@/config/apiUrl";

async function getStatusKontribusi(contributorEmail) {
  const response = await fetch(`${API_URL}/api/kontribusi?contributorEmail=${contributorEmail}`, {
    cache: 'no-store'
  });

  const {data} = await response.json();
  return data;
}

export default async function Home({params}) {
  const { contributorName, contributorEmail } = params;
  const decodedContributorName = decodeURIComponent(contributorName);
  const decodedContributorEmail = decodeURIComponent(contributorEmail);

  const statusKontribusiData = await getStatusKontribusi(decodedContributorEmail);

  return (
    <StatusKontribusiPage contributorName={decodedContributorName} decodedContributorEmail={decodedContributorEmail} statusKontribusiData={statusKontribusiData}/>
  );
}
