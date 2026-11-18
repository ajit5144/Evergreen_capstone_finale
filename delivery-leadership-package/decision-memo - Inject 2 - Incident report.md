# Decision Memo: Continue the Local Launch, Route the Shared Demo Incident

**Date:** 11/18/2026
**Author:** Delivery Management Team
**Decision area:** Incident response and launch readiness

## Context

A manager reported that the shared demo environment has displayed “Could not load recent quotes” since approximately 13:25. The Platform Services Team also reported an environment-variable naming change around the same time.

The supplied capture shows three API pods in the shared environment’s `demo` namespace repeatedly restarting with `CrashLoopBackOff`. Their logs show a refused database connection to `127.0.0.1:27017`. The MongoDB pod is Running with zero restarts, although that alone does not prove full database health.

The shared deployment supplies `MONGO_URI`, while the application expects `MONGODB_URI`. This mismatch is consistent with the API falling back to a database address inside its own pod rather than connecting to the MongoDB service. The Platform Services Team needs to confirm the cause and own recovery.

Friday’s agreed demo uses the local `evergreen` kind cluster, not the shared environment. The incident capture does not establish a failure in the local stack; local readiness and CI must be verified separately.

## Options considered

1. **Stop the launch until the shared environment recovers.** Pros: takes a cautious approach to the reported incident. Cons: treats a separate environment as a launch dependency, despite Friday’s documented local demo plan. It delays delivery without evidence that the local stack is affected.

2. **Patch the shared cluster directly and continue.** Pros: the environment-variable mismatch suggests a potentially small correction. Cons: the shared cluster belongs to the Platform Services Team. An uncoordinated change bypasses ownership, complicates recovery, and turns the delivery manager into the incident fixer.

3. **Continue the verified local launch and route shared-environment recovery.** Pros: preserves the MVP delivery plan while treating the incident as real and actively tracked. The Platform Services Team owns recovery, and launch readiness is assessed using evidence from the environment Friday actually uses. Cons: requires separate verification, clear communication, and continued incident follow-up.

## Recommendation

**Option 3.** Continue the local MVP launch, subject to verification of the local stack and the latest two-job CI run. Do not patch the shared environment or introduce its recovery changes into the launch branch without the normal review process.

Send the Platform Services Team the capture and ask them to confirm whether the rename from `MONGODB_URI` to `MONGO_URI` caused the restarts, own restoring the application’s expected configuration, and provide a recovery estimate by the Wednesday 15:30 check-in.

Send the reporting manager a separate holding message explaining that the shared demo API is failing, that the Platform Services Team is investigating, and that Friday’s planned demo uses a different local environment. Commit to another update at 15:30, even if recovery is still in progress.

Before recording a go decision, verify and link:
- Three local API pods and one MongoDB pod are Running and ready.
- The local API health endpoint responds through port-forwarding.
- The client loads quotes and successfully saves a quote that survives reload.
- Both jobs in the latest CI run are green.

Friday’s demo plan remains the `evergreen` kind cluster on the VM, `kubectl port-forward svc/evergreen-quote-api 3000:80`, and the client at `http://localhost:5173`, with screenshot fallback available. The shared incident does not, by itself, gate the merge.

## Why

A launch decision must be based on the environment being launched, not on an unrelated pod table. Green CI does not prove that the shared cluster is healthy, and a broken shared cluster does not prove that the local demo is broken.

The correct response is neither “stop everything” nor “not our problem.” It is to name the affected environment, route a specific recovery request to its owner, support the reporting manager with timed updates, and independently verify the local launch.

Keeping those responsibilities separate protects both incident recovery and the agreed delivery scope.

## What would change my mind

I would change the local launch decision to hold or no-go if local readiness checks fail, either CI job is red, quote persistence cannot be demonstrated, or evidence shows that the same configuration mismatch affects the local deployment.

I would also reassess if Friday’s demo is changed to depend on the shared environment. That would require an explicit sponsor decision and verified recovery before proceeding.

If the Platform Services Team finds a product defect rather than an environment-only configuration issue, I would request an impact assessment and reviewed correction before deciding whether the launch remains ready.
