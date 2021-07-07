
# Assumptions
# scilla is installed under ${HOME}/scilla/.
# 
all: tg

tg : *.scilla
	scilla-checker -gaslimit 1 -libdir ${HOME}/scilla/src/stdlib:${HOME}/ibttawg/scilla-libraries $?