# lostandfound/frontend/Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    git \
    wget

# Copy package files
COPY package*.json ./

# Install dependencies (skip postinstall scripts during build)
RUN npm ci --ignore-scripts

# Copy source code
COPY . .

# Run quasar prepare manually after copying the project files
RUN npx quasar prepare

# Expose port
EXPOSE 8080

# Start development server
CMD ["npm", "run", "dev"]
