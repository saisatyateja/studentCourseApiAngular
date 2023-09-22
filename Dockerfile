FROM  ange10k/angularcli:16
COPY . /studentCourseAngular
WORKDIR /studentCourseAngular
RUN npm install
RUN sh ./fetch_ip.sh
EXPOSE 4200
ENTRYPOINT [ "sh", "./fetch_ip.sh"  ]
