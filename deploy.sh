
sudo docker build -f "Dockerfile" -t yopiragil/react-tutorial:$TRAVIS_BUILD_NUMBER .
sudo docker push yopiragil/react-tutorial:$TRAVIS_BUILD_NUMBER

echo $GCLOUD_SERVICE_KEY_PRD | base64 --decode > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud container clusters get-credentials $CLUSTER_NAME_PRD --region $CLOUDSDK_COMPUTE_REGION --project $PROJECT_NAME_PRD

kubectl config view
kubectl config current-context

 ## deploy api server
kubectl -n alta14 set image deployment/reak reak=yopiragil/react-tutorial:$TRAVIS_BUILD_NUMBER
