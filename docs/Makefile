# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = ibtta-blockchain-wg
SOURCEDIR     = .
BUILDDIR      = _build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)


# Carried over from the older makefile.

tgibtta : TollGuaranteeStateIBTTA.tex
	lualatex -shell-escape TollGuaranteeStateIBTTA.tex

education : IBTTAChallenges.tex
	lualatex --shell-escape IBTTAChallenges.tex
	pdftoppm IBTTAChallenges.pdf IBTTAChallenges -png

all : tgibtta education

clean: 
	rm TransactionModel.vrb
	rm TollGuaranteeState*.out
	rm TollGuaranteeState*.aux
	rm TollGuaranteeState*.lo?
	rm TollGuaranteeState.snm
	rm TollGuaranteeState.nav
	rm TollGuaranteeState.toc
	rm TollGuaranteeState.vrb
