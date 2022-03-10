import { useRouter } from 'next/router'
import Leanplum from 'leanplum-sdk'

export default function Start() {
  const TWO_HOURS = 2 * 60 * 60;
  const router = useRouter()

  // TODO: us keys from Leanplum app settings page
  Leanplum.setAppIdForProductionMode('app_...', 'prod_...');
  Leanplum.useSessionLength(TWO_HOURS);
  Leanplum.enableRichInAppMessages(true);
  Leanplum.start();

  console.log(`tracking event "Page Viewed" with parameter "page" = "${router.pathname}"`);
  Leanplum.track('Page Viewed', { page: router.pathname });

  window.Leanplum = Leanplum;

  return null;
}
