FROM node

RUN npm install -g @angular/cli

COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src"]

EXPOSE 4200

CMD ["ng", "serve", "--host=0.0.0.0"]