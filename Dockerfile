FROM node:16

# Create app directory
WORKDIR /newworld

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "start", "app.js" ]
