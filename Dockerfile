FROM  ange10k/angularcli:16
COPY . /studentCourseAngular
WORKDIR /studentCourseAngular
EXPOSE 4200
ENTRYPOINT [ "ng" ]
CMD [ "serve" ]