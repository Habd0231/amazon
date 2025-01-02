# Step 1: Build the React application using a node image
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using an nginx image (for production)
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Command to run nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
