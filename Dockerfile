# Use Node version 11
FROM node:12.13

# Set environment as 'Production'
ENV NODE_ENV production

# Project DIR
WORKDIR /usr/src/app/SERVICE_FARM

# Copy package config
COPY ["package.json", "./"]

# Install modules and move to DIR node_modules
RUN npm install && mv node_modules ../

# Copy Project files
COPY . .

# Run the project
CMD npm run prd