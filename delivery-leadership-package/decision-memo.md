# Decision Memo: Where Premium Estimates Are Calculated (API or Client)?

**Date:** 11/17/2026
**Author:** Ajit Ranjan Sahu
**Decision area:** Architecture - Redundant logic execution

## Context

The client calculates the live premium estimate, while the API calculates the premium saved with a quote. The values have been aligned to the standardized rates. However, the calculation still exists in two places, so a future change could make the customer see two prices for the same inputs.

The decision is whether to keep instant client-side estimates or request every estimate from the API. Thursday’s merge and Friday’s showcase are close, and the required capstone work is assembly—not new application development.

## Options considered

1. **Keep client-side estimates and let the API determine the saved premium.** Pros: customers receive immediate estimates without waiting for a network request; the provided design stays intact; no additional application changes are needed for launch. Cons: rate changes must be coordinated across both systems, and duplicate calculations can drift.

2. **Request every estimate from the API before launch.** Pros: calculations and rate updates are centralized, reducing the risk of inconsistent prices. Cons: estimates become dependent on network connectivity and API availability. The Front-End Team and Platform Services Team would need to implement and test changes outside the required assembly scope, putting merge and rehearsal time at risk.

3. **Keep the current design for launch and route centralized estimation for post-launch evaluation.** Pros: preserves instant estimates and protects the launch schedule while giving the duplication a clear follow-up. Cons: the mismatch risk remains during launch and needs explicit verification and coordinated rate updates.

## Recommendation

**Option 3.** Keep client-side estimates for this launch, with the API remaining the authority for the saved premium. The Front-End Team and Platform Services Team should verify estimate-versus-save agreement and assess centralized estimation after launch.

The required auto/35/50000 check must show **$450.00** in both the estimate and newly saved row. Historical seeded premiums remain unchanged because they were quoted under older rates.

## Why

Moving every estimate to the API is a reasonable direction to evaluate, but it is not a configuration change. It introduces network-dependent behavior and requires engineering work and testing shortly before launch.

For this week, keeping the provided design is the smaller, more visible change. We accept the duplication as a documented risk, not as a permanent solution. Type-checking and API tests support release confidence, but they do not by themselves prove that the two rate tables agree; that requires an explicit comparison.

## What would change my mind

I would reconsider if the Front-End Team and Platform Services Team could deliver centralized estimation within the launch window, demonstrate acceptable response times and clear failure handling, and provide a reviewed change with both CI jobs green without displacing required verification or rehearsal.

A mismatch in a newly saved quote after rate alignment would trigger an immediate readiness review. It would require investigation and sponsor confirmation—not an unverified last-minute rewrite.
