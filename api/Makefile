.PHONY: clean deps local package deploy undeploy

STACK-NAME=devs-coding-101
BUCKET=devs-deploys
ITEMS=tweets-get sentiment-post
include secrets.env

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
	sam local start-api \
	--parameter-overrides \
	"ParameterKey=twitterApiKey,ParameterValue=${TWITTER_API_KEY} \
	ParameterKey=twitterSecretKey,ParameterValue=${TWITTER_SECRET_KEY}"
		
package: clean deps
	aws cloudformation package \
	--template-file template.yaml \
	--output-template-file packaged.yaml \
	--s3-bucket ${BUCKET}

deploy:
	aws cloudformation deploy \
	--template-file packaged.yaml \
	--stack-name ${STACK-NAME} \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameter-overrides \
	twitterApiKey=${TWITTER_API_KEY} \
	twitterSecretKey=${TWITTER_SECRET_KEY}

undeploy:
	aws cloudformation delete-stack \
	--stack-name ${STACK-NAME}
