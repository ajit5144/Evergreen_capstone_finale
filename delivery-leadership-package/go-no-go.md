# Go / No-Go: Launch Decision

**Date / time:** Thu 16:00
**Decision:** ☒ GO — pending confirmation of the evidence below

## CI evidence

- Latest run on the merged launch commit on `main`: **Green** · link: https://github.com/ajit5144/Evergreen_capstone_finale/actions/runs/44005596776
- Reviewed and squash-merged PR: <<PR URL>>
- Workflow file: `.github/workflows/ci.yml`
- **Test the API** installs dependencies using `npm ci` and passes the seven API tests against a throwaway `mongo:7` service container.
- **Type-check and build the client** installs dependencies using `npm ci`, passes `npm run type-check`, and completes `npm run build`.
- CI does **not** prove cluster readiness, landing-link behavior, or agreement between the estimate and saved premium. Thursday’s manual verification must confirm:
  - Three API pods and one MongoDB pod are ready on the local `evergreen` cluster.
  - The API health endpoint responds through the port-forward.
  - The client loads database-backed quotes, and a saved quote survives reload.
  - Auto/35/50000 shows **$450.00** in both the estimate and newly saved premium.
  - The production preview works against the real API.
  - Both landing-page quote links open the running app.
- Manual verification result: [Record result and evidence].

## What "GO" would mean

- Proceed with Friday’s five-minute manager showcase using the verified application on `main`.
- Run the demo on the local `evergreen` kind cluster, with `kubectl port-forward svc/evergreen-quote-api 3000:80` and the client at `http://localhost:5173`.
- Keep a suitable saved quote in the cluster database and screenshot fallback immediately available.
- Confirm the required leadership package is complete and committed, the showcase is rehearsed, and presentation logistics are agreed.
- Leave the local cluster running overnight and repeat readiness checks before Friday’s showcase.
- Keep Friday independent of the shared demo environment and any gated EKS extension.

## What "NO-GO" would mean

- Hold the live-demo commitment if either CI job on `main` is red or required local verification fails.
- Route the blocker to the Front-End Team or Platform Services Team according to ownership; the Delivery Management Team coordinates the response.
- Do not introduce unreviewed application or configuration changes to preserve the demo.
- If the live stack cannot be verified in time, communicate the limitation and use screenshot fallback for the showcase. Screenshots do not count as evidence that the live stack is ready.
- **Re-evaluate at:** Friday’s 10:00 readiness check and immediately before the showcase.

## My call

**GO for Friday’s local showcase once the merged-commit CI and Thursday verification evidence above are confirmed.** Thursday’s decision is based on the release state on `main`, not only Wednesday’s delivery-branch checks.

The shared demo incident remains separately tracked with the Platform Services Team. Its supplied capture showed API crash loops and an environment-variable mismatch: `MONGO_URI` in the shared deployment where the application expects `MONGODB_URI`. Recovery must be confirmed by that environment’s owner; this decision does not assume the incident is resolved.

The MVP scope remains unchanged. Life-first landing content is included once verified, while the quote-form default change and renters coverage remain deferred for post-launch planning.

This call changes to hold or no-go if CI on `main` is red, the local cluster cannot load and persist quotes, current-rate estimates disagree with newly saved premiums, or evidence shows the shared incident also affects our local release. If only the shared environment remains unavailable and the local stack is verified, Friday’s local demo remains GO.
