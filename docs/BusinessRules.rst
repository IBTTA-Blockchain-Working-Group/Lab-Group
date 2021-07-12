Business Rules for interoperability
==========================================

This section paraphrases some of the business rules for national interoperability (NIO) from an RFP document. The goal of this section is to highlight some of the aspects of the business rules and their implementations on a distributed ledger. 

  .. image:: niop_image.png


Business Rules for National Interoperability (NIOP)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The intent is not to create a sales pitch for using blockchain, rather to list the advantages and alternatives that a distributed legder provides within the context of the rules of engagement defined by various agencies.

Single Account per customer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Interoperable agencies shall establish a system that enables a customer to use one Account to pay tolls at all Nationally Interoperable Agencies without the need to take any further action regarding that account or the associated Tags or plates.

Keep information update
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  The Home Agency will make reasonable attempt to maintain up to date customer information. Each customer and their tag will be associated by a public address and that information is available for review therefore the goal of maintaining customer information is simpler to achieve.

Tags need to be certified
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  * Electronic toll collection equipment used by interoperable Agencies to read and/or write back tags shall meet the requirements of SeGo, 6C or TDM Interop protorols and be certified for use.

  * NIOP hubs, exchanging data, shall comply with all documented interoperability requirements agreed upon, including, but not limited to, these NIOP Business Rules and the ICD.

NIST Time Synchronization Source
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Each Agency shall provide time synchronization to a NIST (National Institute of Standards and Technology) time source and shall endure all components of its system are time-synchronized. A distributed ledger based solution uses a combination of UTC and internal clocks to maintain causality of events.

Home agency customer use agreements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  * Home Agency's Customer Use Agreements shall be written or revised, as necessary, to comply with and provide clarity regarding the NIOP Business Rules.

  * There may be multiple Home Agencies for NIOP Tags in operation. 

  * Any vehicle eligible for NIOP tolling must be associated with a Valid Tag.


Receipt of a valid transaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If a Home Hub receives a Valid Transaction and acknowledges the Transaction within 30 days of the transaction date, the transaction is guaranteed to be paid by the Home Agency. Even though, the underlying smart contract can map the requirement to 30 days, since these transactions are being confirmed by the blockchain, the confirmation of a valid transaction can take less than an hour.


Acknowledgment by the Home Agency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The acknowledgment by the Home Agency is based on receiving the submission and validating the submission, not by processing the transactions or data within the submission. This particular rule is based on using protocols such as FTP for ack/receipt. On a distributed ledger, this confirmation is defined by the network and the throughput of the ledger. Transaction throughput for `Zilliqa https://viewblock.io/zilliqa` is quite high and therefore confirmation of a transaction can be expected to take less than 60 minutes.


Support for non-guarantee toll transactions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Non-guarantee toll transactions as can be seen from the above business rules create a risk for the Away Agency for nearly 60 days since the date of the transactions. A blockchain transaction, being, a distributed system, is usually based on internal clock or the block number. The above rule can be better expressed in approximate numbers of blocks since the transaction and associate the risk for the respective agency.

Account requirements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
User should enter into a Customer Use Agreement that includes at least the following terms and conditions. Smart contracts and NIST 800, section 63 (a) (more about that here) provides for signing transactions to time stamp the acceptance of terms and conditions in addition to other requirements stipulated by NIOP as part of a customer use agreement. 

  * Each Home Agency‘s Customer Use Agreement shall provide that the use of a vehicle and/or tag at an Away Agency shall constitute the Customer’s acceptance of the interoperability terms.

  * The Home Agency‘s Customer Use Agreement shall also provide that an Account may be charged when a vehicle’s license plate is captured as an image while traveling on an Interoperable Agency’s facility and that license plate can be associated with the Customer’s Home Agency Account.

  * Customers shall be able to use a Valid Tag to make toll payments at all Interoperable Agency’s facilities. *This requirement can be met by using stable coins to make toll payments on the ledger.*



  * An Account may be associated with multiple Tags; one tag may be associated with multiple vehicles on an Account.



