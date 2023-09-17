pipeline {
    agent any 
    tools {
        nodejs 'nodejs'
        maven 'maven'
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
                dir ("frontend"){
                    sh "docker build -f dockerfile -t malbouz/angularapp:1.1.${env.BUILD_NUMBER} ."        
                }
            }
        }
        stage ("pclone backend repo") {
            steps {
                sh "git clone https://github.com/MaBouz/backend.git"
            }
        }
        stage ("backend image") {
            steps {
                dir ("backend"){
                    sh "mvn clean install -DskipTests=true"
                    sh "docker build -f dockerfile -t malbouz/backend:1.1.0 ."        
                }
            }
        }
        stage ("execute docker compose") {
            steps {
                dir ("backend"){
                    sh "docker compose up -d"        
                }
            }
        }
    }
}
