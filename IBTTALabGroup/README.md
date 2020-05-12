# Prerequisites
1. Download the required programs to run hyperledger fabric. Visit http://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html and mmake sure to install the appropriate versions for your OS.
2. Install the Google Cloud SDK. Follow the steps in this link https://cloud.google.com/sdk/docs/quickstarts.
3. Use the newly installed gcloud commands to install kubectl here: https://kubernetes.io/docs/tasks/tools/install-kubectl/.
# Steps
1. Create a Google Cloud Platform account.
2. Create a project so you can run containers and configure clusters.
3. Set up a cluster on Kubernetes, under "Kubernetes Engine". IMPORTANT!!! Make the cluster with only 1 node, and DO NOT autoscale!
4. Connect to the cluster via terminal with the command obtained by clicking "Connect", to the right of the cluster name. This will let you gain access to your cluster.
# Create and deploy network in the single-node Kubernetes cluster
1. Clone the network files into your intended directory.
2. Change directory into MPnetwork (cd MPnetwork), and then (ls). You should bee configFiles, artifacts, test_setup_blockchainNetwork.sh, and testDeleteNetwork.sh.
3. Ensure that you enable permissions for the scripts to run. Run commands: $ chmod +x test_setup_blockchainNetwork.sh || $ chmod +x testDeleteNetwork.sh
4. Deploy the network with the command $ test_setup_blockchainNetwork.sh
