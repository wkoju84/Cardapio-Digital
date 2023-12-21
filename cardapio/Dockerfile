FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} cardapio-digital.jar
ENTRYPOINT ["java","-jar","/cardapio-digital.jar"]