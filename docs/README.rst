Lab-Group
=========

Introduction
------------

The `IBTTA <https://www.ibtta.org>`__ Blockchain Working Group for has
been formed under the `Emerging Technologies
Committee <https://my.ibtta.org/About-Us/Committees>`__ to understand
the impact of blockchain innovation within transportation. This group
brings together experts from various disciplines in tolling and
transportation to help outline the applicability of distributed ledgers,
smart contracts, and tokenization.

Interaction with Stakeholders
-----------------------------

We love to interact with stakeholders so that we are building our mvps
based on a real need. If you are interested in discussing a particular
aspect of Tolling and Transportation that you would like to see
addressed, please reach out to us, we will be happy to discuss and
prioritize them with you.

Definition of Minimal Viable Products (MVP) - 2021
--------------------------------------------------------

Our goal for the MVPs that we would like to develop is to cover the
following aspects of Tolling and Transportation:

::

    - Fleet management
      * A smart contract to on-board and manage fleet accounts.
    - Interoperability (IOP)
      * A contract to allow various to interact with each other through a single customer account.
    - Tolling and customer support working group's model.
      - Third Party Agreements - contracts to allow onboarding vendors with contractual rules embedded in the contract.
      - Tag Request API - contracts to reflect the tag request apis
      - Tag Disposition API (this might not be needed if the checks are in place that the tag request contract is only accessibly by the agency?) - functions within the contracts to allow for checks and balances.

We use
`Monday <https://milliganpartners.monday.com/boards/1200830450/>`__, a
public company, to capture our work. Please reach out to @kevinko102496
to be added to the board to influence our backlog and priorities.

Definition of Smart Contracts
-----------------------------

A sample contract for `Toll Guarantee
State <https://github.com/IBTTA-Blockchain-Working-Group/Lab-Group/blob/master/docs/TollGuaranteeStateIBTTA.pdf>`__ state machine that is
relevant for agencies supporting the IAG format. Agencies supporting
NIOP don't have to incur this risk attribution. We use this contract as
an opportunity to propose continuous compounding for managing risk on a
blockchain ledger (or any distributed system) where the time intervals
used in traditional finance as various parties may be spread across
various timezones.

Choice of Ledgers
-----------------

Our choice of ledger is based on some of the features listed here:

  - Sharding is built-in
  - Eco-friendly mining
  - Safe-by-design smart contract language (more about this later)

We began the effort by evaluating `Zilliqa <https://www.zilliqa.com>`__,
though we will be looking to port to other languages/ledgers if a
suitable ledger emerges.

How to participate in the group
-------------------------------

Though we use the term "lab," we consider ourselves to be a bunch of
like-minded folks who like to maintain a collegial environment to
exchange and bounce off ideas/code, etc. If you see anything you like or
don't like, please send us a note and we will be happy to discuss them
and perhaps create a user story or two to memorialize them.

Assumptions and design alternatives
-----------------------------------

The flow of applying these contracts will most likely originate from a
mobile application. The mobile application will help register a user
owning/using a tag with a tag specific contract. The request to
activation will originate from the mobile application, though, there may
be a need to put an escape hatch for suspending a tag.

We envision the following on-boarding flows - Tag owner through her(his)
mobile application. - Tag agency through a web application to list its
agency rates, and other static information. - Third party providers such
as, where their acceptance of terms and conditions is stored on the
blockchain. + Toll operators + Application developers + Service
providers

Tag registration
~~~~~~~~~~~~~~~~

The registration process will most likely tie a mobile phone to a
contract and publish an event when a new user is registered on the
blockchain. The tag activation process will most likely invoke the
appropriate tag agency contract and update its own records based on the
price list set by the agency.

Charges and price list
~~~~~~~~~~~~~~~~~~~~~~

This part of the story will most likely need to interact with a stable
coin so that the dollar value of the contract is preserved during the
term of the contract. Zilliqa has a SGDZIL stable coin, therefore forex
rate variations will need to be accounted for when converting to the
target country (default to USD).

Escape hatch
~~~~~~~~~~~~

A tag owner can request activation and renewal from her(his) wallet,
though suspending a tag is something that an agency will probably need
to have access to. The contracts need to disallow suspension and
deactivation of contracts from the mobile wallet to prevent loss of
control of the underlying asset.

* Notes: Each contract can dis-allow modifications to its internal fields based on the definition of an owner or the maximum block number before with modifications can be performed on the contract. These allow a contract to have a sense of finality and transfer assets as needed. *


IBTTA Blockchain Challenges
---------------------------------
The figure below presents an understanding of the challenges for promoting and adopting blockchain solutions within IBTTA.
  .. image:: IBTTAChallenges-1.png

Additional References
-----------------------------------

- `Temporal Properties Of Smart Contracts <https://github.com/Zilliqa/scilla/blob/master/docs/temporal-isola18.pdf>`__
- `Scilla Specificaton <https://github.com/Zilliqa/scilla/blob/master/docs/scilla-spec.pdf>`__


Team/Acknowledgments
-----------------------------------

We wish to thank these invaluable contributors and teammates:

-  Dinkar Ganti, `Conduent <https://www.conduent.com>`__
-  Kevin Ko, `Milligan Partners <https://www.milliganpartners.com>`__
-  Matt Milligan, `Milligan
   Partners <https://www.milliganpartners.com>`__
-  Devang Patel, `Kyra Solutions <https://www.kyrasolutions.com>`__
