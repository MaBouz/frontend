pipeline {
    agent any 
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage ("Clean") {
            steps {
                deleteDir()
            }
        }
        stage ("Clone Repo") {
            steps {
                sh "git clone https://github.com/MaBouz/frontend.git"
            }
        }
        stage ("Generate Docker image") {
            steps {
                sh "cd frontend"
                sh "docker build -f dockerfile -t malbouz/angularapp:1.1.${env.BUILD_NUMBER} ."
            }
        }
        stage ("push Docker image") {
            steps {
                sh "docker push  malbouz/angularapp:1.1.${env.BUILD_NUMBER}"
            }
        }
    }
}
