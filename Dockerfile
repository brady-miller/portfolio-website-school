# Bare-bones nodejs docker image
FROM node:alpine

# Create the app directory
WORKDIR /usr/src/app

# Copy all the files
COPY . ./

# Start the application
CMD ["node", "index.js"]
