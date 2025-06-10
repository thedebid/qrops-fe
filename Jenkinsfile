pipeline {
    agent any

    tools {
        nodejs "node" // Ensure NodeJS is configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'git@github.com:thedebid/qrops-fe.git', branch: 'main',
                credentialsId: '08be4a02-d5b6-4452-b8a4-68831bae911e'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage - customize deployment here'
                // Example: copy build files to a directory for local deployment
                // sh 'cp -r build/* /path/to/deployment/directory'
            }
        }
    }

    post {
        always {
            cleanWs() // Clean workspace after build
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
