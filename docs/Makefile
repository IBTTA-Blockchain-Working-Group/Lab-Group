#A make file for public tex document.


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
