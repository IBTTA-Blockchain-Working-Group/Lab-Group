
KUBECONFIG_FOLDER=${PWD}/configFiles

kubectl delete -f ${KUBECONFIG_FOLDER}/chaincode_instantiate.yaml
kubectl delete -f ${KUBECONFIG_FOLDER}/chaincode_install.yaml

kubectl delete -f ${KUBECONFIG_FOLDER}/join_channel.yaml
kubectl delete -f ${KUBECONFIG_FOLDER}/create_channel.yaml

kubectl delete -f ${KUBECONFIG_FOLDER}/peers_deployment.yaml
kubectl delete -f ${KUBECONFIG_FOLDER}/blockchain_services.yaml

kubectl delete -f ${KUBECONFIG_FOLDER}/checkpvc.yaml

kubectl delete -f ${KUBECONFIG_FOLDER}/generate_artifacts.yaml
kubectl delete -f ${KUBECONFIG_FOLDER}/copy_artifacts.yaml

kubectl delete -f ${KUBECONFIG_FOLDER}/create_volume.yaml

sleep 15

echo -e "\npv:" 
kubectl get pv
echo -e "\npvc:"
kubectl get pvc
echo -e "\njobs:"
kubectl get jobs 
echo -e "\ndeployments:"
kubectl get deployments
echo -e "\nservices:"
kubectl get services
echo -e "\npods:"
kubectl get pods --show-all

echo -e "\nNetwork Deleted!!\n"

