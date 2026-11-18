# Delivery Goal: Evergreen Quote

## Goal

By Thursday EOD, deliver an Evergreen Quote experience that reads and saves quotes through the Express and MongoDB API using standardized launch rates. Run the API as evergreen-quote-api:2.0 on the local Evergreen cluster and merge the changes into main through a reviewed pull request with both CI jobs passing, ready for a five-minute manager showcase on Friday.

## "Done" looks like

- The quote page loads recent quotes from the API, and a saved quote survives a reload.
- The estimate and newly saved premium agree at the launch rates
- The static feeds, client/src/sampleQuotes.ts and client/public/quotes.json, are removed through Git.
- GraphQL is mounted, and the provided life/30/100000 mutation returns a new quote ID and a monthly premium of $700.00.
- npm test passes all seven API tests; the client’s npm run type-check and npm run build pass; both CI jobs on the merged launch commit are green.
- The containerized API serves the unchanged client, and the local cluster runs three API pods and one MongoDB pod. The API Service is port-forwarded using 3000:80, matching the client’s existing proxy.
- The production client preview loads and saves quotes through the real API.
- The client displays Evergreen Insurance - Instant Quote; the landing page carries the sponsor-approved banner, and both quote links open the app.
- The launch PR is reviewed, squash-merged into main, and the delivery branch is deleted. Quote loading, estimation, and save-and-reload are reverified on main.
- delivery-leadership-package/ is complete and committed, including the vision brief, delivery goal, risk register, decision memo, stakeholder status update, go/no-go decision, and showcase outline. The GitHub Project board is linked from the vision brief.
- The five-minute showcase is rehearsed, with a documented demo plan identifying the local database and an immediately available screenshot fallback.
## Out of scope (this week)

- Renters coverage, landing-page theme enhancements, Kubernetes scaling experiments, and the Copilot compose challenge are optional—not launch completion requirements.
- New application features, refactoring, or code authored beyond the guide’s permitted assembly and configuration changes.
- Cloud deployment as a prerequisite for Friday’s demo. The EKS extension runs only if the instructor opens the gate, and all cloud resources are removed that afternoon.
- Reliance on a shared demo cluster. Friday’s live demo uses the local evergreen kind cluster.
