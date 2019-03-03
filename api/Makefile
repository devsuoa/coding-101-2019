.PHONY: clean build package deploy undeploy

STACK-NAME=devs-coding-101
BUCKET=devs-deploys

clean:
	rm -rf .aws-sam

build:
	sam build

package:
	aws cloudformation package \
	--template-file template.yaml \
	--output-template-file packaged.yaml \
	--s3-bucket ${BUCKET}

deploy:
	aws cloudformation deploy \
	--template-file packaged.yaml \
	--stack-name ${STACK-NAME} \
	--capabilities CAPABILITY_NAMED_IAM

undeploy:
	aws cloudformation delete-stack \
	--stack-name ${STACK-NAME}
