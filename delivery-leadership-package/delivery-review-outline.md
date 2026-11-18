# Program Showcase: Evergreen Quote

## Slide 1: Delivery goal & did we hit it?

- **Goal:** “Deliver the wired Evergreen Quote MVP on `main` through a reviewed PR with both CI jobs green, using standardized rates and a containerized API demonstrated on the local cluster.”
- **Hit?** ☒ Yes. The launch is merged into `main`, both CI jobs are green, and the application has been reverified after merge.
- **Scope protected:** life-first landing content included; the form-default change routed for post-launch planning; renters kept deferred.

## Slide 2: What shipped

- **Live demo from the cluster:** recent quotes load from MongoDB; an auto quote for age 35 and coverage 50000 shows a **$450.00** estimate; saving and reloading preserves the quote with the same premium.
- **Containerized delivery:** `evergreen-quote-api:2.0` runs as three API replicas behind one Service, alongside MongoDB on the local `evergreen` kind cluster.
- **One consistent connection:** `kubectl port-forward svc/evergreen-quote-api 3000:80` connects the existing client proxy to the cluster without changing the client.
- **Reviewed launch:** the PR was self-reviewed and squash-merged, and the delivery branch was deleted. The diff spans HTML, TypeScript, JavaScript, GraphQL, Docker, Kubernetes manifests, and CI.
- **Release evidence:** both CI jobs—**Test the API** and **Type-check and build the client**—are green on the merged launch commit.
- **Production verification:** the built client was previewed against the real API, and the static quote feeds were retired.

## Slide 3: Two key decisions

- **Continue as MVP; change application behavior after launch.** The life-first hero and banner support Marketing’s message without expanding application scope. The form-default change belongs to the Front-End Team, and renters requires coordinated client and API changes. Why it mattered: stakeholder priorities were acknowledged while required verification and rehearsal time were protected.
- **GO based on local evidence, not the shared incident alone.** The shared demo cluster was impaired, but Friday’s demo uses the separately verified local stack. Why it mattered: we could continue responsibly while routing the real incident to its owner and keeping the reporting manager informed.

## Slide 4: Risks & injects

- **Top risk tracked:** premium calculations exist in two places. The initial auto/35/50000 estimate was $425.00 while the API saved $450.00. Aligning client rates to auto 90, home 135, and life 70 resolved the immediate mismatch. Calculation duplication remains documented for post-launch evaluation.
- **Inject #1:** split Marketing’s request into content and application changes, preserved the MVP, deferred renters, reprioritized the board, and confirmed the local demo plan in writing.
- **Inject #2:** the shared capture showed three API pods crash-looping and database connections refused at `127.0.0.1:27017`. The deployment supplied `MONGO_URI` where the application expects `MONGODB_URI`, indicating a likely configuration mismatch for the Platform Services Team to confirm.
- **Response:** routed the evidence and a specific recovery request to the Platform Services Team; provided a separate manager holding update; assessed local readiness independently.
- **Thursday decision:** GO for Friday’s local showcase, supported by green CI on `main`, healthy local pods, API connectivity, rate agreement, and save-and-reload verification. Shared recovery remains separately owned and tracked.

## Slide 5: What three phases built

- **One journey:** a static landing page in Phase 1, a live typed React app in Phase 2, an Express service with MongoDB in Phase 3, and this week one wired, containerized, orchestrated product delivered through a reviewed PR.
- **Customer outcome:** the shopper receives an instant estimate and can save a quote that remains available after reload.
- **What I take back to work:** name the affected environment, route problems to the owning team with evidence, and ask one specific question with a response time.
- **What I would do differently:** confirm the demo environment and fallback at kickoff, and establish explicit rate-agreement checks before integration exposes drift.

## Q&A prep: likely questions

- *“It worked on your machine; why should we trust the delivery?”* The API runs from a repeatable container image, and CI installs from lock files, tests against a clean MongoDB service, and type-checks and builds the client on a separate runner. Local cluster and production-preview checks add deployment evidence. This increases confidence without claiming production readiness in every environment.
- *“Why didn’t you fix the shared pods yourself?”* The Platform Services Team owns that environment. My responsibility as Delivery Manager was to provide evidence, request recovery ownership and timing, communicate impact, and verify our launch—not apply an unauthorized patch.
- *“Why defer renters?”* It crosses the client type contract, premium tables, form, and API database validation. It needs coordinated implementation and end-to-end testing rather than a rushed client-only change.
- *“Why keep premium calculations in two places?”* Client estimates keep the MVP responsive, while the API determines the saved premium. We verified agreement for launch and recorded centralized estimation as a post-launch evaluation.
- *“What happens if the live demo fails?”* Screenshot fallback is immediately available. We will identify it clearly rather than present screenshots as proof that the live stack is healthy.

## Rehearsal & readiness

- The presentation was rehearsed Thursday afternoon within the five-minute limit.
- The local cluster remains running overnight.
- Friday’s demo uses the client at `http://localhost:5173`, connected through the API port-forward.
- A saved demonstration quote and screenshot fallback are prepared.
- Final readiness checks will be repeated before Friday’s showcase.
- The local cluster will be deleted after the showcase, and the completed product and leadership package will remain on `main`.
