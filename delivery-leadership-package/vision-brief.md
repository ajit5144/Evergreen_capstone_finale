# Evergreen Quote: Vision Brief

## Product

**Name:** Evergreen Insurance - Instant Quote (the launch: full-stack delivery)
**Delivery week:** Final
**Delivery Manager:** Ajit Ranjan Sahu
**Engineering teams represented:** Marketing Site Team, Front-End Team, and Platform Services Team
**Launch repository:** https://github.com/ajit5144/Evergreen_capstone_finale
**GitHub Project board:** https://github.com/users/ajit5144/projects/6

## Who is the customer?

A first-time insurance shopper who needs a believable estimate quickly, without creating an account or making a phone call. They want to explore coverage options, save a quote, and return to compare it with another option.

Until now, the client’s saved quotes disappeared on reload. The shopper’s alternative was to keep screenshots or start again. This launch makes returning to a saved quote possible.

## What pain does Evergreen Quote remove?

The program built two useful capabilities separately: a client that estimates premiums as the shopper changes inputs, and an API that stores quotes in MongoDB.

The launch connects those capabilities. Customers receive an immediate estimate, save their chosen inputs with an API-calculated premium, and see the saved quote after reloading the page. Aligning the client and API rates also removes the confusion of seeing two prices for the same new quote.

This capstone demonstrates persistence; it does not provide private, account-based quote history.

## What does "good" look like at end of the week?

- The recent-quotes panel loads database-backed quotes rather than bundled samples, and a successfully saved quote survives a page reload.
- Client estimates and newly saved premiums agree at the standardized launch rates: auto/35/50000 reads **$450.00** in both places. Historical seeded premiums remain unchanged.
- Both CI jobs—**Test the API** and **Type-check and build the client**—are green on the merged launch commit on `main`.
- The API image `evergreen-quote-api:2.0` runs as three replicas behind one Service on the local `evergreen` kind cluster, with MongoDB running in the cluster.
- A quote saved through the browser is stored in the cluster database and remains visible after reload.
- The production client build loads and saves quotes through the real API.
- The landing page displays sponsor-approved, life-first launch content, and both quote links open the running app.
- The reviewed launch PR is squash-merged, the delivery branch is deleted, and the required leadership package is committed.
- The five-minute showcase is rehearsed, with a verified local demo plan and screenshot fallback.

## What are we explicitly NOT doing this week?

- No renters coverage in the MVP. It remains deferred for post-launch assessment because it requires coordinated changes across client and API validation.
- No independent change to the quote form’s default coverage type. The existing default remains for launch; the life-default request is routed to the Front-End Team for post-launch planning unless a reviewed exception is approved.
- No replacement of instant client estimates with network-based estimation before launch. The API remains the authority for saved premiums, and calculation duplication is tracked as a risk.
- No dependency on the shared demo environment. Its incident is tracked and routed to the Platform Services Team; Friday’s demo uses the separately verified local stack.
- No cloud dependency for Friday. Any instructor-gated sandbox EKS extension is separate from launch completion and must be torn down the same afternoon.
- No accounts, email capture, private customer history, new application features, or rate changes beyond the sponsor’s alignment instruction.

## How will we know if it worked?

- Every planned demo verification successfully loads quotes, saves a quote, and retrieves it after reload.
- Current-rate test cases show agreement between the live estimate and newly saved premium, including the required **$450.00** auto example.
- The latest launch CI evidence shows both jobs green, and local readiness checks confirm healthy pods, API connectivity, and quote persistence.
- Friday’s showcase demonstrates the delivered product within five minutes, using the local stack or clearly identified screenshot fallback.
- Managers can understand what shipped, why scope was protected, how the shared-environment incident was handled, and which delivery habit will be taken back to work.
