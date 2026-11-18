# Decision Memo: Protect the MVP and Schedule Changes After Launch

**Date:** 11/17/2026
**Author:** Delivery Management Team
**Decision area:** Launch-week scope tradeoff

## Context

Marketing requested a life-first launch experience: update the landing hero and banner, change the quote form’s default coverage from auto to life, and consider adding renters coverage.

The Platform Services Team also confirmed that no shared cloud window is available and requested a written local demo plan by EOD.

The delivery goal remains unchanged: connect the client to the API, containerize the service, demonstrate the product on the local cluster, and merge with both CI jobs green. We need to respond to Marketing without putting the minimum viable product (MVP) or launch readiness at risk.

## Options considered

1. **Include all requested changes before launch.** Pros: delivers the complete experience Marketing requested. Cons: the form-default change requires Front-End Team review, and renters requires coordinated changes across five files, two languages, and two validation systems. This reduces time available for verification and rehearsal.

2. **Continue with the current MVP and make all changes after launch.** Pros: protects the agreed scope and avoids additional changes before release. Cons: delays even the bounded landing-page content updates that could support Marketing’s life-first message without changing application behavior.

3. **Continue as MVP, update launch content, and change application behavior after launch.** Pros: supports the life-first message through the landing hero and banner while preserving the verified application scope. The form default and renters coverage can be assessed and delivered by their owning teams after launch. Cons: the launch will promote life coverage while the quote form still defaults to auto, and renters will remain unavailable.

## Recommendation

**Option 3.** Continue with the MVP for this launch. Approve the life-first landing hero and banner updates after Marketing confirms the wording, requested by Wednesday 10:30.

Keep the quote form’s existing default for Friday. Route the life-default request to the Front-End Team for the first post-launch planning window. Keep renters deferred and record it as a post-launch backlog candidate requiring joint assessment by the Front-End Team and Platform Services Team. Backlog placement does not constitute a committed delivery date.

Reprioritize the board to separate required launch work from post-launch enhancements.

By Tuesday EOD, confirm the local demo plan in writing: the `evergreen` kind cluster runs on the VM, the API is exposed through `kubectl port-forward svc/evergreen-quote-api 3000:80`, and the wired client is shown at `http://localhost:5173`. Verify a demonstration quote in the cluster database and prepare screenshot fallback. Friday’s demo will not depend on cloud infrastructure.

## Why

The MVP already has a clear delivery goal and verification path. Preserving that scope gives the team time to prove quote persistence, rate agreement, cluster operation, and green CI before the showcase.

Landing content can communicate the life-first message without changing the quote calculation or saving behavior. The form default is application code owned by the Front-End Team, while renters spans both client and API contracts. Those changes deserve coordinated review rather than rushed inclusion.

This decision is not a rejection of Marketing’s requests. It separates what can safely support this launch from what should be planned and delivered after it.

## What would change my mind

I would revisit the form-default deferral if the sponsor identifies it as essential to MVP acceptance and the Front-End Team provides a reviewed, verified change with both CI jobs green, without delaying launch checks or rehearsal.

Renters would require a separate scope decision, coordinated implementation, and end-to-end verification before being assigned a delivery date.

If the local demo environment fails readiness checks, I would reassess go/no-go and activate screenshot fallback if unresolved. I would not introduce a cloud dependency to preserve the appearance of readiness.
