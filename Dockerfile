FROM  ange10k/angularcli:16
COPY . /studentCourseAngular
WORKDIR /studentCourseAngular
RUN npm install
RUN sh ./fetch_ip.sh
EXPOSE 4200
ENTRYPOINT [ "sh", "./fetch_ip.sh"]
CMD ["ng","serve","--host","0.0.0.0","--port","4200","disable-host-check","true" ]