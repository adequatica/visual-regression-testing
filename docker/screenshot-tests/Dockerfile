FROM mcr.microsoft.com/playwright:v1.51.1

# Use a safe working directory to avoid conflicts in the root
WORKDIR /app

RUN npm install @playwright/test@1.51.1

CMD ["npx", "playwright"]
