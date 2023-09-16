pipeline {
    agent any 
    tools {
        nodejs '14.15.4'
    }
    stages {
        stage ("Clean") {
            steps {
                deleteDir()
            }
        }
        stage ("Clone Repo") {
            steps {
                sh "https://github.com/MaBouz/frontend.git"
            }
        }
        stage ("Generate Docker image") {
            steps {
                sh "docker build -t malbouz/angularapp:1.1.${env.BUILD_NUMBER} ."
            }
        }
        stage ("push Docker image") {
            steps {
                sh "docker push  malbouz/angularapp:1.1.${env.BUILD_NUMBER}"
            }
        }
    }
}
