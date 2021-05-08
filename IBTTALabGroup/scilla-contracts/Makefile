SRC_DIR = .
# Get all source files
SRCS := $(shell find $(SRC_DIR) -name *.scilla)

all: tg

# Fix this make file.
tg : 
	scilla-checker -gaslimit 1 -libdir ${HOME}/scilla/src/stdlib TollStateGuarantee.scilla