import { withAuthenticator } from "@aws-amplify/ui-react";
// Dashboard page
// Sidebar: different links for the app (reagents, quality control, expiring reagents, etc.)
// Main: Status tiles at the top of the page (needs qc, expiring reagents). Below tiles is a table 
// log of transactions of reagents
function Dashboard({ signOut, user, renderedAt }) {
    return (
      <div style={{ padding: 50 }}>
        <h1>Logged in as {user.username}.</h1>
        <div>
          <button onClick={signOut}>Sign out</button>
        </div>
        <p>This page was server-side rendered on {renderedAt}.</p>
      </div>
    );
  }
  
  export default withAuthenticator(Dashboard);
  