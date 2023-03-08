CURRENT_DIR := $(shell pwd)
SHELL:=/bin/bash
PROJECT:=vpn-frontend

.PHONY build, push, push-kind, apply, template:

build:
	docker compose build

push:
	docker push ghcr.io/wednesday-vibes/vpn-frontend

push-kind:
	docker tag ${PROJECT}:latest 0.0.0.0:5001/${PROJECT}:dev
	docker push 0.0.0.0:5001/${PROJECT}:dev

apply: 
	if [ ! -f secret_vals.yaml ]; then echo "secrets: {}" > secret_vals.yaml; fi
	helm upgrade --install --namespace default --create-namespace ${PROJECT}-local ./helm/${PROJECT}-local -f secret_vals.yaml


template:
	if [ ! -f secret_vals.yaml ]; then echo "secrets: {}" > secret_vals.yaml; fi
	helm template ./helm/${PROJECT}-local -f secret_vals.yaml --debug > template.yaml

