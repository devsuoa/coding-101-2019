.PHONY: clean deps local package deploy undeploy

STACK-NAME=devs-coding-101
BUCKET=devs-deploys
ITEMS=tweets-get sentiment-post

clean:
	rm -rf .aws-sam 
	for ITEM in ${ITMES}; do \
		rm -rf $$ITEM/node_modules; \
	done

deps:
	for ITEM in ${ITEMS}; do \
		cd $$ITEM; \
		npm install --only=prod; \
		cd ..; \
	done

local: clean deps
	sam local start-api
		
package: clean deps
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
