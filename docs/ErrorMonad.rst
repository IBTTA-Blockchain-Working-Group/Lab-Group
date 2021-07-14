Error Monad (Notes).
================================

This abstraction is often used to represent a scenario where a computation might fail. Some failures can be synchronous or some asynchronous. This document is going to cover synchronous exceptions. The discussion references this particular section from `CompCert <https://compcert.org/doc/html/compcert.common.Errors.html>`__ documentation. 

*Note: This abstraction is not yet present in scilla.*

Code snippet
~~~~~~~~~~~~~~~~~~
.. code:: ocaml

  Inductive res (A: Type) : Type :=
  | OK: A -> res A
  | Error: errmsg -> res A.

  Arguments Error [A].

The above definition models an error object as either returning an OK or an Error with an error message. In functional setting, binding this type will help create a functional chain call without the need to do a pattern match in each of the steps. An implementation, just the bind, is shown below. More details are in the attached link.

.. code:: ocaml

  Definition bind (A B: Type) (f: res A) (g: A -> res B) : res B :=
    match f with
    | OK x => g x
    | Error msg => Error msg
    end.

*Note: To help translate the above example in plain English; if there is an error in the input, then return (short-circuit), however, if the error is valid, then execute the function *g* with the value boxed inside OK (in this case x).*

The link further goes on to defining a do notation inspired by `Haskell <https://hackage.haskell.org/package/category-extras-0.52.0/docs/Control-Monad-Either.html>`__. Since the definitions are in `Coq <https://coq.inria.fr/>`__ there are associated proofs for assertions around the bind functions. 


Notes on Primitive Recursion
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The reason Coq is relevant in defining smart contract languages is because Coq supports *primitive-recursion*, which implies that the compiler can check at compile time whether the program terminates or not. This is different from programming languages such a Go, Java, Haskell where programs can be generally recursive and a compiler cannot check whether the program is correct. 

.. code:: c

  int factorial (unsigned int);
  int factorial (unsigned int n) {
    if (n == 0)
      return 1;
    else
      n * (factorial(n)) ; // bug here.
   }

For smart contracts, the above function can imply a runaway contract and can be expensive. Scilla attempts to address this through `functional programming with effects <https://github.com/Zilliqa/scilla/blob/master/docs/temporal-isola18.pdf>`__ that treats pure expressions, state manipulations and blockchain reflection differently to ensure progress and type preservation (more details in the link attached.)



Notes about CompCert
~~~~~~~~~~~~~~~~~~~~~~~~
`Compcert C <https://compcert.org/compcert-C.html>`__ is a *formally verified* compiler for the C programming language, for more details, please click on the associated link. 
