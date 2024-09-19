---
title: "This Week in Mugraph 02"
description: 'Second issue of "This Week in Mugraph"'
date: "2024-08-15T10:00:00-03:00"
draft: false
heroImage: ""
tags: ["this-week-in-mugraph"]
---

Hello, and welcome to the first issue of _This Week in Mugraph_, an update on what is cooking, either from my side or from the community.

Being the first one, it only seems pertinent to answer the question many people have been asking: _what is Mugraph?_

## What is Mugraph?

Mugraph is an open-source eletronic cash protocol for Cardano, based on a variant of the _Chaumian Ecash_ scheme, proposed by David Chaum in his 1983 paper [_Blind Signatures for Untraceable Payments_](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF).

An ecash is a _Bearer Token_, an **obligation** from a Bank (usually called a _Mint_ in Chaumian Ecash protocols) to pay anyone holding the token a certain amount of money, or in our case, Cardano native assets.

Mugraph is fast, with instant transactions and settlement, and safeguards user privacy via _unlinkability_ and _group concealing_, meaning:

1. For transfers between any two users inside a Mint, there is no link between senders and receivers. No one knows who is transacting with whom, not even the Mint itself.
2. For transfers between users on different mints (or when one of the user is not inside a Mint), the Mint signs the transaction on behalf of the user, so all users share the same identity.

Anyone can become a Mint, be it applications, or even full-blown banks. There are some "guarantees" we need to make it work in a digital setting.

1. It must be verifiable, to avoid counterfeit notes being accepted by users.
2. It must never be double-spent. For physical cash, that is a given, but information does not disappear once sent to someone else.

Chaum (and most other implementations, like [Cashu](https://cashu.space)) use a model called _Blind Signatures_, where the Mint signs a **blinded** message, and it can then be unblinded by the user. When unblinded, the mint knows the signature is valid, without knowing what data they originally signed to generate it.

The Mint remembers all ecashes they have redeemed, to prevent double-spending.

There are two drawbacks to this approach that we aim to cover:

- While ecashes are blindly signed, they still leak information regarding their asset and amount. This is not a deal-breaker in any way, and Mugraph accepts this mode of operation as well, but it is still more succeptible to data analysis, specially in the age of LLMs.
- There is close to no programmability, which would allow for much more powerful applications.

Mugraph solves these problems with the use of Zero-Knowledge Proofs, which allow some very nice properties:

- Unlike Ecashes, assets in Mugraph (called _Mus_) can be split and joined off-line, through the use of [ZK-SNARKS](https://z.cash/learn/what-are-zk-snarks/). This process also allows us to hide any information about what is being transacted, while the Mint can still be sure that all notes it is receiving is valid.
- Mus can themselves have **Programs**, arbitrary computations on **Datums** to allow this Mu to be spent, using the [Risc0 VM](https://risczero.com).

The goal is: we want to make Cardano the best chain for real-world payments, with no close second.

## Where we are now?

### Catalyst Round 12

Mugraph was chosen in the Round 12 of Catalyst, and as [I posted before on X](https://x.com/cfcosta_/status/1819732971664134461), I would like to thank you from the bottom of my heart to everyone taht voted.

### v0.1

While the Catalyst project proper starts in September, I have already started working on the v0.1 of the protocol. This is not at all something that will be ready for production, but it means that everyone will be invited to start developing solutions using it.

All the small pieces are already in place, so I have been focusing on properly testing and specifying all types. Can't promise a date yet, but I'm aiming for a public release in the middle of September 2024.

### Next Steps

After v0.1, I'm going to release the Mugraph whitepaper, which will explain the whole protocol (hopefully with a runnable spec) for clients and wallets to implement.

The work for this has already been started, with [mugraph-simulator](https://github.com/mugraph-payments/mugraph/tree/main/simulator) for deterministic simulation of clients and servers.

This is it for this week! See you guys next Wednesday. And if you have any questions, or want to follow the project:

- [Hit me up on X!](https://x.com/cfcosta_)!
- [Join Our Discord](https://discord.gg/RPS8RgfWna)
- [See the code](https://github.com/mugraph-payments/mugraph)
