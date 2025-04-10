set -ex

if [ -t 0 ] ; then
    ARGS="-i"
else
    ARGS=""
fi

docker run ${ARGS} --rm \
  -p 9323:9323 \
  -v "$PWD/tests/:/app/tests" \
  -v "$PWD/playwright.screenshot.config.ts:/app/playwright.screenshot.config.ts" \
  -v "$PWD/playwright-report/:/app/playwright-report" \
  -e "CI=${CI}" \
  --add-host=host.docker.internal:host-gateway \
  -t playwright-screenshot-tests \
  npx -y playwright "$@"
